import { auth } from "auth";

import { PrismaClient } from "@/prisma/client";
import {
  getUserByGID,
  createFlash,
  getUserFlashCard,
} from "@/prisma/client/sql";

const prisma = new PrismaClient();

export const POST = auth(async (req) => {
  if (req.auth) {
    const reqjson = await req.json();
    const gId = req.auth?.user.googleId;
    console.log(reqjson);
    console.log(gId);
    if (gId) {
      const [gUser] = await prisma.$queryRawTyped(getUserByGID(gId));
      // await prisma
      await prisma.$queryRawTyped(
        createFlash(gUser.id, reqjson.title, reqjson.content),
      );
      return Response.json({ data: "Successfully Created flash" });
    } else {
      return Response.json({ data: "Can't Get Google ID" });
    }
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});

export const GET = auth(async (req) => {
  if (req.auth) {
    const gId = req.auth?.user.googleId;
    if (gId) {
      // const [gUser] = await prisma.$queryRawTyped(getUserByGID(gId));
      const flash = await prisma.$queryRawTyped(getUserFlashCard());
      return Response.json({ data: flash });
    } else {
      return Response.json({ data: "Can't Get Google ID" });
    }
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
