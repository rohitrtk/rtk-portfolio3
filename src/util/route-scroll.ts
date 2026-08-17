const scrollPositions = new Map<string, number>();
const explicitlySavedEntries = new Set<string>();

export const getRouteScrollPosition = (key: string) => {
  return scrollPositions.get(key);
};

export const saveRouteScrollPosition = (key: string) => {
  scrollPositions.set(key, window.scrollY);
  explicitlySavedEntries.add(key);
};

export const captureRouteScrollPosition = (key: string) => {
  if (explicitlySavedEntries.has(key)) {
    explicitlySavedEntries.delete(key);
    return;
  }

  scrollPositions.set(key, window.scrollY);
};
