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
  const part1 = ['Fundamentals of React'," ", 10]
  const part2 = ['Using props to pass data'," ", 7]
  const part3 = ['State of a component'," ", 14]

return(
  <div>
    <p>
      {part1}
    </p>
    <p>
      {part2}
    </p>
    <p>
      {part3}
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
      <Content />
      <Total />
    </div>
  )
}

export default App
