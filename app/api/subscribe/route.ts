import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { email, name, phone, location } = await req.json(); // 🆕 include location
  console.log(location);
  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const DATACENTER = API_KEY.split("-")[1]; // e.g., "us21"

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
  const cleanEmail = email.trim().toLowerCase();

  // Split full name into first and last name
  const [firstName, ...rest] = name.trim().split(" ");
  const lastName = rest.join(" ") || "";
  // Split location string
  const [city = "", state = "", country = ""] = location
    .split(",")
    .map((p: any) => p.trim());

  const addressMergeField = {
    addr1: "davis", // you can populate this if you have street address
    city: "kdid",
    state: "dkd",
    zip: "",
    country: "kdkdi",
  };

  console.log(
    `Subscribing ${cleanEmail} (${firstName} ${lastName}) from ${location}`
  );
  try {
    await axios.post(
      url,
      {
        email_address: cleanEmail,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: phone,
          ADDRESS: "addressMergeField",
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
