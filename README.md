# PsychTracker-React

A custom framework-based ReactJS library offering a suite of reusable components and hooks tailored for online experiments and flexible experimental designs.

## Software Development Overview

PsychTracker-React is a custom ReactJS library designed to build online mouse-tracking experimental studies using the React js framework. It provides a set of reusable components and hooks that simplify the implementation of complex experimental designs, including multiplayer and multi-stimuli experiments.

## Library Highlights

This library integrates with the ReactJS framework and supports both dynamic and static procedures. Button sizes follow standardized guidelines and are fully customizable. Our components offer:
- **Flexibility:** Support dynamic and static procedures.
- **Delay Function:** Restart processes if needed.
- **Standardized Buttons:** Based on target area guidelines.

The development of these tools is the foundation for future research.

## Available Exports
```js
export {
  Button, ButtonIcon, ButtonMT, Checkbox, Dialog, Radio, RangeNumber, RangeSlider, Slider,
  TextArea, Typography, Select, useDeadlines, useMouseTracker, useMouseTrackerFixedRate, useWindowDimensions,
  MTcalibration, MTdefault, MTdynamic, MTstatic
};
```
## Insall 

```bash
npm install psychtracker-react
```

## Usage Example

```js
import { Button, useMouseTracker } from 'psychtracker-react';

function App() {
  const [x, y] = useMouseTracker();

  return (
    <div>
      <Button label="Click Me!" onClick={() => alert('Hello!')} />
      <p>Mouse Position: ({x}, {y})</p>
    </div>
  );
}
```
## Components & Hooks

### Components:
- Button
- ButtonIcon
- ButtonMT
- Checkbox
- Dialog
- Radio
- RangeNumber
- RangeSlider
- Slider
- TextArea
- Typography
- Select

### Hooks:
- useDeadlines
- useMouseTracker
- useMouseTrackerFixedRate
- useWindowDimensions

### Experimental MT Components:
- MTcalibration
- MTdefault
- MTdynamic
- MTstatic

## Contribution 

Contributions are welcome! Please open issues and submit pull requests on GitHub.

## Cite

Chaigneau, Amine. (2024). Decoding Movement as Insight into Embodied Decision-Making: Developing a Methodological Toolkit for Investigating Value-Based Choice. University of Rouen; University of Chieti-Pescara.