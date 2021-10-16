import "styled-components";

// DefaultTheme comes empty from styled-components.
// We can merge our own DefaultTheme interface into it
// to get type completion in all props.theme calls.
declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    screenWidth: ScreenWidth;
  }
}

// Still export our own Theme interface so we can
// type check on Theme creation in Theme.tsx.
export default interface ITheme {
  colors: Colors;
  screenWidth: ScreenWidth;
}

interface Colors {
  primary: string;
  lightGray: string;
  textPrimary: string;
  error: string;
}

interface ScreenWidth {
  minSmall: string;
  minMedium: string;
  minLarge: string;
  maxSmall: string;
  maxMedium: string;
  maxLarge: string;
}
