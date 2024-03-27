import { connectToDatabase } from "../../../../lib/db";
import { hashPassword } from "../../../../lib/auth";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { email, password } = data;

        if (!email || !email.includes('@') || !password || password.trim().length < 7) {
            return new Response(JSON.stringify({message: 'Invalid input - password should be at least 7 characters long'}), {
                status: 500,
            })
        }

        const client = await connectToDatabase();

        const db = client.db();

        const existingUser = await db.collection('users').findOne({email: email});

        if (existingUser) {
            client.close();
            return new Response(JSON.stringify({message: 'User exists already!'}), {
                status: 422,
            })
        }

        //encrypt the password incase of a database leak
        const hashedPassword = await hashPassword(password);

        await db.collection('users').insertOne({
            email: email,
            password: hashedPassword,
            bitcoin_amount: 0,
            ethereum_amount: 0,
        });

        client.close();

        return new Response(JSON.stringify({message: 'Created User!'}), {
            status: 201,
        })

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Internal server error'}), {
            status: 500,
        })
    }
}