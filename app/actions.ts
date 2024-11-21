"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
    required_error: "Email is required",
  }),
  name: z.string({
    required_error: "Name is required",
  }),
  message: z.string({
    required_error: "Message is required",
  }),
});

async function sendContactEmail(contactData: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anasfebrian0@gmail.com", 
      pass: "oebr wtsd yffm cegh",
    },
  });

  const mailOptions = {
    from: contactData.email,
    to: "pt.iurisinternational@gmail.com",
    subject: `New Contact Form Submission from ${contactData.name}`,
    text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
  };

  return transporter.sendMail(mailOptions);
}

export async function saveContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await sendContactEmail({
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      message: validatedFields.data.message,
    });

    return { message: "success" };
  } catch (error: any) {
    console.error("Email Sending Error:", error);

    if (error?.message) {
      return { message: `Error: ${error.message}` };
    }

    return { message: "An unexpected error occurred while sending the email." };
  }
}
