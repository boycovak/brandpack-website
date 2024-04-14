'use client'
import Image from 'next/image'
import Link from 'next/link'
import style from './OurWorks.module.sass'
import { works } from './dataWorks'

const OurWorks = () => {

    return (
        <div id='our-work' className={style.ourWorks}>
            <div className={style.container}>
                <div className={style.info}>
                    <h2>The work we do,<br/>and the people we help</h2>
                    <p>Our holistic process takes care of discovery, branding, design, and development</p>
                </div>

                <div className={style.works}>

                    <div className={style.first}>
                        <Link href={'https://dribbble.com/milyaev_co'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.flair.img} alt={works.flair.alt} />
                            </div>
                            <p><b>{works.flair.name}</b> — {works.flair.description}</p>
                        </Link>
                        <Link href={'https://dribbble.com/shots/22254244-Brand-identity-to-manage-the-entire-student-housing-ecosystem'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.housing.img} alt={works.housing.alt} />
                            </div>
                            <p><b>{works.housing.name}</b> — {works.housing.description}</p>
                        </Link>
                    </div>

                    <div className={style.second}>
                        <Link href={'https://dribbble.com/shots/21833378-Logo-Branding-for-SaaS-company-in-the-electronics-manufacturing'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.breadboard.img} alt={works.breadboard.alt} />
                            </div>
                            <p><b>{works.breadboard.name}</b> — {works.breadboard.description}</p>
                        </Link>
                    </div>

                    <div className={style.third}>
                        <Link href={'https://dribbble.com/shots/15971023-Logo-redesign-for-Revvable-High-growth-SaaS-Powersport'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.revvable.img} alt={works.revvable.alt} />
                            </div>
                            <p><b>{works.revvable.name}</b> — {works.revvable.description}</p>
                        </Link>
                        <Link href={'https://dribbble.com/shots/15295112-Logo-Design-for-Self-service-storage-located-in-Canada'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.simple_storage.img} alt={works.simple_storage.alt} />
                            </div>
                            <p><b>{works.simple_storage.name}</b> — {works.simple_storage.description}</p>
                        </Link>
                    </div>

                    <div className={style.fourth}>
                        <Link href={'https://dribbble.com/shots/15429599-First-screen-for-website-Repeat-prescriptions-app'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.nowpatient.img} alt={works.nowpatient.alt} />
                            </div>
                            <p><b>{works.nowpatient.name}</b> — {works.nowpatient.description}</p>
                        </Link>
                    </div>

                    <div className={style.fifth}>
                        <Link href={'https://dribbble.com/shots/19821109-Logo-Branding-Foundations-SaaS-company-in-GovTe-h'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.valocore.img} alt={works.valocore.alt} />
                            </div>
                            <p><b>{works.valocore.name}</b> — {works.valocore.description}</p>
                        </Link>
                        <Link href={'https://dribbble.com/shots/16433158-Noxcod-Logo-Design-for-a-product-development-agency'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.noxcod.img} alt={works.noxcod.alt} />
                            </div>
                            <p><b>{works.noxcod.name}</b> — {works.noxcod.description}</p>
                        </Link>
                    </div>

                    <div className={style.sixth}>
                        <Link href={'https://dribbble.com/milyaev_co'} className={style.work} target="_blank">
                            <div className={style.img}>
                                <Image src={works.cloudforge.img} alt={works.cloudforge.alt} />
                            </div>
                            <p><b>{works.cloudforge.name}</b> — {works.cloudforge.description}</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OurWorks