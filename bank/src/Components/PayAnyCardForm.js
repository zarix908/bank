import React, { Component } from 'react';
import NavLink from './NavLink';

class PayAnyCardForm extends Component {
    render() {
      return (
        <section className="payForm">
            <section className="payChooser">
                    <NavLink to="/"><h3 className="payChooser__pay">Заплатить</h3></NavLink>
                    <NavLink to="/requestPay"><h3 className="payChooser__request">Запросить платёж</h3></NavLink>
                </section>
                <section className="cardChooser">
                    <NavLink to="/"><p className="cardChooser__any"> С карты любого банка</p></NavLink>
                    <NavLink to="/payOwn"><p className="cardChooser__own"> Из своего интернет-банка</p></NavLink>
            </section>
            <div className="row_hr">
                    <div className="col-md-5">
                        <section className="creditCard">
                            <section className="cardLogos">
                                <img className="cardLogos__visa" src="./pictures/visa_logo.png" alt="visa logo"/>
                                <img className="cardLogos__mastercard" src="./pictures/mastercard_logo.png" 
                                                            alt="mastercard logo"/>
                            </section>
                            <div className="flexCenterWrapper">
                                <section className="cardData">
                                    <input className="input" type="text" placeholder="Номер карты"/>
                                    <br/><br/>
                                    <section className="creditCard__info">
                                        <input className="input_shorten" type="text" placeholder="ММ/ГГ"/>
                                        <input className="input_shorten" type="text" placeholder="CVC"/>
                                    </section>
                                </section>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-3">
                                <section className="payFieldsNames">
                                    <p>Сумма</p>
                                    <p>Комментарий</p>
                                    <p>Ваша эл. почта</p>
                                    <div className="payButton">Заплатить</div>
                                </section>
                            </div>
                            <div className="col-md-9">
                                <section className="payFields">
                                    <input className="input_notMax" type="text" placeholder="от 1000 до 75 000 р"/>
                                    <input className="input_notMax" type="text" placeholder="До 150 символов"/>
                                    <input className="input_notMax" type="text" placeholder="Для квитанции об оплате"/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="delimiter"/>
            </section>
        );
    }
  }

  export default PayAnyCardForm;