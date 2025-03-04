import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const secretKey = "yourSecretKey";

export async function POST(req:Request) {
  try {
    const { email, password } = await req.json(); 
    console.log({email,password})
    if (email === "user" && password === "password") {
      const token = jwt.sign({ email }, secretKey, { expiresIn: "24h" });

      const cookieStore = await cookies();
      cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/Dashboard",
      });

      return NextResponse.json({ message: "Logged in successfully" }, { status: 200 });
     
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
