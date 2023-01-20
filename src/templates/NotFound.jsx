import '@styles/NotFound.scss';

const NotFound = () => {
  return (
    <div className='container'>
      <h1 className="not-found-text"><big className="big-text">404</big><br />No encontrado</h1>
      <span className="not-found-description">No encontramos el recurso que solicitaste</span>
      <button className="home-button">Ir al home</button>
    </div>
  );
}

export default NotFound;