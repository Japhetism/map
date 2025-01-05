import { quotes } from "../fixtures/quotes";
import { IQuote } from "../interface";
import { getQuote } from "../utils/helper";

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

export const getQuotesByRefNo = async (refNo: string): Promise<IQuote | undefined> => {
  try {
    await delay(timer);
    const quote = getQuote(quotes, refNo);
    console.log("quore is ", quote)
    return quote
  } catch (error) {
    console.error('Error fetching quote details:', error);
    throw error;
  }
};