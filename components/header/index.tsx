"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { X, Menu } from 'lucide-react'
import Link from 'next/link'
import Buttons from '@/shared/generics/button'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerVariants = {
    closed: {
      height: "auto",
    },
    open: {
      height: "100vh",
    }
  }

  const menuContentVariants = {
    closed: {
      opacity: 0,
      scale: 1
    },
    open: {
      opacity: 1,
      scale: 1
    }
  }

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 30
    },
    open: {
      opacity: 1,
      y: 0
    }
  }
  const menuItems = [
    { id: "howItWorks", label: "How it works" },
    { id: "features", label: "Features" },
    { id: "testimonial", label: "Testimonial" }
  ]

  return (
    <motion.div
      className={ `backdrop-blur-sm border-b border-gray-200   ${menuOpen
        ? 'fixed inset-0 z-50 max-w-none overflow-hidden'
        : 'max-w-[1440px] mx-auto sticky top-0 z-50'
        }` }
      variants={ headerVariants }
      initial="closed"
      animate={ menuOpen ? "open" : "closed" }
      transition={ {
        duration: 0.3,
        ease: "easeInOut"
      } }
      layout
    >
      <div className={ `w-[90%] mx-auto flex justify-between items-center py-4 ${menuOpen ? 'absolute top-0 left-1/2 transform -translate-x-1/2 z-20' : 'relative'
        }` }>
        <div className='flex items-center gap-7'>
          <Image
            src={ "/findecorfull.svg" }
            width={ 154 }
            height={ 60 }
            alt='logo'
          />
          <Separator orientation='vertical' className='!h-[24px] !w-px max-[810px]:hidden' />
          <div className='flex items-center gap-5 max-[810px]:hidden'>
            { menuItems.map((item) => (
              <div key={ item.id }>
                <Link href={ `#${item.id}` } scroll={ true }>
                  <h1 className='text-[#475569] text-[14px] cursor-pointer hover:text-[#EA580C] transition-colors duration-100'>
                    { item.label }
                  </h1>
                </Link>
              </div>
            )) }
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Link href={ "https://app.findecor.io" } className='flex items-center gap-3 cursor-pointer'>
            <button className='text-sm p-2 text-[#475569] max-[810px]:hidden cursor-pointer'>
              Sign in
            </button>
            <Buttons className='max-[810px]:hidden' >
              Get started
            </Buttons>
          </Link>

          <div className='min-[811px]:hidden relative'>
            <AnimatePresence mode="wait">
              { !menuOpen ? (
                <motion.button
                  key="menu"
                  className='p-2 relative z-30'
                  onClick={ () => setMenuOpen(true) }
                  initial={ { opacity: 0, rotate: -90 } }
                  animate={ { opacity: 1, rotate: 0 } }
                  exit={ { opacity: 0, rotate: 90 } }
                  transition={ {
                    duration: 0.3,
                    delay: 0,
                    ease: "easeOut"
                  } }
                >
                  <Menu size={ 24 } className='text-[#475569]' />
                </motion.button>
              ) : (
                <motion.button
                  key="close"
                  className='p-2 relative z-30'
                  onClick={ () => setMenuOpen(false) }
                  initial={ { opacity: 0, rotate: -90 } }
                  animate={ { opacity: 1, rotate: 0 } }
                  exit={ { opacity: 0, rotate: 90 } }
                  transition={ {
                    duration: 0.3,
                    delay: 0,
                    ease: "easeOut"
                  } }
                >
                  <X size={ 24 } className='text-[#475569]' />
                </motion.button>
              ) }
            </AnimatePresence>
          </div>
        </div>
      </div>
      <AnimatePresence>
        { menuOpen && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-center items-center min-[811px]:hidden"
            variants={ menuContentVariants }
            initial="closed"
            animate="open"
            exit="closed"
            transition={ {
              duration: 0.1,
              delay: 0.1,
              ease: "easeInOut"
            } }
          >
            <div className="flex flex-col items-center gap-5 mb-4">
              { menuItems.map((item, index) => (
                <motion.div
                  key={ item.id }
                  custom={ index }
                  variants={ menuItemVariants }
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={ {
                    duration: 0.4,
                    delay: 0.4,
                  } }
                  whileHover={ { scale: 1.05 } }
                  className="cursor-pointer"
                  onClick={ () => setMenuOpen(false) }
                >

                  <Link href={ `#${item.id}` } scroll={ true }>
                    <h1 className="text-[#475569] text-2xl font-semibold text-center hover:text-[#EA580C] transition-colors duration-200">
                      { item.label }
                    </h1>
                  </Link>
                </motion.div>
              )) }
            </div>

            {/* Action Buttons */ }
            <Link href={ "https://app.findecor.io" }>
              <motion.div
                className="flex flex-col items-center gap-6"
                variants={ menuItemVariants }
                initial="closed"
                animate="open"
                exit="closed"
                transition={ {
                  duration: 0.4,
                  delay: 0.4,
                } }
              >
                <button
                  className='text-xl p-2 text-[#475569] hover:text-[#EA580C] transition-colors duration-200 cursor-pointer'>
                  Sign in
                </button>
                <Button
                  className='text-white !bg-[#EA580C] px-3 py-2 rounded-full font-bold text-xl hover:bg-[#dc2626] transition-colors duration-200 hover:scale-105 transform cursor-pointer'
                >
                  Get started
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        ) }
      </AnimatePresence>
    </motion.div >
  )
}

export default Header