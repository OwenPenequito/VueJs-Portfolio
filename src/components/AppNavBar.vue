<template>
    <div class="navbar navbar-custom navbar-expand-lg px-4">
        <!--Brand-->
        <a class="navbar-brand text-light" href="http://localhost:8080/portfolio/profile"><strong>Portfolio</strong></a>

        <!--Toogler: This will appear in the navbar whenever the browser is minimized.-->
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!--Navbar Contents: This is seen on the top part of the portfolio. Used as a navigation panel for exploring the portfolio-->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item me-3">
                    <a class="bi bi-telephone nav-link active text-light" aria-current="page" href="http://localhost:8080/portfolio/contact">Contact</a> 
                </li>
                <li class="nav-item me-3">
                    <a class="bi bi-book-fill nav-link active text-light" aria-current="page" href="http://localhost:8080/portfolio/showcase">Portfolio Showcase</a>
                </li>
                <li class="nav-item me-3">
                    <a class="bi bi-brush-fill nav-link active text-light" aria-current="page" href="http://localhost:8080/portfolio/creative">Creative</a>
                </li>

                
            </ul>
            
            <!--User: The button in this section creates a dropdown menu where Profile and Logout is seen.-->
            <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle ms-5" type="button" id="userDrop" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person me-1"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="http://localhost:8080/portfolio/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="http://localhost:8080/login">Logout</a></li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppNavBar"
};
</script>

<style>
.navbar-custom {
    background-color: rgb(34, 51, 113);
    margin-bottom: 50px;
}

</style>
