# Sijaintitoiminto

## Käyttöönotto

Ennen vaihetta 5., jolla toiminto asetetaan käyttöön, muokkaa Editointi-kohdassa kuvatulla tavalla kirjastojen aineistojen sijaintitietoja.  

1. Lisää tiedostot kartta.phtml ja karttaedit.phtml näkymäsi kansioon themes/custom/templates/content  
Muuta tiedostopolut tiedostoissa vastaamaan omaa näkymääsi.  
kartta.phtml:  
&nbsp;&nbsp;riveillä 18 ja 19 korvaa replace/replace muodossa organisaatio/näkymän nimi (näet ne mm. tiedostonhallinnan kansiorakenteesta)  
karttaedit.phtml:  
&nbsp;&nbsp;riveillä 9 ja 10 korvaa replace/replace muodossa organisaatio/näkymän nimi  
&nbsp;&nbsp;riveillä 909 ja 910 korvaa replace näkymän nimellä  
Lisää karttaedit.phtml:ssä riville 16 valitsemasi salasanan hash. 

3. Lisää tiedoston kartta.js sisältö joko näkymäsi tiedostoon themes/custom/js/custom.js  
tai lisää se uutena javascript-tiedostona ja lisää siitä tieto tiedostoon themes/custom/theme.config.php  
Ohje: https://www.kiwi.fi/spaces/Finna/pages/452002244/JavaScript+sivupohjissa#JavaScriptsivupohjissa-N%C3%A4kym%C3%A4nsis%C3%A4isenskriptinlis%C3%A4%C3%A4minen

4. Lisää tiedoston custom.scss sisältö näkymäsi tiedostoon themes/custom/scss/custom.scss

5. Ylikirjoita näkymäsi tiedosto themes/finna2/templates/Helpers/holding-callnumber.phtml  
ja korvaa custom-puolella siitä rivin 14 sisältö:  
<a class="location-service <?=$this->locationServiceModal ? ' location-service-modal' : ''?>" href="<?=$this->locationServiceUrl?>"<?=$this->locationServiceModal ? ' data-lightbox-href="' . $this->url('locationservice-modal') . '?callnumber=' . urlencode(($this->callnumber instanceof \VuFind\I18n\TranslatableString) ? $this->callnumber->getDisplayString() : $this->callnumber) . '&amp;collection=' . urlencode($this->collection ?? '') . '&amp;location=' . urlencode($this->location ?? '') . '&amp;title=' . urlencode($this->title) . '&amp;source=' . urlencode($this->source) : '' ?>" target="location-service"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>  
tällä:  
<a class="location-service" data-lightbox href="<?=$this->locationServiceUrl ?>"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>

6. Lisää tiedoston LocationService.ini sisältö näkymäsi tiedostoon  
local/config/vufind/LocationService.ini

##Editointi

