"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Plus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "What is Findecor?",
    answer:
      "Findecor is an online platform that helps homeowners find, match, and purchase home decor products effortlessly. We provide personalized recommendations to suit your style and space.",
  },
  {
    id: 2,
    question: "How does Findecor work?",
    answer:
      "Findecor uses advanced algorithms to analyze your preferences and space requirements, then matches you with the perfect home decor items from our extensive catalog of trusted retailers.",
  },
  {
    id: 3,
    question: "Is Findecor a furniture store?",
    answer:
      "No, Findecor is not a traditional furniture store. We're a platform that connects you with various retailers and brands, helping you discover and purchase home decor items from multiple sources.",
  },
  {
    id: 4,
    question: "Can I buy directly from Findecor?",
    answer:
      "While we facilitate the discovery process, purchases are typically made through our partner retailers. We ensure a seamless experience by directing you to trusted sellers with the best prices.",
  },
  {
    id: 5,
    question: "What are the benefits of partnering with Findecor?",
    answer:
      "Partners benefit from increased visibility, access to our targeted customer base, advanced analytics, and our marketing support to help grow their business in the home decor market.",
  },
  {
    id: 6,
    question: "How can my store list products on Findecor?",
    answer:
      "To list your products on Findecor, you can apply through our partner portal. We'll review your application and guide you through the onboarding process to start showcasing your products to our users.",
  },
]
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
export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number>(0)
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? 0 : id)
  }
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })


  return (
    <div ref={ ref } className=" py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={ containerVariants }
          initial="hidden"
          animate={ isInView ? "visible" : "hidden" }
          className="text-center mb-16"
        >
          <motion.h2
            variants={ itemVariants }
            className="text-4xl md:text-5xl font-serif text-foreground mb-8"
          >FAQ
          </motion.h2>

          <motion.div variants={ itemVariants } className="space-y-4">
            <div className="text-xl max-[430px]:text-lg font-medium flex flex-col items-center">
              <span>Frequently Asked Questions</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          className="bg-white rounded-lg   overflow-hidden"
        >
          {/* FAQ Items */ }
          <div className="">
            { faqData.map((item) => (
              <div key={ item.id } className="border-b border-gray-200 last:border-b-0" >
                <button
                  onClick={ () => toggleItem(item.id) }
                  className="w-full flex items-center gap-4  p-6 py-4 text-left "
                >
                  <motion.div
                    animate={ { rotate: openItem === item.id ? 45 : 0 } }
                    transition={ { duration: 0.2 } }
                    className="flex-shrink-0"
                  >
                    <Plus className="w-5 h-5 text-gray-400" />
                  </motion.div>
                  <span className="text-base font-medium text-gray-900 pr-4">{ item.question }</span>
                </button>

                <AnimatePresence>
                  { openItem === item.id && (
                    <motion.div
                      initial={ { height: 0, opacity: 0 } }
                      animate={ { height: "auto", opacity: 1 } }
                      exit={ { height: 0, opacity: 0 } }
                      transition={ { duration: 0.3, ease: "easeInOut" } }
                      className="overflow-hidden ml-9"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{ item.answer }</p>
                      </div>
                    </motion.div>
                  ) }
                </AnimatePresence>
              </div>
            )) }
          </div>
        </motion.div>
      </div>
    </div>
  )
}
