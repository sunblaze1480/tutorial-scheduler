import { NextRequest, NextResponse } from "next/server";

export async function POST (req) {

    try {
        localStorage.setItem('tutorials', JSON.stringify(tutorials));
    }catch(error)
    {                   
        return(new NextResponse({Err: error},{
            status:500,
            'Content-Type': 'application-json'
        }))
    }
        
}