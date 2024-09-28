import React from 'react';
import Home from '../component/Home/Home'  ;
import styles from './HomePage.module.css';
function HomePage() {
  return (
    <div>
      <Home />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className={ `text-white ${styles.home}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga totam vitae architecto nesciunt deleniti, voluptatum quas accusantium magni veritatis delectus dolorem debitis corrupti beatae tempora repudiandae facilis distinctio ducimus!
      </div>
    </div>
  )
}

export default HomePage;
