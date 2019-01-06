import React, { Component } from 'react';
import NavLink from './NavLink';

class PayOwnInternatBankForm extends Component {
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
            <p>Сформируйте платёжку и загрузите её в свой банк для подписи</p>
            <div className="row">
                <div className="col-md-3">
                    <p>От кого</p>
                    <p>БИК</p>
                    <p>Номер счёта</p>
                    <p>За что</p>
                    <p>Сколько</p>
                    <div className="payButtonOwn">Получить файл для интернет-банка</div>
                </div>
                <div className="col-md-9">
                    <input className="input_notMax" type="text" placeholder="ИНН или название плательщика"/>
                    <input className="input_notMax" type="text"/>
                    <input className="input_notMax" type="text"/>
                    <input className="input_notMax" type="text" value="без НДС"/>
                    <input className="input_notMax" type="text"/>
                </div>
            </div>
            <hr className="delimiter"/>
        </section>
      );
    }
  }

  export default PayOwnInternatBankForm;