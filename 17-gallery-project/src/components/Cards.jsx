import React from 'react'

const Cards = (props) => {
  return (
    <div>
        <a href={props.elem.url} target="_blank" rel="noreferrer">
          <div className="h-40 w-40 overflow-hidden bg-white rounded-xl">
            <img className="h-full w-full object-fill" src={props.elem.download_url} alt={props.elem.author} />
          </div>
          <div className="p-2 font-black text-lg">{props.elem.author}</div>
        </a>
        
    </div>
  )
}

export default Cards