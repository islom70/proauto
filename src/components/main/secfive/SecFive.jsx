import React from 'react'
import classes from '../secfive/SecFive.module.css'
import logo from '../../../assets2/car.svg'
import two from '../../../assets2/auto2.svg'
import three from '../../../assets2/auto3.svg'
import arr from '../../../assets2/Union.svg'

function SecFive() {
  return (
    <div className={classes.SecFive}>
        <div className="container">
            <h1 className={classes.title}>новости</h1>
            <div className={classes.box_row}>
                <div className={classes.son}>
                    <img className={classes.pic} src={logo} alt="" />
                    <div className={classes.box_conten}>
                        <p className={classes.text}>12 февраля 2020 года</p>
                        <h3 className={classes.son_title}>У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!</h3>
                    </div>
                    <img className={classes.arrow} src={arr} alt="" />
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={two} alt="" />
                    <div className={classes.box_conten}>
                        <p className={classes.text}>10 февраля 2020 года</p>
                        <h3 className={classes.son_title}>ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA</h3>
                    </div>
                    <img className={classes.arrow} src={arr} alt="" />
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={three} alt="" />
                    <div className={classes.box_conten}>
                        <p className={classes.text}>5 февраля 2020 года</p>
                        <h3 className={classes.son_title}>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE</h3>
                    </div>
                    <img className={classes.arrow} src={arr} alt="" />
                </div>  
            </div>
            <div className={classes.box_link}>
                <a className={classes.link} href="">ЧИТАТЬ ВСЕ НОВОСТИ</a>
            </div>
        </div>
    </div>
  )
}

export default SecFive