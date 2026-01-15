export const COLORS_MODE = {
  light: {
    background: '#F5F5F5',
    cardBackground: '#ECECEC',
    formCardBackground: '#FFFFFF',
    text: '#111111',
    textSecondary: '#3D3D3D',
    buttonBackground: '#111111',
    buttonText: '#FFFFFF',
    inputBackground: '#ECECEC',
    placeholderText: '#888888',
    gradientStart: '#D4B3FF',
    gradientEnd: '#FF8C00',
  },
  dark: {
    background: '#111111',
    cardBackground: '#1F1F1F',
    formCardBackground: '#1A1A1A',
    text: '#FFFFFF',
    textSecondary: '#BBBBBB',
    buttonBackground: '#FFFFFF',
    buttonText: '#111111',
    inputBackground: '#2A2A2A',
    placeholderText: '#666666',
    gradientStart: '#D4B3FF',
    gradientEnd: '#FF8C00',
  },
} as const

export type ColorMode = (typeof COLORS_MODE)[keyof typeof COLORS_MODE]

export const COLORS = {
  text: '#111111',
  textSecondary: '#3D3D3D',

  red: '#FF4D4F',
  yellow: '#FFA500',
  white: '#FFF',
  blue: '#1677FF',
  green: '#3ec77e',
  black: '#000',

  // 파랑
  b50: '#EAF9FA',
  b100: '#C1EEF0',
  b200: '#98E3E6',
  b300: '#6FD8DC',
  b400: '#46CDD2',
  b500: '#2DB3B9',
  b600: '#238C90',
  b700: '#196467',
  b800: '#134B4D',
  b900: '#0F3C3E',

  // 회색
  g20: '#FAFAFA',
  g50: '#F9F9F9',
  g100: '#F4F4F4',
  g200: '#E3E3E3',
  g300: '#C7C7C7',
  g400: '#8F8F8F',
  g500: '#737373',
  g600: '#5C5C5C',
  g700: '#404040',
  g800: '#272727',
  g900: '#181818',

  //보라
  p50: '#FAF8FD',
  p100: '#E9E4F8',
  p200: '#D3CAF1',
  p300: '#C3B6FC',
  p400: '#A895E3',
  p500: '#927ADC',
  p600: '#7C68BB',
  p700: '#66559A',
  p800: '#493D6E',
  p900: '#343158',

  // 오렌지
  o50: '#FFF5E6',
  o100: '#FFE6CC',
  o200: '#FFD4A3',
  o300: '#FFC27A',
  o400: '#FFB051',
  o500: '#46E3B0',
  o600: '#38B68D',
  o700: '#2A896A',
  o800: '#1C5C47',
  o900: '#0E2F24',
}
