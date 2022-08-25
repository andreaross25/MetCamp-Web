import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'

function Contact () {
        const navigate = useNavigate();

        const onClickButton = ()=> {
            navigate('/');
        }
        
        return(
            <div className="Contact">
            <header className="Contact-header">
              <p>
                Andrea Ross
              </p>
            <p>
                Instagram: @andreamorozco
            </p>
            <p>
                Saludos desde México!
            </p>
        <Button onClick={onClickButton} text='Volver a Home' />
      </header>
      </div>
        )
}

export default Contact;