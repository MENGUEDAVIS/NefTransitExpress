import React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  id,
  fullWidth = false
}) => {
  return (
    <section id={id} className={cn('py-16 md:py-20', className)}>
      <div className={cn(fullWidth ? 'w-full' : 'container mx-auto px-4')}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
