const addBtn = document.getElementById("add");
const body = document.body;
const notes = document.getElementById("notes");
const conttxt = document.getElementById("container1");
const contmain = document.getElementById("container2");
const maindate = document.getElementById("date1");
const sbtBtn = document.getElementById("smt");
const headText = document.getElementById("headtext"); // Title input
const textBody = document.getElementById("bodytext"); // Textarea content

function createNote(title, time, text) {
  let color = [`#CBA9FF`, `#D4FF6A`, `#AEE1F9`, `#FFD3A5`, `yellow`];
  let randomColor = Math.floor(Math.random() * color.length);
  const note = document.createElement("div");
  let samay = new Date();
  let din = samay.getDay();
  let mahina = samay.toLocaleString("default", { month: "short" });
  let ghante = samay.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  conttxt.className = "addNoteContainer";
  contmain.className = "hidden";
  maindate.innerText = `${din}th ${mahina} ${ghante}`;
  // headtext
  //   note.classList.add("note");
  //   note.style.backgroundColor = color[randomColor];
  //   note.innerHTML = `
  //                 <span class="title">${title}</span>
  //                 <span class="date">${din}th ${mahina} ${ghante}</span>
  //                 <span class="text">${text}</span>`;
  //   notes.append(note);
  //   s;
}
function saveTheValue(params) {
  let title = headText.value; // Gets the title from input
  let text = textBody.value; // Gets the content from textarea
  console.log("Title:", title);
  console.log("Content:", text);
}
sbtBtn.addEventListener("click", () => {
  saveTheValue();
});
addBtn.addEventListener("click", () => {
  createNote();
});
