'use client'
import Link from 'next/link'
import style from './footer.module.sass'
import logo from '@/public/logo.svg'
import Image from 'next/image'
import { useState } from 'react'

const Footer = () => {
    const [getInfo, setInfo] = useState('');
    const email: string = 'hey@brandpack.me';

    const messageCopy = 'Click to copy email address';
	const messageSuccess = 'Email address copied to clipboard';

    const copyEvent = () => {
        setInfo(messageCopy);
        navigator.clipboard.writeText((email))
    }

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.top}>
                    <div className={style.leftSide}>
                        <Link href={'/#first-screen'} className={style.logo}>
                            <Image src={logo} alt={'Logo branpdack.me'} className={style.img}/>
                        </Link>
                        <p>We build the bridge of visual communication that connects you to your target audience</p>
                        <div className={style.email}>
                            <span className={style.emoji}>💌</span>
                            <span onClick={ () => {copyEvent()}}><Link href={`mailto:${email}`} className={style.email}>hey@brandpack.me</Link></span>
                        </div>
                    </div>
                    <div className={style.rightSide}>
                        <nav className={style.nav}>
                            <ul>
                                <li>What we do</li>
                                <li><Link href={'/#first-screen'}>Home</Link></li>
                                <li><Link href={'/#our-works'}>Our works</Link></li>
                                <li><Link href={'https://dribbble.com/brandpackme/likes'} target="_blank">Inspiration</Link></li>
                                <li><Link href={'https://bit.ly/3qWbMS1'}  target="_blank">Upwork</Link></li>
                            </ul>
                            <ul>
                                <li>Last work</li>
                                <li><Link href={'https://dribbble.com/shots/22254244-Brand-identity-to-manage-the-entire-student-housing-ecosystem'} target='_blank'>Housing Cloud</Link></li>
                                <li><Link href={'https://dribbble.com/shots/21833378-Logo-Branding-for-SaaS-company-in-the-electronics-manufacturing'} target='_blank'>breadboard</Link></li>
                                <li><Link href={'https://dribbble.com/shots/15971023-Logo-redesign-for-Revvable-High-growth-SaaS-Powersport'} target='_blank'>Revvable</Link></li>
                                <li><Link href={'https://dribbble.com/shots/15295112-Logo-Design-for-Self-service-storage-located-in-Canada'} target='_blank'>Simple Storage</Link></li>
                                <li><Link href={'https://dribbble.com/milyaev_co'} className={style.more} target='_blank'>See all</Link></li>
                            </ul>
                            <ul>
                                <li>Follow us</li>
                                <li><Link href={'https://dribbble.com/milyaev_co'} target='_blank'>Dribbble</Link></li>
                                <li><Link href={'https://www.instagram.com/brandpackme/'} target='_blank'>Instagram</Link></li>
                                <li><Link href={'https://linkedin.com/company/brandpackme'} target='_blank'>LinkedIn</Link></li>
                                <li><Link href={'https://x.com/brandpackme'} target='_blank'>Twitter</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={style.bottom}>
                    <span>© brandpack.me 2024. <p>All rights reserved.</p></span>
                    <Link href={'#'}>Privacy policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer