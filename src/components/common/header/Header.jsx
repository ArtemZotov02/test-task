import { useEffect, useState } from "react";
import style from './style.module.scss'
import { Button } from "@mui/material";
export default function Header() {
  const [data, setData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://demo5408873.mockable.io/header');
        const data = await response.json();
        setData(data);
      };
      fetchData();
    }, [])
  return (
    <div className={style.header}>
      <a href="/" className={style.logo}>{data.logo}</a>
      <nav>
        <ul className={style.menu}>
          {data.menu && data.menu.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.buttons}>
        <Button variant="contained" sx={{ padding: '3px 10px', backgroundColor:"#5f8b6f", fontSize:'14px'}}>{data.login}</Button>
        <Button variant="outlined"  sx={{ padding: '3px 10px', border:"1px solid #5f8b6f ", color:'white', fontSize:'14px'}}>{data.registration}</Button>
      </div>
    </div>
  )
}
