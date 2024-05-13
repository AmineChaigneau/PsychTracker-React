import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

export const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// Components
import { Button, ButtonIcon, ButtonMT, Checkbox, Dialog, Radio, RangeNumber, RangeSlider, Slider, TextArea, Typography, Select } from './components';

// Hooks
import { useDeadlines, useMouseTracker, useMouseTrackerFixedRate, useWindowDimensions } from './hooks';

// Experimental Components
import { MTcalibration, MTdefault, MTdynamic, MTstatic } from './experimental';

export {
    Button, ButtonIcon, ButtonMT, Checkbox, Dialog, Radio, RangeNumber, RangeSlider, Slider,
    TextArea, Typography, Select, useDeadlines, useMouseTracker, useMouseTrackerFixedRate, useWindowDimensions,
    MTcalibration, MTdefault, MTdynamic, MTstatic
};