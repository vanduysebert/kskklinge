import { BooleanCheckPipe } from './boolean-check.pipe';

describe('BooleanCheckPipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanCheckPipe();
    expect(pipe).toBeTruthy();
  });
});
