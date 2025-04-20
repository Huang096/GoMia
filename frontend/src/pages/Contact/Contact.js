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

// src/pages/Contact/Contact.js
import React from 'react';
import './Contact.css';
import { FaBaby, FaBuilding, FaUserGraduate } from 'react-icons/fa';

import LRTxtImgBlock from '../../components/LRTxtImgBlock/LRTxtImgBlock';
import VerticalSection from '../../components/VerticalSection/VerticalSection';

const Contact = () => {
  return (
    <div className="contact-page">
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

      <VerticalSection
        subtitle="EDUCATIONAL CONSULTING"
        title="联系方式"
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


    </div>
  );
};

export default Contact;