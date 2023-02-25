import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import {NavLink, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

import './Header.css'

const nav__links = [
  {
    display: 'الرئيسية',
    path: '/tasty/home'
  },
  {
    display: 'الوجبات',
    path: '/tasty/foods'
  },
  {
    display: 'حجوزاتك',
    path: '/tasty/cart'
  },
  {
    display: 'اتصل بنا',
    path: '/tasty/contact'
  }
]

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const toggleCart = () => dispatch(cartUiActions.toggle());
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink');
      } else{
        headerRef.current.classList.remove('header__shrink');
      }
      return () => window.removeEventListener('scroll', () => console.log('none'))
    })
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" /><h5>مطعم الانعام</h5>
          </div>
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item, index) => (
                  <NavLink to={item.path} key={index} onClick={toggleMenu}
                    className={navClass => navClass.isActive ? 'active__menu' : ''}
                  >{item.display}</NavLink>
                ))
              }
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to='/tasty/login'><i className="ri-user-line"></i></Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}><i className="ri-menu-line"></i></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header