import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const user = process.env.MONGODB_USER_DEV;
    const password = process.env.MONGODB_PASSWORD_DEV;
    const cluster = process.env.MONGODB_CLUSTER_DEV;
    const client = await MongoClient.connect(
        `mongodb+srv://${user}:${password}@reguluseirl.xfrmi2g.mongodb.net/${cluster}?retryWrites=true&w=majority`
        );
    return client;
}

export async function getDocuments(client, collection, sort={}, filter={}) {
    const db = client.db();
    const documents = await db
        .collection(collection).find(filter)
        .sort(sort)
        .toArray();
    return documents;
}

export async function searchDocuments(client, collection, sort={}, filter={}, limit=10) {
    const db = client.db();
    const documents = await db
        .collection(collection).find(filter)
        .sort(sort)
        .limit(limit)
        .toArray();
    return documents;
}

{/* 
    collection: Deltron
    collection: ProductLines
*/}