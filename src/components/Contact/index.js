import React from 'react';
import './styles.css';
import emailjs from 'emailjs-com';

import circle1 from './images/circle1.svg';
import circle2 from './images/circle2.svg';
import circle3 from './images/circle3.svg';
import circle4 from './images/circle4.svg';
import circle5 from './images/circle5.svg';

class Contact extends React.Component {
  state = {
      message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_USER)
      .then((result) => {
          e.target.reset(); 
        this.setState({message: 'Thanks for the message!'});
      }, (error) => {
          console.log(error.text);
      });
  }
  render() {
    return (
      <div>
        <div className="contact__container">
              <h1 className="contact__header">Contact</h1>
              <div className="contact__phone">(260)580-0514</div>
              <div className="message-box">
                <p>{this.state.message}</p>
              </div>
              <form className="contact__form" onSubmit={this.handleSubmit}>
                <fieldset>
                  <div className="input__wrapper">
                    <label htmlFor="name" className="input--label">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="contact__form__input" 
                      placeholder="Your name.."
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="email" className="input--label">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="contact__form__input" 
                      placeholder="Your email.."
                    />
                  </div>
                  <div className="input__wrapper">
                    <label htmlFor="message" className="input--label"></label>
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
              <div className="circles__container">
                      <img alt="svg design" src={circle3} className="cirlce--svg circle3"/>
                      <img alt="svg design" src={circle4} className="cirlce--svg circle4"/>
                      <img alt="svg design" src={circle5} className="cirlce--svg circle5"/>
                      <img alt="svg design" src={circle1} className="circle--svg circle1"/>
                      <img alt="svg design" src={circle2} className="circle--svg circle2"/>
              </div>
          </div>
      </div>
    );
  }
};

export default Contact;