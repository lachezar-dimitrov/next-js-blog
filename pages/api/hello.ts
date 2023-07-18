import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse,
): void {
  response.status(200).json({ text: "Hello" });
}
