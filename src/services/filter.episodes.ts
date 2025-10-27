import { dataPodcast } from "../data/podcast.data"

export const filterEpisodes = async (podcastName:string) => {
    const data = await dataPodcast(podcastName);
    return data;
}
