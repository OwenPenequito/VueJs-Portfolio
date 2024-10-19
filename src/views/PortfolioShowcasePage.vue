<template>
<div class="portfolio-showcase">
    <h1><strong>My Portfolio</strong></h1>
    <div class="d-flex align-items-center"> <!--This allows the items to be positioned in the center. The d-flex allows for a flexible layout for the column.-->
        <div class="col-md-6" v-for="(project, index) in projects" :key="index">
            <div class="card project-card">
                <img :src="require(`../assets/${project.image}`)" class="card-img-top" :alt="project.title" />
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <a :href="project.link" target="_blank" class="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
  
 <script>
 export default {
    data() {
        return {
            projects: [
                {
                    title: 'Project One',
                    description: 'The Archive: A Web-based Research Compendium',
                    image: 'The_Archive.jpg',
                    link: 'https://github.com/OwenPenequito/The-Archive-1.git'
                }
            ]
        };
    }
};
</script>
  
<style scoped>
.portfolio-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 10px;
  text-align: center;
  background-color: none;
}
  
.project-card {
  width: 500px;
  transition: transform 0.3s ease;
  font-family: cursive;
  padding: 10%;
  border-radius: 10px;
}
  
.project-card:hover {
  transform: translateY(-10px); /* Adds hover effect when the cursor is pointing at the item */
}
  
.card-img-top {
  max-height: 300px;
  object-fit: cover;
}
  
h1 {
  margin-bottom: 100px;
  color: white;
  font-family: cursive;
  font-size: 2.5rem;
}

  </style>
  