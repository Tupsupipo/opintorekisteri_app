# Ankkalinnan opintorekisteri ja sen API rajapinta.
Tässä projektissa oli tarkoituksena luoda opintorekisteri ja REST-api rajapinta sen käyttämiseksi. Projekti toteteutettiin sijoittamalla tietokanta ja node/express palvelin pilveen.

## Ohjelman käyttäminen 
Tietokannassa on kiinnostuksen kohteena seuraavat kuvitteellista tietoa sisältävät taulut:

/opiskelija
/opintojakso
/arviointi

Kyseisten taulujen tietoja voidaan tarkkailla esim. Posmanilla tai vastaavalla sovelluksella. Tietoja haetaan tyylillä <osoite:3000>/<taulun nimi>. 
Tauluista voidaan myös hakea yksittäisiä taulukoita viitaten taulun pää-avaimen id numeroon: esim. <osoite:3000>/<taulun nimi>/<id>. 

Rajapinnan avulla tietokannasta pystytään hakemaan, lisäämään, poistamaan ja muokkaamaan tietoja ja näin ollen se tukee seuraavia komentoja:

GET             Kaikkien taulun tietojen lukeminen.                 
GET /ID         Yksittäisen tietueen lukeminen ID:n perusteella.    
POST            Tietueen lisääminen tietokantaan.                   
DELETE          Tietueen poistaminen ID:n perusteella.              
PUT             Tietueen päivittäminen ID:n perusteella.            

Tietokannasta löytyy myös aliohjelma, jolla voidaan hakea kaikki tietyn opiskelijan suoritukset opiskelija_id:n avulla. Tätä voidaan kutsua GET komennolla /haesuoritukset/id.'


Tietokanta on suojattu token autentikoinnilla. Sen käyttämiseksi vaaditaan tunnuksien luominen user tauluun, sekä kirjautuminen sisään. Tämä onnistuu lähettämällä POST:illa username ja password .json formaatissa /login:iin, josta saa paluu vastauksena tokenin, joka lähetetään komentojen headerin mukana kyselyjä tehdessä. 

## Tietokannan ER-diagrammi:

![ER‑diagrammi](ER-diagram.png)