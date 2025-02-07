import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'fade-in-out': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'right',  },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left', },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', background: '#fff', opacity: '1' },
        },
        'float-animation':{
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(16px)'},
          },
      },
      animation: {
        'fade-in-out': 'fade-in-out 1s infinite',
        float: 'float-animation 3s ease-in-out infinite',
        slideIn: 'slideIn 1s ease-in-out forwards',
        pulse: 'pulse 2s infinite',
      },
      boxShadow: {
        'center': '0 0 10px ',
      }
      
    },
  },
  plugins: [],
};
export default config;
