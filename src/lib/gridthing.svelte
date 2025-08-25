<script>
  import { projects } from '../featuredProjects.js';
  import { page } from '$app/stores';
  
  const isFeaturedOnly = $page.url.searchParams.has('featured');
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    justify-content: center;
    max-width: 900px;
    margin: auto;
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
    padding: 2rem;
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

  .yeelow {
    background: #fff6d6
  }
</style>

<div class="grid">
  {#each projects as project}
    {#if (isFeaturedOnly && "best" in project) || !isFeaturedOnly || "bypass" in project}
      {#if project.link.substring(0, 8) != 'https://'}
        <a href={project.link} class="card" class:yeelow={"best" in project}>
          <img src={project.image} alt={project.title}/>
          <div class="content">
            <div class="title text-black">{project.title}</div>
            <div class="description">{project.description}</div>
            {#if "best" in project}
              <div class="description" style="color: #ebc334; font-size:150%">⭐ Featured Project</div>
            {/if}
          </div>
        </a>
      {:else}
        <a href={project.link} target="_blank" rel="noopener noreferrer" class="card" class:yeelow={"best" in project}>
          <img src={project.image} alt={project.title} />
          <div class="content">
            <div class="title text-black">{project.title}</div>
            <div class="description">{project.description}</div>
            {#if "best" in project}
              <div class="description" style="color: #ebc334; font-size:150%">⭐ Featured Project</div>
            {/if}
          </div>
        </a>
      {/if}
    {/if}
  {/each}
</div>