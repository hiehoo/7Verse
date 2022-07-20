import styled, { CreateStyled } from '@emotion/styled';

import { colors } from './colors';
import { device } from './device';

type Theme = {
  colors: typeof colors
  device: typeof device
}

export const theme = {
  colors,
  device,
};

export default styled as CreateStyled<Theme>
