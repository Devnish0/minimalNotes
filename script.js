const addBtn = document.getElementById('add');
const body = document.body
const notes = document.getElementById("notes")

function createNote(title,time,text) {
    let color = [`#CBA9FF`,`#D4FF6A`,`#AEE1F9`,`#FFD3A5`,`yellow`]
    let randomColor = Math.floor((Math.random()*color.length))
    const note  = document.createElement('div');
    let samay = new Date();
    let din = samay.getDay()
    let mahina = samay.toLocaleString('default',{month:'short'})
    let ghante = samay.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    note.classList.add('note');
    note.style.backgroundColor = color[randomColor]
    note.innerHTML = `
                <span class="title">${title}</span>
                <span class="date">${din}th ${mahina} ${ghante}</span>
                <span class="text">${text}</span>`
    notes.append(note)

}
addBtn.addEventListener('click',()=>{ createNote("nishank","23:32", "this is the test")});
