import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex w-full rounded-xl border border-iron-200 bg-white px-4 py-3 text-iron-900 outline-none transition placeholder:text-iron-400 focus:border-forge-500 focus:ring-2 focus:ring-forge-100 dark:border-iron-800 dark:bg-iron-950/60 dark:text-iron-100 dark:placeholder:text-iron-600 dark:focus:border-forge-500 dark:focus:ring-forge-900/40',
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = 'Input';

export { Input };
