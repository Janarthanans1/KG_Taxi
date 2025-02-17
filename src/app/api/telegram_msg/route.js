import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(req){
    const {name,pickup,destination,email,phone,passengers,carType,date,time} = await req.json()
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN
    const ADMIN_ID = process.env.ADMIN_CHATID
    try {
        const message = `🚖 Taxi Booked!\n\n👤 Customer: ${name}\n📍 Pickup: ${pickup}\n📍 Destination: ${destination}\n📧 Email: ${email}\n📞 Phone: ${phone}\n👥 Passengers: ${passengers}\n🚘 Car Type: ${carType}\n📅 Date: ${date}\n⏰ Time: ${time}`;
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,{
            chat_id: ADMIN_ID,
            text : message
        })
        return NextResponse.json({message:"Message sended"},{status:200})
    } catch (error) {
        return NextResponse.json({error:`${error}`},{status:500})
    } 
}