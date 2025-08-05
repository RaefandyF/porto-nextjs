'use client';

import useInView from '@/app/hook/useInView';
import clsx from 'clsx';
import { Ref } from 'react';

export default function InViewWrapper({
  children,
  threshold = 0.1,
  delay = '',
  baseClass = '',
  activeClass = '',
  inactiveClass = '',
}: {
  children: React.ReactNode;
  threshold?: number;
  delay?: string;
  baseClass?: string;
  activeClass?: string;
  inactiveClass?: string;
}) {
  const [ref, isInView] = useInView();

  const combinedClass = clsx(
    baseClass,
    isInView
      ? `${activeClass} ${delay}`
      : inactiveClass
  );

  return (
    <div ref={ref as Ref<HTMLDivElement>} className={combinedClass}>
      {children}
    </div>
  );
}
