import React from 'react';
import { evolutionChain } from './evolution_chain';

export function ReturnsCorrectValue() {
  return <div>{evolutionChain()}</div>;
}
