import { Variants } from 'framer-motion';

// Базовые варианты анимации для fadeIn
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Варианты появления слева
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Варианты появления справа
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Варианты появления снизу
export const fadeInBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Варианты появления с масштабированием
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Анимация заголовков
export const titleAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Анимация карточек
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

// Анимация для группы элементов - стаггер
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Анимация кнопок
export const buttonAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.3
    }
  },
  tap: { 
    scale: 0.95
  }
};

// Анимация элементов списка
export const listItemAnimation: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

// Анимация изображений
export const imageAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}; 