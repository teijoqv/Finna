# Sijaintitoiminto

## Käyttöönotto

Ennen vaihetta 5., jolla toiminto asetetaan käyttöön, muokkaa Editointi-kohdassa kuvatulla tavalla kirjastojen aineistojen sijaintitietoja.  

1. Lisää tiedostot kartta.phtml ja karttaedit.phtml näkymäsi kansioon themes/custom/templates/content  
Muuta tiedostopolut tiedostoissa vastaamaan omaa näkymääsi.  
kartta.phtml:  
&nbsp;&nbsp;riveillä 18 ja 19 korvaa replace/replace muodossa _organisaatio_/_näkymän nimi_ (näet ne mm. tiedostonhallinnan kansiorakenteesta)  
karttaedit.phtml:  
&nbsp;&nbsp;riveillä 9 ja 10 korvaa replace/replace muodossa _organisaatio_/_näkymän nimi_  
&nbsp;&nbsp;riveillä 909 ja 910 korvaa replace näkymän nimellä  
Lisää karttaedit.phtml:ssä riville 16 lainausmerkkien sisään valitsemasi salasana hashkoodattuna. Voit selvittää salasanan hashkoodin esim. täältä löytyvällä pw.phtml-tiedostolla (lisää se näkymäsi content-kansioon ja mene sitten sivulle normaaliin tapaan). Toiminnossa ei siis ole erillisiä käyttäjätunnuksia, mutta se olisi ainakin jonkinlaisena mahdollista toteuttaa pienin lisäyksin.

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

6. Lisää tiedoston LocationService.ini sisältö näkymäsi tiedostoon  
local/config/vufind/LocationService.ini

## Editointi

Mene osoitteeseen _organisaatio_.finna-pre.fi/content/karttaedit  
Kirjoita salana ja kirjaudu sisään.

Lisää aukeavalla sivulla kirjastoyksiköitä, osastoja, aineistolajeja ja sijainteja. Yksiköiden, osastojen ja sijaintien eri kielineen täytyy olla kirjoitettuna samassa muodossa kuin kirjastojärjestelmässä. Aineistolajien täytyy olla samassa muodossa kuin Finnassa on teostiedoissa. Hakurajaimessa näkyy sellaisiakin termejä, joita teoksilla itsellään ei ole - esim. aineistolajia videopeli ei teoksilla ole, vaan sen sijaan PlayStation jne. Videopelien osalta kannaattakin lisätä esim. aineistolajit Nintendo, PlayStation ja Xbox ja käyttää niitä aineiston sijoittelun määrittämiseen. Koodi toimii niin, että jos aineistolajin tarkemmassa muodossa on välilyönti määritetyn nimen jälkeen, esim. "PlayStation 5", otetaan se mukaan määritykseen. Jos väliyöntiä ei ole, esim. "CD-äänikirja", ei se tule mukaan aineistolajin "CD" määritykseen. Siten erityisesti videopelit saa yksinkertaisemmin määritettyä, mutta äänikirjat eivät mene CD:en kanssa sekaisin.

Anna kirjastoyksiköille lisäksi sääntöryhmän nimi. Sen kannattaa perustua jotenkin kirjaston nimeen, jottei eri yksiköille vahingossa käytettäisi samaa, mutta muuten sillä ei ole väliä. Jos sääntöryhmän nimen vaihtaa myöhemmin, jää vanhat asetukset muistiin vanhan nimen alle, mitä voi hyödyntää esim. testatessa tai poikkeavia väliaikaisia sääntöjä luodessa.

