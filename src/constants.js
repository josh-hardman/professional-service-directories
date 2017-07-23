export const colors = {
  red: '#DD5143',
  blue: '#0077B5',
  gray: '#999',
  lightGray: '#F3F1F1',
  highlightGray: '#f7f7f7',
  highlightBlue: '#00A0DC',
  white: '#fff',
  shadow: 'rgba(137, 137, 137, .5)',
  textDefault: '#222',
  textDark: '#414042',
  textMedium: '#666',
  textLight: '#999',
  placeholderText: '#a6a6a6'
}

export const fontSize = size => `font-size: ${(size/16).toFixed(5)}rem;`

export const breakpoints = {
  _500: '31.25em',
  _600: '37.5em',
  _767: '47.9375em',
  _768: '48em',
  _850: '53.125em',
  _960: '60em'
}

export const displayFlex = () => `
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
`
