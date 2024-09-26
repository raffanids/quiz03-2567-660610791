import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Raffan Van-idris",
    studentId: "660610791",
  });
};
