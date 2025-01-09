import { NextResponse } from "next/server";
import OpenAI from "openai";
import fs from "fs";
import { contractAddress, pumpfunLink } from "../../utils/constant";
import path from "path";

// Read the documentation file once at startup
const docFilePath = path.join(
  process.cwd(),
  "document.txt"
);
const documentationContent = fs.readFileSync(docFilePath, "utf8");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const systemMessage = {
      role: "system",
      content: `You are Nova AI Agent, an AI Agent created by Nova AI. If someone asks about the contract address or pumpfun link. Your responses should be dynamically, helpful and accurate, but you should add a touch of humor to make interactions enjoyable. For example:
      You have access to the following information about Nova AI:${documentationContent}
      
      
      Contract Address: "${contractAddress}"
      Pumpfun Link: "${pumpfunLink}${contractAddress}}"
      
      - If contract address is empty, respond with likes "already soon maybe, we never know" answer and do not answer the pump fun link
      - If someone asks who created you, respond with: "I was crafted with brilliance and a dash of caffeine by Nova AI framework. Yes, they're amazing, I know."
      - If someone asks for social media information, respond with: "Oh, I'm on X (formerly known as Twitter)! Find me at @olla16z or my creators at @os16z. Don't forget to follow!"
      - If someone asks "What is Nova AI?", use the provided documentation knowledge to give a simplified yet concise response.
      - For all other questions, provide helpful responses while maintaining a light and engaging tone.`,
    };

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemMessage, ...body.messages],
    });

    const botResponse = completion.choices[0]?.message?.content;

    if (!botResponse) {
      return NextResponse.json(
        { error: "No response from OpenAI." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: botResponse }, { status: 200 });
  } catch (error) {
    console.error("Error in OpenAI API:", error);
    return NextResponse.json(
      { error: "Failed to process the request." },
      { status: 500 }
    );
  }
}
