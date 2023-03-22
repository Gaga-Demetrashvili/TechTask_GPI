/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
  ],
  theme: {
    theme: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
    },
    extend: {
      colors: {
        pinkCustom: "#ed1c7c",
        paleGreen: "#9cd6a5",
        paleBg: "#f1f4ff",
        numBg: "#e9e8ef",
        textColor: "#2b2763",
        paleTextColor: "#9595b6",
        gray: "#1616161A",
        grayLight: "#F4F6FE",
        blue: "#002B7F",
        pink: "#EE2A7B",
        grayCalendar: "#F9F9FE",
        calBorder: "#DEE0E8",
        doctorName: "#292562",
        address: "#9199B4",
        timeBackgroundColor: '#F4F4FE'
      },
      fontSize: {
        7: '14px'
      },
      spacing: {
        1: '2px',
        2: '4px',
        4: '8px',
        8: '16px',
        5: '10px',
        6: '12px',
        9: '18px',
        10: '20px',
        11: '22px',
        12: '24px',
        13: '26px',
        14: '28px',
        16: '32px',
        18: '36px',
        20: '40px',
        21: '42px',
        23: '46px',
        34: '68px',
        36: '72px',
        39: '78px',
        41: '82px',
        47: '94px',
        100: '200px',
        140: '280px',
        150: '300px',
        584: '1168px'
      },
      boxShadow: {
        header: '0px 0px 6px #1616161A',
      },
      borderRadius: {
        4: '8px',
        6: '12px',
        7: '14px'
      }
    },
  },
  plugins: [],
}
