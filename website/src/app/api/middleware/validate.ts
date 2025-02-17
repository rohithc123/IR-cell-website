"use server";
import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "./../model/admin";
import { cookies } from "next/headers";

interface DecodedToken {
  _id: string;
  email: string;
  password: string;
  iat: number;
  exp: number;
}
async function validateToken(cookie: string): boolean {
  cookie = cookie.replace(/^"|"$/g, "");
  console.log(cookie);
  if (!cookie || cookie == undefined) {
    console.log("No cookie");
    return false;
  }

  try {
    console.log("erro before1");

    const secretKey = process.env.secretKey;

    const decoded = jwt.verify(cookie, secretKey) as DecodedToken;

    console.log("erro before");
    console.log(decoded);
    const admin = await Admin.findOne({
      _id: decoded._id,
    });

    console.log("decoded");
    if (!admin) {
      throw new Error();
    }
    console.log("all done");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default validateToken;
