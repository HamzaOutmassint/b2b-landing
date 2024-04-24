import { NextRequest, NextResponse } from 'next/server';

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    return new NextResponse(
        JSON.stringify({ message: "Subscribed successfully" }),
        { status: 200 }
    );
    // try {
    //     await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    //         email_address: email,
    //         status: "subscribed",
    //     });
    //     return new NextResponse(
    //         JSON.stringify({ message: "Thank you for subscribing my newsletter 👻." }),
    //         { status: 200 }
    //       );
    // } catch (error) {
    //     return new NextResponse(
    //         JSON.stringify({ message: "Error joining the newsletter. Please try again." }),
    //         { status: 500 }
    //       );
    // }

}

// return new Response()
// try {
//     await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
//         email_address: email,
//         status: "subscribed",
//     });
//     // res.status(201).json({ message: "Subscribed successfully" });

//     return new Response("Subscribed successfully")
// } catch (error) {
//     return new Response("Subscription failed")
//     // res.status(500).json({ message: "Subscription failed" });
// }
