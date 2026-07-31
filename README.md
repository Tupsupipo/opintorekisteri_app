# Ankkalinnan opintorekisteri ja sen API rajapinta.
Tässä projektissa oli tarkoituksena luoda opintorekisteri ja REST-api rajapinta sen käyttämiseksi. Projekti toteteutettiin sijoittamalla tietokanta ja node/express palvelin pilveen.

## Ohjelman käyttäminen 
Tietokannassa on kiinnostuksen kohteena seuraavat kuvitteellista tietoa sisältävät taulut:

/opiskelija
/opintojakso
/arviointi

Kyseisten taulujen tietoja voidaan tarkkailla esim. selaimella <osoite:3000>/<taulun nimi>. 
Tauluista voidaan myös hakea yksittäisiä taulukoita viitaten taulun pää-avaimen id numeroon: esim. <osoite:3000>/<taulun nimi>/<id>. 

Rajapinnan avulla tietokannasta pystytään hakemaan, lisäämään, poistamaan ja muokkaamaan tietoja ja se tukee seuraavia komentoja:

GET             Kaikkien taulun tietojen lukeminen.                 Onnistuu myös selaimella.
GET /ID         Yksittäisen tietueen lukeminen ID:n perusteella.    Onnistuu myös selaimella.
POST            Tietueen lisääminen tietokantaan.                   Tarvitaan esim. postman tai vastaava
DELETE          Tietueen poistaminen ID:n perusteella.              Tarvitaan esim. postman tai vastaava
PUT             Tietueen päivittäminen ID:n perusteella.            Tarvitaan esim. postman tai vastaava

Tietokannasta löytyy myös aliohjelma, jolla voidaan hakea kaikki tietyn opiskelijan suoritukset opiskelija_id:n avulla. Tätä voidaan kutsua GET komennolla /haesuoritukset/id.'


Tietokanta on suojattu token autentikoinnilla. Sen käyttämiseksi vaaditaan tunnuksien luominen user tauluun, sekä kirjautuminen sisään. Tämä onnistuu lähettämällä username ja password .json formaatissa /login, josta saa paluu vastauksena tokenin. 