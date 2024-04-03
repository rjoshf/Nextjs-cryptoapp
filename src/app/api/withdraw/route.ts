import { getServerSession } from 'next-auth';
import { connectToDatabase } from '../../../../lib/db';
import { authOptions } from '../auth/[...nextauth]/route';


export async function PATCH(req: Request) {

    const data = await req.json();

    const { selectedAssest, enteredNumber } = data;

    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({message: "Not authenticated!"}), {status: 401});
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