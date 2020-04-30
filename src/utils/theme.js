import { Basics } from 'styles';
import darkLoader from 'images/loaderdark.gif';
import colorLoader from 'images/loadercolor.gif';

export const lightTheme = {
  body: Basics.colors.creamWhite,
  logo: Basics.colors.black,
  subtitle: Basics.colors.wood,
  color: Basics.colors.black,
  link: Basics.colors.wood,
  text: '#363537',
  button: Basics.colors.black,
  loader: darkLoader,
};

export const darkTheme = {
  body: Basics.colors.black,
  logo: Basics.colors.citrus,
  subtitle: Basics.colors.citrus,
  color: Basics.colors.nightShift,
  link: Basics.colors.citrus,
  text: '#FAFAFA',
  button: Basics.colors.citrus,
  loader: colorLoader,
};
