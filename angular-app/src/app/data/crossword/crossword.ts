export class Crossword {

  // 5x5
  public rows: string[] = [
    "TLSAE",
    "AODEB",
    "ABTDA",
    "GBUAL",
    "PTSAL",
  ];

  public category: string = "Zufälliges";

  public words: string[] = ["Total", "Last", "Ball"];
  public solvedWords: string[] = [];

  private static alreadyPlayed: Crossword[] = [];

  public static create(category: string, rows: string[], words: string[]) {
    let crossword = new Crossword();

    crossword.category = category;
    crossword.rows = rows;
    crossword.words = words;

    return crossword;
  }

  private static crosswords: Crossword[] = [
    Crossword.create("Ich spare auf ein ...", ["DAVHB", "RBOFK", "ENTZO", "FSUAH", "PUAHN"], ["Haus", "Auto", "Pferd"]),
    Crossword.create("Immer top gestylt.", ["KLIDA", "LARNQ", "MODEY", "URERK", "DLITS"], ["Stil", "Mode", "Trend"]),
    Crossword.create("Am Kiosk.", ["LOLLI", "OVFMS", "TDACI", "TBPKE", "OAWVY"], ["Lolli", "Eis", "Lotto"]),
    Crossword.create("Im Großraumwagen.", ["NETZG", "KRIMA", "OLSEN", "FUCLG", "FKHAY"], ["Netz", "Gang", "Tisch"]),
    Crossword.create("Saturday Nightlife.", ["BUDTY", "UNRIT", "LOIAR", "CMNPA", "KUKAP"], ["Club", "Drink", "Party"]),
    Crossword.create("Das tut gut bei einer langen Fahrt.", ["YHECX", "RASTN", "WLUQM", "UTAFJ", "IIPZL"], ["Rast", "Pause", "Halt"]),
    Crossword.create("Ein Sprung hoch hinaus.", ["LMBCV", "QAABP", "XTTDT", "WTSTB", "QEXVE"], ["Matte", "Stab", "Latte"]),
    Crossword.create("Alle Mann an Bord!", ["SETKI", "JEKHK", "IOGVI", "FEXEE", "TSAML"], ["Kiel", "Segel", "Mast"]),
    Crossword.create("Bekannte englische Kosenamen.", ["HONEY", "CQWBU", "SUGAR", "OTSBP", "NXTLD"], ["Honey", "Sugar", "Babe"]),
    Crossword.create("Im Schwimmbad.", ["DTYLY", "CHLOR", "BCQOV", "XQEPT", "ELLEW"], ["Chlor", "Welle", "Pool"]),
    Crossword.create("Hilfsmittel für Handwerker.", ["FEILE", "ICUGN", "AHNBU", "NAGEL", "ZTEYS"], ["Feile", "Nagel", "Zange"]),
    Crossword.create("Komm in den Schatten!", ["PRALC", "LIRBX", "ASUAH", "NQKUN", "EVCMK"], ["Haus", "Plane", "Baum"]),
    Crossword.create("Cowboy", ["PEHWC", "LASSO", "OSMXL", "VYIMT", "RINDF"], ["Lasso", "Rind", "Colt"]),
    Crossword.create("Passt zum Lachs.", ["AGSES", "DILLE", "ANNKN", "NOSAF", "CHGNK"], ["Dill", "Senf", "Honig"]),
    Crossword.create("Der Kaffee ist fertig.", ["LUNGO", "LATTE", "VFBTZ", "CQPDT", "AKKOM"], ["Latte", "Lungo", "Mokka"]),
    Crossword.create("In der Zeitschrift.", ["VSGZH", "LTQTY", "COMIC", "XRYWM", "TYKVB"], ["Comic", "Witz", "Story"]),
    Crossword.create("TV Serien", ["FIENM", "ANGXO", "REQUN", "GXJZK", "OGLEE"], ["Fargo", "Monk", "Glee"]),
    Crossword.create("Südamerikanische Städte", ["ESQUE", "ZAULW", "SRIOC", "UMTIU", "ATOXS"], ["Rio", "Quito", "Lima"]),
    Crossword.create("Dornröschen", ["CRYNK", "BOLMU", "LSGXS", "FEECS", "XBVKV"], ["Fee", "Kuss", "Rose"]),
    Crossword.create("Singvögel", ["DPABZ", "MEISE", "STARW", "EBJDE", "LFINK"], ["Meise", "Star", "Fink"]),
    Crossword.create("Grün und würzig.", ["BRAED", "OTSEP", "HCUAL", "UNKSG", "MINZE"], ["Minze", "Lauch", "Pesto"]),
    Crossword.create("Fische", ["AHMSS", "THCEH", "COPHC", "XHLAA", "SLQLL"], ["Aal", "Hecht", "Lachs"]),
    Crossword.create("Betriebe", ["FIRMA", "AWGVZ", "NEDAL", "CRVEO", "AKSTE"], ["Firma", "Werk", "Laden"]),
    Crossword.create("Bei den alten Griechen.", ["WNIBP", "ZEUSM", "QHELY", "ATFGL", "SAYDO"], ["Zeus", "Athen", "Olymp"]),
    Crossword.create("Häusle bauen.", ["DACHR", "STEIN", "JKIFD", "MAUER", "PHSTI"], ["Dach", "Stein", "Mauer"]),
    Crossword.create("Pure Emotionen", ["KBERW", "LIBWU", "EMEPT", "KMIFN", "EULAX"], ["Liebe", "Wut", "Ekel"]),
    Crossword.create("Heim-...", ["SAWEH", "PEMRS", "IMGUS", "EXFME", "LKINO"], ["Kino", "Spiel", "Weh"]),
    Crossword.create("Schmucker Stein", ["NTGJD", "IONAX", "BPFDA", "UAPEL", "RSCUZ"], ["Topas", "Jade", "Rubin"]),
    Crossword.create("Wohnzimmereinrichtung", ["EJYDA", "APLEF", "KIMNO", "BIMAS", "NBXZL"], ["Bild", "Lampe", "Sofa"]),
    Crossword.create("Schwing die Hufe", ["RINDZ", "FLNPK", "PFERD", "SRYHO", "SCHAF"], ["Rind", "Schaf", "Pferd"]),
    Crossword.create("Zum Trinken", ["MILCH", "TCOLA", "FCXKU", "ANMTE", "SAQLP"], ["Milch", "Cola", "Saft"]),
    Crossword.create("Quer durch Italien", ["FRMSG", "DLOZE", "TURIN", "ORMIU", "XFAIA"], ["Genua", "Turin", "Rom"]),
    Crossword.create("Fabelwesen", ["VGNOM", "PIFRG", "AEXEH", "GREIF", "QUNAM"], ["Gnom", "Greif", "Hexe"]),
    Crossword.create("Blasinstrumente", ["NUCAS", "RMKET", "OROUG", "HBBEK", "OASOQ"], ["Oboe", "Horn", "Tuba"]),
    Crossword.create("Auf der Alm", ["ZAUNW", "RCDWE", "IMGFI", "NVHPD", "DCHNE"], ["Zaun", "Weide", "Rind"]),
    Crossword.create("Deutschsprachige Sänger", ["ELGRF", "SASHA", "KQNJL", "CNBPC", "HEINO"], ["Sasha", "Heino", "Falco"]),
    Crossword.create("Schlangen", ["MLCGR", "ADLGE", "MOWKP", "BOACI", "AQHRV"], ["Viper", "Boa", "Mamba"]),
    Crossword.create("...-stein", ["BOUHD", "EKHJN", "RUACA", "NVFLS", "TZFEK"], ["Bern", "Sand", "Kalk"]),
    Crossword.create("Wo?", ["NZILD", "WEXWY", "AXBEI", "UQDEG", "FPTGN"], ["Bei", "Auf", "Neben"]),
    Crossword.create("Sportliche Leistungen", ["EVPEJ", "WTTLC", "FUOAP", "QFRUQ", "GRYFL"], ["Lauf", "Wurf", "Tor"]),
    Crossword.create("Fest mit Musik", ["FFVXB", "GEANA", "TTCML", "DEXJL", "PARTY"], ["Ball", "Party", "Fete"]),
    Crossword.create("Lebenswichtige Organe", ["QHERZ", "XAHEJ", "HUXBW", "YTWEZ", "NLDLY"], ["Herz", "Haut", "Leber"]),
    Crossword.create("...-geld", ["ZBJJU", "LAATF", "PREIS", "IMKGC", "PFPOK"], ["Bar", "Preis", "Kopf"]),
    Crossword.create("Ist gerne mal blau.", ["AEHTA", "UWLIX", "GJGNI", "EQZTE", "SNAEJ"], ["Tinte", "Jeans", "Auge"]),
    Crossword.create("Wintereinbruch", ["GJWTC", "SZKTK", "SMPAU", "AQLLB", "NTXGJ"], ["Nass", "Kalt", "Glatt"]),
    Crossword.create("...-film", ["SZNAT", "TPEEH", "UDIZR", "MJTEY", "MRBAL"], ["Tanz", "Stumm", "Spiel"]),
    Crossword.create("Wo?", ["NEBEN", "UJKPV", "LINKS", "WLTKM", "UNTEN"], ["Neben", "Links", "Unten"]),
    Crossword.create("Ziert den Schneemann", ["LIGNK", "AXQWO", "HUTYH", "CBPKL", "SFGHE"], ["Hut", "Kohle", "Schal"]),
    Crossword.create("...-spiel", ["YLLAB", "KWVHK", "ROSHU", "BRETT", "STBEH"], ["Ball", "Brett", "Wort"]),
    Crossword.create("Wird beim Sport gespannt", ["FPZKT", "FWTZL", "LGEWI", "BANDE", "GCZDS"], ["Band", "Seil", "Netz"]),
    Crossword.create("Bestandteile einer Hose", ["SZVUE", "ZTRNJ", "BHOQH", "WAGFE", "KNOPF"], ["Knopf", "Naht", "Stoff"]),
    Crossword.create("In die Haare schmieren", ["WACHS", "IQHMJ", "FARBE", "GELVI", "ZWTZB"], ["Wachs", "Farbe", "Gel"]),
    Crossword.create("Achtung Pollenflug", ["BJTQG", "IPVDR", "RKTGA", "KFYXS", "ERLEQ"], ["Birke", "Gras", "Erle"]),
    Crossword.create("Im griechischen Salat", ["OPGWG", "ATEFU", "QDQZR", "YZGLK", "OLIVE"], ["Olive", "Gurke", "Feta"]),
    Crossword.create("Gemütslagen", ["ZKCWE", "HORFR", "APSQN", "REUAS", "UFUOT"], ["Froh", "Ernst", "Sauer"]),
    Crossword.create("...-schuh", ["JFNRL", "QSPZA", "CUNQU", "YAKMF", "THSGR"], ["Lauf", "Tanz", "Haus"]),
    Crossword.create("Familie", ["QPWAK", "MAMAI", "VPCTN", "VATFD", "WCQXM"], ["Mama", "Kind", "Papa"]),
    Crossword.create("Grundrezept für Rührteig", ["HODGR", "CYDFE", "LEGLI", "IGFHE", "MEHLX"], ["Mehl", "Eier", "Milch"]),
    Crossword.create("Mutter Natur", ["FAUNA", "LERLM", "OWCQI", "RVYCL", "ASGEK"], ["Fauna", "Flora", "Klima"]),
    Crossword.create("Bremer Stadtmusikanten", ["KHUND", "WASFE", "AHTTF", "INDZY", "ESKUE"], ["Hund", "Hahn", "Katze"]),
    Crossword.create("...-fenster", ["FKTUK", "EDIPF", "ZAEPO", "SCZGP", "CHUGK"], ["Zeit", "Dach", "Kipp"]),
    Crossword.create("Eissorten", ["KMNNO", "WACUF", "UNGSI", "SGRSZ", "MOKKA"], ["Mokka", "Nuss", "Mango"]),
    Crossword.create("Verteidigung", ["TRITT", "VTQNZ", "HEBEL", "DRWJP", "KCOLB"], ["Hebel", "Tritt", "Block"]),
    Crossword.create("Farben von Mülltonnen", ["BODTN", "LQEKU", "ABKFA", "UEWZR", "UGELB"], ["Gelb", "Blau", "Braun"]),
    Crossword.create("Altes Testament", ["MOSES", "SVCPE", "PQXVP", "OCAEW", "DIVAD"], ["David", "Moses", "Eva"]),
    Crossword.create("...-kohl", ["CROTZ", "GHAGW", "ZTIPS", "LWSND", "BRTUA"], ["China", "Spitz", "Rot"]),
  ];

  static next() {

    let nextRandomIndex = 0;

    if (Crossword.alreadyPlayed.length < Crossword.crosswords.length) {
      do {
        nextRandomIndex = Math.floor(Math.random() * Crossword.crosswords.length);
      } while (Crossword.alreadyPlayed.includes(Crossword.crosswords[nextRandomIndex]))
    }

    Crossword.alreadyPlayed.push(Crossword.crosswords[nextRandomIndex]);
    return Crossword.crosswords[nextRandomIndex];
  }
}
