import axios from "axios";
import { loginSchema } from "../schemas/loginSchema";

type LoginArgs = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginArgs) {
  // Validate the login input using the Zod schema
  const result = loginSchema.safeParse({ email, password });
  if (!result.success) {
    const errorMessage = result.error.issues
      .map((issue) => `${issue.path.join(".")} - ${issue.message}`)
      .join(", ");
    throw new Error(`Validation failed: ${errorMessage}`);
  }

  // Directly use HTTPS in the request URL
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/login/`; // Ensure this is HTTPS

  console.log("Attempting to login to:", url);

  try {
    const response = await axios.post(
      url,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        `Server Error: ${
          error.response.data?.message || error.response.statusText
        }`
      );
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error("Error setting up the request");
    }
  }
}
