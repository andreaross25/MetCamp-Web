import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'

function Game () {
        const navigate = useNavigate();

        const onClickButton = ()=> {
            navigate('/');
        }
        
        return(
            <div className="Juego">
            <header className="Juego-header">
              <p>
                Esta es la página del juego
              </p>
        <Button onClick={onClickButton} text='Volver a Home' />
      </header>
      </div>
        )
}

export default Game;