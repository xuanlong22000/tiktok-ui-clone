import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({ to, href, primary, outline, leftIcon, rightIcon, className, rounded, disabled, text, onClick, children, ...passProps }) => {

    let Comp = 'button'

    let props = {
        onClick,
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith === 'on' && typeof key === 'function') {
                delete props[key]
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded
    })

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}></span>}
        </Comp>
    )
}

export default Button