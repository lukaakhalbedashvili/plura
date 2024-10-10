import { LookupResponseI } from "@/app.interface";
import axios from "axios";

async function getPhoneNumbersDetails(
  phoneNumbers: string[]
): Promise<LookupResponseI[]> {
  const apiKey = process.env.API_KEY;

  const lookupPromises = phoneNumbers.map(async (phoneNumber) => {
    const apiUrl = `https://api.blacklistalliance.net/lookup?key=${apiKey}&phone=${phoneNumber}`;

    const options = {
      method: "GET",
      url: apiUrl,
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(
          `Error fetching data for phone number ${phoneNumber}:`,
          error.response.data
        );
        throw new Error(
          `Error: ${error.response.status} - ${error.response.statusText}`
        );
      } else {
        console.error("Unexpected error:", error);
        throw new Error("An unexpected error occurred");
      }
    }
  });

  return Promise.all(lookupPromises);
}

export { getPhoneNumbersDetails };
