export default function cleanSet(set, startString) {
  const values = [];
  if (startString && typeof startString === 'string') {
    for (const value of set) {
      if (value.startsWith(startString) && value !== startString) {
        values.push(value.substr(startString.length));
      }
    }
  }
  return values.join('-');
}
