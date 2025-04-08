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
import './UD_TxtImgBlock.css';

const UD_TxtImgBlock = ({
  subtitle,
  title,
  description,
  imageSrc,
  height = '800px',
}) => {
  return (
    <section className="ud_txtimgblock" style={{ height }}>
      {/* 文本区 */}
      <div className="ti-text">
        {title && <h2 className="ti-title">{title}</h2>}
        {subtitle && <p className="ti-subtitle">{subtitle}</p>}
        {description && <p className="ti-description">{description}</p>}
      </div>
      {/* 图片区 */}
      <div className="ti-image">
        <img src={imageSrc} alt={title || 'Image'} />
      </div>
    </section>
  );
};

UD_TxtImgBlock.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default UD_TxtImgBlock;