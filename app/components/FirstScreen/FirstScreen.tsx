'use client'
import style from './FirstScreen.module.sass'
import {motion} from 'framer-motion'

const FistScreen = () => {

    const titleAnimation = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: (custom:number) => ({
            y: 0,
            opacity: 1,
            transition: { duration: .5, delay: custom * 0.1}
        }),
    }

    const textAnimation = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: (custom:number) => ({
            y: 0,
            opacity: 0.6,
            transition: { duration: .5, delay: custom * 0.1}
        }),
    }

    const videoAnimation = {
        hidden: {
            y: '40vh',
            scale: .9,
        },
        visible: (custom:number) => ({
            y: 0,
            scale: 1,
            transition: {ease: [0.17, 0.67, 0.83, 1], duration: 1.2, delay: custom * 0.1}
        }),
    }
    
    return (
        <div className={style.firstScreen}>
            <motion.div className={style.container}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <motion.h1 custom={1} variants={titleAnimation}>Pack startup Into the Brand</motion.h1>
                <motion.p custom={2} variants={textAnimation}>We build the bridge of visual communication that connects you to your target audience</motion.p>
                <motion.video custom={3} variants={videoAnimation} className={style.video} autoPlay={true} muted={true} playsInline={true} disablePictureInPicture={true} loop={true}>
                    <source src='/OurWorkVideo.mp4' type="video/mp4" />
                </motion.video>
            </motion.div>
        </div>
    )
}

export default FistScreen