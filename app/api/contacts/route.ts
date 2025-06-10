import { Contact } from "@/lib/models/Contact";
import { connectdDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectdDB();
  try {
    const body = await request.json();
    const newContact = new Contact(body);
    const saved = await newContact.save();
    return NextResponse.json(saved, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
