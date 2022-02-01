import {useEffect , useState} from "react";
import * as C from './styled';
import APIMovie from "../../APIMovie";
import CarrosselMovies from "../../components/CarrosselMovies";
import FeaturedMovie from "../../components/FeaturedMovie";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


const Home = () => {

    const [listAllMovie , setListAllMovie] = useState<any>([]);
    const [featuredData , setFeaturedData] = useState<any>();
    const [blackHeader , setBlackHeader ] = useState<boolean>(false);

    useEffect(() => {
        const loadAll = async () =>{
            let list:any = await APIMovie.getHomeList();
            setListAllMovie(list);
            let originals = list.filter((i:{slug:any;}) => i.slug === 'originals');
            let RandomMovie = Math.floor(Math.random() * originals[0].items.results.length - 1);
            let Movie = originals[0].items.results[RandomMovie];
            let MovieInfo = await APIMovie.getMovieInfo(Movie.id , 'tv');
            setFeaturedData(MovieInfo);
        }
        loadAll();
    },[])

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
    },[])

    return(
        <C.ContainerMain>
            <Header black={blackHeader} />
            {featuredData &&
                <FeaturedMovie item={featuredData} />
            }
            <div className="carrosselMovies">
                {listAllMovie.map((val:any , k:number)=>(
                <CarrosselMovies key={k} title={val.title} items={val.items} slug={val.slug} />))
                }
            </div>

            <Footer />

            {listAllMovie.length <= 0 && 
                <C.Loadind>
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"  alt='Carregando'/>
                </C.Loadind>
            }
        </C.ContainerMain>
    );
}

export default Home;