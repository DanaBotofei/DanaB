const chapters = [
  {
    title: 'Noțiuni fundamentale de algoritmică', short: 'algoritmi · date · reprezentare', lessons: [
      ['Noțiunea de algoritm. Proprietăți', 'Un algoritm este o succesiune finită și ordonată de pași care transformă datele de intrare în rezultate. Proprietățile sale sunt: finit, clar, efectiv, general și determinist.', 'Pașii trebuie ordonați și lipsiți de ambiguitate. Un algoritm are date de intrare, prelucrare și date de ieșire.', 'Exemplu: pentru suma a două numere, citește a și b, calculează s = a + b, afișează s.', 'int a, b, s;\ncin >> a >> b;\ns = a + b;\ncout << s;', 'Problema: calculează aria unui dreptunghi cu laturile a și b. Soluție: datele de intrare sunt a și b, prelucrarea este A = a * b, iar ieșirea este A.'],
      ['Reprezentarea algoritmilor', 'Pseudocodul descrie algoritmul într-un limbaj simplificat, independent de C++. Schema logică folosește oval pentru început/sfârșit, dreptunghi pentru prelucrare, paralelogram pentru citire/afișare și romb pentru decizie.', 'Pseudocodul trebuie să păstreze ordinea pașilor și să evidențieze ramificațiile și repetările.', 'START → citește a, b → s ← a + b → afișează s → STOP', 'citește a, b\ns ← a + b\nafișează s', 'Problema: verifică dacă un număr este par. Pseudocod: citește n; dacă n mod 2 = 0 atunci afișează „par”, altfel afișează „impar”.'],
      ['Date, variabile, constante, expresii', 'O variabilă este o zonă de memorie cu nume și valoare modificabilă. O constantă are o valoare care nu se schimbă. O expresie combină operanzi, operatori și paranteze și produce o valoare.', 'Atribuirea se notează în C++ cu =. Într-o expresie, parantezele au prioritate, apoi * / %, apoi + -. O constantă se declară cu const.', 'const double TVA = 0.19;\ndouble pret, total;\ncin >> pret;\ntotal = pret * (1 + TVA);', 'Problemă: pentru prețul fără TVA, calculează prețul final. Soluție: declarăm pret și const TVA, apoi aplicăm total = pret * (1 + TVA).'],
      ['Tipuri de date fundamentale', 'Tipul precizează ce valori poate păstra o variabilă. În algoritmică întâlnim întregi, reale, caractere și valori logice. Alegerea tipului corect previne pierderea informației.', 'Operațiile trebuie să fie compatibile cu tipul. Un întreg nu păstrează partea zecimală rezultată dintr-o împărțire întreagă.', 'int varsta = 15;\ndouble medie = 9.75;\nchar initiala = \'A\';\nbool promovat = true;', 'Problemă: afișează media a două note reale. Folosim double, deoarece rezultatul poate avea zecimale: media = (n1 + n2) / 2.0.']
  ]},
  {
    title: 'Elementele limbajului C++', short: 'sintaxă · operatori · I/O', lessons: [
      ['Structura unui program C++', 'Un program pornește, de regulă, din funcția main. Directiva #include aduce biblioteci, using namespace std simplifică scrierea numelor, iar return 0 semnalează încheierea corectă.', 'Instrucțiunile se încheie cu ;, blocurile sunt delimitate de acolade, iar comentariile pot fi scrise cu // sau /* */.', '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Salut";\n    return 0;\n}', 'Problemă: afișează numele și clasa. Soluție: punem două instrucțiuni cout în main, fiecare cu textul dorit.'],
      ['Tipuri de date în C++', 'int memorează întregi, float și double valori reale, char un caracter între apostrofuri, bool true/false, iar string texte între ghilimele. Pentru string includem biblioteca <string>.', 'Alege double pentru precizie mai bună. Un char este un singur simbol, pe când string poate conține mai multe caractere.', 'int n = 12; float x = 2.5f; double pi = 3.14159;\nchar c = \'?\'; bool ok = true;\nstring nume = "Ana";', 'Problemă: memorează datele unui elev. Soluție: string nume, int varsta, double medie și bool promovat descriu corect fiecare valoare.'],
      ['Operatori aritmetici, relaționali, logici, de atribuire', 'Operatorii aritmetici sunt +, -, *, /, %. Relaționali: ==, !=, <, >, <=, >=. Logici: &&, ||, !. Atribuirea simplă este =, iar atribuirea compusă include +=, -=, *=, /= și incrementarea ++.', 'Nu confunda = cu ==. Operatorul % funcționează pentru întregi și oferă restul împărțirii.', 'int x = 5;\nx += 3; // 8\nbool test = x > 6 && x < 10;', 'Problemă: verifică dacă n este între 10 și 20 inclusiv. Soluție: if (n >= 10 && n <= 20).'],
      ['Operații de intrare-ieșire cin/cout', 'cin citește valori de la tastatură și le depune în variabile; cout afișează valori. Operatorul >> separă citirea, iar << concatenează afișarea. Pentru spații într-un text, cin >> citește un singur cuvânt; folosește getline pentru întreaga linie.', 'Datele se citesc în ordinea în care apar în cerință.', 'string nume; int varsta;\ncin >> nume >> varsta;\ncout << nume << " are " << varsta << " ani";', 'Problemă: citește două numere și afișează suma și produsul. Soluție: cin >> a >> b; cout << a + b << " " << a * b;'],
      ['Conversii de tip', 'Conversia schimbă tipul unei valori. Conversia explicită se face prin static_cast<Tip>(expresie).', 'La int / int rezultatul este întreg. Pentru rezultat real, convertește unul dintre operanzi sau folosește un literal precum 2.0.', 'int a = 7, b = 2;\ndouble exact = static_cast<double>(a) / b;\nint intreg = a / b;', 'Problemă: calculează media exactă a trei note întregi. Soluție: double medie = static_cast<double>(a + b + c) / 3;']
  ]},
  {
    title: 'Structuri de control', short: 'secvență · decizie · repetare', lessons: [
      ['Structura secvențială', 'Instrucțiunile secvențiale se execută una după alta, în ordinea în care sunt scrise. Este forma de bază a oricărui algoritm: citire, prelucrare, afișare.', 'O atribuire folosește valorile disponibile în acel moment. Ordinea poate schimba rezultatul.', 'cin >> a >> b;\nint suma = a + b;\ncout << suma;', 'Problemă: interschimbă valorile a și b. Soluție: folosim o variabilă auxiliară: aux = a; a = b; b = aux.'],
      ['Structura decizională if, if-else, switch', 'if execută un bloc când condiția este adevărată; if-else alege între două ramuri. switch compară aceeași expresie cu valori constante, folosind case și break.', 'Condiția trebuie să fie o expresie logică. În switch, default tratează cazurile care nu se potrivesc.', 'if (x > 0) cout << "pozitiv";\nelse if (x < 0) cout << "negativ";\nelse cout << "zero";', 'Problemă: afișează ziua săptămânii pentru k între 1 și 7. Soluție: switch(k) cu câte un case și break pentru fiecare zi.'],
      ['Structuri repetitive for, while, do-while', 'for este potrivit când numărul de repetări este cunoscut. while verifică o condiție înainte de fiecare repetare și poate să nu execute deloc. do-while execută corpul cel puțin o dată.', 'Actualizează variabila de control pentru a evita buclele infinite. Verifică atent limita și sensul incrementării.', 'int suma = 0;\nfor (int i = 1; i <= n; i++)\n    suma += i;', 'Problemă: calculează suma cifrelor lui n. Soluție: cât timp n > 0, adună n % 10 și elimină ultima cifră cu n /= 10.'],
      ['Instrucțiuni break și continue', 'break oprește imediat cea mai apropiată buclă sau instrucțiune switch. continue sare peste restul corpului buclei curente și trece la următoarea iterație.', 'Folosește break pentru oprire la găsirea unei valori și continue pentru ignorarea unor cazuri.', 'for (int i = 1; i <= n; i++) {\n    if (i % 2 == 0) continue;\n    cout << i << " ";\n}', 'Problemă: găsește primul divizor al lui n, diferit de 1. Parcurgem i de la 2 și folosim break când n % i == 0.'],
      ['Structuri de control imbricate', 'O structură este imbricată când se află în interiorul alteia: if în for, for în for sau if în if. Imbricarea permite rezolvarea problemelor cu mai multe niveluri de decizie.', 'La două bucle, indicele exterior controlează linia, iar cel interior coloana.', 'for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 3; j++)\n        cout << i * j << " ";\n}', 'Problemă: afișează tabla înmulțirii 1–9. Soluție: două bucle imbricate, cu i pentru rând și j pentru factor.']
  ]},
  {
    title: 'Subprograme', short: 'funcții · parametri · recursivitate', lessons: [
      ['Funcții: declarare, definire, apel', 'O funcție grupează instrucțiuni care rezolvă o sarcină. Declarația anunță numele și tipurile, definiția conține corpul, iar apelul execută funcția.', 'Tipul void indică lipsa unei valori returnate. return trimite rezultatul către locul apelului.', 'int maxim(int a, int b) {\n    if (a > b) return a;\n    return b;\n}\n// apel: maxim(x, y)', 'Problemă: scrie o funcție care calculează pătratul unui număr. Soluție: int patrat(int x) { return x * x; } și apelăm patrat(n).'],
      ['Parametri prin valoare și referință', 'Prin valoare, funcția primește o copie și modificările nu afectează variabila originală. Prin referință, parametrul este un alias al variabilei și modificările se păstrează.', 'Semnul & după tip indică transmiterea prin referință. Folosește referința când funcția trebuie să modifice sau să întoarcă mai multe rezultate.', 'void schimba(int &a, int &b) {\n    int aux = a; a = b; b = aux;\n}', 'Problemă: întoarce câtul și restul împărțirii. Soluție: void impartire(int a, int b, int &cat, int &rest), apoi cat = a / b și rest = a % b.'],
      ['Variabile locale și globale', 'O variabilă locală este declarată într-o funcție sau bloc și există doar acolo. O variabilă globală este declarată în afara funcțiilor și poate fi accesată de mai multe funcții.', 'Preferă variabilele locale: reduc efectele neașteptate și fac funcțiile mai ușor de testat.', 'int global = 10;\nvoid f() {\n    int local = 5;\n    cout << global + local;\n}', 'Problemă: o variabilă locală folosită în main nu este vizibilă acolo. Transmite valoarea prin parametru sau returneaz-o.'],
      ['Recursivitate', 'O funcție recursivă se apelează pe ea însăși. Are nevoie de caz de bază, care oprește apelurile, și pas recursiv, care apropie problema de acel caz.', 'Fără caz de bază apare recursivitate infinită. Factorialul este n! = n · (n - 1)!, cu 0! = 1.', 'long long factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n}', 'Problemă: calculează suma 1 + ... + n recursiv. Soluție: suma(n) = 0 dacă n == 0, altfel n + suma(n - 1).']
  ]},
  {
    title: 'Tablouri unidimensionale (vectori)', short: 'declarare · parcurgere · algoritmi', lessons: [
      ['Declarare și inițializare', 'Un vector reține mai multe valori de același tip, accesate prin indici. Pentru un vector declarat int v[100], indicii valizi sunt 0...99.', 'Dimensiunea maximă se stabilește la declarare. n este numărul efectiv de elemente și trebuie să respecte 0 < n <= dimensiune.', 'int v[100] = {4, 7, 1};\nint n = 3;\ncout << v[0];', 'Problemă: citește n elemente într-un vector. Soluție: declară v[100], citește n, apoi pentru i = 0..n-1 citește v[i].'],
      ['Parcurgere și prelucrare', 'Parcurgerea înseamnă vizitarea tuturor elementelor cu o buclă. Poți calcula sumă, produs, numărări, medii sau poți modifica elemente.', 'Pentru numărare pornești de la 0, pentru sumă de la 0, iar pentru produs de la 1. Inițializează maximul cu primul element.', 'int suma = 0, pare = 0;\nfor (int i = 0; i < n; i++) {\n    suma += v[i];\n    if (v[i] % 2 == 0) pare++;\n}', 'Problemă: determină media și câte elemente sunt peste medie. Faci suma, calculezi media, apoi o a doua parcurgere pentru numărare.'],
      ['Minim, maxim, sortare, căutare', 'Maximul și minimul se determină prin actualizarea unui candidat. Căutarea liniară verifică fiecare element. Sortarea prin selecție/inter-schimbare compară perechi și pune elementele în ordine.', 'Pentru sortare crescătoare, dacă v[i] > v[j], interschimbă-le. Căutarea binară este posibilă doar într-un vector sortat.', 'for (int i = 0; i < n - 1; i++)\n  for (int j = i + 1; j < n; j++)\n    if (v[i] > v[j]) swap(v[i], v[j]);', 'Problemă: verifică dacă x apare în v. Soluție: există = false; parcurgi vectorul și, la v[i] == x, setezi există = true și poți opri cu break.'],
      ['Vectori ca parametri de funcție', 'Un vector transmis unei funcții este însoțit de numărul său efectiv de elemente. Funcția poate citi sau modifica elementele vectorului primit.', 'Sintaxa clasică este void afiseaza(int v[], int n). Dimensiunea nu trebuie repetată în parametrul funcției.', 'void afiseaza(int v[], int n) {\n    for (int i = 0; i < n; i++)\n        cout << v[i] << " ";\n}', 'Problemă: scrie suma vectorului într-o funcție. Soluție: int suma(int v[], int n), cu acumulare într-o variabilă locală și returnarea ei.']
  ]},
  {
    title: 'Tablouri bidimensionale (matrice)', short: 'linii · coloane · diagonale', lessons: [
      ['Declarare și inițializare', 'O matrice este un tablou cu linii și coloane. Pentru int a[20][20], primul indice indică linia, al doilea coloana.', 'Elementul din linia i și coloana j este a[i][j]. În C++, indicii încep de la 0.', 'int a[20][20], m, n;\ncin >> m >> n;\nfor (int i = 0; i < m; i++)\n  for (int j = 0; j < n; j++) cin >> a[i][j];', 'Problemă: afișează matricea citită. Folosești două bucle imbricate și un cout << "\\n" după fiecare linie.'],
      ['Parcurgere pe linii, coloane și diagonale', 'Pentru linii fixezi i și variezi j; pentru coloane fixezi j și variezi i. Într-o matrice pătratică, diagonala principală are i == j, iar secundara i + j == n - 1.', 'Diagonalele sunt definite doar pentru matrice pătratice. La sume, actualizează acumulatoarele în timpul parcurgerii.', 'for (int i = 0; i < n; i++) {\n  sumaPrincipala += a[i][i];\n  sumaSecundara += a[i][n - 1 - i];\n}', 'Problemă: calculează suma elementelor de pe fiecare linie. Soluție: pentru fiecare i, pornești sumaLinie = 0 și parcurgi j de la 0 la m - 1.'],
      ['Transpusă și algoritmi specifici', 'Transpusa schimbă liniile cu coloanele: t[j][i] = a[i][j]. Pentru matrice speciale verificăm proprietăți precum diagonală, triunghiulară, simetrică sau identitate.', 'O matrice este simetrică dacă a[i][j] == a[j][i]. Matricea identitate are 1 pe diagonala principală și 0 în rest.', 'for (int i = 0; i < n; i++)\n  for (int j = 0; j < n; j++)\n    t[j][i] = a[i][j];', 'Problemă: verifică dacă matricea este identitate. Pentru fiecare poziție verifici a[i][j] == 1 când i == j, respectiv a[i][j] == 0 în rest.']
  ]},
  {
    title: 'Șiruri de caractere (string-uri)', short: 'text · biblioteca string · algoritmi', lessons: [
      ['Declarare și operații de bază', 'Tipul string, din biblioteca <string>, memorează un șir de caractere. Poți concatena cu +, compara cu ==, accesa caractere prin s[i] și afla lungimea cu size() sau length().', 'Indicii caracterelor încep de la 0. Un string gol are lungimea 0. Pentru text cu spații folosește getline(cin, s).', 'string nume = "Ana";\nnume += " Pop";\ncout << nume[0] << " " << nume.size();', 'Problemă: numără caracterele unui text. Soluție: citește getline(cin, s), apoi afișează s.size().'],
      ['Funcții din biblioteca string', 'Funcții utile: size/length pentru lungime, substr pentru subșir, find pentru poziția unei apariții, insert pentru inserare, erase pentru ștergere și replace pentru înlocuire.', 'find returnează string::npos dacă subșirul nu există. Poziția este un index, deci începe de la 0.', 'string s = "informatica";\ncout << s.substr(0, 5);\nif (s.find("form") != string::npos) cout << "gasit";', 'Problemă: extrage extensia unui fișier. Soluție: p = nume.find_last_of(\'.\'); extensie = nume.substr(p + 1).'],
      ['Algoritmi de prelucrare a textului', 'Textele pot fi parcurse caracter cu caracter pentru numărare, filtrare, transformare și verificare. Poți număra vocale, cifre, spații, cuvinte sau palindroame.', 'Pentru caractere folosește funcții din <cctype>: isdigit, isalpha, islower, isupper, tolower, toupper.', 'int vocale = 0;\nfor (char c : s)\n  if (c == \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\') vocale++;', 'Problemă: verifică palindromul. Soluție: compară s[i] cu s[s.size() - 1 - i] până la jumătatea șirului; orice diferență înseamnă că nu este palindrom.']
  ]}
];

const chapterGuides = [
  {
    aim: 'În acest capitol înveți să privești o problemă înainte de a scrie cod.',
    theory: 'Algoritmica este arta de a descompune o problemă în pași simpli și verificabili. Orice problemă are date de intrare, o prelucrare și date de ieșire. Înainte de programare identificăm ce se citește, ce trebuie calculat și ce se afișează. Un algoritm bun este finit, clar, eficient și general: nu rezolvă un singur exemplu, ci toate cazurile admise de problemă.',
    checklist: ['identifică datele de intrare și ieșire', 'alege variabile cu nume clare', 'scrie pașii în ordine', 'testează algoritmul pe un exemplu mic']
  },
  {
    aim: 'În acest capitol construiești vocabularul de bază al limbajului C++.',
    theory: 'C++ este un limbaj compilat: codul sursă este verificat și transformat într-un program executabil. Sintaxa trebuie respectată exact. Tipul unei variabile determină valorile posibile și operațiile permise, iar operatorii construiesc expresii. Este important să separi atribuirea de comparație și să urmărești tipul rezultatului fiecărei expresii.',
    checklist: ['include bibliotecile necesare', 'declară variabilele înainte de utilizare', 'verifică tipul rezultatului', 'citește datele în ordinea cerută']
  },
  {
    aim: 'În acest capitol controlezi ordinea în care se execută programul.',
    theory: 'Cele trei structuri fundamentale sunt secvența, decizia și repetiția. Secvența execută pașii unul după altul, decizia alege o ramură, iar repetiția execută un bloc de mai multe ori. Alegerea structurii potrivite este esențială: nu înlocui o buclă cu zeci de instrucțiuni copiate și nu uita să actualizezi variabila de control.',
    checklist: ['scrie condiții complete', 'verifică limitele buclelor', 'evită buclele infinite', 'indentează blocurile imbricate']
  },
  {
    aim: 'În acest capitol înveți să împarți problemele în funcții reutilizabile.',
    theory: 'Un subprogram ascunde detaliile unei operații și oferă un nume clar pentru ea. Funcțiile reduc repetarea codului, fac testarea mai ușoară și permit împărțirea unei probleme mari în probleme mici. Parametrii sunt datele primite de funcție, iar valoarea returnată este rezultatul. Recursivitatea este utilă când problema se poate descrie printr-o versiune mai mică a ei însăși.',
    checklist: ['alege un nume descriptiv', 'stabilește parametrii și tipul rezultatului', 'scrie cazul de bază la recursivitate', 'preferă variabile locale']
  },
  {
    aim: 'În acest capitol înveți să prelucrezi colecții de valori.',
    theory: 'Un vector este o secvență de elemente de același tip, aflate în poziții consecutive. Indicele este poziția elementului și începe de la 0. Majoritatea problemelor cu vectori se rezolvă prin una sau mai multe parcurgeri: acumulare, numărare, căutare, determinarea unui extrem și sortare. Pentru fiecare algoritm trebuie să știi ce informație păstrezi în variabilele auxiliare.',
    checklist: ['nu depăși limitele vectorului', 'distinge dimensiunea maximă de n', 'inițializează corect acumulatoarele', 'testează vector gol sau cu un singur element']
  },
  {
    aim: 'În acest capitol extinzi ideea de vector la linii și coloane.',
    theory: 'O matrice poate fi privită ca un tabel cu m linii și n coloane. Două bucle imbricate sunt instrumentul standard: prima alege linia, a doua parcurge coloanele. Pentru matrice pătratice apar proprietăți speciale: diagonale, simetrie, triunghiuri și matricea identitate. Scrie mereu clar dacă lucrezi pe linie, pe coloană sau pe o diagonală.',
    checklist: ['folosește a[i][j] cu i pentru linie și j pentru coloană', 'verifică dacă matricea este pătratică', 'calculează separat sumele cerute', 'nu confunda diagonala principală cu cea secundară']
  },
  {
    aim: 'În acest capitol înveți să tratezi textul ca pe o colecție de caractere.',
    theory: 'Un string este o succesiune ordonată de caractere. Îl poți citi, concatena, compara și parcurge. Problemele de text se reduc adesea la o parcurgere și o condiție: numără caracterele care respectă o proprietate, construiește un șir nou sau compară caractere simetrice pentru un palindrom. Bibliotecile <string> și <cctype> oferă operații utile, dar trebuie să verifici indexul înainte de acces.',
    checklist: ['folosește getline pentru texte cu spații', 'amintește-ți că indexarea începe de la 0', 'verifică string::npos la find', 'separă literele, cifrele și spațiile']
  }
];

const chapterPractice = [
  ['Scrie algoritmul pentru perimetrul unui dreptunghi.', 'Transformă în C++ algoritmul pentru media a trei numere.', 'Explică de ce un algoritm care nu se oprește nu este corect.'],
  ['Declară variabilele potrivite pentru nume, vârstă și medie.', 'Calculează câtul real al două numere întregi.', 'Găsește și corectează diferența dintre = și == într-un exemplu.'],
  ['Afișează numerele pare din intervalul [a, b].', 'Calculează numărul de divizori ai lui n.', 'Afișează un triunghi de caractere folosind bucle imbricate.'],
  ['Scrie o funcție care verifică dacă un număr este prim.', 'Folosește referințe pentru a ordona două valori.', 'Calculează recursiv cel mai mare divizor comun.'],
  ['Determină al doilea maxim al unui vector.', 'Sortează un vector crescător și afișează-l.', 'Caută o valoare într-un vector și afișează poziția ei.'],
  ['Calculează suma elementelor de pe fiecare coloană.', 'Verifică dacă o matrice este simetrică.', 'Construiește transpusa unei matrice dreptunghiulare.'],
  ['Numără vocalele și cifrele dintr-un text.', 'Elimină toate spațiile dintr-un string.', 'Verifică dacă două cuvinte sunt anagrame.']
];

const solvedPrograms = [
  [
    ['Aria dreptunghiului', '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cin >> a >> b;\n    cout << a * b;\n    return 0;\n}'],
    ['Număr par sau impar', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    if (n % 2 == 0) cout << "par";\n    else cout << "impar";\n    return 0;\n}'],
    ['Preț cu TVA', '#include <iostream>\nusing namespace std;\n\nint main() {\n    const double TVA = 0.19;\n    double pret;\n    cin >> pret;\n    cout << pret * (1 + TVA);\n    return 0;\n}'],
    ['Media a două numere', '#include <iostream>\nusing namespace std;\n\nint main() {\n    double a, b;\n    cin >> a >> b;\n    cout << (a + b) / 2;\n    return 0;\n}']
  ],
  [
    ['Datele unui elev', '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nume;\n    int varsta;\n    double medie;\n    cin >> nume >> varsta >> medie;\n    cout << nume << " " << varsta << " " << medie;\n    return 0;\n}'],
    ['Interval închis', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    cout << (n >= 10 && n <= 20);\n    return 0;\n}'],
    ['Suma și produsul', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << " " << a * b;\n    return 0;\n}'],
    ['Citire cu getline', '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nume;\n    getline(cin, nume);\n    cout << "Salut, " << nume;\n    return 0;\n}'],
    ['Media reală', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    double medie = static_cast<double>(a + b + c) / 3;\n    cout << medie;\n    return 0;\n}']
  ],
  [
    ['Interschimbare', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b, aux;\n    cin >> a >> b;\n    aux = a; a = b; b = aux;\n    cout << a << " " << b;\n    return 0;\n}'],
    ['Ziua săptămânii', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int k; cin >> k;\n    switch (k) {\n        case 1: cout << "luni"; break;\n        case 2: cout << "marti"; break;\n        case 3: cout << "miercuri"; break;\n        case 4: cout << "joi"; break;\n        case 5: cout << "vineri"; break;\n        case 6: cout << "sambata"; break;\n        case 7: cout << "duminica"; break;\n        default: cout << "valoare invalida";\n    }\n    return 0;\n}'],
    ['Suma cifrelor', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, suma = 0; cin >> n;\n    while (n > 0) {\n        suma += n % 10;\n        n /= 10;\n    }\n    cout << suma;\n    return 0;\n}'],
    ['Primul divizor', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, divizor = 0; cin >> n;\n    for (int d = 2; d <= n / 2; d++)\n        if (n % d == 0) { divizor = d; break; }\n    cout << divizor;\n    return 0;\n}'],
    ['Tabla înmulțirii', '#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 9; i++) {\n        for (int j = 1; j <= 9; j++)\n            cout << i * j << " ";\n        cout << "\\n";\n    }\n    return 0;\n}']
  ],
  [
    ['Pătratul unui număr', '#include <iostream>\nusing namespace std;\n\nint patrat(int x) { return x * x; }\n\nint main() {\n    int n; cin >> n;\n    cout << patrat(n);\n    return 0;\n}'],
    ['Cât și rest prin referință', '#include <iostream>\nusing namespace std;\n\nvoid impartire(int a, int b, int &cat, int &rest) {\n    cat = a / b; rest = a % b;\n}\n\nint main() {\n    int a, b, cat, rest; cin >> a >> b;\n    impartire(a, b, cat, rest);\n    cout << cat << " " << rest;\n    return 0;\n}'],
    ['Vizibilitatea variabilelor', '#include <iostream>\nusing namespace std;\n\nint aduna(int a, int b) {\n    int rezultat = a + b;\n    return rezultat;\n}\n\nint main() {\n    int x, y; cin >> x >> y;\n    cout << aduna(x, y);\n    return 0;\n}'],
    ['Suma recursivă', '#include <iostream>\nusing namespace std;\n\nint suma(int n) {\n    if (n == 0) return 0;\n    return n + suma(n - 1);\n}\n\nint main() {\n    int n; cin >> n;\n    cout << suma(n);\n    return 0;\n}']
  ],
  [
    ['Citirea unui vector', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int v[100], n; cin >> n;\n    for (int i = 0; i < n; i++) cin >> v[i];\n    for (int i = 0; i < n; i++) cout << v[i] << " ";\n    return 0;\n}'],
    ['Media și elementele peste medie', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int v[100], n, suma = 0, peste = 0; cin >> n;\n    for (int i = 0; i < n; i++) { cin >> v[i]; suma += v[i]; }\n    double medie = static_cast<double>(suma) / n;\n    for (int i = 0; i < n; i++) if (v[i] > medie) peste++;\n    cout << medie << " " << peste;\n    return 0;\n}'],
    ['Căutare într-un vector', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int v[100], n, x, poz = -1; cin >> n;\n    for (int i = 0; i < n; i++) cin >> v[i];\n    cin >> x;\n    for (int i = 0; i < n; i++) if (v[i] == x) { poz = i; break; }\n    cout << poz;\n    return 0;\n}'],
    ['Suma vectorului prin funcție', '#include <iostream>\nusing namespace std;\n\nint suma(int v[], int n) {\n    int rezultat = 0;\n    for (int i = 0; i < n; i++) rezultat += v[i];\n    return rezultat;\n}\n\nint main() {\n    int v[100], n; cin >> n;\n    for (int i = 0; i < n; i++) cin >> v[i];\n    cout << suma(v, n);\n    return 0;\n}']
  ],
  [
    ['Afișarea unei matrice', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[20][20], m, n; cin >> m >> n;\n    for (int i = 0; i < m; i++)\n        for (int j = 0; j < n; j++) cin >> a[i][j];\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) cout << a[i][j] << " ";\n        cout << "\\n";\n    }\n    return 0;\n}'],
    ['Sumele coloanelor', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[20][20], m, n; cin >> m >> n;\n    for (int i = 0; i < m; i++) for (int j = 0; j < n; j++) cin >> a[i][j];\n    for (int j = 0; j < n; j++) {\n        int suma = 0;\n        for (int i = 0; i < m; i++) suma += a[i][j];\n        cout << suma << " ";\n    }\n    return 0;\n}'],
    ['Verificarea matricei identitate', '#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[20][20], n; bool identitate = true; cin >> n;\n    for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) cin >> a[i][j];\n    for (int i = 0; i < n; i++) for (int j = 0; j < n; j++)\n        if (a[i][j] != (i == j)) identitate = false;\n    cout << (identitate ? "DA" : "NU");\n    return 0;\n}']
  ],
  [
    ['Lungimea unui text', '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; getline(cin, s);\n    cout << s.size();\n    return 0;\n}'],
    ['Extensia unui fișier', '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string nume; cin >> nume;\n    size_t poz = nume.find_last_of(\'.\');\n    cout << nume.substr(poz + 1);\n    return 0;\n}'],
    ['Verificarea palindromului', '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s; cin >> s; bool palindrom = true;\n    for (int i = 0; i < static_cast<int>(s.size()) / 2; i++)\n        if (s[i] != s[s.size() - 1 - i]) palindrom = false;\n    cout << (palindrom ? "DA" : "NU");\n    return 0;\n}']
  ]
];

const quizQuestions = [
  { question: 'Care este prima proprietate cerută unui algoritm?', answers: ['Să fie colorat', 'Să fie finit', 'Să folosească vectori', 'Să fie recursiv'], correct: 1, explanation: 'Un algoritm trebuie să se termine după un număr finit de pași.' },
  { question: 'Ce rezultat are 17 % 5?', answers: ['2', '3', '3.4', '0'], correct: 0, explanation: 'Operatorul % întoarce restul împărțirii întregi.' },
  { question: 'Ce tip este potrivit pentru un text?', answers: ['char', 'bool', 'string', 'int'], correct: 2, explanation: 'string memorează un șir de caractere.' },
  { question: 'Când este potrivită bucla for?', answers: ['Când nu există condiție', 'Când știi numărul de repetări', 'Doar pentru string-uri', 'Pentru declarații'], correct: 1, explanation: 'for este alegerea naturală când numărul de pași este cunoscut.' },
  { question: 'Care este condiția diagonalei principale?', answers: ['i + j == n', 'i == j', 'i < j', 'i + j == n - 1'], correct: 1, explanation: 'Pe diagonala principală, indicele liniei este egal cu indicele coloanei.' },
  { question: 'Ce returnează s.size()?', answers: ['Ultimul caracter', 'Poziția unui subșir', 'Numărul de caractere', 'Un vector'], correct: 2, explanation: 'size() returnează lungimea șirului.' }
];

const lessonIndex = document.querySelector('#lessonIndex');
const lessonContent = document.querySelector('#lessonContent');
const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]').filter(item => typeof item === 'string');
let currentChapter = 0;
let currentLesson = 0;

function renderIndex() {
  lessonIndex.innerHTML = chapters.map((chapter, chapterIndex) => `<div class="chapter-group"><button class="chapter-tab ${chapterIndex === 0 ? 'active' : ''}" data-chapter="${chapterIndex}" type="button"><span>${String(chapterIndex + 1).padStart(2, '0')}</span><b>Capitolul ${chapterIndex + 1}</b><small>${chapter.title}</small><i>⌄</i></button><div class="sublesson-list ${chapterIndex === 0 ? '' : 'collapsed'}">${chapter.lessons.map((lesson, lessonIndex) => `<button class="sublesson-tab ${chapterIndex === 0 && lessonIndex === 0 ? 'active' : ''}" data-chapter="${chapterIndex}" data-lesson="${lessonIndex}" type="button"><span>${chapterIndex + 1}.${lessonIndex + 1}</span>${lesson[0]}</button>`).join('')}</div></div>`).join('');
  document.querySelectorAll('.chapter-tab').forEach(button => button.addEventListener('click', () => { const group = button.nextElementSibling; button.classList.toggle('active'); group.classList.toggle('collapsed'); }));
  document.querySelectorAll('.sublesson-tab').forEach(button => button.addEventListener('click', () => renderLesson(Number(button.dataset.chapter), Number(button.dataset.lesson))));
}

function lessonId(chapterIndex, lessonIndex) { return `${chapterIndex}-${lessonIndex}`; }

function renderLesson(chapterIndex, lessonIndex) {
  currentChapter = chapterIndex; currentLesson = lessonIndex;
  const lesson = chapters[chapterIndex].lessons[lessonIndex];
  const guide = chapterGuides[chapterIndex];
  const practice = chapterPractice[chapterIndex];
  const solved = solvedPrograms[chapterIndex][lessonIndex];
  document.querySelectorAll('.sublesson-tab').forEach(button => button.classList.toggle('active', Number(button.dataset.chapter) === chapterIndex && Number(button.dataset.lesson) === lessonIndex));
  const id = lessonId(chapterIndex, lessonIndex);
  lessonContent.innerHTML = `<div class="chapter-overview"><span class="lesson-kicker">Capitolul ${chapterIndex + 1} · ${chapters[chapterIndex].title}</span><strong>${guide.aim}</strong><p>${guide.theory}</p><ul>${guide.checklist.map(item => `<li>${item}</li>`).join('')}</ul></div><span class="lesson-kicker">Lecția ${chapterIndex + 1}.${lessonIndex + 1}</span><h3>${lesson[0]}</h3><p class="lesson-lead">${lesson[1]}</p><div class="lesson-detail-grid"><div><h4>De reținut</h4><p>${lesson[2]}</p></div><div><h4>Exemplu explicat</h4><p>${lesson[3]}</p></div></div><pre class="lesson-code">${lesson[4]}</pre><div class="solved-box"><strong>Exercițiu rezolvat: ${solved[0]}</strong><p>${lesson[5]}</p><pre class="solution-code">${solved[1]}</pre></div><div class="practice-box"><strong>Exerciții de fixare</strong><ol>${practice.map(item => `<li>${item}</li>`).join('')}</ol></div><div class="lesson-actions"><button class="complete-button ${completed.includes(id) ? 'done' : ''}" id="completeLesson" type="button">${completed.includes(id) ? '✓ Lecție finalizată' : 'Marchează lecția ca finalizată'}</button><div class="lesson-nav"><button id="previousLesson" type="button">← Anterioara</button><button id="nextLesson" type="button">Următoarea →</button></div></div>`;
  document.querySelector('#completeLesson').addEventListener('click', toggleComplete);
  document.querySelector('#previousLesson').addEventListener('click', () => moveLesson(-1));
  document.querySelector('#nextLesson').addEventListener('click', () => moveLesson(1));
}

function moveLesson(direction) {
  let chapterIndex = currentChapter;
  let lessonIndex = currentLesson + direction;
  if (lessonIndex < 0) { chapterIndex = Math.max(0, chapterIndex - 1); lessonIndex = chapters[chapterIndex].lessons.length - 1; }
  if (lessonIndex >= chapters[chapterIndex].lessons.length) { chapterIndex = Math.min(chapters.length - 1, chapterIndex + 1); lessonIndex = 0; }
  renderLesson(chapterIndex, lessonIndex);
  lessonContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleComplete() {
  const id = lessonId(currentChapter, currentLesson); const position = completed.indexOf(id);
  if (position === -1) completed.push(id); else completed.splice(position, 1);
  localStorage.setItem('completedLessons', JSON.stringify(completed));
  renderLesson(currentChapter, currentLesson); updateProgress();
}

function updateProgress() {
  const total = chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0); const percent = Math.round((completed.length / total) * 100);
  document.querySelector('#completedCount').textContent = completed.length; document.querySelector('#progressPercent').textContent = `${percent}%`; document.querySelector('#progressBar').style.width = `${percent}%`;
}

renderIndex(); renderLesson(0, 0); updateProgress();

let quizIndex = 0; let quizScore = 0; let quizAnswered = false; const quizCard = document.querySelector('#quizCard');
function renderQuiz() {
  const item = quizQuestions[quizIndex]; quizAnswered = false;
  quizCard.innerHTML = `<div class="quiz-meta"><span>Întrebarea ${quizIndex + 1} / ${quizQuestions.length}</span><span>scor ${quizScore}</span></div><h3>${item.question}</h3><div class="answers">${item.answers.map((answer, index) => `<button class="answer" data-answer="${index}" type="button">${String.fromCharCode(65 + index)}. ${answer}</button>`).join('')}</div><p class="quiz-feedback" aria-live="polite"></p><button class="quiz-next" type="button">${quizIndex === quizQuestions.length - 1 ? 'Vezi rezultatul' : 'Următoarea întrebare'} →</button>`;
  quizCard.querySelectorAll('.answer').forEach(button => button.addEventListener('click', checkAnswer)); quizCard.querySelector('.quiz-next').addEventListener('click', nextQuestion);
}
function checkAnswer(event) { if (quizAnswered) return; quizAnswered = true; const chosen = Number(event.currentTarget.dataset.answer); const item = quizQuestions[quizIndex]; quizCard.querySelectorAll('.answer')[item.correct].classList.add('correct'); if (chosen === item.correct) { quizScore++; quizCard.querySelector('.quiz-feedback').textContent = `Corect. ${item.explanation}`; } else { event.currentTarget.classList.add('wrong'); quizCard.querySelector('.quiz-feedback').textContent = `Aproape. ${item.explanation}`; } quizCard.querySelector('.quiz-next').classList.add('visible'); }
function nextQuestion() { if (quizIndex === quizQuestions.length - 1) { const best = Math.max(quizScore, Number(localStorage.getItem('bestQuiz') || 0)); localStorage.setItem('bestQuiz', best); document.querySelector('#quizBest').textContent = `${best}/${quizQuestions.length}`; quizCard.innerHTML = `<div class="quiz-meta"><span>Rezultat final</span><span>quiz complet</span></div><h3>Ai obținut <em>${quizScore} / ${quizQuestions.length}</em>. ${quizScore === quizQuestions.length ? 'Excelent!' : 'Mai revino asupra lecțiilor și încearcă din nou.'}</h3><button class="quiz-next visible" id="restartQuiz" type="button">Reia quizul ↻</button>`; document.querySelector('#restartQuiz').addEventListener('click', () => { quizIndex = 0; quizScore = 0; renderQuiz(); }); } else { quizIndex++; renderQuiz(); } }
document.querySelector('#quizBest').textContent = localStorage.getItem('bestQuiz') ? `${localStorage.getItem('bestQuiz')}/${quizQuestions.length}` : '--'; renderQuiz();
document.querySelector('#themeToggle').addEventListener('click', () => { document.body.classList.toggle('dark'); document.querySelector('#themeToggle').textContent = document.body.classList.contains('dark') ? '☾' : '☼'; });
