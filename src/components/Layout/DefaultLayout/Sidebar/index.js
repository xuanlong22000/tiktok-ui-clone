import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

export const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    )
}
