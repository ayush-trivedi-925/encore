import { auth } from "@/auth";
import { prisma } from "@/db";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return "Not logged in";
  }
  const profile = await prisma.user.findFirstOrThrow({
    where: { email: session?.user?.email as string },
  });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">Profile settings</h1>
      <form
        action={async (data: FormData) => {
          "use server";
          const userInfo = {
            username: data.get("username") as string,
            name: data.get("name") as string,
            subtitle: data.get("subtitle") as string,
            bio: data.get("bio") as string,
          };
          console.log(data);
          await prisma.user.upsert({
            where: {
              email: session?.user?.email as string,
            },
            update: userInfo,
            create: {
              email: session?.user?.email as string,
              ...userInfo,
            },
          });
          redirect("/profile");
        }}
      >
        <div className="flex gap-4">
          <div>
            <div className="rounded-full bg-gray-200 size-24"></div>
          </div>
          <div className="self-end ">
            <Button variant="surface">
              <CloudUploadIcon />
              Change avatar
            </Button>
          </div>
        </div>
        <p className="mt-2 font-bold">Username</p>
        <TextField.Root
          name="username"
          placeholder="ex: john_doe_552"
          defaultValue={profile.username || ("" as string)}
        />
        <p className="mt-2 font-bold">Name</p>
        <TextField.Root
          name="name"
          placeholder="ex: John Doe"
          defaultValue={profile.name || ("" as string)}
        />
        <p className="mt-2 font-bold">Passion</p>
        <TextField.Root
          name="subtitle"
          placeholder="ex: Music Producer"
          defaultValue={profile.subtitle || ("" as string)}
        />
        <p className="mt-2 font-bold">Bio</p>
        <TextArea
          name="bio"
          placeholder="Hey! my name is John and i like music alot... like a alot."
          defaultValue={profile.bio || ("" as string)}
        />
        <div className="mt-4 flex justify-end">
          <Button variant="classic">Save settings</Button>
        </div>
      </form>
    </div>
  );
}
