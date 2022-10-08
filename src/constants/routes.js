import Home from '../pages/Home';
import BurgerBuilder from '../pages/BurgerBuilder';
import * as urls from './app-urls';

export default [
  {
    label: 'HOME PAGE',
    path: urls.HOME,
    Element: Home,
  },
  {
    label: 'BURGER BUILDER PAGE',
    path: urls.BURGER,
    Element: BurgerBuilder,
  },
];
