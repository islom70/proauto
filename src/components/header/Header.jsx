import React from 'react'
import classes from '../header/Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/pro_logo.svg'
import lupa from '../../assets/lupa.png'
import korzina from '../../assets/korzina.png'
import item from '../../assets/item.png'


function Header() {
  return (
    <div className={classes.Header}>
        <nav className={classes.navbar}>
            <ul className={classes.item}>
                    <li className={classes.item_logo}>
                        <NavLink className={classes.item_link}>
                            <img className={classes.pic_logo} src={logo} alt="" />
                        </NavLink>
                    </li>
                    <li className={classes.item_list}>
                        <NavLink to="/" className={classes.item_link}>КОМПАНИЯ</NavLink>
                    </li>
                    <li className={classes.item_list}>
                        <NavLink to="/catalog" className={classes.item_link}>КАТАЛОГ</NavLink>
                    </li>
                    <li className={classes.item_list}>
                        <NavLink to="/services" className={classes.item_link}>УСЛУГИ</NavLink>
                    </li>
                    <li className={classes.item_list}>
                    <div class="dropdown">
                        <a className={classes.item_link} href="" data-bs-toggle="dropdown">ИНФОРМАЦИЯ</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/magnum">АКБ MAGNUM</a></li>
                            <li><a class="dropdown-item" href="/zver">АКБ ЗВЕРЬ</a></li>
                            <li><a class="dropdown-item" href="#">АКБ AKOM</a></li>
                        </ul>
                    </div>
                    </li>
                    <li className={classes.item_list}>
                        <NavLink to="" className={classes.item_link}>КОНТАКТЫ</NavLink>
                    </li>
            </ul>
            <div className={classes.box_row}>
                    <div className={classes.box_btn}>
                        <button className={classes.butOne}>ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>
                    <div className={classes.box_icons}>
                        <img className={classes.icons} src={lupa} alt="" />
                        <img className={classes.icons} src={korzina} alt="" />
                        <img className={classes.icons} src={item} alt="" />
                    </div>
            </div>
        </nav>
        <div className="container">
            <div className={classes.box_title}>
                <h1 className={classes.title}>НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ</h1>
                <button className={classes.butTwo}>ПЕРЕЙТИ В КАТАЛОГ</button>
            </div>
        </div>
    </div>
  )
}

export default Header