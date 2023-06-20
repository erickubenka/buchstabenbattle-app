import {CrucialHintComponent} from "../../admin/crucial-hint/crucial-hint.component";

export class CrucialHint {

  public name: string = "";
  public category: string = "";
  public imagePath: string = "";
  public hints: string[] = [];
  private static alreadyPlayed: CrucialHint[] = [];

  public static create(name: string, category: string, imagePath: string, hints: string[]) {
    let crucialHint = new CrucialHint();

    crucialHint.name = name;
    crucialHint.category = category;
    crucialHint.imagePath = imagePath;
    crucialHint.hints = hints;

    return crucialHint
  }

  private static crucialHints: CrucialHint[] = [
    // https://pixabay.com/de/photos/brandenburger-tor-statue-berlin-3601096/
    CrucialHint.create("Brandenburger Tor", "Sehenswürdigkeit", "/assets/images/crucial-hint/brandenburger-tor.jpg", ["Ich bin ein frühklassizistisches Triumphtor", "Ich wurde zwischen 1789 und 1793 auf Anweisung des preußisches Königs Friedrich Wilhelm II erbaut", "Die Straße \"Unter den Linden \" führt zu mir.", "An meiner Westflanke befindet sich der Pariser Platz in Berlin."]),
    // Leipzig Bildreferenz: https://pixabay.com/de/photos/leipzig-geb%C3%A4ude-sachsen-deutschland-6367607/
    CrucialHint.create("Leipzig", "Stadt", "/assets/images/crucial-hint/leipzig.jpg", ["Ich belegte 2021 den 8. Platz der Großstädte Deutschlands.", "Ich bin die einwohnerreichste Stadt Sachsens.", "Ich bin ein traditioneller Messestandort.", "Ich bin das Zuhause von Rasenballsport."]),
    // https://cdn.pixabay.com/photo/2021/05/28/19/24/river-6291833_1280.jpg
    CrucialHint.create("Schwarze Elster", "Fluss", "/assets/images/crucial-hint/schwarze-elster.jpg", ["Ich bin 179 Kilometer lang.", "Ich fließe durch Sachsen, Brandenburg und Sachsen-Anhalt.", "Ich münde in die Elbe.", "Es gibt mich auch in weiß."]),
    // https://cdn.pixabay.com/photo/2017/09/14/07/24/spreewald-2748202_1280.jpg
    CrucialHint.create("Spreewald", "Naturlandschaft", "/assets/images/crucial-hint/spreewald.jpg", ["Ich bin eine historische Kulturlandschaft in Brandenburg.", "Ich habe knapp 300 Kilometer klassifizierte Wasserstraßen.", "Ich bin ein Erholungs- und Urlaubsgebiet und bekannt durch Kahnfahrten und Kanu-Gruppen.", "Der Hauptfluss meiner Natur- und Moorlandschaft ist mein Namensgeber."]),
    // https://pixabay.com/de/photos/dresden-sachsen-architektur-3681378/
    // https://pixabay.com/de/photos/briefkasten-postbriefkasten-gelb-378092/
    CrucialHint.create("Dresden", "Stadt","/assets/images/crucial-hint/dresden.jpg", ["Ich bin eine der 500k Städte Deutschlands.", "Ich wurde 1206 das erste mal urkundlich erwähnt.", "Jährlich findet hier einer der ältesten Weihnachtsmärkte Deutschlands statt.", "Ich bin die Landeshauptstadt Sachsens."]),
    // https://pixabay.com/de/photos/k%C3%B6ln-k%C3%B6lner-dom-dom-deutschland-4933503/
    CrucialHint.create("Kölner Dom", "Sehenswürdigkeit", "/assets/images/crucial-hint/koelner-dom.jpg", ["Ich bin seit 1996 UNESCO-Weltkulturerbe.", "Ich bin eine der meistbesuchten Sehenswürdigkeiten Deutschlands.", "Ich bin im gotischen Baustil errichtet worden.", "Ich stehe in Köln."]),
    // https://pixabay.com/de/photos/jalousie-architektur-geb%C3%A4ude-museum-5767708/
    CrucialHint.create("Louvre", "Sehenswürdigkeit", "/assets/images/crucial-hint/louvre.jpg", ["Ich wurde 1793 eröffnet.", "Ich besitze über 380.000 Objekte von denen 35.000 ausgestellt sind.", "Ich bin das größte und meistbesuchte Kunstmuseum der Welt.", "Ich stehe in Paris am rechten Ufer der Seine."]),
    // https://pixabay.com/de/photos/br%C3%BCcke-hafen-von-sydney-sydney-965076/
    CrucialHint.create("Sydney", "Stadt", "/assets/images/crucial-hint/sydney.jpg", ["Ich wurde 1788 gegründet.", "Ich habe rund 4,7 Millionen Einwohner.", "Mein Opera House ist weltbekannt.", "Ich bin die größte Stadt Australiens."]),
    // https://pixabay.com/de/photos/big-ben-turm-london-england-stadt-7116305/
    CrucialHint.create("Big Ben", "Sehenswürdigkeit", "/assets/images/crucial-hint/big-ben.jpg", ["Meine Generalprobe fand im jahr 1857 statt.", "Ich bin ein Wahrzeichen Londons.", "Offiziell heiße ich Elizabeth Tower.", "Mein Name ist die Kurzform für \"Großer Benjamin\"."]),
    // https://pixabay.com/de/photos/dinosaurier-dinosaurierpark-modell-1310676/
    CrucialHint.create("Saurier Park Kleinwelka", "Sehenswürdigkeit", "/assets/images/crucial-hint/kleinwelka.jpg", ["Ich bin 16 hektar groß.", "1978 wurde mit der ersten Modellierung begonnen.", "Mich besuchen über 200.000 Gäste jährlich.", "Ich stelle über 200 lebensgroße Dinosaurier nach."]),
    // https://pixabay.com/de/photos/schloss-moritzburg-schlo%C3%9F-sachsen-1032792/
    CrucialHint.create("Schloss Moritzburg", "Sehenswürdigkeit", "/assets/images/crucial-hint/moritzburg.jpg", ["Früher war ich ein Jagdhaus.", "Heut bin ich ein barockes Schloss.", "Jährlich bin ich Austragungsort eines Triathlons.", "Ich bin Kulisse für Märchenfilme wie \"Drei Haselnüsse für Aschenbrödel\"."]),
    // https://pixabay.com/de/photos/schloss-neuschwanstein-deutschland-2243447/
    CrucialHint.create("Schloss Neuschwanstein", "Sehenswürdigkeit", "/assets/images/crucial-hint/schloss-neuschwanstein.jpg", ["Mein Grundstein wurde 1869 gelegt.", "Jährlich habe ich 1,5 Millionen Besucher.", "Ludwig II. lies mich als Ritterburg errichten.", "Ich stehe im südöstlichen bayrischem Allgäu."]),
    // https://pixabay.com/de/photos/brooklyn-br%C3%BCcke-h%C3%A4ngebr%C3%BCcke-br%C3%BCcke-105079/
    CrucialHint.create("New York", "Stadt", "/assets/images/crucial-hint/new-york.jpg", ["Ich habe rund 8,8 Millionen Einwohner.", "1524 fanden die ersten Entdeckungsreisen zu mir statt. 1624 wurde ich durch 30 niederländische Familien kolonisiert.", "2001 war ich Ziel eines großen Terroranschlags.", "Bei mir findet man die Freiheitsstatue und das Empire State Building."]),
    // https://pixabay.com/de/photos/frauenkirche-m%C3%BCnchen-kirche-t%C3%BCrme-4367702/
    CrucialHint.create("Frauenkirche München", "Sehenswürdigkeit", "/assets/images/crucial-hint/frauenkirche-muenchen.jpg", ["Ich wurde am 14. April 1494 geweiht.", "Ich bin eins der Wahrzeichen meiner Stadt.", "In meinem Nordturm befinden sich fernmeldetechnische Anlagen. Mein Südturm steht für Besucher offen.", "Ich stehe in der Landeshauptstadt Bayerns."]),
    // https://pixabay.com/de/photos/nebel-fluss-elbe-sonne-landschaft-1379906/
    CrucialHint.create("Elbe", "Fluss", "/assets/images/crucial-hint/elbe.jpg", ["Ich bin 1094 Kilometer lang.", "Ich liege an Platz 8 der längsten Flüsse Europas.", "Meine Quelle ist im Riesengebirge.", "Ich fließe unter anderem durch Dresden, Magdeburg und Hamburg."]),
    // https://pixabay.com/de/photos/cottbus-marktplatz-brandenburg-849745/
    CrucialHint.create("Cottbus", "Stadt", "/assets/images/crucial-hint/cottbus.jpg", ["Ich bin eine kreisfreie Universitätsstadt in Brandenburg.", "Ich habe knapp 100.000 Einwohner.", "Ich wurde 1156 das erste mal urkundlich erwähnt.", "Mein bekanntester Fußballverein spielt i, Stadion der Freundschaft und heißt FC Energie ..."]),
    // https://cdn.pixabay.com/photo/2021/06/19/18/08/prague-castle-6349140_1280.jpg
    CrucialHint.create("Prag", "Stadt", "/assets/images/crucial-hint/prag.jpg", ["Ich habe ü+ber 1,3 Millionen Einwohner.", "Durch mich fließt die Moldau.", "Meine Altstadt ist seit 1992 UNESCO Kulturerbe.", "Ich bin die Hauptstadt der Tschechischen Republik."]),
    // https://pixabay.com/de/photos/stonehenge-megalith-drau%C3%9Fen-gras-3186462/
    // https://pixabay.com/de/photos/tower-bridge-br%C3%BCcke-fluss-5727975/
    CrucialHint.create("Tower Bridge", "Sehenswürdigkeit", "/assets/images/crucial-hint/tower-bridge.jpg", ["Ich bin knapp 244 Meter lang.", "Meine Türme sind 65 Meter hoch.", "Ich wurde am 21. Juni 1886 erbaut.", "Ich stehe in London."]),
  ];

  static next() {

    let nextRandomIndex = 0;

    if (CrucialHint.alreadyPlayed.length < CrucialHint.crucialHints.length) {
      do {
        nextRandomIndex = Math.floor(Math.random() * CrucialHint.crucialHints.length);
      } while (CrucialHint.alreadyPlayed.includes(CrucialHint.crucialHints[nextRandomIndex]))
    }

    CrucialHint.alreadyPlayed.push(CrucialHint.crucialHints[nextRandomIndex]);
    return CrucialHint.crucialHints[nextRandomIndex];
  }
}
