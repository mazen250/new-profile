import React from 'react';
import '../style/projects.css';
import projects from '../../../projects';
import { useEffect ,useState} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const  Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    const [projectsList, setProjectsList] = useState(projects);
    const [showMore, setShowMore] = useState(false);
    const [count, setCount] = useState(projectsList.length/3);
  return (
    <div className='projectsContainer'>
        <h1 style={{
            'fontSize': '2.5rem',
            'fontWeight': 700,
            'color': 'rgb(160, 160, 160)',
            'marginBottom': '2rem',
            'textAlign': 'start',
         
        }}><span style={{
            'color': 'rgb(172, 64, 2)',
        }}>P</span>rojects</h1>
        <div className='projects'>
            {projectsList.slice(0,count).map((project, index) => {
                return (
                    <div className='projectCard' key={project.id}
                    data-aos="fade-right" data-aos-duration="5000"
                    >
                        <img src={project.image} alt={project.name} />
                        <div className='projectInfo'>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                       
                           
                            <a href={project.link} target='_blank' rel="noreferrer">Show Code/Website</a>
                            <div className="tech">
                            
                            {project.technologies.map((technology, index) => {
                                return (
                                    
                                    <p key={index}>{technology}</p>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='showMore'>
            <button onClick={() => {
                if(showMore){
                    setCount(projectsList.length/3);
                    setShowMore(false);
                }else{
                    setCount(projectsList.length);
                    setShowMore(true);
                }
            }}>{showMore ? 'Show Less Projects' : 'Show More Projects'}</button>
            </div>
    </div>
  )
};

export default Projects;