import React from 'react';
import './styles.css';
import circle1 from './images/circle1.svg';
import circle2 from './images/circle2.svg';
import circle3 from './images/circle3.svg';
import circle4 from './images/circle4.svg';
import circle5 from './images/circle5.svg';

const Contact = () => {
  return (
    <div>
       <div class="contact__container">
            <h1 className="contact__header">Contact</h1>
            <div class="contact__phone">(260)580-0514</div>
            <form className="contact__form">
              <fieldset>
                <div className="input__wrapper">
                  <label for="name" className="input--label">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="contact__form__input" 
                    placeholder="Your name.."
                  />
                </div>
                <div className="input__wrapper">
                  <label for="email" className="input--label">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="contact__form__input" 
                    placeholder="Your email.."
                  />
                </div>
                <div className="input__wrapper">
                  <label for="message" className="input--label"></label>
                  <textarea
                    name="message" 
                    className="contact__form__input" 
                    placeholder="Message.."
                    rows="5"
                    cols="30"
                  >
                  </textarea>
                </div>
                <button className="contact__form__submit">Send Message</button>
              </fieldset>
            </form>
            <div class="circles__container">
                    <img src={circle3} className="cirlce--svg circle3"/>
                    <img src={circle4} className="cirlce--svg circle4"/>
                    <img src={circle5} className="cirlce--svg circle5"/>
                    <img src={circle1} className="circle--svg circle1"/>
                    <img src={circle2} className="circle--svg circle2"/>
            </div>
        </div>
    </div>
  );
};

export default Contact;