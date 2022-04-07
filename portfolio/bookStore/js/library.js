// openlibrary.org - subject
const baseURL = 'https://openlibrary.org/search.json';

// DOM Elements
const numberFound = document.querySelector('#numFound');
const booklist = document.querySelector('#list');
// const link = 

export async function getBooksBySubject(subject) {
  // subject provided by user
  const URL = `${baseURL}?title=${subject}`;

  const response = await fetch(URL);
  var data = await response.json(); // JSON format expected

 console.log(data); // testing only

  // screen output - should be placed in a view
  numberFound.textContent = `Total Found: ${data.numFound}`;
  let books = data.docs;
  books.forEach((book) => {
    let li = document.createElement('li') 
    li.textContent = book.title +' - ' + book.author_name;
    li.innerHTML +=`<div class="action"><a href="#" id="readBtn">Read</a><a href="#" id="saveBtn">Save</a><a href="#" id="buyBtn">Buy</a></div>`; 
    // li.innerHTML +=`<a href="#" id="saveBtn>Save</a>`; 
    // li.innerHTML +=`<a href="#" id="buyBtn>Buy</a>`; 
    booklist.append(li);
  });
}

export  function appendData(data) {
    for (let i = 0; i < data.numFound; i++) {
        let div = document.createElement("div");
        div.innerHTML = `Name: ' + ${data.docs[i].author_name[0]}`
        mainContainer.appendChild(div);
    };
}

// content.innerHTML += `<li> <a id="${text}" href="${link}">${text}<a/> </li>`;



