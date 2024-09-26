// all import statements

import express from "express";
import cors from "cors";
import { sendEmails } from "./service/emailService.js";
import cron from "node-cron";
import { connectDb } from "./db/dbConnect.js";
import Email from "./models/emails.model.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// express middleware
app.use(express.json());
app.use(cors());

// initialize the all services
async function init() {
  await connectDb();
}

init();

app.get("/", (req, res) => {
  res.send("server running update..");
});

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDateMessage() {
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const month = monthsOfYear[today.getMonth()];
  const day = today.getDate();
  return `${month} ${day} — Happy ${dayOfWeek}`;
}
// Send email route
app.post("/send-email", async function (req, res) {
  try {
    const { email } = req.body;
    console.log("email", email);
    const aiImageGeneratorData = await fetch(
      "https://quote-generator-90rw.onrender.com/generate-quote-image"
    );
    const aiGeneratedImageResponse = await aiImageGeneratorData.json();

    const result = await sendEmails(
      [email],
      aiGeneratedImageResponse?.message,
      aiGeneratedImageResponse?.cloudinaryResponse?.secure_url,
      aiGeneratedImageResponse?.subject,
      formatDateMessage()
    );

    if (!result) {
      return res.status(400).json({ message: "Email send unsuccessful" });
    }

    // Add email to the database if sent successfully
    await Email.create({ email });
    console.log("new email add ", email);

    res.json({ message: "Email sent successfully", data: result });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// add emails
app.post("/add-emails", async (req, res) => {
  try {
    const { emails } = req.body;

    if (!Array.isArray(emails)) {
      return res
        .status(400)
        .json({ message: "Invalid input format, expected an array of emails" });
    }

    const emailDocs = emails.map((email) => ({ email }));

    // Insert emails into the database
    await Email.insertMany(emailDocs, { ordered: false });

    res.status(200).json({ message: "Emails added successfully" });
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(400)
        .json({ message: "Some emails already exist in the database" });
    } else {
      res.status(500).json({ message: "Server error", error });
    }
  }
});
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12; // If hours is 0, set it to 12
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // Add leading zero if needed

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

// Example usage
const currentTime = getCurrentTime();
console.log(currentTime); // Outputs: "11:24 PM"

const sendEmailsEveryDay = async () => {
  console.log("Running daily email task...");

  try {
    // Retrieve all email addresses from the database
    const emails = await Email.find().select("email -_id").lean();
    const emailAddresses = emails.map((doc) => doc.email);
    const aiImageGeneratorData = await fetch(
      "https://quote-generator-90rw.onrender.com/generate-quote-image"
    );
    const aiGeneratedImageResponse = await aiImageGeneratorData.json();
    if (aiGeneratedImageResponse) {
      // Send emails to all addresses
      const result = await sendEmails(
        emailAddresses,
        aiGeneratedImageResponse?.message,
        aiGeneratedImageResponse?.cloudinaryResponse?.secure_url,
        aiGeneratedImageResponse?.subject,
        formatDateMessage()
      );
      if (result) {
        console.log("Emails sent successfully.");
      } else {
        console.log("Failed to send emails.");
      }
    } else {
      console.log("failed to image generate");
    }
  } catch (error) {
    console.error("Error during scheduled email task:", error);
  }
};

let ifSent = false;
setInterval(() => {
  const currentTime = getCurrentTime();
  console.log(currentTime);
  if (currentTime == "9:45 PM" && ifSent == false) {
    ifSent = true;
    console.log("cll");
    sendEmailsEveryDay();
  }

  if (currentTime == "9:47 PM" && ifSent == true) {
    console.log("set false");
    ifSent = false;
  }
}, 1000);

app.get("/check-email", async (req, res) => {
  try {
    const { email } = req.query;

    const existingEmail = await Email.findOne({ email });

    if (existingEmail) {
      return res.json({ subscribed: true });
    }

    res.json({ subscribed: false });
  } catch (error) {
    console.error("Error during email check:", error);
    res.status(500).send("An error occurred while checking the email.");
  }
});

app.get("/unsubscribe", async (req, res) => {
  try {
    const { email } = req.query;

    // Remove the email from the database
    await Email.findOneAndDelete({ email });

    res.send("You have been successfully unsubscribed.");
    res.redirect("https://mail.google.com/mail/u/0/#inbox");
  } catch (error) {
    console.error("Error during unsubscribe:", error);
    res.status(500).send("An error occurred while unsubscribing.");
  }
});

// listen the app on 2000 port
app.listen(process.env.PORT || 3001, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
