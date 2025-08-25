// // "use client"

// // import { motion } from "framer-motion"

// // const steps = [
// //   {
// //     number: "1",
// //     title: "Tell Us Your Style",
// //     description: "Start by answering a few quick questions about your style, space, and preferences.",
// //   },
// //   {
// //     number: "2",
// //     title: "Get AI-Powered Matches",
// //     description: "Our advanced AI analyzes your inputs and suggests decorates that fit your aesthetic.",
// //   },
// //   {
// //     number: "3",
// //     title: "Compare prices",
// //     description: "Compare prices across multiple online marketplaces or physical stores.",
// //   },
// // ]

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2,
// //       delayChildren: 0.1,
// //     },
// //   },
// // }

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //   },
// //   transition: {
// //     duration: 0.6,
// //     ease: [0.25, 0.46, 0.45, 0.94], // easeOut cubic-bezier
// //   },
// // }

// // const stepVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //   },
// //   transition: {
// //     duration: 0.7,
// //     ease: [0.25, 0.46, 0.45, 0.94], // easeOut cubic-bezier
// //   },
// // }

// // export function HowItWorks() {
// //   return (
// //     <section className="py-24 px-4 max-w-6xl mx-auto">
// //       <motion.div variants={ containerVariants } initial="hidden" animate="visible" className="text-center mb-16">
// //         <motion.h2 variants={ itemVariants } className="text-4xl md:text-5xl font-serif text-foreground mb-8">
// //           How It Works
// //         </motion.h2>

// //         <motion.div variants={ itemVariants } className="space-y-4">
// //           <p className="text-lg text-foreground font-medium">No more endless scrolling!</p>
// //           <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
// //             Findecor recommends the best decor for your space, matches your style, and connects you to the best deals —
// //             all in one place.
// //           </p>
// //         </motion.div>
// //       </motion.div>

// //       <motion.div
// //         variants={ containerVariants }
// //         initial="hidden"
// //         animate="visible"
// //         className="grid md:grid-cols-3 gap-12 md:gap-8"
// //       >
// //         { steps.map((step, index) => (
// //           <motion.div
// //             key={ step.number }
// //             variants={ stepVariants }
// //             whileHover={ {
// //               y: -5,
// //               transition: { duration: 0.2 },
// //             } }
// //             className="text-center group cursor-pointer"
// //           >
// //             <motion.div
// //               className="text-6xl font-light text-muted-foreground/40 mb-6 group-hover:text-muted-foreground/60 transition-colors duration-300"
// //               whileHover={ { scale: 1.1 } }
// //               transition={ { duration: 0.2 } }
// //             >
// //               { step.number }
// //             </motion.div>

// //             <motion.h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
// //               { step.title }
// //             </motion.h3>

// //             <motion.p className="text-muted-foreground leading-relaxed">{ step.description }</motion.p>
// //           </motion.div>
// //         )) }
// //       </motion.div>
// //     </section>
// //   )
// // }


// "use client"

// import { delay, motion } from "framer-motion"
// import { useRef } from "react"
// import { useInView } from "framer-motion"

// const steps = [
//   {
//     number: "1",
//     title: "Tell Us Your Style",
//     description:
//       "Start by answering a few quick questions about your style, space, and preferences.",
//   },
//   {
//     number: "2",
//     title: "Get AI-Powered Matches",
//     description:
//       "Our advanced AI analyzes your inputs and suggests decorates that fit your aesthetic.",
//   },
//   {
//     number: "3",
//     title: "Compare prices",
//     description:
//       "Compare prices across multiple online marketplaces or physical stores.",
//   },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//   },
//   transition: {
//     staggerChildren: 0.5,
//     delayChildren: 0.5,
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
//   transition: {
//     duration: 0.6,
//     delay: 1,
//     ease: [0.25, 0.46, 0.45, 0.94],
//   },
// }

// const stepVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
//   transition: {
//     duration: 0.7,
//     ease: [0.25, 0.46, 0.45, 0.94],
//   },
// }

// export function HowItWorks() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: false, margin: "-100px" })
//   // margin -100px → biroz oldinroq trigger bo‘ladi

//   return (
//     <section ref={ ref } className="py-24 px-4 max-w-6xl mx-auto">
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
//           How It Works
//         </motion.h2>

//         <motion.div variants={ itemVariants } className="space-y-4">
//           <p className="text-lg text-foreground font-medium">
//             No more endless scrolling!
//           </p>
//           <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             Findecor recommends the best decor for your space, matches your
//             style, and connects you to the best deals — all in one place.
//           </p>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         variants={ containerVariants }
//         initial="hidden"
//         animate={ isInView ? "visible" : "hidden" }
//         className="grid md:grid-cols-3 gap-12 md:gap-8"
//       >
//         { steps.map((step) => (
//           <motion.div
//             key={ step.number }
//             variants={ stepVariants }
//             whileHover={ {
//               y: -10,
//               transition: { duration: 0.4 },
//             } }
//             className="text-center group cursor-pointer"
//           >
//             <motion.div
//               className="text-6xl font-light text-muted-foreground/40 mb-6 group-hover:text-muted-foreground/60 transition-colors duration-300"
//               whileHover={ { scale: 1.1 } }
//               transition={ { duration: 0.4 } }
//             >
//               { step.number }
//             </motion.div>

//             <motion.h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
//               { step.title }
//             </motion.h3>

//             <motion.p className="text-muted-foreground leading-relaxed">
//               { step.description }
//             </motion.p>
//           </motion.div>
//         )) }
//       </motion.div>
//     </section>
//   )
// }

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "1",
    title: "Tell Us Your Style",
    description:
      "Start by answering a few quick questions about your style, space, and preferences.",
  },
  {
    number: "2",
    title: "Get AI-Powered Matches",
    description:
      "Our advanced AI analyzes your inputs and suggests decorates that fit your aesthetic.",
  },
  {
    number: "3",
    title: "Compare prices",
    description:
      "Compare prices across multiple online marketplaces or physical stores.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="howItWorks" ref={ ref } className="py-24 px-4 max-w-[1440px] w-[90%] mx-auto">
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
          How It Works
        </motion.h2>

        <motion.div variants={ itemVariants } className="space-y-4">
          <div className="text-xl max-[430px]:text-lg font-medium flex flex-col items-center">
            <span >No more endless scrolling!</span>
            <span className="max-w-[650px]"> Findecor recommends the best decor for your space, matches your
              style, and connects you to the best deals — all in one place.</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={ containerVariants }
        initial="hidden"
        animate={ isInView ? "visible" : "hidden" }
        className="grid md:grid-cols-3 gap-12 md:gap-10"
      >
        { steps.map((step) => (
          <motion.div
            key={ step.number }
            variants={ stepVariants }
            whileHover={ {
              y: -10,
              transition: { duration: 0.3 },
            } }
            className=" group cursor-pointer"
          >
            <motion.div
              className="text-2xl font-medium p-2 bg-[#FFF7F2] w-fit px-5 rounded-lg text-black mb-6  transition-colors duration-300"
              whileHover={ { scale: 1.1 } }
              transition={ { duration: 0.3 } }
            >
              { step.number }
            </motion.div>

            <motion.h3 className="text-xl font-semibold text-foreground mb-4  transition-colors duration-300">
              { step.title }
            </motion.h3>

            <motion.p className="text-muted-foreground leading-relaxed">
              { step.description }
            </motion.p>
          </motion.div>
        )) }
      </motion.div>
    </section>
  )
}
