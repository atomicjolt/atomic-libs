import{$ as W}from"./useObjectRef-BO7mrmvR.js";import{y as q}from"./useFocusable-B7cTVP20.js";import{g as Q}from"./useSelectableItem-C-hNvN1k.js";import{$ as X}from"./useLocalizedStringFormatter-BJB32GAh.js";import{$ as Y}from"./useOverlayTrigger-BaVZjogA.js";var l={};l={longPressMessage:"اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"};var i={};i={longPressMessage:"Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"};var p={};p={longPressMessage:"Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"};var g={};g={longPressMessage:"Langt tryk eller tryk på Alt + pil ned for at åbne menuen"};var c={};c={longPressMessage:"Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"};var d={};d={longPressMessage:"Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"};var $={};$={longPressMessage:"Long press or press Alt + ArrowDown to open menu"};var f={};f={longPressMessage:"Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"};var x={};x={longPressMessage:"Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"};var D={};D={longPressMessage:"Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"};var A={};A={longPressMessage:"Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."};var b={};b={longPressMessage:"לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"};var B={};B={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"};var P={};P={longPressMessage:"Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"};var v={};v={longPressMessage:"Premere a lungo o premere Alt + Freccia giù per aprire il menu"};var m={};m={longPressMessage:"長押しまたは Alt+下矢印キーでメニューを開く"};var E={};E={longPressMessage:"길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"};var C={};C={longPressMessage:"Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."};var k={};k={longPressMessage:"Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"};var y={};y={longPressMessage:"Langt trykk eller trykk Alt + PilNed for å åpne menyen"};var M={};M={longPressMessage:"Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"};var F={};F={longPressMessage:"Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"};var h={};h={longPressMessage:"Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"};var j={};j={longPressMessage:"Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"};var z={};z={longPressMessage:"Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"};var w={};w={longPressMessage:"Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"};var S={};S={longPressMessage:"Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"};var L={};L={longPressMessage:"Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"};var T={};T={longPressMessage:"Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"};var N={};N={longPressMessage:"Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"};var R={};R={longPressMessage:"Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"};var K={};K={longPressMessage:"Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"};var I={};I={longPressMessage:"长按或按 Alt + 向下方向键以打开菜单"};var U={};U={longPressMessage:"長按或按 Alt+向下鍵以開啟功能表"};var O={};O={"ar-AE":l,"bg-BG":i,"cs-CZ":p,"da-DK":g,"de-DE":c,"el-GR":d,"en-US":$,"es-ES":f,"et-EE":x,"fi-FI":D,"fr-FR":A,"he-IL":b,"hr-HR":B,"hu-HU":P,"it-IT":v,"ja-JP":m,"ko-KR":E,"lt-LT":C,"lv-LV":k,"nb-NO":y,"nl-NL":M,"pl-PL":F,"pt-BR":h,"pt-PT":j,"ro-RO":z,"ru-RU":w,"sk-SK":S,"sl-SI":L,"sr-SP":T,"sv-SE":N,"tr-TR":R,"uk-UA":K,"zh-CN":I,"zh-TW":U};function uu(s){return s&&s.__esModule?s.default:s}function tu(s,e,o){let{type:H="menu",isDisabled:r,trigger:a="press"}=s,t=W(),{triggerProps:n,overlayProps:G}=Y({type:H},e,o),Z=u=>{if(!r&&!(a==="longPress"&&!u.altKey)&&o&&o.current)switch(u.key){case"Enter":case" ":if(a==="longPress")return;case"ArrowDown":"continuePropagation"in u||u.stopPropagation(),u.preventDefault(),e.toggle("first");break;case"ArrowUp":"continuePropagation"in u||u.stopPropagation(),u.preventDefault(),e.toggle("last");break;default:"continuePropagation"in u&&u.continuePropagation()}},_=X(uu(O),"@react-aria/menu"),{longPressProps:J}=Q({isDisabled:r||a!=="longPress",accessibilityDescription:_.format("longPressMessage"),onLongPressStart(){e.close()},onLongPress(){e.open("first")}}),V={preventFocusOnPress:!0,onPressStart(u){u.pointerType!=="touch"&&u.pointerType!=="keyboard"&&!r&&(q(u.target),e.open(u.pointerType==="virtual"?"first":null))},onPress(u){u.pointerType==="touch"&&!r&&e.toggle()}};return delete n.onPress,{menuTriggerProps:{...n,...a==="press"?V:J,id:t,onKeyDown:Z},menuProps:{...G,"aria-labelledby":t,autoFocus:e.focusStrategy||!0,onClose:e.close}}}export{tu as $};
