# Sijaintitoiminto

## Käyttöönotto

Viimeistään ennen vaihetta 6., jolla toiminto asetetaan käyttöön, muokkaa Editointi-kohdassa kuvatulla tavalla kirjastojen aineistojen sijaintitietoja.  

1. Lisää tiedostot kartta.phtml ja karttaedit.phtml näkymäsi kansioon themes/custom/templates/content  
Muuta tiedostopolut tiedostoissa vastaamaan omaa näkymääsi.  
kartta.phtml:  
&nbsp;-&nbsp;riveillä 19 ja 20 korvaa replace/replace muodossa _organisaatio_/_näkymän nimi_ (näet ne mm. tiedostonhallinnan kansiorakenteesta)  
karttaedit.phtml:  
&nbsp;-&nbsp;riveillä 9 ja 10 korvaa replace/replace muodossa _organisaatio_/_näkymän nimi_  
&nbsp;-&nbsp;riveillä 915 ja 916 korvaa replace näkymän nimellä  
Lisää karttaedit.phtml:ssä riville 16 lainausmerkkien sisään valitsemasi salasana hashkoodattuna. Voit selvittää hashkoodin esim. täältä löytyvällä pw.phtml-tiedostolla (lisää se näkymäsi content-kansioon ja mene sitten sivulle: _organisaatio_.finna-pre.fi/content/pw ja kopioi sieltä saatu koodi). Muista valita riittävän vahva salasana! Toiminnossa ei siis ole erillisiä käyttäjätunnuksia, mutta se olisi luultavasti ainakin jonkinlaisena mahdollista toteuttaa ilman suuria muutoksia.

2. Lisää tiedoston kartta.js sisältö joko näkymäsi tiedostoon themes/custom/js/custom.js  
tai lisää se uutena javascript-tiedostona ja lisää siitä tieto tiedostoon themes/custom/theme.config.php  
Ohje: https://www.kiwi.fi/spaces/Finna/pages/452002244/JavaScript+sivupohjissa#JavaScriptsivupohjissa-N%C3%A4kym%C3%A4nsis%C3%A4isenskriptinlis%C3%A4%C3%A4minen

3. Lisää tiedoston custom.scss sisältö näkymäsi tiedostoon themes/custom/scss/custom.scss

4. Ylikirjoita näkymäsi tiedosto themes/finna2/templates/Helpers/holding-callnumber.phtml  
ja korvaa custom-puolella siitä rivin 14 sisältö:
```
<a class="location-service <?=$this->locationServiceModal ? ' location-service-modal' : ''?>" href="<?=$this->locationServiceUrl?>"<?=$this->locationServiceModal ? ' data-lightbox-href="' . $this->url('locationservice-modal') . '?callnumber=' . urlencode(($this->callnumber instanceof \VuFind\I18n\TranslatableString) ? $this->callnumber->getDisplayString() : $this->callnumber) . '&amp;collection=' . urlencode($this->collection ?? '') . '&amp;location=' . urlencode($this->location ?? '') . '&amp;title=' . urlencode($this->title) . '&amp;source=' . urlencode($this->source) : '' ?>" target="location-service"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>  
```
tällä:  
```
<a class="location-service" data-lightbox href="<?=$this->locationServiceUrl ?>"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>
```

5. Lisää käännöstekstit näkymääsi tiedostosta kaannokset.txt  
Voit muutella tekstejä haluamaasi muotoon.

6. Lisää tiedoston LocationService.ini sisältö näkymäsi tiedostoon  
local/config/vufind/LocationService.ini

## Editointi

Mene osoitteeseen _organisaatio_.finna-pre.fi/content/karttaedit  
Kirjoita salasana ja kirjaudu sisään.

Lisää aukeavalla sivulla kirjastoyksiköitä, osastoja, aineistolajeja ja sijainteja. Yksiköiden, osastojen ja sijaintien eri kielineen täytyy olla kirjoitettuna samassa muodossa kuin kirjastojärjestelmässä. Aineistolajien täytyy olla samassa muodossa kuin Finnassa on teostiedoissa. Hakurajaimessa näkyy sellaisiakin kattotermejä, joita teoksilla itsellään ei ole - esim. aineistolajia videopeli ei teoksilla ole, vaan sen sijaan PlayStation 5 jne. Videopelien osalta kannaattakin lisätä esim. aineistolajit Nintendo, PlayStation ja Xbox ja käyttää niitä aineiston sijoittelun määrittämiseen. Koodi toimii niin, että jos aineistolajin tarkemmassa muodossa on välilyönti määritetyn nimen jälkeen, esim. "PlayStation 5", otetaan se mukaan määritykseen "PlayStation". Jos välilyöntiä ei ole, esim. "CD-äänikirja", ei se tule mukaan aineistolajin "CD" määritykseen. Siten erityisesti videopelit saa yksinkertaisemmin määritettyä ja toisaalta äänikirjat eivät mene CD:iden kanssa sekaisin.

Anna kirjastoyksiköille lisäksi sääntöryhmän nimi. Sen kannattaa perustua jotenkin kirjaston nimeen, jottei eri yksiköille vahingossa käytettäisi samaa, mutta muuten sillä ei ole väliä. Jos sääntöryhmän nimen vaihtaa myöhemmin, jäävät vanhat asetukset muistiin vanhan nimen alle, mitä voi hyödyntää esim. testatessa tai poikkeavia väliaikaisia sääntöjä luodessa, koska ennestään määritetyt säännöt saa takaisin vaihtamalla vanhaan sääntöryhmän nimeen.

Yksikön muokkaustilassa voit lisätä pohjapiirroksia klikkaamalla ensin nappia "Valitse tiedosto" ja valinnan jälkeen nappia "Lataa". Plus-merkillä saa lisättyä sääntöjä. Säännöt käydään läpi ylhäältä alaspäin ja ensimmäistä tärppäävää käytetään sijainnin ilmoittamiseen, joten järjestys täytyy sen mukaisesti suunnitella niin, että saadaan haluttu lopputulos. Lisäksi voi muokata yksikön ja sääntöryhmän nimiä, valita värin ja sen peittävyyden paikkamerkinnöille sekä poistaa lisättyjä pohjapiirroksia.

Säännön muokkaustilassa aseta halutut ehdot kyseiselle aineistolle. Listoista voi valita useita vaihtoehtoja (tai poistaa viimeisenkin) Ctrl-nappi pohjassa. Kirjoitetut selitetekstit näkyvät asiakkaalle pohjapiirroksen (jos sellainen on valittu) yläpuolella. Jos muilta kieliltä jättää tekstin pois, näytetään niille suomenkielinen teksti (jos sellainenkaan on annettu), ellei kyseiselle kielelle kirjoita laatikkoon välilyöntiä. Pohjapiirros valitaan listasta. Sen voi myös jättää valitsematta, jos aineisto esim. on sellaisessa paikassa, johon asiakkaat eivät pääse. Eri kielille voi valita oman pohjapiirroksensa, jos ne esim. sisältävät tekstiä ja niistä on omat versiot eri kielille. Jos niille ei erikseen valitse pohjapiirrosta, käytetään suomenkielelle valittua. Jos kuvat ovat eri kielille saman kokoiset ja samalla tavalla asemoidut, saa suomenkieliselle tehdyt merkinnät kopioitua suoraan paikoilleen klikkaamalla "Tuo merkinnät suomenkielisestä" -nappia. 

Tehdyt muutokset tulevat voimaan julkiselle puolelle vasta kun näkymän julkaisee. Muutoksia voi kuitenkin hati tarkastella pre-puolella.

Ennen kuin toiminto otetaan julkisesti käyttöön, kannattaa se asettaa päälle johonkin testinäkymään, jossa voi tarkastella lopputulosta. Tee siis käyttöönotto oletusnäkymässä kohtien 1-5 osalta ja testinäkymässä kohdat 2-6 (kartta.phtml ja karttaedit.phtml eivät siinä silloin ole tarpeen, jos LocationService.ini osoittaa oletusnäkymään). Voit silloin käyttää editoria yllämainitussa osoitteessa, eli oletusnäkymän pre-puolella, ja tarkastella tulosta testinäkymässä. 

Siinä vaiheessa kun toiminto on jo otettu käyttöön, voi keskeneräisten yksiköiden tietojen näkymisen asiakkaille estää kirjoittamalla yksikön nimien perään ylimääräisen merkin, jolloin ne eivät täsmää mihinkään oikeaan yksikön nimeen eikä niitä näytetä. Silloin voi testinäkymään vaihtaa käytettäväksi karttatesti.phtml:n (minkä voi ennakoiden tehdä jo ennen käyttöönottoa), joka näyttää tiedot juuri myös tuollaisessa tilanteessa, että yksiköiden nimet vain alkavat oikein. Vaihda silloin testinäkymän LocationService.ini:iin osoitteeksi url = "/content/karttatesti?loc={location}&bra={branch}&dep={department}&cal={callno}&lan={lang}&own={owner}"  
Kun keskeneräinen yksikkö tulee valmiiksi, saa sen julkiseksi, kun ottaa ylimääräisen merkin pois ja julkaisee näkymän.
