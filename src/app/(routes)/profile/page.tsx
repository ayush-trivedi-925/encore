import { ArrowBigLeftDash, BadgeCheck, Settings } from "lucide-react";
import profilepic from "@/../public/IMG_2304.jpg";
import Image from "next/image";
import Link from "next/link";
import PostsGrid from "@/components/PostsGrid";

export default function ProfilePage() {
  return (
    <main>
      <section className="flex justify-between items-center">
        <button>
          <ArrowBigLeftDash />
        </button>
        <div className="font-bold flex items-start gap-1">
          Ayush Trivedi
          <BadgeCheck
            className="bg-blue-600 text-white rounded-full"
            size={16}
          />
        </div>
        <div>
          <Settings />
        </div>
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
        <h1 className="text-xl font-bold">Ayush Trivedi</h1>
        <p className="text-gray-500 mt-1 mb-1">Patient Gamer</p>
        <p>Professional Red Dead Redemption 2 Enjoyer 🤠</p>
        <p className="">contact: ayushtrivedi118@gmail.com</p>
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
