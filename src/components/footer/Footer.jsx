import React from 'react'
import classes from '../footer/Footer.module.css'
import logo from '../../assets2/logo.svg'
import sub from '../../assets2/Subtract.svg'
import vec from '../../assets2/Vector.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className={classes.footer}>
        <div className="container">
          <div className={classes.box_row}>
              <div className={classes.box_logo}>
                  <img className={classes.logo} src={logo} alt="" />
                  <p className={classes.logo_text}>© 2019 PRO Auto.</p>
                  <p className={classes.logo_text}>Все права защищены.</p>
              </div>
              <div className={classes.box_lists}>
                  <ul className={classes.texts}>
                      <li className={classes.title_list}>КОМПАНИЯ</li>
                      <li className={classes.list}>О КОМПАНИИ</li>
                      <li className={classes.list}>ЛИЦЕНЗИИ</li>
                      <li className={classes.list}>ПАРТНЕРЫ</li>
                      <li className={classes.list}>ОТЗЫВЫ КЛИЕНТОВ</li>
                      <li className={classes.list}>РЕКВИЗИТЫ</li>
                      <li className={classes.list}>ВАКАНСИИ</li>
                  </ul>
                  <ul className={classes.texts}>
                      <li className={classes.title_list}>КАТАЛОГ</li>
                      <li className={classes.list}>АККУМУЛЯТОРЫ</li>
                      <li className={classes.list}>АВТОМАСЛА</li>
                      <li className={classes.list}>АКСЕССУАРЫ</li>
                      <li className={classes.list}>АВТОХИМИЯ</li>
                  </ul>
                  <ul className={classes.texts}>
                      <li className={classes.title_list}>УСЛУГИ</li>
                      <li className={classes.list}>ДИАГНОСТИКА АККУМУЛЯТОРА</li>
                      <li className={classes.list}>ПРИЕМ АККУМУЛЯТОРОВ</li>
                  </ul>
                  <ul className={classes.texts}>
                      <li className={classes.title_list}>ИНФОРМАЦИЯ</li>
                      <li className={classes.list}>АКЦИИ</li>
                      <li className={classes.list}>НОВОСТИ</li>
                      <li className={classes.list}>СТАТЬИ</li>
                      <li className={classes.list}>ВОПРОС - ОТВЕТ</li>
                      <li className={classes.list}><NavLink to="" className={classes.navlink}>isa</NavLink></li>
                  </ul>
              </div>
              <div className={classes.box_contact}>
                <div className={classes.call}>
                  <img className={classes.call_img} src={vec} alt="" />
                  <p className={classes.call_text}>+7 (342) 279-36-13</p>
                </div>
                <div className={classes.email}>
                  <img className={classes.email_img} src={sub} alt="" />
                  <p className={classes.email_text}>proauto59@yandex.ru</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer