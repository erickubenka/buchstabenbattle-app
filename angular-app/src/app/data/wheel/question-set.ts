import {Question} from "./question";

export class QuestionSet {

  questionList: Question[] = [];
  id: string = "Leerer Fragensatz";

  constructor() {
  }

  static create(id: string, questions: Question[]) {
    let list = new QuestionSet();
    list.questionList = questions;
    list.id = id;
    return list;
  }

  static sets: QuestionSet[] = [
    QuestionSet.create("Leerer Fragensatz", [
      new Question("A", "", "", false, false),
      new Question("B", "", "", false, false),
      new Question("C", "", "", false, false),
      new Question("D", "", "", false, false),
      new Question("E", "", "", false, false),
      new Question("F", "", "", false, false),
      new Question("G", "", "", false, false),
      new Question("H", "", "", false, false),
      new Question("I", "", "", false, false),
      new Question("J", "", "", false, false),
      new Question("K", "", "", false, false),
      new Question("L", "", "", false, false),
      new Question("M", "", "", false, false),
      new Question("N", "", "", false, false),
      new Question("O", "", "", false, false),
      new Question("P", "", "", false, false),
      new Question("Q", "", "", false, false),
      new Question("R", "", "", false, false),
      new Question("S", "", "", false, false),
      new Question("T", "", "", false, false),
      new Question("U", "", "", false, false),
      new Question("V", "", "", false, false),
      new Question("W", "", "", false, false),
      new Question("X", "", "", false, false),
      new Question("Y", "", "", false, false),
      new Question("Z", "", "", false, false),
    ]),

    QuestionSet.create("Fragensatz 1", [
      new Question("A", "Welche Popgruppe gewann 1974 den Grand Prix Eurovisoopn Song mit dem Song Whaterloo?", "ABBA", false, false),
      new Question("B", "Wer hat in Schwimmanstalten die Aufsicht am Beckenrand?", "Bademeister", false, false),
      new Question("C", "Wie nennt man die wöchentliche Rangliste von Songs und Alben?", "Charts", false, false),
      new Question("D", "Frage1", "Dracula", false, false),
      new Question("E", "Wie werden die ersten Züge, also die erste Phase eines Schachspiels, gennant?", "Eröffnung", false, false),
      new Question("F", "Auf welchen Teil des Fahrrads werden Mantel und Schlauch aufgezogen?", "Felge", false, false),
      new Question("G", "Zu welchem Staat gehören die beliebten Urlaubsinseln Kreta und Korfu?", "Griechenland", false, false),
      new Question("H", "Wie nennt man die Anhänger den Calvinismus die vor den Katholiken aus Frankreich flüchten mussten?", "Hugenotten", false, false),
      new Question("I", "In der deutschen Sprache gibt es die 3 Modi: Imperativ, Konjunktiv und...?", "Indikativ", false, false),
      new Question("J", "Wie nennt man die Gesamtheit der Geschworenen im Strafprozess?", "Jury", false, false),
      new Question("K", "Wie heißt die in einem evanglischem Gottesdienst vollzogene Bekenntnis von Jugendlichen zum christlichen Glauben?", "Konfirmation", false, false),
      new Question("L", "Von welchen Rundungen hat ein traditoneller Golfplatz 18 Stück an der Zahl?", "Löcher", false, false),
      new Question("M", "Wie heißt der höchste Berg der Alpen?", "Mont Blanc", false, false),
      new Question("N", "Ist die ferienbedingte Urlaubszeit vorbei, beginnt in vielen Urlaubsorten die deutlich günstigere ...?", "Nebensaison", false, false),
      new Question("O", "Wie lautet die Berufsbezeichnung für einen Orgelspieler?", "Organist", false, false),
      new Question("P", "Wie bezeichnet man allgemein Konfekt mit einem Schokoladenüberzug oder einer Füllung aus Creme oder Weinbrandt?", "Praline", false, false),
      new Question("Q", "Deutschland ist aufgrund vieler Kohlekraftwerke europäischer Spitzenreiter bei der Emission dieses Metalls und Nervengifts.", "Quecksilber", false, false),
      new Question("R", "Einer der bekanntesten deutschen Dichter war Rainer Maria ... ", "Rilke", false, false),
      new Question("S", "Welche großen oder repräsentativen Räume in Gebäduen dienen unter anderem Festlichkeiten und Versammlungen?", "Saal", false, false),
      new Question("T", "Diesen kleinen Drachen ließ Peter Maffay im Kinder-Musical aufleben.", "Tabaluga", false, false),
      new Question("U", "In welche Kammer des britischen Parlaments setzte Street-Art Künstler Bansky lauter Affen?", "Unterhaus", false, false),
      new Question("V", "Was für ein Tier ist der Schneekönig der als Synonym für große Freude steht?", "Vogel", false, false),
      new Question("W", "In Tasmanien begegnet einem diese 80cm große Känguruart ständig.", "Wallaby", false, false),
      new Question("X", "Frage1", "Antwort1", false, false),
      new Question("Y", "Wie heißt die nördlichste deustche Insel dessen Hauptort Westerland ist?", "Sylt", false, false),
      new Question("Z", "Welches Gewürz wird aus Baumrinde gewonnen?", "Zimt", false, false),
    ]),
    QuestionSet.create("Fragensatz 2", [
      new Question("A", "Wer sich nach einem schweren Schlag wieder erholt und erhobene Hauptes weiter macht, steht auf wie der Phoenix aus der ...?", "Asche", false, false),
      new Question("B", "Wie werden korrupte, undemokratische Staaten umgangsprachlich und nach einer tropsichen Frucht genannt?", "Bananenrepublik", false, false),
      new Question("C", "Mit einem englischen Wort nennt man den Laufsteg für Models?", "Catwalk", false, false),
      new Question("D", "Wie heißt das obere Holzgerüst eines Hauses das namentlich an Sitzmöbel erinnert?", "Dachstuhl", false, false),
      new Question("E", "Eine verbindliche Erklärung vor Gericht oder Schwur nennt man?", "Eid", false, false),
      new Question("F", "Ein falches Wasserfahrzeug aus zusammengebundenen Baumstämmen nennt man ...?", "Floß", false, false),
      new Question("G", "An Tankstellen in den USA bezahlt man das Benzin nicht pro Liter sondern pro ...?", "Gallone", false, false),
      new Question("H", "Welche Sportart wird gespielt wenn der THW Kiel und die SG Flensburg-Handewitt aufeinandertrefen?", "Handball", false, false),
      new Question("I", "Ein beschönigendes Wunschdenken welches wenig mit der Wirklichkeit zu tun hat, nennt man?", "Illusion", false, false),
      new Question("J", "Ein Spielzeug bei den sich bei miteinander verbunden Scheiben an einer Schnur auf und ab bewegen nennt man?", "Jojo", false, false),
      new Question("K", "Wer fand den Erreger der Tuberkulose und ist Namensgeber des Instituts welches uns regelmäßig zur Pandemie informiert?", "Robert Koch", false, false),
      new Question("L", "Aus welcher österreichischen Stadt mit deutschem Namensvetter am Rhein stammt das älteste Tortenrezept der Welt?", "Linz", false, false),
      new Question("M", "In welchem Stück von Shakespeare wird ein Herrfü+hrer durch Mord zum König von Schottland?", "Macbeth", false, false),
      new Question("N", "Welches walzenförmige Küchengerät kommt beim Ausrollen von Teig zum Einsatz?", "Nudelholz", false, false),
      new Question("O", "Welches schmerzstillende Arzneimittel wird aus Mohn gewonnen?", "Opium", false, false),
      new Question("P", "Die Mirabelle ist eine Unterart der ... ?", "Pflaume", false, false),
      new Question("Q", "Wie heißt im American Football die Position des Spielgestalters?", "Quarterback", false, false),
      new Question("R", "Welches bekannte Bauwerk über den Canal Grande verbindet die Stadtteile San Polo und San Marco?", "Rialtobrücke / Ponte de Rialto", false, false),
      new Question("S", "Wie heißt der griechische Tanz der durch Anthony Quinn im Film Alexis Sorbas bekannt wurde?", "Siratki", false, false),
      new Question("T", "Mit welchem christlichen Ritual wird eine Person in die Gemeinschaft der Gläubigen aufgenommen?", "Taufe", false, false),
      new Question("U", "Wie nennt man den gesamten Mechanismus im Inneren eines analogen Zeitmessers?", "Uhrwerk", false, false),
      new Question("V", "Der franz. Begriff für einen Tierarzt lautet ..,?", "Veterinär", false, false),
      new Question("W", "Mit welchem Schlagwort wird das Phänomen des unerwartet schnellen Aufschwungs in Nachkriegsdeutschland beschrieben?", "Wirtschaftswunder", false, false),
      new Question("X", "Die Abmeldung eines Studenten von eienr Hochschule heißt? - X im Wort!", "Exmatrikulation", false, false),
      new Question("Y", "Ein vorlauter und frecher Zeichentrickhase heißt Bugs ... ? - Y am Ende des Wortes!", "Bunny", false, false),
      new Question("Z", "Wie heißt die griechische Joghurtspeise die mit Gurke und viel Knoblauch angerichtet wird?", "Zazaki", false, false),
    ]),
    QuestionSet.create("Fragensatz 3", [
      new Question("A", "Welches Fürstentum liegt in den Pyrenäen?", "Andorra", false, false),
      new Question("B", "Die Form des Kletterns bei dem ohne Gurt und Seil in Absprunghöhe geklettert wird ist das ...?", "Bouldern", false, false),
      new Question("C", "Ein anderer Name für Holzpantoffeln lautet?", "Clocks", false, false),
      new Question("D", "Wie heißt die reichste Ente aus Entenhausen?", "Dagobert Duck", false, false),
      new Question("E", "Woraus bestehen die Stoßzähne von Elefanten?", "Elfenbein", false, false),
      new Question("F", "Wer am 10. Dezember in Oslo eine Medaille mit 3 nackten Männern darauf erhält, ist Gewinner des ...?", "Friedensnobelbpreis", false, false),
      new Question("G", "Ein wichtiger Prozess bei der Herstellung von Bier ist die alkoholische ...?", "Gärung", false, false),
      new Question("H", "Aus welchem Fisch wird Rollmops hergestellt?", "Hering", false, false),
      new Question("I", "Die Herkunft und den Herausgeber einer Zeitung findet man im gesetzlich vorgeschriebenem ...?", "Impressum", false, false),
      new Question("J", "Das lateinische Wort \"anno\" bedeuted soviel wie \"im ...\"?", "Jahre", false, false),
      new Question("K", "Ein Kleidungsstück, das den Oberkörper mit Schnüren zusammenschnürt?", "Korsett", false, false),
      new Question("L", "Den Hinweis \"kussecht\" findet man auf welchem Kosmetikartikel?", "Lippenstift", false, false),
      new Question("M", "Welcher Gerd wurde wegen der vielen Tore als \"Bomber der Nation\" bezeichnet?", "Müller", false, false),
      new Question("N", "Aus welchem Land kommt der seit 2013 amtierende Schachweltmeister Magnus Carlsen?", "Norwegen", false, false),
      new Question("O", "Ein anderer Name für die achtarmigen Kraken lautet?", "Oktopus", false, false),
      new Question("P", "Aus welchem Hitchcock Film stammt die berühmte Szene mit dem Mord in Dusche?", "Psycho", false, false),
      new Question("Q", "Ein aus Frankreich stammender, herzhaft mit Fleischkäse oder Gemüse belegter Kuchen aus Mürbe- oder Blätterteig heißt auch?", "Quiche", false, false),
      new Question("R", "Wobei handelt es sich um die in Deutschland wohl am häufigsten vorkommende Schlangenart?", "Ringelnatter", false, false),
      new Question("S", "Welcher deutsche Rapper heißt mit bürgerlichem Namen Paul Würdig?", "Sido", false, false),
      new Question("T", "Ein auf einem Erfahrungsbericht von betty Mahmoody basierender Film von 1991 trägt den Titel \"Nicht ohne meine ...\"?", "Tochter", false, false),
      new Question("U", "Gibt man bei der Bundestagswahl einen leeren Stimmzettel ab, so gelten beide Stimmen laut Gesetz als ...?", "ungültig", false, false),
      new Question("V", "Verliebte kennen den 14. Februar tradtionell als ...?", "Valentinstag", false, false),
      new Question("W", "In welche haarige Kreatur verwandelt sich Michael Jackson in dem Musikvideo zu Thriller?", "Werwolf", false, false),
      new Question("X", "Welcher amerikanische Bürgerechtler wurde in einem Film von Denzel Washington verkörpert? - X am Ende des Wortes.", "Malcom X", false, false),
      new Question("Y", "Wie hieß die indische Metropole Mumbai bis zum Jahre 1996? Y am Ende des Wortes.", "Bombay", false, false),
      new Question("Z", "Welcher französische Fußballer hat den Spitznamen Zizou und entschied die WM 1998 fast im Alleingang?", "Zinedine Zidane", false, false),
    ]),
    QuestionSet.create("Fragensatz 4", [
      new Question("A", "Welches an einer Kette befestigte, schwere Gerät aus Eisen hält ein Schiff im Wasser an seinem Platz?", "Anker", false, false),
      new Question("B", "Die höchste Anerkennung, welche die Bundesrepublik Deutschland für Leistung in Sachen Gemeinwohl verleiht, nennt man auch ...?", "Bundesverdienstkreuz", false, false),
      new Question("C", "Ein französischer Likör aus schwarzen Johannesbeeren heißt \"Créme de ...\"?", "Cassis", false, false),
      new Question("D", "Welchen Beruf übt die literarische Figur Sherlock Holmes aus?", "Detektiv", false, false),
      new Question("E", "Das größte an Land lebende arktische Raubtier ist der ...?", "Eisbär", false, false),
      new Question("F", "Wie heißt ein traditionelles, japanisches Bett?", "Futon", false, false),
      new Question("G", "In welcher Sportart folgt auf das sogenannte Umsetzen das Ausstoßen?", "Gewichtheben", false, false),
      new Question("H", "Welche pelzig behaarten Insekten hat man laut Redensart im Hintern, wenn man nicht still sitzen kann? ", "Hummeln", false, false),
      new Question("I", "Einem Menschen, dem große Bewunderung entgegengebracht wird, nennt man genauso wie den Musiker Billy ...?", "Idol", false, false),
      new Question("J", "Wer das Studium der Rechtswissenschaften abgeschlossen hat, ist ein ...?", "Jurist", false, false),
      new Question("K", "Welches Werkzeug das in der Schweiz \"Zapfenzieher\" heißt, gibt es mit oder ohne Seele?", "Korkenzieher", false, false),
      new Question("L", "\"Light Amplification by Stimulated Emission of Radiation\" steht für welches gebündelte Licht?", "Laser", false, false),
      new Question("M", "Welche Leckerei, für die die Stadt Lübeck bekannt ist, wird aus Mandeln und Zucker gemacht?", "Marzipan", false, false),
      new Question("N", "Ein Balett von Tschaikowski das auf ein Weihnachtsmärchen zurückgeht, heißt \"Der ...\"?", "Nussknacker", false, false),
      new Question("O", "Der Fußballtrainer Rehhage trug den Spitznamen \"König ...\"? ", "Otto", false, false),
      new Question("P", "Das 1948 von Wlater Ömchen gegründete Marionettentheater ist die Augsburger ...?", "Puppenkiste", false, false),
      new Question("Q", "Wofür steht das Q in der Abkürzung FAQ?", "Question", false, false),
      new Question("R", "Welches Grimm'sche Märchen beginnt mit den Worten \"Es war einmal eine kleine süße Dirne\"? ", "Rotkäppchen", false, false),
      new Question("S", "Nach welchem Ex-SPD-Bundeskanzler ist der Hamburger Flughafen benannt?", "Schmidt", false, false),
      new Question("T", "Ein aus dem englischen entlehnter Begriff für eine schriftliche Gebrauchsanleitung lautet?", "Tutorial", false, false),
      new Question("U", "Die Sowjetunion wie sie bis 1991 bestand, kannte man abgekürzt auch als?", "UdSSR", false, false),
      new Question("V", "In welcher Sportart wird gebaggert und gepritscht?", "Volleyball", false, false),
      new Question("W", "Welche Fleischwurst zuzelt man in bayern idealerweise vor 12 Uhr mittags?", "Weißwurst", false, false),
      new Question("X", "Ein 1986 in Schweden gegründetes Pop-Duo mit Per Gessle und Marie Fredriksson heißt? X im Wort.", "Roxette", false, false),
      new Question("Y", "Jemand der von Beruf Pferderennen reitet, nennt man ...? Y am Ende des Wortes.", "Jockey", false, false),
      new Question("Z", "Wie heißt der höchste Gott in der griechischen Mythologie?", "Zeus", false, false),
    ])
  ];
}

//
// questionList2 = [
//   new Question("A", "Ein Zyklop hat nur eines dieser Sehorgane?", "Auge", false, false),
//   new Question("B", "Welche oberste Instanz im Zivil- und Strafrecht hat ihren Sitz in Karlsruhe?", "Bundesgerichtshof", false, false),
//   new Question("C", "In ihrem Klassiker aus dem Jahr 1972 besingen die Eagles das Hotel ...?", "California", false, false),
//   new Question("D", "Wie heißt die Landeswährung von unter anderem Algerien, Libyien und Jordanien? ", "Dinar", false, false),
//   new Question("E", "Welcher vor allem in den USA beliebte Brotaufstrich ist in crunchy und creamy erhältlich?", "Erdnussbutter", false, false),
//   new Question("F", "Bei einem sogenannten Walky-Talky handelt es sich um ein transportables ...?", "Funkgerät", false, false),
//   new Question("G", "Alabaster ist eine Abart dieses Minerals aus dem auch feste weiße Verbände bei Knochenbrüchen bestehen.", "Gips", false, false),
//   new Question("H", "Wie heißen die von Lehrern geforderten Arbeiten, die Schüler selbstständig außerhalb des Unterrichts erledigen?", "Hausaufgaben", false, false),
//   new Question("I", "Das goldene Dachl ist eine Touristenattraktion dieser Hauptstadt Tirols", "Innsbruck", false, false),
//   new Question("J", "Maria war laut christlichen Glaubens trotz Jesu Geburt noch ..?", "Jungfrau", false, false),
//   new Question("K", "Dieses Gerät benutzt Magnetismus um die Himmelsrichtung zu bestimmen.", "Kompass", false, false),
//   new Question("L", "Wie heißt der Teil des Fußballtors der quer auf den beiden Pfosten liegt?", "Latte", false, false),
//   new Question("M", "Wie nennt man sowohl einen Handwerker, als auch einen Künslter, der Farben und Lacke auf Flächen aufträgt?", "Maler", false, false),
//   new Question("N", "Als erste Frau den Parteivorsitz der SPD übernahm 2018 Andrea ...?", "Nahles", false, false),
//   new Question("O", "\"Die spinnen die Römer\" ist der Lieblingsspruch welcher Comic-Figuzr?", "Obelix", false, false),
//   new Question("P", "Welcher beliebte Kinosnack wird auch Puffmais genannt?", "Popcorn", false, false),
//   new Question("Q", "Während ein Daiquiri mit Rum gemacht wird, enthält eine Margarita typishcerweise diesen mexikanischen Agavanbrandt. Q im Wort.", "Tequila", false, false),
//   new Question("R", "Wer jemandem übertrieben schmeichelt, macht redensartlich was mit Süßholz?", "raspeln", false, false),
//   new Question("S", "Wie heißen die Spinnentiere mit zwei starken Fangarmen, die an ihrem Schwanz einen Giftstachel haben?", "Skorpion", false, false),
//   new Question("T", "Welche rotierenden Strömungsmaschinen treiben mit Hilfe von Luft, Wasser oder Gase Flugzeuge und Schiffe an?", "Turbinen", false, false),
//   new Question("U", "Auf welcher Ostseeinsel befindet sich die deutsche Stadt Zinnowitz?", "Usedom", false, false),
//   new Question("V", "Auf welchem Schloss in der Nähe von Paris wurde der Friedensvertrag 1919 geschlossen?", "Versailles", false, false),
//   new Question("W", "Die Kurzform dieses englischen Männervornamens lautet Will.", "William", false, false),
//   new Question("X", "In welchem Film von Martin Scorsese fährt Robert de Niro Passagiere durch das nächtliche New York?. X im Wort.", "Taxi Driver", false, false),
//   new Question("Y", "In der Antike war es ein Sportplatz und heute ist eine weiterführende Schule zum Erlangen der Hochschulreife. Y im Wort.", "Gymnasium", false, false),
//   new Question("Z", "Frage1 ", "Antwort1", false, false),
// ];


/**
 * A - Wie nennt man den würzigen Geruch der sich zum Beispiel bei Kaffee und Tee verbreitet? - Aroma
 * C - Was für ein Tier ist der Titelheld im Animationsfilm Findet Nemo? - Clownfisch
 * F - In welchem Gerät, welches alle Anforderungen erfüllt, können Piloten ihre Fähigkeiten üben? - Flugsimulator
 * K - Ein schnelles Segelboot mit zwei Rümpofen ist ein? - Katamaran
 * L - Welcher polnsiche Nationalstürmer wurde 2020 erstmal FEuropas Fußballer des JahreS? - Lewandowski
 * M - Wie heißt die kleinere und flachere Zitrusfrucht die der Orange ähnelt? - Mandarine
 * N - Eine Schräglage, aber auch die persönliche Vorliebe für Etwas nennt man ...? - Neigung
 * O - Welcher Begriff bezeichnet eine vorübergehende Bewusstlosigkeit oder Hilfslosigkeit? - Ohnmacht
 * Q - Die Überreste des Körpers eines Heiligen bezeichnet man als ... ? - Reliquie
 * R - Welcher Kräutertee wächst ausschließlich in der Region der Cederberge bei Kapstadt? - Rooibos
 * S - In welcher österreichischen Stadt wurde Wolfang Amadeus Mozart geboren? - Salzbrug
 * T - Wie nennt man ein Unterwassergsschoss mit eigenem Antrieb welches von unter anderem von Ubooten abgefuert wird? - Torpedo
 * U - Die staatliche Abgabe eines Unternehmens an den Staat nennt man? - Umsatzsteuer
 *
 */

/**
 * A -  -
 * B -  -
 * C -  -
 * D -  -
 * E -  -
 * F -  -
 * G -  -
 * H -  -
 * I -  -
 * J -  -
 * K -  -
 * L -  -
 * M -  -
 * N -  -
 * O -  -
 * P -  -
 * Q -  -
 * R -  -
 * S -  -
 * T -  -
 * U -  -
 * V -  -
 * W -  -
 * X -  -
 * Y -  -
 * Z - -
 */

/**
 * A -  -
 * B -  -
 * C -  -
 * D -  -
 * E -  -
 * F -  -
 * G -  -
 * H -  -
 * I -  -
 * J -  -
 * K -  -
 * L -  -
 * M -  -
 * N -  -
 * O -  -
 * P -  -
 * Q -  -
 * R -  -
 * S -  -
 * T -  -
 * U -  -
 * V -  -
 * W -  -
 * X -  -
 * Y -  -
 * Z -  -
 */
