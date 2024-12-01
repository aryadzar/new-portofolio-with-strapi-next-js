import { About } from "@/model/about"
import { api } from "@/utils/api"

export const getAbout = async () => {
    return await api.get<About>('/api/about-me', {
        params: {
            populate: '*'
        },
        transformResponse: (res) => {
            const resData = JSON.parse(res)
            return resData ?? {};
        }
    })
}