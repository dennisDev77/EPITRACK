import React from 'react'
import styles from './Login.module.css'

//import the components
import Button from '../../components/forms/Button'
import Input from '../../components/forms/Input'
import logo from '../../assets/logo.png'

const Sign_Up = () => {
  return (
    <main className='flex flex-col gap-1'>
        <img src={logo} alt="Carregando a Logo" className={styles.imgLogin}/>

        <section className=' flex flex-col gap-2'>

            <div>
                <label className='text-sm text-gray-500'>Endereco de Email</label>
                
                <div className=' relative flex justify-center items-center'>
                <Input type='email' placeholder="Digite o seu Email"/>
                <span className='text-gray-500 text-xs absolute right-1'><MdAlternateEmail /></span>
                </div>
            </div>

            <div>
                <label className='text-sm text-gray-500'>Senha Secreta</label>

                <div className=' relative flex justify-center items-center'>
                <Input type='email' placeholder="Digite sua senha"/>
                <span className='text-gray-500 text-xs absolute right-1'><RiLockPasswordLine /></span>
                </div>
            </div>
            
            <Button>
                Criar Agora
            </Button>
        </section>
    </main>
  )
}

export default Sign_Up
