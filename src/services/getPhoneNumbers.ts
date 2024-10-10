"use server";

import { LookupResponseI } from "@/app.interface";

import { getPhoneNumbersDetails } from "./getPhoneNumbersDetails";
import { generateRandomPhoneNumbers } from "@/lib/utils";

const getPhoneNumbers = async (page: number): Promise<LookupResponseI[]> => {
  const itemsPerPage = 100;
  const randomPhoneNumbers = generateRandomPhoneNumbers(1200);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedPhoneNumbers = randomPhoneNumbers.slice(startIndex, endIndex);

  const phoneNumbersDetails = await getPhoneNumbersDetails(
    paginatedPhoneNumbers
  );

  return phoneNumbersDetails;
};

export { getPhoneNumbers };
