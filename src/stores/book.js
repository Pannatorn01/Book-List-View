import { defineStore } from 'pinia'

let booklist = JSON.parse(localStorage.getItem('bookList')) || []

export const useBookStore = defineStore('book', {
  state: () => ({
  books: booklist
  }),  
  actions: {
   addBook (bookData) {
    this.books.push(bookData)
    localStorage.setItem('bookList', JSON.stringify(this.books))
   },
   removeBook (bookIndex) {
    this.books.splice(bookIndex,1)
    localStorage.setItem('bookList', JSON.stringify(this.books))
   },
   editBook (bookData, bookIndex) {
    this.books.splice(bookIndex, 1, bookData)
   }
  }
})
