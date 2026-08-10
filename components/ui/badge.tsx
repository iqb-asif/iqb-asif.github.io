import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors';
    
    const variantStyles: Record<string, string> = {
      default: 'bg-slate-900 text-slate-100 hover:bg-slate-800',
      secondary: 'bg-slate-700 text-slate-200 hover:bg-slate-600',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      outline: 'border border-slate-300 text-slate-900 hover:bg-slate-100',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
