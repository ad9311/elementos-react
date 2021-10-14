import groupByCategory from '../utils/groupByCategory';
import elements from './elements.json';

describe('Group by Group Block', () => {
  test('Hydrogen', () => {
    const hydrogen = elements[0];
    const group = groupByCategory('groupBlock', hydrogen, elements);
    expect(group.group.list.length).toEqual(6);
  });

  test('Magnesium', () => {
    const magnesium = elements[11];
    const group = groupByCategory('groupBlock', magnesium, elements);
    expect(group.group.list.length).toEqual(5);
  });
});

describe('Group by Standard State', () => {
  test('Helium', () => {
    const hydrogen = elements[1];
    const group = groupByCategory('standardState', hydrogen, elements);
    expect(group.group.list[0].standardState).toEqual('gas');
  });

  test('Chlorine', () => {
    const magnesium = elements[18];
    const group = groupByCategory('standardState', magnesium, elements);
    expect(group.group.list[0].standardState).toEqual('solid');
  });
});
