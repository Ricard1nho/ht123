import React from 'react';

function Home() {
  return (
    <div id="card-container">
      <h4 className="text-center">FORÇA DE VENDA ROTTA</h4>
      <hr className="hr1" />
      <div className="card-grid">
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/destino.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>controle remotamente</b></h5>
            </div>
          </div>
          <span className="blck-text">Tenha acesso ao estoque e a lista de clientes mesmo estando longe do sistema host.</span>
        </div>
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/loja.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>útil para o seu negócio</b></h5>
            </div>
          </div>
          <span className="blck-text">O Rotta Mobile foi desenvolvido para ser últil para os mais diversos 
          tipos de negócio, como mercados, lojas, oficinas, representantes de vendas, farmácia e muitos outros.</span>
        </div>
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/velo-seg.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>velocidade e segurança</b></h5>
            </div>
          </div>
          <span className="blck-text">O Rotta Mobile é destaque em velocidade de pesquisa de estoque. Segurança de 
          acesso através de login e senha. Bloqueie ou exclua um usuário a qualquer momento. </span>
        </div>
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/vendas.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>vendas internas e externas</b></h5>
            </div>
          </div>
          <span className="blck-text">Prático para ser usado nas vendas internas ou externas, 
          facilitando o trabalho dos representantes de venda.</span>
        </div>
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/no-signal.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>trabalhe offline</b></h5>
            </div>
          </div>
          <span className="blck-text">Faça vendas mesmo sem a internei ou acesso ao sistema no computador. O Rotta Mobile 
          guarda suas vendas para que você sincronize com o host quando houver intemet .</span>
        </div>
        <div className="card-icons">
          <div className="row main m-0">
            <div className="col img">
              <img src="/img/renovacao.png" alt="" className="responsive-img" />
            </div>
            <div className="col s10">
              <h5><b>renovação prática</b></h5>
            </div>
          </div>
          <span className="blck-text">Tenha a facilidade de renovar a sua mensalidade através do próprio site do Rotta Mobile .</span>
        </div>
      </div>
    </div>
  )
}
export default Home;