/* eslint-disable react/jsx-no-undef */
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

// src/pages/Home/Home.js
import React from 'react';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';
import ParallaxBlock from '../../components/ParallaxBlock/ParallaxBlock';
import VerticalSection from '../../components/VerticalSection/VerticalSection';

import { FaBaby, FaBuilding, FaUserGraduate } from 'react-icons/fa';


const Home = () => {
  return (
    <div className="home-page">
      <Carousel />

      {/* 传入不同参数即可复用 */}
      <ParallaxBlock
        backgroundImage="https://fancytour.cn/wp-content/uploads/2020/10/WeChat-Image_20201201162917-scaled.jpg"
        height="800px"
        speed={0.2}
        title="研学服务"
        description="这是一个视差滚动效果示例。"
        buttonText="Read More"
        buttonLink="/details"
      />

      <VerticalSection
      subtitle="EDUCATIONAL CONSULTING"
      title="选校平台"
      descriptions={[
        '名校申请 · 藤校访学 · 背景提升 教育规划',
        '一站式，定制化的升学规划方案',
        '独立教育顾问全程把关',
        '从需求出发，提供专业、科学的系统咨询',
        '制定整体解决方案',
      ]}
      items={[
        { icon: <FaBaby />, label: '低龄培养' },
        { icon: <FaBuilding />, label: '全能高中' },
        { icon: <FaUserGraduate />, label: '本科及研究生' },
      ]}
      buttonText="了解详情 →"
      buttonLink="#"
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
    </div>
  );
};

export default Home;