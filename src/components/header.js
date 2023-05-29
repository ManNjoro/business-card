import me from '../me.jpg'
import{FaLinkedin}  from "react-icons/fa"
import{FaEnvelope}  from "react-icons/fa"
export default function Header() {
    return(
    <header className='head'>
        <img src={me} alt='Man Njoro' className='photo'></img>
        <div className='career'>
            <h1>Eli John Gachago</h1>
            <span className='job'>Frontend Developer</span>
        </div>
        <div className='btn'>
            <div>
                <button className='email'><FaEnvelope /> &nbsp;Email</button>
            </div>
            <div>
                <button className='linkedin'><FaLinkedin />LinkedIn</button>
            </div>
            
        </div>
    </header>
    )
}