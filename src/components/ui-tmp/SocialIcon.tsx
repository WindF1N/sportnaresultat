import React from 'react';
import tgIcon from '../../assets/tg.svg';
import youtubeIcon from '../../assets/youtube.svg';
import phoneIcon from '../../assets/phone.svg';

interface SocialIconProps {
  name: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, href }) => {
  // Выбираем соответствующую иконку в зависимости от названия
  const getIconSrc = () => {
    switch (name.toLowerCase()) {
      case 'telegram':
      case 'tg':
        return tgIcon;
      case 'youtube':
        return youtubeIcon;
      case 'phone':
        return phoneIcon;
      default:
        return phoneIcon; // По умолчанию возвращаем иконку телефона
    }
  };

  return (
    <a 
      href={href} 
      aria-label={name} 
      title={name}
      className="w-6 h-6 flex items-center justify-center"
    >
      <img src={getIconSrc()} alt={name} width="24" height="24" />
    </a>
  );
};

export default SocialIcon; 