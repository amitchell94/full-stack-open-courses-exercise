
const Header = (props) => {
  return (
      <>
        <h1>{props.title}</h1>
      </>
  )
}

const Content = (props) => {
  return (
      <div>
          {props.parts.map((el, i) =>
              <Part key={i} part={el}/>
          )}
      </div>
  )
}

const Part = (props) => {
  return (
      <>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(part => {
    sum += part.exercises
  })

  return (
      <>
        <p>Number of exercises {sum}</p>
      </>
  )
}

const Course = ({course}) => {

    return (
            <div>
                <Header title={course.name}/>
                <Content parts={course.parts}/>
            </div>
    )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        }
    ]
  }

  return <Course course={course} />
}

export default App;
