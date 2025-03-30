import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  Firstname: string,
  Lastname: string,
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      Firstname,
      Lastname,
    },
  });
  console.log(res);
}
insertUser("harkirat@gmail.com", "123456", "Harkirat", "Singh");
