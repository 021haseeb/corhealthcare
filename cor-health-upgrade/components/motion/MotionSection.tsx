'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

export default function MotionSection({
  children,
  className,
  initial,
  whileInView,
  viewport,
  transition,
}: {
  children: ReactNode;
  className?: string;
  initial?: MotionProps['initial'];
  whileInView?: MotionProps['whileInView'];
  viewport?: MotionProps['viewport'];
  transition?: MotionProps['transition'];
}) {
  return (
    <motion.section
      className={className}
      initial={initial ?? { opacity: 0, y: 14 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true, amount: 0.25 }}
      transition={transition ?? { duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

