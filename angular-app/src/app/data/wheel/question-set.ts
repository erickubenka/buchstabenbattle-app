import {Question} from "./question";

export class QuestionSet {

  questionList: Question[] = [];
  id: string = "Set 0";

  constructor() {
  }

  static create(id: string, questions: Question[]) {
    let list = new QuestionSet();
    list.questionList = questions;
    list.id = id;
    return list;
  }

  static sets: QuestionSet[] = [
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
    ])
  ];
}


//
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
 * A - Wie nennt man den würzigen Geruch der sich zum Beispiel bei Kaffee und Tee verbreitet?  - Aroma
 * C - Was für ein Tier ist der Titelheld im Animationsfilm Findet nemo? - Clownfisch
 * F - In welchem Gerät, welches alle Anforderungen erfüllt, können Piloten ihre Fähigkeiten üben?  - Flugsimulator
 * K - Ein schnelles Segelboot mit zwei Rümpofen ist ein? - Katamaran
 * L - Welcher polnsiche Nationalstürmer wurde 2020 erstmal FEuropas Fußballer des JahreS? - Lewandowski
 * M - Wie heißt die kleinere und flachere Zitrusfrucht die der Orange ähnelt? - Mandarine
 * N - Eine Schräglage, aber auch die persönliche Vorliebe für Etwas nennt man ...? - Neigung
 * O - Welcher Begriff bezeichnet eine vorübergehende Bewusstlosigkeit oder Hilfslosigkeit?  - Ohnmacht
 * Q - Die Überreste des Körpers eines Heiligen bezeichnet man als ... ? - Reliquie
 * R - Welcher Kräutertee wächst ausschließlich in der Region Der Cederberge bei Kapstadt?  - Rooibos
 * S - In welcher österreichischen Stadt wurde Wolfang Amadeus Mozart geboren? - Salzbrug
 * T - Wie nennt man ein Unterwassergsschoss mit eigenem Antrieb welches von unter anderem von Ubooten abgefuert wird? - Torpedo
 * U - Die staatliche Abgabe eines Unternehmens an den Staat nennt man? - Umsatzsteuer
 *
 */
