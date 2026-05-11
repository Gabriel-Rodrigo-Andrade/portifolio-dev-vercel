
import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "" }) => {
  const iconMap: Record<string, string> = {
    'php': 'php/php-original.svg',
    'laravel': 'laravel/laravel-plain.svg',
    'wordpress': 'wordpress/wordpress-plain.svg',
    'vue': 'vuejs/vuejs-original.svg',
    'javascript': 'javascript/javascript-original.svg',
    'scss': 'sass/sass-original.svg',
    'mysql': 'mysql/mysql-original.svg',
    'docker': 'docker/docker-original.svg',
    'linux': 'linux/linux-original.svg',
    'git': 'git/git-original.svg',
  };

  const iconPath = iconMap[name.toLowerCase()] || iconMap[name] || '';

  if (!iconPath) {
    return null;
  }

  return (
    <img 
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`} 
      alt={`${name} icon`}
      className={`w-4 h-4 object-contain filter grayscale brightness-200 contrast-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${className}`}
      aria-hidden="true"
      referrerPolicy="no-referrer"
    />
  );
};
