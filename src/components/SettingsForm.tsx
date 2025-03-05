"use client";

import { updateProfile } from "@/actions";
import { prisma } from "@/db";
import { User } from "@prisma/client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";

import { useRouter } from "next/navigation";

type Profile = {
  username: string | "";
  name: string | "";
  subtitle: string | "";
  bio: string | "";
};

export default function SettingsForm({
  userEmail,
  profile,
}: {
  userEmail: string;
  profile: User;
}) {
  const router = useRouter();
  return (
    <form
      action={async (data: FormData) => {
        await updateProfile(data, userEmail);
        router.push("/profile");
        router.refresh();
      }}
    >
      <div className="flex gap-4">
        <div>
          <div className="rounded-full bg-gray-200 size-24"></div>
        </div>
        <div className="self-end ">
          <Button type="button" variant="surface">
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
