"use client";
import { publishPost } from "@/actions";
import { Button, TextArea } from "@radix-ui/themes";
import { CloudUpload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function CreatePostPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handlePublishPost(imageUrl: string, description: string) {
    publishPost(imageUrl, description).then((postId) => {
      router.push(`/posts/${postId}`);
    });
  }

  useEffect(() => {
    if (!file) return;
    const data = new FormData();
    data.set("file", file as File);
    fetch("/api/upload", {
      method: "POST",
      body: data,
    }).then((respone) => {
      respone.json().then((url) => {
        setImageUrl(url);
      });
    });
  }, [file]);

  return (
    <div>
      <div className="flex gap-4 min-h-screen">
        <div className="h-full">
          {!imageUrl ? (
            <div className="size-64 bg-gray-400 rounded-md flex justify-center items-center">
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={(event) => setFile(event?.target?.files?.[0] || null)}
              />
              <Button
                variant="surface"
                onClick={() => fileInputRef.current?.click()}
              >
                <CloudUpload />
                Choose image
              </Button>
            </div>
          ) : (
            <div className="size-64">
              <img src={imageUrl || ""} alt="Post" />
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={(event) => setFile(event?.target?.files?.[0] || null)}
              />
              <Button
                variant="surface"
                onClick={() => fileInputRef.current?.click()}
              >
                <CloudUpload />
                Choose image
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <TextArea
            className="h-1/4 w-2xl"
            size="3"
            variant="classic"
            value={description}
            placeholder="Add photo description...."
            onChange={(event) => setDescription(event?.target?.value)}
          />

          <Button
            type="button"
            onClick={() => {
              handlePublishPost(imageUrl, description);
            }}
            variant="classic"
          >
            Publish post
          </Button>
        </div>
      </div>
    </div>
  );
}
