import {Connection} from "./connection";

export class ConnectionSet {

  name: string = "";
  connections: Connection[] = [];

  static create(name: string, connections: Connection[]): ConnectionSet {
    let connectionSet = new ConnectionSet();
    connectionSet.name = name;
    connectionSet.connections = connections;
    return connectionSet;
  }

  static sets: ConnectionSet[] = [
    ConnectionSet.create("Musik Schlager-Stars", [
      new Connection("Ein Traumpaar bildeten jahrelang Schlager-Queen Helene Fischer und der heutige Traumschiffkapitän Florian ...?", "SILBE", "REISEN"),
      new Connection("Jürgen Drews bezeichnet sich selbst als König dieser beliebtesten Insel der Deutschen.", "MALLO", "RCA"),
      new Connection("Diesen \"Berg der Berge\" bestieg die Sängerin und Moderatorin Beatrice Egli im August 2021", "MATTE", "RHORN"),
      new Connection("Wie wird die deutsche Musiklegende aus Südafrika Howard Carpendale in Kurzform genannt?", "HOW", "WIE"),
      new Connection("So heißt das mehrtägige Festival, das Andrea Berg alljährlich in Großaspach veranstaltet.", "HEIMS", "PIEL"),
      new Connection("Seine schwarzen Haare waren nur eine Perücke und diese Fiesta wurde für Rex Gildo zum größten hit.", "MEX", "ICANA"),
      new Connection("Als Schlagersänger trug Udo Bockelmann diesen Nachnamen.", "JÜRG", "ENS"),
      new Connection("Vor seiner Umbenennung hieß der ESC \"Grand Prix Eurovision de la ...\"?", "CHANS", "ON"),
      new Connection("Bei der Nr. 1 aller europäischen Schlagerspektakel kann man beim Schlagermove in dieser Stadt feiern.", "HAMB", "URG"),
      new Connection("Der Hit \"Weine nicht kleine Eva\" geht auf's Konto dieser Schlagerband.", "FLI", "PPERS"),
    ]),
    ConnectionSet.create("USA", [
      new Connection("Er war der 1. Präsident der Vereinigten Staaten von Amerika.", "WASH", "INGTON"),
      new Connection("Der Distrikt, in dem die US-Hauptstadt Washington, D.C. liegt, ist namentlich welchem Amerika-Entdecker gewidmet?", "KOLU", "MBUS"),
      new Connection("Dieser Musiker weist auf dem Cover eines seiner berühmtesten Alben darauf hin, in den USA geboren zu sein.", "SPRINGS", "TEEN"),
      new Connection("Wer trat wegen der Watergate-Affäre als bisher einziger US-Präsident der Geschichte von seinem Amt zurück?", "NIX", "ON"),
      new Connection("Zu seinen durchtrainierten \"Baywatch\"-Zeiten sprintete David Hasselhoff am Strand dieser Stadt in die Fluten.", "MAL", "IBU"),
      new Connection("Dieser frühere Schauspieler forderte als Präsident dann Gorbatschow auf, die Berliner Mauer einzureißen.", "REA", "GAN"),
      new Connection("Vier ehemalige US-Präsidenten blicken mit steinerner Miene vom Mount ...?", "RUS", "HMORE"),
      new Connection("Die vielen Einwanderer aus Lateinamerika nennt man in den USA allgemein ...?", "HISP", "ANICS"),
      new Connection("Der 50. Bundesstaat der USA liegt rund 4000 Kilometer vom Festland entfernt und heißt ...?", "HAW", "AII"),
      new Connection("Dieser Amerikaner gründete 1955 ein eigenes Land innerhalb der USA - zum puren Vergnügen.", "DI", "SNEY"),
    ]),
    ConnectionSet.create("Russland", [
      new Connection("Russlands zweitgrößte Stadt Sankt Petersburg hieß 67 Jahre lang anders, nämlich ...?", "LENI", "NGRAD"),
      new Connection("Im Stadtzentrum dieser Metropole befindet sich der Kreml, der Amtssitz des russischen Präsidenten.", "MO", "SKAU"),
      new Connection("Welche britische Popband freute sich laut Songtitel darüber, endlich wieder daheim in der UdSSR zu sein?", "BEA", "TLES"),
      new Connection("Diese mit Kräutern gewürzte Sauce gehört zum Vorspeisenklassiker \"Russische Eier\"", "REMO", "ULADE"),
      new Connection("Mit dem bisher letzten Sieg 2014 holte Rekordweltmeister Russland in diesem beliebten Mannschaftssport den 26. Titel.", "EISH", "OCKEY"),
      new Connection("Wie nennt man den gesalzenen Rogen von Stör-Arten, die im Schwarzen oder Kaspischen Meer gefangen werden?", "KA", "VIAR"),
      new Connection("Unweit des Kremls landete 1987 auf Moskaus Rotem Platz der deutsche Sportpilot Rust. Wie heißt er mit Vornamen?", "MAT", "HIAS"),
      new Connection("Wer quer durch Russland reist, muss die Uhr elf Mal umstellen. Kaum ein anderes Land der Welt hat so viele ...?", "ZEI", "TZONEN"),
      new Connection("So lautet der russische Begriff für die Politik der Transparenz, die Michail Gorbatschow ab 1985 führte.", "GLA", "SNOST"),
      new Connection("Der heutige russische Präsident Putin hat in den 1980ern fünf Jahre lang in Deutschland gearbeitet, und zwar als ...?", "SPI", "ON"),
    ])
  ];

  constructor() {
  }
}
