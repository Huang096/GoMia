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
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      {/* 新增的footer-content容器（对应header的header-container） */}
      <div className="footer-content">
        
        {/* 上半部分：公司信息 + 二维码 */}
        <div className="footer-main">
          <div className="footer-info">
            <h4>XXXXXXXXXXXXXX公司</h4>
            <p>地址：XXXXXXXXXXXXXX</p>
            <p>电话：XXXXXXXXXXXXXX</p>
            <p>邮箱：XXXXXXXXXXXXXX</p>
          </div>
          
          <div className="footer-qr">
            <div className="qr-item">
              <p>微信公众号</p>
              <img 
                src="https://via.placeholder.com/100x100?text=QR1" 
                alt="WeChat Official QR" 
              />
            </div>
            <div className="qr-item">
              <p>微信客服</p>
              <img 
                src="https://via.placeholder.com/100x100?text=QR2" 
                alt="WeChat Service QR" 
              />
            </div>
          </div>
        </div>

        {/* 下半部分：版权信息 */}
        <div className="footer-copyright">
          <span>Copyright © 2025 GoMia公司, All Rights Reserved</span>
          <span>Powered by Tangent糕</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
