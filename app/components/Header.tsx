import React from 'react'
import "../styles/header.css"
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <div className='header'>
     <div className='logo'>
        <h1>nofil</h1>
     </div>
     <div className='links'>
        <Link className='nav' href='/'>home</Link>
        <Link className='nav' href='/about'>about</Link>
        <Link className='nav' href='/work'>work</Link>
     </div>
     <div className='imagesHeader'>
     <a href="https://www.linkedin.com/in/nofil-shoaib-6b284328a" target='_blank'><Image className='img' src='/li.png' alt='linkedin' width={200} height={200}></Image></a>
     <a href="https://www.youtube.com/@Itsgamingwarden" target='_blank'><Image className='img' src='/yt.png' alt='youtube' width={200} height={200}></Image></a>
     <a href="https://github.com/MuhammadNofilShoaib" target='_blank'><Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image></a>
     <a href="https://www.instagram.com/muhammad_nofil_shoaib/" target='_blank'><Image className='img' src='/ig.png' alt='instagram' width={200} height={200}></Image></a>     
     </div>
    </div>
  )
}

export default Header
