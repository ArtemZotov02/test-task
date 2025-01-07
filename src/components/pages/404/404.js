import React from 'react'
import style from './style.module.scss'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
export default function NotFoundPage() {
  return (
    <div className='container'>
      <div className={style.notFound}>
        <h2 className={style.notFound__title}>404</h2>
        <p className={style.notFound__subtitle}>Сторінка не знайдена</p>
        <Button 
            variant="contained" 
            className={style.info_buy}
            sx={{backgroundColor: 'var(--green)', color: 'var(--white)', width: '20%', fontWeight: '500', margin:'20px auto 0', borderRadius:'10px'}}
        >
          <Link to="/products" >
            Назад до товарів 
          </Link>
        </Button>
      </div>
    </div>
  )
}
