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
