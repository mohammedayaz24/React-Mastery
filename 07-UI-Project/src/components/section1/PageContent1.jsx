import LeftText from "./LeftText"
import RightText from "./RightText"

const PageContent1 = (props) => {
  return (
    <div className='py-10 flex gap-x-10 items-center h-[90vh] px-18 '>
        <LeftText />
        <RightText users={props.users}/>
    </div>
  )
}

export default PageContent1