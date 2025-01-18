import { About } from '@/model/about';
import { Education } from '@/model/education';
import { Experience } from '@/model/experience';
import { api } from '@/utils/api';

export const getAbout = async () => {
   return await api.get<About>('/about-me', {
      params: {
         populate: '*',
      },
      // headers: {
      //    'Content-Type' : "application/json"
      // },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData ?? {};
      },
   });
};
export const getEducation = async () => {
   return await api.get<Education[]>('/educations', {
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
   return await api.get<Experience[]>('/experiences', {
      params: {
         populate: '*',
      },
      transformResponse: (res) => {
         const resData = JSON.parse(res);
         return resData.data ?? {};
      },
   });
};
