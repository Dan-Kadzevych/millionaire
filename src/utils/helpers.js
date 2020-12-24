function sortByOrder(a, b) {
  return Number(a.orderPosition) - Number(b.orderPosition);
}

function areArraysEqual(a, b) {
  return [...a].sort().join('') === [...b].sort().join('');
}

export { sortByOrder, areArraysEqual };
