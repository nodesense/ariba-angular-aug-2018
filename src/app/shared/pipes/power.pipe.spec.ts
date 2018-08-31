import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('default params test ', () => {
    const pipe = new PowerPipe();
     expect(pipe.transform(2)).toBe(2);
     expect(pipe.transform(3, 2)).toBe(9);
  });
});
