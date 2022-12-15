import React from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../assets/white-logo6.png'
import logo1 from '../../assets/eth.png'
import logo2 from '../../assets/dai.png'
import logo3 from '../../assets/presale.png'
import img from './header.module.scss'
import img1 from './header.module.scss'
import { openMenuHandler } from '../../actions/menuActions'

import header from './header.module.scss'
import headerLeftSide from './header.module.scss'
import headerBurgerButton from './header.module.scss'
import styles from './header.module.scss'


import { Title, ConnectionStatus } from '../'

export function Header({ title }) {
  const dispatch = useDispatch()

  const openMenu = () => {
    dispatch(openMenuHandler(true))
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSide}>
        <button onClick={openMenu} className={styles.headerBurgerButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Title level={1}>{title}</Title>
        <a  href="http://gxpstaking.gxpprotocol.com/" target="_blank" alt=""><img className={styles.img} src={logo} ></img></a> 
        <a  href="http://wethstaking.gxpprotocol.com/" target="_blank" alt=""><img className={styles.img} src={logo1} ></img></a>
        <a  href="http://daistaking.gxpprotocol.com/" target="_blank" alt=""><img className={styles.img1} src={logo2}></img></a> 
        <Title level={1}> Presale</Title>
        <a  href="https://presale.gxpprotocol.com/" target="_blank" alt=""><img className={styles.img} src={logo3} ></img></a>
      </div>
      <ConnectionStatus />
    </header>
  )
}
