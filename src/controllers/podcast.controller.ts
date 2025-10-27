import { IncomingMessage, ServerResponse } from 'http'
import {serviceListEpisodes} from '../services/list.episodes';
import { filterEpisodes } from '../services/filter.episodes';

export const getListEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
)=> {

    const content = await serviceListEpisodes();
    res.writeHead(200,{'content-type':"application.json"});
    res.end(
        JSON.stringify(content));
}

export const getFilterEpisodes = async(
    req: IncomingMessage,
    res: ServerResponse
)=> {

    const queryString = req.url?.split('?p=')[1] ||"";
    const content = await filterEpisodes(queryString);
    res.writeHead(200,{"content-type":"application.json"});
    res.end(
        JSON.stringify(content));
}
