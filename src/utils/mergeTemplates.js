export const mergeTemplates = (template) => {
  const newTemp = [];

  for (let section in template) {
    if (template.hasOwnProperty(section)) {
      if (typeof template[section] === "object")
        newTemp.push(template[section]);
    }
  }
  return newTemp.sort((a, b) => a.sectionId - b.sectionId);
};
