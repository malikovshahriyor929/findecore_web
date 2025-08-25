"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "../ui/card"
import Buttons from "@/shared/generics/button"

export default function Hero() {
  return (
    <section className="relative  flex items-center min-h-[91vh] my-auto bg-[#faf7f4]">
      <Card className="w-[90%] mx-auto grid grid-cols-2 max-[1090px]:flex flex-col gap-3  pb-0 overflow-hidden ">
        <div className="space-y-6 my-auto  pl-10 max-[1090px]:-mb-18 max-[840px]:mb-0  max-[700px]:pl-0 max-[701px]:!px-5 ">
          <motion.h1
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
            className="text-4xl max-[450px]:text-3xl md:text-5xl font-serif text-gray-900"
          >
            Ready to decorate smarter?
          </motion.h1>
          <motion.p
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8 } }
            className="text-lg text-gray-600 max-w-md max-[450px]:text-[16px]"
          >
            Sign up today and transform your space with the power of AI.
            Start with $50 in free credits.
          </motion.p>

          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 1 } }
            className="flex items-center gap-4"
          >
            <Buttons >
              Get started
            </Buttons>
            <Buttons
              type="outline"
              className=""
            >
              Let&apos;s talk
            </Buttons>
          </motion.div>
        </div>
        <motion.div
          initial={ { opacity: 0, scale: 0.9 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={ { duration: 1 } }
          className="flex justify-end ml-auto  pt-20 max-[1090px]:pt-0 max-w-[500px] max-h-[550px] max-[600px]:w-[300px] max-[1090px]:h-[90%]"
        >
          <motion.img
            src="/image.png" // replace with your dotted globe image
            alt="3D Dotted Globe"
            className="flex justify-end  rounded-xl max-w-[500px] max-h-[550px] max-[600px]:w-[300px] max-[1090px]:h-[90%]"
          // animate={{ rotate: 360 }}
          // transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          {/* <video
            className="flex justify-end"
            src="/Screen Recording 2025-08-19 141820.mp4"
            autoPlay
            muted
            loop
          /> */}
        </motion.div>
      </Card>
    </section>
  )
}
