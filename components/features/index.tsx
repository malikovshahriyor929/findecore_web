// "use client"

// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import { useRef } from "react"


// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.2,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   transition: {
//     duration: 0.6,
//     ease: [0.25, 0.46, 0.45, 0.94],
//   },
// }

// export function Features() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="features" ref={ ref } className="py-24 max-w-[1440px] w-[90%] mx-auto">
//       <motion.div
//         variants={ containerVariants }
//         initial="hidden"
//         animate={ isInView ? "visible" : "hidden" }
//         className="text-center mb-16"
//       >
//         <motion.h2
//           variants={ itemVariants }
//           className="text-4xl md:text-5xl font-serif text-foreground mb-8"
//         >
//           Features
//         </motion.h2>

//         <motion.div variants={ itemVariants } className="space-y-4">
//           <div className="text-xl max-[430px]:text-lg font-medium flex flex-col items-center">
//             <span >Find, style, and furnish your home</span>
//             <span className="max-w-[650px]">effortlessly with smart AI assistance.</span>
//           </div>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         variants={ containerVariants }
//         initial="hidden"
//         animate={ isInView ? "visible" : "hidden" }
//         className="grid grid-cols-3 gap-6 max-[1188px]:grid-cols-2 max-[850px]:grid-cols-1"
//       >

//         <div className="relative col-span-2 max-[850px]:col-span-1 flex flex-col justify-between gap-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl ">
//           <Image
//             src={ "/futures1.webp" }
//             width={ 1000 }
//             height={ 600 }
//             className=" max-[650px]:min-h-[200px] max-[520px]:min-h-[150px]  max-[650px]:object-contain"
//             alt="sads" />

//           <div className="space-y-1">
//             <h1 className="text-xl font-medium max-[400px]:text-lg">AI-Powered Personalization</h1>
//             <p className=" max-w-[394px] max-[400px]:text-sm">Get endless conversations and tailored decor recommendations that match your unique style.</p>
//           </div>
//         </div>
//         <div className="relative  space-y-2 w-full  border border-[#e6e6e6] p-6 rounded-3xl ">
//           <Image
//             src={ "/futures3.webp" }
//             width={ 270 }
//             height={ 100 }
//             className="mx-auto"
//             alt="sads" />
//           <div className="space-y-1">
//             <h1 className="text-xl font-medium max-[400px]:text-lg">Room & Furniture Matching</h1>
//             <p className=" max-w-[394px] max-[400px]:text-sm">Our AI analyzes your room and furniture to suggest the perfect decor.</p>
//           </div>
//         </div>
//         <div className="relative  space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl ">
//           <Image
//             src={ "/futures4.webp" }
//             width={ 270 }
//             height={ 250 }
//             className="mx-auto"
//             alt="sads" />
//           <div className="space-y-1">
//             <h1 className="text-xl font-medium max-[400px]:text-lg">Custom Furniture Generation</h1>
//             <p className=" max-w-[394px] max-[400px]:text-sm">Create unique, AI-designed furniture that perfectly fits your space and preferences.</p>
//           </div>
//         </div>
//         <div className="relative  space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl ">
//           <Image
//             src={ "/futures5.webp" }
//             width={ 270 }
//             height={ 250 }
//             className="mx-auto"
//             alt="sads" />
//           <div className="space-y-1">
//             <h1 className="text-xl font-medium max-[400px]:text-lg">100+ Marketplaces & Stores.</h1>
//             <p className=" max-w-[394px] max-[400px]:text-sm">Discover decor from global marketplaces or nearby stores — all in one place.</p>
//           </div>
//         </div>
//         <div className="relative  space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl ">
//           <Image
//             src={ "/futures6.webp" }
//             width={ 270 }
//             height={ 250 }
//             className="mx-auto"
//             alt="sads" />
//           <div className="space-y-1">
//             <h1 className="text-xl font-medium max-[400px]:text-lg">Smart Price Comparison</h1>
//             <p className=" max-w-[394px] max-[400px]:text-sm">Compare prices across multiple platforms to find the best deals effortlessly.</p>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }

"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
}

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="features"
      ref={ ref }
      className="py-24 max-w-[1440px] w-[90%] mx-auto"
    >
      {/* Header */ }
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate={ isInView ? "visible" : "hidden" }
        className="text-center mb-16"
      >
        <motion.h2
          variants={ itemVariants }
          className="text-4xl md:text-5xl font-serif text-foreground mb-8"
        >
          Features
        </motion.h2>

        <motion.div variants={ itemVariants } className="space-y-4">
          <div className="text-xl max-[430px]:text-lg font-medium flex flex-col items-center">
            <span>Find, style, and furnish your home</span>
            <span className="max-w-[650px]">
              effortlessly with smart AI assistance.
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Cards */ }
      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate={ isInView ? "visible" : "hidden" }
        className="grid grid-cols-3 gap-6 max-[1188px]:grid-cols-2 max-[850px]:grid-cols-1"
      >
        {/* Card 1 */ }
        <motion.div
          variants={ itemVariants }
          className="relative col-span-2 max-[850px]:col-span-1 flex flex-col justify-between gap-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl"
        >
          <Image
            src="/futures1.webp"
            width={ 1000 }
            height={ 600 }
            className="max-[650px]:min-h-[200px] max-[520px]:min-h-[150px] max-[650px]:object-contain"
            alt="sads"
          />
          <div className="space-y-1">
            <h1 className="text-xl font-medium max-[400px]:text-lg">
              AI-Powered Personalization
            </h1>
            <p className="max-w-[394px] max-[400px]:text-sm">
              Get endless conversations and tailored decor recommendations that
              match your unique style.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */ }
        <motion.div
          variants={ itemVariants }
          className="relative space-y-2 w-full border border-[#e6e6e6] p-6 rounded-3xl"
        >
          <Image
            src="/futures3.webp"
            width={ 270 }
            height={ 100 }
            className="mx-auto"
            alt="sads"
          />
          <div className="space-y-1">
            <h1 className="text-xl font-medium max-[400px]:text-lg">
              Room & Furniture Matching
            </h1>
            <p className="max-w-[394px] max-[400px]:text-sm">
              Our AI analyzes your room and furniture to suggest the perfect
              decor.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */ }
        <motion.div
          variants={ itemVariants }
          className="relative space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl"
        >
          <Image
            src="/futures4.webp"
            width={ 270 }
            height={ 250 }
            className="mx-auto"
            alt="sads"
          />
          <div className="space-y-1">
            <h1 className="text-xl font-medium max-[400px]:text-lg">
              Custom Furniture Generation
            </h1>
            <p className="max-w-[394px] max-[400px]:text-sm">
              Create unique, AI-designed furniture that perfectly fits your
              space and preferences.
            </p>
          </div>
        </motion.div>

        {/* Card 4 */ }
        <motion.div
          variants={ itemVariants }
          className="relative space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl"
        >
          <Image
            src="/futures5.webp"
            width={ 270 }
            height={ 250 }
            className="mx-auto"
            alt="sads"
          />
          <div className="space-y-1">
            <h1 className="text-xl font-medium max-[400px]:text-lg">
              100+ Marketplaces & Stores.
            </h1>
            <p className="max-w-[394px] max-[400px]:text-sm">
              Discover decor from global marketplaces or nearby stores — all in
              one place.
            </p>
          </div>
        </motion.div>

        {/* Card 5 */ }
        <motion.div
          variants={ itemVariants }
          className="relative space-y-2 w-full h-full border border-[#e6e6e6] p-6 rounded-3xl"
        >
          <Image
            src="/futures6.webp"
            width={ 270 }
            height={ 250 }
            className="mx-auto"
            alt="sads"
          />
          <div className="space-y-1">
            <h1 className="text-xl font-medium max-[400px]:text-lg">
              Smart Price Comparison
            </h1>
            <p className="max-w-[394px] max-[400px]:text-sm">
              Compare prices across multiple platforms to find the best deals
              effortlessly.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
