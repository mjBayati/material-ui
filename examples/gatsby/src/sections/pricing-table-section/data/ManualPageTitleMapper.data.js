const mapping = {
  'BLUESTACKS VPS': 'ANDROID VPS',
};

export const getPageTitle = (dynamicTitle) => {
  return !!mapping[dynamicTitle] ? mapping[dynamicTitle] : dynamicTitle;
};
