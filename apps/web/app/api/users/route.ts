import prisma from "@rerevolve/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	// return new Response("Hello, Users!");
	const user = await prisma.user.findMany();
	return NextResponse.json({
		user,
		status: 200,
		message: "User fetched successfully",
	});
}
