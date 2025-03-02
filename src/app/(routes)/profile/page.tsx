import { ArrowBigLeftDash, BadgeCheck, SettingsIcon } from "lucide-react";
import profilepic from "@/../public/IMG_2304.jpg";
import Image from "next/image";
import Link from "next/link";
import PostsGrid from "@/components/PostsGrid";
import { prisma } from "@/db";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
  const profile = await prisma.user.findFirstOrThrow({
    where: { email: session?.user?.email as string },
  });
  return (
    <main>
      <section className="flex justify-between items-center">
        <Link href={"/"}>
          <ArrowBigLeftDash />
        </Link>
        <div className="font-bold flex items-start gap-1">
          {profile?.username}
          <BadgeCheck
            className="bg-blue-600 text-white rounded-full"
            size={16}
          />
        </div>
        <Link href={"/settings"}>
          <SettingsIcon />
        </Link>
      </section>
      <section className="mt-8 flex justify-center">
        <div className="size-48 p-2 bg-orange-500 rounded-full bg-gradient-to-tr from-orange to-red">
          <div className="size-44 p-2 bg-white rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
              <Image src={profilepic} alt="profile-picture" />
            </div>
          </div>
        </div>
      </section>
      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">{profile.name}</h1>
        <p className="text-gray-500 mt-1 mb-1">{profile.subtitle}</p>
        <p>{profile.bio}</p>
        <p className="">contact: {profile.email}</p>
      </section>
      <section>
        <div className="flex gap-4 justify-center mt-5 font-bold ">
          <Link href={""}>Posts</Link>
          <Link className="text-gray-500" href={"/highlights"}>
            Highlights
          </Link>
          <Link className="text-gray-500" href={"/saved"}>
            Saved
          </Link>
        </div>
      </section>
      <section className="mt-4">
        <PostsGrid />
      </section>
    </main>
  );
}
