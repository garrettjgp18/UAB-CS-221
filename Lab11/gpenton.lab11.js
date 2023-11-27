// Makes javascript load last, avoids errors
document.addEventListener("DOMContentLoaded", function() {

    // Tracks button instance for eventlistener
    const submitInput = document.getElementById('inputSubmit');

    // When submit button is clicked, takes input from text field and uses the Ajax library to query the API
    submitInput.addEventListener('click', function() {
        const userInput = document.getElementById('inputText').value;
        //https://stackoverflow.com/questions/62510204/how-to-get-request-url-in-a-jquery-ajax-request
        //https://stackoverflow.com/questions/44067489/jquery-ajax-function-call
        $.ajax({
            url:`https://www.googleapis.com/books/v1/volumes?q=${userInput}`,
            type: 'GET',
            dataType: 'json',
            success: function(data){ //If query is succesfull, call function
                queryBooks(data);
            }
        });
        
   });

   // Gathers all books from query
   function queryBooks(data) {
    const booksContainer = document.getElementById('results');
    booksContainer.innerHTML = "";

    // Says "If there are results, do this"
    if (data.items) {
        // Loops through each avaliable book. Creates a div to act like an object, setting attributes within the div throughout the process. 
        //https://www.techiedelight.com/dynamically-create-div-javascript/
        data.items.forEach(book => {
            const bookInst = book.volumeInfo; 
            const currentBook = document.createElement('div');
            currentBook.classList.add('book'); //Each div will have the class of 'book'


            // Adds the title (header) to the div
            const bookTitle = document.createElement('h4');
            bookTitle.textContent = bookInst.title;
            currentBook.appendChild(bookTitle);

            // Creates button on each title that will hide description of book
            const expandHide = document.createElement('button');
            expandHide.textContent = 'Hide';
            expandHide.classList.add('hidebtn'); //Each Details button will have the class of 'hidebtn'
            expandHide.addEventListener("click", function() {
                description.classList.toggle('hidden'); //toggles CSS .hidden class
                bookAuthors.classList.toggle('hidden');
                //ternary if/else - checks if true, if so, sets text of button to 'Show'. If false, sets as 'hide'.
                expandHide.textContent = description.classList.contains('hidden') ? 'Show' : 'Hide';
            });

            currentBook.appendChild(expandHide);

            // Adds the authors name to the div
            const bookAuthors = document.createElement('p');
            // These were not fun to learn, but I wanted to make it look neater than if : else statements everywhere. 
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
            //https://javascript.info/ifelse
            bookAuthors.textContent = `Author(s): ${bookInst.authors ? bookInst.authors.join(', ') : 'Unknown'}`;
            bookAuthors.classList.add('authors');
            currentBook.appendChild(bookAuthors);

            // Adds the books description to the div
            const description = document.createElement('p');
            description.textContent = bookInst.description;
            description.classList.add('description');
            currentBook.appendChild(description);

            // Finally, adds the div with all its added elements to the "results" div in the HTML
            booksContainer.appendChild(currentBook);
         
        });
    } else {
        // Appends string to 'results' div if no books in database.
        document.getElementById('results').innerHTML = "No Results Found";

      
    }

   }



});