let addBtn = document.querySelector(".heading-buttton .btn #add-btn");
let notesContainer = document.querySelector(".notes-container");
let parentContainer = document.querySelector(".parent-container");
let inputTitle  = document.querySelector(".parent-container .write-title");
let inputNote  = document.querySelector(".parent-container .write-content");
let saveNoteBtn  = document.querySelector(".parent-container .save-note");
let cross = document.querySelector(".edit-cross .cross")


// ACCESS FOR THEME
let changeTheme = document.querySelector("#theme-btn");
let bodyTag  = document.querySelector('body');
let topHeading = document.querySelector(".heading-buttton h2");
let allNewNotes = document.querySelectorAll(".box1");



changeTheme.addEventListener("click", () => {
    // Note: Browser rgb() value return karta hai
    if (bodyTag.style.backgroundColor === "rgb(226, 232, 232)") {
        bodyTag.style.backgroundColor = "rgba(18, 17, 17, 1)";
        topHeading.style.color = "white";
    } else {
        bodyTag.style.backgroundColor = "rgb(226, 232, 232)";
        topHeading.style.color = "black";
    }
     let allNewNotes = document.querySelectorAll(".box1");
     allNewNotes.forEach((a) => {
         let allHeadings = a.querySelector(".noteHeading");
         let allContent  = a.querySelector(".noteContent")

        if(bodyTag.style.backgroundColor === "rgb(226, 232, 232)") {
            a.style.backgroundColor = "white";
            allHeadings.style.color = "black";
            allContent.style.color = "black";

        }
        else{
            a.style.backgroundColor = "rgba(44, 41, 41, 1)";
            allHeadings.style.color  = "white";
            allContent.style.color = "white";
        }
     })
    saveData();
});


addBtn.addEventListener("click", () => {
     parentContainer.style.display = "block";
})

saveNoteBtn.addEventListener("click", () => {
    if( inputNote.value === "" || inputTitle.value === ""){
    alert("write the Title Name and Content");
}

else{
    Note = inputNote.value;
    Title = inputTitle.value;
    addFinalNote(Note,Title);
    inputNote.value = "";
    inputTitle.value = "";
    saveData();
}
})

 function addFinalNote(Note,Title){
    parentContainer.style.display = "none";
     newNote = document.createElement("div");
       newNote.className = "box1";
       addFeatures(newNote, Note, Title);
    notesContainer.appendChild(newNote);
    let allNewNotes = document.querySelectorAll(".box1");

    allNewNotes.forEach((a) => {
        if(topHeading.style.color === "white"){
            a.style.backgroundColor = "#363232ff";
            
        }
        else{
            a.style.backgroundColor = "white";
        }
    })
    
}

function addFeatures(newNote,Note,Title ){
    let noteHeading = document.createElement("h3");
    noteHeading.className = "noteHeading";
    noteHeading.innerText = "Title :- " + Title;

    let noteContent = document.createElement("p");
    noteContent.className = "noteContent";
    noteContent.innerText = Note;

    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.innerText = "Remove";

    newNote.appendChild(noteHeading);
    newNote.appendChild(noteContent);
    newNote.appendChild(removeBtn);
    


}

 notesContainer.addEventListener("click", (e) => {
      if(e.target.className === "removeBtn"){
        e.target.parentElement.remove();
         saveData();
      }
    })

cross.addEventListener("click", () => {
    parentContainer.style.display = "none";
    inputNote.value = "";
    inputTitle.value = "";
   
})

// local storage 

function saveData(){
    localStorage.setItem("data",notesContainer.innerHTML);
    
}

function showData(){
    notesContainer.innerHTML = localStorage.getItem("data");

     if (bodyTag.style.backgroundColor === "rgb(226, 232, 232)") {
        bodyTag.style.backgroundColor = "rgba(18, 17, 17, 1)";
        topHeading.style.color = "white";
    } else {
        bodyTag.style.backgroundColor = "rgb(226, 232, 232)";
        topHeading.style.color = "black";
    }
     let allNewNotes = document.querySelectorAll(".box1");
     allNewNotes.forEach((a) => {
         let allHeadings = a.querySelector(".noteHeading");
         let allContent  = a.querySelector(".noteContent")

        if(bodyTag.style.backgroundColor === "rgb(226, 232, 232)") {
            a.style.backgroundColor = "white";
            allHeadings.style.color = "black";
            allContent.style.color = "black";

        }
        else{
            a.style.backgroundColor = "rgba(44, 41, 41, 1)";
            allHeadings.style.color  = "white";
            allContent.style.color = "white";
        }
     })
}


showData();

