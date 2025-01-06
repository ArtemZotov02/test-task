import { useEffect, useState } from "react";
import style from './style.module.scss'
import { Button } from "@mui/material";
import ClassNames from 'classnames';

export default function Header() {
  const [data, setData] = useState({});
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = () => {
    setActiveMenu(!activeMenu);

    if (!activeMenu) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://demo5408873.mockable.io/header');
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [])

  return (
    <div className={style.container}>
      <div className={style.header}>
        <a href="/" className={style.logo}>{data.logo}</a>
        <nav className={activeMenu ? style.active : ''}>
          <ul className={style.menu}>
            {data.menu && data.menu.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className={ClassNames(style.buttons, activeMenu && style.active)}>
          <Button variant="contained" sx={{ padding: '3px 10px', backgroundColor:"#5f8b6f", fontSize:'14px'}}>{data.login}</Button>
          <Button variant="outlined"  sx={{ padding: '3px 10px', border:"1px solid #5f8b6f ", color:'white', fontSize:'14px'}}>{data.registration}</Button>
        </div>
        <div className={ClassNames(style.burgerMenu, activeMenu && style.active)} onClick={openMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
