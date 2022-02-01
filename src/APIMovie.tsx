const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY =  process.env.REACT_APP_TMDB_APIKEY;   
const basicFetch = async (endpoint:string) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return[
            {
                slug:'originals',
                title:'Origianis da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'trending',
                title:'Recomendados para Você',
                items: await basicFetch(`/trending/all/day?language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'toprated',
                title:'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'action',
                title:'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'comedy',
                title:'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'horror',
                title:'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },

            {
                slug:'romance',
                title:'Romance',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },
        ]
    },
    getMovieInfo: async(movieId:any , type:any) => {
        let Info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    Info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    Info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    Info = {};
                break;
            }
        }
        return Info;
    },
    getMovieInfoIndividual: async(MovieId:any , MovieTv:string , title:any) => {
        let Info:any = {};
        console.log(title); 
        if(MovieId){
            if(title === 'Movie'){
                Info = await basicFetch(`/movie/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
            }else{
                Info = await basicFetch(`/tv/${MovieId}?language=pt-BR&api_key=${API_KEY}`);
                console.log(Info);
            }
            return Info;
        }
    }
}