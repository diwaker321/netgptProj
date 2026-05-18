import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR_GENAI_KEY");

export const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});