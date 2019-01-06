import React, { Component } from 'react';
import { Link } from 'react-router';

class PayForm extends Component {
    render() {
      return (
            <nav>
            <div className="App">
                <section className="payChooser">
                    <h3 className="payChooser__pay">Заплатить</h3>
                    <h3 className="payChooser__request">Запросить платёж</h3>
                </section>
                <section className="cardChooser">
                    <p className="cardChooser__any"> С карты любого банка</p>
                    <p className="cardChooser__own"> Из своего интернет-банка</p>
                </section>
            </div>
            </nav>
        );
    }
  }

  export default PayForm;