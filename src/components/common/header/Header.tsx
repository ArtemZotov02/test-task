import React from "react"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import style from './style.module.scss'
import ClassNames from 'classnames'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

interface MenuItem {
  name: string
  link: string
}

interface HeaderData {
  logo: string
  menu: MenuItem[]
  login: string
  registration: string
}

export default function Header() {
  const [data, setData] = useState<HeaderData | null>(null) 
  const [activeMenu, setActiveMenu] = useState<boolean>(false)

  const openMenu = () => {
    setActiveMenu(!activeMenu)

    if (!activeMenu) {
      document.documentElement.classList.add("no-scroll")
    } else {
      document.documentElement.classList.remove("no-scroll")
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://demo5408873.mockable.io/header')
        const data: HeaderData = await response.json() 
        setData(data)
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link to='/' className={style.logo}>{data?.logo}</Link>
        <nav className={activeMenu ? style.active : ''}>
          <ul className={style.menu}>
            {data?.menu?.map((item, index) => (
              <li key={index}> 
                <NavLink to={item.link || '/404'} className={({ isActive }) => (isActive ? style.active : '')}>
                  {item.name}  
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={ClassNames(style.buttons, activeMenu && style.active)}>
          <Button 
            variant="contained" 
            sx={{ padding: '3px 10px', backgroundColor: "#5f8b6f", fontSize: '14px' }}>
            {data?.login}
          </Button>
          <Button 
            variant="outlined" 
            sx={{ padding: '3px 10px', border: "1px solid #5f8b6f ", color: 'white', fontSize: '14px' }}>
            {data?.registration}
          </Button>
        </div>
        <div 
          className={ClassNames(style.burgerMenu, activeMenu && style.active)} 
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

