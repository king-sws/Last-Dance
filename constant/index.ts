// constants/index.ts
export const NAV_ITEMS = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
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
  
  export const TRANSITION_CLASSES = 'transition-all duration-300 ease-out';

export const throttle = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall < delay) return;
      lastCall = now;
      fn(...args);
    };
  };

export interface NavbarProps {
    navOpen: boolean;
    onLinkClick: () => void;
  }
  
  export interface NavItemProps {
    label: string;
    link: string;
    className?: string;
    isActive: boolean;
    onClick: (e: React.MouseEvent, link: string) => void;
  }

  export const CORE_SKILLS = [
    { 
      name: 'Problem Solving', 
      icon: "FiTool",
      description: 'Advanced debugging methodologies for complex system challenges'
    },
    { 
      name: 'API Architecture', 
      icon: "FiServer",
      description: 'REST & GraphQL APIs with JWT auth and rate limiting'
    },
    { 
      name: 'UI Engineering', 
      icon: "FiCode",
      description: 'Pixel-perfect implementations with WCAG 2.1 compliance'
    },
    { 
      name: 'Performance', 
      icon: "FiZap" ,
      description: 'Lighthouse optimizations & critical render path improvements'
    },
    { 
      name: 'DevOps', 
      icon: "FiDatabase",
      description: 'CI/CD pipelines with Docker & Kubernetes orchestration'
    },
    { 
      name: 'Code Quality', 
      icon: "FiCode",
      description: 'TypeScript integration & comprehensive test coverage'
    }
  ] as const;