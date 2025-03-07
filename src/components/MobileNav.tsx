import Link from "next/link";
import { House, Camera, Search, Shell, User } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="block lg:hidden fixed bottom-0 bg-white px-6 py-3 left-0 right-0">
      <div className="flex items-center justify-around text-gray-600 *:size-12 *:flex *:justify-center *:items-center max-w-lg mx-auto">
        <Link href={"/"}>
          <House />
        </Link>
        <Link href={"/search"}>
          <Search />
        </Link>
        <Link
          href={"/create"}
          className="bg-gradient-to-tr from-red to-orange rounded-full text-white"
        >
          <Camera />
        </Link>
        <Link href={"/browse"}>
          <Shell />
        </Link>
        <Link href={"/profile"} className="text-red">
          <User />
        </Link>
      </div>
    </div>
  );
}
