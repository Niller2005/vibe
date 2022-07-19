import type { RequestHandler } from '@sveltejs/kit';

const generateRandomString = (length: number) => {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));   
    }
    return text;
}



export const GET: RequestHandler = async ({request}) => {
    console.log(request.url);
    const scope = 'user-read-private user-read-email'
    const state = generateRandomString(16)
    const redirect_uri = request.url;
    
    return { status: 302, headers: { location: `https://accounts.spotify.com/authorize?response_type=code&client_id=${import.meta.env.VITE_SPOTIFY_CLIENT_ID}&scope=${scope}&state=${state}&redirect_uri=${'http://localhost:5173/auth/spotify/confirm'}` } }   
}