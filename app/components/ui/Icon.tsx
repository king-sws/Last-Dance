// components/ui/Icon.tsx
"use client"
import { FiCode, FiServer, FiTool, FiUser, FiZap, FiDatabase } from 'react-icons/fi';
import { ComponentType, memo } from 'react';

const icons = {
  FiCode,
  FiServer,
  FiTool,
  FiUser,
  FiZap,
  FiDatabase
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const IconComponent = icons[name] as ComponentType<{ className?: string }>;
  return <IconComponent className={className} />;
};

export default memo(Icon);