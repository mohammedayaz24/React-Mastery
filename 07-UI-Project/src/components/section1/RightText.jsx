import RightCard from "./RightCard"

const RightText = (props) => {
  return (
    <div id='right' className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 w-2/3 p-3'>
      {props.users.map(function(elem, idx){
        return <RightCard img={elem.img} tag={elem.tag} key={idx} id={idx + 1} />;
      })}
      
    </div>
  )
}

export default RightText