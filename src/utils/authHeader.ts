import type { Request, Response } from "express";

export const getAuthHeader = (req: Request) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error(`No token provided`);
    }
    return authHeader;
  } catch (error: any) {
    console.error(error);
    throw new Error(`error : ${error.message}`);
  }
};
