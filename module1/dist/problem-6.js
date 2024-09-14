"use strict";
function isRecentBook(book1) {
    return (new Date().getFullYear() - book1.publishedYear) < 5 ? true : false;
}
const book1 = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};
isRecentBook(book1);
