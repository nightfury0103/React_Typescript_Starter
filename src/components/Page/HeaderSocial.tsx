import React from 'react'

const socialLinks = ['whatsapp-icon', 'instagram-icon']

const HeaderSocial: React.FC = () => (
  <div className="social-box">
    <ul>
      {socialLinks.map((s, index) => (
        <li key={`social_${index}`}>
          <a href="#" target="_blank">
            <span className={s}></span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default HeaderSocial
