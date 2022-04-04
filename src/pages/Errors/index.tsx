import React from 'react'

import { AppLayout } from '@components/index'
import Content from './components/Content'
import Link from './components/Link'

const Errors: React.FC = () => {
  return (
    <AppLayout className="error-page">
      <Content />
      <Link />
    </AppLayout>
  )
}

export default Errors
