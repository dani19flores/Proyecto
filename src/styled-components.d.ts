import 'styled-components';
import { AppTheme } from './ui/themes/theme.types';

declare module 'styled-components' {
    export interface DefaultTheme extends AppTheme { }
}