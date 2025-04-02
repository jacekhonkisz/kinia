import { MedicationCard } from '../types/quiz';

export const medications: MedicationCard[] = [
  {
    id: '1',
    name: 'Morfina (MF)',
    group: 'Alkaloid opium',
    dosage: 'Dawka doustna powinna być 2-3 krotnie wyższa od dawki parentenalnej. Drogi podania: i.v., s.c., s.l., p.r., podpajęczynówkowa, zewnątrzoponowa.',
    mechanism: 'Agonista receptorów opioidowych. Działanie ośrodkowe i obwodowe. Działanie przeciwkaszlowe, łagodzenie uczucia duszności. Brak efektu pułapowego.',
    indications: 'Ból receptorowy ostry i przewlekły. Silny ból nowotworowy. Zawał mięśnia sercowego, duszność, kaszel w zaawansowanej chorobie nowotworowej. Silny i bardzo silny ból.',
    sideEffects: 'Depresja ośrodka oddechowego, zaparcia, suchość w jamie ustnej'
  },
  {
    id: '2',
    name: 'Butylobromek hioscyny',
    group: 'Alkaloid tropanowy',
    dosage: 'Działanie leku po 10\' s.c./i.v./i.m.: 1-2 godz., p.o. Nieoperacyjna niedrożność jelit z kolką (20 mg s.c., 60 mg/doba CSCI), można zwiększyć dawkę do 120 mg/doba. Rzężenia przedśmiertne (20 mg s.c., 20-60 mg CSCI lub 20 mg s.c. co godzinę w razie konieczności.',
    mechanism: 'Antagonista ośrodkowych i obwodowych receptorów muskarynowych mięśni gładkich, m. sercowego, węzła zatokowo-przedsionkowego i przedsionkowo-komorowego. Rozkurczowe, hamuje wydzielanie śliny, zwalnia czynność serca, senność',
    indications: 'Bolesne skurcze przewodu pokarmowego i dróg moczowych, kolka żółciowa, choroba wrzodowa, skurcze przełyku, wymioty, zmniejszenie ilości wydzieliny w drogach oddechowych',
    sideEffects: 'Obniżenie ciśnienia tętniczego krwi, tachykardia, zawroty głowy, suchość w jamie ustnej'
  },
  {
    id: '3',
    name: 'Metoklopramid',
    group: 'Prokinetyk. Blokuje ośrodkowe i obwodowe receptory dopaminowe D2 oraz receptory serotoninowe 5-HT3.',
    dosage: 'Dawki: 10 mg do 3 razy na dobę p.o. lub i.v. Początek działania występuje po 1–3 min. po podaniu i.v. i po 10–15 min. po podaniu i.m.',
    mechanism: 'Silnie przeciwwymiotny. Zwiększa siłę skurczów i napięcie dolnego zwieracza przełyku. Przyspiesza perystaltykę żołądka, dwunastnicy i jelita cienkiego.',
    indications: 'Stosowany w zaburzeniach motorycznej czynności przewodu pokarmowego, w refluksie żołądkowo – przełykowym, w zapobieganiu nudnościom i wymiotom. Gastropareza, dyspepsja.',
    sideEffects: 'Objawy pozapiramidowe w postaci zmian napięcia mięśniowego, objawy parkinsonizmu, obniżenia ciśnienia tętniczego krwi'
  },
  {
    id: '4',
    name: 'Kwas pamidronowy (Pamidronat)',
    group: 'Bisfosfoniany',
    dosage: '90 mg i.v. (początek działania), kontynuacja leczenia 60-90 mg i.v. co 3-4 tygodnie. Dawka 120 mg i.v. powtarzać co 2-4 miesiące.',
    mechanism: 'Regulacja gospodarki wapniowej w organizmie. Inhibitor resorpcji kości przez osteoklasty. Wpływ na parametry biochemiczne, zmniejszając resorpcję kości.',
    indications: 'Leczenie stanów ze zwiększoną aktywnością osteoblastów (przerzuty nowotworowe do kości, szpiczak mnogi, hiperkalcemia w przebiegu choroby nowotworowej, osteoporoza).',
    sideEffects: 'Po podaży i.v.: zaburzenia gospodarki wodno – elektrolitowej'
  },
  {
    id: '5',
    name: 'Ketoprofen',
    group: 'NLPZ pochodna kwasu propionowego',
    dosage: 'Infuzja i.v. od 100 mg do 200 mg w 100 ml 0,9% podać od 30 min. do 60 min. (przerwa min. 8 godz. pomiędzy infuzjami).',
    mechanism: 'Silne działanie przeciwzapalne, przeciwbólowe, przeciwgorączkowe. Hamowanie cyklooksygenazy COX-1 i COX-2.',
    indications: 'Ból różnego pochodzenia o umiarkowanym nasileniu. Lek przeciwzapalny w chorobach tkanki układowej łącznej, w bólach nowotworowych, w leczeniu zmian urazowych, przeciążeniowych i zapalnych tkanek okołostawowych oraz w nerwobólach.',
    sideEffects: 'Zaburzenia głównie ze strony przewodu pokarmowego, nerek'
  },
  // Nowe leki z części 1
  {
    id: '51',
    name: 'Rysperydon (51)',
    group: 'Atypowy lek przeciwpsychotyczny',
    dosage: 'Doustnie (p.o.): zwykle 2–6 mg/dobę (dawki podzielone); Iniekcje (forma o przedłużonym uwalnianiu): co 2 tygodnie wg zaleceń lekarza',
    mechanism: 'Antagonista receptorów dopaminowych (D₂) i serotoninowych (5-HT₂A). Dodatkowo oddziałuje na receptory adrenergiczne i histaminowe, co wpływa na profil działań niepożądanych.',
    indications: 'Schizofrenia, zaburzenia schizoafektywne, epizody maniakalne w przebiegu CHAD',
    sideEffects: 'Objawy pozapiramidowe, przyrost masy ciała, zaburzenia metaboliczne, sedacja, zawroty głowy'
  },
  {
    id: '52',
    name: 'Baklofen (52)',
    group: 'Miorelaksant ośrodkowy',
    dosage: 'Doustnie (p.o.): początkowo 15 mg/dobę w 3 dawkach, stopniowo zwiększany do 30–75 mg/dobę (max ~100 mg/dobę); Dożylnie (rzadziej): wlewy w ciężkich przypadkach',
    mechanism: 'Agonista receptorów GABA_B → hamowanie odruchów monosynaptycznych i polisynaptycznych, zmniejszenie napięcia mięśni szkieletowych.',
    indications: 'Spastyczność mięśni (np. stwardnienie rozsiane, urazy rdzenia kręgowego)',
    sideEffects: 'Sedacja, zawroty głowy, osłabienie mięśni, nudności, możliwe obniżenie ciśnienia krwi'
  },
  {
    id: '3',
    name: 'Dihydrokodeina (3)',
    group: 'Półsyntetyczny opioid analgetyczny',
    dosage: 'Doustnie (p.o.): zwykle 60–120 mg/dobę w dawkach podzielonych; preparaty o przedłużonym uwalnianiu dostępne',
    mechanism: 'Agonista receptorów opioidowych μ → zahamowanie przewodzenia bodźców bólowych i zmniejszenie percepcji bólu.',
    indications: 'Ból umiarkowany do silnego, szczególnie przewlekły',
    sideEffects: 'Zaparcia, nudności, wymioty, sedacja, zawroty głowy, ryzyko depresji oddechowej, możliwość uzależnienia'
  },
  {
    id: '28',
    name: 'Dalteparyna (28)',
    group: 'Heparyna drobnocząsteczkowa (LMWH)',
    dosage: 'Podskórnie (s.c.): dawka zależna od masy ciała i wskazania; profilaktycznie zwykle 2500–5000 j.m./dobę, przy leczeniu wyższe dawki wg zaleceń',
    mechanism: 'Wiąże się z antytrombiną III, nasilając jej hamowanie czynnika Xa (i w mniejszym stopniu IIa) → zmniejszenie tworzenia zakrzepów.',
    indications: 'Profilaktyka i leczenie żylnej choroby zakrzepowo-zatorowej (zakrzepica żył głębokich, zatorowość płucna)',
    sideEffects: 'Krwawienia, trombocytopenia (m.in. HIT), reakcje skórne w miejscu wstrzyknięcia'
  },
  {
    id: '53',
    name: 'Metronidazol (53)',
    group: 'Chemioterapeutyk z grupy nitroimidazoli',
    dosage: 'Doustnie (p.o.): 500 mg co 8 h; Dożylnie (i.v.): 500 mg co 8 h; Dopochwowo: globulki, kremy',
    mechanism: 'Redukowana grupa nitrowa wnika do drobnoustroju → uszkodzenie DNA przez zahamowanie syntezy kwasów nukleinowych.',
    indications: 'Zakażenia beztlenowe, rzęsistkowica, lamblioza, ameboza, eradykacja Helicobacter pylori (w skojarzeniu), profilaktyka okołozabiegowa',
    sideEffects: 'Zaburzenia żołądkowo-jelitowe, metaliczny posmak, reakcja disulfiramopodobna z alkoholem, bóle głowy'
  },
  {
    id: '78',
    name: 'Kapsaicyna (78)',
    group: 'Alkaloid roślinny – stosowany miejscowo',
    dosage: 'Miejscowo: krem, maść, plastry; stężenie zależne od preparatu (np. 0,025–0,075%)',
    mechanism: 'Pobudza receptory TRPV1 → początkowe uczucie pieczenia, następnie zmniejsza wydzielanie substancji P i przewodnictwo bólowe w nerwach obwodowych.',
    indications: 'Bóle neuropatyczne (np. neuralgia poherpetyczna), bóle mięśniowo-stawowe',
    sideEffects: 'Miejscowe podrażnienie, zaczerwienienie, pieczenie, łzawienie (przy kontakcie z błonami śluzowymi)'
  },
  {
    id: '79',
    name: 'Digoksyna (79)',
    group: 'Glikozyd nasercowy',
    dosage: 'Doustnie (p.o.): dawka nasycająca 0,5–1 mg (w dawkach podzielonych), dawka podtrzymująca 0,125–0,25 mg/dobę; Dożylnie (i.v.): w sytuacjach wymagających szybkiego działania',
    mechanism: 'Hamuje ATP-azę Na⁺/K⁺ w kardiomiocytach → wzrost stężenia Na⁺ wewnątrz komórki → zwiększona wymiana Na⁺/Ca²⁺ → efekt inotropowy dodatni.',
    indications: 'Przewlekła niewydolność serca, kontrola rytmu komór (migotanie przedsionków)',
    sideEffects: 'Arytmie, zaburzenia widzenia (np. widzenie na żółto lub zielono), nudności, wymioty, bóle głowy'
  },
  {
    id: '55',
    name: 'Chloropromazyna (55)',
    group: 'Neuroleptyk klasyczny (fenotiazyna)',
    dosage: 'Doustnie (p.o.): zwykle 25–100 mg/dobę w dawkach podzielonych; Domięśniowo (i.m.)/Dożylnie (i.v.): w stanach ostrych',
    mechanism: 'Antagonista receptorów dopaminowych D₂, a także blokada receptorów cholinergicznych, adrenergicznych i histaminowych → działanie sedatywne, hipotensyjne, przeciwwymiotne.',
    indications: 'Schizofrenia, inne psychozy, stany pobudzenia psychoruchowego, czasem uporczywa czkawka',
    sideEffects: 'Sedacja, hipotonia ortostatyczna, objawy pozapiramidowe, suchość w ustach, zaburzenia widzenia'
  },
  {
    id: '6',
    name: 'Fenytoina (6)',
    group: 'Lek przeciwpadaczkowy (pochodna hydantoiny)',
    dosage: 'Doustnie (p.o.): zwykle 200–400 mg/dobę w dawkach podzielonych; Dożylnie (i.v.): – ostrożnie (ryzyko spadku ciśnienia, arytmie)',
    mechanism: 'Blokada kanałów sodowych zależnych od napięcia → stabilizacja błony komórkowej, zmniejszenie nadpobudliwości neuronalnej.',
    indications: 'Padaczka (częściowe, uogólnione toniczno-kloniczne), profilaktyka napadów po urazie OUN',
    sideEffects: 'Przerost dziąseł, hirsutyzm, osteomalacja, zaburzenia OUN (oczopląs, ataksja), reakcje skórne, spadek ciśnienia przy szybkim wlewie (i.v.)'
  },
  {
    id: '31',
    name: 'Metamizol (31)',
    group: 'Nieopioidowy lek przeciwbólowy i przeciwgorączkowy',
    dosage: 'Doustnie (p.o.): 500–1000 mg jednorazowo, max 3000 mg/dobę; Dożylnie (i.v.)/Domięśniowo (i.m.): 500–1000 mg, max 2,5 g/dobę',
    mechanism: 'Hamowanie cyklooksygenazy (COX) oraz wpływ na układ opioidowy i endogenny system antynocyceptywny → działanie przeciwbólowe, przeciwgorączkowe; działanie przeciwzapalne słabsze.',
    indications: 'Bóle o dużym nasileniu, gorączka nieodpowiadająca innym lekom',
    sideEffects: 'Agranulocytoza (rzadko, lecz poważna), spadek ciśnienia (przy szybkim wlewie i.v.), reakcje alergiczne, zaburzenia żołądkowo-jelitowe'
  },
  
  // Część 2 - Leki 
  {
    id: '56',
    name: 'Olanzapina (56)',
    group: 'Atypowy lek przeciwpsychotyczny',
    dosage: 'Doustnie (p.o.): zazwyczaj 5–20 mg/dobę, dostosowywane indywidualnie',
    mechanism: 'Antagonista receptorów dopaminowych (D₂) i serotoninowych (5-HT₂A)',
    indications: 'Schizofrenia, zaburzenia afektywne',
    sideEffects: 'Przyrost masy ciała, sedacja, zaburzenia metaboliczne'
  },
  {
    id: '81',
    name: 'Nefopam (81)',
    group: 'Lek przeciwbólowy, nieopioidowy',
    dosage: 'Doustnie (p.o.): zwykle 20–40 mg co 6–8 h, dawkowanie indywidualne',
    mechanism: 'Dokładny mechanizm nie do końca poznany – oddziałuje centralnie, modulując przekaźnictwo (m.in. wpływ na wychwyt serotoniny, noradrenaliny i dopaminy)',
    indications: 'Ból umiarkowany',
    sideEffects: 'Nudności, tachykardia, senność, ewentualnie zawroty głowy'
  },
  {
    id: '1',
    name: 'Zoledronian (1)',
    group: 'Bisfosfonian',
    dosage: 'Dożylnie (i.v.): zwykle 4 mg infuzowane powoli (15–30 min), zwykle raz na rok (w osteoporozie)',
    mechanism: 'Hamuje aktywność osteoklastów, zmniejszając resorpcję kostną',
    indications: 'Osteoporoza, choroby metaboliczne kości',
    sideEffects: 'Objawy grypopodobne, bóle stawów, ryzyko osteonekrozy zębów, podrażnienie miejscowe przy infuzji'
  },
  {
    id: '2',
    name: 'Tramdaol (2)',
    group: 'Opioidowy lek przeciwbólowy',
    dosage: 'Doustnie (p.o.): zwykle 50–100 mg co 4–6 h, maks. 400 mg/dobę',
    mechanism: 'Agonista receptorów μ; dodatkowo hamuje wychwyt serotoniny i noradrenaliny, co wpływa na efekt przeciwbólowy',
    indications: 'Ból umiarkowany do silnego',
    sideEffects: 'Nudności, senność, zawroty głowy, ryzyko uzależnienia, zaparcia'
  },
  {
    id: '26',
    name: 'Spironolakton (26)',
    group: 'Antagonista aldosteronu, diuretyk oszczędzający potas',
    dosage: 'Doustnie (p.o.): 25–100 mg/dobę, dawka dobierana indywidualnie',
    mechanism: 'Blokuje receptory aldosteronu → zmniejszenie retencji sodu i wody, oszczędzając potas',
    indications: 'Nadciśnienie, niewydolność serca, obrzęki, hirsutyzm',
    sideEffects: 'Hiperkaliemia, nudności, biegunka, ginekomastia (u mężczyzn)'
  },
  // Pozostałe leki
  {
    id: '27',
    name: 'Furosemid (27)',
    group: 'Diuretyk pętlowy',
    dosage: 'Doustnie (p.o.) lub Dożylnie (i.v.): zazwyczaj 20–80 mg, dawkowanie zależne od stanu',
    mechanism: 'Hamuje symporter Na⁺/K⁺/2Cl⁻ w pętli Henlego → zwiększenie diurezy',
    indications: 'Obrzęki, niewydolność serca, nadciśnienie',
    sideEffects: 'Hipokaliemia, odwodnienie, zaburzenia elektrolitowe, spadek ciśnienia'
  },
  {
    id: '4',
    name: 'Kwas ibandronowy (4)',
    group: 'Bisfosfonian',
    dosage: 'Doustnie (p.o.): 150 mg miesięcznie lub Dożylnie (i.v.): 3 mg co 3 miesiące',
    mechanism: 'Hamuje osteoklasty, zmniejszając resorpcję kostną',
    indications: 'Osteoporoza',
    sideEffects: 'Objawy grypopodobne, bóle mięśni i stawów, ryzyko osteonekrozy zębów'
  },
  {
    id: '5',
    name: 'Kodeina (5)',
    group: 'Opioidowy lek przeciwbólowy',
    dosage: 'Doustnie (p.o.): zwykle 15–60 mg co 4–6 h',
    mechanism: 'Agonista receptorów μ; metabolizowana do morfiny, co odpowiada za efekt przeciwbólowy',
    indications: 'Ból umiarkowany; czasem stosowana w leczeniu kaszlu',
    sideEffects: 'Senność, zaparcia, nudności, ryzyko uzależnienia'
  },
  {
    id: '7',
    name: 'Trazodon (7)',
    group: 'Lek przeciwdepresyjny',
    dosage: 'Doustnie (p.o.): zazwyczaj 50–150 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, antagonizując jednocześnie receptory 5-HT2 → poprawa snu i nastrój',
    indications: 'Depresja, bezsenność',
    sideEffects: 'Sedacja, zawroty głowy, suchość w ustach, rzadko – priapizm'
  },
  {
    id: '8',
    name: 'Lidokaina (8)',
    group: 'Miejscowy lek znieczulający / antyarytmiczny',
    dosage: 'Miejscowo: 1–5% roztwór (znieczulenie miejscowe); Dożylnie (i.v.): 1–1,5 mg/kg',
    mechanism: 'Blokada kanałów sodowych → zahamowanie przewodzenia impulsów nerwowych',
    indications: 'Znieczulenie miejscowe, leczenie niektórych arytmii',
    sideEffects: 'Reakcje alergiczne, zaburzenia OUN (drżenia, drgawki) oraz kardiologiczne przy przedawkowaniu'
  },
  {
    id: '14',
    name: 'Klotrimazol (14)',
    group: 'Lek przeciwgrzybiczy (azole)',
    dosage: 'Miejscowo: krem, roztwór, tabletki dopochwowe; Doustnie: rzadko stosowany',
    mechanism: 'Zaburza syntezę ergosterolu w błonie komórkowej grzybów',
    indications: 'Zakażenia grzybicze skóry i błon śluzowych',
    sideEffects: 'Miejscowe podrażnienie, reakcje alergiczne'
  },
  {
    id: '29',
    name: 'Enoksaparyna (29)',
    group: 'Heparyna drobnocząsteczkowa (LMWH)',
    dosage: 'Podskórnie (s.c.): profilaktycznie około 40 mg/dobę; przy leczeniu dawka 1 mg/kg co 12 h (dostosowywana indywidualnie)',
    mechanism: 'Zwiększa działanie antykoagulacyjne antytrombiny III, głównie hamując czynnik Xa',
    indications: 'Profilaktyka i leczenie zakrzepicy (zakrzepica żył głębokich, zatorowość płucna)',
    sideEffects: 'Krwawienia, trombocytopenia, reakcje skórne w miejscu wstrzyknięcia'
  },
  {
    id: '30',
    name: 'Nalokson (30)',
    group: 'Antagonista opioidowy',
    dosage: 'Dożylnie (i.v.): 0,4–2 mg (można powtarzać dawki)',
    mechanism: 'Blokuje receptory opioidowe, odwracając działanie opioidów',
    indications: 'Odmowa, zatrucie opioidami',
    sideEffects: 'Reakcje abstynencyjne u osób uzależnionych, podwyższone ciśnienie, tachykardia'
  },
  {
    id: '32',
    name: 'Flukonazol (32)',
    group: 'Lek przeciwgrzybiczy (azole)',
    dosage: 'Doustnie (p.o.): 100–400 mg/dobę; Dożylnie (i.v.): dawkowanie dostosowywane',
    mechanism: 'Hamuje 14α-demetylazę, zaburzając syntezę ergosterolu w grzybach',
    indications: 'Leczenie grzybic (m.in. kandydoza, kryptokokoza)',
    sideEffects: 'Nudności, bóle głowy, wysypki, zaburzenia czynności wątroby'
  },
  {
    id: '33',
    name: 'Teofilina (33)',
    group: 'Lek rozszerzający oskrzela (metyloksantyna)',
    dosage: 'Doustnie (p.o.): 200–600 mg/dobę; Dożylnie (i.v.): zgodnie z poziomami terapeutycznymi',
    mechanism: 'Blokada receptorów adenozynowych, zwiększenie stężenia cAMP → rozszerzenie oskrzeli',
    indications: 'Astma, przewlekła obturacyjna choroba płuc (POCHP)',
    sideEffects: 'Drżenia, tachykardia, bezsenność, nudności'
  },
  {
    id: '34',
    name: 'Berodual (34)',
    group: 'Lek rozszerzający oskrzela (kombinacja)',
    dosage: 'Inhalacyjnie lub iniekcyjnie: zawiera fenoterol (β2-agonista) oraz ipratropium (antagonista muskarynowy)',
    mechanism: 'Fenoterol – stymulacja receptorów β2 → rozszerzenie oskrzeli; Ipratropium – blokada receptorów muskarynowych',
    indications: 'Ostre napady astmy, zaostrzenia POChP',
    sideEffects: 'Drżenia, tachykardia, suchość w ustach'
  },
  {
    id: '36',
    name: 'Amoksycylina (36)',
    group: 'Antybiotyk (penicylina)',
    dosage: 'Doustnie (p.o.): 500 mg co 8 h lub 875 mg co 12 h; Dożylnie (i.v.): 1–2 g co 8 h',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii poprzez wiązanie białek penicylinozależnych',
    indications: 'Zakażenia dróg oddechowych, ucha, skóry',
    sideEffects: 'Reakcje alergiczne, biegunka, nudności'
  },
  {
    id: '37',
    name: 'Klarytromycyna (37)',
    group: 'Antybiotyk makrolidowy',
    dosage: 'Doustnie (p.o.): 250–500 mg co 12 h; Dożylnie (i.v.): dawka zbliżona do p.o.',
    mechanism: 'Hamuje syntezę białek przez wiązanie 50S podjednostki rybosomu',
    indications: 'Zakażenia dróg oddechowych, skórnych i pokarmowych',
    sideEffects: 'Biegunka, zaburzenia żołądkowo-jelitowe, reakcje alergiczne, zmiana smaku'
  },
  {
    id: '39',
    name: 'Ceftazolina (39)',
    group: 'Antybiotyk cefalosporynowy III generacji',
    dosage: 'Dożylnie (i.v.): zazwyczaj 1–2 g co 8–12 h',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii poprzez wiązanie białek penicylinozależnych',
    indications: 'Zakażenia szpitalne, zakażenia dróg oddechowych i moczowych',
    sideEffects: 'Reakcje alergiczne, biegunka, zaburzenia czynności wątroby'
  },
  {
    id: '40',
    name: 'Furosemid (40)',
    group: 'Diuretyk pętlowy (powtórzenie)',
    dosage: 'Doustnie (p.o.) lub Dożylnie (i.v.): dawkowanie jak wyżej (20–80 mg)',
    mechanism: 'Jak wyżej – hamowanie symportera Na⁺/K⁺/2Cl⁻ w pętli Henlego',
    indications: 'Obrzęki, niewydolność serca, nadciśnienie',
    sideEffects: 'Hipokaliemia, odwodnienie, zaburzenia elektrolitowe, spadek ciśnienia'
  },
  {
    id: '80',
    name: 'Sulfasalazyna (80)',
    group: 'Lek przeciwzapalny (stosowany w chorobach reumatycznych)',
    dosage: 'Doustnie (p.o.): zazwyczaj 500 mg–1 g 2–4 razy/dobę, dawka zależna od stanu',
    mechanism: 'Dokładny mechanizm nie do końca poznany; wykazuje działanie przeciwzapalne i immunomodulujące',
    indications: 'Reumatoidalne zapalenie stawów, wrzodziejące zapalenie jelita grubego, choroba Leśniowskiego-Crohna',
    sideEffects: 'Nudności, biegunka, wysypki, hepatotoksyczność'
  },
  {
    id: '57',
    name: 'Dimenhydrynat (57)',
    group: 'Lek przeciwwymiotny/przeciwhistaminowy',
    dosage: 'Doustnie (p.o.): 50–100 mg co 4–6 h (stosowany także w profilaktyce choroby lokomocyjnej)',
    mechanism: 'Antagonista receptorów histaminowych H1, działanie centralne',
    indications: 'Nudności, wymioty, choroba lokomocyjna',
    sideEffects: 'Sedacja, suchość w ustach, zawroty głowy'
  },
  {
    id: '58',
    name: 'Itopryd (58)',
    group: 'Lek prokinetyczny',
    dosage: 'Doustnie (p.o.): 50–150 mg/dobę (najczęściej w 2–3 dawkach)',
    mechanism: 'Blokada receptorów dopaminowych oraz hamowanie fosfodiesterazy → zwiększenie motoryki przewodu pokarmowego',
    indications: 'Dyspepsja, opóźnione opróżnianie żołądka',
    sideEffects: 'Suchość w ustach, biegunka, zmęczenie'
  },
  {
    id: '59',
    name: 'Ondansetron (59)',
    group: 'Lek przeciwwymiotny, antagonista 5-HT₃',
    dosage: 'Dożylnie (i.v.): 4–8 mg; Doustnie (p.o.): 8 mg co 12 h',
    mechanism: 'Blokada receptorów serotoninowych 5-HT₃ w ośrodkowym układzie nerwowym',
    indications: 'Zapobieganie nudnościom i wymiotom po chemioterapii, radioterapii lub operacjach',
    sideEffects: 'Bóle głowy, zaparcia, zawroty głowy'
  },
  {
    id: '61',
    name: 'Lorazepam (61)',
    group: 'Benzodiazepina',
    dosage: 'Doustnie (p.o.): 1–3 mg co 6–8 h; Dożylnie/i.m.: 1–2 mg, zależnie od wskazań',
    mechanism: 'Wzmacnia działanie GABA w ośrodkowym układzie nerwowym',
    indications: 'Lęk, bezsenność, stan pobudzenia, sedacja przedoperacyjna',
    sideEffects: 'Sedacja, osłabienie, zawroty głowy, ryzyko uzależnienia'
  },
  {
    id: '62',
    name: 'Etamsylat (62)',
    group: 'Lek przeciwkrwotoczny',
    dosage: 'Doustnie (p.o.)/Dożylnie (i.v.): 250–500 mg 3 razy/dobę',
    mechanism: 'Przyspiesza agregację płytek krwi oraz wzmacnia ściany naczyń',
    indications: 'Leczenie i zapobieganie krwawieniom',
    sideEffects: 'Nudności, biegunka, reakcje alergiczne'
  },
  {
    id: '64',
    name: 'Loperamid (64)',
    group: 'Lek przeciwbiegunkowy',
    dosage: 'Doustnie (p.o.): 2 mg po pierwszym luźnym stolcu, następnie 2 mg po każdym kolejnym (max 16 mg/dobę)',
    mechanism: 'Agonista receptorów opioidowych w przewodzie pokarmowym → spowalnia perystaltykę',
    indications: 'Ostre i przewlekłe biegunki',
    sideEffects: 'Zaparcia, ból brzucha, suchość w ustach'
  },
  {
    id: '65',
    name: 'Dokusan sodowy (65)',
    group: 'Lek o działaniu spazmolitycznym',
    dosage: 'Doustnie (p.o.): dawkowanie ustalane indywidualnie (np. 1–2 tabletki 2–3 razy/dobę)',
    mechanism: 'Hamuje skurcze mięśni gładkich (mechanizm przypuszczalnie cholinolityczny/spazmolityczny)',
    indications: 'Łagodzenie kolki i bólu spowodowanego skurczami mięśni gładkich (np. przewodu pokarmowego)',
    sideEffects: 'Suchość w ustach, zawroty głowy, nudności'
  },
  {
    id: '76',
    name: 'Cyprofloksacyna (76)',
    group: 'Antybiotyk fluorochinolonowy',
    dosage: 'Doustnie (p.o.): 250–500 mg co 12 h; Dożylnie (i.v.): 200–400 mg co 12 h',
    mechanism: 'Hamuje enzymy gyrazy oraz topoizomerazę IV w bakteriach, zakłócając replikację DNA',
    indications: 'Zakażenia dróg moczowych, dolnych dróg oddechowych, zakażenia skóry',
    sideEffects: 'Nudności, biegunka, ryzyko tendonopatii, reakcje skórne'
  },
  {
    id: '77',
    name: 'Octan megestrolu (77)',
    group: 'Progestagen, lek oreptyczny',
    dosage: 'Doustnie (p.o.): zazwyczaj 160–800 mg/dobę (dawkowanie indywidualne)',
    mechanism: 'Działa progestagenowo; wpływa na apetyt i metabolizm',
    indications: 'Anoreksja, utrata masy ciała, niektóre nowotwory (m.in. rak piersi u kobiet, stosowany czasem w terapii)',
    sideEffects: 'Przyrost masy ciała, retencja płynów, zmiany nastroju'
  },
  {
    id: '54',
    name: 'Midazolam (54)',
    group: 'Benzodiazepina',
    dosage: 'Dożylnie/i.m.: 1–5 mg; stosowany głównie w sedacji przed zabiegami; Doustnie (p.o.): rzadko',
    mechanism: 'Wzmacnia działanie GABA w ośrodkowym układzie nerwowym → efekt sedacyjny i amnezjogenny',
    indications: 'Sedacja, indukcja znieczulenia, procedury diagnostyczne',
    sideEffects: 'Sedacja, zaburzenia pamięci, depresja oddechowa, hipotonia'
  },
  {
    id: '82',
    name: 'Mannitol (82)',
    group: 'Osmotyczny środek moczopędny',
    dosage: 'Dożylnie (i.v.): 0,25–2 g/kg (dawkowanie zależne od wskazań)',
    mechanism: 'Zwiększa osmolalność osocza → osmotyczne przyciąganie wody do naczyń → zwiększenie diurezy',
    indications: 'Obrzęk mózgu, ostre niewydolności nerek, obniżenie ciśnienia wewnątrzgałkowego',
    sideEffects: 'Odwodnienie, zaburzenia elektrolitowe, przeciążenie serca'
  },
  {
    id: '83',
    name: 'Kalium effervescens (83)',
    group: 'Suplement potasu (forma musująca)',
    dosage: 'Doustnie (p.o.): zgodnie z zaleceniami producenta (zwykle 1–2 opakowania dziennie)',
    mechanism: 'Uzupełnia niedobory potasu w organizmie',
    indications: 'Hipokaliemia',
    sideEffects: 'Podrażnienie żołądka, biegunka, ryzyko zaburzeń rytmu serca przy nadmiarze potasu'
  },
  {
    id: '9',
    name: 'Fentanyl (9)',
    group: 'Silny opioidowy lek przeciwbólowy',
    dosage: 'Transdermalnie: plaster 12–100 μg/h; Dożylnie (i.v.): dawki zależne od stanu pacjenta',
    mechanism: 'Silny agonista receptorów μ → bardzo silne działanie przeciwbólowe',
    indications: 'Silny, przewlekły ból (np. nowotworowy)',
    sideEffects: 'Depresja oddechowa, senność, nudności, zaparcia, wysokie ryzyko uzależnienia'
  },
  {
    id: '84',
    name: 'Bisocard (84)',
    group: 'Beta-bloker (selektywny beta1)',
    dosage: 'Doustnie (p.o.): zazwyczaj 2,5–10 mg/dobę',
    mechanism: 'Blokada receptorów beta1 w sercu → zmniejszenie częstości akcji serca i obniżenie ciśnienia',
    indications: 'Nadciśnienie, niewydolność serca, dławica piersiowa',
    sideEffects: 'Bradykardia, zmęczenie, zawroty głowy, hipotonia'
  },
  {
    id: '10',
    name: 'Oksykodon (10)',
    group: 'Opioidowy lek przeciwbólowy',
    dosage: 'Doustnie (p.o.): zazwyczaj 5–10 mg co 4–6 h; dawkowanie indywidualne, max około 80 mg/dobę',
    mechanism: 'Agonista receptorów μ, silne działanie przeciwbólowe',
    indications: 'Silny ból',
    sideEffects: 'Nudności, wymioty, zaparcia, depresja oddechowa, ryzyko uzależnienia'
  },
  {
    id: '35',
    name: 'Amlodypina (35)',
    group: 'Bloker kanału wapniowego',
    dosage: 'Doustnie (p.o.): zazwyczaj 5–10 mg/dobę',
    mechanism: 'Blokada kanałów wapniowych w mięśniu gładkim naczyń → rozszerzenie naczyń i obniżenie ciśnienia',
    indications: 'Nadciśnienie, dławica piersiowa',
    sideEffects: 'Obrzęki, zawroty głowy, ból głowy, zmęczenie'
  },
  {
    id: '60',
    name: 'Oktreotyd (60)',
    group: 'Analog somatostatyny',
    dosage: 'Podskórnie (s.c.): 50–200 µg/dobę (lub długodziałający preparat raz na 4–6 tygodni, w zależności od wskazań)',
    mechanism: 'Hamuje wydzielanie hormonów (m.in. GH, insuliny) poprzez wiązanie receptorów somatostatyny',
    indications: 'Akromegalia, nowotwory neuroendokrynne, zespół rakowiaka',
    sideEffects: 'Ból brzucha, nudności, biegunka, zmiany glikemii'
  },
  {
    id: '85',
    name: 'Klonazepam (85)',
    group: 'Benzodiazepina',
    dosage: 'Doustnie (p.o.): zwykle 0,5–2 mg 2–3 razy/dobę',
    mechanism: 'Wzmacnia działanie GABA, działając uspokajająco i przeciwpadaczkowo',
    indications: 'Padaczka (niektóre postaci), zaburzenia lękowe',
    sideEffects: 'Sedacja, zawroty głowy, osłabienie, ryzyko uzależnienia'
  },
  {
    id: '11',
    name: 'Buprenorfina (11)',
    group: 'Opioidowy lek – częściowy agonista',
    dosage: 'Transdermalnie: plaster 5–20 µg/h lub Sublingwalnie: dawkowanie zgodne z protokołem',
    mechanism: 'Częściowy agonista receptorów μ, antagonista receptorów kappa → działanie przeciwbólowe oraz substytucyjne w terapii uzależnień',
    indications: 'Ból przewlekły, terapia substytucyjna w uzależnieniach opioidowych',
    sideEffects: 'Nudności, senność, suchość w ustach, możliwe interakcje'
  },
  {
    id: '86',
    name: 'Karbamazepina (86)',
    group: 'Lek przeciwpadaczkowy',
    dosage: 'Doustnie (p.o.): początkowo 200 mg 2 razy/dobę, zwiększany do 800–1200 mg/dobę',
    mechanism: 'Blokada kanałów sodowych → zmniejszenie nadmiernej aktywności neuronalnej',
    indications: 'Padaczka, neuralgia nerwu trójdzielnego, zaburzenia afektywne',
    sideEffects: 'Zawroty głowy, zaburzenia widzenia, nudności, ryzyko zaburzeń krwi (leukopenia)'
  },
  {
    id: '12',
    name: 'Gabapentyna (12)',
    group: 'Lek przeciwpadaczkowy, neuromodulator',
    dosage: 'Doustnie (p.o.): zwykle zaczyna się od 300–600 mg, stopniowo zwiększając do 1800–3600 mg/dobę',
    mechanism: 'Wiąże podjednostkę α2δ kanałów wapniowych → zmniejsza uwalnianie neuroprzekaźników, co wpływa na przewodnictwo bólowe',
    indications: 'Padaczka, neuropatie bólowe',
    sideEffects: 'Senność, zawroty, obrzęki, przyrost masy ciała'
  },
  {
    id: '87',
    name: 'Paroksetyna (87)',
    group: 'Inhibitor wychwytu serotoniny (SSRI)',
    dosage: 'Doustnie (p.o.): zwykle 20–50 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, zwiększając jej dostępność w synapsach',
    indications: 'Depresja, zaburzenia lękowe, OCD',
    sideEffects: 'Nudności, przyrost masy ciała, dysfunkcje seksualne, senność'
  },
  {
    id: '13',
    name: 'Pregabalina (13)',
    group: 'Lek przeciwpadaczkowy, neuromodulator',
    dosage: 'Doustnie (p.o.): zwykle 150–600 mg/dobę, dawkowanie indywidualne',
    mechanism: 'Wiąże podjednostkę α2δ kanałów wapniowych, zmniejszając uwalnianie neuroprzekaźników',
    indications: 'Neuropatia bólowe, padaczka, zaburzenia lękowe',
    sideEffects: 'Zawroty głowy, senność, obrzęki, przyrost masy ciała'
  },
  {
    id: '38',
    name: 'Cefuroksym (38)',
    group: 'Antybiotyk cefalosporynowy II generacji',
    dosage: 'Doustnie (p.o.): 250–500 mg co 12 h; Dożylnie (i.v.): 750 mg–1,5 g co 8–12 h',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii poprzez wiązanie białka penicylinozależnego',
    indications: 'Zakażenia dróg oddechowych, moczowych, skóry',
    sideEffects: 'Reakcje alergiczne, biegunka, nudności'
  },
  {
    id: '63',
    name: 'Kwas traneksamowy (63)',
    group: 'Lek przeciwkrwotoczny',
    dosage: 'Doustnie (p.o.): około 1–1,5 g/dobę; Dożylnie (i.v.): 10–25 mg/kg, w zależności od sytuacji',
    mechanism: 'Hamuje aktywność plazminogenu → zmniejsza lizy skrzepów',
    indications: 'Krwawienia, procedury chirurgiczne',
    sideEffects: 'Ryzyko zakrzepicy, nudności, biegunka, ból mięśni'
  },
  {
    id: '88',
    name: 'Celekoksyb (88)',
    group: 'Niesteroidowy lek przeciwzapalny (inhibitor COX-2)',
    dosage: 'Doustnie (p.o.): zazwyczaj 200 mg/dobę w dawkach podzielonych',
    mechanism: 'Selektywne hamowanie enzymu COX-2 → zmniejszenie produkcji prostaglandyn',
    indications: 'Choroba zwyrodnieniowa stawów, reumatoidalne zapalenie stawów',
    sideEffects: 'Ryzyko zdarzeń sercowo-naczyniowych, zaburzenia żołądkowo-jelitowe, ból głowy'
  },
  {
    id: '89',
    name: 'Trittico (89)',
    group: 'Lek przeciwdepresyjny (odpowiednik trazodonu)',
    dosage: 'Doustnie (p.o.): zwykle 50–150 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, antagonizuje receptory 5-HT2 → poprawia nastrój i sen',
    indications: 'Depresja, zaburzenia snu',
    sideEffects: 'Sedacja, zawroty głowy, suchość w ustach'
  },
  {
    id: '15',
    name: 'Metyloprednizolan (15)',
    group: 'Kortykosteroid',
    dosage: 'Doustnie (p.o.): zazwyczaj 4–48 mg/dobę (dawki dostosowywane indywidualnie); Dożylnie: zgodnie z zaleceniami',
    mechanism: 'Działa przeciwzapalnie i immunosupresyjnie poprzez modulację ekspresji genów prozapalnych',
    indications: 'Stany zapalne, choroby autoimmunologiczne, reakcje alergiczne',
    sideEffects: 'Hiperglikemia, osteoporoza, przyrost masy, zaburzenia snu, zwiększone ryzyko infekcji'
  },
  {
    id: '90',
    name: 'Captopril (90)',
    group: 'Inhibitor ACE',
    dosage: 'Doustnie (p.o.): zwykle 25–50 mg 2–3 razy/dobę',
    mechanism: 'Hamuje konwertazę angiotensyny I → zmniejszenie produkcji angiotensyny II',
    indications: 'Nadciśnienie, niewydolność serca, nefropatia cukrzycowa',
    sideEffects: 'Kaszel, hiperkaliemia, niedociśnienie, reakcje skórne'
  },
  {
    id: '16',
    name: 'Haloperidol (16)',
    group: 'Neuroleptyk klasyczny',
    dosage: 'Doustnie (p.o.): zazwyczaj 1–10 mg/dobę; Domięśniowo/Dożylnie (i.v.): w ostrych stanach, dawki indywidualne',
    mechanism: 'Antagonista receptorów dopaminowych D₂',
    indications: 'Schizofrenia, psychozy, ciężkie pobudzenie psychoruchowe',
    sideEffects: 'Objawy pozapiramidowe, sedacja, suchość w ustach, zaburzenia ruchowe'
  },
  {
    id: '41',
    name: 'Dalteparyna (41)',
    group: 'Heparyna drobnocząsteczkowa (powtórzenie)',
    dosage: 'Jak w opisie leku (28)',
    mechanism: 'Jak wyżej',
    indications: 'Jak wyżej',
    sideEffects: 'Jak wyżej'
  },
  {
    id: '18',
    name: 'Deksametazon (18)',
    group: 'Kortykosteroid',
    dosage: 'Doustnie (p.o.): 0,75–9 mg/dobę; Dożylnie (i.v.): 4–10 mg (w zależności od stanu)',
    mechanism: 'Działa przeciwzapalnie i immunosupresyjnie poprzez modulację czynności genów prozapalnych',
    indications: 'Stany zapalne, choroby autoimmunologiczne, obrzęk mózgu',
    sideEffects: 'Hiperglikemia, osteoporoza, przyrost masy, ryzyko infekcji, zaburzenia snu'
  },
  {
    id: '17',
    name: 'Denosumab (17)',
    group: 'Przeciwciało monoklonalne (lek przeciw osteoporozie)',
    dosage: 'Podskórnie (s.c.): zazwyczaj 60 mg co 6 miesięcy',
    mechanism: 'Przeciwciało skierowane przeciwko RANKL → hamuje aktywność osteoklastów',
    indications: 'Osteoporoza u pacjentów z wysokim ryzykiem złamań',
    sideEffects: 'Zakażenia dróg oddechowych, hipokalcemia, reakcje w miejscu wstrzyknięcia'
  },
  {
    id: '42',
    name: 'Dokstrometorfan (42)',
    group: 'Lek przeciwkaszlowy',
    dosage: 'Doustnie (p.o.): 10–30 mg co 4–6 h, max 120 mg/dobę',
    mechanism: 'Działa centralnie, hamując odruch kaszlowy; antagonizuje receptory NMDA',
    indications: 'Suchy, uporczywy kaszel',
    sideEffects: 'Zawroty głowy, sedacja, ryzyko nadużycia'
  },
  {
    id: '67',
    name: 'Laktuloza (67)',
    group: 'Środek przeczyszczający',
    dosage: 'Doustnie (p.o.): 10–30 g/dobę (dawkowanie zależne od wskazań)',
    mechanism: 'Osmotyczne działanie w jelicie – fermentacja do kwasów organicznych, przyciąganie wody do światła jelita',
    indications: 'Zaparcia, encefalopatia wątrobowa',
    sideEffects: 'Wzdęcia, gazy, biegunka przy przedawkowaniu'
  },
  {
    id: '92',
    name: 'Lewomepromazyna (92)',
    group: 'Neuroleptyk klasyczny',
    dosage: 'Doustnie (p.o.): zazwyczaj 25–200 mg/dobę (w dawkach podzielonych)',
    mechanism: 'Antagonista receptorów dopaminowych, adrenergicznych i histaminowych',
    indications: 'Schizofrenia, stany pobudzenia psychoruchowego',
    sideEffects: 'Sedacja, objawy pozapiramidowe, hipotonia, suchość w ustach'
  },
  {
    id: '66',
    name: 'Escitalopram (66)',
    group: 'Inhibitor wychwytu serotoniny (SSRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 10–20 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, zwiększając jej stężenie w synapsach',
    indications: 'Depresja, zaburzenia lękowe',
    sideEffects: 'Nudności, bezsenność, dysfunkcje seksualne, senność'
  },
  {
    id: '43',
    name: 'Diazepam (43)',
    group: 'Benzodiazepina',
    dosage: 'Doustnie (p.o.): 2–10 mg 2–4 razy/dobę; Dożylnie (i.v.): 2–10 mg',
    mechanism: 'Wzmacnia działanie GABA → efekt uspokajający, przeciwlękowy, przeciwpadaczkowy',
    indications: 'Lęk, skurcze mięśni, padaczka, sedacja przedoperacyjna',
    sideEffects: 'Sedacja, senność, ataksja, ryzyko uzależnienia'
  },
  {
    id: '91',
    name: 'Wankomycyna (91)',
    group: 'Antybiotyk glikopeptydowy',
    dosage: 'Dożylnie (i.v.): 15–20 mg/kg co 8–12 h; Doustnie (p.o.): stosowana w zakażeniach jelitowych',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii poprzez wiązanie peptydoglikanu',
    indications: 'Zakażenia MRSA, zakażenia gronkowcowe',
    sideEffects: 'Nefrotoksyczność, ototoksyczność, tzw. "Red Man Syndrome" (szybkie podanie)'
  },
  {
    id: '68',
    name: 'Bisakodyl (68)',
    group: 'Lek przeczyszczający',
    dosage: 'Doustnie (p.o.): 5–15 mg raz dziennie; Dopochwowo: 10 mg',
    mechanism: 'Stymuluje perystaltykę jelit poprzez bezpośrednie działanie na ścianę jelita',
    indications: 'Zaparcia',
    sideEffects: 'Skurcze brzucha, biegunka, nudności'
  },
  {
    id: '93',
    name: 'Prednizon (93)',
    group: 'Kortykosteroid',
    dosage: 'Doustnie (p.o.): zazwyczaj 5–60 mg/dobę (dawkowanie zależne od stanu)',
    mechanism: 'Działa przeciwzapalnie i immunosupresyjnie, modulując ekspresję czynników prozapalnych',
    indications: 'Choroby zapalne, autoimmunologiczne, alergie',
    sideEffects: 'Hiperglikemia, osteoporoza, przyrost masy, ryzyko infekcji'
  },
  {
    id: '19',
    name: 'Naltrekson (19)',
    group: 'Antagonista opioidowy',
    dosage: 'Doustnie (p.o.): zazwyczaj 50 mg/dobę',
    mechanism: 'Blokuje receptory opioidowe, zapobiegając efektom działania opioidów',
    indications: 'Leczenie uzależnień od opioidów, alkoholizmu',
    sideEffects: 'Nudności, bóle głowy, zawroty, możliwość wywołania objawów abstynencyjnych'
  },
  {
    id: '44',
    name: 'Fluoksetyna (44)',
    group: 'Inhibitor wychwytu serotoniny (SSRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 20–60 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, zwiększając jej dostępność w synapsach',
    indications: 'Depresja, zaburzenia obsesyjno-kompulsywne, bulimia',
    sideEffects: 'Bezsenność, nudności, dysfunkcje seksualne, suchość w ustach'
  },
  {
    id: '69',
    name: 'Makrogol (69)',
    group: 'Środek przeczyszczający (osmotyczny)',
    dosage: 'Doustnie (p.o.): zwykle 10–30 g/dobę rozpuszczone w wodzie',
    mechanism: 'Osmotyczne zwiększenie zawartości wody w kale → ułatwienie wypróżnienia',
    indications: 'Zaparcia',
    sideEffects: 'Wzdęcia, bóle brzucha, biegunka przy przedawkowaniu'
  },
  {
    id: '94',
    name: 'Salbutamol (94)',
    group: 'Beta₂-agonista (lek rozszerzający oskrzela)',
    dosage: 'Inhalacyjnie: 100–200 µg/dawkę; stosowany w razie potrzeby',
    mechanism: 'Stymuluje receptory beta₂ → rozkurcz mięśni gładkich oskrzeli',
    indications: 'Astma, POChP',
    sideEffects: 'Drżenia, tachykardia, ból głowy, suchość w ustach'
  },
  {
    id: '20',
    name: 'Diklofenak (20)',
    group: 'NSAID',
    dosage: 'Doustnie (p.o.): 50–150 mg/dobę (dawki podzielone); Dożylnie (i.v.)/Domięśniowo (i.m.): zgodnie z zaleceniami',
    mechanism: 'Hamuje COX → zmniejszenie produkcji prostaglandyn',
    indications: 'Ból o ostrym i przewlekłym charakterze, zapalenia stawów',
    sideEffects: 'Ryzyko wrzodów żołądka, zaburzenia nerek, nadciśnienie'
  },
  {
    id: '21',
    name: 'Paracetamol (21)',
    group: 'Lek przeciwbólowy/przeciwgorączkowy',
    dosage: 'Doustnie (p.o.): 500–1000 mg co 4–6 h, max 4 g/dobę',
    mechanism: 'Działanie nie do końca poznane; przypuszczalnie hamowanie COX w OUN',
    indications: 'Ból umiarkowany, gorączka',
    sideEffects: 'Wątrootoksyczność przy przedawkowaniu, reakcje alergiczne'
  },
  {
    id: '46',
    name: 'Meropenem (46)',
    group: 'Antybiotyk karbapenemowy',
    dosage: 'Dożylnie (i.v.): zazwyczaj 500 mg–1 g co 8 h',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii',
    indications: 'Zakażenia szpitalne, zakażenia wielooporne bakterie',
    sideEffects: 'Reakcje alergiczne, biegunka, zaburzenia żołądkowo-jelitowe'
  },
  {
    id: '71',
    name: 'Kwetiapina (71)',
    group: 'Atypowy lek przeciwpsychotyczny',
    dosage: 'Doustnie (p.o.): zazwyczaj 50–800 mg/dobę, dawkowanie indywidualne',
    mechanism: 'Antagonista receptorów dopaminowych i serotoninowych',
    indications: 'Schizofrenia, zaburzenia afektywne, zaburzenia snu',
    sideEffects: 'Sedacja, przyrost masy ciała, zawroty głowy, objawy pozapiramidowe'
  },
  {
    id: '96',
    name: 'Doksycyklina (96)',
    group: 'Antybiotyk tetracyklinowy',
    dosage: 'Doustnie (p.o.): zazwyczaj 100 mg co 12 h; Dożylnie (i.v.): 100 mg co 12 h',
    mechanism: 'Hamuje syntezę białek poprzez wiązanie 30S rybosomu',
    indications: 'Zakażenia bakteryjne (trądzik, borelioza, zapalenie płuc)',
    sideEffects: 'Fotosensybilizacja, zaburzenia żołądkowo-jelitowe, przebarwienia zębów przy długotrwałym stosowaniu'
  },
  {
    id: '22',
    name: 'Metadon (22)',
    group: 'Opioidowy lek przeciwbólowy, terapia uzależnień',
    dosage: 'Doustnie (p.o.): zazwyczaj 5–10 mg co 8–12 h, dawkowanie indywidualne',
    mechanism: 'Agonista receptorów μ o długim czasie działania',
    indications: 'Przewlekły ból, terapia substytucyjna w uzależnieniu od opioidów',
    sideEffects: 'Depresja oddechowa, zaparcia, ryzyko uzależnienia, sedacja'
  },
  {
    id: '45',
    name: 'Tapentadol (45)',
    group: 'Opioidowy lek przeciwbólowy',
    dosage: 'Doustnie (p.o.): zazwyczaj 50–100 mg co 4–6 h; max 600 mg/dobę',
    mechanism: 'Agonista receptorów μ oraz inhibitor wychwytu noradrenaliny',
    indications: 'Ból umiarkowany do silnego',
    sideEffects: 'Nudności, zawroty, zaparcia, ryzyko uzależnienia'
  },
  {
    id: '72',
    name: 'Mirtazapina (72)',
    group: 'Lek przeciwdepresyjny',
    dosage: 'Doustnie (p.o.): zazwyczaj 15–45 mg/dobę',
    mechanism: 'Antagonista receptorów serotoninowych i adrenergicznych → zwiększenie uwalniania noradrenaliny i serotoniny',
    indications: 'Depresja, zaburzenia snu',
    sideEffects: 'Przyrost masy ciała, senność, suchość w ustach, zawroty głowy'
  },
  {
    id: '70',
    name: 'Amitryptylina (70)',
    group: 'Trójpierścieniowy lek przeciwdepresyjny',
    dosage: 'Doustnie (p.o.): zazwyczaj 25–150 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny i noradrenaliny; działanie anticholinergiczne',
    indications: 'Depresja, neuropatie bólowe, profilaktyka migreny',
    sideEffects: 'Suchość w ustach, sedacja, przyrost masy, zaburzenia widzenia'
  },
  {
    id: '95',
    name: 'Piperacylina z tazobaktamem (95)',
    group: 'Antybiotyk (penicylina + inhibitor beta-laktamaz)',
    dosage: 'Dożylnie (i.v.): zazwyczaj 4,5 g co 6–8 h',
    mechanism: 'Hamuje syntezę ściany komórkowej; tazobaktam hamuje beta-laktamaz, chroniąc piperacylinę',
    indications: 'Ciężkie zakażenia bakteryjne, zakażenia szpitalne',
    sideEffects: 'Reakcje alergiczne, biegunka, zaburzenia czynności wątroby'
  },
  {
    id: '47',
    name: 'Citalopram (47)',
    group: 'Inhibitor wychwytu serotoniny (SSRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 20–40 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, zwiększając jej stężenie w synapsach',
    indications: 'Depresja, zaburzenia lękowe',
    sideEffects: 'Nudności, bezsenność, dysfunkcje seksualne, senność'
  },
  {
    id: '97',
    name: 'Ceftriakson (97)',
    group: 'Antybiotyk cefalosporynowy III generacji',
    dosage: 'Dożylnie (i.v.)/Domięśniowo (i.m.): zazwyczaj 1–2 g/dobę',
    mechanism: 'Hamuje syntezę ściany komórkowej bakterii',
    indications: 'Zakażenia dróg oddechowych, skóry, układu moczowego',
    sideEffects: 'Reakcje alergiczne, biegunka, zaburzenia czynności wątroby'
  },
  {
    id: '23',
    name: 'Kalcytonina (23)',
    group: 'Hormon regulujący gospodarkę wapniowo-fosforanową',
    dosage: 'Doustnie, i.m. lub podskórnie: zazwyczaj 50–100 IU/dobę (w zależności od wskazań)',
    mechanism: 'Hamuje resorpcję kości, obniżając stężenie wapnia we krwi',
    indications: 'Osteoporoza, hiperkalcemia, nadciśnienie poporodowe',
    sideEffects: 'Nudności, zaczerwienienie w miejscu wstrzyknięcia, reakcje alergiczne'
  },
  {
    id: '48',
    name: 'Ibuprofen (48)',
    group: 'NSAID',
    dosage: 'Doustnie (p.o.): zazwyczaj 200–800 mg co 6–8 h; max 3200 mg/dobę',
    mechanism: 'Hamuje COX → zmniejszenie produkcji prostaglandyn',
    indications: 'Ból, gorączka, stany zapalne',
    sideEffects: 'Ryzyko wrzodów żołądka, zaburzenia nerek, reakcje alergiczne'
  },
  {
    id: '73',
    name: 'Alprazolam (73)',
    group: 'Benzodiazepina',
    dosage: 'Doustnie (p.o.): zazwyczaj 0,25–0,5 mg 2–3 razy/dobę',
    mechanism: 'Wzmacnia działanie GABA',
    indications: 'Lęk, zaburzenia paniczne',
    sideEffects: 'Sedacja, zawroty głowy, ryzyko uzależnienia'
  },
  {
    id: '98',
    name: 'Atropina (98)',
    group: 'Antagonista receptorów muskarynowych (parasympatykomimetyk)',
    dosage: 'Dożylnie/i.m.: zwykle 0,5–1 mg; p.o.: stosowana rzadko, głównie w nagłych przypadkach',
    mechanism: 'Blokuje receptory muskarynowe → hamuje działanie układu przywspółczulnego',
    indications: 'Bradykardia, zatrucia cholinergiczne, premedykacja przedoperacyjna',
    sideEffects: 'Suchość w ustach, tachykardia, zaburzenia widzenia, zmniejszenie wydzielania śliny'
  },
  {
    id: '24',
    name: 'Duloksetyna (24)',
    group: 'Inhibitor wychwytu serotoniny i noradrenaliny (SNRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 30–120 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny i noradrenaliny',
    indications: 'Depresja, zaburzenia lękowe, neuropatia bólowe',
    sideEffects: 'Nudności, suchość w ustach, zawroty głowy, zaburzenia snu'
  },
  {
    id: '49',
    name: 'Flukonazol (49)',
    group: 'Lek przeciwgrzybiczy (azole)',
    dosage: 'Doustnie (p.o.): zazwyczaj 100–400 mg/dobę; Dożylnie (i.v.): dawka dostosowywana',
    mechanism: 'Hamuje 14α-demetylazę, zaburzając syntezę ergosterolu w grzybach',
    indications: 'Grzybice, szczególnie zakażenia drożdżakowe',
    sideEffects: 'Nudności, bóle głowy, wysypki, zaburzenia czynności wątroby'
  },
  {
    id: '74',
    name: 'Nystatyna (74)',
    group: 'Lek przeciwgrzybiczy (polien)',
    dosage: 'Dopochwowo: krem, globulki; Doustnie (p.o.): pastylki do jamy ustnej (w zależności od preparatu)',
    mechanism: 'Wiąże ergosterol w błonie komórkowej grzybów → utrata integralności błony',
    indications: 'Zakażenia grzybicze skóry i błon śluzowych',
    sideEffects: 'Miejscowe podrażnienie, reakcje alergiczne'
  },
  {
    id: '25',
    name: 'Wenlafaksyna (25)',
    group: 'Inhibitor wychwytu serotoniny i noradrenaliny (SNRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 37,5–225 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny i noradrenaliny',
    indications: 'Depresja, zaburzenia lękowe',
    sideEffects: 'Nudności, suchość w ustach, zawroty głowy, ryzyko nadciśnienia przy wyższych dawkach'
  },
  {
    id: '50',
    name: 'Lewitracetam (50)',
    group: 'Lek przeciwpadaczkowy (pochodna pirrolidonu)',
    dosage: 'Doustnie (p.o.): zazwyczaj 500–1500 mg co 12 h; maks. do 3000 mg/dobę',
    mechanism: 'Modyfikuje przewodnictwo neuronalne (dokładny mechanizm nie do końca poznany)',
    indications: 'Padaczka, zwłaszcza napady częściowe',
    sideEffects: 'Senność, zawroty głowy, zmęczenie, drażliwość'
  },
  {
    id: '75',
    name: 'Sertalina (75)',
    group: 'Inhibitor wychwytu serotoniny (SSRI)',
    dosage: 'Doustnie (p.o.): zazwyczaj 50–200 mg/dobę',
    mechanism: 'Hamuje wychwyt serotoniny, zwiększając jej stężenie w synapsach',
    indications: 'Depresja, zaburzenia lękowe, OCD',
    sideEffects: 'Nudności, bezsenność, dysfunkcje seksualne, suchość w ustach'
  }
]; 