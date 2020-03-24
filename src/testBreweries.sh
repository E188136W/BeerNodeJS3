#!/bin/sh

#Affichage des brasseries
#echo '------------------------------------------------------------------------------'
#echo "Affichage des Brasseries"
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery
#echo
#echo '------------------------------------------------------------------------------'
#echo "Affichage de la premiÃ¨re brassserie"
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery/1
#echo
#echo '------------------------------------------------------------------------------'
#echo "Affichage d'une brewery inexistante"
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery/12234

#echo
#echo '------------------------------------------------------------------------------'
body='{"id":1500,"breweries":"(512) Brewing Company","address1":"407 Radam, F200","address2":"","city":"Austin","state":"Texas","code":"78745","country":"United States","phone":"512.707.2337","website":"http://512brewing.com/","filepath":"","descript":"","last_mod":"2010-07-22T22:00:20+02:00","coordinates":"30.2234,-97.7697"}'
echo "Creation de la brasserie $body"
curl --noproxy "*" -H "Content-Type: application/json"  -X POST -d $body http://localhost:3000/api/brewery/
#echo
#echo '------------------------------------------------------------------------------'
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery/1
#body='{"id":1,"breweries":"Demo","adresse1":"ouin","adresse2":"","city":"Nantes","state":"LoireAtlantique","country":"France","phone":"0011223344","website":"perdu.com","filepath":"jenesaispas","descript":"Trèsbonnebrasserie","lastMod":"2020-03-18","coordinates":""}'
#echo "Creation d'un double la Brasserie $body"
#curl --noproxy "*" -H "Content-Type: application/json"  -X POST -d $body http://localhost:3000/api/brewery/
#echo
#echo '------------------------------------------------------------------------------'
#body='{"id":100,"breweries":"Demon","address1":"407Radam ","address2":"","city":"Austin","state":"Texas","code":"78745","country":"UnitedStates","phone":"512.707.2337","website":"http://512brewing.com/","filepath":"","descript":"(512)BrewingCompanyisamicrobrewery.","lastMod":"2010-07-22T22:00:20+02:00","coordinates":"30.2234,-97.7697"}'
#echo "Mise Ã  jour de la brasserie 100 : $body"
#curl --noproxy "*" -H "Content-Type: application/json"  -X PUT -d $body http://localhost:3000/api/brewery/100

#echo
#echo '------------------------------------------------------------------------------'
#echo "Affichage de la Brasserie 100"
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery/100
#echo
#echo '------------------------------------------------------------------------------'
#echo "Suppression de la Brasserie 100"
#curl --noproxy "*" -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/brewery/100
#echo
#echo
#echo '------------------------------------------------------------------------------'
#echo "Suppression d'une Brasserie inexistante 1234"
#curl --noproxy "*" -H "Content-Type: application/json" -X DELETE http://localhost:3000/api/brewery/1234
#echo
#echo '------------------------------------------------------------------------------'
#echo "Affichage de la Brasserie 100"
#curl --noproxy "*" -H "Content-Type: application/json" -X GET http://localhost:3000/api/brewery/100
#echo

