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
import './VerticalSection.css';

const VerticalSection = ({
  subtitle,
  title,
  descriptions = [],       // 数组，每项是一行文字
  items = [],              // 数组，每项：{ icon: ReactNode, label: string }
  buttonText,
  buttonLink = '#'
}) => {
  return (
    <section className="vertical-section">
      {subtitle && <p className="vs-subtitle">{subtitle}</p>}
      {title && <h2 className="vs-title">{title}</h2>}
      <div className="vs-divider" />

      <div className="vs-description">
        {descriptions.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <ul className="vs-icons">
        {items.map((it, i) => (
          <li key={i}>
            <div className="vs-icon">{it.icon}</div>
            <span>{it.label}</span>
          </li>
        ))}
      </ul>

      {buttonText && (
        <a href={buttonLink} className="vs-button">
          {buttonText}
        </a>
      )}
    </section>
  );
};

export default VerticalSection;

