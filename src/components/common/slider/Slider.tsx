import React, { useState } from 'react'
import style from './style.module.scss'
import classNames from 'classnames';
import {SliderProps} from './Slider.types';


const Slider: React.FC<SliderProps> = ({ name, img }) => {
  const [currentImg, setCurrentImg] = useState(0)
  
  return (
    <div className={style.imageSlider}>
      <div className={style.imageSlider__slider}>
        {img.map((item, index) => (
          <img 
            src={item} 
            alt={name} 
            key={index} 
            className={classNames(style.imageSlider__slider_img, {[style.active]: index === currentImg})} 
            onClick={()=>setCurrentImg(index)}
          />
        ))}
      </div>
      <div className={style.imageSlider__current}>
        <img src={img[currentImg]} alt={name} className={style.imageSlider__current_img}/>
      </div>
    </div>
  )
}
export default Slider
