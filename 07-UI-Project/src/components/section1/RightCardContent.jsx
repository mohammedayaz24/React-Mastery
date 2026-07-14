import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className='bg-white text-black text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
            <div>
                <p className='text-xl leading-normal text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque asperiores officiis nemo.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-lg'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full text-lg'><ArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent