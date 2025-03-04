import React from 'react';
import '../App.css'; 
function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="about-us-info">
        <h1>Про нас</h1>
        <p>Ми — команда, що створює чудові проекти для наших клієнтів, і завжди прагнемо до інновацій та розвитку.</p>
      </div>
      <div className="about-us-gallery">
        <div className="gallery-item">
          <img src="1.png" alt="Image 1" />
          <div className="bio">
            <h3>Ім'я 1</h3>
            <p>Коротка біографія цієї особи. Вона займається розробкою та створенням інноваційних рішень.</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="path_to_image_2.jpg" alt="Image 2" />
          <div className="bio">
            <h3>Ім'я 2</h3>
            <p>Коротка біографія цієї особи. Вона є спеціалістом по роботі з клієнтами та оптимізації бізнес-процесів.</p>
          </div>
        </div>

        <div className="gallery-item">
          <img src="path_to_image_3.jpg" alt="Image 3" />
          <div className="bio">
            <h3>Ім'я 3</h3>
            <p>Коротка біографія цієї особи. Вона працює в напрямку маркетингу та стратегії розвитку компанії.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
