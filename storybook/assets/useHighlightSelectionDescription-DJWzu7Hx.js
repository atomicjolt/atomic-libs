import{$ as Q}from"./LiveAnnouncer-CeCcBDbP.js";import{$ as X}from"./useUpdateEffect-B888oq-t.js";import{d as Y}from"./useObjectRef-D2RG7rRi.js";import{$ as D}from"./useLocalizedStringFormatter-BmC8c4z2.js";import{r as C}from"./index-BCtMShv3.js";import{$ as ee}from"./useDescription-CqPnuqnT.js";import{H as ue}from"./useFocusable-DacP9xvE.js";var b={};b={deselectedItem:e=>`${e.item} غير المحدد`,longPressToSelect:"اضغط مطولًا للدخول إلى وضع التحديد.",select:"تحديد",selectedAll:"جميع العناصر المحددة.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"لم يتم تحديد عناصر",one:()=>`${u.number(e.count)} عنصر محدد`,other:()=>`${u.number(e.count)} عنصر محدد`})}.`,selectedItem:e=>`${e.item} المحدد`};var x={};x={deselectedItem:e=>`${e.item} не е избран.`,longPressToSelect:"Натиснете и задръжте за да влезете в избирателен режим.",select:"Изберете",selectedAll:"Всички елементи са избрани.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Няма избрани елементи",one:()=>`${u.number(e.count)} избран елемент`,other:()=>`${u.number(e.count)} избрани елементи`})}.`,selectedItem:e=>`${e.item} избран.`};var E={};E={deselectedItem:e=>`Položka ${e.item} není vybrána.`,longPressToSelect:"Dlouhým stisknutím přejdete do režimu výběru.",select:"Vybrat",selectedAll:"Vybrány všechny položky.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nevybrány žádné položky",one:()=>`Vybrána ${u.number(e.count)} položka`,other:()=>`Vybráno ${u.number(e.count)} položek`})}.`,selectedItem:e=>`Vybrána položka ${e.item}.`};var p={};p={deselectedItem:e=>`${e.item} ikke valgt.`,longPressToSelect:"Lav et langt tryk for at aktivere valgtilstand.",select:"Vælg",selectedAll:"Alle elementer valgt.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Ingen elementer valgt",one:()=>`${u.number(e.count)} element valgt`,other:()=>`${u.number(e.count)} elementer valgt`})}.`,selectedItem:e=>`${e.item} valgt.`};var v={};v={deselectedItem:e=>`${e.item} nicht ausgewählt.`,longPressToSelect:"Gedrückt halten, um Auswahlmodus zu öffnen.",select:"Auswählen",selectedAll:"Alle Elemente ausgewählt.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Keine Elemente ausgewählt",one:()=>`${u.number(e.count)} Element ausgewählt`,other:()=>`${u.number(e.count)} Elemente ausgewählt`})}.`,selectedItem:e=>`${e.item} ausgewählt.`};var A={};A={deselectedItem:e=>`Δεν επιλέχθηκε το στοιχείο ${e.item}.`,longPressToSelect:"Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",select:"Επιλογή",selectedAll:"Επιλέχθηκαν όλα τα στοιχεία.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Δεν επιλέχθηκαν στοιχεία",one:()=>`Επιλέχθηκε ${u.number(e.count)} στοιχείο`,other:()=>`Επιλέχθηκαν ${u.number(e.count)} στοιχεία`})}.`,selectedItem:e=>`Επιλέχθηκε το στοιχείο ${e.item}.`};var k={};k={deselectedItem:e=>`${e.item} not selected.`,select:"Select",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"No items selected",one:()=>`${u.number(e.count)} item selected`,other:()=>`${u.number(e.count)} items selected`})}.`,selectedAll:"All items selected.",selectedItem:e=>`${e.item} selected.`,longPressToSelect:"Long press to enter selection mode."};var I={};I={deselectedItem:e=>`${e.item} no seleccionado.`,longPressToSelect:"Mantenga pulsado para abrir el modo de selección.",select:"Seleccionar",selectedAll:"Todos los elementos seleccionados.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Ningún elemento seleccionado",one:()=>`${u.number(e.count)} elemento seleccionado`,other:()=>`${u.number(e.count)} elementos seleccionados`})}.`,selectedItem:e=>`${e.item} seleccionado.`};var h={};h={deselectedItem:e=>`${e.item} pole valitud.`,longPressToSelect:"Valikurežiimi sisenemiseks vajutage pikalt.",select:"Vali",selectedAll:"Kõik üksused valitud.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Üksusi pole valitud",one:()=>`${u.number(e.count)} üksus valitud`,other:()=>`${u.number(e.count)} üksust valitud`})}.`,selectedItem:e=>`${e.item} valitud.`};var F={};F={deselectedItem:e=>`Kohdetta ${e.item} ei valittu.`,longPressToSelect:"Siirry valintatilaan painamalla pitkään.",select:"Valitse",selectedAll:"Kaikki kohteet valittu.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Ei yhtään kohdetta valittu",one:()=>`${u.number(e.count)} kohde valittu`,other:()=>`${u.number(e.count)} kohdetta valittu`})}.`,selectedItem:e=>`${e.item} valittu.`};var f={};f={deselectedItem:e=>`${e.item} non sélectionné.`,longPressToSelect:"Appuyez de manière prolongée pour passer en mode de sélection.",select:"Sélectionner",selectedAll:"Tous les éléments sélectionnés.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Aucun élément sélectionné",one:()=>`${u.number(e.count)} élément sélectionné`,other:()=>`${u.number(e.count)} éléments sélectionnés`})}.`,selectedItem:e=>`${e.item} sélectionné.`};var z={};z={deselectedItem:e=>`${e.item} לא נבחר.`,longPressToSelect:"הקשה ארוכה לכניסה למצב בחירה.",select:"בחר",selectedAll:"כל הפריטים נבחרו.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"לא נבחרו פריטים",one:()=>`פריט ${u.number(e.count)} נבחר`,other:()=>`${u.number(e.count)} פריטים נבחרו`})}.`,selectedItem:e=>`${e.item} נבחר.`};var S={};S={deselectedItem:e=>`Stavka ${e.item} nije odabrana.`,longPressToSelect:"Dugo pritisnite za ulazak u način odabira.",select:"Odaberite",selectedAll:"Odabrane su sve stavke.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nije odabrana nijedna stavka",one:()=>`Odabrana je ${u.number(e.count)} stavka`,other:()=>`Odabrano je ${u.number(e.count)} stavki`})}.`,selectedItem:e=>`Stavka ${e.item} je odabrana.`};var g={};g={deselectedItem:e=>`${e.item} nincs kijelölve.`,longPressToSelect:"Nyomja hosszan a kijelöléshez.",select:"Kijelölés",selectedAll:"Az összes elem kijelölve.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Egy elem sincs kijelölve",one:()=>`${u.number(e.count)} elem kijelölve`,other:()=>`${u.number(e.count)} elem kijelölve`})}.`,selectedItem:e=>`${e.item} kijelölve.`};var y={};y={deselectedItem:e=>`${e.item} non selezionato.`,longPressToSelect:"Premi a lungo per passare alla modalità di selezione.",select:"Seleziona",selectedAll:"Tutti gli elementi selezionati.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nessun elemento selezionato",one:()=>`${u.number(e.count)} elemento selezionato`,other:()=>`${u.number(e.count)} elementi selezionati`})}.`,selectedItem:e=>`${e.item} selezionato.`};var T={};T={deselectedItem:e=>`${e.item} が選択されていません。`,longPressToSelect:"長押しして選択モードを開きます。",select:"選択",selectedAll:"すべての項目を選択しました。",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"項目が選択されていません",one:()=>`${u.number(e.count)} 項目を選択しました`,other:()=>`${u.number(e.count)} 項目を選択しました`})}。`,selectedItem:e=>`${e.item} を選択しました。`};var P={};P={deselectedItem:e=>`${e.item}이(가) 선택되지 않았습니다.`,longPressToSelect:"선택 모드로 들어가려면 길게 누르십시오.",select:"선택",selectedAll:"모든 항목이 선택되었습니다.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"선택된 항목이 없습니다",one:()=>`${u.number(e.count)}개 항목이 선택되었습니다`,other:()=>`${u.number(e.count)}개 항목이 선택되었습니다`})}.`,selectedItem:e=>`${e.item}이(가) 선택되었습니다.`};var j={};j={deselectedItem:e=>`${e.item} nepasirinkta.`,longPressToSelect:"Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",select:"Pasirinkti",selectedAll:"Pasirinkti visi elementai.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nepasirinktas nė vienas elementas",one:()=>`Pasirinktas ${u.number(e.count)} elementas`,other:()=>`Pasirinkta elementų: ${u.number(e.count)}`})}.`,selectedItem:e=>`Pasirinkta: ${e.item}.`};var M={};M={deselectedItem:e=>`Vienums ${e.item} nav atlasīts.`,longPressToSelect:"Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",select:"Atlasīt",selectedAll:"Atlasīti visi vienumi.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nav atlasīts neviens vienums",one:()=>`Atlasīto vienumu skaits: ${u.number(e.count)}`,other:()=>`Atlasīto vienumu skaits: ${u.number(e.count)}`})}.`,selectedItem:e=>`Atlasīts vienums ${e.item}.`};var N={};N={deselectedItem:e=>`${e.item} er ikke valgt.`,longPressToSelect:"Bruk et langt trykk for å gå inn i valgmodus.",select:"Velg",selectedAll:"Alle elementer er valgt.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Ingen elementer er valgt",one:()=>`${u.number(e.count)} element er valgt`,other:()=>`${u.number(e.count)} elementer er valgt`})}.`,selectedItem:e=>`${e.item} er valgt.`};var w={};w={deselectedItem:e=>`${e.item} niet geselecteerd.`,longPressToSelect:"Druk lang om de selectiemodus te openen.",select:"Selecteren",selectedAll:"Alle items geselecteerd.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Geen items geselecteerd",one:()=>`${u.number(e.count)} item geselecteerd`,other:()=>`${u.number(e.count)} items geselecteerd`})}.`,selectedItem:e=>`${e.item} geselecteerd.`};var V={};V={deselectedItem:e=>`Nie zaznaczono ${e.item}.`,longPressToSelect:"Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",select:"Zaznacz",selectedAll:"Wszystkie zaznaczone elementy.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nie zaznaczono żadnych elementów",one:()=>`${u.number(e.count)} zaznaczony element`,other:()=>`${u.number(e.count)} zaznaczonych elementów`})}.`,selectedItem:e=>`Zaznaczono ${e.item}.`};var _={};_={deselectedItem:e=>`${e.item} não selecionado.`,longPressToSelect:"Mantenha pressionado para entrar no modo de seleção.",select:"Selecionar",selectedAll:"Todos os itens selecionados.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nenhum item selecionado",one:()=>`${u.number(e.count)} item selecionado`,other:()=>`${u.number(e.count)} itens selecionados`})}.`,selectedItem:e=>`${e.item} selecionado.`};var K={};K={deselectedItem:e=>`${e.item} não selecionado.`,longPressToSelect:"Prima continuamente para entrar no modo de seleção.",select:"Selecionar",selectedAll:"Todos os itens selecionados.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nenhum item selecionado",one:()=>`${u.number(e.count)} item selecionado`,other:()=>`${u.number(e.count)} itens selecionados`})}.`,selectedItem:e=>`${e.item} selecionado.`};var R={};R={deselectedItem:e=>`${e.item} neselectat.`,longPressToSelect:"Apăsați lung pentru a intra în modul de selectare.",select:"Selectare",selectedAll:"Toate elementele selectate.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Niciun element selectat",one:()=>`${u.number(e.count)} element selectat`,other:()=>`${u.number(e.count)} elemente selectate`})}.`,selectedItem:e=>`${e.item} selectat.`};var L={};L={deselectedItem:e=>`${e.item} не выбрано.`,longPressToSelect:"Нажмите и удерживайте для входа в режим выбора.",select:"Выбрать",selectedAll:"Выбраны все элементы.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Нет выбранных элементов",one:()=>`${u.number(e.count)} элемент выбран`,other:()=>`${u.number(e.count)} элементов выбрано`})}.`,selectedItem:e=>`${e.item} выбрано.`};var O={};O={deselectedItem:e=>`Nevybraté položky: ${e.item}.`,longPressToSelect:"Dlhším stlačením prejdite do režimu výberu.",select:"Vybrať",selectedAll:"Všetky vybraté položky.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Žiadne vybraté položky",one:()=>`${u.number(e.count)} vybratá položka`,other:()=>`Počet vybratých položiek:${u.number(e.count)}`})}.`,selectedItem:e=>`Vybraté položky: ${e.item}.`};var G={};G={deselectedItem:e=>`Element ${e.item} ni izbran.`,longPressToSelect:"Za izbirni način pritisnite in dlje časa držite.",select:"Izberite",selectedAll:"Vsi elementi so izbrani.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Noben element ni izbran",one:()=>`${u.number(e.count)} element je izbran`,other:()=>`${u.number(e.count)} elementov je izbranih`})}.`,selectedItem:e=>`Element ${e.item} je izbran.`};var H={};H={deselectedItem:e=>`${e.item} nije izabrano.`,longPressToSelect:"Dugo pritisnite za ulazak u režim biranja.",select:"Izaberite",selectedAll:"Izabrane su sve stavke.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Nije izabrana nijedna stavka",one:()=>`Izabrana je ${u.number(e.count)} stavka`,other:()=>`Izabrano je ${u.number(e.count)} stavki`})}.`,selectedItem:e=>`${e.item} je izabrano.`};var U={};U={deselectedItem:e=>`${e.item} ej markerat.`,longPressToSelect:"Tryck länge när du vill öppna väljarläge.",select:"Markera",selectedAll:"Alla markerade objekt.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Inga markerade objekt",one:()=>`${u.number(e.count)} markerat objekt`,other:()=>`${u.number(e.count)} markerade objekt`})}.`,selectedItem:e=>`${e.item} markerat.`};var Z={};Z={deselectedItem:e=>`${e.item} seçilmedi.`,longPressToSelect:"Seçim moduna girmek için uzun basın.",select:"Seç",selectedAll:"Tüm ögeler seçildi.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Hiçbir öge seçilmedi",one:()=>`${u.number(e.count)} öge seçildi`,other:()=>`${u.number(e.count)} öge seçildi`})}.`,selectedItem:e=>`${e.item} seçildi.`};var W={};W={deselectedItem:e=>`${e.item} не вибрано.`,longPressToSelect:"Виконайте довге натиснення, щоб перейти в режим вибору.",select:"Вибрати",selectedAll:"Усі елементи вибрано.",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"Жодних елементів не вибрано",one:()=>`${u.number(e.count)} елемент вибрано`,other:()=>`Вибрано елементів: ${u.number(e.count)}`})}.`,selectedItem:e=>`${e.item} вибрано.`};var q={};q={deselectedItem:e=>`未选择 ${e.item}。`,longPressToSelect:"长按以进入选择模式。",select:"选择",selectedAll:"已选择所有项目。",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"未选择项目",one:()=>`已选择 ${u.number(e.count)} 个项目`,other:()=>`已选择 ${u.number(e.count)} 个项目`})}。`,selectedItem:e=>`已选择 ${e.item}。`};var J={};J={deselectedItem:e=>`未選取「${e.item}」。`,longPressToSelect:"長按以進入選擇模式。",select:"選取",selectedAll:"已選取所有項目。",selectedCount:(e,u)=>`${u.plural(e.count,{"=0":"未選取任何項目",one:()=>`已選取 ${u.number(e.count)} 個項目`,other:()=>`已選取 ${u.number(e.count)} 個項目`})}。`,selectedItem:e=>`已選取「${e.item}」。`};var $={};$={"ar-AE":b,"bg-BG":x,"cs-CZ":E,"da-DK":p,"de-DE":v,"el-GR":A,"en-US":k,"es-ES":I,"et-EE":h,"fi-FI":F,"fr-FR":f,"he-IL":z,"hr-HR":S,"hu-HU":g,"it-IT":y,"ja-JP":T,"ko-KR":P,"lt-LT":j,"lv-LV":M,"nb-NO":N,"nl-NL":w,"pl-PL":V,"pt-BR":_,"pt-PT":K,"ro-RO":R,"ru-RU":L,"sk-SK":O,"sl-SI":G,"sr-SP":H,"sv-SE":U,"tr-TR":Z,"uk-UA":W,"zh-CN":q,"zh-TW":J};function te(e){return e&&e.__esModule?e.default:e}function re(e,u){let{getRowText:l=c=>{var s,a,r,o;return(o=(s=(a=u.collection).getTextValue)===null||s===void 0?void 0:s.call(a,c))!==null&&o!==void 0?o:(r=u.collection.getItem(c))===null||r===void 0?void 0:r.textValue}}=e,n=D(te($),"@react-aria/grid"),t=u.selectionManager.rawSelection,i=C.useRef(t),m=Y(()=>{var c;if(!u.selectionManager.isFocused||t===i.current){i.current=t;return}let s=B(t,i.current),a=B(i.current,t),r=u.selectionManager.selectionBehavior==="replace",o=[];if(u.selectionManager.selectedKeys.size===1&&r){if(u.collection.getItem(u.selectionManager.selectedKeys.keys().next().value)){let d=l(u.selectionManager.selectedKeys.keys().next().value);d&&o.push(n.format("selectedItem",{item:d}))}}else if(s.size===1&&a.size===0){let d=l(s.keys().next().value);d&&o.push(n.format("selectedItem",{item:d}))}else if(a.size===1&&s.size===0&&u.collection.getItem(a.keys().next().value)){let d=l(a.keys().next().value);d&&o.push(n.format("deselectedItem",{item:d}))}u.selectionManager.selectionMode==="multiple"&&(o.length===0||t==="all"||t.size>1||i.current==="all"||((c=i.current)===null||c===void 0?void 0:c.size)>1)&&o.push(t==="all"?n.format("selectedAll"):n.format("selectedCount",{count:t.size})),o.length>0&&Q(o.join(" ")),i.current=t});X(()=>{if(u.selectionManager.isFocused)m();else{let c=requestAnimationFrame(m);return()=>cancelAnimationFrame(c)}},[t,u.selectionManager.isFocused])}function B(e,u){let l=new Set;if(e==="all"||u==="all")return l;for(let n of e.keys())u.has(n)||l.add(n);return l}function le(e){return e&&e.__esModule?e.default:e}function me(e){let u=D(le($),"@react-aria/grid"),l=ue(),n=(l==="pointer"||l==="virtual"||l==null)&&typeof window<"u"&&"ontouchstart"in window,t=C.useMemo(()=>{let m=e.selectionManager.selectionMode,c=e.selectionManager.selectionBehavior,s;return n&&(s=u.format("longPressToSelect")),c==="replace"&&m!=="none"&&e.hasItemActions?s:void 0},[e.selectionManager.selectionMode,e.selectionManager.selectionBehavior,e.hasItemActions,u,n]);return ee(t)}export{me as $,re as a,$ as b};
