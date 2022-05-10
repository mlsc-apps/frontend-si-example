import express from 'express';
import { Si } from 'frontend-si';

const app = express();

let data = {
    message : {
        msg : "Hello World!",
        class : "container"
    },
    
    standings : {
    "row-1": ["John", "Mary", "Steven", "Sven"],
    "row-2": [1000, 2000, 3000, 4000],
    },
    
    footerMessage : {
        main: 'This is footer message at the end of ',
        copyright: 'This is Copyright message'
    },

    formData : {
        name: "This is form name",
        submitLabel: "ClickMe!",
        cancelLabel: "Abort",
        submit: 'http://localhost:3000/form',
        cancel: 'http://localhost:3000/cancel',
        css: 'color: red; text-align: center; font-size: 25; font-weight: 900;'
    },

    listData : {
        list : ['item1', 'item2', 'item3', 'item4', 'item5'],
        css : {
            listStyle: "list-group"
        }
    }
}

app.get('/', function(req, res) {
    Si.renderHTML('./templates/main.si', data, (html) => {
        res.status(200).send(html);
    });
});

// app.get('/', function(req, res) {
//     Si.renderHTML('./templates/hello.si', { message : "Hello World!" }, (html) => {
//         res.status(200).send(html);
//     });
// });

app.get('/form', function(req, res) {
    let dataSubmitted = {
        message : {
            msg : "Form submitted!",
            class : "container"
        },
        standings : data.standings
    }
    Si.renderHTML('./templates/formResponse.si', dataSubmitted, (html) => {
        res.status(200).send(html);
    });
});

app.get('/cancel', function(req, res) {
    let dataCancelled = {
        message : {
            msg : "Form cancelled",
            class : "container"
        },
        standings : data.standings
    }
    Si.renderHTML('./templates/formResponse.si', dataCancelled, (html) => {
        res.status(200).send(html);
    });
});

export default app;