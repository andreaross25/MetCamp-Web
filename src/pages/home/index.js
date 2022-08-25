import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'

function Home () {
        const navigate = useNavigate();

        const onClickButton = () => {
            navigate('/game');
        }

        const onClick = () => {
            navigate('/contact')
        }
        
        return(
            <div className="Home">
            <header className="Home-header">
              <p>
                MetCamp Andrea Ross
              </p>
        <Button onClick={onClickButton} text='MetCamp Quiz' />
        <Button onClick={onClick} text='Contacto' />
        </header>
        </div>    
        )  
}

export default Home;