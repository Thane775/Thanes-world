import { render } from '@testing-library/react'
import React from 'react'


const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = {
    content: 'Fundamentals of React',
    exercises: 10
    
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    console.log(props.course),
    <div>
    <h1>{course}</h1>
    <p>{part1.content} {part1.exercises}</p>
    <p>{part2.name} {part2.exercises}</p>
    <p>{part3.name} {part3.exercises}</p>
    </div>
  )
}
