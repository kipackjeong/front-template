import { getBody } from "client/core/utils/api-utils";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/login:
 *   POST:
 *     description: login endpoint
 *     responses:
 *       200:
 *          description: Hello World!
 */
export async function POST(
  request: NextRequest & { body: LoginBody },
  response: NextResponse,
): Promise<any> {
  return;
}

type LoginBody = {
  email: string;
  password: string;
};
