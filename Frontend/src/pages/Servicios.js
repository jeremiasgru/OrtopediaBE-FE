import '../styles/components/pages/Servicios.css'

const Servicios = (props) =>{
    return(
        <main className="holdercard">
        <h1 className="title"></h1>
        <div className="container">
            <div className="card">
                <img src="img/rehabilitacion.jpg" alt="rehab"/>
                <h4>Rehabilitación</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias illum qui, suscipit, nemo ratione aperiam ullaceat, fugit atque veniam quod voluptatem cum.</p>
                <a href="https://www.facebook.com/OrtopediaSanCarlos">Leer más</a>
            </div>
        </div>
    
        <h1 className="title"></h1>
        <div className="container">
            <div className="card">
                <img src="img/equip.jpg" alt="equip"/>
                <h4>Equipamiento Hospitalario</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias illum qui, suscipit, nemo ratione aperiam ullaceat, fugit atque veniam quod voluptatem cum.</p>
                <a href="https://www.facebook.com/OrtopediaSanCarlos">Leer más</a>
            </div>
        </div>
    
        <h1 className="title"></h1>
        <div className="container">
            <div className="card">
                <img src="img/protesis3.jpg" alt="prot"/>
                <h4>Protesis</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias illum qui, suscipit, nemo ratione aperiam ullaceat, fugit atque veniam quod voluptatem cum.</p>
                <a href="https://www.facebook.com/OrtopediaSanCarlos">Leer más</a>
            </div>
        </div>
    </main>
    );
}

export default Servicios;