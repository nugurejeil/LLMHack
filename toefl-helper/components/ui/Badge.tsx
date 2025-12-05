import React from 'react';

export type BadgeVariant = 'success' | 'warning' | 'info' | 'default';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';

  const variantStyles = {
    success: 'bg-[var(--mint-green)] text-white',
    warning: 'bg-[var(--butter-yellow)] text-[var(--text-primary)]',
    info: 'bg-[var(--strawberry-pink)] text-white',
    default: 'bg-[var(--soft-peach)] text-[var(--text-primary)]',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
};

export default Badge;
