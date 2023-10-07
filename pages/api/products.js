import { connectDatabase, getDocuments, searchDocuments } from "../../lib/mongodb";

export default async function handler(req, res) {
    // SearchParams:/api/products?category=Notebooks&sort=-1
    // SearchParams:/api/products?product=NBASX1605MB195
    // SearchParams:/api/products?search=Lenovo
    let filter = {};
    let sort = {};

    const category = req.query.category;
    const productCode = req.query.product;    
    if (category !== undefined) { filter = {productLine: category}; }
    if (productCode !== undefined) { filter = {code: productCode}; }

    const priceSort = req.query.sort;    
    if (priceSort !== undefined) { sort = {pricePEN: priceSort}; }

    const search = req.query.search;
    if (search !== undefined) {
        filter = {$text: {$search: search}}, {score: {$meta:"textScore"}};
        sort = {score: {$meta: "textScore"}};
        // console.log(`filter for a search: ${search}`);
    }    
    
    let client;
    try { client = await connectDatabase() }
    catch (error) {
        res.status(500).json({message: 'DB connection failed!'});
        return;
    }

    if (req.method === 'GET') {
        if (search === undefined) {
            try { 
                const products = await getDocuments(client, 'Deltron', sort, filter);
                res.status(200).json({ products: products });
            } catch (error) {
                client.close();
                res.status(500).json({message: 'Product Lines could not be fetched!'});
                return;
            }
        } else {
            try { 
                const products = await searchDocuments(client, 'Deltron', sort, filter, 15);
                res.status(200).json({ products: products });
            } catch (error) {
                client.close();
                res.status(500).json({message: 'Search operation failed!'});
                return;
            }
        }
    }

    client.close();
    res.status(404).json({ message: 'Method not found!' })
}