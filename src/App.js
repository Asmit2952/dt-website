import React from 'react';

import { Blog, Features, Footer, GPT, Header, Possibility} from './containers'
import { Brand, CTA, Navbar } from './components'

const App = () => {
  return (
    <div className="App">
        <div className="gradient_bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <GPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App