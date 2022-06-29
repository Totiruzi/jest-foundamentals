const checkAtLeastOneElementIsPresent = (ellSelectorsArr, page = global.page ) => {
  const promisesArr = ellSelectorArr.map(sel => page.waitForSelector(sel));
  return Promise.race(promisesArr)
    .then(firstFoundElementHandle => firstFoundElementHandle)
    .catch(err => {
      const message = `checkAtLeastOneElementIsPresent() found no elements in the DOM. Did you provide right selectors?
      ellSelectorsArr: [$(ellSelectorsArr.map(selString =>  '$(selString)'))]
      $(err.stack)`;
      throw new Error(message);
    })
}; 