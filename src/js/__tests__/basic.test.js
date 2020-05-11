import orderByProps from '../basic';

test('sorted', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = ['name', 'level'];
  const result = orderByProps(obj, sort);
  const exp = {
    name: 'мечник', level: 2, attack: 80, defence: 40, health: 10,
  };
  expect(Object.keys(result)).toStrictEqual(Object.keys(exp));
});

test('sorted with one not existing element', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = ['name', '11111'];
  const result = orderByProps(obj, sort);
  const exp = {
    name: 'мечник', attack: 80, defence: 40, health: 10, level: 2,
  };
  expect(Object.keys(result)).toStrictEqual(Object.keys(exp));
});


test('sorted with both not existing element', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = ['2222', '11111'];
  const result = orderByProps(obj, sort);
  const exp = {
    attack: 80, defence: 40, health: 10, level: 2, name: 'мечник',
  };
  expect(Object.keys(result)).toStrictEqual(Object.keys(exp));
});
