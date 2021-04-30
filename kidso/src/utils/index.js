import { data } from "../seed";

export const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

export const fetchAppDetails = (delay = 1000) =>
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
