import style from './Motivation.module.sass'

export default function Motivation() {
    return (
    <div className={style.motivation}>
        <div className={style.container}>
                <h2>World-changing Company<br/>Must be Memorable</h2>
                <a href='/contact' className={style.button}>Start a project</a>
        </div>
    </div>
    )
}
