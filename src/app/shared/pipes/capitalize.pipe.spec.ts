import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('Should return capitalized only the first character the letter of the string', () => {
    const expected = 'Test';
    expect(pipe.transform(expected.toLowerCase())).toEqual(expected);
  });
});
