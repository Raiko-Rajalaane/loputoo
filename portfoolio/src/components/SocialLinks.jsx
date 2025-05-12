
import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './SocialLinks.css';

const items = [
  { icon: <FaInstagram />, url: 'https://instagram.com/your-profile', label: 'Instagram' },
  { icon: <FaFacebookF />, url: 'https://facebook.com/your-profile',  label: 'Facebook'  },
  { icon: <FaWhatsapp />, url: 'https://wa.me/your-number',          label: 'WhatsApp'  },
  { icon: <FaEnvelope />, url: 'mailto:you@example.com',              label: 'Email'     },
];

export default function SocialLinks() {
  return (
    <div className="social-links">
      {items.map(({ icon, url, label }) => (
        <a
          key={label}
          href={url}
          className={`social-link social-${label.toLowerCase()}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
