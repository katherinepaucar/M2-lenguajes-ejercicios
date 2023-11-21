console.log('--------------INICIO EJERCICIO 4 SIN TIPADO------------------------');
function isBookRead(books, titleToSearch) {
  if(Array.isArray(books) && books.length > 0){
    const found = books.find((book) => book.title === titleToSearch);
    return found ? found.isRead : false;
  }
  return 'No es un array o es un array vacío';

  }
  const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  
  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
  console.log('--------------FIN EJERCICIO 4 SIN TIPADO------------------------');