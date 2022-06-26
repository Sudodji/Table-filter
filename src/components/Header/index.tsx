import React from 'react';
import Moment from 'react-moment';
import styles from './style.module.scss'

const Header = () => (
  <header>
    <div className={ styles.wrapper }>
      <div>
        <h1 style={{ margin: '0' }} className="bp4-heading title">Table Filter</h1>
      </div>
      <div className={ styles['date-wrapper'] }>
        <Moment format="D MMMM HH:mm" interval={ 1000 } />
      </div>
    </div>
  </header>
)

export default Header;
