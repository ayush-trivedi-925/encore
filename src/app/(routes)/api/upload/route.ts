import { pinata } from "@/pinataConfig";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    // Creating a Pinata Group
    // const info = await pinata.groups.create({ name: "encore", isPublic: true });

    const uploadData = await pinata.upload.file(file, {
      groupId: "479f8412-b66b-4cfc-a381-c4702f3f774e",
    });
    const fileUrl = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${uploadData.IpfsHash}`;
    return NextResponse.json(fileUrl, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
