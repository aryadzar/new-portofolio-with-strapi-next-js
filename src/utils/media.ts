export const media = (url: string) => {
   if (url) {
      return 'https://strapi-api.aryadzar.my.id' + url;
   }
   return url;
};
