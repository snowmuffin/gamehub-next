export const filterMenuItems = (menuItems: any[], inputValue: string) => {
  const filteredItems: any[] = [];
  const searchValue = inputValue.toLowerCase();

  menuItems.forEach((mainLevel: { children: any[] }) => {
    if (mainLevel.children) {
      mainLevel.children.forEach((subLevel: any) => {
        filteredItems.push(subLevel);
        if (subLevel.children) {
          subLevel.children.forEach((subLevel1: any) => {
            filteredItems.push(subLevel1);
            if (subLevel1.children) {
              subLevel1.children.forEach((subLevel2: any) => {
                filteredItems.push(subLevel2);
              });
            }
          });
        }
      });
    }
  });

  const results = filteredItems.filter(item => item.title.toLowerCase().includes(searchValue));

  const uniqueResults = results.filter(
    (item, index, self) => item.path && self.findIndex(el => el.title === item.title) === index
  );

  return {
    filteredItems: uniqueResults,
    hasResults: uniqueResults.length > 0
  };
};
