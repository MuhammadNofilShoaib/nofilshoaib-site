import React from 'react'
import "../styles/footer.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer'>
        <div className='heading'><p>connect❤️</p></div>
      <div className='images'>
        <Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image>
        <Image className='img' src='/yt.png' alt='github' width={200} height={200}></Image>
        <Image className='img' src='/ig.png' alt='github' width={200} height={200}></Image>
        <Image className='img' src='/li.png' alt='github' width={200} height={200}></Image>
      </div>
      <div className="mail">
        <a className='mail' href="mailto:nofilshoaib@gmail.com">nofilshoaib@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer
