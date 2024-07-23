import { useState } from 'react';
import type { MovieSerie } from '../../interfaces/movieSerie';
import Modal from 'react-bootstrap/Modal';

export function MovieSerie({ serie }: { serie: MovieSerie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='col-6 col-md-4 col-lg-3 col-xl-2 mb-3 card-movie-serie p-1'>
      <div className='d-flex flex-column'>
        <img src={serie.images['Poster Art'].url} alt='' className='w-100' />
        <>
          <button className='btn-show-modal' onClick={handleShow}>
            {serie.title}
          </button>
          <Modal
            centered
            show={show}
            onHide={handleClose}
            className='modal-movie-serie'
          >
            <Modal.Body>
              <h3>
                Detalle de la{' '}
                {serie.programType === 'series' ? 'serie' : 'pelicula'}
              </h3>
              <div className='modal-contain'>
                <div className='d-flex flex-column'>
                  <span className='d-flex flex-column mb-2'>
                    <strong>Titulo:</strong>
                    {serie.title}
                  </span>
                  <span className='d-flex flex-column'>
                    <strong>Poster:</strong>
                    <div className='d-flex justify-content-center mb-2'>
                      <img src={serie.images['Poster Art'].url} alt='' />
                    </div>
                  </span>
                  <span className='d-flex flex-column mb-2'>
                    <strong>Descripción:</strong>
                    {serie.description}
                  </span>
                  <span className='d-flex flex-column mb-2'>
                    <strong>Tipo:</strong>
                    {serie.programType}
                  </span>
                  <span className='d-flex flex-column mb-2'>
                    <strong>Año de estreno:</strong>
                    {serie.releaseYear}
                  </span>
                </div>
              </div>
              <div className='btn-modal-detail d-flex justify-content-center mt-4'>
                <button onClick={handleClose}>Cerrar</button>
              </div>
            </Modal.Body>
          </Modal>
        </>
      </div>
    </div>
  );
}
