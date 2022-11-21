import React from 'react';
import * as numberOfStepsToReduceANumberToZero from './number_of_steps_to_reduce_a_number_to_zero';

export function ReturnsCorrectValue() {
  return <div>{numberOfStepsToReduceANumberToZero.v1(100).toString()}</div>;
}
