import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { email, name, phone, location } = await req.json(); // 🆕 include location

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = API_KEY.split("-")[1]; // e.g., "us21"

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // Split full name into first and last name
  const [firstName, ...rest] = name.trim().split(" ");
  const lastName = rest.join(" ") || "";

  try {
    await axios.post(
      url,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone,
          ADDRESS: location, // 🆕 Add your Mailchimp custom merge field here
        },
      },
      {
        auth: {
          username: "anystring",
          password: API_KEY,
        },
      }
    );

    return NextResponse.json({
      success: true,
      message: "You’ve successfully subscribed to SUUVO updates!",
    });
  } catch (err: any) {
    const title = err?.response?.data?.title;

    if (title === "Member Exists") {
      return NextResponse.json({
        success: true,
        message: "You're already subscribed to SUUVO!",
      });
    }

    let errorMessage = "Something went wrong. Please try again.";
    if (title === "Invalid Resource") {
      errorMessage = "Please enter a valid email address.";
    } else if (title === "Forgotten Email Not Subscribed") {
      errorMessage = "Email not found. Try a different one.";
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 400 }
    );
  }
}
