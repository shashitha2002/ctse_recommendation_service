import type { Request, Response } from "express";
import { getAuthHeader } from "../utils/authHeader.js";
import {
  getAllBooks,
  type bookCatalogResponse,
} from "../services/bookServiceClient.js";

export const getTrandingBooks = async (req: Request, res: Response) => {
  try {
    const authHeader = getAuthHeader(req);

    const books = await getAllBooks(authHeader);

    let array: number[] = [];
    let maxPrice: number[] = [];
    let trandingBooks: bookCatalogResponse[] = [];

    books.forEach((book) => {
      array.push(book.price);
    });

    for (let i = 0; i < 5; i++) {
      let max = Math.max(...array);
      let indexToRemove = array.indexOf(max);
      if (indexToRemove > -1) {
        array.splice(indexToRemove, 1);
      }
      maxPrice.push(max);
    }

    maxPrice.forEach((item) => {
      let b = books.filter((book) => book.price === item);
      b.map((element) => trandingBooks.push(element));
    });

    res.status(200).json(trandingBooks);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: `server error: ${error.message}` });
  }
};

export const getlimitedBooks = async (req: Request, res: Response) => {
  try {
    const authHeader = getAuthHeader(req);

    const books = await getAllBooks(authHeader);

    let array: number[] = [];
    let lowCount: number[] = [];
    let limitedBooks: bookCatalogResponse[] = [];

    books.forEach((book) => {
      array.push(book.stockCount);
      console.log(book);
    });
    console.log("array", array);

    for (let i = 0; i < 3; i++) {
      let min = Math.min(...array);
      let indexToRemove = array.indexOf(min);
      if (indexToRemove > -1) {
        array.splice(indexToRemove, 1);
      }
      lowCount.push(min);
    }
    console.log("lowcount", lowCount);

    lowCount.forEach((item) => {
      let b = books.filter((book) => book.stockCount === item);
      b.map((element) => limitedBooks.push(element));
    });

    console.log("all the books count", books.length);

    console.log("limitedBooks", limitedBooks);

    res.status(200).json(limitedBooks);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: `server error: ${error.message}` });
  }
};
