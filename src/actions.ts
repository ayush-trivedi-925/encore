"use server";
import { prisma } from "./db";

export async function updateProfile(data: FormData, userEmail: string) {
  const userInfo = {
    username: data.get("username") as string,
    name: data.get("name") as string,
    subtitle: data.get("subtitle") as string,
    bio: data.get("bio") as string,
  };
  console.log(data);
  await prisma.user.upsert({
    where: {
      email: userEmail as string,
    },
    update: userInfo,
    create: {
      email: userEmail as string,
      ...userInfo,
    },
  });
}
