// Copyright 2025 huangzheheng
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState, useEffect } from 'react';
import './Carousel.css';

const slidesData = [
  {
    id: 1,
    bgColor: 'red',
    // imageUrl: 'https://via.placeholder.com/1920x600/FF0000/FFFFFF?text=Slide+1',
    title: '研学服务',
    description: '这是幻灯片 1 的描述',
    link: '#',
  },
  {
    id: 2,
    bgColor: 'green',
    // imageUrl: 'https://via.placeholder.com/1920x600/00FF00/FFFFFF?text=Slide+2',
    title: '选校平台',
    description: '这是幻灯片 2 的描述',
    link: '#',
  },
  {
    id: 3,
    bgColor: 'blue',
    // imageUrl: 'https://via.placeholder.com/1920x600/0000FF/FFFFFF?text=Slide+3',
    title: '教育咨询',
    description: '这是幻灯片 3 的描述',
    link: '#',
  },
  {
    id: 4,
    bgColor: 'yellow',
    // imageUrl: 'https://via.placeholder.com/1920x600/0000FF/FFFFFF?text=Slide+3',
    title: '联系我们',
    description: '这是幻灯片 4 的描述',
    link: '#',
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentSlide = slidesData[currentIndex];

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        // style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}
        style={{ backgroundColor: currentSlide.bgColor }}
      >
        <div className="carousel-content">
          <h2>{currentSlide.title}</h2>
          <p>{currentSlide.description}</p>
          <a href={currentSlide.link} className="read-more">
            Read More
          </a>
        </div>
      </div>
      <button className="carousel-btn prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-btn next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
