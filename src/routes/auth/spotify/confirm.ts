import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({url}) => {
    console.log(url.searchParams);
    
    return {status: 200, body: {message: 'Logged in with spotify'}}
}