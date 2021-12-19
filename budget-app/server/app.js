if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use(router)

app.listen(PORT, () => {
    console.log(`Server app listening at ${PORT}`)
})