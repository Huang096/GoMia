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


const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      <ParallaxBlock />
      <h1>欢迎来到 Home 页面</h1>
      <p>这里是一些示例内容。</p>
    </div>
  );
};

export default Home;