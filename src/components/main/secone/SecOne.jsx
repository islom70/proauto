import React from 'react'
import classes from '../secone/SecOne.module.css'
import icoOne from '../../../assets/ico.svg'
import icoTwo from '../../../assets/icoTwo.svg'
import icoThree from '../../../assets/icoThree.svg'
import icoFour from '../../../assets/icoFour.svg'

function SecOne() {
  return (
    <div className={classes.SecOne}>
        <div className="container">
            <div className={classes.main_box}>
                <div className={classes.box}>
                    <div className={classes.son}>
                        <img className={classes.pic} src={icoOne} alt="" />
                        <p className={classes.text}>Наличный и безналичный расчет</p>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.son}>
                        <img className={classes.pic} src={icoTwo} alt="" />
                        <p className={classes.text}>Техническая помощь и консультация</p>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.son}>
                        <img className={classes.pic} src={icoThree} alt="" />
                        <p className={classes.text}>Только качественная и проверенная продукция</p>
                    </div>
                </div>
                <div className={classes.box}>
                    <div className={classes.son}>
                        <img className={classes.pic} src={icoFour} alt="" />
                        <p className={classes.text}>Мы всегда на связис 9:00 до 18:00!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecOne