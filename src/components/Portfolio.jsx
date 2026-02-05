export default function Portfolio() {
  const projects = [
    { id: 1, title: "E-commerce App", desc: "Built with React & Node" },
    { id: 2, title: "Weather Dashboard", desc: "Real-time data vizualization" },
    { id: 3, title: "Task Manager", desc: "Full stack productivity tool" }
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
