<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useRouter, RouterLink, useRoute } from 'vue-router';

import { useBookStore } from '../stores/book'

const route = useRoute()
const router = useRouter()
const bookStore = useBookStore()

const mode = ref('create')
const bookIndex = ref(-1)

onMounted(() => {
    if  (route.name === 'book-edit'){
        mode.value = 'update'
        bookIndex.value = parseInt(route.params.id)
        const cBookStore = bookStore.books[bookIndex.value]
        bookData.name = cBookStore.name
        bookData.author = cBookStore.author
    }
})

const bookData = reactive({
    name: '',
    author: ''
})

const invalid = () => {
    if(!bookData.name && !bookData.author){
        alert('blank input Book name and Book author')
    }
    else if(!bookData.name){
        alert('blank input Book name')
    }
    else if(!bookData.author){
        alert('blank input Book author')
    }
    else {
        addBook()
    }
}

const addBook = () => {
    if (mode.value === 'update'){
        bookStore.editBook(bookData,bookIndex.value)
    }else{
        bookStore.addBook(bookData)
    }
    router.push({
        name: 'book-list'
    })
}

const displayButton = computed(() => {
    if (mode.value =='create'){
        return 'Add'
    } else {
        return 'Update'
    }
})
</script>

<template>
    <h1>Book Update View</h1>
    <div>
        <div>
            Book name
            <input class="input-bookname" type="text" v-model="bookData.name">
        </div>
        <div>
            Book author
            <input  class="input-bookauthor" type="text" v-model="bookData.author">
        </div>
        <div>
            <button @click="invalid()" class="btn-submit">{{displayButton}} Book</button>
        </div>
        <RouterLink :to="{name:'book-list'}">
            <h2>Back to Home</h2>
        </RouterLink>
    </div>
</template>