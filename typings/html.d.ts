export {};

declare global {
  namespace JSX {
    interface AriaAttributes {
      'aria-activedescendant'?: string;
      'aria-atomic'?: 'true';
      'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
      'aria-busy'?: 'true';
      'aria-checked'?: 'false' | 'mixed' | 'true';
      'aria-colcount'?: number | string;
      'aria-colindex'?: number | string;
      'aria-colspan'?: number | string;
      'aria-controls'?: string;
      'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
      'aria-describedby'?: string;
      'aria-details'?: string;
      'aria-disabled'?: 'true' | 'false';
      'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
      'aria-errormessage'?: string;
      'aria-expanded'?: 'true' | 'false';
      'aria-flowto'?: string;
      'aria-grabbed'?: 'true' | 'false';
      'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
      'aria-hidden'?: 'true' | 'false';
      'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
      'aria-keyshortcuts'?: string;
      'aria-label'?: string;
      'aria-labelledby'?: string;
      'aria-level'?: number;
      'aria-live'?: 'off' | 'assertive' | 'polite';
      'aria-modal'?: 'true' | 'false';
      'aria-multiline'?: 'true' | 'false';
      'aria-multiselectable'?: 'true' | 'false';
      'aria-orientation'?: 'horizontal' | 'vertical';
      'aria-owns'?: string;
      'aria-placeholder'?: string;
      'aria-posinset'?: number;
      'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
      'aria-readonly'?: 'true' | 'false';
      'aria-relevant'?:
        | 'additions'
        | 'additions removals'
        | 'additions text'
        | 'all'
        | 'removals'
        | 'removals additions'
        | 'removals text'
        | 'text'
        | 'text additions'
        | 'text removals';
      'aria-required'?: 'true' | 'false';
      'aria-roledescription'?: string;
      'aria-rowcount'?: number;
      'aria-rowindex'?: number;
      'aria-rowspan'?: number;
      'aria-selected'?: 'true' | 'false';
      'aria-setsize'?: number;
      'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
      'aria-valuemax'?: number;
      'aria-valuemin'?: number;
      'aria-valuenow'?: number;
      'aria-valuetext'?: string;
    }

    interface GlobalEventHandlers {
      onabort?: string;
      onanimationcancel?: string;
      onanimationend?: string;
      onanimationiteration?: string;
      onanimationstart?: string;
      onauxclick?: string;
      onblur?: string;
      oncancel?: string;
      oncanplay?: string;
      oncanplaythrough?: string;
      onchange?: string;
      onclick?: string;
      onclose?: string;
      oncontextmenu?: string;
      oncuechange?: string;
      ondblclick?: string;
      ondrag?: string;
      ondragend?: string;
      ondragenter?: string;
      ondragexit?: string;
      ondragleave?: string;
      ondragover?: string;
      ondragstart?: string;
      ondrop?: string;
      ondurationchange?: string;
      onemptied?: string;
      onended?: string;
      onerror?: string;
      onfocus?: string;
      onformdata?: string;
      ongotpointercapture?: string;
      oninput?: string;
      oninvalid?: string;
      onkeydown?: string;
      onkeypress?: string;
      onkeyup?: string;
      onload?: string;
      onloadeddata?: string;
      onloadedmetadata?: string;
      onloadend?: string;
      onloadstart?: string;
      onlostpointercapture?: string;
      onmousedown?: string;
      onmouseenter?: string;
      onmouseleave?: string;
      onmousemove?: string;
      onmouseout?: string;
      onmouseover?: string;
      onmouseup?: string;
      onmousewheel?: string;
      onpause?: string;
      onplay?: string;
      onplaying?: string;
      onpointercancel?: string;
      onpointerdown?: string;
      onpointerenter?: string;
      onpointerleave?: string;
      onpointermove?: string;
      onpointerout?: string;
      onpointerover?: string;
      onpointerrawupdate?: string;
      onpointerup?: string;
      onprogress?: string;
      onratechange?: string;
      onreset?: string;
      onresize?: string;
      onscroll?: string;
      onsecuritypolicyviolation?: string;
      onseeked?: string;
      onseeking?: string;
      onselect?: string;
      onselectionchange?: string;
      onselectstart?: string;
      onshow?: string;
      onslotchange?: string;
      onstalled?: string;
      onsubmit?: string;
      onsuspend?: string;
      ontimeupdate?: string;
      ontouchcancel?: string;
      ontouchend?: string;
      ontouchmove?: string;
      ontouchstart?: string;
      ontransitioncancel?: string;
      ontransitionend?: string;
      ontransitionrun?: string;
      ontransitionstart?: string;
      onvolumechange?: string;
      onwaiting?: string;
      onwheel?: string;
    }

    interface LogicfulTemplatesCustomAttributes {
      $innerHTML?: string;
      $customAttributes?: { [customAttributeName: string]: string | number | boolean };
    }

    interface GlobalAttributes extends AriaAttributes, GlobalEventHandlers, LogicfulTemplatesCustomAttributes {
      accesskey?: string;
      autocapitalize?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
      autofocus?: boolean;
      class?: string;
      contenteditable?: boolean | 'true' | 'false';
      dir?: 'ltr' | 'rtl' | 'auto';
      draggable?: 'true' | 'false';
      enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
      hidden?: boolean;
      id?: string;
      inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
      is?: string;
      itemid?: string;
      itemprop?: string;
      itemref?: string;
      itemscope?: string;
      itemtype?: string;
      lang?:
        | 'af'
        | 'af-ZA'
        | 'ar'
        | 'ar-AE'
        | 'ar-BH'
        | 'ar-DZ'
        | 'ar-EG'
        | 'ar-IQ'
        | 'ar-JO'
        | 'ar-KW'
        | 'ar-LB'
        | 'ar-LY'
        | 'ar-MA'
        | 'ar-OM'
        | 'ar-QA'
        | 'ar-SA'
        | 'ar-SY'
        | 'ar-TN'
        | 'ar-YE'
        | 'az'
        | 'az-AZ'
        | 'az-Cyrl-AZ'
        | 'be'
        | 'be-BY'
        | 'bg'
        | 'bg-BG'
        | 'bs-BA'
        | 'ca'
        | 'ca-ES'
        | 'cs'
        | 'cs-CZ'
        | 'cy'
        | 'cy-GB'
        | 'da'
        | 'da-DK'
        | 'de'
        | 'de-AT'
        | 'de-CH'
        | 'de-DE'
        | 'de-LI'
        | 'de-LU'
        | 'dv'
        | 'dv-MV'
        | 'el'
        | 'el-GR'
        | 'en'
        | 'en-AU'
        | 'en-BZ'
        | 'en-CA'
        | 'en-CB'
        | 'en-GB'
        | 'en-IE'
        | 'en-JM'
        | 'en-NZ'
        | 'en-PH'
        | 'en-TT'
        | 'en-US'
        | 'en-ZA'
        | 'en-ZW'
        | 'eo'
        | 'es'
        | 'es-AR'
        | 'es-BO'
        | 'es-CL'
        | 'es-CO'
        | 'es-CR'
        | 'es-DO'
        | 'es-EC'
        | 'es-ES'
        | 'es-GT'
        | 'es-HN'
        | 'es-MX'
        | 'es-NI'
        | 'es-PA'
        | 'es-PE'
        | 'es-PR'
        | 'es-PY'
        | 'es-SV'
        | 'es-UY'
        | 'es-VE'
        | 'et'
        | 'et-EE'
        | 'eu'
        | 'eu-ES'
        | 'fa'
        | 'fa-IR'
        | 'fi'
        | 'fi-FI'
        | 'fo'
        | 'fo-FO'
        | 'fr'
        | 'fr-BE'
        | 'fr-CA'
        | 'fr-CH'
        | 'fr-FR'
        | 'fr-LU'
        | 'fr-MC'
        | 'gl'
        | 'gl-ES'
        | 'gu'
        | 'gu-IN'
        | 'he'
        | 'he-IL'
        | 'hi'
        | 'hi-IN'
        | 'hr'
        | 'hr-BA'
        | 'hr-HR'
        | 'hu'
        | 'hu-HU'
        | 'hy'
        | 'hy-AM'
        | 'id'
        | 'id-ID'
        | 'is'
        | 'is-IS'
        | 'it'
        | 'it-CH'
        | 'it-IT'
        | 'ja'
        | 'ja-JP'
        | 'ka'
        | 'ka-GE'
        | 'kk'
        | 'kk-KZ'
        | 'kn'
        | 'kn-IN'
        | 'ko'
        | 'ko-KR'
        | 'kok'
        | 'kok-IN'
        | 'ky'
        | 'ky-KG'
        | 'lt'
        | 'lt-LT'
        | 'lv'
        | 'lv-LV'
        | 'mi'
        | 'mi-NZ'
        | 'mk'
        | 'mk-MK'
        | 'mn'
        | 'mn-MN'
        | 'mr'
        | 'mr-IN'
        | 'ms'
        | 'ms-BN'
        | 'ms-MY'
        | 'mt'
        | 'mt-MT'
        | 'nb'
        | 'nb-NO'
        | 'nl'
        | 'nl-BE'
        | 'nl-NL'
        | 'nn-NO'
        | 'ns'
        | 'ns-ZA'
        | 'pa'
        | 'pa-IN'
        | 'pl'
        | 'pl-PL'
        | 'ps'
        | 'ps-AR'
        | 'pt'
        | 'pt-BR'
        | 'pt-PT'
        | 'qu'
        | 'qu-BO'
        | 'qu-EC'
        | 'qu-PE'
        | 'ro'
        | 'ro-RO'
        | 'ru'
        | 'ru-RU'
        | 'sa'
        | 'sa-IN'
        | 'se'
        | 'se-FI'
        | 'se-NO'
        | 'se-SE'
        | 'sk'
        | 'sk-SK'
        | 'sl'
        | 'sl-SI'
        | 'sq'
        | 'sq-AL'
        | 'sr-BA'
        | 'sr-Cyrl-BA'
        | 'sr-SP'
        | 'sr-Cyrl-SP'
        | 'sv'
        | 'sv-FI'
        | 'sv-SE'
        | 'sw'
        | 'sw-KE'
        | 'syr'
        | 'syr-SY'
        | 'ta'
        | 'ta-IN'
        | 'te'
        | 'te-IN'
        | 'th'
        | 'th-TH'
        | 'tl'
        | 'tl-PH'
        | 'tn'
        | 'tn-ZA'
        | 'tr'
        | 'tr-TR'
        | 'tt'
        | 'tt-RU'
        | 'ts'
        | 'uk'
        | 'uk-UA'
        | 'ur'
        | 'ur-PK'
        | 'uz'
        | 'uz-UZ'
        | 'uz-Cyrl-UZ'
        | 'vi'
        | 'vi-VN'
        | 'xh'
        | 'xh-ZA'
        | 'zh'
        | 'zh-CN'
        | 'zh-HK'
        | 'zh-MO'
        | 'zh-SG'
        | 'zh-TW'
        | 'zu'
        | 'zu-ZA';
      nonce?: string;
      part?: string;
      slot?: string;
      spellcheck?: 'true' | 'false';
      style?: string;
      tabindex?: number;
      title?: string;
      translate?: '' | 'yes' | 'no';

      // WAI-ARIA attributes
      role?:
        | 'alert'
        | 'alertdialog'
        | 'application'
        | 'article'
        | 'banner'
        | 'button'
        | 'cell'
        | 'checkbox'
        | 'columnheader'
        | 'combobox'
        | 'complementary'
        | 'contentinfo'
        | 'definition'
        | 'dialog'
        | 'directory'
        | 'document'
        | 'feed'
        | 'figure'
        | 'form'
        | 'grid'
        | 'gridcell'
        | 'group'
        | 'heading'
        | 'img'
        | 'link'
        | 'list'
        | 'listbox'
        | 'listitem'
        | 'log'
        | 'main'
        | 'marquee'
        | 'math'
        | 'menu'
        | 'menubar'
        | 'menuitem'
        | 'menuitemcheckbox'
        | 'menuitemradio'
        | 'navigation'
        | 'none'
        | 'note'
        | 'option'
        | 'presentation'
        | 'progressbar'
        | 'radio'
        | 'radiogroup'
        | 'region'
        | 'row'
        | 'rowgroup'
        | 'rowheader'
        | 'scrollbar'
        | 'search'
        | 'searchbox'
        | 'separator'
        | 'slider'
        | 'spinbutton'
        | 'status'
        | 'switch'
        | 'tab'
        | 'table'
        | 'tablist'
        | 'tabpanel'
        | 'term'
        | 'textbox'
        | 'timer'
        | 'toolbar'
        | 'tooltip'
        | 'tree'
        | 'treegrid'
        | 'treeitem'
        | (string & {});

      // RFDa attributes
      about?: string;
      datatype?: string;
      inlist?: any;
      prefix?: string;
      property?: string;
      resource?: string;
      typeof?: string;
      vocab?: string;

      // Data attributes
      [data_attribute: `data-${string}`]: string;
    }

    interface AnchorAttributes extends GlobalAttributes {
      download?: string;
      href?: string;
      hreflang?: GlobalAttributes['lang'];
      ping?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      rel?: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
      type?: string;
    }

    interface BaseAttributes extends GlobalAttributes {
      href: string;
      target?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
    }

    interface BodyAttributes extends GlobalAttributes {
      onafterprint?: string;
      onbeforeprint?: string;
      onbeforeunload?: string;
      onblur?: string;
      onerror?: string;
      onfocus?: string;
      onhashchange?: string;
      onlanguagechange?: string;
      onload?: string;
      onmessage?: string;
      onoffline?: string;
      ononline?: string;
      onpopstate?: string;
      onredo?: string;
      onresize?: string;
      onstorage?: string;
      onundo?: string;
      onunload?: string;
    }

    interface HtmlAttributes extends GlobalAttributes {
      xmlns?: string;
    }

    interface LinkAttributes extends GlobalAttributes {
      as?:
        | 'audio'
        | 'document'
        | 'embed'
        | 'fetch'
        | 'font'
        | 'image'
        | 'object'
        | 'script'
        | 'style'
        | 'track'
        | 'video'
        | 'worker';
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      disabled?: boolean;
      href?: string;
      hreflang?: GlobalAttributes['lang'];
      imagesizes?: string;
      imagesrcset?: string;
      integrity?: string;
      media?: string;
      rel?:
        | 'alternate'
        | 'author'
        | 'canonical'
        | 'dns-prefetch'
        | 'help'
        | 'icon'
        | 'license'
        | 'manifest'
        | 'modulepreload'
        | 'next'
        | 'pingbank'
        | 'preconnect'
        | 'prefetch'
        | 'preload'
        | 'prerender'
        | 'prev'
        | 'search'
        | 'shortlink'
        | 'stylesheet'
        | (string & {});
      sizes?: 'any' | (string & {});
      title?: string;
      type?: string;
    }

    interface MetaAttributes extends GlobalAttributes {
      charset?: 'utf-8' | 'UTF-8';
      content?: string;
      'http-equiv'?: 'content-security-policy' | 'content-type' | 'default-style' | 'x-ua-compatible' | 'refresh';
      name?: string;
      property?: string;
    }

    interface StyleAttributes extends GlobalAttributes {
      media?: string;
      nonce?: string;
      title?: string;
    }

    interface BlockquoteAttributes extends GlobalAttributes {
      cite?: string;
    }

    interface LiAttributes extends GlobalAttributes {
      value?: number | string;
    }

    interface OlAttributes extends GlobalAttributes {
      reversed?: boolean;
      start?: number;
      type?: 'a' | 'A' | 'i' | 'I' | 1;
    }

    interface BdoAttributes extends GlobalAttributes {
      dir: 'ltr' | 'rtl';
    }

    interface DataAttributes extends GlobalAttributes {
      value?: string;
    }

    interface QAttributes extends GlobalAttributes {
      cite?: string;
    }

    interface TimeAttributes extends GlobalAttributes {
      datetime?: string;
    }

    interface AreaAttributes extends GlobalAttributes {
      alt?: string;
      coords?: string;
      download?: string;
      href?: string;
      hreflang?: GlobalAttributes['lang'];
      ping?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      rel?:
        | 'alternate'
        | 'author'
        | 'bookmark'
        | 'external'
        | 'help'
        | 'license'
        | 'next'
        | 'nofollow'
        | 'noopener'
        | 'noreferrer'
        | 'prev'
        | 'search'
        | 'tag'
        | (string & {});
      shape?: 'default' | 'rect' | 'circle' | 'poly';
      target?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
    }

    interface AudioAttributes extends GlobalAttributes {
      autoplay?: boolean;
      controls?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      disableremoteplayback?: boolean;
      loop?: boolean;
      muted?: boolean;
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string;
    }

    interface ImgAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
      alt?: string;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      decoding?: 'sync' | 'async' | 'auto';
      height?: number | string;
      ismap?: boolean;
      loading?: 'eager' | 'lazy';
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      sizes?: string;
      src: string;
      srcset?: string;
      width?: number | string;
      usemap?: string;
    }

    interface MapAttributes extends GlobalAttributes {
      name?: string;
    }

    interface TrackAttributes extends GlobalAttributes {
      default?: boolean;
      kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
      label?: string;
      src?: string;
      srclang?:
        | 'ar-SA'
        | 'cs-CZ'
        | 'da-DK'
        | 'de-DE'
        | 'el-GR'
        | 'en-AU'
        | 'en-GB'
        | 'en-IE'
        | 'en-US'
        | 'en-ZA'
        | 'es-ES'
        | 'es-MX'
        | 'fi-FI'
        | 'fr-CA'
        | 'fr-FR'
        | 'he-IL'
        | 'hi-IN'
        | 'hu-HU'
        | 'id-ID'
        | 'it-IT'
        | 'ja-JP'
        | 'ko-KR'
        | 'nl-BE'
        | 'nl-NL'
        | 'no-NO'
        | 'pl-PL'
        | 'pt-BR'
        | 'pt-PT'
        | 'ro-RO'
        | 'ru-RU'
        | 'sk-SK'
        | 'sv-SE'
        | 'th-TH'
        | 'tr-TR'
        | 'zh-CN'
        | 'zh-HK'
        | 'zh-TW';
    }

    interface VideoAttributes extends GlobalAttributes {
      autoplay?: boolean;
      autopictureinpicture?: boolean;
      controls?: boolean;
      controlslist?: 'nodownload' | 'nofullscreen' | 'noremoteplayback';
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      disablepictureinpicture?: boolean;
      disableremoteplayback?: boolean;
      height?: number | string;
      loop?: boolean;
      muted?: boolean;
      playsinline?: boolean;
      poster?: string;
      preload?: 'none' | 'metadata' | 'auto' | '';
      src?: string;
      width?: number | string;
    }

    interface EmbedAttributes extends GlobalAttributes {
      height?: number | string;
      src?: string;
      type?: string;
      width?: number | string;
    }

    interface IframeAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
      allow?: string;
      allowfullscreen?: boolean;
      allowpaymentrequest?: boolean;
      csp?: string;
      height?: number | string;
      loading?: 'eager' | 'lazy';
      name?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      sandbox?:
        | 'allow-downloads-without-user-activation'
        | 'allow-downloads'
        | 'allow-forms'
        | 'allow-modals'
        | 'allow-orientation-lock'
        | 'allow-pointer-lock'
        | 'allow-popups'
        | 'allow-popups-to-escape-sandbox'
        | 'allow-presentation'
        | 'allow-same-origin'
        | 'allow-scripts'
        | 'allow-storage-access-by-user-activation'
        | 'allow-top-navigation'
        | 'allow-top-navigation-by-user-activation';
      src?: string;
      srcdoc?: string;
      width?: number | string;
    }

    interface ObjectAttributes extends GlobalAttributes {
      data?: string;
      form?: string;
      height?: number | string;
      name?: string;
      type?: string;
      usemap?: string;
      width?: number | string;
    }

    interface PortalAttributes extends GlobalAttributes {
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      src?: string;
    }

    interface SourceAttributes extends GlobalAttributes {
      media?: string;
      sizes?: string;
      src?: string;
      srcset?: string;
      type?: string;
    }

    interface CanvasAttributes extends GlobalAttributes {
      height?: number | string;
      width?: number | string;
    }

    interface ScriptAttributes extends GlobalAttributes {
      async?: boolean;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      defer?: boolean;
      integrity?: string;
      nomodule?: boolean;
      nonce?: string;
      referrerpolicy?:
        | 'no-referrer'
        | 'no-referrer-when-downgrade'
        | 'origin'
        | 'origin-when-cross-origin'
        | 'same-origin'
        | 'strict-origin'
        | 'strict-origin-when-cross-origin'
        | 'unsafe-url';
      src?: string;
      type?: string;
    }

    interface DelAttributes extends GlobalAttributes {
      cite?: string;
      datetime?: string;
    }

    interface InsAttributes extends GlobalAttributes {
      cite?: string;
      datetime?: string;
    }

    interface ColAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
      span?: number;
    }

    interface ColgroupAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
      span?: number;
    }

    interface TdAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
      colspan?: number;
      headers?: string;
      rowspan?: number;
    }

    interface TbodyAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    }

    interface TfootAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    }

    interface ThAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    }

    interface TheadAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    }

    interface TrAttributes extends GlobalAttributes {
      align?: 'left' | 'center' | 'right' | 'justify' | 'char';
    }

    interface ButtonAttributes extends GlobalAttributes {
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      formmethod?: 'post' | 'get';
      formnovalidate?: boolean;
      formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
      name?: string;
      type?: 'submit' | 'reset' | 'button';
      value?: string;
    }

    interface FieldsetAttributes extends GlobalAttributes {
      disabled?: boolean;
      form?: string;
      name?: string;
    }

    interface FormAttributes extends GlobalAttributes {
      'accept-charset'?: string;
      action?: string;
      enctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      autocomplete?: 'off' | 'on';
      method?: 'post' | 'get' | 'dialog';
      name?: string;
      novalidate?: boolean;
      rel?:
        | 'external'
        | 'help'
        | 'license'
        | 'next'
        | 'nofollow'
        | 'noopener'
        | 'noreferrer'
        | 'opener'
        | 'prev'
        | 'search'
        | (string & {});
      target?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
    }

    interface InputAttributes extends GlobalAttributes {
      accept?: string;
      alt?: string;
      autocomplete?:
        | 'off'
        | 'on'
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'email'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'one-time-code'
        | 'organization-title'
        | 'street-address'
        | 'address-line1'
        | 'address-line2'
        | 'address-line3'
        | 'address-level1'
        | 'address-level2'
        | 'address-level3'
        | 'address-level4'
        | 'country'
        | 'country-name'
        | 'postal-code'
        | 'cc-name'
        | 'cc-given-name'
        | 'cc-additional-name'
        | 'cc-family-name'
        | 'cc-number'
        | 'cc-exp'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-csc'
        | 'cc-type'
        | 'transaction-currency'
        | 'transaction-amount'
        | 'transaction-amount'
        | 'language'
        | 'bday'
        | 'bday-day'
        | 'bday-month'
        | 'sex'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-area-code'
        | 'tel-local'
        | 'tel-extension'
        | 'impp'
        | 'url'
        | 'photo';
      autofocus?: boolean;
      capture?: 'user' | 'environment';
      checked?: boolean;
      dirname?: `${string}.dir`;
      disabled?: boolean;
      form?: string;
      formaction?: string;
      formenctype?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
      formmethod?: 'post' | 'get';
      formnovalidate?: boolean;
      formtarget?: '_self' | '_blank' | '_parent' | '_top' | (string & {});
      height?: number | string;
      id?: string;
      inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
      list?: string;
      max?: number;
      maxlength?: number;
      min?: number;
      minlength?: number;
      multiple?: boolean;
      name?: string;
      pattern?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean | '';
      size?: number;
      src?: string;
      step?: number;
      tabindex?: number;
      title?: string;
      type?:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'radio'
        | 'range'
        | 'reset'
        | 'search'
        | 'submit'
        | 'tel'
        | 'text'
        | 'time'
        | 'time'
        | 'url'
        | 'week';
      value?: string;
      width?: number | string;
    }

    interface LabelAttributes extends GlobalAttributes {
      for?: string;
    }

    interface MeterAttributes extends GlobalAttributes {
      value?: number;
      min?: number;
      max?: number;
      low?: number;
      high?: number;
      optimum?: number;
      form?: string;
    }

    interface OptgroupAttributes extends GlobalAttributes {
      disabled?: boolean;
      label?: string;
    }

    interface OptionAttributes extends GlobalAttributes {
      disabled?: boolean;
      label?: string;
      selected?: boolean;
      value?: string;
    }

    interface OutputAttributes extends GlobalAttributes {
      for?: string;
      form?: string;
      name?: string;
    }

    interface ProgressAttributes extends GlobalAttributes {
      max?: number;
      value?: number;
    }

    interface SelectAttributes extends GlobalAttributes {
      autocomplete?:
        | 'off'
        | 'on'
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'email'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'one-time-code'
        | 'organization-title'
        | 'street-address'
        | 'address-line1'
        | 'address-line2'
        | 'address-line3'
        | 'address-level1'
        | 'address-level2'
        | 'address-level3'
        | 'address-level4'
        | 'country'
        | 'country-name'
        | 'postal-code'
        | 'cc-name'
        | 'cc-given-name'
        | 'cc-additional-name'
        | 'cc-family-name'
        | 'cc-number'
        | 'cc-exp'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-csc'
        | 'cc-type'
        | 'transaction-currency'
        | 'transaction-amount'
        | 'transaction-amount'
        | 'language'
        | 'bday'
        | 'bday-day'
        | 'bday-month'
        | 'sex'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-area-code'
        | 'tel-local'
        | 'tel-extension'
        | 'impp'
        | 'url'
        | 'photo';
      autofocus?: boolean;
      disabled?: boolean;
      form?: string;
      multiple?: boolean;
      name?: string;
      required?: boolean | '';
      size?: number;
    }

    interface TextareaAttributes extends Omit<GlobalAttributes, 'spellcheck'> {
      autocomplete?: 'off' | 'on';
      autofocus?: boolean;
      cols?: number;
      disabled?: boolean;
      form?: string;
      maxlength?: number;
      minlength?: number;
      name?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean | '';
      rows?: number;
      spellcheck?: 'true' | 'false' | 'default';
      wrap?: 'hard' | 'soft' | 'off';
    }

    interface DetailsAttributes extends GlobalAttributes {
      open?: boolean;
    }

    interface DialogAttributes extends GlobalAttributes {
      open?: boolean;
    }

    interface SlotAttributes extends GlobalAttributes {
      name?: string;
    }

    interface SvgAttributes {
      class?: string;
      color?: string;
      height?: number | string;
      id?: string;
      lang?: string;
      max?: number | string;
      media?: string;
      method?: string;
      min?: number | string;
      name?: string;
      style?: string;
      target?: string;
      type?: string;
      width?: number | string;
      role?: string;
      tabIndex?: number;
      crossorigin?: 'anonymous' | 'use-credentials' | '';
      'accent-height'?: number | string;
      accumulate?: 'none' | 'sum';
      additive?: 'replace' | 'sum';
      'alignment-baseline'?:
        | 'auto'
        | 'baseline'
        | 'before-edge'
        | 'text-before-edge'
        | 'middle'
        | 'central'
        | 'after-edge'
        | 'text-after-edge'
        | 'ideographic'
        | 'alphabetic'
        | 'hanging'
        | 'mathematical'
        | 'inherit';
      allowReorder?: 'no' | 'yes';
      alphabetic?: number | string;
      amplitude?: number | string;
      'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated';
      ascent?: number | string;
      attributeName?: string;
      attributeType?: string;
      autoReverse?: boolean;
      azimuth?: number | string;
      baseFrequency?: number | string;
      'baseline-shift'?: number | string;
      baseProfile?: number | string;
      bbox?: number | string;
      begin?: number | string;
      bias?: number | string;
      by?: number | string;
      calcMode?: number | string;
      'cap-height'?: number | string;
      clip?: number | string;
      'clip-path'?: string;
      clipPathUnits?: number | string;
      'clip-rule'?: number | string;
      'color-interpolation'?: number | string;
      'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit';
      'color-profile'?: number | string;
      'color-rendering'?: number | string;
      contentScriptType?: number | string;
      contentStyleType?: number | string;
      cursor?: number | string;
      cx?: number | string;
      cy?: number | string;
      d?: string;
      decelerate?: number | string;
      descent?: number | string;
      diffuseConstant?: number | string;
      direction?: number | string;
      display?: number | string;
      divisor?: number | string;
      'dominant-baseline'?: number | string;
      dur?: number | string;
      dx?: number | string;
      dy?: number | string;
      edgeMode?: number | string;
      elevation?: number | string;
      'enable-background'?: number | string;
      end?: number | string;
      exponent?: number | string;
      externalResourcesRequired?: boolean;
      fill?: string;
      'fill-opacity'?: number | string;
      'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit';
      filter?: string;
      filterRes?: number | string;
      filterUnits?: number | string;
      'flood-color'?: number | string;
      'flood-opacity'?: number | string;
      'font-family'?: string;
      'font-size'?: number | string;
      'font-size-adjust'?: number | string;
      'font-stretch'?: number | string;
      'font-style'?: number | string;
      'font-variant'?: number | string;
      'font-weight'?: number | string;
      format?: number | string;
      fr?: number | string;
      from?: number | string;
      fx?: number | string;
      fy?: number | string;
      g1?: number | string;
      g2?: number | string;
      'glyph-name'?: number | string;
      'glyph-orientation-horizontal'?: number | string;
      'glyph-orientation-vertical'?: number | string;
      glyphRef?: number | string;
      gradientTransform?: string;
      gradientUnits?: string;
      hanging?: number | string;
      'horiz-adv-x'?: number | string;
      'horiz-origin-x'?: number | string;
      href?: string;
      ideographic?: number | string;
      'image-rendering'?: number | string;
      in2?: number | string;
      in?: string;
      intercept?: number | string;
      k1?: number | string;
      k2?: number | string;
      k3?: number | string;
      k4?: number | string;
      k?: number | string;
      kernelMatrix?: number | string;
      kernelUnitLength?: number | string;
      kerning?: number | string;
      keyPoints?: number | string;
      keySplines?: number | string;
      keyTimes?: number | string;
      lengthAdjust?: number | string;
      'letter-spacing'?: number | string;
      'lighting-color'?: number | string;
      limitingConeAngle?: number | string;
      local?: number | string;
      'marker-end'?: string;
      markerHeight?: number | string;
      'marker-mid'?: string;
      'marker-start'?: string;
      markerUnits?: number | string;
      markerWidth?: number | string;
      mask?: string;
      maskContentUnits?: number | string;
      maskUnits?: number | string;
      mathematical?: number | string;
      mode?: number | string;
      numOctaves?: number | string;
      offset?: number | string;
      opacity?: number | string;
      operator?: number | string;
      order?: number | string;
      orient?: number | string;
      orientation?: number | string;
      origin?: number | string;
      overflow?: number | string;
      'overline-position'?: number | string;
      'overline-thickness'?: number | string;
      'paint-order'?: number | string;
      'panose-1'?: number | string;
      path?: string;
      pathLength?: number | string;
      patternContentUnits?: string;
      patternTransform?: number | string;
      patternUnits?: string;
      'pointer-events'?: number | string;
      points?: string;
      pointsAtX?: number | string;
      pointsAtY?: number | string;
      pointsAtZ?: number | string;
      preserveAlpha?: boolean;
      preserveAspectRatio?: string;
      primitiveUnits?: number | string;
      r?: number | string;
      radius?: number | string;
      refX?: number | string;
      refY?: number | string;
      'rendering-intent'?: number | string;
      repeatCount?: number | string;
      repeatDur?: number | string;
      requiredExtensions?: number | string;
      requiredFeatures?: number | string;
      restart?: number | string;
      result?: string;
      rotate?: number | string;
      rx?: number | string;
      ry?: number | string;
      scale?: number | string;
      seed?: number | string;
      'shape-rendering'?: number | string;
      slope?: number | string;
      spacing?: number | string;
      specularConstant?: number | string;
      specularExponent?: number | string;
      speed?: number | string;
      spreadMethod?: string;
      startOffset?: number | string;
      stdDeviation?: number | string;
      stemh?: number | string;
      stemv?: number | string;
      stitchTiles?: number | string;
      'stop-color'?: string;
      'stop-opacity'?: number | string;
      'strikethrough-position'?: number | string;
      'strikethrough-thickness'?: number | string;
      string?: number | string;
      stroke?: string;
      'stroke-dasharray'?: string | number;
      'stroke-dashoffset'?: string | number;
      'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit';
      'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit';
      'stroke-miterlimit'?: number | string;
      'stroke-opacity'?: number | string;
      'stroke-width'?: number | string;
      surfaceScale?: number | string;
      systemLanguage?: number | string;
      tableValues?: number | string;
      targetX?: number | string;
      targetY?: number | string;
      'text-anchor'?: string;
      'text-decoration'?: number | string;
      textLength?: number | string;
      'text-rendering'?: number | string;
      to?: number | string;
      transform?: string;
      u1?: number | string;
      u2?: number | string;
      'underline-position'?: number | string;
      'underline-thickness'?: number | string;
      unicode?: number | string;
      'unicode-bidi'?: number | string;
      'unicode-range'?: number | string;
      'units-per-em'?: number | string;
      'v-alphabetic'?: number | string;
      values?: string;
      version?: string;
      'vert-adv-y'?: number | string;
      'vert-origin-x'?: number | string;
      'vert-origin-y'?: number | string;
      'v-hanging'?: number | string;
      'v-ideographic'?: number | string;
      viewBox?: string;
      viewTarget?: number | string;
      visibility?: number | string;
      'v-mathematical'?: number | string;
      widths?: number | string;
      'word-spacing'?: number | string;
      'writing-mode'?: number | string;
      x1?: number | string;
      x2?: number | string;
      x?: number | string;
      xChannelSelector?: string;
      'x-height'?: number | string;
      'xlink:actuate'?: string;
      'xlink:arcrole'?: string;
      'xlink:href'?: string;
      'xlink:role'?: string;
      'xlink:show'?: string;
      'xlink:title'?: string;
      'xlink:type'?: string;
      'xml:base'?: string;
      'xml:lang'?: string;
      xmlns?: string;
      'xmlns:xlink'?: string;
      'xml:space'?: string;
      y1?: number | string;
      y2?: number | string;
      y?: number | string;
      yChannelSelector?: string;
      z?: number | string;
      zoomAndPan?: string;
    }

    interface PathAttributes {
      d?: string;
      pathLength?: number | string;
    }

    interface IntrinsicElements {
      html: HtmlAttributes;
      base: BaseAttributes;
      head: GlobalAttributes;
      link: LinkAttributes;
      meta: MetaAttributes;
      style: StyleAttributes;
      title: GlobalAttributes;
      body: BodyAttributes;
      address: GlobalAttributes;
      article: GlobalAttributes;
      aside: GlobalAttributes;
      footer: GlobalAttributes;
      header: GlobalAttributes;
      h1: GlobalAttributes;
      h2: GlobalAttributes;
      h3: GlobalAttributes;
      h4: GlobalAttributes;
      h5: GlobalAttributes;
      h6: GlobalAttributes;
      main: GlobalAttributes;
      nav: GlobalAttributes;
      section: GlobalAttributes;
      blockquote: BlockquoteAttributes;
      dd: GlobalAttributes;
      div: GlobalAttributes;
      dl: GlobalAttributes;
      dt: GlobalAttributes;
      figcaption: GlobalAttributes;
      figure: GlobalAttributes;
      hr: GlobalAttributes;
      li: LiAttributes;
      ol: OlAttributes;
      p: GlobalAttributes;
      pre: GlobalAttributes;
      ul: GlobalAttributes;
      a: AnchorAttributes;
      abbr: GlobalAttributes;
      b: GlobalAttributes;
      bdi: GlobalAttributes;
      bdo: BdoAttributes;
      br: GlobalAttributes;
      cite: GlobalAttributes;
      code: GlobalAttributes;
      data: DataAttributes;
      dfn: GlobalAttributes;
      em: GlobalAttributes;
      i: GlobalAttributes;
      kbd: GlobalAttributes;
      mark: GlobalAttributes;
      q: QAttributes;
      rp: GlobalAttributes;
      rt: GlobalAttributes;
      ruby: GlobalAttributes;
      s: GlobalAttributes;
      samp: GlobalAttributes;
      small: GlobalAttributes;
      span: GlobalAttributes;
      strong: GlobalAttributes;
      sub: GlobalAttributes;
      sup: GlobalAttributes;
      time: TimeAttributes;
      u: GlobalAttributes;
      var: GlobalAttributes;
      wbr: GlobalAttributes;
      area: AreaAttributes;
      audio: AudioAttributes;
      img: ImgAttributes;
      map: MapAttributes;
      track: TrackAttributes;
      video: VideoAttributes;
      embed: EmbedAttributes;
      iframe: IframeAttributes;
      object: ObjectAttributes;
      param: GlobalAttributes;
      picture: GlobalAttributes;
      portal: PortalAttributes;
      source: SourceAttributes;
      canvas: CanvasAttributes;
      noscript: GlobalAttributes;
      script: ScriptAttributes;
      del: DelAttributes;
      ins: InsAttributes;
      caption: GlobalAttributes;
      col: ColAttributes;
      colgroup: ColgroupAttributes;
      table: GlobalAttributes;
      tbody: TbodyAttributes;
      td: TdAttributes;
      tfoot: TfootAttributes;
      th: ThAttributes;
      thead: TheadAttributes;
      tr: TrAttributes;
      button: ButtonAttributes;
      datalist: GlobalAttributes;
      fieldset: FieldsetAttributes;
      form: FormAttributes;
      input: InputAttributes;
      label: LabelAttributes;
      legend: GlobalAttributes;
      meter: MeterAttributes;
      optgroup: OptgroupAttributes;
      option: OptionAttributes;
      output: OutputAttributes;
      progress: ProgressAttributes;
      select: SelectAttributes;
      textarea: TextareaAttributes;
      details: DetailsAttributes;
      dialog: DialogAttributes;
      menu: GlobalAttributes;
      summary: GlobalAttributes;
      slot: SlotAttributes;
      svg: SvgAttributes;
      template: GlobalAttributes;
      path: PathAttributes;
    }
  }
}
