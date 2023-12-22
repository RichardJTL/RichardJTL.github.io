class Navbar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `     <div class="navbar">
        <div class = "icon">
            <a href="index.html" class="icon_home" style="font-size:25px">&#x2302;</a>
            <a href="javascript:void(0);" class="icon_ham" onclick="myFunction()">&#9776;</a>
        </div>
        <div class="menu">
            <a href="memes.html">Favorite Memes</a>
            <a href="memes.html">Favorite Memes</a>
            <a href="memes.html">Favorite Memes</a>
            <a href="memes.html">Favorite Memes</a>
            <a href="memes.html">Favorite Memes</a>
            <a href="memes.html">Favorite Memes</a>
        </div>
    </div>`
        }
  }
customElements.define('navbar-component', Navbar);

