export const splitStringConvertToArray = (string) => {
  if (typeof string !== "string") return;
  let newString = string.replace(/\s/g, "");
  return newString.split(",");
};
