import React from 'react'
import classes from '../secthree/SecThree.module.css'
import one from '../../../assets2/group1.svg'
import two from '../../../assets2/group2.svg'
import three from '../../../assets2/group3.svg'
import hum from '../../../assets2/human.svg'

function SecThree() {
  return (
    <div className={classes.SecThree}>
         <div className="container">
            <h1 className={classes.title}>услуги</h1>
            <p className={classes.text}>Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции.</p>
            <div className={classes.box_row}>
                <div className={classes.box_imgOne}>
                    <div className={classes.son}>
                        <img className={classes.pic} src={one} alt="" />
                        <div className={classes.child_box}>
                            <h3 className={classes.child_title}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</h3>
                            <p className={classes.child_text}>Поможем с выбором аккумулятора, моторного масла и аксессуаров для автомобиля под ваши требования.</p>
                            <div className={classes.overlay}></div>
                        </div>
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic} src={two} alt="" />
                        <div className={classes.child_box}>
                            <h3 className={classes.child_title}>ОБМЕН СТАРОГО АККУМУЛЯТОРА НА НОВЫЙ</h3>
                            <p className={classes.child_text}>Принесите нам старую АКБ для легкового автомобиля, и мы предоставим Вам скидку на новый аккумулятор!</p>
                            <div className={classes.overlay}></div>
                        </div>
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic} src={three} alt="" />
                        <div className={classes.child_box}>
                            <h3 className={classes.child_title}>БЕСПЛАТНАЯ ДИАГНОСТИКА АККУМУЛЯТОРА</h3>
                            <p className={classes.child_text}>Приезжайте к нам и мы бесплатно проведём диагностику вашего аккумулятора!</p>
                            <div className={classes.overlay}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.box_imgTwo}>
                    <img className={classes.pic_main} src={hum} alt="" />
                </div>
            </div>
            <div className={classes.box_link}>
                <a className={classes.link} href="">ЗАДАТЬ ВОПРОС</a>
            </div>
         </div>
    </div>
  )
}

export default SecThree