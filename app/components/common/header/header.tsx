'use client'
import Link from 'next/link'
import style from './header.module.sass'
import logo from '@/public/logo.svg'
import Image from 'next/image'

const Header = function () {
return (
    <header className={style.header}>
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
        </header>
)
};

export default Header