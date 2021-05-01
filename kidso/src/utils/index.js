import { data } from "../seed";

export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

export const fetchAppDetails = (delay = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

const getPageProps = (routes) => {
  return routes && routes.page;
};

const getFirst = (routes) => {
  return routes[0];
};

const flatRoutesProps = (routes = []) => {
  return routes.map((r) => {
    const keyName = Object.keys(r)[0];
    const route = r[keyName];

    return {
      content: route.content,
      url: route.url,
      title: route.title,
      metaTitle: route.meta.meta_title,
      metaDescription: route.meta.meta_description,
    };
  });
};

export const transformRoutes = compose(flatRoutesProps, getPageProps, getFirst);

function omit(obj, props) {
  return Object.keys(obj)
    .filter((e) => !props.includes(e))
    .reduce((acc, curr) => {
      acc[curr] = obj[curr];
      return acc;
    }, {});
}

export const omitContent = (route) => omit(route, ["content"]);

let memo = {};

export function calculateFib([n, collection = []]) {
  if (n <= 1) return [1, collection];

  if (memo[n]) {
    return [memo[n], collection];
  }

  const [a, colectionA] = calculateFib([n - 1, [0, 1, 1]]);

  const [b, collectionB] = calculateFib([n - 2, []]);

  memo[n] = a + b;

  return [a + b, [...colectionA, ...collectionB, a + b]];
}

const calculateASyncHelper = (fn, ...args) =>
  new Promise((res) => {
    setTimeout(() => {
      res(fn(...args));
    });
  });

const asyncFibonaci = async ([n, collection = []]) => {
  if (n <= 1) {
    return [1, collection];
  }

  if (memo[n]) {
    return [memo[n], collection];
  }

  const [a, colectionA] = await calculateASyncHelper(asyncFibonaci, [
    n - 1,
    [0, 1, 1],
  ]);

  const [b, collectionB] = await calculateASyncHelper(asyncFibonaci, [
    n - 2,
    [],
  ]);

  memo[n] = a + b;

  return [a + b, [...colectionA, ...collectionB, a + b]];
};

export const calculateFibonaci = (n) => {
  memo = {};
  if (n > 5) {
    return asyncFibonaci([n]);
  }

  return calculateASyncHelper(calculateFib, [n]);
};

// export const calculateFibonaci = (n)=>{
//   const fibNumbers = []
//   let result = n
//   console.time('label');

//    for(let i = 1; n >= result; i++){
//       result = fibonacci(i);
//       fibNumbers.push(result)
//    }

//    console.timeEnd('label')
//    console.log(fibNumbers)
//    return calculateASyncHelper((e)=>e,fibNumbers);
// }
