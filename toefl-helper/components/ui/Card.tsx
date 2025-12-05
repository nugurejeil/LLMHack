import React from 'react';
import { motion } from 'framer-motion';

export type CardVariant = 'cream' | 'peach' | 'white';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  variant = 'cream',
  size = 'md',
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  const baseStyles = 'rounded-3xl transition-all duration-200';

  const variantStyles = {
    cream: 'bg-[var(--warm-cream)] shadow-[var(--shadow-soft)]',
    peach: 'bg-[var(--soft-peach)] shadow-[var(--shadow-card)]',
    white: 'bg-white shadow-[var(--shadow-card)]',
  };

  const sizeStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hoverable ? 'cursor-pointer hover:shadow-[var(--shadow-card)] hover:-translate-y-1' : '';
  const clickableStyles = onClick ? 'cursor-pointer' : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${hoverStyles} ${clickableStyles} ${className}`;

  const CardWrapper = hoverable || onClick ? motion.div : 'div';

  const motionProps = hoverable || onClick
    ? {
        whileHover: { y: -4, transition: { duration: 0.2 } },
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <CardWrapper
      className={combinedClassName}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
