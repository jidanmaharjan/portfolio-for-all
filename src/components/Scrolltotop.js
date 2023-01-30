import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Scrolltotop = () => {
  const { pathname } = useLocation();
    useEffect(()=>{
        window.scroll(0,0);
    },[pathname])
  return null;
}

export default Scrolltotop