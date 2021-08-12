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

export default Course;