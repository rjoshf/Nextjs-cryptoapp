import { getServerSession } from 'next-auth';
import { connectToDatabase } from '../../../../lib/db';
import { authOptions } from '../auth/[...nextauth]/route';

export async function PATCH(req: Request) {

    const data = await req.json();

    const { selectedAssest, enteredNumber } = data;
    
    console.log(selectedAssest)
    console.log(enteredNumber)

    const session = await getServerSession(authOptions);
    // Protecting the API route. 
    if (!session) {
        return new Response(JSON.stringify({message: "Not authenticated!"}), {status: 401,});
    }

    const userEmail = session.user.email;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({email: userEmail});

    // Check user exists.
    if (!user) {
        client.close()
        return new Response(JSON.stringify({message: "User not found!"}), {status: 404})
    }

    // Process deposit based on selected asset.
    if (selectedAssest === "Bitcoin") {
        const newBitcoinAmount = enteredNumber + session.user.bitcoin_amount;
        console.log(newBitcoinAmount);
        await usersCollection.updateOne({email: userEmail}, { $set: {bitcoin_amount: newBitcoinAmount} });
        client.close();
        return new Response(JSON.stringify({message: "Bitcoin successfully deposited!"}), {status: 200})
    } else if (selectedAssest === "Ethereum") {
        const newEthereumAmount = enteredNumber + session.user.ethereum_amount;
        await usersCollection.updateOne({email: userEmail}, { $set: {ethereum_amount: newEthereumAmount} });
        client.close();
        return new Response(JSON.stringify({message: "Ethereum successfully deposited!"}), {status: 200})
    } else {
        // Handle unsupported asset types.
        client.close();
        return new Response(JSON.stringify({message: "Unsupported asset type!"}), {status: 400})
    }
}