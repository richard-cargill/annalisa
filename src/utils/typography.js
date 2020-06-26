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
const playfairDisplayFontStack = ['Playfair Display', 'serif']
const ptMonoFontStack = ['PT Mono', 'monospace']
const karlaFontStack = ['Karla', 'sans-serif']

const georgiaFontStack = ['Georgia', 'Times', 'Times New Roman', 'serif']

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.5,
  headerFontFamily: playfairDisplayFontStack,
  headerWeight: '700',
  scaleRatio: 1.3,
  bodyFontFamily: karlaFontStack,
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['500', '700'],
    },
    {
      name: 'Playfair+Display',
      styles: ['700', '900'],
    },
    {
      name: 'PT+Mono',
      styles: ['400'],
    },
    {
      name: 'Karla',
      styles: ['400', '700'],
    },
  ],
})

export default typography
