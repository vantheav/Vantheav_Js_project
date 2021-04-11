let down = document.querySelector('#down');
let up = document.querySelector('#left');
let btnHide = document.querySelector('.second-btn');
function student(event) {

    // 1- Check the event if raised on the button delete
    if (event.target.className === 'delete'){
    event.target.parentElement.remove();
    };
    }
    
    function addBook(event) {
    event.preventDefault();
    // 1- Get the  name from the input student Name and input value
    let book = document.getElementById('add-student');
    let bookName = document.createElement('span');
    let scrption = document.getElementById('sms');
    let p = document.createElement('p');
    p.textContent = "Comment: "+scrption.value;
    let score = document.getElementById('score');
    let gender = document.getElementsByName('select');
    let sel = "";
    for (yes of gender){
        if (yes.checked){
            sel = yes;
        }
    }
    if ((sel.value ==="Male" || sel.value==="Female") && score.value !=""  && book.value !="" && scrption.value !=""){
    bookName.textContent = book.value;
    let span = document.createElement('span');
    span.classList.add('name');
    span.textContent = book.value + " | Gender : " + sel.value +" | Score : "+ score.value+' pt';
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    
    let btnDelet = document.createElement('div');
    btnDelet.classList.add('delete');
    btnDelet.textContent = 'delete';
    
    // 4- Create a new li
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    // 5- Add bookName and deleteBtn to li and li to the bookList UL
    li.appendChild(span);
    li.appendChild(btnDelet);
    ul.appendChild(li);
    li.appendChild(p);
    down.style.display = 'block';
    up.style.display = 'none';
    btnHide.style.display = 'block';
    }else{
        window.confirm("please Input all information");
    }
    
    }
    // sort()===============================================================

    

    
    function searchBook(event) {
    // 1- Get the search text
    // 2- Loop on all LI
    
    // Update the style of the LI (visible or hidden)
    let text = searchBookInput.value.toLowerCase();
    let listBook=document.querySelectorAll('li');
    for (let li of listBook){
    let title =li.firstElementChild.textContent.toLowerCase();
    if (title.indexOf(text)===-1){
    li.style.display="none";
    }else{
    li.style.display="";
    };
    }
    }
    // MAIN -------------------------------------------------------------
    let bookList = document.querySelector("#book-list ul");
    bookList.addEventListener("click", student, );
    
    let addForm = document.getElementById("add-book");
    addForm.addEventListener("submit", addBook);
    
    let searchBookInput = document.getElementById("search-name").querySelector("input");
    searchBookInput.addEventListener("keyup", searchBook);

    // hide in put --------------------------------------
    
    btnHide.addEventListener('click', e =>{
    down.style.display = 'none';
    up.style.display = 'block';
    btnHide.style.display = 'none';
    })
