'use client'
import style from './FirstScreen.module.sass'
import {motion} from 'framer-motion'

const FistScreen = () => {

    return (
        <div className={style.firstScreen}>
            <motion.div className={style.container}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <motion.h1>Pack startup Into the Brand</motion.h1>
                <motion.p>We build the bridge of visual communication that connects you to your target audience</motion.p>
                <motion.video className={style.video} autoPlay={true} muted={true} playsInline={true} disablePictureInPicture={true} loop={true}>
                    <source src='/OurWorkVideo.mp4' type="video/mp4" />
                </motion.video>
            </motion.div>
        </div>
    )
}

export default FistScreen