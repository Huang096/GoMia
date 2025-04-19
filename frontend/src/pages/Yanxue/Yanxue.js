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

// src/pages/Yanxue/Yanxue.js
import React from 'react';
import './Yanxue.css';
import LRTxtImgBlock from '../../components/LRTxtImgBlock/LRTxtImgBlock';
import ParallaxBlock from '../../components/ParallaxBlock/ParallaxBlock';
import VerticalSection from '../../components/VerticalSection/VerticalSection';
import UD_TxtImgBlock from '../../components/UD_TxtImgBlock/UD_TxtImgBlock';

import { FaBaby, FaBuilding, FaUserGraduate } from 'react-icons/fa';

const Yanxue = () => {
  return (
    <div className="yanxue-page">

    <UD_TxtImgBlock
          title="教育咨询"
          subtitle="一站式定制化升学规划"
          description="独立教育顾问全程把关，从需求出发，提供专业、科学的系统咨询。"
          imageSrc="https://fancytour.cn/wp-content/uploads/2020/10/WeChat-Image_20201201162917-scaled.jpg"
          height="800px"
    />
      

      <VerticalSection
        subtitle="EDUCATIONAL CONSULTING"
        title="研学服务"
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

      <LRTxtImgBlock
        leftImg={true}
        title="北美旅行"
        content={`
          <p>为北美探险做好准备吧！我们的旅行将一路从美国西部，穿过加拿大最令人惊叹的部分地区。</p>
          <p>一路上，我们将参观北美洲十大最佳国家公园，在那里您将欣赏到各种令人惊叹的风景。</p>
        `}
        imgSrc="https://fancytour.cn/wp-content/uploads/2020/11/WeChat-Image_20201127142104-700x500.jpg"
        containerStyle={{ padding: '40px 0' }}
        imgContainerStyle={{ padding: '20px' }}
        textContainerStyle={{ padding: '20px' }}
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

      <LRTxtImgBlock
        leftImg={false}
        title="北美旅行"
        content={`
          <p>为北美探险做好准备吧！我们的旅行将一路从美国西部，穿过加拿大最令人惊叹的部分地区。</p>
          <p>一路上，我们将参观北美洲十大最佳国家公园，在那里您将欣赏到各种令人惊叹的风景。</p>
        `}
        imgSrc="https://fancytour.cn/wp-content/uploads/2020/11/WeChat-Image_20201127142104-700x500.jpg"
        containerStyle={{ padding: '40px 0' }}
        imgContainerStyle={{ padding: '20px' }}
        textContainerStyle={{ padding: '20px' }}
      />

      <LRTxtImgBlock
        leftImg={true}
        title="北美旅行"
        content={`
          <p>为北美探险做好准备吧！我们的旅行将一路从美国西部，穿过加拿大最令人惊叹的部分地区。</p>
          <p>一路上，我们将参观北美洲十大最佳国家公园，在那里您将欣赏到各种令人惊叹的风景。</p>
        `}
        imgSrc="https://fancytour.cn/wp-content/uploads/2020/11/WeChat-Image_20201127142104-700x500.jpg"
        containerStyle={{ padding: '40px 0' }}
        imgContainerStyle={{ padding: '20px' }}
        textContainerStyle={{ padding: '20px' }}
      />
    </div>
  );
};

export default Yanxue;