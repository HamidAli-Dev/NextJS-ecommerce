import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  params: { params: { storeId: string; billboardId: string } }
) {
  try {
    const { userId } = await auth();
    const body = await req.json();
    const { label, imageUrl } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    if (!params.params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    if (!params.params.billboardId) {
      return new NextResponse("Billboard ID is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 404 });
    }

    const billboard = await prismadb.billBoard.update({
      where: {
        id: params.params.billboardId,
      },
      data: {
        label,
        imageUrl,
      },
    });

    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARD_PATCH_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
