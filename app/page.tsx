import FAQPage from '@/components/faq'
import { Features } from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { HowItWorks } from '@/components/howWorks'
import Showcase from '@/components/showcase'
import Smarter from '@/components/smarter'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <iframe
        width="80%"
        height="640px"
        src="https://www.youtube.com/embed/1JXMNV647mg?si=eRr6obaC4_EXipLB&autoplay=1&loop=1&playlist=1JXMNV647mg&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; picture-in-picture; web-share"
        className='mx-auto max-w-[1330px] mb-20 rounded-xl max-[1100px]:h-[500px] max-[700px]:h-[350px] max-[500px]:h-[250px]  max-[360px]:h-[200px]  max-[400px]:mt-10'
        allowFullScreen

      ></iframe>
      <HowItWorks />
      <Features />
      <FAQPage />
      <Smarter />
      <Footer />
    </div>
  )
}

export default Home