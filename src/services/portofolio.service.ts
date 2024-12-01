    import { Portofolio } from "@/model/portofolio";
    import { api } from "@/utils/api";

    export const getPortofolio = async () => {
        // await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay 2 detik
        return await api.get<Portofolio[]>('/api/portofolios', {
            params: {
                populate: '*'
            },
            transformResponse: (res) => {
                const resData = JSON.parse(res)
                return resData.data;
            }
        })
    }