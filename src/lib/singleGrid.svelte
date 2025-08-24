<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.1fr));
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
    outline: 2px solid white;
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
</style>

<script>
	export let projects = [
		{
			title: "Placeholder",
			description: "please update",
			image: "/img/site.png",
			link: "/"
		}
	];

	// so like now i can only work on 4 projects max
	$: visibleProjects = projects.slice(0, 3);
</script>

<div class="grid">
	{#each visibleProjects as project}
		<a
			href={project.link}
			class="card"
			{...(project.link.startsWith('http')
				? { target: "_blank", rel: "noopener noreferrer" }
			  : {})}
		>
			<img src={project.image} alt={project.title} />
			<div class="content">
				<div class="title text-black">{project.title}</div>
				<div class="description">{project.description}</div>
			</div>
		</a>
	{/each}
</div>
