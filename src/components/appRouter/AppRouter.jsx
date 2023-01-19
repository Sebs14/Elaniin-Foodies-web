import React from 'react'
import {Routes, Route, useLocation} from "react-router-dom";
import Landing from '../pages/Landing';
import Menu from '../pages/Menu';
import { useEffect } from 'react';

const AppRouter = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
      if (hash === '') {
        window.scrollTo(0, 0);
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    }, [pathname, hash, key]); // do this on route change
    
  return (
    <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="menu" element={<Menu />}></Route> 
    </Routes> 
  )
}

export default AppRouter