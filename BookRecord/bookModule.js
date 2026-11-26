export const sampleBook = {
  title: "Me Before You",
  author: "Jojo Moyes",
  year: 2012,
  getBookLabel() {
    return `"${this.title}" by ${this.author} (${this.year})`;
  }
};

export function createBookRecord(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getBookLabel() {
      return `"${this.title}" by ${this.author} (${this.year})`;
    }
  };
}

const myBookProfile = createBookRecord(
  "Me Before You",
  "Jojo Moyes",
  2012);

export function formatBookStatus(book, status = "Available") {
  return `${book.getBookLabel()} — Status: [${status}]`;
}

export const books = [
  createBookRecord("Me Before You", "Jojo Moyes", 2012),
  createBookRecord("After You", "Jojo Moyes", 2015),
  createBookRecord("Still Me", "Jojo Moyes", 2018)
];