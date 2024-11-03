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
     <Image className='img' src='/li.png' alt='github' width={200} height={200}></Image>
     <Image className='img' src='/yt.png' alt='github' width={200} height={200}></Image>
     <Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image>
     <Image className='img' src='/ig.png' alt='github' width={200} height={200}></Image>


      
     </div>
    </div>
  )
}

export default Header
