/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const categoryNumber = booksByCategory.length
console.log(categoryNumber)

for (let category of booksByCategory) {
    console.log('Total de livros na categoria', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books){  //to reach the books inside category
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author) //push author to the array authors
            } //if author exists in array, return index but if do not exists return -1
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){  //to reach the books inside category
            if(book.author === 'Augusto Cury'){
                books.push(book.title) //push book to the array authors
            }
            
        }
    }

    console.log("Livros: ", books)
}

booksOfAugustoCury()

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){  //to reach the books inside category
            if(book.author === author){
                books.push(book.title) //push book to the array authors
            }
            
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

booksOfAuthor('Augusto Cury')