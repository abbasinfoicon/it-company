import { NextResponse } from "next/server"; "next/server";

export async function GET() {
    try {
        const res = NextResponse.json({ message: "Logout Successful", success: true })

        res.cookies.set("next-auth.session-token", "", {
            httpOnly: true,
            expires: new Date(0)
        })

        return res;

    } catch (error) {
        return NextResponse.json({ status: 500, message: error.message })
    }
}