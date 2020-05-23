import React from 'react';
import { Link } from 'react-router-dom';

import Container from './styles';

import about from './text';

export default function Home() {
    return (
        <Container>
            <header>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z" /></svg>
                <div>
                    <h1>Galeria de Imagens</h1>
                    <h2>Missão Apollo</h2>
                </div>
            </header>
            <div className="icons-block">
                <div className="icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="images" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z" /></svg>
                    <span>
                        Galerias ordenadas por programa, missão e rolos de câmeras disponíveis.
                    </span>
                </div>
                <div className="icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="satellite" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.60969,310.04206l-96.70393,96.71625a31.88151,31.88151,0,0,1-45.00765,0L280.572,326.34115l-9.89231,9.90759a190.56343,190.56343,0,0,1-5.40716,168.52287c-4.50077,8.50115-16.39342,9.59505-23.20707,2.79725L134.54715,400.05428l-17.7999,17.79929c.70324,2.60972,1.60965,5.00067,1.60965,7.79793a32.00544,32.00544,0,1,1-32.00544-32.00434c2.79735,0,5.18838.90637,7.7982,1.60959l17.7999-17.79929L4.43129,269.94287c-6.798-6.81342-5.70409-18.6119,2.79735-23.20627a190.58161,190.58161,0,0,1,168.52864-5.407l9.79854-9.79821-80.31053-80.41716a32.002,32.002,0,0,1,0-45.09987L201.96474,9.29814A31.62639,31.62639,0,0,1,224.46868,0a31.99951,31.99951,0,0,1,22.59759,9.29814l80.32615,80.30777,47.805-47.89713a33.6075,33.6075,0,0,1,47.50808,0l47.50807,47.50645a33.63308,33.63308,0,0,1,0,47.50644l-47.805,47.89713L502.71908,265.036A31.78938,31.78938,0,0,1,502.60969,310.04206ZM219.56159,197.433l73.82505-73.82252-68.918-68.9-73.80942,73.80689Zm237.74352,90.106-68.90233-68.9156-73.825,73.82252,68.918,68.9Z" /></svg>
                    <span>
                        Imagens carregadas diretamente do site da NASA.
                    </span>
                </div>
                <div className="icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></svg>
                    <span>
                        Interface ajustada para visualização em smartphones.
                    </span>
                </div>
            </div>
            <div className="gallery-block">
                <h2>Galerias</h2>
                <div className="gallery-item">
                    <div className="gallery-image galleries" />
                    <div className="gallery-text">
                        <h3>Galerias</h3>
                        <h4>Ordenadas por missão</h4>
                        <div>
                            <Link to="/g">Ver Galerias</Link>
                        </div>
                    </div>
                </div>
                <div className="gallery-item">
                    <div className="gallery-text">
                        <h3>Magazines</h3>
                        <h4>Rolos de câmeras Hasselblad</h4>
                        <div>
                            <Link to="/m">Ver Magazines</Link>
                        </div>
                    </div>
                    <div className="gallery-image magazines" />
                </div>
                <h2>Sobre</h2>
            </div>
            <div className="about-block">
                {about.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
        </Container>
    );
}
