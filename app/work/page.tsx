import React from 'react'
import "../styles/work.css"
import Image from 'next/image'

function page() {
  return (
    <div>
      <div className='work'>
        <div className="work-1">
            <div className="workHeading">
                <h1>work.</h1>
            </div>
            <div className="workPara">
                <p>Nofil Shoaib is a skilled front-end developer who brings creativity and precision to every project. His expertise in HTML, CSS, TypeScript, and Tailwind CSS enables him to craft engaging, user-friendly interfaces that look great on any device. Recently, he built a multi-page website using Next.js, React components, and custom CSS to ensure responsive design. Nofil has also developed a resume builder, demonstrating his versatility and problem-solving skills in web development. With a commitment to modern design and efficient code, he strives to deliver top-notch web solutions that align with the latest industry standards.</p>
            </div>
        </div>
        <div className="work-2">
        <div className="image1">
        <Image className="workPic" src='/Rectangle 8.png' alt="nofilshoaib" width={560} height={400}></Image>
            <p className="p1">
            November 24, 2019
            </p>
            <h1 className='imageHead'>Some Case Study</h1>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.</p> 
        </div>
        <div className="image2">
        <Image className="workPic" src='/im2.png' alt="nofilshoaib" width={560} height={400}></Image>
            
                <p className="p1">November 24, 2019</p>
            <h1 className='imageHead'>Some Case Study</h1>
            <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a convallis. Eget ipsum, velit vitae eu nunc, consequat, at.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page
