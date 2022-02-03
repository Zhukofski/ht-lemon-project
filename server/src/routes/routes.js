const contacts = require('../controllers/contacts')
const auth = require("../controllers/auth")
const crypto = require('crypto')

const tokenKey = '1a2b-3c4d-5e6f-7g8h'

const routes = (app) => {

    app.route('/auth').post(auth.auth);

    app.use((req, res, next) => {
        if (req.headers.authorization) {
            let tokenParts = req.headers.authorization
                .split(' ')[1]
                .split('.')
            let signature = crypto
                .createHmac('SHA256', tokenKey)
                .update(`${tokenParts[0]}.${tokenParts[1]}`)
                .digest('base64')

            if (signature === tokenParts[2])
                req.user = JSON.parse(
                    Buffer.from(tokenParts[1], 'base64').toString(
                        'utf8'
                    )
                )
            next()
        }
        next()
    });

    app.route('/contact')
        .get(contacts.getContacts)
        .post(contacts.addNewContact)
        .put(contacts.updateContact);

    app.route('/contact/:id')
        .delete(contacts.deleteContact)
        .get(contacts.getContactByID);

}

module.exports = {routes}
