/**
 * flatten a deep object into a one level object with it’s path as key
 * @param  {object} object - The object to be flattened
 * @return {object}        - The resulting flat object
 */
export const flatten = (obj, prefix = '') => {
  const result = Object.keys(obj).reduce((prevResult, el) => {
    const pre = prefix.length ? `${prefix}.` : '';

    if (typeof obj[el] === 'object') {
      Object.assign(prevResult, flatten(obj[el], `${pre}${el}`));
    } else {
      prevResult[`${pre}${el}`] = obj[el];
    }

    return prevResult;
  }, {});
  return result;
}