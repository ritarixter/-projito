export const removeRemainingCrumbs = (state:any, url:string) => {
  const index = state.findIndex((route:any) => route.url === url);
  
  return state.slice(0, index);
};

export const isContainRoute = (state:any, route:string) => state.some(({ url }:{url: string}) => {
  return url === route});