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
import React, { useState, useEffect } from 'react';
import './ParallaxBlock.css';

const ParallaxBlock = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-block">
      {/* 背景层，使用内联样式动态设置 transform */}
      <div
        className="parallax-background"
        style={{ transform: `translateY(${-offset * 0.15}px)` }}
      />
      {/* 内容层 */}
      <div className="parallax-content">
        <h1>Parallax Block</h1>
        <p>这是一个视差滚动效果示例。</p>
      </div>
    </div>
  );
};

export default ParallaxBlock;
