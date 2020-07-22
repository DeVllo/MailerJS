const { Router } = require('express');

const router = Router();

router.post('/sendmail', (req, res) => {
    console.log(process.env.secretApiKey);
    const {secretkey, tomail} = req.body;
    const { }
    if(secretkey && tomail){
        res.json({
            haydata: {
                "informacion" : {
                    "key":secretkey,
                    tomail:tomail
                }
            }
        })
    }
    else{
        res.json({
            data: {
                "informacion" : "no hay resultados"
            }
        })
    }
    
})

router.get('/', (req, res) => res.send(`
    <html>
        <head>
            <title>MailerJS</title>
        </head>
        <body>
            <div>
                <h1>MailerJS</h1>
                <p>A little API to send Mails with javasript as client. With ♥ by <a href='https://github.com/DeVllo' target='_blank'>DeVllo</a></p>
            </div>
            </br></br>
            <div>
                <h1> EndPoints: </h1>
                <ul>
                    <li> /send/  | parameters: <b>$tomail</b> (string) , <b>$key</b></li>
                </ul>
            </div>
        </body>
    </html>
`))



module.exports = router;