import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { name, email, phone, passengers, pickup, dropoff, date, time, carType } = await req.json();
    
        
        const response = await axios({
            url:'https://graph.facebook.com/v21.0/499115399961390/messages',
            method:'post',
            headers: {
                'Authorization': `Bearer ${process.env.WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data:JSON.stringify({
                messaging_product : 'whatsapp',
                to:'919344563795',
                timeout: 50000,
                type: 'text',
                text: {
                    body: `New booking,\nName: ${name}\n`
                }
            })
        });
        console.log(response.data)
        console.log(name, email, phone, passengers, pickup, dropoff, date, time, carType);
        

        return NextResponse.json({ message:{name, email, phone, passengers, pickup, dropoff, date, time, carType} });

    
}
