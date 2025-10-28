import { dataPodcast } from "../data/podcast.data";
import { FilterPodcastModel } from "../models/filter.podcast.model";
import { StatusCode } from "../utils/status.code";
export const serviceListEpisodes =  async()=>{

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const data = await dataPodcast();
    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }
    return responseFormat;
}
