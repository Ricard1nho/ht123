
import React from "react";
import stycar from './styles.module.css';




function Carousels() {
    return (
      <div>
        <div className="carousel">
          <a className="carousel-item" href="#four!"><img className={stycar.img} src="/slider/celular00.png" /></a>
          <a className="carousel-item" href="#four!"><img className={stycar.img} src="/slider/celular01.png" /></a>
          <a className="carousel-item" href="#four!"><img className={stycar.img} src="/slider/celular02.png" /></a>
          <a className="carousel-item" href="#four!"><img className={stycar.img} src="/slider/celular03.png" /></a>
          <a className="carousel-item" href="#four!"><img className={stycar.img} src="/slider/celular04.png" /></a>
        </div>
      </div>
    )
}

export default Carousels