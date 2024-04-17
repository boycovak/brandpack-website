'use client'
import Link from 'next/link'
import style from './header.module.sass'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import { motion, useScroll, useViewportScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header = function () {

    const [hidden, setHidden] = useState<boolean>(false);
    const { scrollY } = useScroll();

    const handleScroll = () => {
        if (scrollY.get() < scrollY.getPrevious()) setHidden(false);
        if (scrollY.get() > 300 && scrollY.get() > scrollY.getPrevious()) setHidden(true);
    }

    useEffect(() => {
        return scrollY.onChange(() => handleScroll());
    });


    const headerVariants = {
        hidden: {
            y: -150,
            transition: { duration: .35 }
        },
        visible: {
            y: 0,
            transition: { duration: .8 }
        }
    };


return (
    <motion.header 
        className={style.header}
        variants={headerVariants}
        animate={hidden ? 'hidden' : 'visible'}
    >
            <div className={style.container}>
                <div className={style.content}>
                    <Link href={'/#first-screen'} className={style.logo}>
                        <Image src={logo} alt={'Logo branpdack.me'}/>
                    </Link>
                    <nav className={style.nav}>
                        <ul>
                            <li><Link href={'/#first-screen'}>Home</Link></li>
                            <li><Link href={'#our-work'}>Our works</Link></li>
                            <li><Link href={'https://dribbble.com/brandpackme/likes'} target="_blank">Inspiration</Link></li>
                        </ul>
                    </nav>
                    <div className={style.btnSpace}>
                        <div className={style.emptySpace}></div>
                        <Link href='/contact' className={style.button}>Start a project</Link>
                    </div>
                </div>
            </div>
        </motion.header>
)
};

export default Header