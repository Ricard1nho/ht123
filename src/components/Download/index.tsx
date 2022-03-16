import React from 'react';
import styles from './styles.module.css';


function Download() {
  return (
    <div className="downapp">
      <img className="logo-roxo" src="/img/rotta-roxo.png" width="280" alt="" />
      <h3>BAIXE O APP</h3>
      <p>AGILIZE JÁ AS SUAS VENDAS E PROPORCIONE UMA MELHOR EXPERIÊNCIA AOS SEUS CLIENTES.</p>
      <h5>
        <a href="https://play.google.com/store/apps/details?id=com.hotline.forcadevendas" target="_blank">
          <img className="link-download" src="/img/download.png" width="230" alt="" />
        </a>
      </h5>
      <h5>
          <img className={styles.iphone} src="/img/iphone.png" alt="" />
      </h5>
    </div>
  )
}

export default Download;