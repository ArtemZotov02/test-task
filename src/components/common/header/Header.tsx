import React from "react"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import style from './style.module.scss'
import ClassNames from 'classnames'
import { BrowserRouter as Router, Link, NavLink, useLocation } from 'react-router-dom';

import { RootState } from "../../../redux/store.ts"
import { useDispatch, useSelector } from 'react-redux'
import { fetchHeader, loadHeaderData } from "../../../redux/headerData.ts"
import { fetchData } from "../../../redux/asyncActions/fetchData.ts"
import { HeaderData } from "./Header.types.ts"

export default function Header() {

  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const { pathname } = useLocation();

  const data = useSelector((state: RootState) => state.headerDataState);
  const dispatch = useDispatch();

  const openMenu = () => {
    setActiveMenu(!activeMenu)

    if (!activeMenu) {
      document.documentElement.classList.add("no-scroll")
    } else {
      document.documentElement.classList.remove("no-scroll")
    }
  }

  useEffect(() => {
    // dispatch(fetchData<HeaderData>('https://demo5408873.mockable.io/header', loadHeaderData))
    dispatch(fetchHeader('https://demo5408873.mockable.io/header',loadHeaderData))
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove("no-scroll");
    setActiveMenu(false)
  }, [pathname])

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
          {data?.login && <Button 
            variant="contained" 
            sx={{ padding: '3px 10px', backgroundColor: "#5f8b6f", fontSize: '14px' }}>
            {data?.login}
          </Button>}
          {data?.registration && <Button 
            variant="outlined" 
            sx={{ padding: '3px 10px', border: "1px solid #5f8b6f ", color: 'white', fontSize: '14px' }}>
            {data?.registration}
          </Button>}
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

