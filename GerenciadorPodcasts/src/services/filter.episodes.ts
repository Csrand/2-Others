import { dataPodcast } from "../data/podcast.data"
import { FilterPodcastModel } from "../models/filter.podcast.model";
import { StatusCode } from "../utils/status.code";

export const filterEpisodes = async(
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastName?.split('?p=')[1] || '';
    const data = await dataPodcast(queryString);

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
};
