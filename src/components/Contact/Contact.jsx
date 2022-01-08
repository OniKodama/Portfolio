import {useState} from 'react'
import './Contact.scss'
import Hs from '../../images/shake.svg'

const Contact = () => {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id = "contact">
            <div className="left">
                <img src= {Hs} alt = "" className='img' />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type = "text" placeholder = "Email" />
                    <textarea placeholder = "Message"></textarea>
                    <button type = "sumbit">Send</button>
                    {message && <span>Thanks :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
