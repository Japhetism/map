import { quotes } from "../fixtures/quotes";
import { IQuote } from "../interface";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const timer = 1000;

export const getQuotes = async (): Promise<IQuote[]> => {
  try {
    await delay(timer);
    return quotes
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};