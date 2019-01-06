import React, { Component } from 'react';
import NavLink from './NavLink';

class RequestPayForm extends Component {
    render() {
      return (
          <div>
                <section class="payChooser">
                    <NavLink to="/"><h3 class="payChooser__pay">Заплатить</h3></NavLink>
                    <NavLink to="/requestPay"><h3 class="payChooser__request">Запросить платёж</h3></NavLink>
                </section>
                <section class="payForm">
                    <p>Сформируйте платёжку и загрузите её в свой банк для подписи</p>
                    <div class="row">
                        <div class="col-md-3">
                            <p>ИНН получателя</p>
                            <p>БИК</p>
                            <p>Номер счёта</p>
                            <p>За что</p>
                            <p>Сколько</p>
                            <p>Номер телефона</p>
                            <p>Эл.почта</p>
                            <div class="payButton">Создать платёж</div>
                        </div>
                        <div class="col-md-9">
                            <input class="input_notMax" type="text" placeholder="ИНН или название плательщика"/>
                            <input class="input_notMax" type="text"/>
                            <input class="input_notMax" type="text"/>
                            <input class="input_notMax" type="text" value="без НДС"/>
                            <input class="input_notMax" type="text"/>
                            <input class="input_notMax" type="text" placeholder="+7"/>
                            <input class="input_notMax" type="text" placeholder="Для уведомлении об оплате"/>
                        </div>
                    </div>
                </section>
                <hr class="delimiter"/>
            </div>
        );
    }
  }

  export default RequestPayForm;