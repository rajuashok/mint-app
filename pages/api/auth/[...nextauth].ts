import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from "next-auth/adapters";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: any;
    }
  }
}

import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const options = {
  providers: [
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: +process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  database: process.env.DATABASE_URL,
  // pages: {
  //   signIn: '/auth/email-signin'
  // }
}

export default (req, res) => NextAuth(req, res, options);