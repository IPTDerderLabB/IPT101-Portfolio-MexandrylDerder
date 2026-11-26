import { sampleBook, formatBookStatus, books } from "./bookModule.js";

const statuses = ["Available", "Borrowed", "Reserved"];

books.forEach((book, index) => {
  const status = statuses[index] || "Available";
  console.log(`${index + 1}. ${formatBookStatus(book, status)}`);
});