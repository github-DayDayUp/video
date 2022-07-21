const express=require('express')
const app = express()
const ejs=require('ejs')

app.engine('html',ejs.__express)
app.set('view engine', 'html')
app.use(express.static('public'))
app.set('views', 'public')
app.get('/',(req,res)=>{
    res.render('video.html')
})
app.listen(process.env.PORT||3000)