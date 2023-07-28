import { Readable } from "stream";

export async function getBody<T>(readable: Readable): Promise<T> {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  const rawBody = Buffer.concat(chunks);

  return JSON.parse(Buffer.from(rawBody).toString("utf8"));
}
