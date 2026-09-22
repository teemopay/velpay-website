import * as motion from "motion/react-client";
import { ReactNode } from "react";
interface FadeUpScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ transformOrigin: "bottom center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeText = ({ children, className = "" }: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, translateY: 40 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInIcon = ({ children }: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const FadeUPText = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeUPScroll = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeUPScrollgroup = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeUPScrollXgroup = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ZoomIn = ({
  children,
  className = "",
  delay = 0,
}: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
