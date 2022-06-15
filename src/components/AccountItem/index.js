import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/76bd7bf1f0a06d3a9af0c796f64a4b23~c5_300x300.webp?x-expires=1655452800&x-signature=FfUO0YyPJneBmNJWpCazZ590F64%3D' alt='kami' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Gam Kali</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>Gam kali</span>
            </div>
        </div>
    )
}

export default AccountItem