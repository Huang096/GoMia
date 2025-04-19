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


const Yanxue = () => {
  return (
    <div className="yanxue-page">

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


      <h1>欢迎来到 Yanxue 页面</h1>
      <p>这里是一些示例内容。</p>
    </div>
  );
};

export default Yanxue;