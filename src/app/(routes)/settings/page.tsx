import { auth } from "@/auth";
import SettingsForm from "@/components/SettingsForm";
import { prisma } from "@/db";
import { User } from "@prisma/client";

export default async function SettingsPage() {
  const session = await auth();

  if (!session?.user?.email) {
    return "Not logged in";
  }

  const userEmail = session?.user?.email;
  const profile = await prisma.user.findFirstOrThrow({
    where: { email: userEmail as string },
  });
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-5 text-center">Profile settings</h1>

      <SettingsForm userEmail={userEmail as string} profile={profile as User} />
    </div>
  );
}
