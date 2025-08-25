"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypingMessage {
  text: string
  image: string
  alt: string
}

const messages: TypingMessage[] = [
  {
    text: "A minimalist, dusty rose armchair with a rounded back, upholstered in soft fabric, supported by light wooden legs, and for a living room or bedroom.",
    image: "/showcase1.webp",
    alt: "A minimalist, dusty rose",
  },
  {
    text: "A modern, modular sofa in a soft coral velvet, for a contemporary living room or lounge",
    image: "/showcase2.webp",
    alt: "Modern gray sectional sofa",
  },
  {
    text: "A contemporary, sculptural armchair in a rich orange velvet, perfect as a statement piece in a modern living room or lounge.",
    image: "/showcase3.webp",
    alt: "Minimalist wooden dining table",
  },
]

export function AITypingAnimation() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showImage, setShowImage] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentMessage = messages[currentMessageIndex]
  const typingSpeed = 40 // milliseconds per character
  const deletingSpeed = 30 // milliseconds per character
  const pauseAfterTyping = 2000 // pause before showing image
  const pauseAfterImage = 2000 // pause before deleting
  const pauseAfterDeleting = 500 // pause before next message

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping && !isDeleting) {
      if (displayedText.length < currentMessage.text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.text.slice(0, displayedText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
          setShowImage(true)
        }, pauseAfterTyping)
      }
    } else if (showImage && !isDeleting) {
      timeout = setTimeout(() => {
        setShowImage(false)
        setIsDeleting(true)
      }, pauseAfterImage)
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, deletingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setIsTyping(true)
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
        }, pauseAfterDeleting)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, currentMessage.text, isTyping, showImage, isDeleting, currentMessageIndex])

  return (
    <div className="p-8 pt-0 max-[390px]:p-0">
      <div className="w-full">
        <div className="bg-white rounded-2xl min-h-[300px] flex flex-col justify-center">


          {/* Image Container */ }
          <div className="flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              { showImage ? (
                <motion.div
                  key={ currentMessageIndex }
                  initial={ { opacity: 0, scale: 0.9, y: 20 } }
                  animate={ { opacity: 1, scale: 1, y: 0 } }
                  exit={ { opacity: 0, scale: 0.9, y: -20 } }
                  transition={ { duration: 0.5, ease: "easeOut" } }
                  className="w-full"
                >
                  <img
                    src={ currentMessage.image || "/placeholder.svg" }
                    alt={ currentMessage.alt }
                    className={ `w-full h-[300px] max-[1240px]:h-[500px] max-[844px]:h-auto max-w-2xl mx-auto rounded-xl
                    object-cover ` }
                  />
                </motion.div>
              ) :
                <motion.div
                  key={ currentMessageIndex }
                  initial={ { opacity: 0, scale: 0.9, y: 20 } }
                  animate={ { opacity: 1, scale: 1, y: 0 } }
                  exit={ { opacity: 0, scale: 0.9, y: -20 } }
                  transition={ { duration: 0.5, ease: "easeOut" } }
                  className="w-[90%] flex items-center justify-center rounded-lg h-[300px] max-[1240px]:h-[500px] max-[844px]:h-[20rem] max-[540px]:w-full bg-[#FFF7F2] max-[540px]:h-[15rem] max-[390px]:h-[10rem]"
                >
                  <p className="animate-pulse text-center text-xl font-medium max-[390px]:text-lg ">Looking for a product...</p>
                </motion.div> }
            </AnimatePresence>
          </div>
          {/* Typing Text */ }
          <div className="mt-6 w-[75%] max-[540px]:w-full h-[150px]  mx-auto">
            <motion.p className="text-lg  !font-fira   text-gray-800  flex items-center" >
              { displayedText }
              { isTyping && !isDeleting && (
                <motion.span
                  animate={ { opacity: [1, 0] } }
                  transition={ { duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" } }
                  className="ml-1 w-0.5 h-6 bg-orange-500 "
                />
              ) }

            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
