const getObjDeepProp = (obj, props) => {
  if ((!obj || typeof obj !== 'object') && (props && typeof props !== 'string')) {
    return false;
  }

  const propsArr = props.split('.');
  let rootObj = obj;

  propsArr.forEach((prop) => {
    if (rootObj[prop]) {
      rootObj = rootObj[prop];
    } else {
      rootObj = false;
    }
  });
  return rootObj;
};

export default getObjDeepProp;