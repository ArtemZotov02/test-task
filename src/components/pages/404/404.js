import React from 'react'
import style from './style.module.scss'
export default function NotFoundPage() {
  return (
    <div className='container'>
      <div className={style.notFound}>
        <h2 className={style.notFound__title}>404</h2>
        <p className={style.notFound__subtitle}>Сторінка не знайдена</p>
      </div>
    </div>
  )
}
