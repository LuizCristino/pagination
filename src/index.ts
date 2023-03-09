export interface Options {
  /** First number to render */
  start: number;

  /** Last number to render */
  end: number;

  /** Current number */
  current: number;

  /** Number of items before generating the skip string between numbers */
  sides: number | { left?: number; right?: number };

  /** The skip string to be rendered */
  skipString: string | { left?: string; right?: string };
}

const defaultOptions = {
  start: 1,
  end: 1,
  current: 1,
  sides: 1,
  skipString: '...',
} as const;

export default function generatePagination(
  options: Partial<Options> | undefined = undefined,
): string[] {
  const { current, end, sides, start, skipString } = {
    ...defaultOptions,
    ...(options || {}),
  };

  const pagination = [];

  const _current = current < start ? start : current > end ? end : current;
  const leftSide = typeof sides === 'number' ? sides : sides.left ?? defaultOptions.sides;
  const rightSide = typeof sides === 'number' ? sides : sides.right ?? defaultOptions.sides;

  const leftSkipStr =
    typeof skipString === 'string' ? skipString : skipString.left ?? defaultOptions.skipString;
  const rightSkipStr =
    typeof skipString === 'string' ? skipString : skipString.right ?? defaultOptions.skipString;

  if (start <= end) {
    pagination.push('' + _current);

    for (let prev = _current - 1; _current - prev <= leftSide; prev--) {
      if (prev > start) pagination.unshift('' + prev);
    }

    for (let next = _current + 1; next - _current <= rightSide; next++) {
      if (next < end) pagination.push('' + next);
    }

    if (+pagination[0] - start === 1) {
      pagination.unshift('' + start);
    } else if (leftSide > 1 && +pagination[0] - start === 2) {
      pagination.unshift('' + start, '' + (start + 1));
    } else if (+pagination[0] - start >= leftSide) {
      pagination.unshift('' + start, leftSkipStr);
    }

    if (end - +pagination[pagination.length - 1] === 1) {
      pagination.push('' + end);
    } else if (rightSide > 1 && end - +pagination[pagination.length - 1] === 2) {
      pagination.push('' + (end - 1), '' + end);
    } else if (end - +pagination[pagination.length - 1] >= rightSide) {
      pagination.push(rightSkipStr, '' + end);
    }
  }

  return pagination;
}
