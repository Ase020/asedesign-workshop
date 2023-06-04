import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import User from "@/models/User";
import connect from "@/utils/db";

export const POST = async (req) => {
  const { username, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name: username,
    email,
    password: hashedPassword,
  });

  try {
    // Save newUser to DB
    await newUser.save();
    return new NextResponse("User created successfully!", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
