import React from 'react'
import '../styles/tech.css'
import react from '../../../assets/react.png'
import js from '../../../assets/javascript.png'
import ts from '../../../assets/typescript.png'
import html from '../../../assets/html.png'
import css from '../../../assets/csss.png'
import node from '../../../assets/node.png'
import mongo from '../../../assets/mongo.png'
import java from '../../../assets/java.png'
import postgres from '../../../assets/postgres.png'
import python from '../../../assets/python.png'
import docker from '../../../assets/docker.png'
import git from '../../../assets/github.png'
import linux from '../../../assets/linux.png'
import php from '../../../assets/php.png'
import scikit from '../../../assets/sciket.png'
const tech =[react,js,ts,html,css,node,mongo,java,postgres,python,docker,git,linux,php,scikit]
const Tech = () => {
  return (
    <div className='techContainer'>
        <h1><span>T</span>echnologies i use?</h1>
        <div className="techs">

        {tech.map((item,index)=>{
            return <img src={item} alt="" key={index}/>
        })}
        </div>
    </div>
  )
}

export default Tech