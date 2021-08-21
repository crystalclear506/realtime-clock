import { expect, test } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';
import RealTimeClock from '../src/Components/realtime-clock';

jest.useFakeTimers();

test('Component should be rendered correctly', () => {
    const testRenderer = renderer.create(
        <RealTimeClock/>
    );
    
    expect(testRenderer).toMatchSnapshot();
});