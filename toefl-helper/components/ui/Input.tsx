import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    const baseStyles = 'px-4 py-3 rounded-2xl bg-[var(--warm-cream)] border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const normalStyles = 'border-transparent focus:border-[var(--soft-peach)] focus:ring-[var(--soft-peach)]';
    const errorStyles = 'border-red-300 focus:border-red-500 focus:ring-red-500';
    const widthStyle = fullWidth ? 'w-full' : '';

    const combinedClassName = `${baseStyles} ${error ? errorStyles : normalStyles} ${widthStyle} ${className}`;

    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--text-primary)]"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={combinedClassName}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500">{error}</span>
        )}
        {helperText && !error && (
          <span className="text-sm text-[var(--text-secondary)]">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
