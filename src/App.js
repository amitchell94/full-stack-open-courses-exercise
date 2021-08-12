
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
  return (
      <>
        <p>Number of exercises {props.parts.reduce((sum,current) => sum + parseInt(current.exercises),0)}</p>
      </>
  )
}

const Course = ({course}) => {

    return (
            <div>
                <Header title={course.name}/>
                <Content parts={course.parts}/>
                <Total parts = {course.parts} />
            </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

  return courses.map((course,i) => <Course key ={i} course={course} />)
}

export default App;
