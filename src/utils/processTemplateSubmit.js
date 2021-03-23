import { splitStringConvertToArray } from "./split";

export const processTemplateSubmit = (template) => {
  const newTemp = {};

  for (let section in template) {
    if (template.hasOwnProperty(section)) {
      if (typeof template[section] === "object") {
        template[section]?.fields.map((data) => ({
          unique: data.unique === "true" ? true : false,
          options: data.options ? splitStringConvertToArray(data.options) : [],
          required: data.required === "true" ? true : false,
          fieldName: data.fieldName,
          fieldType: data.fieldType,
          fieldTitle: data.fieldTitle,
          placeHolder: data.placeHolder,
        }));
      }

      newTemp[section] = template[section];
    }
  }
  return newTemp;
};
