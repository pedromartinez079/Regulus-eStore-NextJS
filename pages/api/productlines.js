import { connectDatabase, getDocuments } from "../../lib/mongodb";

export default async function handler(req, res) {
    let client;
    try { client = await connectDatabase() }
    catch (error) {
        res.status(500).json({message: 'DB connection failed!'});
        return;
    }

    if (req.method === 'GET') {
        try { 
            const productlines = await getDocuments(client, 'ProductLines', {name: 1}, {});
            res.status(200).json({ categories: productlines });
            client.close();
            return;
        } catch (error) {
            client.close();
            res.status(500).json({message: 'Product Lines could not be fetched!'});
            return;
        }        
    }

    client.close();
    res.status(404).json({ message: 'Method not found!' })
}