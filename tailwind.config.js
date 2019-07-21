module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'body': ['Montserrat', '-apple-system, BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Arial'],
          'heading': ['Abril Fatface', 'Cambria', 'Times New Roman', 'Times', 'serif']
        },
        fontSize: {
          '8xl': '6rem',
          '10xl': '8rem',
          '12xl': '10rem',
          '14xl': '12rem',
          '15xl': '14rem',
          '16xl': '16rem'
        },
        colors: {
          cyan: {
            lite: '#00FFCC'
        },
          'custom-gray': '#686868',
      },
      opacity: {
        '10': '0.1'
      },
      borderWidth: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px'
      },
    }
  },
  variants: {
    height:['responsive']
  },
  plugins: []
}