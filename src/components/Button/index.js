import './styles.css';

function Button({text, onClick}) {

    return (
        <button onClick={onClick} className='button is-primar is-medium'>{text}</button>
    )
}

export default Button;