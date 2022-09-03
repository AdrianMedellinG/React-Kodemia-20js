const Title = (props) => {
    console.log(props)
    return (
        <h1 className="card-name">{props.text}</h1>
    )
}

export default Title;