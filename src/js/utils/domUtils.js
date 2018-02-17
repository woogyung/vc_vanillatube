function findClosestParentWithClass (el, parentClass) {
  var currentParent = el.parentElement;

  while (currentParent) {
    if (currentParent.classList.contains(parentClass)) {
      return currentParent;
    } else {
      currentParent = currentParent.parentElement;
    }
  }

  return null;
}

export {
  findClosestParentWithClass
};
