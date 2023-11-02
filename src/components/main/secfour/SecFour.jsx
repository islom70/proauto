import React from 'react'
import classes from '../secfour/SecFour.module.css'
import pep from '../../../assets2/human2.svg'

function SecFour() {
  return (
    <div className={classes.SecFour}>
        <div className={classes.main}>
            <div className="container">
                    <h1 className={classes.title}>о компании</h1>
                    <div className={classes.box_rows}>
                        <div className={classes.box_img}>
                            <img className={classes.pic} src={pep} alt="" />
                        </div>
                        <div className={classes.box_text}>
                            <p className={classes.text}>Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается продажей автомобильных аккумуляторов, масел, расходных материалов, химией и аксессуаров.</p>
                            <a className={classes.link} href="">УЗНАТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SecFour