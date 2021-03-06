class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  
    addBookToList(book){
      const list = document.getElementById('book-list')
      // Create a row
      const row = document.createElement('tr');
      // Insert cols
      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`
      list.appendChild(row)
    }
    showAlert(message, className){
      // Create div
      const div = document.createElement('div');
      // Add class name
      div.className =  `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get Parent
      const container = document.querySelector('.container');
      // Get Form
      const form = document.querySelector('#book-form');
      // Insert Alert
      container.insertBefore(div, form);
      // Timeout
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000)
    }
    deleteBook(target){
      if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
      }
    }
    clearFields(){
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    }
}
// Event Listener for Add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  
  // Instantiating a book
  const book = new Book(title, author, isbn) 

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === ''){
    // Error alert
    ui.showAlert('Please fill in all fields', 'error')
  } else {
    // Add a book to the list
  ui.addBookToList(book);

  // Success Alert
  ui.showAlert('Book Added!', 'success');

  // Clear Fields
  ui.clearFields();
  }

  // console.log(book)
  e.preventDefault();
})

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();
  // Delete Book
  ui.deleteBook(e.target);
  // Show message
  ui.showAlert('Book Removed', 'success');
  e.preventDefault();
  
})