import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part_name: 'Fundamentals of React',
        no_of_exercises: 10
      },
      {
        part_name: 'Using props to pass data',
        no_of_exercises: 7
      },
      {
        part_name: 'State of a component',
        no_of_exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.coursename}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part.part_name} {props.part.no_of_exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  let exercises_total = 0;
  props.parts.forEach(part => {
    exercises_total += part.no_of_exercises
  })

  return (
    <>
      <p>Number of exercises {exercises_total}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))