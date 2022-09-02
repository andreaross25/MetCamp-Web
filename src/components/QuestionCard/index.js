function QuestionCard({preguntaActual}) {
  return(
        <div style={{PaddingButton: "10px"}}>
            <span className="tag-is-rounded is-info">{preguntaActual.id}.  </span>
        <span>{preguntaActual.question}</span>
        <br/>
        {
            preguntaActual.answers.map((opcion) => (
               <div key={opcion.id}>
               <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer}></input>
                <label htmlFor={`${opcion.id}`}> {opcion.answer}</label>
                <br/>
                </div>
            ))
        }
        <br/>
        </div>
    )
}

export default QuestionCard