/*
настройка "devPixelsPerPx" - Данная настройка отвечает за масштабирование интерфейса и будет особо полезна людям
со слабым зрением или на компьютерах с большим разрешением экрана. По умолчанию идет значение "1"
// */
user_pref("layout.css.devPixelsPerPx", "1.25");  // -1 автовыбор
user_pref("layout.css.osx-font-smoothing.enabled", true);

// режим приватности для одинаковых отпечатков браузера
// user_pref("privacy.resistFingerprinting", true);

/* 0000: disable about:config warning
 * отключить предупреждение при входе в about:config ***/
user_pref("browser.aboutConfig.showWarning", false);

// не выделять пробел при двойном клике на слово
user_pref("layout.word_select.eat_space_to_next_word", false);

/** RECOMMENDATIONS ***/
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]

/* [UX,-HIST] При запуске показать окна и вкладки, открытые в прошлый раз*/
user_pref("browser.startup.page", 3); 

// Функция для устройств (в основном ноутбуки) с тачпадом, сенсорным экраном или трекболом.
// Если ничего из этого нет в вашем компьютере, отключите, установив значение 0
user_pref("dom.w3c_touch_events.enabled", 0);

// Анализатор CSS. Функция полезна для веб-разработчиков и не нужна обычным пользователям. Отключить false
user_pref("layout.css.report_errors", false);

// Функция для компьютеров с сенсорным экраном.
// Отключайте false если сенсорного экрана нет.
user_pref("gestures.enable_single_finger_input", false);

// При открытии видео на полный экран может появится надпись "… теперь находится в полноэкранном режиме". 
// Что бы эта надпись не появлялась установите значение 0
user_pref("full-screen-api.warning.timeout", 0); 

// Когда вы удаляете расширение из браузера, Firefox может предложить пожаловаться на это расширение. Если вы устанавливаете только проверенные расширения, можете убрать это предложение, установив значение опции в false
user_pref("extensions.abuseReport.enabled", false);

// По умолчанию, Firefox в меню установленных расширений показывает так же и неустановленные рекомендуемые. 
// Если вы не желаете видеть эти предлагаемые дополнения, переключите обе опции в false
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);

// Функция для веб-разработчиков. Представляет из себя программную библиотеку, которая позволяет разрабатывать программы, управляющие поведением браузера. Используется, в основном, для тестирования сайтов в браузере.
// Обычному пользователю не нужна, можете отключить false
user_pref("dom.webdriver.enabled", false);

// Функции для веб-разработчиков. Можно отключить false
user_pref("dom.indexedDB.logging.details", false);
user_pref("dom.indexedDB.logging.enabled", false);

/* Неожиданные опросы и сбор данных о ваших предпочтениях для Mozilla. */
user_pref("app.normandy.enabled", false);

// Функция для устройств с сенсорным экраном.
user_pref("apz.allow_double_tap_zooming", false);

// Отключите если в вашем компьютере нет устройств с сенсорным вводом (тачпад или тачскрин).
user_pref("apz.drag.touch.enabled", false);
user_pref("apz.one_touch_pinch.enabled ", false);

// Телеметрия. Сбор и отправка данных о настройке пользователем «плиток» веб-содержимого на домашней странице (новой вкладке). 
//  * Домашняя страница / новая вкладка по умолчанию, анализирует ваше поведение
//  * Идеальное решение - вообще не использовать и не открывать ее
//  * [SETTING] Начало > Домашняя страница Firefox >... ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false FF89+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]

/* 0106: clear default topsites
 * [NOTE] Это не мешает вам добавлять свои собственные ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/* [UX] Both multi-line & single-line spell check. */
user_pref("layout.spellcheckDefault", 2); // 0=none, 1-multi-line, 2=multi-line & single-line
/* [UX] Disable Alt key toggling the menu bar. */
user_pref("ui.key.menuAccessKey", 0); // 18=Alt

// отключаем проверку подписей расширений
user_pref("xpinstall.signatures.required", false);

/* Отключение запроса IPv6 адресов у DNS.
Возможные проблемы: если настройки DNS на сервер только IPv6*/
user_pref("network.dns.disableIPv6", true);

user_pref("extensions.screenshots.disabled", true); // отключить скриншотер

// При клике на адресную строку выделяется весь адрес, а не текущее слово.
user_pref("browser.urlbar.trimURLs", false);

// Копировать ссылки c кириллическим текстом в исходном виде, не закодированном.
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// Отключает полупрозрачную превьюшку таба, болтающуюся при его перетаскивании около курсора, и
// мешающую перетащить его в нужное место.
user_pref("nglayout.enable_drag_images", false);

// Закрытие последней вкладки НЕ закрывает браузер
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Отключает Google Safebrowsing. Раньше можно было еще не отключать, пока они только отдавали базу
// хэшей малварных URL и браузер сверялся с локальной копией. Но сейчас Гугл заставляет посылать хэш
// каждого загружаемого пользователем файла (якобы для проверки на вирусы), что уже совершенно
// неприемлемо. Желающие могут установить себе подписку Malware Domains для uBlock Origin, которая
// включает в себя URL из Safebrowsing и не следит за пользователем.
// Отключает список Tracking Protection, содержащий адреса тех SWF с популярных сайтов, которые были
// замечены в попытках получить список шрифтов или совершить другие подозрительные действия.
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
// PREF: GSB checks for unwanted software
user_pref("browser.safebrowsing.phishing.enabled", false);
// Privacy & Security>Security>... "Warn you about unwanted and uncommon software"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// PREF: Disable annoying location requests from websites
user_pref("permissions.default.geo", 2);
// PREF: Use Mozilla geolocation service instead of Google when geolocation is enabled
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// Если вы используете расширение для изменения внешнего вида или работы веб-сайта и хотите, чтобы оно работало на доменах Mozilla
user_pref("extensions.webextensions.restrictedDomains", "");

// Отключает PingCentre - новую телеметрию для Activity Stream и Onboarding.
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.production.endpoint", "");

// Отключает sendBeacon() - API для отправки статистики перед выгрузкой страницы.
// Запрет отправки beacon - специфических HTTP-данных, утекающих от юзерагента на сервер, особенно при покидании страницы:
user_pref("beacon.enabled", false);

// Отключаем метрики производительности
user_pref("dom.enable_performance", false);
user_pref("dom.enable_performance_observer", false);
user_pref("dom.enable_performance_navigation_timing", false);

// Отключает посылку статистики при обновлении аддонов.
// Отключение профилируемой информации о дополнениях и блокирование отсылки пользовательских метаданных об использовании дополнений. Firefox, отталкиваясь от списка уже 
// установленных дополнений, предлагает новые на странице "Get Add-ons" в менеджере дополнений. При этом Mozilla получает и анализирует информацию, поступающую от браузера: номер 
// версии, IP-адрес и прочее. 
user_pref("extensions.getAddons.cache.enabled", false);

// Отключение предложения "предпочтительных дополнений". Firefox рекламирует сторонние дополнения и темы, обращаясь к серверу Mozilla и передавая ему для анализа пользовательские  
// метаданные. 
user_pref("extensions.getAddons.getWithPerformance.url", "");

// Отключает телеметрию.
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.prompted", 2); //Setting seem to still exist
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
// Отключает отправку информации о падениях браузера в Mozilla (about:crashes).
user_pref("breakpad.reportURL", ""); //По умолчанию: https://crash-stats.mozilla.com/report/index/
// about:tabcrashed
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.includeURL", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.email", "");
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.chancesUntilSuppress", 0);
user_pref("toolkit.telemetry.coverage.opt-out", true); // отключаем особый вид телеметрии, который не зависит от обычных настроек

// PREF: Studies
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);

// Отключает импорт используемого для MITM сертификата Family Safety от Microsoft.
user_pref("security.family_safety.mode", 0);

// Запрещает работу WebRTC в режиме P2P, разрешая ее только через сервер третьей стороны, что
// предотвращает утечку IP-адресов всех сетевых интерфейсов компьютера
user_pref("media.peerconnection.ice.relay_only", true);
// Это обязательно нужно с Firefox 51+, в связке с relay_only или default_address_only.
user_pref("media.peerconnection.ice.no_host", true);

// Отключает New Tab Page Tiles - изкоробочную панель быстрого набора с часто посещаемыми сайтами,
// которая потребляет процессорное время и замедляет открытие новых пустых вкладок.
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Отключает сбор статистики производительности декодирования HTML5-видео (посмотреть их можно в
// Show Statistics контекстного меню плеера).
user_pref("media.video_stats.enabled", false);

// Отключает функцию зачитывания текста при помощи синтезированной речи в Reader View.
user_pref("narrate.enabled", false);

// Отключает запрос подтверждений вроде: "Эта страница просит вас подтвердить, что вы хотите уйти."
// при обработке браузером события beforeunload. НЕ отключает само событие beforeunload.
user_pref("dom.disable_beforeunload", true);

// Отключает Vibration API.
user_pref("dom.vibrator.enabled", false);

// Отключает Gamepad API, которое может быть использовано для получения идентификаторов
// производителя и модели подключенных к компьютеру геймпадов.
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);

// Отключает поддержку устройств виртуальной реальности.
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.openvr.enabled", false);

// Отключает Web Speech API, использующееся для распознавания и синтеза речи.
user_pref("media.webspeech.synth.enabled", false);

// Отключает getUserMedia API, который используется для записи звука с микрофона, изображения с
// вебкамеры и screen sharing (доступ удаленного компьютера к порции экрана).
user_pref("media.navigator.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.aec_enabled", false);
user_pref("media.getusermedia.agc_enabled", false);
user_pref("media.getusermedia.noise_enabled", false);

// Отключает встроенный менеджер паролей (Preferences -> Security -> Remember passwords for sites).
// Рекомендуется использовать внешний, например, KeePass. После отключения следует удалить
// сохраненные пароли, хранящиеся в logins.json в профиле (или через Saved Passwords в GUI).
user_pref("signon.rememberSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);

// Отключает кнопку "Report Site Issue", появляющуюся при ошибках декодирования медии. Нажатие на
// эту кнопку отправляет информацию о глючном файле на webcompat.com.
user_pref("media.decoder-doctor.new-issue-endpoint", "");

// Отключает Accessibility Services, используемые голосовыми читалками, лупами и другими
// приложениями для людей с ограниченными возможностями. Эти сервисы могут мешать работе Electrolysis и вообще негативно влиять на производительность браузера. Причем браузер оставляет
// E10S выключенным целую неделю спустя даже однократного использования этих сервисов.
// Preferences -> Privacy & Security -> Prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 1);

//выключает телеметрию для вкладок в режиме приватного просмотра с версии firefox 62
user_pref("browser.engagement.total_uri_count.pbm", false);

// Отключить автозакрытие меню закладок после открытия закладки в новой вкладке
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// Блокировать новые запросы на отправку уведомлений
user_pref("permissions.default.desktop-notification", 2);

// Включить подсветку при поиске текста на странице
user_pref("findbar.highlightAll", true);

/*Запретить соединение с устройством на Firefox OS для отладки по Wi-Fi  */
user_pref("devtools.remote.wifi.scan", false);

/*
Добавления списка закачанных файлов в список "Недавние документы":
Возможные проблемы: не будут добавляться закаченные файлы в этот список
*/
user_pref("browser.download.manager.addToRecentDocs", false);

/*
WebCompat
Возможность отправки отчетов на https://webcompat.com о проблемах совместимости браузера с сайтами
*/
user_pref("media.decoder-doctor.new-issue-endpoint", ""); //По умолчанию: https://webcompat.com/issues/new
user_pref("extensions.webcompat-reporter.newIssueEndpoint", ""); //По умолчанию: https://webcompat.com/issues/new
user_pref("media.decoder-doctor.wmf-disabled-is-failure", true); //По умолчанию: false

// Открывать попапы во вкладках вместо отдельных окон.
user_pref("browser.link.open_newwindow.restriction", 0);

// Pref : 0335 : disable Telemetry Coverage [FF64+]
// [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]

// Pref : disable showing about:blank as soon as possible during startup (FF60+)
// When default true (FF62+) this no longer masks the RFP resizing activity
// [1] https://bugzilla.mozilla.org/1448423 
//user_pref("browser.startup.blankWindow", false);

// Pref : bookmarks backups (default: 15)
// http://kb.mozillazine.org/Browser.bookmarks.max_backups
user_pref("browser.bookmarks.max_backups", 3);

// ускорение отрисовки
user_pref("layers.acceleration.force-enabled", true);

// Включить поиск текста на странице по мере его набора
user_pref("accessibility.typeaheadfind", true);

// DNS-over-HTTPS
//user_pref("network.trr.mode", 3); // использовать только HTTPS DNS снервер
//user_pref("network.trr.uri", "https://dns.nextdns.io/fafba4");

// PREF: smoother font
// [1] https://www.reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
      user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
      user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
	  // добавил от себя исходя из инфы на реддите
	  user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);
	  user_pref("gfx.font_rendering.cleartype_params.gamma", 1750); 
	  
	  
// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

// PREF: add basic text to PDFs (FF103+)
user_pref("pdfjs.annotationEditorEnabled", true);

// Turn on notifications to show in Windows 10/11 Action Center
// Включить интеграцию с центром уведомлений Windows 10/11
//user_pref("alerts.useSystemBackend", true);

// Remove "Firefox View" icon from toolbar
// Убрать иконку "Firefox View" с панели инструментов
user_pref("browser.tabs.firefox-view", false);


/*** GMP, CDM, DRM
   Все эти модули взамосвязаны и бесполезно занимают место в профиле ***/
/* 2020: disable GMP (Gecko Media Plugins)
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins
 * Кодек для просмотра защищенного контента ***/
//user_pref("media.gmp-provider.enabled", false);
// Не скачивать кодек и скрыть его в about:addons
   // user_pref("media.gmp-gmpopenh264.enabled", false); // есть в политиках
//user_pref("media.gmp-gmpopenh264.visible", false);
/* 2021: disable widevine CDM (Content Decryption Module)
 * Не скачивать модуль и скрыть его в about:addons
 * Расшифровщик защищенного контента ***/
   // user_pref("media.gmp-widevinecdm.enabled", false); // есть в политиках
//user_pref("media.gmp-widevinecdm.visible", false);

/* WELCOME & WHAT'S NEW NOTICES
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates  ***/

// Разрешить стили userChrome/userContent [FF68+]
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // [FF68+] (APPEARANCE)

// EME-free - косметика для не EMEfree, но с отключенным кодеком
user_pref("app.partner.mozilla-EMEfree", "mozilla-EMEfree");

// PREF: включить режим только HTTPS 
user_pref ( "dom.security.https_only_mode", true);

// PREF: Offer suggestion for HTTPS site when available
// [1] https://nitter.winscloud.net/leli_gibts_scho/status/1371458534186057731
//user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]

// PREF: Prioritized Task Scheduling API
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
user_pref("dom.enable_web_task_scheduling", true);

// ** Theme Default Options ****************************************************

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS Color Mix - 88 Above
user_pref("layout.css.color-mix.enabled", true);

// CSS Blur Filter - 88 Above
user_pref("layout.css.backdrop-filter.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// CSS's `:has()` selector #457 - 103 Above
// также чтобы скрывать youtube shorts видео
user_pref("layout.css.has-selector.enabled", true);

// Browser Theme Based Scheme - Will be activate 95 Above
user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref("userChrome.tab.connect_to_window",          true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar",         true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding",        true); // Original
user_pref("userChrome.tab.photon_like_padding",       false); // Photon

user_pref("userChrome.tab.dynamic_separator",          true); // Original, Proton
user_pref("userChrome.tab.static_separator",          false); // Photon
user_pref("userChrome.tab.static_separator.selected_accent", false); // Just option
user_pref("userChrome.tab.bar_separator",             false); // Just option

user_pref("userChrome.tab.newtab_button_like_tab",     true); // Original
user_pref("userChrome.tab.newtab_button_smaller",     false); // Photon
user_pref("userChrome.tab.newtab_button_proton",      false); // Proton

user_pref("userChrome.icon.panel_full",                true); // Original, Proton
user_pref("userChrome.icon.panel_photon",             false); // Photon

// Original Only
user_pref("userChrome.tab.box_shadow",                 true);
user_pref("userChrome.tab.bottom_rounded_corner",      true);

// Photon Only
user_pref("userChrome.tab.photon_like_contextline",   false);
user_pref("userChrome.rounding.square_tab",           false);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme",       true);
user_pref("userChrome.compatibility.os",          true);

user_pref("userChrome.theme.built_in_contrast",   true);
user_pref("userChrome.theme.system_default",      true);
user_pref("userChrome.theme.proton_color",        true);
user_pref("userChrome.theme.proton_chrome",       true); // Need proton_color
user_pref("userChrome.theme.fully_color",         true); // Need proton_color
user_pref("userChrome.theme.fully_dark",          true); // Need proton_color

user_pref("userChrome.decoration.cursor",         true);
user_pref("userChrome.decoration.field_border",   true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate",        true);

user_pref("userChrome.padding.tabbar_width",      true);
user_pref("userChrome.padding.tabbar_height",     true);
user_pref("userChrome.padding.toolbar_button",    true);
user_pref("userChrome.padding.navbar_width",      true);
user_pref("userChrome.padding.urlbar",            true);
user_pref("userChrome.padding.bookmarkbar",       true);
user_pref("userChrome.padding.infobar",           true);
user_pref("userChrome.padding.menu",              true);
user_pref("userChrome.padding.bookmark_menu",     true);
user_pref("userChrome.padding.global_menubar",    true);
user_pref("userChrome.padding.panel",             true);
user_pref("userChrome.padding.popup_panel",       true);

user_pref("userChrome.tab.multi_selected",        true);
user_pref("userChrome.tab.unloaded",              true);
user_pref("userChrome.tab.letters_cleary",        true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label",      true);
user_pref("userChrome.tab.sound_with_favicons",   true);
user_pref("userChrome.tab.pip",                   true);
user_pref("userChrome.tab.container",             true);
user_pref("userChrome.tab.crashed",               true);

user_pref("userChrome.fullscreen.overlap",        true);
user_pref("userChrome.fullscreen.show_bookmarkbar", true);

user_pref("userChrome.icon.library",              true);
user_pref("userChrome.icon.panel",                true);
user_pref("userChrome.icon.menu",                 true);
user_pref("userChrome.icon.context_menu",         true);
user_pref("userChrome.icon.global_menu",          true);
user_pref("userChrome.icon.global_menubar",       true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui",             true);
user_pref("userContent.player.icon",           true);
user_pref("userContent.player.noaudio",        true);
user_pref("userContent.player.size",           true);
user_pref("userContent.player.click_to_play",  true);
user_pref("userContent.player.animate",        true);

user_pref("userContent.newTab.full_icon",      true);
user_pref("userContent.newTab.animate",        true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar",      true);

user_pref("userContent.page.field_border",     true);
user_pref("userContent.page.illustration",     true);
user_pref("userContent.page.proton_color",     true);
user_pref("userContent.page.dark_mode",        true); // Need proton_color
user_pref("userContent.page.proton",           true); // Need proton_color

// ** Useful Options ***********************************************************
// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// автоскрытие стрелок назад вперед
user_pref("userChrome.autohide.back_button", true);
user_pref("userChrome.autohide.forward_button", true);

// компактное контекстное меню
user_pref("userChrome.padding.menu_compact", true);

// компактные вкладки
user_pref("browser.tabs.tabMinWidth", 66);
user_pref("browser.tabs.tabClipWidth", 86);

// украсить страницы ошибок страницы
user_pref("userContent.page.illustration", true);

// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.rounding.square_urlView_item",        true);

user_pref("userChrome.urlView.full_width_padding",          true);
user_pref("userChrome.urlView.focus_item_border",           true);

user_pref("userChrome.tab.bottom_rounded_corner.all",       true);
user_pref("userChrome.tab.bottom_rounded_corner.chrome",    true);

user_pref("userChrome.urlbar.iconbox_with_separator",       true);

// поисковая строка сверху
//user_pref("userChrome.findbar.floating_on_top",             true);
