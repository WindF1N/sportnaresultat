import React from 'react';

interface SocialIconProps {
  name: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, href }) => {
  return (
    <a href={href} aria-label={name} title={name}>
      <div className="w-6 h-6 bg-gray-300 flex items-center justify-center text-xs text-gray-600 rounded-full">
        {name.substring(0, 1)}
      </div>
    </a>
  );
};

export default SocialIcon; 