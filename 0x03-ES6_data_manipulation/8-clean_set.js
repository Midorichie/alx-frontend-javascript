export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  // Remove the trailing dash if result is not empty
  if (result) {
    result = result.slice(0, -1);
  }

  return result;
}
