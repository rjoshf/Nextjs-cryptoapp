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

    if (session.user.bitcoin_amount && selectedAssest === "Bitcoin") {
        if (enteredNumber > session.user.bitcoin_amount) {
            client.close();
            return new Response(JSON.stringify({message: "Insufficient amount of btc."}), {status: 400})
        }
        const newBitcoinAmount = session.user.bitcoin_amount - enteredNumber;
        await usersCollection.updateOne({email: userEmail}, { $set: {bitcoin_amount: newBitcoinAmount} });
        client.close();
        return new Response(JSON.stringify({message: "Bitcoin successfully deposited!"}), {status: 200})
    } else if (session.user.ethereum_amount && selectedAssest === "Ethereum") {
        if (session.user.ethereum_amount && enteredNumber > session.user.ethereum_amount) {
            client.close();
            return new Response(JSON.stringify({message: "Insufficient amount of ethereum."}), {status: 400})
        }
        const newEthereumAmount = session.user.ethereum_amount - enteredNumber;
        await usersCollection.updateOne({email: userEmail}, { $set: {ethereum_amount: newEthereumAmount} });
        client.close();
        return new Response(JSON.stringify({message: "Ethereum successfully deposited!"}), {status: 200})
    } else {
        client.close();
        return new Response(JSON.stringify({message: "Unsupported asset type!"}), {status: 400})
    }
}