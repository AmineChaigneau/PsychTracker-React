import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useMouseTracker } from '../src/hooks';

test('useMouseTracker should return the correct properties', () => {
  const { result } = renderHook(() => useMouseTracker());

  // Check that all expected keys exist and are of the correct type
  expect(result.current).toHaveProperty('mouseData');
  expect(result.current).toHaveProperty('startTracking');
  expect(result.current).toHaveProperty('stopTracking');
  expect(result.current).toHaveProperty('lastTimestamp');

  // Verify the types of the values
  expect(Array.isArray(result.current.mouseData)).toBe(true); // `mouseData` should be an array
  expect(typeof result.current.startTracking).toBe('function'); // `startTracking` should be a function
  expect(typeof result.current.stopTracking).toBe('function'); // `stopTracking` should be a function
  expect(result.current.lastTimestamp).toBeNull(); // `lastTimestamp` should initially be null
});