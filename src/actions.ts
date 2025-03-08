"use server";
import { auth } from "./auth";
import { prisma } from "./db";

export async function updateProfile(data: FormData, userEmail: string) {
  const userInfo = {
    avatar: data.get("avatar") as string,
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

export async function publishPost(imageUrl: string, description: string) {
  const session = await auth();

  const postDoc = await prisma.post.create({
    data: {
      image: imageUrl,
      description,
      email: session?.user?.email as string,
    },
  });
  return postDoc.id;
}
