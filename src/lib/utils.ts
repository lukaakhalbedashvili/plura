import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const generateRandomPhoneNumber = () => {
  const number = Math.floor(Math.random() * 10000000000); // Generates up to 10 digits
  return number.toString().padStart(10, "0"); // Ensures 10 digits by padding with zeros
};

const generateRandomPhoneNumbers = (count: number) => {
  const phoneNumbers = [];
  for (let i = 0; i < count; i++) {
    phoneNumbers.push(generateRandomPhoneNumber());
  }
  return phoneNumbers;
};

export { generateRandomPhoneNumbers, cn };
