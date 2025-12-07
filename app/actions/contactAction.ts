"use server";

export async function contactAction(data: FormData) {
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  console.log("Contact form via Server Action:", {
    name,
    email,
    message,
  });

  // You can forward to email/SaaS/CRM here

  return { success: true };
}
