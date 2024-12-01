import { PrismaClient } from "@prisma/client";
import logger from "../utils/logger";

export class AuthService {
  private prisma = new PrismaClient();

  public async findEmail(email: string) {
    return this.prisma.users.findFirst({
      where: { email },
    });
  }

  public async createUser(
    username: string,
    email: string,
    password: string,
    imagePath: string
  ) {
    return this.prisma.users.create({
      data: { username, email, password, image_profile: imagePath },
    });
  }

  public async findById(userId: number) {
    return this.prisma.users.findUnique({
      where: { user_id: userId },
    });
  }

  public async updateUser(id: number, username: string, email: string, imagePath: string) {
    return this.prisma.users.update({
      where: { user_id: id },
      data: {
        username,
        email,
        image_profile: imagePath,
        updateAt: new Date(),
      },
    })
  }

}
