# STŘEDNÍ PRŮMYSLOVÁ ŠKOLA
# MLADÁ BOLESLAV


## ROČNÍKOVÁ PRÁCE


**Olesia Sarzhevska**


Mladá Boleslav 2026


\newpage

# STŘEDNÍ PRŮMYSLOVÁ ŠKOLA
# MLADÁ BOLESLAV


## Interaktivní hra pro sestavení počítače

Autor: Olesia Sarzhevska  
Studijní obor: 18-20-M/01 Informační technologie  
Vedoucí práce: [doplní student]  
Mladá Boleslav 2026


\newpage

## Prohlášení

Prohlašuji, že jsem svou ročníkovou práci vypracovala samostatně a použila jsem pouze podklady, literaturu, software a další zdroje uvedené v přiloženém seznamu.

Nemám závažný důvod proti zpřístupňování této ročníkové práce v souladu se zákonem č. 121/2000 Sb., o právu autorském, o právech souvisejících s právem autorským a o změně některých zákonů, v platném znění.

V Mladé Boleslavi dne ____________                            podpis: ____________


\newpage

## Úvod

Cílem této ročníkové práce je popsat návrh a realizaci jednoduché interaktivní aplikace, která hravou formou seznamuje uživatele se základními komponentami osobního počítače. Vytvořený projekt je zpracován jako desktopová aplikace v prostředí Electron, přičemž uživatelské rozhraní je vytvořeno pomocí knihovny React a jazyků TypeScript a CSS. Výsledkem je program, ve kterém uživatel postupně skládá jednotlivé části počítače do počítačové skříně a současně dostává průběžné textové pokyny.

Vybrané téma spojuje oblast programování s praktickým učivem informačních technologií. Místo čistě technické ukázky nebo statické prezentace byl zvolen interaktivní princip, protože ten je pro uživatele názornější a lépe podporuje zapamatování jednotlivých součástek i jejich pořadí při montáži. Aplikace je navíc stylizována do výrazného vizuálního motivu inspirovaného světem animovaného seriálu SpongeBob, což výsledku dodává osobitý vzhled a odlišuje jej od běžných školních projektů.

Práce se zaměřuje nejen na samotný popis výsledného programu, ale také na použité technologie, architekturu aplikace, princip fungování hlavní herní obrazovky, způsob navigace mezi stránkami a hlavní nedostatky současného řešení. Součástí dokumentace je rovněž zhodnocení projektu a návrhy možného budoucího rozšíření.


\newpage

## Použité technologie

### Electron

Základ projektu tvoří framework Electron, který umožňuje vytvářet desktopové aplikace pomocí webových technologií. Podle oficiální dokumentace se aplikace v Electronu skládá především z hlavního procesu a renderer procesu, přičemž hlavní proces spravuje životní cyklus aplikace a okna, zatímco renderer vykresluje uživatelské rozhraní [1]. Tato architektura byla pro projekt vhodná zejména proto, že umožnila připravit aplikaci jako samostatně spustitelný program, nikoliv pouze jako webovou stránku v prohlížeči.

V souboru `src/main.ts` je vytvořeno hlavní okno aplikace. Okno má pevně definovanou minimální velikost a při spuštění se maximalizuje. To je výhodné hlavně proto, že rozložení herní obrazovky je postavené na absolutních a relativních pozicích a při příliš malé ploše by se uživatelské prvky překrývaly.

```ts
const mainWindow = new BrowserWindow({
  width: 920,
  height: 700,
  minHeight: 700,
  minWidth: 920,
});
```

Zdrojový kód č. 1: Vytvoření hlavního okna aplikace

### React

Uživatelské rozhraní bylo vytvořeno pomocí knihovny React. React umožňuje skládat rozhraní z jednotlivých komponent a pracovat se stavem aplikace pomocí hooků, například `useState` a `useRef` [2][3]. V projektu jsou této možnosti využity především na domovské obrazovce a v hlavní herní části.

Rozdělení do komponent zjednodušuje správu programu. Domovská obrazovka a herní obrazovka jsou oddělené, což zlepšuje přehlednost kódu a usnadňuje další rozšiřování. Zároveň je možné logiku jednotlivých částí aplikace soustředit do odpovídajících souborů.

### React Router

Pro přepínání mezi úvodní obrazovkou a samotnou hrou je použit `HashRouter`. Oficiální dokumentace uvádí, že `HashRouter` ukládá aktuální cestu do hash části adresy, takže není posílána serveru [4]. V desktopové aplikaci založené na Electronu je tento přístup praktický, protože nevyžaduje speciální konfiguraci serveru ani složité směrování při nasazení.

```tsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
  </Routes>
</HashRouter>
```

Zdrojový kód č. 2: Definice routingu mezi obrazovkami

### TypeScript a CSS

Zdrojové soubory jsou psány převážně v TypeScriptu. TypeScript rozšiřuje JavaScript o statické typování, které pomáhá zachytit část chyb už při vývoji [5]. V daném projektu jsou typy použity především u referencí na HTML prvky, například `useRef<HTMLDivElement>(null)`. Stylování je rozdělené do více CSS souborů podle jednotlivých částí aplikace, což pomáhá oddělit vizuální definice od logiky programu.


\newpage

## Návrh aplikace a uživatelský princip

### Hlavní myšlenka projektu

Základním cílem programu je naučit uživatele rozpoznat a ve správném pořadí umístit důležité hardwarové součásti počítače. Hra nepracuje s komplikovanou simulací kabeláže ani s technickými parametry komponent. Místo toho je záměrně zjednodušena tak, aby se uživatel soustředil na logickou posloupnost skládání. Tím projekt plní vzdělávací i prezentační funkci.

Po spuštění aplikace se uživateli zobrazí úvodní obrazovka s výrazným textem a tlačítkem `START`. Po stisknutí tlačítka je přesměrován na herní obrazovku. Na levé straně se nachází panel komponent, které je možné vybrat. Uprostřed nebo v pravé části obrazovky je zobrazena prázdná počítačová skříň, do které se části postupně vkládají. Pokud uživatel zvolí správnou součástku a klikne na správné místo, hra postoupí do další fáze.

### Pořadí skládání komponent

Program pracuje s osmi hlavními položkami:

1. základní deska,
2. procesor,
3. chladič procesoru,
4. paměť RAM,
5. zdroj napájení,
6. grafická karta,
7. disk,
8. systémové ventilátory.

Toto pořadí odpovídá základní logice montáže počítače. Nejde sice o detailní servisní manuál, ale o srozumitelnou demonstrační posloupnost, která uživateli umožní pochopit, že některé komponenty na sebe přímo navazují a nelze je instalovat zcela nahodile. Program proto nepovolí vložení procesoru před základní deskou nebo ventilátorů před diskem.

### Herní komunikace s uživatelem

Zajímavým prvkem aplikace je textová komunikace s uživatelem. Po každém správném kroku se na obrazovce objeví krátká pochvala a následně nová instrukce. Tento princip má dvě výhody. Za prvé uživatel dostává okamžitou zpětnou vazbu, zda postupuje správně. Za druhé jsou informace podány odlehčenou a zábavnou formou, což podporuje přístupnost programu i pro méně zkušené uživatele.

Vedle textu se mění také doprovodný obrázek postavičky Planktona. Obrázky vytvářejí dojem, že postava uživatele celým procesem provází. Díky tomu aplikace nepůsobí jen jako technické cvičení, ale jako stylizovaná hra s vlastním charakterem.


\newpage

## Implementace programu

### Struktura projektu

Projekt je rozdělen do několika základních částí. Hlavní proces Electronu je umístěn v souboru `src/main.ts`. Renderer část, která načítá styly a React aplikaci, je rozdělena do souborů `src/renderer.ts` a `src/app.tsx`. Navigace mezi stránkami je řešena v `src/pages/AppRouter.tsx`. Samotné dvě obrazovky se nacházejí ve složkách `src/pages/Home` a `src/pages/Game`.

Výhodou tohoto uspořádání je jasné oddělení odpovědností. Spouštění okna a životní cyklus aplikace řeší Electron, zatímco veškeré uživatelské rozhraní a herní logika jsou soustředěny v React komponentách.

### Domovská obrazovka

Komponenta `Home.tsx` představuje vstupní stránku aplikace. Obsahuje několik textových řádků, tlačítko `START` a tematický obrázek. Celý vizuální styl je definován v souboru `Home.css`, kde je použito kontrastní barevné schéma s černým pozadím, červenými a tyrkysovými prvky a fantasy písmem.

Domovská obrazovka má především motivační funkci. Neslouží k nastavování parametrů ani k výběru obtížnosti. Jejím úkolem je uživatele vizuálně vtáhnout do tématu a jednoznačně ho nasměrovat k zahájení hry.

### Stav aplikace v herní části

Nejdůležitější soubor projektu představuje `Game.tsx`. Zde je definován stav celé interakce. Program používá proměnnou `selectedId`, která si pamatuje aktuálně zvolenou součástku, textovou proměnnou `info` pro instrukce a objekt `placed`, jenž eviduje, které díly již byly vloženy.

```ts
const [selectedId, setSelectedId] = useState(0);
const [info, setInfo] = useState("Všechno začíná u mámy – vlož MOTHERbord!");
const [placed, setPlaced] = useState({
  1: false, 2: false, 3: false, 4: false,
});
```

Zdrojový kód č. 3: Základ stavové logiky komponenty `Game`

Zvolený způsob řízení je jednoduchý a dobře čitelný. Každá součástka má vlastní obslužnou funkci, která nejprve zkontroluje, zda byly splněny podmínky pro její vložení, a poté provede změny v rozhraní. Pokud uživatel postupuje špatně, program mu zobrazí upozornění.

### Využití referencí na DOM prvky

Pro jednotlivé pozice uvnitř počítačové skříně i pro položky v levém panelu jsou použity `refs`. Tím lze přímo měnit styl konkrétních prvků, například skrýt již použitou součástku nebo změnit pozadí cílové oblasti. Tento způsob řešení není v Reactu nejmodernější, ale pro menší školní projekt je praktický a snadno pochopitelný.

Po správném vložení komponenty se odpovídající tlačítko skryje, odemkne se další cílová oblast a změní se vzhled místa ve skříni tak, aby uživatel viděl, že součástka byla opravdu nainstalována. Následující ukázka ilustruje stejný princip:

```ts
if (selectedId === 2 && cpuButton.current && cpuHolderRef.current) {
  cpuButton.current.style.display = "none";
  cpuHolderRef.current.style.background = "url('/src/Images/cpu.png')";
  setPlaced((prev) => ({ ...prev, 2: true }));
}
```

Zdrojový kód č. 4: Reakce na správné vložení procesoru

### Grafické rozhraní a rozložení

Herní obrazovka je postavena jako kombinace panelu součástek a interaktivní plochy počítačové skříně. V CSS jsou použity pevné rozměry, absolutní pozicování a `background` obrázky. Díky tomu je možné přesně umístit klikací oblasti na odpovídající místa ve skříni. Současně jde ale o řešení, které je citlivé na změny velikosti okna.

V kódu je sice přidán jednoduchý media query blok pro menší šířky, avšak responzivita je jen částečná. Při jiných poměrech stran nebo na menších displejích může být orientace v rozhraní složitější. Přesto je vzhledem k charakteru projektu dosaženo dobré vizuální názornosti.

### Silné stránky implementace

Mezi hlavní přednosti implementace patří především čitelné rozdělení programu na dvě stránky, jasná návaznost jednotlivých kroků a okamžitá zpětná vazba. Uživatelský cíl je od první chvíle srozumitelný a herní smyčka je intuitivní: vybrat součástku, kliknout na správné místo, přečíst novou nápovědu a pokračovat.

Za přínosné lze považovat i to, že autor projektu využívá několik technologií současně. Prakticky zde kombinuje Electron, React, TypeScript, směrování a práci s grafickými assety. Na rozsah školní ročníkové práce jde o vhodně zvolený soubor nástrojů.


\newpage

## Zhodnocení, testování a možnosti rozšíření

### Ověření funkčnosti

Funkčnost projektu byla ověřena rozborem zdrojového kódu a spuštěním nástroje ESLint. Kontrola neodhalila žádné chyby blokující sestavení aplikace, ale ukázala několik varování. Jedná se především o vícenásobný import stejného obrázku, nevyužité importy dekorativních obrázků a o stavovou proměnnou `setPlanktonImg`, která je definována, ale dále se nepoužívá. Tato zjištění znamenají, že aplikace je v základní podobě funkční, avšak část kódu by si zasloužila vyčištění.

Vedle toho je v textových řetězcích ve zdrojových souborech patrný problém s kódováním znaků. Česká diakritika je v několika větách poškozena a v editoru se zobrazuje nečitelně. Z pohledu uživatelského dojmu jde o důležitý nedostatek, protože právě textové instrukce jsou jedním z hlavních prvků celé hry.

### Současná omezení

Program je koncipován jako lineární vzdělávací hra. To znamená, že uživatel postupuje stále stejným sledem kroků a po dokončení montáže nemá k dispozici další úrovně, bodování ani ukládání výsledků. Aplikace proto dobře slouží jako ukázka principu, ale méně už jako dlouhodobě hratelný produkt.

Dalším omezením je technické řešení grafiky. Přímé nastavování stylů přes `refs` a pevné pozice fungují pro menší projekt, avšak u větší aplikace by bylo vhodnější používat více stavově řízené vykreslování a komponentový přístup. Tím by bylo snazší přidávat animace, měnit rozložení nebo vytvářet více herních scén.

V souboru `main.ts` jsou po spuštění automaticky otevřeny vývojářské nástroje. To je užitečné při vývoji, ale pro finální verzi by bylo vhodné tuto část odstranit. Uživatel by tak po spuštění viděl pouze samotnou aplikaci bez technických panelů.

### Možná vylepšení

Do budoucna lze projekt rozšířit několika směry. Prvním krokem by bylo opravit kódování textů a odstranit zbytečné importy. Následně by bylo vhodné doplnit závěrečnou obrazovku s vyhodnocením úspěšnosti, měření času nebo počtem chybných pokusů. Tím by aplikace získala výraznější herní motivaci.

Další možností je rozšířit vzdělávací obsah. U každé komponenty by se po správném vložení mohla zobrazit krátká informační karta s popisem její funkce, typickými parametry nebo fotografií reálné součástky. Projekt by se tak posunul od jednoduché interakce směrem k plnohodnotnější výukové pomůcce.

Zajímavé by bylo také zavést více úrovní obtížnosti. Začátečnický režim by nabízel průběžné nápovědy a zvýrazněná místa v počítačové skříni, zatímco pokročilý režim by vyžadoval lepší znalost pořadí a názvů komponent. Takový přístup by rozšířil cílovou skupinu uživatelů.


\newpage

## Závěr

Ročníková práce představuje desktopovou aplikaci, která zábavnou formou demonstruje základní princip skládání osobního počítače. Projekt spojuje moderní webové technologie s praktickým tématem z oblasti hardwaru a ukazuje, že i relativně malá aplikace může být zpracována přehledně a s výrazným vizuálním stylem.

Z technického hlediska práce potvrzuje, že Electron a React jsou vhodnou kombinací pro tvorbu menších interaktivních desktopových programů. Implementace sice obsahuje několik rezerv, například slabší responzivitu, nevyčištěné části kódu a problémy s kódováním českých textů, avšak hlavní cíl byl splněn. Aplikace umožňuje uživateli projít všemi důležitými kroky montáže a poskytuje mu okamžitou zpětnou vazbu.

Za největší přínos projektu lze považovat propojení edukativního obsahu s hravou prezentací. Výsledkem není pouze technické cvičení, ale program s vlastním charakterem, který může sloužit jako základ pro další rozšiřování. Při budoucím doplnění většího množství informací, lepší grafické adaptace a propracovanější herní logiky by se mohl projekt proměnit v plnohodnotnou výukovou aplikaci pro začínající uživatele počítačového hardwaru.


\newpage

## Přílohy

### Seznam zdrojových kódů

Zdrojový kód č. 1: Vytvoření hlavního okna aplikace  
Zdrojový kód č. 2: Definice routingu mezi obrazovkami  
Zdrojový kód č. 3: Základ stavové logiky komponenty `Game`  
Zdrojový kód č. 4: Reakce na správné vložení procesoru

### Seznam příloh

Příloha A: Zdrojový kód projektu uložený ve složce aplikace  
Příloha B: Obrázkové assety použité v uživatelském rozhraní


\newpage

## Zdroje

[1] Electron. Process Model [online]. [cit. 2026-04-21]. Dostupné z: https://www.electronjs.org/docs/latest/tutorial/process-model  
[2] React. React [online]. [cit. 2026-04-21]. Dostupné z: https://react.dev/  
[3] React. useRef [online]. [cit. 2026-04-21]. Dostupné z: https://react.dev/reference/react/useRef  
[4] React Router. HashRouter [online]. [cit. 2026-04-21]. Dostupné z: https://reactrouter.com/api/declarative-routers/HashRouter  
[5] TypeScript. The TypeScript Handbook [online]. [cit. 2026-04-21]. Dostupné z: https://www.typescriptlang.org/docs/handbook/intro  
[6] Zdrojové soubory projektu: `package.json`, `src/main.ts`, `src/app.tsx`, `src/pages/AppRouter.tsx`, `src/pages/Home/Home.tsx`, `src/pages/Game/Game.tsx`, `src/pages/Home/Home.css`, `src/pages/Game/Game.css`.
