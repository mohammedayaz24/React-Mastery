
const Card = (props) => {
  console.log(props)
  return (
    <>
      <div className="card">
        <img src={props.url}></img>
        <h1>{props.user}</h1>
        <p>{props.role}</p>
        <button className="btn">View</button>
      </div>
    </>
  )
}


export default Card