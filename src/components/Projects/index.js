import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to graphics designing. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'dot net' ?
            <ToggleButton active value="dot net" onClick={() => setToggle('dot net')}>DOT NET APPS</ToggleButton>
            :
            <ToggleButton value="dot net" onClick={() => setToggle('dot net')}>DOT NET APPS</ToggleButton>
          }
          <Divider />
          {toggle === 'graphics' ?
            <ToggleButton active value="graphics" onClick={() => setToggle('graphics')}>GRAPHICS</ToggleButton>
            :
            <ToggleButton value="graphics" onClick={() => setToggle('graphics')}>GRAPHICS</ToggleButton>
          }
          <Divider />
          {toggle === 'ML' ?
            <ToggleButton active value="ML" onClick={() => setToggle('ML')}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value="ML" onClick={() => setToggle('ML')}>MACHINE LEARNING</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects