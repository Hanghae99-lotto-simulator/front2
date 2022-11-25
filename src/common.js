export const hash = (obj) => {
  let hash_value = null;
  if (typeof obj === "object") {
    if (Array.isArray(obj)) {
      hash_value = "";
      obj.forEach((elem) => {
        hash_value += hash(elem);
      });
    } else {
      hash_value = JSON.stringify(obj.valueOf());
    }
  } else if (typeof obj === "function") {
    hash_value = obj.toLocaleString();
  } else {
    hash_value = obj.toString();
  }
  return hash_value;
};
