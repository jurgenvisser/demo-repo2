module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    colors:{
      'white' : '#FFFFFF',
      'gray' : '#B6B7BB',
      'orange' : '#DB5F42',
      'red' : '#AE231C',
      'body' : '#15161E',
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    screens: {
      'tablet' : '640px',
      // => @media (min-width: 640px) { ... }
      'laptop' : '1024px',
      // => @madia (min-width: 1024px) { ... }
      'desktop' : '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      '35' : ['35px', '43px'],
      '50' : ['50px', '61px'],
      '45' : ['45px', '55px'],
      '25' : ['25px', '30px'],
    },
    backgroundImage: {
      'traficlight' : "url('../src/img/greenlight.png')",
      'woman' : "url('../src/img/girl.png')",
      'skull' : "url('../src/img/skull.png')",
    },
    extend: {
    },
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css --watch
