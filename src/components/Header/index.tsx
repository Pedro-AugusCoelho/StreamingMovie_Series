import * as C from './styled';


type Props = {
    black: boolean;
}

const Header = ({black}:Props) => {
    return(
        <C.Container Black={black}>
            <div className='Logo'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png' alt='Netflix'/></div>
            <div className='Icon'><img src='https://pbs.twimg.com/media/Ensf4zFWMAAQjJd.jpg' alt='Icon' /></div>
        </C.Container>
    );
}

export default Header;