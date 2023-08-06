import { getBody } from "client/core/utils/api-utils";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/login:
 *   POST:
 *     description: login endpoint
 *     responses:
 *       200:
 *          message: "success"
 */
export async function POST(
  request: Request & { body: LoginBody },
): Promise<any> {
  return NextResponse.json({ message: "success" });
}

type LoginBody = {
  email: string;
  password: string;
};
