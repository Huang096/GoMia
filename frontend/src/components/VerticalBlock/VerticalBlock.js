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

// src/components/VerticalBlock/VerticalBlock.js
import React from 'react';
import { FaBaby, FaBuilding, FaUserGraduate } from 'react-icons/fa';
import './VerticalBlock.css';

const VerticalBlock = () => {
  return (
    <section className="vertical-block">
      {/* 小标题 */}
      <p className="vertical-subtitle">EDUCATIONAL CONSULTING</p>
      {/* 大标题 */}
      <h2 className="vertical-title">教育咨询</h2>
      <div className="vertical-divider" />

      {/* 描述文字 */}
      <div className="vertical-description">
        <p>名校申请 · 藤校访学 · 背景提升 教育规划</p>
        <p>一站式，定制化的升学规划方案</p>
        <p>独立教育顾问全程把关</p>
        <p>从需求出发，提供专业、科学的系统咨询</p>
        <p>制定整体解决方案</p>
      </div>

      {/* 三个图标项 */}
      <ul className="vertical-icons">
        <li>
          <FaBaby className="icon" />
          <span>低龄培养</span>
        </li>
        <li>
          <FaBuilding className="icon" />
          <span>全能高中</span>
        </li>
        <li>
          <FaUserGraduate className="icon" />
          <span>本科及研究生</span>
        </li>
      </ul>

      {/* Read More 按钮 */}
      <a href="#" className="read-more">
        了解详情 →
      </a>
    </section>
  );
};

export default VerticalBlock;
