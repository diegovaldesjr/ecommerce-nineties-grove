'use client'

import { useState } from "react"

//TODO
export const ColorSelector = ({colors}) => {
    const [selectedColor, setSelectedColor] = useState(colors[0])
    return (
    <div className="flex">
      {
        colors.map( color => (
          <button 
            key={color}
            className={`rounded-full border-1 border-black w-8 h-8 mr-2 mb-4 bg-[${color}]`}
            onClick={() => setSelectedColor(color)}
          />
        ))
      }
    </div>
  )
}
