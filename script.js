const addBtn = document.getElementById("add");
const body = document.body;
const notes = document.getElementById("notes");
const conttxt = document.getElementById("container1");
const contmain = document.getElementById("container2");
const maindate = document.getElementById("date1");
const sbtBtn = document.getElementById("smt");
const headText = document.getElementById("headtext"); // Title input
const textBody = document.getElementById("bodytext"); // Textarea content
let din;
let mahina;
let ghante;
let savedNotes = JSON.parse(localStorage.getItem("nishank")) || [];
const retrieved = JSON.parse(localStorage.getItem(`nishank`));

function createNote(title, time, text) {
  let samay = new Date();
  din = samay.getDate();

  mahina = samay.toLocaleString("default", { month: "short" });
  ghante = samay.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  conttxt.className = "addNoteContainer";
  contmain.className = "hidden";
  maindate.innerText = `${din}th ${mahina} ${ghante}`;
}
function saveTheValue(params) {
  let title = headText.value; // Gets the title from input
  let text = textBody.value; // Gets the content from textarea

  //   if the value is empty give user a error
  if (!title || !text) {
    alert("empty notes arend allowed");
    return;
  }
  let color = [`#CBA9FF`, `#D4FF6A`, `#AEE1F9`, `#FFD3A5`, `yellow`];
  let randomColor = Math.floor(Math.random() * color.length);

  let Note = {
    id: new Date(),
    title: title,
    inBody: text,
    time: `${din}th ${mahina} ${ghante}`,
    color: color[randomColor],
  };
  savedNotes.unshift(Note);
  localStorage.setItem("nishank", JSON.stringify(savedNotes));
  //get back to original page
  conttxt.className = "hidden";
  contmain.className = "";
  textBody.value = "";
  //   makeNote();
  window.location.reload();
}

function makeNote(params) {}
if (retrieved && retrieved.length > 0) {
  retrieved.forEach((element) => {
    const note = document.createElement("div");
    // headtext
    console.log(element.color);
    note.classList.add("note");
    note.style.backgroundColor = [element.color];
    // console.log(element);

    note.innerHTML = `
                    <span class="title">${element.title}</span>
                    <span class="date">${element.time}</span>
                    <span class="text">${element.inBody}</span>`;
    notes.append(note);
    //   s;
  });
}
// localStorage.removeItem('nishank')

sbtBtn.addEventListener("click", () => {
  saveTheValue();
});
addBtn.addEventListener("click", () => {
  createNote();
});
