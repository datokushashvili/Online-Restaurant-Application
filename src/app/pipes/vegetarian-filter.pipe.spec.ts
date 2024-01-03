import { vegetarianFilterPipe } from './vegetarian-filter.pipe';

describe('VegetarianFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new vegetarianFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
