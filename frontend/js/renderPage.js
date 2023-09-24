function renderAboutPage() {
    document.getElementById("app").innerHTML = 
    `
    <header>
        <nav class = "navigation-bar"> 
            <a class = "logo">Notashare</a>
            <div>
                <a href="#about">เกี่ยวกับเรา</a>
                <a href= "#note-list">โน็ตสรุป</a>
                <a href="#upload">แชร์โน้ต</a>
            </div>
            <!-- use for mobile -->
            <a class = "drop-down-nav">≡</a>
        </nav>
    </header>
    <section class = "section-1">
        <div class = "paragraph">
            <h1> ค้นพบบันทึก<br>บทเรียนที่ดีที่สุด</h1>
            <p>แพลตฟอร์มแชร์โน้ตที่ดีที่สุด</p>
            <button>เพิ่มโน้ต</button>
        </div>
        <img src="../assets/stacked book.png">
    </section>
    <section class = "section-2" >
        <img src="../assets/graduate.png">
        <div class = "paragraph">
            <h1>ทวนบทเรียน<br>จากโน้ตของเพื่อน </h1>
            <p>เรียนรู้บทเรียนแบบกระชับ หัวข้อที่สำคัญๆประหยัดเวลาในการอ่านเอง</p>
            <button>ดูโน้ตสรุป</button>
        </div>
    </section>
    <section class = "section-1">
        <div class = "paragraph">
            <h1>เเชร์โน้ตของตัวเอง</h1>
            <p>เผยเเพร่โน้ตที่ตัวเองที่ได้บันทึกให้กับเพื่อนๆ<br>หรือผู้คนที่สนใจในวิชานั้นๆ ได้อย่างเสรี</p>
            <button>เพิ่มโน้ต</button>
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
                <div class = "content1"></div>
            </div>
            <div class="item"> 
                <img src="../assets/3.png" class="center">
                <div class="content">
                    <h4>PRAYUT J</h4> 
                </div>
                <div class = "content1"></div>
            </div>
            <div class="item"> 
                <img src="../assets/1.png" class="center">
                <div class="content">
                    <h4>OLIVIA COLE</h4> 
                </div>
                <div class = "content1"></div>
            </div>
        </div>
    </section>
    <footer>
        <h1 >Contact</h1>
        <div >
            <a><i class="fa fa-paper-plane"></i> Email</a>
            <a><i class="fa fa-linkedin"></i> LinkedIn</a>
            <a><i class="fa fa-instagram"></i> Instragram</a>
            <a><i class="fa fa-twitter"></i> Twitter</a>
        </div> 
    </footer>
    `;
}
  
function renderNoteList() {
    document.getElementById('app').innerHTML = 
    `
    <!-- header + navbar -->
    <header>
        <nav class = "navigation-bar"> 
            <a class = "logo">Notashare</a>
            <div>
                <a href= "#about"> เกี่ยวกับเรา</a>
                <a href= "#note-list">โน็ตสรุป</a>
                <a href= "#upload">แชร์โน็ต</a>
            </div>
            <!-- use for mobile -->
            <a class = "drop-down-nav">≡</a>
        </nav>
    </header>
    <div style = "display: flex; justify-content: flex-end;">
        <input id = "search" placeholder=" ค้นหาสมุดโน็ต"/>
    </div>
    <!-- render note component -->
    <section id = "note-list"></section>
    <footer>
        <h1 >Contact</h1>
        <div >
            <a><i class="fa fa-paper-plane"></i> Email</a>
            <a><i class="fa fa-linkedin"></i> LinkedIn</a>
            <a><i class="fa fa-instagram"></i> Instragram</a>
            <a><i class="fa fa-twitter"></i> Twitter</a>
        </div> 
    </footer>
    <script type = "module" src = "../js/index.js"/>
    `;
  }
  
  function renderUploadPage() {
    document.getElementById('app').innerHTML = 
    `
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
  });
  document.addEventListener('DOMContentLoaded', function() {
    renderAboutPage();
  });
  