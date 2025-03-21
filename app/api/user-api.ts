import { NextApiRequest, NextApiResponse } from 'next';

// Dummy API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Handle GET request
        res.status(200).json({ message: 'Hello, this is a dummy GET API!' });
    } else if (req.method === 'POST') {
        // Handle POST request
        const { name } = req.body;
        if (name) {
            res.status(201).json({ message: `Hello, ${name}! Your data has been received.` });
        } else {
            res.status(400).json({ error: 'Name is required in the request body.' });
        }
    } else {
        // Handle unsupported methods
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}