import Image from "next/image";
import "./styles/home.css";

export default function Home() {
  return (
    
    <div>
      <div className="hero-section">
        <div className="content">
          <p className="line-a">hello, i&apos;m nofil,</p> 
          <p className="line-b">front end</p>
          <p className="line-b">developer</p>
          <p className="line-a">based in pakistan</p>
          <a download='/resume.pdf' href="/resume.pdf"><button>resume</button></a> 
        </div>
        <div className="picture"> 
        <Image className="mainPic" src='/nofil.png' alt="nofilshoaib" width={506} height={509}></Image>
      </div>
      </div>
    </div>
  );
}
