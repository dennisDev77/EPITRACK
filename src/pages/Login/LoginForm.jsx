import React from 'react'
import styles from './Login.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

//import the compenents
import Input from '../../components/forms/Input'
import Button from '../../components/forms/Button'
import logo from '../../assets/logo.png'

export default function Login(){

    return(
        <>
            <main className='container flex flex-wrap justify-center items-center gap-8 pt-40'>
           
               
                <section className={` bg-blue flex flex-col gap-4 text-gray-200 rounded-md ${styles.boxWrapper}`}>

                    <h2 className={`text-2xl font-medium text-center ${styles.headTitle}`}>Visualize Surtos de Doencas na sua regiao</h2>
                    <p className='text-sm text-center font-normal'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, delectus! Architecto blanditiis quaerat, esse ut eligendi doloremque quo dolor quae aspernatur qui molestiae accusamus suscipit cupiditate? Consequuntur iure culpa voluptatibus.</p>
                    <Button>
                        Criar uma conta
                    </Button>
                </section>

                <section className='flex flex-col gap-1'>
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
                            Entrar agora
                        </Button>
                    </section>
             </section>
            </main>
        </>
    )
}