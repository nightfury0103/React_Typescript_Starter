import React from 'react'

import { AppLayout } from '@components/index'
import AboutContent from './components/AboutContent'
import Faq from './components/Faq'

const About: React.FC = () => {
  return (
    <AppLayout className="about-box">
      <AboutContent />
      <Faq />
    </AppLayout>
  )
}

export default About
