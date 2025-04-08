/* eslint-disable react/jsx-pascal-case */
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

// src/pages/Consult/Consult.js
import React from 'react';
import './Consult.css';

import UD_TxtImgBlock from '../../components/UD_TxtImgBlock/UD_TxtImgBlock';
import ParallaxBlock from '../../components/ParallaxBlock/ParallaxBlock';

const Consult = () => {
  return (
    <div className="consult-page">
    <UD_TxtImgBlock
      title="教育咨询"
      subtitle="一站式定制化升学规划"
      description="独立教育顾问全程把关，从需求出发，提供专业、科学的系统咨询。"
      imageSrc="https://fancytour.cn/wp-content/uploads/2020/10/WeChat-Image_20201201162917-scaled.jpg"
      height="800px"
    />

      <ParallaxBlock
        backgroundImage="https://fancytour.cn/wp-content/uploads/2020/10/WeChat-Image_20201201162917-scaled.jpg"
        height="800px"
        speed={0.2}
        title="教育咨询"
        description="这是一个视差滚动效果示例。"
        buttonText="Read More"
        buttonLink="/details"
      />

      <h1>欢迎来到 Consult 页面</h1>
      <p>这里是一些示例内容。</p>
    </div>
  );
};

export default Consult;