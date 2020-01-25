import Typography from 'typography'

const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'sans-serif',
]

const montserratFontStack = ['Montserrat', 'sans-serif']

const georgiaFontStack = ['Georgia', 'Times', 'Times New Roman', 'serif']

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: montserratFontStack,
  headerWeight: '500',
  scaleRatio: 1.3,
  bodyFontFamily: georgiaFontStack,
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['500', '700'],
    },
  ],
})

export default typography
