import * as C from './styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    title: string,
    items:any,
    slug: string,
}


const CarrosselMovies = ({title , items , slug}:Props) => {

    const [number , setNumber] = useState(0);

    const handleLeftArrow = () => {
        let x = number + Math.round(window.innerWidth / 2);
        if(x > 0){
            x=0;
        }
        setNumber(x);
    } 
    
    const handleRightArrow = () => {
        let x = number - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setNumber(x);
    }

    return(
        <C.Container>
           <h2>{title}</h2>
           <C.ArrowRowLeft onClick={handleLeftArrow}>◀</C.ArrowRowLeft>
           <C.ArrowRowRight onClick={handleRightArrow}>▶</C.ArrowRowRight>
           <C.ContainerMovieRow>
                <C.MovieRow style={{marginLeft: number , width:items.results.length * 150}}>
                    {items.results.length > 0 && items.results.map((val:any , k:number) => (
                        <C.MovieItem key={k}>
                            <Link to={`/${slug}/${val.id}/${val.name ? `${val.name}` : `Movie`}`} ><img src={`https://image.tmdb.org/t/p/w300${val.poster_path}`} alt={val.original_title} /></Link>
                        </C.MovieItem>
                    ))}
                </C.MovieRow>
           </C.ContainerMovieRow>
        </C.Container>
    );
}

export default CarrosselMovies;