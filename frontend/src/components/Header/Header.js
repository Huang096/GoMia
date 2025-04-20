/* eslint-disable jsx-a11y/anchor-is-valid */
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

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* 新增的header-container包裹层 */}
      <div className="header-container">
        {/* LOGO部分 */}
        <div className="logo">
          <img
            src="https://via.placeholder.com/150x50?text=LOGO"
            alt="Logo Placeholder"
          />
        </div>

        {/* 导航菜单 */}
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                首页
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yanxue"
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                研学服务
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/xuanxiao"
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                选校平台
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consult"
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                教育咨询
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'active-link' : undefined}
              >
                关于我们
              </NavLink>
            </li>
            <li>
              <a href="#" className="search-icon">
                <FaSearch size={20} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;