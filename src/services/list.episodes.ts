import { dataPodcast } from "../data/podcast.data";
export const serviceListEpisodes =  async()=>{
    const data = await dataPodcast();
    return data;
}
