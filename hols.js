const mongoose = require('mongoose')
const urlbd="mongodb://localhost:27017/nombrealabase"

mongoose.connect(urlbd)
.then(() => {
    console.log('si jala')
})
.catch((error) => {
    console.log('no jala')
})

const esquema = new mongoose.Schema({
    name: {
        type:String
    }
})

const modelo= new mongoose.model('tabla', esquema )
modelo.create({
    name: "alex"
})

const modelo1= new mongoose.model('tabla', esquema )
modelo1.create({
    name: "erik"
})

const modelo2= new mongoose.model('tabla', esquema )
modelo2.create({
    name: "santi"
})

const modelo3= new mongoose.model('tabla', esquema )
modelo3.create({
    name: "luisa"
})