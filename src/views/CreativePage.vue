<template>
  <div class="creative-page">
    <h1>Creative Page</h1>
    <p>Where Creativity and Individuality Shines.</p>

    <h1>Hobbies</h1>
    <!-- This is the container for creating content in the creative page. It also enables the use of a columnar design for the contents. -->
    <div class="content-container">
      <!-- Gaming Section -->
      <div class="column gaming-section">
        <h2>Gaming</h2>
        <div class="genshin">
          <h3>Genshin Impact</h3>
          <img src="../assets/Genshin.jpg" alt="Genshin Impact" height="270px" width="500px">
        </div>
        <div class="stardew">
          <h3>Stardew Valley</h3>
          <img src="../assets/Stardew.jpg" alt="Stardew Valley" height="270px" width="500px">
        </div>
      </div>

      <!-- Anime Watching Section -->
      <div class="column anime-section">
        <h2>Watching Anime</h2>
        <div class="yumeiro">
          <h3>Yumeiro Patissiere</h3>
          <img src="../assets/Yumeiro.jpg" alt="Yumeiro Patissiere" height="270px" width="500px">
        </div>
        <div class="mashle">
          <h3>Mashle</h3>
          <img src="../assets/Mashle.jpg" alt="Mashle" height="270px" width="500px">
        </div>
      </div>

      <!-- Resume Section -->
      <div class="column resume-section">
        <h2>Resume</h2>
        <h3>Sample Resume</h3>
        <img src="../assets/Resume.jpg" alt="Resume">
      </div>
    </div>

    <h1>Certificates</h1>

    <!-- Certificates Section -->
    <div class="certificates-section">
      <div class="certificate-item">
        <h3>Coess Certificate</h3>
        <img src="../assets/CoessCert(22-23).png" alt="Coess Certificate" height="150px" width="270px">
        <img src="../assets/CoessCert(23-24).png" alt="Coess Certificate" height="150px" width="270px">
      </div>
    </div>
  </div>
</template>

<style scoped>
.creative-page {
  border-radius: 2%;
  margin: 2%;
  padding: 20px;
  font-family: 'Cursive', sans-serif;
}

.content-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.column {
  flex: 1;
  margin: 0 10px;
}

.gaming-section, .anime-section, .resume-section {
  text-align: center;
  background-color: rgb(189, 197, 207);
  border-radius: 3%;
  padding: 5%;
}

.certificates-section, .mcertificates-section {
  text-align: center;
  background-color: rgb(189, 197, 207);
  border-radius: 3%;
  padding: 5%;
  margin-top: 20px;
}

h1, p {
  font-family: cursive;
  color: white;
}

h2, h3 {
  font-family: cursive;
  color: rgb(68, 68, 68);
}

img {
  border-radius: 8px;
  margin-top: 10px;
  width: 100%;
  height: auto;
}

/* Reduce the size of certificate images */
.certificates-section img, .mcertificates-section img {
  height: 250px;
  width: 370px;
  margin-left: 20px;
}
</style>
