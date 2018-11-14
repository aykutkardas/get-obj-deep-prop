const getObjDeepProp = (obj, props, defaultValue) => {
  if (!obj) return false;
  if (typeof obj !== "object") return false;
  if (!props) return obj;
  if (typeof props !== "string") return false;

  const propsArr = props.split(".");
  let rootObj = obj;

  propsArr.forEach(prop => {
    if (rootObj[prop]) rootObj = rootObj[prop];
    else rootObj = false;
  });

  return rootObj ? rootObj : defaultValue ? defaultValue : false;
};

export default getObjDeepProp;
