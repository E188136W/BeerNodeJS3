var express = require("express");
var session = require("cookie-session"); // Charge le middleware de sessions
var bodyParser = require("body-parser"); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

/* On utilise les sessions */
app
  .use(session({ secret: "todotopsecret" }))

  /* S'il n'y a pas de todolist dans la session,
    on en crée une vide sous forme d'array avant la suite */
  .use(function(req, res, next) {
    if (typeof req.session.todolist == "undefined") {
      req.session.todolist = [];
    }
    next();
  })

  /* On affiche la todolist et le formulaire */
  .get("/todo", function(req, res) {
    res.render("test.html", { todolist: req.session.todolist });
  })
  /*On affiche une bière selon le degré */
  .get("/beer/deg/:deg", function(req, res) {
    res.render("test.html", "truc afficher dans le form");
  })

  /* On ajoute un élément à la todolist 
    .post('/beer/ajouter/', urlencodedParser, function(req, res) {
        if (req.body.newtodo != '') {
            req.session.todolist.push(req.body.newtodo);
        }
        res.redirect('/beer');
    })*/

  /* Supprime un élément de la todolist 
    .get('/beer/supprimer/:id', function(req, res) {
        if (req.params.id != '') {
            req.session.todolist.splice(req.params.id, 1);
        }
        res.redirect('/beer');
    })*/

  /* On redirige vers la todolist si la page demandée n'est pas trouvée */
  .use(function(req, res, next) {
    res.redirect("/beer");
  })

  .listen(3000);
