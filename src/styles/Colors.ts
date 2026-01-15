const RED = {
  red50: '#fff1f0',
  red100: '#ffa39e',
  red200: '#ff7875',
  red300: '#ff4d4f',
  red400: '#f5222d',
  red500: '#cf1322',
  red600: '#a8071a',
  red700: '#820c09',
  red800: '#5c1115',
  red900: '#380e09',
} as const

const BLUE = {
  blue50: '#e6f4ff',
  blue100: '#bae0ff',
  blue200: '#91caff',
  blue300: '#69b1ff',
  blue400: '#4096ff',
  blue500: '#1677ff',
  blue600: '#0958d9',
  blue700: '#003eb3',
  blue800: '#002c8c',
  blue900: '#001d66',
} as const

const GRAY = {
  gray50: '#42afc0',
  gray100: '#fafafa',
  gray200: '#f5f5f5',
  gray300: '#f0f0f0',
  gray400: '#d9d9d9',
  gray500: '#bfbfbf',
  gray600: '#8c8c8c',
  gray700: '#595959',
  gray800: '#434343',
  gray900: '#262626',
} as const

const PURPLE = {
  purple50: '#FAF8FD',
  purple100: '#E9E4F8',
  purple200: '#D3CAF1',
  purple300: '#C3B6FC',
  purple400: '#A895E3',
  purple500: '#927ADC',
  purple600: '#7C68BB',
  purple700: '#66559A',
  purple800: '#493D6E',
  purple900: '#343158',
}

const ORANGE = {
  orange50: '#fff7e6',
  orange100: '#ffe7ba',
  orange200: '#ffd591',
  orange300: '#ffc069',
  orange400: '#ffa940',
  orange500: '#fa8c16',
  orange600: '#d46b08',
  orange700: '#ad4e00',
  orange800: '#873800',
  orange900: '#612500',
} as const

const GREEN = {
  green50: '#f6ffed',
  green100: '#d9f7be',
  green200: '#c1e6be',
  green300: '#b7eb8f',
  green400: '#73d13d',
  green500: '#52c41a',
  green600: '#389e0d',
  green700: '#237804',
  green800: '#135200',
  green900: '#092b00',
} as const

const YELLOW = {
  yellow50: '#feffe6',
  yellow100: '#ffffb8',
  yellow200: '#fffb8f',
  yellow300: '#fff566',
  yellow400: '#ffec3d',
  yellow500: '#fadb14',
  yellow600: '#d4b106',
  yellow700: '#ad8b00',
  yellow800: '#876800',
  yellow900: '#614700',
} as const

export type Colors = typeof RED &
  typeof BLUE &
  typeof GRAY &
  typeof PURPLE &
  typeof ORANGE &
  typeof GREEN &
  typeof YELLOW
export const COLORS = {
  text: '#111111',
  secondaryText: '#3D3D3D',
  disabledText: GRAY.gray400,

  white: '#FFF',
  black: '#000',
  red: RED.red500,
  yellow: YELLOW.yellow500,
  blue: BLUE.blue500,
  green: GREEN.green500,

  ...BLUE,
  ...GRAY,
  ...PURPLE,
  ...ORANGE,
  ...GREEN,
  ...YELLOW,
}

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
  },
} as const

export type ColorMode = (typeof COLORS_MODE)[keyof typeof COLORS_MODE]
