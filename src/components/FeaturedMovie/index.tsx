import { Link } from 'react-router-dom';
import StarAvaliation from '../StarAvaliation';
import * as C from './styled';

type Props = {
    item: any
}


const FeaturedMovie = ({item}:Props) => {

    let Data = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description:string = item.overview;
    if(description.length > 200){
        description = description.substring(0 , 200) + '...';
    }

    return(
        <C.Container style={{backgroundSize:'cover',backgroundPosition:'center',backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <C.BoxShadowVertical>
                <C.BoxShadowHorizontal>
                    
                    <C.FeaturedName>{item.original_name}</C.FeaturedName>
                    
                    <C.FeaturedInfo>
                        <div className='rating'><StarAvaliation avaliation={item.vote_average} /><p>({item.vote_count})</p></div>
                        <div className='season'>{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className='year'>{Data.getFullYear()}</div>
                    </C.FeaturedInfo>

                    <C.FeaturedDescription>{description}</C.FeaturedDescription>

                    <C.FeaturedButtons>
                        <div className='watch'><Link to={`/watch/:${item.id}`}></Link>▶ Assistir</div>
                        <div className='mylist'><Link to=''></Link>+ Minha Lista</div>
                    </C.FeaturedButtons>

                    <C.FeaturedGenres>
                        <strong>Gêneros:</strong>{genres.join(', ')}
                    </C.FeaturedGenres>
                
                </C.BoxShadowHorizontal>
            </C.BoxShadowVertical>
        </C.Container>
    )
}

export default FeaturedMovie;