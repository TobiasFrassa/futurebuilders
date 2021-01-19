var offena = localStorage.getItem("offenheit-übergabe");
var gewissena = localStorage.getItem("gewissenhaftigkeit-übergabe");
var extraa = localStorage.getItem("extraversion-übergabe");
var vertraga = localStorage.getItem("verträglichkeit-übergabe");
var neuroa = localStorage.getItem("neurotizismus-übergabe");

var direkteinstiega = localStorage.getItem("direkteinstieg-übergabe");
var ausbildunga = localStorage.getItem("ausbildung-übergabe");
var studiuma = localStorage.getItem("studium-übergabe");
var selbstfindunga = localStorage.getItem("selbstfindungsphase-übergabe");
var businessa = localStorage.getItem("business-übergabe");


var direkteinstieg = parseInt(direkteinstiega);
var ausbildung = parseInt(ausbildunga);
var studium = parseInt(studiuma);
var selbstfindung = parseInt(selbstfindunga);
var business = parseInt(businessa);


var offen = parseInt(offena);
var gewissen = parseInt(gewissena);
var extra = parseInt(extraa);
var vertrag = parseInt(vertraga);
var neuro = parseInt(neuroa);


var ergebnis_persönlichkeit = [offen, gewissen, extra, vertrag, neuro];
var ergebnis_persönlichkeit_sortiert = ergebnis_persönlichkeit.sort();
var höchstwert = parseInt(ergebnis_persönlichkeit_sortiert[4]);
var zweiter_höchstwert = parseInt(ergebnis_persönlichkeit_sortiert[3]);
var niedrigster_höchstwert = parseInt(ergebnis_persönlichkeit_sortiert[0]);

var ergebnis_job = [direkteinstieg, ausbildung, studium, selbstfindung, business];
var ergebnis_job_sortiert = ergebnis_job.sort();
var höchstwert_job = parseInt(ergebnis_job_sortiert[4]);
var zweiter_höchstwert_job = parseInt(ergebnis_job_sortiert[3]);
var niedrigster_höchstwert_job = parseInt(ergebnis_job_sortiert[0]);



if (offen <= 6) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich unter den untersten 15%. Das bedeutet, dass du extrem konservativ bist. Du ziehst das bekannte dem neuen stark vor und bist zufrieden wie die Dinge sind. Mit Abenteurern kommst du überhaupt nicht klar und neue Dinge machen dir oft große Angst. Das hat den Vorteil, dass du dir nicht leicht den Kopf von irgendwelchen neuen Trends verdrehen lässt.Allerdings beschränkst du dich leider auch und du machst wahrscheinlich weniger Erfahrungen als die meisten anderen Menschen, was du am Ende deines Lebens bereuen könntest. Ein kleiner Tipp: Werde ein wenig aufgeschlossener, beschäftige dich eventuell mit dem einen oder anderen interessanten, ungewöhnlichen Thema und du kannst ganz neue Eigenschaften an dir entdecken."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen <= 12 && offen > 6) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich unter den untersten 30%.Das bedeutet, dass du sehr konservativ bist und gerne an alten Werten und Traditionen festhältst. Das hat Vorteile, denn du schätzt die Werte durch die unsere Gesellschaft groß geworden ist. Allerdings verpasst du auch wahrscheinlich Innovationen und viele Erfahrungen. Wenn du dich ein wenig mehr öffnest, dann könnte dir das sehr gut tun, auch wenn das am Anfang vielleicht noch seltsam scheint und du Angst hast. Nur wenn wir uns neuen Ideen öffnen, dann können wir auch wachsen und etwas lernen."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen <= 18 && offen > 12) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich leicht unter dem Mittelwert bei 30-45%. Das ist grundsätzlich weder schlecht noch gut. Es bedeutet, dass du gemäßigt und leicht konservativ bist. Extreme politische Einstellungen sind für dich nicht wirklich interessant und neuen Dingen begegnest du zunächst einmal mit einer gesunden Skepsis.Findest du allerdings einen neuen Trend oder etwas, das dich voran bringt, dann scheust du nicht davor zurück das auch auszuprobieren."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen <= 24 && offen > 18) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich leicht über dem Mittelwert bei 45-60%. Das bedeutet du bist in etwa genau so offen wie die meisten anderen Menschen oder eventuell noch einen Tick offener. Du bist kreativ und scheust nicht davor zurück neue Dinge auszuprobieren. Allerdings ist es noch nicht so stark ausgeprägt, dass du anecken würdest, weil du innovativer bist als alle anderen. Du kannst dein gesundes Mittelmaß in diesem Punkt deiner Persönlichkeit sehr schätzen, denn du wirst kaum verrückte Dinge ausprobieren, die dich in Schwierigkeiten bringen. Allerdings wird dich auch niemand so schnell abhängen, da du neuen Dingen gegenüber relativ aufgeschlossen bist."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen <= 30 && offen > 24) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich über dem Mittelwert bei 60-75%. Das bedeutet du gehörst zu den offenen Menschen und hast weniger Vorurteile als viele andere Menschen. Generell hörst du dir gerne neue Ideen an und machst dir auch selbst Gedanken darüber wie die Dinge besser sein könnten. Du besitzt das Gen des Innovators und doch driftest du noch nicht in irgendwelche Sphären ab, weil du in deiner Offenheit gegenüber neuen Erfahrungen die nötige „Mäßigung“ besitzt."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen <= 36 && offen > 30) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich stark über dem Mittelwert bei 75-90%. Das ist ein Zeichen dafür, dass du wirklich extrem aufgeschlossen bist. Mit sehr konservativen Menschen fällt es dir schwer umzugehen und die scheinen auch irgendwie langweilig zu sein. Du suchst aktiv das Abenteuer und machst viele ungewöhnliche Dinge. Dazu besitzt du eine extrem hohe Kreativität und ein natürliches Künstlergen. Aufgrund dessen schätzen dich andere Menschen sehr und nehmen dich oft als etwas besonderes wahr."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
} else if (offen > 36) {
  const elem = document.createElement("div");
  const elemText = document.createTextNode(
    "Auf der Skala der Offenheit gegenüber neuen Erfahrungen befindest du dich unter den offensten Menschen, die es nur gibt. Du liegst Meilenweit über dem Mittelwert bei 90-100%. Du bist wahnsinnig offen und aufgeschlossen. Fremde Kulturen, neue Ideen oder ungewöhnliche Hobbies sind dein Steckenpferd und dafür bist du in deinem Umfeld auch bekannt und wirst dafür geschätzt. Andere Menschen bezeichnen dich oft als mutig und du bist der klassische Künstler/ Unternehmer, da du einfach zu kreativ bist, um in einem klassischen Job in diesem System zu überleben. Dort würdest du leider eingehen. Von daher solltest du dir zwar ein solides Standbein aufbauen, aber dennoch in deiner Freizeit deinen Interessen nachgehen und ein zweites Standbein aufbauen, damit du dem nachgehen und glücklich werden kannst, denn der klassische 9-5 Lifestyle ist absolut nicht das, was dich glücklich macht. Pass aber auf, dass deine hohe Offenheit nicht zu Leichtsinn wird, denn dann wäre diese gute Eigenschaft sehr kontraproduktiv."
  );
  elem.appendChild(elemText);
  document.body.appendChild(elem);
}

const br1 = document.createElement("br");
document.body.appendChild(br1);
const br2 = document.createElement("br");
document.body.appendChild(br2);

if (gewissen <= 6) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich unter den untersten 15%. Das bedeutet, dass du nicht wirklich zuverlässig bist und es für andere schwer sein kann mit dir umzugehen. Du allerdings fühlst dich frei und interessierst dich nicht für irgendwelche langweiligen und kleinlichen Dinge wie aufzuräumen oder Ordnung. Allerdings solltest du aufpassen, dass du andere Menschen dadurch nicht zu sehr verärgerst und vor allem nicht die falschen Menschen. Denn wenn man auf der Arbeit zu unzuverlässig ist, dann verliert man leicht seinen Job beziehungsweise wäre der ideale Job für dich einer, der nicht zu viel Zuverlässigkeit erfordert. Auf deine Partnerschaft bezogen solltest du dir unbedingt einen Partner suchen, der das Leben genauso entspannt angeht wie du, weil sonst keine Beziehung halten wird. Um mit normalen Menschen auszukommen solltest du eventuell lernen deine Disziplin und Gewissenhaftigkeit ein wenig zu erhöhen."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen <= 12 && gewissen > 6) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich unter den untersten 15-30%. Du besitzt zwar ein gewisses Pflichtgefühl, allerdings ist es nicht wirklich stark ausgeprägt. Das führt dazu, dass du meistens einfach das machst, was du möchtest. Für dich kann das zwar schön sein, weil du dich frei fühlst, aber wenn du ehrlich bist, dann besitzt du keinerlei Disziplin und ziehst nichts durch, was dazu führen kann, dass du irgendwann deprimiert wirst und dich selbst als Versager siehst. Um das zu vermeiden wäre es sinnvoll deine Gewissenhaftigkeit einfach ein klein wenig zu erhöhen, sodass du ein wenig mehr schaffst und glücklicher wirst."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen <= 18 && gewissen > 12) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich mit 30-45% leicht unter dem Mittelwert. Du besitzt also ein normales, aber etwas weniger stark ausgeprägtes Pflichtgefühl. Dadurch gehst du das Leben ziemlich locker an und du schaffst dir viele Freiheiten. Dazu ist deine Gewissenhaftigkeit allerdings noch so stark ausgeprägt, dass andere Menschen sich zu einem gewissen Grad auf dich verlassen können und du auch Dinge durchziehen kannst wenn du möchtest. Sofern du zuverlässige Menschen schätzt und du finanziellen Erfolg im Leben anstrebst, empfiehlt es sich deine Gewissenhaftigkeit noch etwas zu erhöhen. Ansonsten kannst du einfach dein Leben genießen und frei sein, denn es ist nicht das Wichtigste auf der Welt immer ganz genau zu sein."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen <= 24 && gewissen > 18) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich mit 45-60% ziemlich genau in der Mitte. Sprich du bist im Endeffekt genauso gewissenhaft wie die meisten anderen Menschen. Du bist weder besonders ordentlich noch unordentlich und auch deine Disziplin ist durchschnittlichlich. Von daher wirst du mit den meisten anderen Menschen keine Probleme haben, weil du zu unverlässig oder zu genau bist."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen <= 30 && gewissen > 24) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich mit 60-75% deutlich über dem Mittelwert. Du bist wirklich zuverlässig und verfügst auch über die nötige Disziplin, wenn es darum geht Dinge anzupacken und zu beenden. Das hat den Vorteil, dass andere sich auf dich verlassen können und du so einen „guten“ Ruf in deinem Umfeld erwirbst. Außerdem weißt du, dass du dich bei wichtigen Dingen auf dich selbst verlassen kannst und das kann dir ein gutes Selbstvertrauen geben."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen <= 36 && gewissen > 30) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich mit 75-90% extrem stark über dem Mittelwert. Du bist wahnsinnig zuverlässig, ordentlich und diszipliniert. Generell ist dein Leben ordentlich und du hast es im „Griff“. Egal ob in der Schule oder später im Berufsleben hebst du dich durch deine Genauigkeit und Disziplin ab, die zu guten Leistungen führen."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
} else if (gewissen > 36) {
  const aelem1 = document.createElement("div");
  const aelem1Text = document.createTextNode(
    "Auf der Skala der Gewissenhaftigkeit befindest du dich mit 90-100% unter den gewissenhaftesten Menschen der Welt. Das hat gewisse Vorteile wie, dass du besser mit Geld umgehen kannst als die meisten anderen und du von anderen für deine Errungenschaften respektiert wirst, weil du den nötigen Biss hast, um bis zum Ende dranzubleiben und du nie zu früh aufgibst. Allerdings ist es für dich wichtig, dass du auch mal an dich selbst und deine eigenen Interessen denkst und vor allem lernst zu entspannen. Wenn Ordentlichkeit und Disziplin zu stark ausgeprägt sind, dann kann das das Abschalten erschweren und den Spaßfaktor limitieren. Allerdings ist es leichter weniger gewissenhaft zu sein, als Disziplin und Ordnung zu erlernen. Von daher herzlichen Glückwunsch, du bist mit allen Eigenschaften gesegnet, die es benötigt, um Erfolg im Leben zu haben - was auch immer das für dich bedeutet."
  );
  aelem1.appendChild(aelem1Text);
  document.body.appendChild(aelem1);
}

const br3 = document.createElement("br");
document.body.appendChild(br3);
const br4 = document.createElement("br");
document.body.appendChild(br4);

if (extra <= 6) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich unter den untersten 15%. Das bedeutet, dass du es absolut nicht leiden kannst unter Menschen zu sein und du dich dabei nicht wohl fühlst. Parties sind für dich uninteressant und du liest viel lieber ein Buch oder schaust einen Film. Wenn du es schaffst diese freie Zeit in etwas zu investieren, was du wirklich liebst, dann kannst du großes im Leben erreichen. Viele der „erfolgreichsten“ Menschen der Welt waren einmal so introvertiert wie du - Bill Gates, Elon Musk - und selbst Michael Jordan schaute lieber Filme und trank 7 up anstatt feiern zu gehen. Allerdings empfiehlt es sich gewisse soziale Fähigkeiten zu erlernen und zu verbessern, weil die meisten Menschen zumindest einen gewissen Teil ihres Lebens mit anderen verbringen müssen und dieser Aspekt deines Lebens so leichter wird."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra <= 12 && extra > 6) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich unter den untersten 15-30%. Das bedeutet im Endeffekt, dass du zwar mit Menschen umgehen kannst, es dir aber wahrscheinlich viel Energie zieht. Dir ist es unbedingt zu empfehlen einer Tätigkeit nachzugehen, die du auch völlig alleine ausführen kannst wie beispielsweise etwas technisches, da du dich so am wohlsten fühlst. Außerdem ist es immer gut sich einen gewissen Freundeskreis aufzubauen und zu erhalten, auch wenn du eventuell lieber alleine wärst. Allerdings gibt es viele Menschen, die so sind wie du und mit Sicherheit verstehst du dich mit ihnen besser als mit dem „Mainstream“. "
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra <= 18 && extra > 12) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich leicht unter dem Mittelwert mit 30-45%. Du ziehst es wahrscheinlich vor alleine zu sein, aber es macht dir auch nichts aus in Gruppen zu sein und du kannst diese Ereignisse teilweise auch wirklich genießen. Von daher solltest du sie nicht ganz meiden und nur alleine sein, sondern soziale Ereignisse suchen - nur halt einfach nicht so oft wie andere. Wenn du offen mit deinen Freunden und Bekannten sprichst, dass du gerne alleine bist, dann verstehen sie das und du kannst das für dich optimale Leben führen. Beruflich liegt es an dir, ob du etwas technischem nachgehst wo du nicht so viel Zeit mit anderen verbringen musst oder ob du deine sozialen Fähigkeiten verbesserst, um einer Beschäftigung nachzugehen, bei der du viel Zeit mit anderen Menschen verbringst."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra <= 24 && extra > 18) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich mit 45-60% ziemlich genau bei dem Mittelwert. Sprich du bist im Endeffekt genauso extrovertiert wie die meisten anderen Menschen auch. Du hast in sozialen Situationen zwar nicht das Selbstvertrauen eines James Bond, allerdings ist er ja auch nur eine Filmfigur. Dafür bist du auch nicht vollkommen schüchtern und ängstlich. Manchmal denken wir, dass wir unsozial sind und andere das viel besser können als wir, aber im Endeffekt entsprechen deine sozialen Fähigkeiten genau dem Durchschnitt, weshalb du keine allzu großen Probleme mit sozialen Situationen haben solltest."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra <= 30 && extra > 24) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich deutlich über dem Mittelwert mit 60-75%. Du magst soziale Situationen und genießt sie voll und ganz. Wenn die richtigen Menschen um dich herum sind, dann gibt dir das Energie und du weißt selbst bereits, dass Hobbies, die man mit anderen gemeinsam machen kann besser für dich geeignet sind als solche, die man nur alleine ausführen kann. Beruflich empfiehlt sich dir einer Tätigkeit nachzugehen, die dir den Kontakt mit Menschen ermöglicht, da du so am glücklichsten bist."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra <= 36 && extra > 30) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich mit 75-90% extrem stark über dem Mittelwert. Sprich: Du läufst in sozialen Situationen regelrecht zur Höchstform auf. Gibt es eine coole Party, dann freust du dich schon darauf und es fällt dir wirklich einfach dort mit anderen ins Gespräch zu kommen. Außerdem bist du öfters auch mal dafür verantwortlich die „Stimmung zu machen“ und andere genießen deine Gegenwart. Nutze diese Eigenschaft und suche dir etwas, das dir den Kontakt mit Menschen ermöglicht, denn diese Eigenschaft ist wirklich wahnsinnig gefragt. Ein kleiner Tipp am Rande: Desto extrovertierter wir sind, desto schwerer fällt es uns anderen zuzuhören, weil wir so gerne sprechen. Achten wir einmal bewusst darauf anderen noch mehr zuzuhören, dann wirken wir nicht nur positiv auf andere, sondern auch direkt sympathisch."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
} else if (extra > 36) {
  const elem2 = document.createElement("div");
  const elem2Text = document.createTextNode(
    "Auf der Skala der Extraversion befindest du dich unter den extrovertiertesten Menschen die es gibt. Für sie wird ab und an auch mal der Begriff „Rampensau“ verwendet, was nichts schlechtes ist, sondern im Gegenteil. Wenn es keine Rampensäue gäbe, dann gäbe es keine Schauspieler, Musiker, Entertainer oder Influencer. Du liebst es im Scheinwerferlicht zu stehen und läufst dann zur Bestform auf, wenn ganz viele Augen auf dich gerichtet sind. Da diese Eigenschaft nicht viele besitzen, solltest du darüber nachdenken einer Tätigkeit nachzugehen in der du voll und ganz im Rampenlicht stehst, da du so die Aufmerksamkeit erhältst, die du über alles liebst und glücklich werden kannst. Außerdem ist die Eigenschaft im Rampenlicht zu stehen und von vielen anderen bewundert zu werden auch ziemlich gut bezahlt wie wir alle wissen."
  );
  elem2.appendChild(elem2Text);
  document.body.appendChild(elem2);
}

const br5 = document.createElement("br");
document.body.appendChild(br5);
const br6 = document.createElement("br");
document.body.appendChild(br6);

if (vertrag <= 6) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich unter den untersten 15%. Sprich: das Zusammenleben mit anderen ist für dich von Konflikten und Streitereien geprägt. Aus gesellschaftlicher Sicht ist das schlecht und wahrscheinlich sagen dir viele andere Menschen immer wieder, dass du Dinge falsch machst, du dich nicht so haben sollst und so weiter. Allerdings ging es Steve Jobs, Thomas Edison und Elon Musk genauso. Du denkst einfach komplett anders als die meisten und verspürst wahrscheinlich auch eine große Abneigung gegen den Status quo. Herzlichen Glückwunsch, nur dank Menschen wie dir haben wir heute das elektrische Licht oder Smartphones. Wird es dir allerdings einmal zu bunt und die ewigen Streitereien gehen dir auf die Nerven, dann lies doch einfach mal ein Buch über zwischenmenschliche Kommunikation, denn durch einige wenige Tricks können wir relativ einfach unserem Gegenüber die Luft aus den Segeln nehmen."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag <= 12 && vertrag > 6) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich unter den untersten 15-30%. Sprich: Ein Job als Beamter ist nicht unbedingt dein Ding - obwohl viele Beamte wahrscheinlich eine ähnliche Ausprägung in der Dimension der Verträglichkeit haben wie du - sie sind dann allerdings nicht glücklich. Vielmehr solltest du dich daran orientieren mit anderen innovativen Menschen zu „connecten“ und du wirst schnell merken, dass deine geringe Verträglichkeit und die vielen Konflikte in deinem Leben daher rühren, dass du nicht unbedingt das ideale Umfeld hast und daher ständig aneckst. Vielen Menschen ging es so und nachdem sie sich mit Gleichgesinnten zusammengetan haben, wurde es besser, weil sie nun endlich verstanden wurden. Deine Aufgabe ist es also das zu finden, was du liebst und andere Menschen zu finden, die das ebenfalls lieben, denn du kannst dich nur schwer in ein System zwängen, das nicht für dich gemacht ist. Die Konflikte werden dann zwar nicht zwangsläufig verschwinden, aber sie werden weniger."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag <= 18 && vertrag > 12) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich leicht unter dem Mittelwert bei 30-45%. Sprich du bist etwas weniger verträglich als die meisten anderen Menschen. Das ist grundsätzlich erstmal kein Problem, allerdings kann es sein, dass dich die ewigen Konflikte irgendwann nerven und dann ist es Zeit entweder eine Tätigkeit zu suchen bei der du alleine agieren kannst, Gleichgesinnte findest oder deine sozialen Fähigkeiten zu verbessern. Was genau du davon wählst ist dir überlassen. Allerdings ist es ganz wichtig zu wissen, dass wir Menschen nicht immer everybodies Darling sein müssen und Konflikte und Auseinandersetzungen einfach zum Leben dazu gehören. Die Menschen, die Konflikten immer aus dem Weg gehen sind oft sogar unglücklicher als solche, die sie aktiv suchen."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag <= 24 && vertrag > 18) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich in etwa bei dem Mittelwert oder etwas darüber mit 45-60%. Sprich die Ausprägung der psychologischen Dimension der Verträglichkeit ist bei dir in etwa so stark wie bei den meisten anderen Menschen. Du kuscht zwar nicht vor einem Konflikt, bist jedoch auch kein klassischer Streithammel. Von daher hat diese Dimension jetzt nicht unbedingt den größten Einfluss auf deine Zukunft und deine mögliche Berufswahl. Vielmehr bist du mit einem guten Mittelmaß gesegnet, das neutral gesehen hier die ideale Mischung ist, da du dich weder mit den Problemen einer zu hohen Ausprägung an Verträglichkeit (wie dem Problem nicht nein sagen zu können) noch mit den Problemen einer zu geringen Ausprägung(wie permanenten Konflikten) beschäftigen musst."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag <= 30 && vertrag > 24) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich deutlich über dem Mittelwert mit 60-75%. Daher bist du eine angenehme Person und deine zwischenmenschlichen Beziehungen laufen im Vergleich zu anderen Personen deutlich harmonischer ab. Auf andere Menschen wirkst du direkt sympathisch, weil sie unbewusst spüren, dass du ihnen auch bei einem Konflikt nicht in den Rücken fallen wirst, sondern weil man mit dir immer eine gute Lösung findet. Dadurch bist du sozial beliebt."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag <= 36 && vertrag > 30) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit befindest du dich extrem stark über dem Mittelwert mit 75-90%. Du bist also extrem umgänglich und es fällt dir daher auch leicht andere Menschen um den Finger zu wickeln, wenn du das möchtest. Tätigkeiten, die mit Menschen zu tun haben liegen dir besonders gut, da du die Eigenschaft des Mediators besitzt und auch in Konfliktsituationen respektvoll bleibst. Für dich ist es wichtig aufzupassen, dass du selbst bei deiner hohen Verträglichkeit nicht auf der Strecke bleibst, denn Menschen mit einer derart hohen Ausprägung in dieser Dimension ihrer Persönlichkeit tendieren oft dazu für alle ein Ohr zu haben außer für sich selbst. Genehmige dir also eine gewisse Zeit für dich selbst und scheue dich auch nicht Nein zu sagen, wenn du etwas nicht möchtest."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
} else if (vertrag > 36) {
  const elem3 = document.createElement("div");
  const elem3Text = document.createTextNode(
    "Auf der Skala der Verträglichkeit zählst du mit 90-100% zu den verträglichsten Personen, die es überhaupt gibt. Sprich: Konflikte sind bei dir Mangelware und Konflikte, die aus dem Ruder laufen gibt es bei dir persönlich nie. Du findest immer eine Lösung, da du das Mediatorgen sehr stark ausgeprägt besitzt. Außerdem hast du eine extrem starke Tendenz den „schwächeren“ Menschen helfen zu wollen, was dir einen sehr noblen Charakter verleiht. Sozial bist du sehr beliebt und du solltest unbedingt etwas tun, wo du im Kontakt mit Menschen bist und deine Fähigkeit als Mediator optimal nutzen kannst, um dein volles Potenzial zu entfalten. Pass aber unbedingt auf, dass du auch auf deine eigenen Bedürfnisse achtest und du dich nicht zu sehr für andere Menschen aufopferst. Vielen derart verträglichen Menschen wie dir hilft es sehr sich einen Tag pro Woche oder ein bis zwei Stunden pro Tag wirklich nur um sich selbst zu kümmern und an nichts anders zu denken, denn sonst kann es passieren, dass du an deiner Aufopferungsbereitschaft zerbrichst und damit ist niemandem geholfen. Vor allem nicht dir."
  );
  elem3.appendChild(elem3Text);
  document.body.appendChild(elem3);
}

const br7 = document.createElement("br");
document.body.appendChild(br7);
const br8 = document.createElement("br");
document.body.appendChild(br8);

if (neuro <= 6) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich unter den untersten 15%. Sprich du bist emotional extrem stabil und wahnsinnig belastbar. Niederlagen und Fehler kannst du schnell abhaken und negative Emotionen werfen dich nie aus der Bahn. Hier kann man dir wirklich nur gratulieren, denn diese Ausprägung hat so gut wie niemand und du bist wirklich gesegnet. Während andere Menschen sich den Kopf darüber zerbrechen, was sie falsch gemacht haben in der Vergangenheit oder sich vor der Zukunft fürchten, lebst du in der Gegenwart. Menschen brauchen solche Stützen und du kannst später einmal eine Säule der Gesellschaft werden, wenn es das ist, was du möchtest, denn auch wenn alle anderen Panik bekommen bleibst du gelassen und kannst noch mit einem klaren Kopf handeln, was dich zu einem sehr guten Anführer macht."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro <= 12 && neuro > 6) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich unter den untersten 15-30%. Herzlichen Glückwunsch, das ist eine sehr gute Nachricht. Du bist im Vergleich zu anderen überhaupt nicht anfällig für emotionale Probleme, Depressionen oder Abhängigkeiten. Außerdem besitzt du einen extrem starken Geist, denn du lässt dich nicht leicht unterkriegen. Beruflich bist du daher für Führungspositionen bestimmt, weil Menschen, die deine Sicherheit und Stärke besitzen andere gut führen können. Du behältst einen kühlen Kopf, während andere Panik haben und sie werden sich daher an dich wenden. Außerdem kannst du auch ruhig Jobs nachgehen, die sehr belastbar sind, weil du eben auch belastbar bist."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro <= 18 && neuro > 12) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich etwas unter dem Mittelwert mit 30-45%. Das bedeutet, dass du im Vergleich zu anderen Menschen emotional stabiler und belastbarer bist. Viele Arbeitgeber sehen solche Eigenschaften gerne bei ihren Angestellten aber vor allem dienen sie dir, weil dein Leben einfacher wird als das von neurotischen Personen. Während andere durchdrehen behältst du eher einen kühlen Kopf, was dich auszeichnet und vor allem dir dienen wird. Denn Probleme wie Abhängigkeiten, eine „Verlierer-Mentalität“ oder Selbstmitleid liegen dir einfach nicht und daher wirst du von Natur aus glücklicher sein als die meisten anderen."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro <= 24 && neuro > 18) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich etwa bei dem Mittelwert mit 45-60%. Das bedeutet, dass du im Endeffekt in der Persönlichkeitsdimension des Neurotizismus eine genau so starke Ausprägung hast wie die meisten anderen Menschen. Du bist weder besonders empfindlich für negative Emotionen, Rückschläge und ähnliches noch bist du der belastbarste Typ der Welt. Im Endeffekt ist es gut für dich, dass du hier einfach keine allzu hohe Ausprägung hast und mehr gibt es dazu auch nicht zu sagen."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro <= 30 && neuro > 24) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich mit 60-75% über dem Mittelwert. Sprich du bist etwas anfälliger als die meisten anderen Menschen für negative Emotionen und es ist auch schwerer für dich mit Rückschlägen umzugehen. Das ist grundsätzlich erst einmal kein Problem, allerdings solltest du dich darum kümmern die Ausprägung dieser Persönlichkeitseigenschaft bei dir zu reduzieren, sofern du einen Job anstrebst bei dem man extrem belastbar sein muss, denn ansonsten wird es etwas schwer in diesem Job durchzuhalten und Top Leistungen zu erbringen. Die Grundempfehlung an dich lautet dir keinen Top-performance Job zu suchen, wenn du glücklich werden willst. Wenn du allerdings dennoch unbedingt einen Top Job haben willst oder du sehr erfolgreich werden willst, dann ist das natürlich auch möglich, allerdings kann es sein, dass du dann externe Hilfsmittel benötigst, um mit dem Druck umzugehen."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro <= 36 && neuro > 30) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich mit 75-90% extrem stark über dem Mittelwert. Das ist hier ist erstmal eine relativ schlechte Nachricht, denn du bist wirklich sehr anfällig für negative Emotionen und Abhängigkeiten. Depressionen und Drogenmissbrauch stellen bei dir eine wirklich große Gefahr dar, wenn ein Schicksalsschlag kommt und du nicht darauf vorbereitet bist. Hier eine wichtige Empfehlung: Techniken, um den Geist zu kontrollieren und zu beruhigen wie Meditation sind hier extrem wichtig, damit du auch mit Rückschlägen gut umgehen kannst. Beruflich empfiehlt es sich hier für dich einen Job mit mittelmäßigen Anforderungen anzustreben, der dich fordert aber nicht überfordert. Hoffentlich war diese Nachricht für dich in Ordnung. Natürlich kann es auch bei einem Test gewisse Fehlergebnisse geben. Bei der Erstellung war es uns allerdings wichtiger ehrlich zu antworten, als etwas zu beschönigen. Wenn du wirklich erfolgreich werden willst im Leben dann hier eine klare Empfehlung: Mach etwas eigenes oder suche dir ganz bewusst ein gutes Arbeitsumfeld, denn es ist für dich nicht das richtige dauernd Kritik von einem Chef zu bekommen."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
} else if (neuro > 36) {
  const elem4 = document.createElement("div");
  const elem4Text = document.createTextNode(
    "Auf der Skala des Neurotizismus befindest du dich leider unter den 10% mit der stärksten Ausprägung bei 90-100%. Das ist leider eine wirklich schlechte Nachricht, denn Menschen mit einer derart starken Ausprägung der Persönlichkeitsdimension des Neurotizismus lassen sich schnell aus der Bahn werfen und fühlen sich selbst oft wie ein Spielball des Lebens. Willst du das ändern, dann musst du unbedingt anfangen dich mit dir selbst zu beschäftigen und Techniken zur Entspannung wie beispielsweise Meditation erlernen. Außerdem empfiehlt es sich hier regelmäßig Sport zu machen, damit du dein inneres Gleichgewicht so gut wie möglich wahren kannst. Dennoch ist es kein Grund den Kopf in den Sand zu stecken, denn immerhin geht es ja 10% der Menschen so wie dir. Passt du gut auf dich und deinen Körper so wie deine geistige Gesundheit auf, dann wirst auch du ein schönes Leben haben und jeder hat eben gewisse Stärken oder „Herausforderungen“ von Natur aus mitgegeben bekommen. Wenn du wirklich erfolgreich werden willst im Leben dann hier eine klare Empfehlung: Mach etwas eigenes oder suche dir ganz bewusst ein gutes Arbeitsumfeld, denn es ist für dich nicht das richtige dauernd Kritik von einem Chef zu bekommen."
  );
  elem4.appendChild(elem4Text);
  document.body.appendChild(elem4);
}

const br9 = document.createElement("br");
document.body.appendChild(br9);
const br10 = document.createElement("br");
document.body.appendChild(br10);


const elemi4 = document.createElement("div");
const elemi4Text = document.createTextNode("Deine Jobempfehlung lautet daher:");
elemi4.appendChild(elemi4Text);
document.body.appendChild(elemi4);

const br11 = document.createElement("br");
document.body.appendChild(br11);
const br12 = document.createElement("br");
document.body.appendChild(br12);


if(höchstwert == offen){
  console.log("offen");
  if(zweiter_höchstwert == gewissen){
    console.log("gewissen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Vertriebler");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Chemielaborant");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: International Business Studies");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Reise für eine gewisse Zeit alleine ins Ausland");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Du bist extrem kreativ. Daher bekommst du kein Geschäftsmodell empfohlen. Stelle dir einfach mal die Frage wofür du Geld zahlst, wofür andere Menschen eventuell Geld zahlen würden und was du davon anbieten kannst sowie wie du es bekannt machst. Willst du doch eine Empfehlung haben, dann bringe dir IT Skills selber bei und verkaufe diese als Dienstleistung oder beginne ein eigenes Projekt wie eine Website, etc. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == extra){
    console.log("extra");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Chemielaborant");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: International Business Studies");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Reise alleine ins Ausland");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Du bist extrem kreativ. Daher bekommst du kein Geschäftsmodell empfohlen. Stelle dir einfach mal die Frage wofür du Geld zahlst, wofür andere Menschen eventuell Geld zahlen würden und was du davon anbieten kannst sowie wie du es bekannt machst. Willst du doch eine Empfehlung haben, dann teste den Vertrieb als Einstieg. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == vertrag){
    console.log("vertrag");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung: Gestalter für visuelles Marketing");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: International Business Studies");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Reisen alleine ins Ausland");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Du bist extrem kreativ. Daher bekommst du kein Geschäftsmodell empfohlen. Stelle dir einfach mal die Frage wofür du Geld zahlst, wofür andere Menschen eventuell Geld zahlen würden und was du davon anbieten kannst sowie wie du es bekannt machst. Willst du doch eine Empfehlung haben, dann teste den Vertrieb als Einstieg. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == neuro){
    console.log("neuro");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Gestalter für visuelles Marketing");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: International Business Studies");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Du bist extrem kreativ. Daher bekommst du kein Geschäftsmodell empfohlen. Stelle dir einfach mal die Frage wofür du Geld zahlst, wofür andere Menschen eventuell Geld zahlen würden und was du davon anbieten kannst sowie wie du es bekannt machst. Willst du doch eine Empfehlung haben, dann bringe dir IT Skills selber bei und verkaufe diese als Dienstleistung oder beginne ein eigenes Projekt wie eine Website, etc. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
}
else if(höchstwert == gewissen){
  console.log("gewissen");
  if(zweiter_höchstwert == offen){
    console.log("offen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Vertriebler");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Fachinformatiker");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Informatik");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == extra){
    console.log("extra");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Vertriebler");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Steuerfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftswissenschaften");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == vertrag){
    console.log("vertrag");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kassierer");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Fachinformatiker");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Informatik");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == neuro){
    console.log("neuro");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Callcenter-Mitarbeiter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Steuerfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftswissenschaften");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
}
else if(höchstwert == extra){
  console.log("extra");
  if(zweiter_höchstwert == offen){
    console.log("offen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im E-Commerce");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftswissenschaften");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich ");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Business im Bereich Vertrieb. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == gewissen){
    console.log("gewissen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Vertriebler");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung aus Kaufmann im E-Commerce");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftswissenschaften");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Business im Vertrieb. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }

  else if(zweiter_höchstwert == vertrag){
    console.log("vertrag");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im E-Commerce");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Business im Bereich Vertrieb. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == neuro){
    console.log("neuro");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im E-Commerce");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Business im Bereich Vertrieb. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
}
else if(höchstwert == vertrag){
  console.log("vertrag");
  if(zweiter_höchstwert == offen){
    console.log("offen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im Groß- und Außenhandel");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftspsychologie");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == gewissen){
    console.log("gewissen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kassierer");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im Groß- und Außenhandel");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Wirtschaftspsychologie");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == extra){
    console.log("extra");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Kellner");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im Groß- und Außenhandel");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Sportwissenschaft");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }

  else if(zweiter_höchstwert == neuro){
    console.log("neuro");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Kaufmann im Groß- und Außenhandel");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Sportwissenschaft");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Mache ein FSJ im sozialen Bereich");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Absolviere ein Studium wie beispielsweise Jura, BWL oder IT, um Kontakte zu knüpfen und dir Fähigkeiten anzueignen, die du später einmal verkaufen kannst. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
}
else if(höchstwert == neuro){
  console.log("neuro");
  if(zweiter_höchstwert == offen){
    console.log("offen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Sozialversicherungsfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Suche dir einen Hauptberuf und investiere in Immobilien. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == gewissen){
    console.log("gewissen");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Sozialversicherungsfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Suche dir einen Hauptberuf und investiere in Immobilien. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == extra){
    console.log("extra");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Sozialversicherungsfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Suche dir einen Hauptberuf und investiere in Immobilien. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
  else if(zweiter_höchstwert == vertrag){
    console.log("vertrag");
    if(höchstwert_job == direkteinstieg){
      console.log("direkteinstieg");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Direkteinstieg als Fahrradkurier");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == ausbildung){
      console.log("ausbildung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Ausbildung als Sozialversicherungsfachangestellter");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == studium){
      console.log("studium");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Studium: Soziale Arbeit");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == selbstfindung){
      console.log("selbstfindung");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Selbstfindungsphase: Beginne zu studieren beispielsweise BWL oder soziale Arbeit mit wenig Aufwand oder arbeite einen entspannten Job als Direkteinstieg wie als Fahrradkurier und lese nebenbei Bücher zum Lernen");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
    else if(höchstwert_job == business){
      console.log("business");
      const celem1 = document.createElement("div");
      const celem1Text = document.createTextNode(
      "Suche dir einen Hauptberuf und investiere in Immobilien. PS: Zahle aber auf keinen Fall Geld für irgendwelche Business Coaches, die du in der Werbung auf Youtube siehst, denn in 99% der Fälle verlieren Menschen Geld, wenn sie bei solchen Gurus investieren.");
      celem1.appendChild(celem1Text);
      document.body.appendChild(celem1);
    }
  }
}