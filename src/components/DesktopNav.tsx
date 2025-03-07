import Link from "next/link";
import { House, CameraIcon, Search, Shell, User } from "lucide-react";
export default function DesktopNav() {
  return (
    <div className="hidden lg:block shadow-md shadow-gray-400 p-4 w-48 min-h-screen">
      <div className="top-4 sticky">
        <img
          className=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
          alt="logo"
        />
        <div className="inline-flex flex-col gap-6 mt-8 ml-1 *:flex *:items-center *:gap-2 max-h-screen">
          <Link href={"/"}>
            <House />
            Home
          </Link>
          <Link href={"/search"}>
            <Search />
            Search
          </Link>
          <Link href={"/create"}>
            <CameraIcon />
            Create
          </Link>
          <Link href={"/browse"}>
            <Shell />
            Browse
          </Link>
          <Link href={"/profile"}>
            <User />
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
