import React from 'react';
import { motion } from 'framer-motion';
import s1 from '../../assets/s1.svg';
import s2 from '../../assets/s2.svg';
import s3 from '../../assets/s3.svg';
import s4 from '../../assets/s4.svg';
import s5 from '../../assets/s5.svg';
import s6 from '../../assets/s6.svg';
import s7 from '../../assets/s7.svg';
import { fadeIn, titleAnimation, staggerContainer, cardAnimation } from '../../utils/framerAnimations';

const Specializations: React.FC = () => {
  const specializations = [
    {
      id: 1,
      image: s1,
      text: 'вирішення психологічних проблем'
    },
    {
      id: 2,
      image: s2,
      text: 'відновлення після\nпологів'
    },
    {
      id: 3,
      image: s3,
      text: 'прдолання розладів харчової поведінки'
    },
    {
      id: 4,
      image: s4,
      text: 'спеціалізовані тренування після травм'
    },
    {
      id: 5,
      image: s5,
      text: 'робота з підвищенння самооцінки'
    },
    {
      id: 6,
      image: s6,
      text: 'індивідуальний план харчування'
    },
    {
      id: 7,
      image: s7,
      text: 'корекція технік виконання вправ'
    }
  ];

  const boxShadowStyle = `
    0px 39px 39px 0px #6A7D9E0A,
    0px 10px 21px 0px #6A7D9E0D,
    0px 242px 68px 0px #6A7D9E00,
    0px 155px 62px 0px #6A7D9E03,
    0px 87px 52px 0px #6A7D9E08
  `;

  // Разделяем на два ряда для десктопа (4 и 3)
  const firstRow = specializations.slice(0, 4);
  const secondRow = specializations.slice(4);

  // Группируем для больших планшетов (3-3-1)
  const tabletRow1 = specializations.slice(0, 3);
  const tabletRow2 = specializations.slice(3, 6);
  const tabletRow3 = specializations.slice(6);
  
  // Группируем для маленьких планшетов (2-2-2-1)
  const smallTabletRow1 = specializations.slice(0, 2);
  const smallTabletRow2 = specializations.slice(2, 4);
  const smallTabletRow3 = specializations.slice(4, 6);
  const smallTabletRow4 = specializations.slice(6);

  // Компонент для отображения карточки специализации
  const SpecializationCard = ({ item, index }: { item: typeof specializations[0], index: number }) => (
    <motion.div 
      className="w-[240px] h-[314px] bg-white rounded-[34px] flex flex-col items-center py-6 px-2"
      style={{ boxShadow: boxShadowStyle }}
      variants={cardAnimation}
      custom={index}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <motion.div 
        className="w-[220px] h-[220px] rounded-[20px] mb-4 flex items-center justify-center overflow-hidden"
      >
        <img src={item.image} alt={item.text} width="220" height="220" />
      </motion.div>
      <motion.p 
        style={{ 
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '25.6px',
          letterSpacing: '0%',
          color: '#566B86',
          textAlign: 'center',
          whiteSpace: 'pre-line'
        }}
        className="px-2"
      >
        {item.text}
      </motion.p>
    </motion.div>
  );

  return (
    <section className="py-20 xl:pt-[204px] xl:pb-[102px] bg-[#F6F6F6]" id="specializations">
      <div className="max-w-[1320px] mx-auto px-4">
        <motion.h2 
          style={{ 
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#324155',
            textAlign: 'center'
          }}
          className="mb-6 text-4xl md:text-[48px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleAnimation}
        >
          Мої спеціалізації
        </motion.h2>
        <motion.p 
          style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '125%',
            letterSpacing: '4%',
            color: '#566B86',
            textAlign: 'center'
          }}
          className="mb-[44px] max-w-[800px] mx-auto text-base md:text-[20px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Піклування про себе — це не примха, а необхідність. Особливо,<br className="hidden md:block" /> коли потрібно відновитись фізично й психологічно.
        </motion.p>

        {/* Desktop версия - от 1280px и выше */}
        <div className="hidden xl:block">
          {/* Первый ряд - 4 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {firstRow.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Второй ряд - 3 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {secondRow.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
        </div>

        {/* Планшетная версия (large) - от 840px до 1279px */}
        <div className="hidden lg:flex lg:flex-col xl:hidden">
          {/* Первый ряд - 3 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {tabletRow1.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Второй ряд - 3 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {tabletRow2.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Третий ряд - 1 карточка */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {tabletRow3.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
        </div>

        {/* Маленькая планшетная версия (small-medium) - от 640px до 839px */}
        <div className="hidden sm:flex sm:flex-col lg:hidden">
          {/* Первый ряд - 2 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {smallTabletRow1.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Второй ряд - 2 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {smallTabletRow2.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Третий ряд - 2 карточки */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px] mb-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {smallTabletRow3.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
          
          {/* Четвертый ряд - 1 карточка */}
          <motion.div 
            className="flex flex-wrap justify-center gap-[44px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {smallTabletRow4.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
          </motion.div>
        </div>

        {/* Мобильная версия - только для очень маленьких экранов */}
        <motion.div 
          className="flex flex-col items-center gap-[44px] sm:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {specializations.map((item, index) => <SpecializationCard key={item.id} item={item} index={index} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default Specializations; 