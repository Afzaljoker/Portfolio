import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import   GitHub  from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const {id} = useParams();
  const project = projectList[id] 
    return (
    <div className='project'><h1> {project.name}</h1>
    <img src={project.image}/>
    <GitHub/>
    <p>
        Skills: {project.skills}
        <br/>
        Description: {project.description} 
    </p>
    </div>
  )
}
