import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom'
import { useEffect , useState } from "react"
import QuestionCard from '../../components/QuestionCard/'

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game () {
  const [ loading, setLoading ] = useState(true);
  const [ questions, setQuestions] = useState([]); 

  console.log('estado:' , questions)

useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setQuestions(data))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
}, [])

        const navigate = useNavigate();

        const onClickButton = ()=> {
            navigate('/');
        }
        
        return(
            <div className="container">
              <section className="section">
              <nav className="breadcrumb is-centered"  aria-label="breadcrumbs">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/contact">Contacto</a></li>
               </ul>
              </nav>
              {
                loading && (
                  <div> Cargando... </div>
                )
              }
             {
              !loading &&(
                <form>
               {
                questions.map((question) => {
                  return <div key={question.id}>
                  <QuestionCard preguntaActual={question} />
                  </div>
                })
               } 
                </form>
              )
             } 
          </section>
            <header className="Juego-header">
              <h1>Esta es la página del juego</h1>
        <Button onClick={onClickButton} text='Volver a Home' />
      </header>
      </div>
        )
}

export default Game;