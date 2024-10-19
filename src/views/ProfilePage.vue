<template>
  <div class="card profile-card">
    <div class="row">
      <!-- Profile Picture Section -->
      <div class="col-lg-4 col-md-12"> <!--Aligns the cards in columns-->
        <div class="card my-card">
          <img src="../assets/Profile.jpeg" class="card-img-top" alt="Profile Picture">
          <div class="card-body">
            <h5 class="card-title"><strong>Profile</strong></h5>
            <p class="card-text">I am Owen James A. Penequito</p>
            <h4><strong>Bio:</strong></h4>
            <p>A tired Computer Engineering Student waking up to finish backlogs.</p>
          </div>
        </div>
      </div>

      <!-- About Me and Socials Section -->
      <div class="col-lg-8 col-md-12">
        <div class="card about-card">
          <h4><strong>ABOUT ME</strong></h4>
          <p>Is a Computer Engineering Student who has an interest in game development and computer programming.
            His interest started in the 9th year of Junior Highschool when he learned html programming using notepad.
            With his passion for seeing his creation come from lines of code into its digital output, he took the course and 
            started learning programming languages.
          </p>
          <ul>
            <li><div class="bi bi-person">Age: 22 Years Old</div></li>
            <li><div class="bi bi-gender-male">Gender: Male</div></li>
            <li><div class="bi bi-calendar">Birthday: December 10, 2001</div></li>
            <li><div class="bi bi-house-door-fill">Address: Manila City</div></li>
            <li><div class="bi bi-book-fill">School: Technological Institute of the Philippines - Manila</div></li>
            <li><div class="bi bi-hourglass">Year and Program: 4th Year, Computer Engineering</div></li>
          </ul>
        </div>

        <div class="card social-card">
          <h4><strong>Skills:</strong></h4>
          <ul>
            <li><div class="bi bi-laptop">Critical Thinking</div></li>
            <li><div class="bi bi-laptop">Analytical Skills</div></li>
            <li><div class="bi bi-laptop">Detail-Oriented</div></li>
            <li><div class="bi bi-laptop">Teamwork</div></li>
          </ul>

          <h4><strong>Socials:</strong></h4>
          <ul>
            <li><a class="nav-link active" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i> Facebook</a></li> <!--noopener noreferrer is a security feature added when there is an outbound link attached in the code.-->
            <li><a class="nav-link active" href="https://x.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter-x"></i> X (Formerly Twitter)</a></li> <!--It allows for preventing the information from passing to the new/redirected page-->
            <li><a class="nav-link active" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i> Instagram</a></li>
            <li><a class="nav-link active" href="https://www.gmail.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-google"></i> Gmail</a></li>
            <li><a class="nav-link active" href="https://www.github.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  padding: 3%;
  background-color: rgb(189, 197, 207);
  margin: 50px;
}

.my-card {
  background-color: lightgrey;
  padding: 5%;
  margin-top: 50px;
  border-width: 3px;
  border-color: grey;
}

.about-card {
  background-color: lightgray;
  padding: 5%;
  margin-top: 20px;
  text-align: justify;
  border-width: 3px;
  border-color: grey;
}

.social-card {
  background-color: lightgray;
  padding: 5%;
  margin-top: 20px;
  text-align: justify;
  border-width: 3px;
  border-color: grey;
}

ul {
  list-style-type: none;
}

@media (max-width: 768px) {
  .profile-card {
    margin: 20px;
  }

  .my-card,
  .about-card,
  .social-card {
    width: 100%; /* Ensure full width on small screens */
    margin: 0 auto;
  }

  .my-card img {
    width: 100%;
    height: auto;
  }
}
</style>
