import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">Profile settings</h1>
      <form action="">
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
        <TextField.Root placeholder="ex: john_doe_552" />
        <p className="mt-2 font-bold">Name</p>
        <TextField.Root placeholder="ex: John Doe" />
        <p className="mt-2 font-bold">Passion</p>
        <TextField.Root placeholder="ex: Music Producer" />
        <p className="mt-2 font-bold">Bio</p>
        <TextArea placeholder="Hey! my name is John and i like music alot... like a alot." />
        <div className="mt-4 flex justify-end">
          <Button variant="classic">Save settings</Button>
        </div>
      </form>
    </div>
  );
}
