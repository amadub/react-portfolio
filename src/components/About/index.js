import React from 'react';
import avatar from '../../resources/images/avatar.png';
import avatar2 from '../../resources/images/avatar2.png';
import pug from '../../resources/images/pug.png';
import './styles.css';

const About = () => {
  return (
    <div>
      <section className="content--section about-me">
        <div className="avatar-div">
          <img className="avatar" src={avatar} alt="Avatar" />
        </div>
        <p>This is about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus non mi dictum condimentum. Nunc arcu est, vulputate ac massa vel, lobortis interdum purus. Praesent dapibus euismod sapien sed dictum. Maecenas at mauris erat. Duis commodo dolor ac tellus efficitur maximus. Ut et efficitur lectus. Curabitur euismod vestibulum tristique. Nulla gravida ut mauris non consectetur. Pellentesque tristique neque nec sapien ultrices condimentum. Maecenas sodales mollis risus ut hendrerit. Praesent scelerisque hendrerit ante ac suscipit. Nullam posuere lobortis nisi et aliquam.</p>
      </section>
      <section className="content--section about-me">
        <p>This is about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus non mi dictum condimentum. Nunc arcu est, vulputate ac massa vel, lobortis interdum purus. Praesent dapibus euismod sapien sed dictum. Maecenas at mauris erat. Duis commodo dolor ac tellus efficitur maximus. Ut et efficitur lectus. Curabitur euismod vestibulum tristique. Nulla gravida ut mauris non consectetur. Pellentesque tristique neque nec sapien ultrices condimentum. Maecenas sodales mollis risus ut hendrerit. Praesent scelerisque hendrerit ante ac suscipit. Nullam posuere lobortis nisi et aliquam.</p>
        <div className="avatar-div">
          <img className="avatar" src={pug} alt="Avatar" />
        </div>
      </section>
      <section className="content--section about-me">
        <div className="avatar-div">
          <img className="avatar" src={avatar2} alt="Avatar" />
        </div>
        <p>This is about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu purus non mi dictum condimentum. Nunc arcu est, vulputate ac massa vel, lobortis interdum purus. Praesent dapibus euismod sapien sed dictum. Maecenas at mauris erat. Duis commodo dolor ac tellus efficitur maximus. Ut et efficitur lectus. Curabitur euismod vestibulum tristique. Nulla gravida ut mauris non consectetur. Pellentesque tristique neque nec sapien ultrices condimentum. Maecenas sodales mollis risus ut hendrerit. Praesent scelerisque hendrerit ante ac suscipit. Nullam posuere lobortis nisi et aliquam.</p>
      </section>
    </div>
  );
};

export default About;