# Finna

local/config/vufind/LocationService.ini
themes/custom/js/custom.js
themes/custom/scss/custom.scss
themes/custom/templates/Helpers/holding-callnumber.phtml
korvaa rivin 14 sisältö:
<a class="location-service <?=$this->locationServiceModal ? ' location-service-modal' : ''?>" href="<?=$this->locationServiceUrl?>"<?=$this->locationServiceModal ? ' data-lightbox-href="' . $this->url('locationservice-modal') . '?callnumber=' . urlencode(($this->callnumber instanceof \VuFind\I18n\TranslatableString) ? $this->callnumber->getDisplayString() : $this->callnumber) . '&amp;collection=' . urlencode($this->collection ?? '') . '&amp;location=' . urlencode($this->location ?? '') . '&amp;title=' . urlencode($this->title) . '&amp;source=' . urlencode($this->source) : '' ?>" target="location-service"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>
tällä:
<a class="location-service" data-lightbox href="<?=$this->locationServiceUrl ?>"><?=$this->icon('location-service', 'location-service-icon') ?> <?=$this->transEsc($this->callnumber)?></a>

