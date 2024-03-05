import { NextApiRequest, NextApiResponse } from "next";


export default async function request(req:NextApiRequest, res:NextApiResponse) {
    try{
        const val = 5 / 0;
    
        res.json({
            status: true,
            message: "Hello, World",
            code: 200
        })
    } catch(err) {
        res.json({
            status: false,
            message: "Internal Server Error",
            code: 500
        });
    }
}