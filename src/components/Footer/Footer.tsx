import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import logoWhiteSvg from '../../assets/logo-white.svg';
import SocialIcon from '../ui-tmp/SocialIcon';
import { fadeIn, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/framerAnimations';

const Footer: React.FC = () => {
  const socialLinks = [
    { id: 1, name: 'Telegram', href: 'https://t.me/username' },
    { id: 2, name: 'YouTube', href: 'https://youtube.com/channel/username' },
    { id: 3, name: 'Phone', href: 'tel:+380954040581' },
  ];

  return (
    <footer 
      style={{ 
        backgroundColor: '#324155',
        width: '100%',
      }}
      id="contacts"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-[60px]">
        <div className="flex flex-col max-[880px]:flex-col min-[880px]:flex-row justify-between">
          {/* Левая часть с логотипом и информацией */}
          <motion.div 
            className="mb-12 max-[880px]:mb-12 min-[880px]:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            {/* Логотип */}
            <motion.div 
              style={{ 
                width: '80px',
                height: '40px',
                marginBottom: '43px',
              }}
              variants={fadeIn}
            >
              <img src={logoWhiteSvg} alt="Логотип" width="80" height="40" />
            </motion.div>
            
            {/* Информация о тренере */}
            <motion.p 
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '4%',
                color: '#AEBFD6',
                marginBottom: '16px'
              }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              ISO та нутриціолог PRO – Ольга Дідух
            </motion.p>
            
            <motion.p 
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '4%',
                color: '#AEBFD6',
                marginBottom: '43px'
              }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              Твоя тренерка міжнародного стандарту
            </motion.p>
            
            {/* Социальные иконки */}
            <motion.div 
              className="flex space-x-8"
              variants={staggerContainer}
            >
              {socialLinks.map((social, index) => (
                <motion.div 
                  key={social.id} 
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  variants={fadeIn}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <SocialIcon name={social.name} href={social.href} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Правая часть с меню и контактами */}
          <motion.div 
            className="flex flex-col items-start max-[880px]:items-start min-[880px]:items-end min-[880px]:mt-[99px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            {/* Навигационное меню */}
            <motion.nav 
              className="mb-10 max-[880px]:mb-10 min-[880px]:mb-[67px] w-full min-[880px]:w-auto"
              style={{ 
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
              }}
              variants={staggerContainer}
            >
              <ul className="flex flex-wrap max-[880px]:flex-col min-[880px]:flex-row items-start min-[880px]:items-center min-[880px]:justify-end space-y-6 min-[880px]:space-y-0 space-x-0 min-[880px]:space-x-[50px]">
                <motion.li className="w-full min-[880px]:w-auto" variants={fadeIn} custom={0}>
                  <a href="#specializations" className="hover:text-[#D5FF5F] transition-colors cursor-pointer">
                    Спеціалізації
                  </a>
                </motion.li>
                <motion.li className="w-full min-[880px]:w-auto" variants={fadeIn} custom={1}>
                  <a href="#why-me" className="hover:text-[#D5FF5F] transition-colors cursor-pointer">
                    Чому я
                  </a>
                </motion.li>
                <motion.li className="w-full min-[880px]:w-auto" variants={fadeIn} custom={2}>
                  <a href="#testimonials" className="hover:text-[#D5FF5F] transition-colors cursor-pointer">
                    Відгуки
                  </a>
                </motion.li>
                <motion.li className="w-full min-[880px]:w-auto" variants={fadeIn} custom={3}>
                  <a href="#contacts" className="hover:text-[#D5FF5F] transition-colors cursor-pointer">
                    Контакти
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
            
            {/* Контактная информация */}
            <motion.div 
              className="flex flex-col max-[880px]:flex-col min-[880px]:flex-row items-start min-[880px]:items-center min-[880px]:justify-end space-y-4 min-[880px]:space-y-0 min-[880px]:space-x-[44px]"
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '150%',
                letterSpacing: '4%',
                color: '#AEBFD6',
              }}
              variants={staggerContainer}
            >
              <motion.a 
                href="tel:+380954040581" 
                className="hover:text-[#D5FF5F] transition-colors"
                variants={fadeIn}
                custom={0}
                whileHover={{ scale: 1.05 }}
              >
                +38 (095) 40-40-581
              </motion.a>
              <motion.a 
                href="mailto:contact@gmail.com" 
                className="hover:text-[#D5FF5F] transition-colors"
                variants={fadeIn}
                custom={1}
                whileHover={{ scale: 1.05 }}
              >
                contact@gmail.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 