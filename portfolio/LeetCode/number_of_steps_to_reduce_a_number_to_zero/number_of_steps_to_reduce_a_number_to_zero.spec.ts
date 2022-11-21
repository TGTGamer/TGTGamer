import * as numberOfStepsToReduceANumberToZero from './number_of_steps_to_reduce_a_number_to_zero';

describe('V1', () => {
  it('100', async () => {
      const param = 100
      const test = numberOfStepsToReduceANumberToZero.v1(param)
      expect(test).toBe(9)
  })
})
