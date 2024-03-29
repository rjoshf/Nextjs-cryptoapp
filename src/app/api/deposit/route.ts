import { NextApiRequest } from 'next';
import { getSession } from "next-auth/react";
import { connectToDatabase } from '../../../../lib/db';

export async function PATCH(req: NextApiRequest) {

    const session = await getSession({ req })
    //protecting the API route. 
    if (!session) {
        return new Response(JSON.stringify({message: "Not authenticated!"}), {status: 401,});
    }

    const userEmail = session.user.email;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({email: userEmail});

    if (!user) {
        client.close()
        return new Response(JSON.stringify({message: "User not found!"}), {status: 404})
    }

}