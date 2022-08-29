import React from 'react'
import Introduction from './Introduction';
import Offers from './Offers';
import Search from './Search';
import {motion} from 'framer-motion';




function Home() {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth}}>
        <Introduction />
        <Search />
        <Offers />
    </motion.div>
  )
}

export default Home