import React from 'react'
import styles from './form.module.css'

const Button = ({children, ...props}) => {
  return (
    <button {...props} className={`${styles.button} text-gray-200 rounded-sm`}>
      {children}
    </button>
  )
}

export default Button
