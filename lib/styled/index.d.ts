/// <reference types="react" />
/// <reference types="@emotion/core" />
import * as styledComponents from 'styled-components';
import { GlobalTheme } from "../theme/types";
declare const styled: styledComponents.ThemedStyledInterface<GlobalTheme>, css: styledComponents.ThemedCssFunction<GlobalTheme>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, GlobalTheme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, GlobalTheme>>[]) => styledComponents.GlobalStyleComponent<P, GlobalTheme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: styledComponents.BaseThemeProviderComponent<GlobalTheme, GlobalTheme>, ThemeConsumer: import("react").Consumer<GlobalTheme>, ThemeContext: import("react").Context<GlobalTheme>, ServerStyleSheet: typeof styledComponents.ServerStyleSheet;
export { styled, css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer, ThemeContext, ServerStyleSheet };
