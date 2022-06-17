import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const cx = classNames.bind(styles)

const Header = ({ title, onBack }) => {

    return (
        <header className={cx('header')} onClick={onBack}>
            <button className={cx('back-btn')} >
                <FontAwesomeIcon className={cx('back-icon')} icon={faChevronLeft} />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>

    )
}

export default Header