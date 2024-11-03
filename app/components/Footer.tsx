import React from 'react'
import "../styles/footer.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className='footer'>
        <div className='heading'><p>connect❤️</p></div>
      <div className='images'>
<<<<<<< HEAD
      <a href="https://www.linkedin.com/in/nofil-shoaib-6b284328a" target='_blank'><Image className='img' src='/li.png' alt='linkedin' width={200} height={200}></Image></a>
     <a href="https://www.youtube.com/@Itsgamingwarden" target='_blank'><Image className='img' src='/yt.png' alt='youtube' width={200} height={200}></Image></a>
     <a href="https://github.com/MuhammadNofilShoaib" target='_blank'><Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image></a>
     <a href="https://www.instagram.com/muhammad_nofil_shoaib/" target='_blank'><Image className='img' src='/ig.png' alt='instagram' width={200} height={200}></Image></a>

=======
        <a href="https://www.linkedin.com/in/nofil-shoaib-6b284328a" target='_blank'><Image className='img' src='/li.png' alt='linkedin' width={200} height={200}></Image></a>
     <a href="https://www.youtube.com/@Itsgamingwarden" target='_blank'><Image className='img' src='/yt.png' alt='youtube' width={200} height={200}></Image></a>
     <a href="https://github.com/MuhammadNofilShoaib" target='_blank'><Image className='img' src='/gh.png' alt='github' width={200} height={200}></Image></a>
     <a href="https://www.instagram.com/muhammad_nofil_shoaib/" target='_blank'><Image className='img' src='/ig.png' alt='instagram' width={200} height={200}></Image></a>
>>>>>>> 14b689aaf0f66adb0d5d689a5b6361cc17242c27
      </div>
      <div className="mail">
        <a className='mail' href="mailto:nofilshoaib@gmail.com">nofilshoaib@gmail.com</a>
      </div>
    </div>
  )
}

export default Footer
