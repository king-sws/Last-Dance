export const NAV_ITEMS = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: "Propely", link: '#propely'},
  { label: 'Sellora', link: '#sellora' },
  { label: 'Blutto', link: '#blutto' },
  { label: 'Work', link: '#work' },
  { label: 'Reviews', link: '#reviews' },
  { label: 'Contact', link: '#contact', className: 'md:hidden' }
];

export const SCROLL_CONFIG = {
  THRESHOLD: 50,
  THROTTLE_TIME: 100
};

export const BREAKPOINTS = {
  DESKTOP: 768
};

export const throttle = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    fn(...args);
  };
};

export const CORE_SKILLS = [
  { 
    name: 'Problem Solving', 
    icon: "FiTool",
    description: 'Advanced debugging methodologies for complex system challenges.'
  },
  { 
    name: 'API Architecture', 
    icon: "FiServer",
    description: 'REST & GraphQL APIs with secure JWT authentication layers.'
  },
  { 
    name: 'UI Engineering', 
    icon: "FiCode",
    description: 'Precision implementations focusing on architectural integrity.'
  },
  { 
    name: 'Performance', 
    icon: "FiZap" ,
    description: 'Critical render path optimization and bundle efficiency.'
  }
] as const;