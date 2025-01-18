import { Post } from '@/model/post';
import { api } from '@/utils/api';

export const getPosts = async (page: number, pageSize: number, search: string = '') => {
   const response = await api.get('/posts', {
      params: {
         populate: '*', // Populate all relations
         'pagination[page]': page,
         'pagination[pageSize]': pageSize,
         'filters[title][$containsi]': search, // Filter by title containing the search term
         'sort[0]' : 'createdAt:desc'
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return {
            data: resData.data, // Blog data
            meta: resData.meta, // Metadata including pagination
         };
      },
   });

   return response.data; // Return transformed response
};

// get post by slug
export const getPost = async (slug: string) => {
   return await api.get<Post>('/posts', {
      params: {
         populate: '*',
         'filters[slug][$eq]': slug,
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData.data.length > 0 ? resData.data[0] : null;
      },
   });
};
