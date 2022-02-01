import * as C from './styled';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import APIMovie from "../../APIMovie";
import Header from '../../components/Header';
import StarAvaliation from '../../components/StarAvaliation';
import Footer from '../../components/Footer';

const MoviePage = () => {

    const params = useParams();
    const [movieInfo , setMovieInfo] = useState<any>([]);
    const [blackHeader , setBlackHeader ] = useState<boolean>(false);
    const [countryOriginal , setCountryOriginal] = useState('');


    useEffect(() => {
        const loadAll = async () =>{
            let MovieInfo = await APIMovie.getMovieInfoIndividual(`${params.slug}` , `${params.category}` , `${params.title}`);
            setMovieInfo(MovieInfo);
            setCountryOriginal(MovieInfo.production_countries[0].name);
        }
        loadAll();
    },[params]);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            }else{
                setBlackHeader(false);
            }
        }
        window.addEventListener('scroll' , scrollListener);
        return() => {
            window.removeEventListener('scroll' , scrollListener);
        }
    },[]);

    let genres = [];
    for(let i in movieInfo.genres){
        genres.push(movieInfo.genres[i].name);
    }
    
    let created = [];
    if(movieInfo.created_by){
        for(let i in movieInfo.created_by){
            created.push(movieInfo.created_by[i].name );
        }
    }
    if(movieInfo.production_companies){
        for(let i in movieInfo.production_companies){
            created.push(movieInfo.production_companies[i].name);
        }
    }

    
    let Data = new Date(movieInfo.first_air_date || movieInfo.release_date);
    let DataLastEp = new Date(movieInfo.last_air_date);


    return(
        <C.Main>
            <Header black={blackHeader}/>
            <C.ContainerFeaturedMovie style={{backgroundSize:'cover',backgroundPosition:'center',backgroundImage:`url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`}}>
                <C.EffectBorder>
                    <C.ContainerInfo>
                        <C.Title>{movieInfo.original_name || movieInfo.original_title}</C.Title>
                        <C.InfoEvaluative>
                            <div className='rating'><StarAvaliation avaliation={movieInfo.vote_average}/>({movieInfo.vote_count})</div>

                            <div className='season'>{movieInfo.number_of_seasons} {movieInfo.number_of_seasons ? `Temporada${movieInfo.number_of_seasons !== 1 ? "s" : ''}` : `${movieInfo.tagline}`}</div>  

                            <div className='year'>{Data.getDate() < 10 ? `0${Data.getDate() + 1}` : `${Data.getDate() + 1}`}
                                                 /{ (Data.getMonth() + 1) < 10 ? `0${Data.getMonth() + 1}` : `${Data.getMonth() + 1}`}
                                                 /{Data.getFullYear()}
                            </div>
                            
                        </C.InfoEvaluative>
                    </C.ContainerInfo>
                </C.EffectBorder>
            </C.ContainerFeaturedMovie>
            <C.ContainerDescription>
                
                <C.OverView>{movieInfo.overview}</C.OverView>
                
                <C.ContainerMovieDescription>
                    <C.Poster><img src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt={movieInfo.original_title}/></C.Poster>
                    
                    <C.MovieDescription>
                        
                        <div>
                            <b>Título Original:</b> 
                            <span>{movieInfo.original_name || movieInfo.original_title}</span>
                        </div>
                        
                        <div><b>Gêneros:</b> {<span>{genres.join(', ')}</span>}</div>
                        
                        <div>
                            <b>{movieInfo.number_of_seasons ? 'Temporada:' : 'Duração:'}</b> 
                            {movieInfo.number_of_seasons 
                                ? <span>{movieInfo.seasons.length}</span> 
                                : <span>{movieInfo.runtime} Min</span>
                            } 
                        </div>
                        
                        <div><b>Direção:</b><span>{created.join(', ')}</span></div>
                        
                        {movieInfo.last_air_date 
                            ?<div><b>Ultimo Lançamento:</b> 
                                    
                                    <span>{((DataLastEp.getDate() + 1) < 10 ? `0${DataLastEp.getDate() + 1}` : `${DataLastEp.getDate() + 1}`)  
                                             + '/' + 
                                           ((DataLastEp.getMonth() + 1) < 10 ? `0${DataLastEp.getMonth() + 1}` : `${DataLastEp.getMonth() + 1}`) 
                                             + '/' + 
                                             DataLastEp.getFullYear()}
                                    </span>
                             </div> 
                            : ''
                        }
                        
                        <div><b>País:</b><span>{countryOriginal}</span></div>
                    </C.MovieDescription>
                
                </C.ContainerMovieDescription>

                <Footer />

                {movieInfo.length <= 0 && 
                    <C.Loadind>
                        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"  alt='Carregando'/>
                    </C.Loadind>
                }
            
            </C.ContainerDescription>
        </C.Main>
    )
}

export default MoviePage;