"use client";

import { updateProfile } from "@/actions";

import { User } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: User;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar);
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) return;
    const data = new FormData();
    data.set("file", file as File);
    fetch("/api/upload", {
      method: "POST",
      body: data,
    }).then((response) =>
      response.json().then((url) => {
        setAvatarUrl(url);
      })
    );
  }, [file]);

  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);
        router.push("/profile");
        router.refresh();
      }}
    >
      <input type="hidden" name="avatar" value={avatarUrl || ""} />
      <div className="flex gap-4">
        <div>
          <div className="rounded-full bg-gray-200 size-24 overflow-hidden aspect-square ">
            <img src={avatarUrl || ""} alt="Profile picture" />
          </div>
        </div>
        <div className="self-end ">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(event) => setFile(event.target?.files?.[0] || null)}
          />
          <Button
            type="button"
            variant="surface"
            onClick={() => fileInputRef?.current?.click()}
          >
            <CloudUploadIcon />
            Change avatar
          </Button>
        </div>
      </div>
      <p className="mt-2 font-bold">Username</p>
      <TextField.Root
        name="username"
        placeholder="ex: john_doe_552"
        defaultValue={(profile.username || "") as string}
      />
      <p className="mt-2 font-bold">Name</p>
      <TextField.Root
        name="name"
        placeholder="ex: John Doe"
        defaultValue={(profile.name || "") as string}
      />
      <p className="mt-2 font-bold">Passion</p>
      <TextField.Root
        name="subtitle"
        placeholder="ex: Music Producer"
        defaultValue={(profile.subtitle || "") as string}
      />
      <p className="mt-2 font-bold">Bio</p>
      <TextArea
        name="bio"
        placeholder="Hey! my name is John and i like music alot... like a alot."
        defaultValue={(profile.bio || "") as string}
      />
      <div className="mt-4 flex justify-end">
        <Button variant="classic">Save settings</Button>
      </div>
    </form>
  );
}
