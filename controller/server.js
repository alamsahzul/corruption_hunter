// memuat modul exprres
const express     = require('express');
//menginstansiasi modul exprres
const app         = express();
// deklarasi path
const path        = require('path');

// deklarasi lokasi view
app.set('views', path.join(__dirname, '../view'));
//deklarasi engine default
app.set('view engine', 'ejs');
// deklarasi lokasi public
app.use(express.static(path.join(__dirname,'public')))

// memanggil funsi listen untuk mengaktifka server
app.listen(3000, function()
{
  console.log("We are ready to hunt")
});


app.get('/', function(req, res){
  res.render('index', {title:"Corruption Hunter"});
});
