import React, {useEffect, useState} from "react";
import styles from './styles.module.css';
import Navbar from '../components/Navbar';
import Carousels from '../components/Carousel'
import Cardicons from '../components/CardIcons'
import Comments from '../components/Comments'
import Download from '../components/Download'
import Head from 'next/head'


function Home() {
    useEffect(() => {
      if (window) {
        const M = require('materialize-css');
        M.AutoInit();
      }
    }, []);

    return (
      <div className={styles.mainContainer}>
        <Head>
          <title>Rotta Mobile</title>
          <link rel="shortcut icon" href="/logo.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={`row ${styles.topoContainer}`}>
          <Navbar links={[]} other={""}>
          </Navbar>
          <div className="logo">
            <img src="/img/rotta.png" alt="" width="200" className="responsive-img" />
            <h6 className="m-0">SOLUÇÕES WEB E MOBILE</h6>
          </div>
          <div className="lista">
            <div className="col s7">
              <Cardicons />
            </div>
            <div className="col s5">
              <Carousels />
            </div>
          </div>
        </div>
        <div className={`${styles.midContainer}`}>
          <Comments />
          <Download />
        </div>
        <div className={`${styles.footer}`}>
        <div className="row">
          <div className="col s61 aco">acompanhe:
            <div className="social">
              <img className="" src="/img/logotipo-do-instagram.png" />
            </div>
            <div className="social">
              <img className="" src="/img/youtube.png" />
            </div>
            <div className="social">
              <img className="" src="/img/facebook.png" />
            </div>
            <div className="social">
              <img className="" src="/img/logotipo-do-linkedin.png" />
            </div>
            <img className="f-right" src="/img/logo.png" width="160" />
          </div>
          <div className="col s12 text-center">Rua Mariano Ventura, 166 | Centro | Senhor do Bonfim | BA| CEP: 48970-000</div>
        </div>
        </div>
      </div>
    )
}

export default Home;
