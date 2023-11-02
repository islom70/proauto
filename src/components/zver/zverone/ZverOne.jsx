import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from '../zverone/ZverOne.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import one from '../../../assets3/batter2.svg'
import kar from '../../../assets3/karzina2.svg'
import on from "../../../assets3/frame1.svg"
import two from "../../../assets3/frame2.svg"
import three from "../../../assets3/frame3.svg"
import four from "../../../assets3/frame4.svg"
import five from "../../../assets3/frame5.svg"
import six from "../../../assets3/frame6.svg"

function ZverOne() {
  return (
    <div className={classes.main}>
        <div className="container">
            <h1 className={classes.title}>MAGNUM - каталог АКБ от 60 до 230Ah</h1>
            <div className={classes.box_row}>
                <div className={classes.left_father}>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                                АККУМУЛЯТОРЫ
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                                АКБ ЗВЕРЬ
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ BARS
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ AKOM
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ ENRUN
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ ENRUN
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ AFA
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                    
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ EDCON
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                    
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ BOSCH
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            АКБ MUTLU
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            ОРИГИНАЛЬНЫЕ АКБ
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{background: `#000`, width: `264px`}}>
                            ГЕЛИЕВЫЕ АКБ OPTIMA
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{background: `#2D2D2D`, width: `264px`}}>
                                <Dropdown.Item href="#/action-1" style={{color: `#fff`}}>MAGNUM 60Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{color: `#fff`}}>MAGNUM 75Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" style={{color: `#fff`}}>MAGNUM 90Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-4" style={{color: `#fff`}}>MAGNUM 132Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-5" style={{color: `#fff`}}>MAGNUM 190Ah</Dropdown.Item>
                                <Dropdown.Item href="#/action-6" style={{color: `#fff`}}>MAGNUM 230Ah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
                <div className={classes.right_father}>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <div className={classes.son}>
                        <div className={classes.img_son}>
                            <img className={classes.pic} src={one} alt="" />
                        </div>
                        <div className={classes.text_box}>
                            <h3 className={classes.son_title}>MAGNUM 60Ah</h3>
                            <p className={classes.son_text}>Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом</p>
                            <p className={classes.son_size}>Емкость, Ач: 60 Пусковой ток, А: 500 Полярность: Прямая/Обратная Клеммы: Толстые Pазмеры (ДхШхВ), мм: 242х175х190 Производитель: Magnum Bес, кг: 14.5</p>
                        </div>
                        <div className={classes.box_link}>
                            <h2 className={classes.price}>2199 руб.</h2>
                            <h3 className={classes.priceTwo}>2900 руб.</h3>
                            <div className={classes.row_link}>
                                <a className={classes.kar_link} href="">В КОРЗИНУ</a>
                                <img className={classes.icons} src={kar} alt="" />
                            </div>
                            <a className={classes.link} href="">ПОДРОБНЕЕ</a>
                        </div>     
                    </div>
                    <p className={classes.batter_text}>Аккумуляторы Magnum сконструированы именно так, чтобы обеспечить мощность и надежность. Они производятся из импортных компонентов на современном оборудовании. Батареи Магнум изготавливаются по технологии Ca/Ca, что способствует снижению расхода воды и саморазряда.</p>
                    <h3 className={classes.batter_title}>Преимущества аккумуляторной батареи Магнум</h3>
                    <div className={classes.row_battery}>
                        <div className={classes.box_batrow}>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={on} alt="" />
                                <p className={classes.clock_text}>Отличное сочетание цены и качества</p>
                            </div>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={two} alt="" />
                                <p className={classes.clock_text}>Продолжительный срок службы</p>
                            </div>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={three} alt="" />
                                <p className={classes.clock_text}>Оптимальная емкость и пусковой ток</p>
                            </div>
                        </div>
                        <div className={classes.box_batrow}>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={four} alt="" />
                                <p className={classes.clock_text}>Для стандартной комплектациии авто</p>
                            </div>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={five} alt="" />
                                <p className={classes.clock_text}>Высокое качество по невысокой цене</p>
                            </div>
                            <div className={classes.icon_row}>
                                <img className={classes.clock} src={six} alt="" />
                                <p className={classes.clock_text}>Отличается низким самозарядом</p>
                            </div>
                        </div>
                    </div>
                    <p className={classes.batter_text}>На производстве аккумуляторов Магнум после каждой технологической операции обязательно проводится промежуточный контроль качества на короткое замыкание и обрыв цепи, что минимизирует процент заводского брака. Весь технологический процесс находится под контролем специалистов завода и соответствует международным нормам и стандартам. Это обеспечивает выпуск батарей, полностью отвечающих требованиям автомобилей двадцать первого века.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZverOne