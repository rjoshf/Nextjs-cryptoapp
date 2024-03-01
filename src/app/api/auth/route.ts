import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../lib/db";
import { hashPassword } from "../../../../lib/auth";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await req.json();

        const { email, password } = data;

        if (!email || !email.includes('@') || !password || password.trim().length < 7) {
            return NextResponse.json({
                message: 'Invalid input - password should also be at least 7 characters long.',
            }, {
                status: 500,
            });
        }

        const client = await connectToDatabase();
        const db = client.db();
        const hashedPassword = await hashPassword(password);

        const result = await db.collection('users').insertOne({
            email: email,
            password: hashedPassword,
        });

        return NextResponse.json({
            message: 'Created user!',
        }, {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: 'Internal server error.',
        }, {
            status: 500,
        });
    }
}