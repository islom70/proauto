import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from '../secsix/SecSix.module.css'
import one from '../../../assets2/icon1.svg'
import two from '../../../assets2/icon2.svg'
import three from '../../../assets2/icon3.svg'
import four from '../../../assets2/icon4.svg'
import five from '../../../assets2/icon5.svg'


function SecSix() {
  return (
    <div className={classes.SecSix}>
        <div className="container">
            <div className={classes.box_row}>
                <OwlCarousel className='owl-theme' loop items={5} margin={10} nav>
                    <div className={classes.son}>
                        <img className={classes.pic_icons} src={one} alt="" />
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic_icons} src={two} alt="" />
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic_icons} src={three} alt="" />
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic_icons} src={four} alt="" />
                    </div>
                    <div className={classes.son}>
                        <img className={classes.pic_icons} src={five} alt="" />
                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
  )
}

export default SecSix