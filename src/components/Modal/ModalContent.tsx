import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui-tmp/Button';
import modalImage from '../../assets/modal.jpg';
import { fadeIn, fadeInLeft, fadeInRight, scale, buttonAnimation } from '../../utils/framerAnimations';

interface ModalContentProps {
  onClose: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onClose }) => {
  // Состояние для отслеживания ширины экрана
  const [isDesktop, setIsDesktop] = useState(false);

  // Эффект для отслеживания изменения размера окна
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1200);
    };
    
    // Проверяем при монтировании
    checkIsDesktop();
    
    // Добавляем слушатель изменения размера
    window.addEventListener('resize', checkIsDesktop);
    
    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, []);

  // Создаем три информационных блока
  const infoBlocks = [
    {
      id: 1,
      title: 'Тривалість',
      value: '12 тижнів'
    },
    {
      id: 2,
      title: 'Дихальні техніки',
      value: '6 вправ'
    },
    {
      id: 3,
      title: 'Блоки курсу',
      value: '5 блоків'
    }
  ];

  // Строка box-shadow из требований
  const boxShadowStyle = `
    0px 10px 21px 0px #6A7D9E0D,
    0px 39px 39px 0px #6A7D9E0A,
    0px 87px 52px 0px #6A7D9E08,
    0px 155px 62px 0px #6A7D9E03,
    0px 242px 68px 0px #6A7D9E00
  `;

  // Стили для мобильной и десктопной версии
  const contentStyle = {
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px'
  };

  const contentStyleDesktop = {
    // Убираем отдельные отступы
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '24px', 
    paddingLeft: '24px',
    paddingRight: '24px',
    width: '100%'
  };

  const imageContainerStyleDesktop = {
    width: '396px',
    display: 'flex',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    flexShrink: 0
  };

  const imageStyle = {
    height: '400px',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    objectFit: 'cover' as const
  };

  const imageStyleDesktop = {
    width: '396px',
    flexShrink: 0,
    height: '100%'
  };

  return (
    <motion.div 
      style={{ 
        backgroundColor: 'white', 
        borderRadius: '16px',
        overflow: 'hidden'
      }}
      initial="hidden"
      animate="visible"
      variants={scale}
    >
      <div className={isDesktop ? "flex flex-row" : "flex flex-col"}>
        {/* Изображение: для экранов <= 1200px ставим вверху, для десктопа - слева */}
        {!isDesktop ? (
          <motion.div 
            style={{...imageContainerStyle}}
            variants={fadeIn}
          >
            <motion.img 
              src={modalImage} 
              alt="Курс «Відновлення після вагітності та пологів»" 
              style={{...imageStyle}}
              variants={scale}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        ) : (
          <motion.div 
            style={{
              ...imageContainerStyle, 
              ...imageContainerStyleDesktop, 
              paddingRight: '0',
              paddingTop: '24px',
              paddingBottom: '24px', 
              paddingLeft: '24px',
            }}
            variants={fadeInLeft}
          >
            <motion.img 
              src={modalImage} 
              alt="Курс «Відновлення після вагітності та пологів»" 
              style={{...imageStyle, ...imageStyleDesktop}}
              variants={scale}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
        )}
        
        {/* Контент справа */}
        <motion.div 
          style={isDesktop ? {...contentStyle, paddingRight: '44px'} : {...contentStyle}}
          variants={isDesktop ? fadeInRight : fadeIn}
        >
          <motion.h2 
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 600,
              fontSize: isDesktop ? '48px' : '24px',
              lineHeight: '125%',
              letterSpacing: '0%',
              color: '#324155',
              marginBottom: isDesktop ? '24px' : '16px'
            }}
            variants={fadeIn}
          >
            Курс «Відновлення після<br /> вагітності та пологів»
          </motion.h2>

          {/* Три блока с информацией в строку */}
          <motion.div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              gap: isDesktop ? '24px' : '10px', 
              marginBottom: isDesktop ? '44px' : '20px',
              flexWrap: 'wrap'
            }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            {infoBlocks.map((block, index) => (
              <motion.div 
                key={block.id} 
                style={{ display: 'flex', flexDirection: 'column', marginBottom: isDesktop ? 0 : '8px' }}
                variants={fadeIn}
                custom={index}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.span 
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 400,
                    fontSize: isDesktop ? '14px' : '12px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#566B86',
                    marginBottom: '2px'
                  }}
                >
                  {block.title}
                </motion.span>
                <motion.span 
                  style={{
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    fontSize: isDesktop ? '24px' : '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: '#566B86'
                  }}
                >
                  {block.value}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Текстовое описание */}
          <motion.p 
            style={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 400,
              fontSize: isDesktop ? '20px' : '16px',
              lineHeight: '150%',
              letterSpacing: '0%',
              color: '#566B86',
              marginBottom: isDesktop ? '44px' : '24px'
            }}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            Відновлювальний курс для жінок, які хочуть безпечно відновити здоров'я, покращити самопочуття, повернути гарну форму, зміцнити м'язи та підвищити самооцінку.
            <br /><br />
            Знаходь зручний для себе час для практик та тренувань;<br />
            Отримай безкоштовний чат зі мною протягом перших 3 днів після придбання курсу;<br />
            Досягнеш можливості повернути собі себе;<br />
            Здобудеш силу та енергію аби рухати своє життя вперед.
          </motion.p>

          {/* Кнопка */}
          <motion.div
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: 0.7 }}
          >
            <Button 
              text="Придбати курс" 
              onClick={onClose}
              customStyles={{
                fontFamily: 'Raleway, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#1D2507',
                backgroundColor: '#D5FF5F',
                padding: '24px 48px',
                borderRadius: '12px'
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ModalContent; 