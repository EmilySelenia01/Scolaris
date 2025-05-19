let routePath = "";

if (window.location.pathname.includes("/Teachers/") ||
    window.location.pathname.includes("/Curses/") ||
    window.location.pathname.includes("/Students/") ||
    window.location.pathname.includes("/Groups/") ||
    window.location.pathname.includes("/Users/")) {
    routePath = "../"
}


function header() {
    const header = `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="nav-link " href="#">Scolaris</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/Home.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Module
                        </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/Curses/index_C.html">Curses</a></li>
                        <li><a class="dropdown-item" href="/Groups/index_G.html">Groups</a></li>
                        <li><hr class="dropdown-divider" ></li>
                        <li><a class="dropdown-item" href="/Students/index_S.html">Student</a></li>
                        <li><a class="dropdown-item" href="/Teachers/index_T.html">Teacher</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Contact</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <a class="btn btn-outline-light me-3 btn-login" href="/Users/Login.html">Login</a>
                    <a class="btn btn-outline-warning btn-register" href="/Users/Register.html">Register</a>
                </form>
            </div>
        </div>
    </nav>`;
    document.getElementById("Header_Global").innerHTML = header;

}

function footer() {

    const footer = `
    <div class="footer-nav">
        <a href="#inicio">Home</a>
        <a href="./Curses/index_C.html">Curses</a>
        <a href="./Teachers/index_T.html">Teachers</a>
    </div>
    
    <div class="footer-social">
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
    </div>

    <p>&copy; 2025 Sunset Studio | Todos los derechos reservados</p>
    `;
    document.getElementById("Footer_Global").innerHTML = footer;
}

/*execute the functions*/
header()
footer()