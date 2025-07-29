<script>
  import { projects } from '../featuredProjects.js';
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .card {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    background: white;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .description {
    color: #555;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<div class="grid">
  {#each projects as project}
    <a href={project.link} target="_blank" rel="noopener noreferrer" class="card">
      <img src={project.image} alt={project.title} />
      <div class="content">
        <div class="title text-black">{project.title}</div>
        <div class="description">{project.description}</div>
      </div>
    </a>
  {/each}
</div>