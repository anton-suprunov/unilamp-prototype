import { indexOf, without } from 'lodash';

const toggleArray = (collection, item) => {
  const index = indexOf(collection, item);
  if (index !== -1) {
    return without(collection, item);
  }
  return [...collection, item];
}

export { toggleArray }