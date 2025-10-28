import { IncomingMessage, ServerResponse } from 'http'
import {serviceListEpisodes} from '../services/list.episodes';
import { filterEpisodes } from '../services/filter.episodes';
import { StatusCode } from '../utils/status.code';
import { ContentType } from '../utils/content.type';
import { FilterPodcastModel } from '../models/filter.podcast.model';

export const getListEpisodes = async(
    response: ServerResponse
)=> {

    const content = await serviceListEpisodes();
    response.writeHead(StatusCode.OK,{'content-type': ContentType.JSON });
    response.end(
        JSON.stringify(content));
};

export const getFilterEpisodes = async(
    request: IncomingMessage,
    response: ServerResponse
)=> {


    const content: FilterPodcastModel = await filterEpisodes(request.url);

    response.writeHead(content.statusCode, {'Content-type': ContentType.JSON });
    response.end(
        JSON.stringify(content.body));
};
