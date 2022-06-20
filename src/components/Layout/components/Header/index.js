import React, { useEffect, useState } from 'react'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Button from '~/components/Button'
import Tippy from '@tippyjs/react/headless'
import AccountItem from '~/components/AccountItem'
import Menu from '~/components/Popper/Menu'

const cx = classNames.bind(styles)

export const Header = () => {

    const [search, setSearch] = useState([])
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearch([])
        }, 0);
    }, [])



    return (
        <>
            <header className={cx('wrapper')}>

                <div className={cx('inner')}>

                    <div className={cx('logo')}>
                        <img src={images.logo} alt='tik tok' />
                    </div>
                    <Tippy
                        interactive
                        visible={search.length > 0}
                        render={attrs => (

                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>

                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder='Search accounts and videos' spellCheck={false} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>

                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </Tippy>

                    {currentUser

                        ?

                        <div className={cx('current-user')}>


                        </div>

                        :

                        <div className={cx('actions')}>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                            <Menu>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </div>
                    }


                </div>

            </header>
        </>
    )
}
