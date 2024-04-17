'use client'
import style from "./Contact.module.sass"
import Image from 'next/image'
import Link from "next/link"
import ARROW from '@/public/brief-arrow.svg'
/*import TypeForm from "../components/TypeForm/TypeForm"*/

export default function Contact() {

    const email: string = 'hey@brandpack.me';

    const messageCopy = 'Click to copy email address';
	const messageSuccess = 'Email address copied to clipboard';

    const copyEvent = () => {
        navigator.clipboard.writeText((email));
    }


    return (
    <div className={style.contact}>
        <div className={style.container}>
            <h1>Let’s start a project together</h1>
            <div className={style.variants}>

                <div className={`${style.block} ${style.sendEmail}`}>
                    <h2>Email</h2>
                    <p>You can send a message us. <br/>We are always 👋 happy to answer any questions.</p>
                    <div className={style.footer}>
                        <Link href={`mailto:${email}`} className={style.email}>hey@brandpack.me</Link>
                        <span></span>
                        <div onClick={() => copyEvent()} className={style.btnCopy}>Copy</div>
                    </div>
                </div>

                <div className={`${style.block} ${style.brief}`}>
                    <h2>Don{"'"}t waste time</h2>
                    <p>We have a brief with which we will quickly collect the necessary information to get started.</p>
                    <Link href={'https://bit.ly/3NyREhP'} target="_blank" className={`${style.button} ${style.brief}`}>Our brief <Image src={ARROW} alt="Arrow svg link to breif"/></Link>
                </div>

                <div className={`${style.block} ${style.upwork}`}>
                    <h2>Make an offer</h2>
                    <p>Our agency has 100% Job Success at Upwork profile.</p>
                    <Link href={'https://bit.ly/3qWbMS1'} target="_blank" className={`${style.button} ${style.upwork}`}>Hire us</Link>
                </div>
            </div>
        </div>
    </div>
    )
}