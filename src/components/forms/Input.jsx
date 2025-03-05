import React from 'react'
import styles from './form.module.css'

const Input = ({...props}) => {
  return (
    <input {...props} className={`${styles.input} w-full text-base placeholder:text-xs rounded-sm`}>
      
    </input>
  )
}

export default Input
