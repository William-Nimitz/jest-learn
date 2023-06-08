const {sum, fetchData} = require('../controllers/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});


test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3); // This works.
});

// test('check fetch data', async () => {
//   const data = await fetchData();
//   expect(data).toEqual({"completed": false, "id": 1, "title": "delectus aut autem", "userId": 1});
// });

// test('check fetch data', () => {
//   return fetchData().then(data => {
//     expect(data).toEqual({"completed": false, "id": 1, "title": "delectus aut autem", "userId": 1}
//     );
//   });
// });

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e.message).toMatch('error');
  }
});

// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));

// test('', () => console.log('1 - test'));

// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });