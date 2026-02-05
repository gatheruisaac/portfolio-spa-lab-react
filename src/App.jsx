import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1st COMPONENT Header
const Header = () => {
  return (
    <header className="header">
      <h1>Personal Project Showcase App</h1>
    </header>
  );
};

// COMPONENT 2 Add project
const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    // Create new project object
    const newProject = {
      id: Date.now(), 
      title,
      description
    };

    // Send data to Parent
    onAddProject(newProject);

    // Reset form
    setTitle('');
    setDescription('');
  };

  return (
    <div className="card form-section">
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

// 3rdCOMPONENT : Projectitem ---
const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-image-placeholder">
        <span>✕</span>
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

// COMPONENT 4: ProjectList search bar and list of items---

const ProjectList = ({ projects, searchTerm, onSearchChange }) => {
  return (
    <div className="card list-section">
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Projects" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="projects-container">
        {projects.length > 0 ? (
          projects.map((proj) => (
            <ProjectItem key={proj.id} project={proj} />
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </div>
  );
};

// --- MAIN ---
// Parent that holds the State and ties everything together
function App() {
  // STATE 1: List of projects 
  const [projects, setProjects] = useState([
    { id: 1, title: "Project glaxosmith", description: " project management system for glaxosmith" },
    { id: 2, title: "Project 2:jungle nuts epz", description: "Media Advertisement " },
    { id: 3, title: "Project 3:KVM thika", description: "payroll system for KVM in thika" },
  ]);

  // Search term (state2)
  const [searchTerm, setSearchTerm] = useState('');

  // Add a new project
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  //Filter projects based on search
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProjectForm onAddProject={handleAddProject} />
        <br />
        <ProjectList 
          projects={filteredProjects} 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </main>
    </div>
  );
}

export default App;
