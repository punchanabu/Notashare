
function renderAboutPage() {
    document.getElementById("app").innerHTML = 
    `
    <section class = "section-1">
        <div class = "paragraph">
            <h1> ค้นพบบันทึก<br>บทเรียนที่ดีที่สุด</h1>
            <p>แพลตฟอร์มแชร์โน้ตที่ดีที่สุด</p>
            <button id = "upload-button-1">เพิ่มโน้ต</button>
        </div>
        <img src="../assets/stacked book.png">
    </section>
    <section class = "section-2" >
        <img src="../assets/graduate.png">
        <div class = "paragraph">
            <h1>ทวนบทเรียน<br>จากโน้ตของเพื่อน </h1>
            <p>เรียนรู้บทเรียนแบบกระชับ หัวข้อที่สำคัญๆประหยัดเวลาในการอ่านเอง</p>
            <button id = "list-button">ดูโน้ตสรุป</button>
        </div>
    </section>
    <section class = "section-1">
        <div class = "paragraph">
            <h1>เเชร์โน้ตของตัวเอง</h1>
            <p>เผยเเพร่โน้ตที่ตัวเองที่ได้บันทึกให้กับเพื่อนๆ<br>หรือผู้คนที่สนใจในวิชานั้นๆ ได้อย่างเสรี</p>
            <button id = "upload-button-2">เพิ่มโน้ต</button>
        </div>
        <img src="../assets/notebook.png">
    </section>
    <section>
        <div class="examnote">
            <h1>ตัวอย่างโน้ต</h1>
        </div>
        <div class="flexbox">
            <div class="item">
                <img src="../assets/2.png" class="center">
                <div class="content">
                    <h4>RICK ASTLEY</h4> 
                </div>
                <div class = "content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna in velit condimentum consectetur. Ut ac dictum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi justo augue, lobortis a dolor et, fermentum ultrices nunc. Vestibulum molestie ipsum augue, at suscipit justo bibendum eleifend. </div>
            </div>
            <div class="item"> 
                <img src="../assets/3.png" class="center">
                <div class="content">
                    <h4>PRAYUT J</h4> 
                </div>
                <div class = "content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna in velit condimentum consectetur. Ut ac dictum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi justo augue, lobortis a dolor et, fermentum ultrices nunc. Vestibulum molestie ipsum augue, at suscipit justo bibendum eleifend. </div>
            </div>
            <div class="item"> 
                <img src="../assets/1.png" class="center">
                <div class="content">
                    <h4>OLIVIA COLE</h4> 
                </div>
                <div class = "content1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis urna in velit condimentum consectetur. Ut ac dictum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi justo augue, lobortis a dolor et, fermentum ultrices nunc. Vestibulum molestie ipsum augue, at suscipit justo bibendum eleifend. </div>
            </div>
        </div>
    </section>
    `;
    document.getElementById("upload-button-1").addEventListener('click', () =>  {
        window.location.hash = 'upload';
    });
    document.getElementById("upload-button-2").addEventListener('click', () =>  {
        window.location.hash = 'upload';
    });
    document.getElementById("list-button").addEventListener('click', () => {
        window.location.hash = 'note-list';
    });
    
}
  
function renderNoteList() {
    document.getElementById('app').innerHTML = 
    `
    <div style = "display: flex; justify-content: flex-end;">
        <input id = "search" placeholder=" ค้นหาสมุดโน็ต" />
    </div>
    <section id = "note-list"></section>
    `;  
    // Attach JavaScript event listener to the input element
    document.getElementById('search').addEventListener('input', function() {
        renderNote(demoData, this.value);
    });
    var script = document.createElement('script');
    script.src = '../script/renderNote.js';
    script.onload = function() {
        renderNote(demoData);
    };
    document.head.appendChild(script);
  }
  
  function renderUploadPage() {
    document.getElementById('app').innerHTML = 
    `
    <div class = content-share-note>
        <input class = "content-share-note-input" placeholder = "name"></input>
        <div>
            <button>add photo</button>
            <button>add tag</button>
        </div>
    </div>
    `;
  }

  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#about') {
      renderAboutPage();
    } else if (window.location.hash === '#note-list') {
    
      renderNoteList();
    } else if (window.location.hash === '#upload') {
      renderUploadPage();
    }
    console.log("hash-change")
  });
  document.addEventListener('DOMContentLoaded', function() {
    renderAboutPage();
  });
  