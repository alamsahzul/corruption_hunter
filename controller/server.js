// memuat modul exprres
const express     = require('express');
//menginstansiasi modul exprres
const app         = express();
// deklarasi path
const path        = require('path');

// deklarasi lokasi css/js/img dll
app.use(express.static(path.join(__dirname,'../public')));

console.log((path.join(__dirname,'../public/css/custom.css')));

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

app.get('/about', function(req, res){
  res.render('about', {title:"Corruption Hunter"});
});
app.get('/regulation', function(req, res){
  res.render('regulation', {title:"Corruption Hunter"});
});
app.get('/help', function(req, res){
  res.render('help', {title:"Corruption Hunter"});
});
app.get('/map', function(req, res){
  res.render('map', {title:"Corruption Hunter"});
});
app.get('/signin', function(req, res){
  res.render('signin', {title:"Corruption Hunter"});
});
app.get('/faq', function(req, res){
  res.render('faq', {title:"Corruption Hunter"});
});


// Pilih role berdasarkan hasil login, apakah sebagai member, admin kabupaten ataupun admin desa
app.post('/signin', function(req, res){

  let role = req.body.parser;

  if (role == 'kab'){
    res.render('admin/kab/index', {title:"Kab Page"});
  }
  else if(role == 'desa' ) {
    res.render('admin/desa/index', {title:"Desa Page"});
  }
  else if (role == 'member'){
    res.render('admin/index', {title:"Member Page"});
  }

});

// halaman utama admin kabupaten
app.get('/admin/kab', function(req, res){
  res.render('admin/kab/index', {title:"Corruption Hunter"});
});

// halaman utama admin desa
app.get('/admin/desa', function(req, res){
  res.render('admin/desa/index', {title:"Corruption Hunter"});
});

// halaman utama member
app.get('/admin', function(req, res){
  res.render('admin/index', {title:"Corruption Hunter"});
});
