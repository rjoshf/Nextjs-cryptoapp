import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGO_URI is not defined');
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI);

    return client;
}