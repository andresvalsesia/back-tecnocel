const { assert } = require('chai')

const request = require('supertest')

const app = require('../server')//importamos app a travez de server


// describe('Prueba productos', function () {
//     console.log('hasta aca llego uno')
//     it('La respuesta de los productos es un objeto', function (done) {
//         request(app)
//             .get('/products')
//             .then(response => {
//                 console.log('hasta aca llego dos')
//                 console.log(response.statusCode)
//                 return done();
                
//             })
//             // console.log('hasta aca llego tres')
//     })


describe('Trear usuarios', function () {
    // console.log('hasta aca llego uno')
    
        let logedUser = {
            email: "admin@gmail.com",
            password: "admin123",
            from: "from-signup"
        }
        it('logueo exitoso', function (done) {
            request(app)
                .post('/auth/login')
                .send({logedUser})
                .expect(200, done)
        })
        
    })

    it('la respuesta de los usuarios es un objeto', function (done) {
        request(app).get('/alluser')
            .then(response => {
                assert.isObject(response.body)
                return done();
            })
    })

    



    // it('No se encontro producto', function (done) {
    //     request(app).get('product/62d4998eff1ddcd2a5a8f0ce')
    //     .then(response => {
    //         console.log(response.body)
    //         return done();
    //     })      
    

    // it('Se encontro producto', function (done) {
    //     request(app).get('/product/62d4998eff1ddcd2a5a8f0ce')
    //     .expect(200, done)       
    // })


// })

















 // it('Retorna un objeto con el id  del post', function (done) {
    //     request(app)
    //         .post('/product/:id')
    //         .send({ text: "hola" })
    //         .then(response => {//la respuesta debe ser un objeto
    //             assert.isObject(response.body)
    //             assert.isString(response.body._id)
    //             return done()

    //         }).catch(err => {
    //             return done(err)
    //         })

    // })
