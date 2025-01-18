export const media = (url: string) => {
   if (url) {
      return process.env.NEXT_PUBLIC_BASE_API_URL + url;
   }
   return url;
};
