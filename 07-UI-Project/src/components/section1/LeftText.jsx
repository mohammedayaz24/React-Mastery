import Arrow from "./Arrow"
import HeroText from "./HeroText"

const LeftText = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftText