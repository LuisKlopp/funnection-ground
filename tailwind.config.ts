import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      perspective: {
        none: "none",
        1000: "1000px",
      },
      zIndex: {
        "5": "5",
      },
      backgroundImage: {
        "complex-gradient":
          "linear-gradient(to right, #000000 1%, #920028 100%)",
      },
      fontFamily: {
        lineseed: ["lineSeed", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      screens: {
        sm: "576px",
        smd: "604px",
        md: "768px",
        mdl: "834px",
        mdlg: "",
        lg: "1024px",
        lgx: "1280px",
        xl: "1441px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
        base: "18px",
        lg: "24px",
        xl: "36px",
      },
      fontWeight: {
        light: "300",
        medium: "500",
      },
      height: {
        "15": "60px",
      },
      maxWidth: {
        "2xl": "1441px",
      },
      padding: {
        "15": "60px",
      },
      colors: {
        gray01: "#f9f9f7",
        gray02: "#f1f0ee",
        gray03: "#e2e0dc",
        gray04: "#c9c7c3",
        gray05: "#a7a5a0",
        gray06: "#8c8984",
        gray07: "#706d68",
        gray08: "#57534e",
        gray09: "#3b3936",
        gray10: "#22211f",
        mainGold: "#D9AB82",
        subGold: "#A0876A",
        accentApricot: "#f6c89f",
        accentRose: "#d9a5b3",
        accentOrange: "#ffd8b1",
        accentBlue: "#a0b3c2",
        accentSage: "#cfd2c1",
        accentBeige: "#b9b5a9",
        pageBackground: "#E7E0DB",
        pageTitle: "#3B2F2F",
        pageText: "#5E504C",
        pageSubText: "#857872",
        pageWhiteText: "#f9f7f6",
        pageDisabledButton: "#a29595",
        pageDisabled: "#a5a29e",
        pageRose: "#BFA5A0",
        thickPurple: "#5c3a62",
        lightPurple: "#c9bdcb",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "grow-rotate": {
          "0%": {
            transform: "scale(0) rotate(-15deg)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1) rotate(-15deg)",
            opacity: "1",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "grow-rotate": "grow-rotate 0.2s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;

export default config;
