var express = require("express");
var session = require("cookie-session"); // Charge le middleware de sessions
var bodyParser = require("body-parser"); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();
/*
bySearch: (search) => new Promise((resolve, reject) => {
  const PUNK_API_URL = `https://api.punkapi.com/v2/beers?beer_name=${search}&per_page=80`;

  fetch(PUNK_API_URL)
      .then(response => response.json())
      .then(jsonResponse => resolve(jsonResponse))
      .catch((err) => reject(err))
}),
*/
/* On utilise les sessions */

app.use(express.urlencodedParser);

/* S'il n'y a pas de todolist dans la session,
    on en crée une vide sous forme d'array avant la suite */
app.use(function(req, res, next) {
  if (typeof req.session.beerList == "undefined") {
    req.session.beerList = [];
  }
  next();
});

/* 
  axios.get(global.API + 'beers/' + global.API_KEY+'&styleId='+this.searchBox)
      .then((response)=>{
        console.log('beers/' + global.API_KEY+'&=styleId'+this.searchBox)
          this.resultSearch = response.data.data
        this.afficheBieresRandom = true
        this.afficheBieresRandom = false
      }).catch(e=> alert("bonjou"+e))
  */
//https://ji8sm.sse.codesandbox.io/api/beer/deg/11
//https://ji8sm.sse.codesandbox.io/api/beer/deg/seeDegBeer?seeDegBeer=11
app.get("api/beer/:id", function(req, res) {
  res.render("test.html", { beerList: req.session.beerList });
});

/* On affiche la todolist et le formulaire */
app.get("api/beer", function(req, res) {
  res.render("test.html", { beerList: req.session.beerList });
});
/*On affiche une bière selon le degré */
app.get("api/beer/deg/:deg", function(req, res) {
  res.render("test.html", { beerList: req.session.beerList });
});
/* On redirige vers la todolist si la page demandée n'est pas trouvée */
app
  .use(function(req, res, next) {
    res.redirect("api/beer");
  })

  .listen(3000);
