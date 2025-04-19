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

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './LRParallaxBlock.css';

const LRParallaxBlock = ({
  backgroundImage,
  height = '600px',
  speed = 0.05, // Ensure speed is being passed and used properly
  title,
  description,
  imageSrc,
  content,
}) => {
  const ref = useRef(null); // 引用背景元素
  const [offset, setOffset] = useState(0); // 存储页面滚动偏移

  // 监听滚动事件，更新 offset
  useEffect(() => {
    const onScroll = () => {
      const currentOffset = window.pageYOffset;
      console.log(currentOffset); // Check if offset is being updated
      setOffset(currentOffset); // 更新滚动偏移量
    };
    window.addEventListener('scroll', onScroll); // 监听滚动事件
    return () => window.removeEventListener('scroll', onScroll); // 清理事件监听
  }, []);

  // 动态计算背景图片位置
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    transform: `translateY(${-(offset - 1000) * speed}px)`, // 按照 offset 计算背景偏移
    transition: 'transform 0.1s ease-out', // Optional smooth transition for effect
  };

  // 样式设置
  const blockStyle = {
    height,
  };

  return (
    <div className="lr-parallax-block" style={blockStyle}>
      <div
        className="lr-parallax-background"
        style={bgStyle} // 应用动态背景样式
        ref={ref}
      />
      <div className="lr-parallax-content">
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        <div className="lr-parallax-info">
          {imageSrc && <img src={imageSrc} alt="content" />}
          {content && <div className="lr-parallax-text">{content}</div>}
        </div>
      </div>
    </div>
  );
};

LRParallaxBlock.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  speed: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  content: PropTypes.string,
};

export default LRParallaxBlock;
