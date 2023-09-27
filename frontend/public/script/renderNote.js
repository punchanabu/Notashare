
// metadata
const demoData = [
    {name: "Circular Motion", description: "Circular motion is the movement of an object along the circumference of a circle, maintaining a constant distance from a central point while experiencing a centripetal force that keeps it on its path.", view: 90},
    {name: "สรุป อุปสงค์", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis fringilla nisl. Pellentesque massa justo, imperdiet et erat et, malesuada fermentum velit. Phasellus hendrerit orci eget quam bibendum, id vehicula metus vulputate. Integer pulvinar consectetur dignissim. Ut et nulla ut erat posuere elementum. ", view: 100},
    {name: "name3", description: "hi", view: 80},
    {name: "name4", description: "hello", view: 100}
]
// render note
async function renderNote(datas,search = 0) {
    console.log("script loaded")
    const note_list = document.getElementById("note-list");
    while(note_list.firstChild) {
        note_list.removeChild(note_list.firstChild);
    }
    if (search && search != "") {
        datas = datas.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
    }
    datas.map(data => {
        const note = document.createElement("div");
        note.innerHTML = 
        `   
            <img src = "../assets/graduate.png"/>
            <h1>${data.name}</h1>
            <div class = "view">
                <img src = "../assets/1.png"/>
                <img src = "../assets/view.png" id = "view-icon"/>
                <p>${data.view}</p>
            </div>
        `
        note.className = "box";
        note_list.appendChild(note);
    })

};



