import React, { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faEarthAsia, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Header from './Header'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'ENG',
                    title: 'English'
                },
                {
                    code: 'VIE',
                    title: 'Vietnamese'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'KeyBoard Shortcut'
    }
]

const Menu = ({ children }) => {

    const [history, setHistory] = useState([{ data: MENU_ITEMS }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = item.children

            return (
                <div key={index} >
                    {
                        item.to
                            ?
                            <Link to={item.to}>
                                <ul>
                                    <li>{item.icon}</li>
                                    <li>{item.title}</li>
                                </ul>
                            </Link>
                            :
                            <ul
                                onClick={() => {
                                    if (isParent) {
                                        setHistory(prev => [...prev, item.children])
                                    } else {
                                        console.log(item)
                                    }
                                }}
                            >
                                <li>{item.icon}</li>
                                <li>{item.title}</li>
                            </ul>
                    }
                </div>
            )
        }

        )
    }

    return (

        <Tippy
            delay={[0, 700]}
            placement='bottom-end'
            interactive
            render={attrs => (

                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }} />}

                        {renderItems()}
                    </PopperWrapper>
                </div>

            )}
            onHidden={() => { setHistory(pre => pre.slice(0, 1)) }}
        >
            {children}
        </Tippy>
    )
}

export default Menu