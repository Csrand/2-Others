import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcast.controller';
import {Routes} from './routes/routes';
import { HttpMethod } from './utils/http.method';

export const app = async (
    request: http.IncomingMessage,
    response: http.ServerResponse,
) =>{

        const[baseUrl,queryString] = request.url?.split('?') ?? ['',''];

        if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(response);
        }

        if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
            await getFilterEpisodes(request, response);
        }
    };
