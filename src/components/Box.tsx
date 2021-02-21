import {
  background,
  BackgroundProps,
  border,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import styled from '@emotion/styled';

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    FlexboxProps,
    BackgroundProps,
    PositionProps,
    ShadowProps {}

const boxStyles = compose(space, color, typography, layout, flexbox, background, border, position, shadow);

export const Box = styled.div<BoxProps>(boxStyles);
