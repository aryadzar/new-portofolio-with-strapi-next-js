import { About } from '@/model/about';
import { Education } from '@/model/education';
import { Experience } from '@/model/experience';
import { api } from '@/utils/api';

export const getAbout = async () => {
   return await api.get<About>('/api/about-me', {
      params: {
         populate: '*',
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData ?? {};
      },
   });
};
export const getEducation = async () => {
   return await api.get<Education[]>('/api/educations', {
      params: {
         populate: '*',
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData.data ?? {};
      },
   });
};
export const getExperience = async () => {
   return await api.get<Experience[]>('/api/experiences', {
      params: {
         populate: '*',
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData.data ?? {};
      },
   });
};
