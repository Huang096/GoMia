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

import React from 'react';
import PropTypes from 'prop-types';
import './LRTxtImgBlock.css';

const LRTxtImgBlock = ({
  leftImg,
  title,
  content,
  imgSrc,
  containerStyle = {},
  textContainerStyle = {},
  imgContainerStyle = {},
}) => {
  return (
    <div
      className={`lrtxt-img-block ${leftImg ? 'left-img' : 'right-img'}`}
      style={containerStyle}
    >
      <div className="image-container" style={imgContainerStyle}>
        <img src={imgSrc} alt={title} />
      </div>

      <div className="text-container" style={textContainerStyle}>
        <h3 className="title">
          {title}
          <span className="title-divider" />
        </h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

LRTxtImgBlock.propTypes = {
  leftImg: PropTypes.bool,           // true: 图左文右；false: 文左图右
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired, // 可以传 HTML 字符串
  imgSrc: PropTypes.string.isRequired,
  containerStyle: PropTypes.object,     // 覆盖最外层容器样式
  textContainerStyle: PropTypes.object, // 覆盖文字容器样式（包括 padding）
  imgContainerStyle: PropTypes.object,  // 覆盖图片容器样式（包括 padding）
};

export default LRTxtImgBlock;

