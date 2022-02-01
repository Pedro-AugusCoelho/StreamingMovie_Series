import * as C from './styled';
import { useState , useEffect } from 'react';
import { AiFillStar , AiOutlineStar } from "react-icons/ai";

type Props = {
    avaliation : number;
}


const StarAvaliation = ({avaliation}:Props) => {

    const [defaultRating, setDefaultRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const StarIcon = {color:'yellow' , fontSize:'20px'};

    useEffect(() => {
        const handleAvaliation = () => {
            let Rating:number = (avaliation * 5) / 10;
            setDefaultRating(Rating);
        }
        handleAvaliation();
    },[avaliation]);

    return(
        <C.ContainerMain>
            {maxRating.map((val , k) => {
                return (
                    <C.Star key={k}>{val <= defaultRating 
                        ? <AiFillStar style={StarIcon}/> 
                        : <AiOutlineStar style={StarIcon}/> }
                    </C.Star>
                );
            })
            }
        </C.ContainerMain>
    )
}

export default StarAvaliation;