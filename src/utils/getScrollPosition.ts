
interface ScrollPosition {
  top: number;
  left: number;
}

// Unit Tests for this function can be found in `getRelativePosition.spec.ts`
function getScroll(w: Window, isTop: boolean): number {
  let value = w[`page${isTop ? 'Y' : 'X'}Offset`];
  const method = `scroll${isTop ? 'Top' : 'Left'}`;
  if (typeof value !== 'number') {
    const d = w.document;
    value = d.documentElement[method];
    if (typeof value !== 'number') {
      value = d.body[method];
    }
  }
  return value;
}

export function getScrollPosition(e: HTMLElement): ScrollPosition {
  let w;

  if (e.ownerDocument) {
    w = e.ownerDocument.defaultView;
  } else {
    w = window;
  }

  const top = getScroll(w, true);
  const left = getScroll(w, false);

  return {
    top,
    left
  };
}
