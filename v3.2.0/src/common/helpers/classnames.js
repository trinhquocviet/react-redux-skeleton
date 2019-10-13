const classNames = (values) => {
  if (Array.isArray(values)) {
    return values
    .join(' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/(^\s{1,})|(\s{1,}$)/g, '');
  }
}

export default classNames;