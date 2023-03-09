import pagination from '../index';

describe('Testing pagination', () => {
  it('Should has only one page', () => {
    expect(pagination()).toEqual(['1']);
  });

  it('Should render "..." in both sides', () => {
    expect(
      pagination({
        current: 5,
        end: 10,
        sides: 1,
      }),
    ).toEqual(['1', '...', '4', '5', '6', '...', '10']);
  });

  it('Should render "..." only at the right side', () => {
    expect(
      pagination({
        current: 5,
        end: 10,
        sides: 2,
      }),
    ).toEqual(['1', '2', '3', '4', '5', '6', '7', '...', '10']);
  });

  it('Should render "..." only at the left side', () => {
    expect(
      pagination({
        current: 6,
        end: 10,
        sides: 2,
      }),
    ).toEqual(['1', '...', '4', '5', '6', '7', '8', '9', '10']);
  });

  it('Should render as if current is at the first page', () => {
    expect(pagination({ current: -1, sides: 1, end: 10 })).toEqual(['1', '2', '...', '10']);
  });

  it('Should render as if current is at the last page', () => {
    expect(pagination({ current: 12, sides: 1, end: 10 })).toEqual(['1', '...', '9', '10']);
  });

  it('Should show no sides', () => {
    expect(
      pagination({
        current: 5,
        end: 10,
        sides: 0,
      }),
    ).toEqual(['1', '...', '5', '...', '10']);
  });

  it('Should show one page to the left and two to the right', () => {
    expect(
      pagination({
        current: 5,
        end: 10,
        sides: { left: 1, right: 2 },
      }),
    ).toEqual(['1', '...', '4', '5', '6', '7', '...', '10']);
  });

  it('Should render different skip string for each side', () => {
    expect(
      pagination({
        current: 5,
        end: 10,
        sides: 0,
        skipString: { left: '<<', right: '>>' },
      }),
    ).toEqual(['1', '<<', '5', '>>', '10']);
  });
});
