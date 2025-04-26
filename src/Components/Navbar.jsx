import React from 'react'
import logo from '../assets/JY.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-6'>

            <div className='flex flex-shirk-0 items-center '>
                <a href="/" aria-label='Home'>
                    <img src={logo} className='mx-2' width={50} height={33} alt="logo" />
                </a>
            </div>

            <div className='m-8 flex items-center justify-center text-2xl gap-4'>

                <a href="https://www.linkedin.com/in/jam-yousuf-385ba025b/"
                    target='_blank'
                    rel='noopener noreferer'
                    aria-label='LinkedIn'>
                    <FaLinkedin className='text-white' />
                </a>
              
                <a href="https://www.github.com/jamyousuf005"
                    target='_blank'
                    rel='noopener noreferer'
                    aria-label='GitHub'>
                    <FaGithub className='text-white'/>
                </a>

                <a href="https://www.instagram.com/jamyousif18"
                    target='_blank'
                    rel='noopener noreferer'
                    aria-label='Instagram'>
                    <FaInstagram className='text-white' />
                </a>

                <a href="https://www.facebook.com/jamyousif.sahito/"
                    target='_blank'
                    rel='noopener noreferer'
                    aria-label='Facebook'>
                    <FaFacebook className='text-white' />
                </a>



            </div>
        </nav>
    )
}

export default Navbar