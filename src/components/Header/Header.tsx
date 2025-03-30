import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui-tmp/Logo';
import SocialIcon from '../ui-tmp/SocialIcon';
import Button from '../ui-tmp/Button';
import { useModal } from '../../context/ModalContext';
import { fadeIn, fadeInRight, fadeInLeft, buttonAnimation } from '../../utils/framerAnimations';

const Header: React.FC = () => {
  const { openModal } = useModal();

  const menuItems = [
    { id: 1, name: 'Спеціалізації', href: '#specializations' },
    { id: 2, name: 'Чому я', href: '#why-me' },
    { id: 3, name: 'Відгуки', href: '#testimonials' },
    { id: 4, name: 'Контакти', href: '#contacts' },
  ];

  const socialLinks = [
    { id: 1, name: 'Telegram', href: 'https://t.me/username' },
    { id: 2, name: 'YouTube', href: 'https://youtube.com/channel/username' },
    { id: 3, name: 'Phone', href: 'tel:+380954040581' },
  ];

  return (
    <header 
      className="w-full bg-white"
      style={{
        maxHeight: '82px',
        boxShadow: `
          0px 10px 21px 0px #6A7D9E0D,
          0px 39px 39px 0px #6A7D9E0A,
          0px 87px 52px 0px #6A7D9E08,
          0px 155px 62px 0px #6A7D9E03,
          0px 242px 68px 0px #6A7D9E00
        `
      }}
    >
      <div className="max-w-[1320px] mx-auto px-4 flex items-center justify-between h-[82px]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <Logo width={80} height={40} />
        </motion.div>
        
        <motion.nav 
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <ul className="flex items-center">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.id} 
                className={`${index < menuItems.length - 1 ? 'mr-[46px]' : ''}`}
                variants={fadeIn}
                custom={index}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  href={item.href}
                  className="font-semibold text-base leading-none hover:text-[#566B86] transition-colors cursor-pointer"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        
        <motion.div 
          className="hidden lg:flex items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {socialLinks.map((social, index) => (
            <motion.div 
              key={social.id} 
              className={`${index < socialLinks.length - 1 ? 'mr-[32px]' : ''}`}
              variants={fadeIn}
              custom={index}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <SocialIcon name={social.name} href={social.href} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Button 
            text="Перейти к курсу" 
            className="ml-auto md:ml-0" 
            onClick={openModal}
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 