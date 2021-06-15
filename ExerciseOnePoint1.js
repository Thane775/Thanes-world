import React from 'react'


const Header = (props) => {
  const course = 'Half Stack application development'
  return(
   <div>
    <h1>{course}</h1>
   </div> 
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

return(
  <div>
    <p>
      {part1} {props.exercises1}
    </p>
    <p>
      {part2} {props.exercises2}
    </p>
    <p>
      {part3} {props.exercises3}
    </p>
  </div>

  )
}

const Total = () =>{
  const tootal = 10 + 7 + 14
  return(
    <p>Number of exercise {tootal}</p>
  )
}

const App = () => {
  
  

  return (
    <div>
      <Header />
      <Content exercises1="10" exercises2="7" exercises3="14" />
      <Total />
    </div>
  )
}

export default App
