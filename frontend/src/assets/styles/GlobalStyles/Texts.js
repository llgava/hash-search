import { createGlobalStyle } from 'styled-components';

// Elements
import Colors from '../Colors.json';
import Gilroy from '../../fonts/Gilroy.otf';
import OpenSans from '../../fonts/OpenSans.ttf';

export const Texts = createGlobalStyle`
  @font-face { font-family: 'Gilroy'; src: url(${Gilroy}); }
  @font-face { font-family: 'OpenSans'; src: url(${OpenSans}); }

  a { text-decoration: none }
  h1 { font-size: 40px; }
  h1, h2, h3, h4, h5, h6, li, button  { font-family: 'Gilroy', sans-serif; }
  p, h1, h2, h3, h4, h5, h6, a, span { color: ${Colors.dark_grey}; }
  p, span { font-family: 'OpenSans', sans-serif; }
  p, span, button, input { font-size: 20px; }
`;
