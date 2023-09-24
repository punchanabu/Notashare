/*

    fetchData = [
            {name: "name1", description: "", view: 90}
            {name: "name2", description: "", view: 100}
            {name: "name3", description: "2", view: 80}
    ]
    
*/
demoData = [
    {name: "name1", description: "", view: 90},
    {name: "name2", description: "hello", view: 100},
    {name: "name3", description: "hi", view: 80},
    {name: "name4", description: "hello", view: 100}
]
const renderNote = (datas) => {
    datas.map(data => {
        const note = document.createElement("div");

        note.innerHTML = 
        `   
            <img src = "../assets/_.jpeg"/>
            <h1>${data.name}</h1>
            <p>${data.description}<p>
            <p>${data.view}</p>
        `
        note.className = "box";
        const note_list = document.getElementById("note-list");
        note_list.appendChild(note);
    })
};
// render note;
renderNote(demoData);

