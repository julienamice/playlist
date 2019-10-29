var express = require('express');
var router = express.Router();

var musicList = [
  {type: 'pop', title: 'Wannabe', artist:'Spice Girls' , year: 1996 },
  {type: 'pop', title: 'Thriller', artist:'Michael Jackson' , year: 1983 },
  {type: 'rock', title: 'God Save the Queen', artist:'The Sex Pistols' , year: 1977 },
  {type: 'rnb', title: 'Be with you', artist:'Mary J. Blige' , year: 2005 },
  {type: 'pop', title: 'Shape of you', artist:'Ed Sheeran' , year: 2017 },
  {type: 'rock', title: 'Shockwave', artist:'Liam Gallagher' , year: 2017 },
  {type: 'rnb', title: 'Empire State of Mind', artist:'Alicia keys' , year: 2009 },
  {type: 'rock', title: 'Numb', artist:'Linkin park' , year: 2003 },
  {type: 'rnb', title: 'Shut up', artist:'The Black Eyed Peas' , year: 2009 }
]

var filterPop = 0;
var filterRock = 0;
var filterRnb = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {musicList});
});

router.get('/my-playlist', function(req, res, next) {

  res.render('playlist');
});

router.get('/add-title', function(req, res, next) {
  if(req.session.myPlaylist == undefined){
    req.session.myPlaylist = []
  }

  req.session.myPlaylist.push(
    { title: req.query.title,
      artist: req.query.artist,
      year: req.query.year }
  )
  res.render('playlist' , {myPlaylist:req.session.myPlaylist});
});

router.get('/delete-title', function(req, res, next) {
  req.session.myPlaylist.splice(req.session.myPlaylist[req.query.position], 1)
  res.render('playlist' , {myPlaylist:req.session.myPlaylist});
});

router.get('/pop', function(req, res, next) {
  if(filterPop%2 == 0 ) {
    filterPop++;
    res.render('index' , {musicList});
  }
 else {
  function filterList(obj) {
      if(obj.type == req.query.type){
        return true;
      } else {
        return false
      }
  }
  filterPop++;
  filterList = musicList.filter(filterList)
  res.render('index' , {musicList: filterList});
  } 
});

router.get('/rock', function(req, res, next) {
  if(filterRock%2 == 0 ) {
    filterRock++;
    res.render('index' , {musicList});
  }
 else {
  function filterList(obj) {
      if(obj.type == req.query.type){
        return true;
      } else {
        return false
      }
  }
  filterRock++;
  filterList = musicList.filter(filterList)
  res.render('index' , {musicList: filterList});
  } 
});

router.get('/rock', function(req, res, next) {
  if(filterRnb%2 == 0 ) {
    filterRnb++;
    res.render('index' , {musicList});
  }
 else {
  function filterList(obj) {
      if(obj.type == req.query.type){
        return true;
      } else {
        return false
      }
  }
  filterRnb++;
  filterList = musicList.filter(filterList)
  res.render('index' , {musicList: filterList});
  } 
});



module.exports = router;
