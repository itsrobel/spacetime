import { auth } from "auth";

import { AccessLevel, PrismaClient } from "@/prisma/client";
import { getUserByGID } from "@/prisma/client/sql";

import { createDeck } from "@/prisma/client/sql";
const prisma = new PrismaClient();
export const POST = auth(async (req) => {
  if (req.auth) {
    const reqjson = await req.json();
    const gId = req.auth?.user.googleId;
    if (gId) {
      const [gUser] = await prisma.$queryRawTyped(getUserByGID(gId));
      await prisma.$queryRawTyped(
        createDeck(reqjson.name, gUser.id, AccessLevel.PRIVATE),
      );
      return Response.json({ data: "Successfully Created Deck" });
    } else {
      return Response.json({ data: "Can't Get Google ID" });
    }
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 });
});
