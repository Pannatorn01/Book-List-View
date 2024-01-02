<script setup>
import { RouterLink } from 'vue-router'
import { useBookStore } from '../stores/book'

const bookStore = useBookStore()

</script>

<template>
    <h1>Book List View</h1>
    <div>
        <div>
            <RouterLink :to="{name: 'book-create'}">
                <h2>Create Book</h2>
            </RouterLink>        
        </div>
        <ul class="book-list">
            <li v-for="(book, index) in bookStore.books">
                {{ book.name }}  {{ book.author }}                   
               <RouterLink :to="{
                name:'book-edit',
                params: {id : index}
                }">
                 <button class="btn-edit">edite</button>
                </RouterLink>
               <button class="btn-delete" @click="bookStore.removeBook(index)">Delete</button> 
            </li>           
        </ul>
    </div>
</template>