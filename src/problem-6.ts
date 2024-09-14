type Book ={
    title:string;
    author:string;
    publishedYear:number;
}

function isRecentBook(book1: Book) {
  return (new Date().getFullYear() - book1.publishedYear) <5 ? true: false
}

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
isRecentBook(book1);

