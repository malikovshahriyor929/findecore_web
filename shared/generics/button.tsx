import { Button } from '@/components/ui/button'
import React from 'react'

const Buttons = ({ type = "default", className, children }: { type?: string, className?: string, children: React.ReactNode }) => {
  if (type === "default") {
    return (
      <Button className={ `text- text-white !bg-[#EA580C] px-3 py-5 rounded-full font-semibold  cursor-pointer ${className} ` } >
        { children }
      </Button>
    )
  } else {
    return <Button className={ `px-3 py-5 rounded-full text-black bg-white font-semibold border border-gray-200 cursor-pointer ${className} ` } >
      { children }
    </Button>
  }
}

export default Buttons