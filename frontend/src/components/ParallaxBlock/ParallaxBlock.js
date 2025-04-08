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

// src/components/ParallaxBlock/ParallaxBlock.js
// src/components/ParallaxBlock/ParallaxBlock.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ParallaxBlock.css';

const ParallaxBlock = ({
  backgroundImage,
  height = '500px',
  speed = 0.15,
  title,
  description,
  buttonText,
  buttonLink = '#',
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    transform: `translateY(${-offset * speed}px)`,
  };

  const blockStyle = {
    height,
  };

  return (
    <div className="parallax-block" style={blockStyle}>
      <div
        className="parallax-background"
        style={bgStyle}
      />
      <div className="parallax-content">
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {buttonText && (
          <a href={buttonLink} className="read-more">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

ParallaxBlock.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  speed: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default ParallaxBlock;

