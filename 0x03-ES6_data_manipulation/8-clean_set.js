/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 */
export default function cleanSet(set, startString) {
  const result = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const cleanedItem = item.substring(startString.length);

      if (cleanedItem && cleanedItem !== item) {
        result.push(cleanedItem);
      }
    }
  }
  return result.join('-');
}
