import React from 'react'
import classes from '../jurone/JurOne.module.css'
import one from '../../../assets/pic.svg'
import two from '../../../assets/pic2.svg'
import three from '../../../assets/pic3.svg'
import four from '../../../assets/pic4.svg'
import five from '../../../assets/pic5.svg'
import six from '../../../assets/pic6.svg'

function JurOne() {
  return (
    <div className={classes.main}>
        <div className='container'>
            <div className={classes.box_content}>
                <div className={classes.box_title}>
                    <h1 className={classes.title}>КАТАЛОГ</h1>
                </div> 
                <div className={classes.box_text}>
                    <p className={classes.text}>Мы предлагаем лучшие цены на продукцию!</p>
                </div> 
            </div>
            <div className={classes.rowOne}>
                <div className={classes.son}>
                    <img className={classes.pic} src={one} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={two} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={three} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rowTwo}>
                <div className={classes.son}>
                    <img className={classes.pic} src={four} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={five} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
                <div className={classes.son}>
                    <img className={classes.pic} src={six} alt="" />
                    <div className={classes.overlay}>
                        <div className={classes.content}>
                            <h3 className={classes.title_four}>АККУМУЛЯТОРЫ</h3>
                            <a className={classes.link_btn} href="">СДЕЛАТЬ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JurOne