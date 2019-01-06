var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./front'));

var paymentsdb = new sqlite3.Database('payments.db');

function regexpChecker(expr) {
    return str => expr.test(str);
}

function dateChecker(date) {
    if (!regexpChecker(/^((0[0-9])|(1[0-2]))\/\d{2}$/)(date)) {
        return false;
    }

    const year = parseInt(date.split('/')[1]);
    const currentYear = (new Date()).getFullYear() % 2000;
    if (year <  currentYear || year > 35) {
        return false;
    }

    return true;
}

function proccessPayment(data, resolve, reject) {
    props = new Map();

    props.set('isOwn', regexpChecker(/^(true|false)$/));   
    props.set('cardNumber', regexpChecker(/^\d{16}$/));
    props.set('cardDate', dateChecker);
    props.set('cardCVC', regexpChecker(/^\d{3}$/));
    props.set('summ', s => regexpChecker(/^\d\d*$/)(s) && 
                           parseInt(s) >= 1000 && parseInt(s) <= 75000); 
    props.set('comment', regexpChecker(/^[\d\w \\.\\?\\,\\(\\)\\-А-Яа-яЁё\\—"«»:]{0,150}$/));
    props.set('email', regexpChecker(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    props.set('sender', regexpChecker(/^(\d{10}|\d{12})$/));
    props.set('bik', regexpChecker(/^\d{9}$/));
    props.set('accountNumber', regexpChecker(/^\d{20}$/));
    props.set('vat', regexpChecker(/^(0|10|18)$/));

    for (const prop of props.keys()) {
        if (data[prop] === undefined) {
            data[prop] = 'NULL';
        } else {
            if (!props.get(prop)(data[prop])) {
                reject(`${prop} has invalid format`);
                return;
            }
        }
    }

    paymentsdb.run(`INSERT INTO payments 
        (isOwn,
        cardNumber,
        cardDate,
        cardCVC,
        summ,
        comment,
        email,
        sender,
        bik,
        accounNumber,
        vat) 
        VALUES (
        '${data.isOwn}',
        '${data.cardNumber}',
        '${data.cardDate}',
        '${data.cardCVC}',
        '${data.summ}',
        '${data.comment}',
        '${data.email}',
        '${data.sender}',
        '${data.bik}',
        '${data.accountNumber}',
        '${data.vat}'
        );`, err => {
            if (err) {
                reject(err);
                return;
            } else {
                resolve();
                return;
            }
        });
}

app.post('/card-payment/pay', (req, res) => {
    res.set('Content-Type', 'application/json');
    const proccessingPayment = new Promise((resolve, reject) => 
        proccessPayment(req.body, resolve, reject));
    proccessingPayment
        .then(r => res.send({'status': 'success'}))
        .catch(e => res.send({'status': 'error', 'error': `${e}`}));
});

app.post('/card-payment/request', (req, res) => {
    res.set('Content-Type', 'application/json');
    
});

app.get('/card-payment/list', (req, res) => {
    res.set('Content-Type', 'application/json');
    
});

app.listen(3000, function () {
    console.log('start listening on port 3000');
});