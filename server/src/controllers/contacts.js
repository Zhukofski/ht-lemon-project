// import mongoose from 'mongoose';
// import {ContactSchema} from '../models/model'
//
// const Contact = mongoose.model('Contact', ContactSchema);
const fs = require("fs");


const filePathToContacts = "/contacts.json";

let content, contacts;

const addNewContact = (req, res) => {
    content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    contacts = JSON.parse(content);
    const newContact = req.body;
    if (newContact.firstName && newContact.lastName && newContact.email && newContact.phone) {
        newContact.id = Date.now();
        contacts.push(req.body);
        fs.writeFileSync(__dirname + filePathToContacts, JSON.stringify(contacts));
        res.send({data: req.body, message: 'contact has been added'});
    } else {
        res.send('fill all require fields firstName,lastName,email,phone');
    }
    // let newContact = new Contact(req.body)
    // newContact.save((err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })

}

const getContacts = (req, res) => {
    content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    contacts = JSON.parse(content);
    res.send(contacts);
    // Contact.find({}, (err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })
}
const getContactByID = (req, res) => {
    content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    contacts = JSON.parse(content);
    console.log(req.path)
    const indexOfElem = contacts.findIndex((item) => item.id === Number(req.params.id))
    if (indexOfElem !== -1) {
        const contact = contacts.slice(indexOfElem, 1)
        res.send({data: contact});
    } else {
        res.send('not found contact');
    }
    // Contact.findById(req.params.contactID, (err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(contact)
    // })
}

const updateContact = (req, res) => {
    content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    contacts = JSON.parse(content);
    const indexOfElem = contacts.findIndex((item) => item.id === Number(req.body.id))
    if (indexOfElem !== -1) {
        contacts.splice(indexOfElem, 1, req.body);
        fs.writeFileSync(__dirname + filePathToContacts, JSON.stringify(contacts));
        res.send({data: req.body, message: 'contact has been updated'});
    } else {
        res.send('not found contact');
    }
    // Contact.findOneAndUpdate({_id: req.params.contactID},
    //     req.body, {new: true, useFindAndModify: false},
    //     (err, contact) => {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(contact)
    //     })
}
const deleteContact = (req, res) => {
    content = fs.readFileSync(__dirname + filePathToContacts, "utf8");
    contacts = JSON.parse(content);
    const id = Number(req.params.id);
    const indexOfElem = contacts.findIndex((item) => item.id === id)
    if (indexOfElem !== -1) {
        const contact = contacts.splice(indexOfElem, 1);
        fs.writeFileSync(__dirname + filePathToContacts, JSON.stringify(contacts));
        res.send({data: contact, message: 'contact has been deleted'});
    } else {
        res.send('not found contact');
    }

    // Contact.remove({_id: req.params.contactID}, (err, contact) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json({message:'successfuly deleted contact'})
    // })
}

module.exports = {
    addNewContact,
    getContacts,
    getContactByID,
    deleteContact,
    updateContact
}



