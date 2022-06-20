import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { MENU_SIDEBAR } from './MenuSidebar'

const cx = classNames.bind(styles)

export const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>

            {MENU_SIDEBAR.map((item,index)=>{
                return (
                    <div key={index}>
                        <ul className={cx('menu-items')}>
                            <li>{item.icon}</li>
                            <li>{item.title}</li>
                        </ul>
                    </div>
                )
            })}
        </aside>
    )
}
