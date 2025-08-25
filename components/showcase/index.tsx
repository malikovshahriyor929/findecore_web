"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Sparkles } from 'lucide-react'
import { Button } from '../ui/button'
import Buttons from '@/shared/generics/button'
import { AITypingAnimation } from './animationLikeTyping'
import Link from 'next/link'

const Showcase = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-[90%] py-18 max-[490px]:py-5'>
      <motion.div
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.4 } }
        className='w-fit shadow  rounded-full border border-gray-200'
      >
        <div className="py-1.5 px-2 max-[321px]:px-1.5">
          <div className="flex items-center justify-center space-x-1 text-xs">
            <Sparkles size={ 14 } className=" text-orange-500" />
            <span className="text-gray-700">Join Findecor today and get $50 free credits</span>
          </div>
        </div>
      </motion.div>
      <div className='grid grid-cols-2  my-5 max-[1240px]:grid-cols-1 max-[1240px]:items-center gap-5 '>
        <motion.div
          initial={ { opacity: 0, y: -20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }>
          <h1 className="text-5xl lg:text-[70px] font-serif text-gray-900 leading-tight mb-6">
            Find the perfect furniture and decor for your room with an AI assistant.
          </h1>
          <p className="text-gray-700 mb-8">
            Find the perfect decor for your home from online marketplaces or nearby stores. Get AI-powered
            recommendations tailored to your style and space. Discover, match, and shop effortlessly!
          </p>
          <Link href={ "https://app.findecor.io" }>
            <div className="flex flex-col sm:flex-row gap-4">
              <Buttons>
                Get started
              </Buttons>
              <Buttons type="outline">
                Let's Talk
              </Buttons>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={ { opacity: 0, y: -20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.4 } }
          className='max-[1240px]:mt-10'
        >
          <AITypingAnimation />
        </motion.div>
      </div>
    </div>
  )
}

export default Showcase