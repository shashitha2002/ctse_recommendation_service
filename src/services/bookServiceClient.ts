import axios from "axios";
import "dotenv/config";

const API_GATEWAY_URL = process.env.API_GATEWAY_URL;

export interface bookCatalogResponse {
  title: string;
  author: string;
  category: string;
  price: number;
  stockCount: number;
  createdBy: string;
  imageUrl: string;
}

export type BookCatalogListResponse = {
  message: string;
  data: bookCatalogResponse[];
};

export const getAllBooks = async (
  token: string,
): Promise<bookCatalogResponse[]> => {
  try {
    const response = await axios.get<bookCatalogResponse[]>(
      `${API_GATEWAY_URL}/books/`,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response || response.data.length === 0) {
      throw new Error(`book catalog service does not provide the information`);
    }

    return response.data;
  } catch (error: any) {
    throw new Error(`book catalog Service unavailable: ${error.message}`);
  }
};

export const getCategoryBooks = async (
  token: string,
): Promise<bookCatalogResponse[]> => {
  try {
    const response = await axios.get<BookCatalogListResponse>(
      `${API_GATEWAY_URL}/books/category`,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    if (!response || response.data.data.length === 0) {
      throw new Error(`book catalog service does not provide the information`);
    }

    return response.data.data;
  } catch (error: any) {
    throw new Error(`book catalog Service unavailable: ${error.message}`);
  }
};
