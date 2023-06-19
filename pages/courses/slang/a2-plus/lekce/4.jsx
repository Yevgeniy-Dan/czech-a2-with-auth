import React from 'react';
import PageLink from '../../../../../components/PageLink';
import { Collapse, Table } from 'reactstrap';
import useKeyOpen from '../../../../../hooks/useKeyOpen';
import useAuth from '../../../../../hooks/useAuth';
import PdfFrame from '../../../../../components/UI/PdfFrame';
import GreenBox from '../../../../../components/UI/GreenBox';
import Clarification from '../../../../../components/UI/Clarification';
import LessonFarewell from '../../../../../components/UI/LessonFarewell';

const Four = () => {
  const keys = useKeyOpen(13);
  const isAuth = useAuth();

  if (!isAuth) {
    return <>{isAuth}</>;
  }
  return (
    <div>
      <div className="container mx-auto bg-gray-100 rounded-lg p-6">
        <h1 className="text-center text-3xl font-bold underline">4. lekce</h1>
        <p className="text-center"> Opakování akuzativu (4. pád), slovesné vazby, osobní zájmena v akuzativu </p>
        <div className="mt-4 flex justify-between items-center">
          <PageLink href="./3" className={`flex flex-col items-start`}>
            <span className="text-blue-500 hover:underline">Предыдущий урок</span>
            <span className="mt-2">3. lekce</span>
          </PageLink>
          <PageLink href="./5" className={`flex flex-col items-end`}>
            <span className="text-blue-500 hover:underline">Следующий урок</span>
            <span className="mt-2">5. lekce</span>
          </PageLink>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-4">Добрый день, дорогие друзья!</h1>

        <div className="frame italic">
          <p>Сегодня нас ждёт повторение и углубление в Akuzativ.</p>

          <p>Напомню, это 4-й падеж в чешском языке, который отвечает на вопросы Koho? и Co?</p>

          <p>И вспомогательные слова для нас это «vidím» и «mám». Vidím koho? Vidím co? Mám koho? Mám co?</p>

          <p>На этой лекции мы затронем темы: «Одежда», «Ресторан» и «Животные».</p>
        </div>
      </div>
      <div className="my-4">
        <div className="font-bold text-center">
          <h2>AKUZATIV</h2>
          <p>OPAKOVÁNÍ 4. PÁDU</p>
        </div>

        <p className="font-bold">Скачайте файлы Pády - Jednotné číslo и Pády - Množné číslo.</p>

        <PdfFrame
          title="Pády - jednotné číslo.pdf"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_4/P%C3%A1dy+-+jednotn%C3%A9+%C4%8D%C3%ADslo.pdf"
        />
        <PdfFrame
          title="Pády - množné číslo.pdf"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_4/P%C3%A1dy+-+mno%C5%BEn%C3%A9+%C4%8D%C3%ADslo.pdf"
        />

        <p className="font-bold">Посмотрите видео с Дарьей, где мы всё подытожим и углубимся в 4-й падеж.</p>

        <p className="text-red-600">
          <strong>Внимание!</strong> <br /> Повторяйте всё что услышите вслух!
        </p>

        <div className="video-container">
          <iframe
            width="949"
            height="534"
            src="https://www.youtube.com/embed/NAJ_9jWltV4"
            title="4  AKUZATIV"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
        <p>
          <strong>Slova z videa</strong>
        </p>

        <p className="italic">
          Vidím... <br /> majitele, ředitele, učitele, spisovatele, prodavače, Ondřeje, Němce, Tomáše
        </p>

        <p>
          <strong>Příklady</strong>
        </p>

        <div className="italic line-h-08-container">
          <p>(Soudce) — důchodce, výherce, poradce, průvodce.</p>
          <p>(Předseda) — starosta, turista, kolega, fotbalista.</p>
          <p>(Pán) — tatínek, bratr, kamarád, doktor, profesor, fotograf.</p>
          <p>(Stroj) — pomeranč, pokoj, koš.</p>
          <p>(Hrad) — strop, strom, sešit, čtvrtek.</p>
          <br />
          <p>(Dobrý) — levný, drahý, modrý, nový...</p>
          <p>Vidím jarního / moderního / hlavního / vedoucího...</p>
          <br />
          <p>(Město) — ráno, máslo, kolo, okno.</p>
          <p>(Moře) — nebe, srdce, parkoviště.</p>
          <p>(Náměstí) — nádraží, stavení, sebevědomí, plavání.</p>
          <p>(Dobré) — levné, drahé, modré, červené, skleněné.</p>
          <br />
          <p>Bez drahého města.</p>
          <p>Bez levného auta.</p>
          <br />
          <p>(Žena) — středa, sobota, slečna, kniha, lampa.</p>
          <p>(Růže) — práce, růže, restaurace, učebnice.</p>
          <p>(Píseň) — skříň, tramvaj, pláž.</p>
          <p>(Radost) — bolest, kost, místnost, výslovnost.</p>
          <br />
          <p>Vidím jarní květinu.</p>
          <p>Vidím drahou květinu.</p>
          <br />
          <p className="font-bold">Ak. — na, za, o, pro, skrz, přes</p>
          <br />
          <p>Zaplatím za pana / tatínka / kamaráda / dědečka / bratra / fotografa...</p>
          <p>Je to pro muže / Němce / Ondřeje / Tomáše / prodavače...</p>
          <p>Vidím učitele / majitele / ředitele...</p>
          <p>Vidím předsedu / turistu / kolegu / fotbalistu...</p>
          <p>Vidím soudce / důchodce / průvodce...</p>
          <br />
          <p>Vidím...</p>
          <p>dobrého pana / nového kamaráda...</p>
          <p>jarního pana / moderního pana / komunikativního tatínka...</p>
          <br />
          <p>Vidím...</p>
          <p>ženu / knihu / lampu / růži...</p>
          <br />
          <p>Mám práci.</p>
          <p>Vidím učebnici / přítelkyni...</p>
          <br />
          <p>Mám píseň.</p>
          <p>Vidím skříň / tramvaj...</p>
          <br />
          <p>Mám radost / velkou místnost...</p>
          <br />
          <p>Vidím dobrou / novou / mladou / hezkou / černou...</p>
          <p>Vidím jarní květinu / moderní babičku...</p>
          <br />
          <p>Na koho obvykle myslíte?</p>
          <p>
            Já obvykle myslím na svoji rodinu, myslím na maminku, na kamarádku, na svého manžela, myslím na naši kočku.
          </p>
          <br />
          <p>Jakou hudbu posloucháte?</p>
          <p>Já poslouchám dobrou ruskou, českou nebo populární hudbu nebo taky občas i rockovou.</p>
          <p>Jakou pražskou ulici znáte?</p>
          <p>
            Například dřív jsem měla kancelář v ulici Blanická, takže znám Blanickou ulici, taky nejdražší ulici v
            Praze, kterou je Pařížská ul., takže znám Pařížskou ulici.
          </p>
          <br />
          <p>Jakou máte obvykle náladu?</p>
          <p>Já mám obvykle výbornou náladu, nebo klidnou náladu, nebo dobrou. Velmi zřídka mám špatnou náladu.</p>
          <br />
          <p>Co můžete koupit v obchodě se zeleninou?</p>
          <p>
            Já bych koupila červenou papriku, taky bych koupila cibuli, potom bych si koupila brokolici, mrkev, taky
            bych koupila avokádo nebo salát.
          </p>
          <br />
          <p>Co obvykle obědváte?</p>
          <p>Já ráda obědvám bramborovou kaši, česnekovou polévku, nebo zeleninu s lososem.</p>
          <br />
          <p>Koho můžeme uvidět v obchodě?</p>
          <p>V obchodě uvidíme zákazníka, zákaznici, pokladní, uklízečku, prodavače, prodavačku, a nebo pokladní.</p>
          <br />
          <p>Koho můžete uvidět v restauraci?</p>
          <p>Uvidíme zákazníka, zákaznici, číšníka, číšnici, kuchaře.</p>
        </div>

        <hr />

        <div>
          <p className="font-bold">А теперь, приступим к закреплению!</p>
          <p className="font-bold">Выполните задания № 1.1 — № 15.</p>

          <div>
            <div>
              <p className="font-bold">1.1. Pracujte podle vzoru. Řekněte, co kupujete (používejte Akuzativ).</p>
              <p className="italic">
                <strong>Vzor:</strong> čokoládová zmrzlina &#8594; Kupuju čokoládovou zmrzlinu.
              </p>
              <p>
                Levné mléko, dobrá kniha, drahý citron, velká televize, černé pivo, malá mapa, moderní učebnice, skvělé
                ovoce, bílá čokoláda, česká zelenina, nový počítač, studená kola, ovocný jogurt, bílé víno, zeleninový
                salát, hezká židle, bílá sůl.
              </p>

              <div>
                <button onClick={() => keys.toggleKey(1)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(1)} timeout={2000}>
                  <div>
                    <p className="italic">
                      Levné mléko, dobrou knihu, drahý citron, velkou televizi, černé pivo, malou mapu, moderní
                      učebnici, skvělé ovoce, bílou čokoládu, českou zeleninu, nový počítač, studenou kolu, ovocný
                      jogurt, bílé víno, zeleninový salát, hezkou židli, bílou sůl.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />

            <div>
              <p className="font-bold">
                1.2. Pracujte podle vzoru. Řekněte, koho nebo co hledáte (používejte Akuzativ).
              </p>
              <p className="italic">
                <strong>Vzor:</strong> černý pes &#8594; Hledám černého psa.
              </p>
              <p>
                Hodný manžel, milá prodavačka, dobrý otec, malá kočka, české ovoce, levné maso, sympatická manželka,
                starší syn, malá dcera, inteligentní ředitel, nová učitelka, červené víno, staré náměstí, nová ulice,
                starší sestra, milá teta, hodný strýc.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(2)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(2)} timeout={2000}>
                  <div>
                    <p className="italic">
                      Hodného manžela, milou prodavačku, dobrého otce, malou kočku, české ovoce, levné maso, sympatickou
                      manželku, staršího syna, malou dceru, inteligentního ředitele, novou učitelku, červené víno, staré
                      náměstí, novou ulici, starší sestru, milou tetu, hodného strýce.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />

            <div>
              <p className="font-bold">
                1.3. Pracujte podle vzoru. Řekněte, koho nebo co potřebujete (používejte Akuzativ).
              </p>
              <p className="italic">
                <strong>Vzor:</strong> jedna perlivá voda &#8594; Potřebuju jednu perlivou vodu.
              </p>
              <p>
                Ten teplý čaj, jedna horká káva, to dobré ovoce, jejich nový stůl, to teplé moře, jedna malá židle, ten
                hodný učitel, tvoje česká učebnice, jedno červené víno, ta dobrá čokoláda, ten dobrý doktor, jeho nová
                fotografie, jeden ovocný džus, náš chytrý právník, ten elektronický formulář, ta dobrá zelenina, její
                moderní počítač, ta citronová zmrzlina, jeden čokoládový dort, to studené mléko, jedna nová televize,
                ten velký pokoj.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(3)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(3)} timeout={2000}>
                  <div>
                    <p className="italic">
                      Ten teplý čaj, jednu horkou kávu, to dobré ovoce, jejich nový stůl, to teplé moře, jednu malou
                      židli, toho hodného učitele, tvoji/tvou českou učebnici, jedno červené víno, tu dobrou čokoládu,
                      toho dobrého doktora, jeho novou fotografii, jeden ovocný džus, našeho chytrého právníka, ten
                      elektronický formulář, tu dobrou zeleninu, její moderní počítač, tu citronovou zmrzlinu, jeden
                      čokoládový dort, to studené mléko, jednu novou televizi, ten velký pokoj.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div>
            <GreenBox
              text="Внимание! Задание № 2 проверит преподаватель."
              subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
            />

            <div>
              <p className="font-bold">
                2. Napište krátký dialog «Co si dáte? Kávu, nebo čaj?» Použijte minimálně 5 slov z nabídky.
              </p>
              <p className="font-bold">Role: Madla a Šimon</p>
              <p>
                <i>Každý musí mít minimálně 6 replik!</i>
              </p>

              <div className="italic">
                <p>
                  <strong>Vzor:</strong> <br /> <strong> Madla:</strong> Dobrý den! Co si dáte? Dneska mám výbornou
                  nabídku sladkosti, zvlášť čokolády! <br /> <strong> Šimon:</strong> Mňam! Dnes zrovna mám chuť na
                  sladké!
                </p>
              </div>
              <p>
                Dort, čokoláda, bonbon, zmrzlina, cukr, mléko, odpočívat, dát si, dělat, potřebovat, ovocný, čokoládový.
              </p>
            </div>

            <hr />
            <p className="font-bold">Stáhněte si soubor «Zvířata» a podívejte se na české názvy zvířat.</p>

            <PdfFrame title="Zvířata" href="https://czecha2bucket.s3.amazonaws.com/lekce_4/Zv%C3%AD%C5%99ata.pdf" />
          </div>

          <hr />

          {/* Task 3 */}
          <div>
            <GreenBox
              text="Внимание! Задание № 3 проверит преподаватель."
              subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
            />

            <p>
              <strong>3. Vyberte si 10 zvířat ze souboru «Zvířata» a řekněte, co každé z nich jí. </strong>
            </p>
            <p className="italic">
              <strong>Vzor:</strong> Kůň jí trávu.
            </p>
          </div>
          <hr />
          {/* Task 4 */}
          <div>
            <GreenBox
              text="Внимание! Задание № 4 проверит преподаватель."
              subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
            />

            <div>
              <p className="font-bold">4. Přečtěte si dialog a najděte v něm Akuzativ.</p>

              <div className="text-red-600 mb-3">
                <span>Pozor!</span> <br /> Hledejte celé výrazy, ne zvlášť (отдельно) stojící slovesa.
              </div>

              <p>
                <span className="font-bold"> Vzor:</span> <br />{' '}
                <i>
                  {' '}
                  Gábina, Pepa, Milada, Ondřej a Lukáš jdou do ZOO. Je pěkný den, sluníčko svítí, je neděle. Všichni se
                  velmi těší. <strong>Koupí si vstupenky</strong> a <strong>dostanou mapu</strong> ZOO. Nejdříve se
                  zastaví u ledních medvědů.
                </i>
              </p>

              <p className="font-bold">Dialog. Gábina, Pepa, Lukáš a Milada.</p>

              <div className="line-h-08-container">
                <p>Gábina: Pepo, podívej, ten medvěd je veliký. A jaké má packy! To není jako Brumík.</p>
                <p>Pepa: Je mu asi horko, vidíš — je ve vodě.</p>
                <p>Lukáš: Méd’a, Méd’a! </p>
                <p>
                  Milada: Ale ten je jiný než ten plyšový, má ostré drápy a zuby. Po medvědovi vidí klokany. Obdivují,
                  jak nosí svá mláďata v kapse a jak skáčou.
                </p>
                <p>L: Mně se moc líbí, kdyby hráli fotbal, to by bylo něco!</p>
                <p>G: A tady je klokanice s klokánkem, hele, mládě chce ven z kapsy!</p>
                <p>P: To je jasné, chce také skákat.</p>
                <p>L: A kde spí klokani?</p>
                <p>M: Mají svůj pelíšek v ZOO. Ale jinak bydlí v Austrálii.</p>
                <p>L: A méďa?</p>
                <p>G: Ten bydlí v jeskyni a tam i v zimě spí. Zato liška hledá nory.</p>
                <p>L: A ptáci?</p>
                <p>
                  M: Ti žijí na stromech, obvykle si tam stavějí hnízda, kam snášejí vejce, z nichž se pak vylíhnou
                  mláďata.
                </p>
                <p>
                  L: To jsem viděl u babičky, jak slepice mají vajíčka. Ale tam má každé zvířátko svůj byt. Kráva a
                  prase jsou v chlévě, kůň ve stáji, slepice v kurníku, holubi v holubníku a pes v boudě. A když chtějí
                  můžou jít na dvorek.{' '}
                </p>
                <p>
                  M: Ale to jsou domácí zvířata, zde můžeš vidět ta, která žijí v přírodě, ale hlavně nejsou z České
                  republiky.
                </p>
                <p>G: Jééé, tamhle je slon. Ten ale mává chobotem a ušima. A ty kly (kel — клык)! Ten je odkud?</p>
                <p>M: Z Afriky nebo z Indie, existují dva druhy.</p>
                <p>G: Aha, koukej, vedle je hroch! Ten je tlustý. A hned za ním je nosorožec!</p>
                <p>M: Kluci, podívejte se, jaký roh má nosorožec!</p>
                <p>G: A tady jsou lvi, a tygři! Ty nechci potkat na ulici.</p>
                <p></p>
              </div>
            </div>
            <p>
              Úplně naposledy se jdou podívat na opice a lachtany. Klukům se líbí, jak si hrají. Gábina by si přála mít
              opičku doma. Pepa všem kupuje zmrzlinu. Výlet se povedl.
            </p>
          </div>

          <hr />
          {/* Task 5 */}
          <div>
            <GreenBox
              text="Внимание! Задание № 5 проверит преподаватель."
              subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
            />

            <div>
              <p className="font-bold">
                5. Popište obrázek č. 1 a používejte u toho Akuzativ (kdo co hraje, kdo co vidí, kdo co dělá). Dole
                najdete slova, která vám pomůžou.
              </p>
              <p className="italic">
                <strong>Vzor:</strong> Pes se dívá na chlapce.
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Obr%C3%A1zek+%C4%8D.+1.jpg"
                  alt="Obrázek č. 1"
                  className="w-full"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 1</i>
                  </strong>
                </figcaption>
              </figure>

              <p className="font-bold">Slova k obrázku</p>
              <div className="line-h-08-container">
                <p>Kopat — пинать</p>
                <p>Opírat se o co — опираться</p>
                <p>Držet — держать</p>
                <p>Pískat — свистеть</p>
                <p>Dívat se — смотреть</p>
                <p>Kouřit — курить</p>
                <p>Ukazovat — показывать</p>
                <p>Krčit — пожимать</p>
                <p>Obejímat — обнимать</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-center">SLOVESNÉ VAZBY</h2>

        <p className="font-bold">Скачайте файл - Přehled slovesných vazeb A2</p>

        <PdfFrame
          title="Přehled slovesných vazeb A2"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_4/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
        />

        <div className="font-bold text-center my-4">
          <p className="text-lg">Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na Quizlet:</p>

          <p className="text-2xl">Slovesné vazby s Akuzativem</p>
          <a
            href="https://quizlet.com/jeneforenglish/folders/lekce_4?x=1xqt&i=3zq2hw"
            target="blank"
            className="custom-btn">
            OTEVŘÍT KARTIČKY
          </a>
        </div>

        <div>
          <p className="font-bold">Посмотрите видео с Дарьей - Slovesné vazby.</p>

          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/mhhYt77jpTU"
              title="4  SLOVESNÉ VAZBY"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <p className="font-bold">Slovesné vazby z videa</p>

          <div className="italic line-h-08-container">
            <p>Bát se o koho/co</p>
            <p>Bojím se o svoji dceru / o naši kočku / o tvoji babičku</p>
            <p>Bojovat o co/koho</p>
            <p>Bojuju o lásku / o život / o práci / o peníze</p>
            <p>Hrát / zahrát si o co</p>
            <p>Zahrát o peníze</p>
            <p>Zahrát o ceny</p>
            <p>Zahrajeme si o ceny</p>
            <p>Pečovat o koho/co</p>
            <p>Pečuju o svoji rodinu / o babičku / o dědečka / o matku</p>
            <p>Starat se o koho/co</p>
            <p>Můžeme se postarat o nemocné dítě / nemocnou babičku / o naši kočku / o našeho psa</p>
            <p>Pokoušet se/ pokusit se o co</p>
            <p>Pokusím se o opravu auta</p>
            <p>Přicházet / přijít o</p>
            <p>Přišla jsem o peníze / kamarádku / o svůj kufr</p>
            <p>Přišli jsme o všechno</p>
            <p>Snažit se o co</p>
            <p>Snažím se o úspěch / o výhru</p>
            <p>Stát o něco</p>
            <p>Stojím o svou práci / o svoji lásku</p>
            <p>Zajímat se o</p>
            <p>Mít zájem o</p>
            <p>Zajímám se o hudbu / českou literaturu / český jazyk</p>
            <p>Mám zájem o plavání / sportovní hru</p>
            <p>Žádat / požádat o</p>
            <p>Chci požádat o informaci / o cestovní pas</p>
            <p>Poprosit o</p>
            <p>Mužů poprosit o pomoc?</p>
            <p>Jít o něco</p>
            <p>O co jde?</p>
            <p>O co tady šlo?</p>
            <p>Jednat se o něco</p>
            <p>Jedná se o moji práci?</p>
            <p>Jedná se o moji manželku?</p>
            <p>Čekat / počkat na</p>
            <p>Počkáme na dobré počasí pak pojedeme na výlet</p>
            <p>Dbát na něco</p>
            <p>Dbám na pořádek / čistotu / vzhled / na sebe</p>
            <p>Myslet na co/koho</p>
            <p>Myslím na kamarádku / na dovolenou / na dárky</p>
            <p>Pamatovat si na co</p>
            <p>Dobře si pamatuju na naši dovolenou / hodiny češtiny</p>
            <p>Ptát se (koho) na (něco)</p>
            <p>Chci se vás zeptat na něco</p>
            <p>Chci se vás zeptat na tu restauraci / knížku</p>
            <p>Vzpomínat (si) na co</p>
            <p>Vzpomínám (si) na práci / dětství</p>
            <p>Zvykat si na</p>
            <p>Zvykla jsem si na české jídlo / na ranní vstávání</p>
            <p>Žárlit na koho/co kvůli komu/čemu</p>
            <p>Žárlí na jeho úspěchy Manžel žárlí na manželku kvůli nějakému chlapovi</p>
            <p>Manžel žárlí na manželku kvůli nějakému chlapovi</p>
          </div>
        </div>

        <hr />
        <div>
          <p className="font-bold">Zopakujte si slovesné vazby s Akuzativem. </p>
        </div>
        {/* Task 6 */}
        <div>
          <GreenBox
            text="Внимание! Задание № 6 проверит преподаватель."
            subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
          />

          <div>
            <p className="font-bold">
              6. Odpovězte ústně na otázky a odpovědi zaznamenejte na audio. Pro lepší procvičování jsme připravili
              formální a neformální otázky (tykání a vykání).
            </p>

            <p className="text-red-600">
              <strong>Pozor!</strong> <br /> Používejte číslo jednotné.
            </p>

            <p className="italic">
              <strong>Vzor:</strong> <br /> <strong>Otázka: </strong> Staráte se o někoho? <br /> <strong>Vy:</strong>{' '}
              Ano, starám se o kočku, babičku, svého manžela, o mladší dceru.
            </p>

            <ul className="list-decimal">
              <li>Staráte se o někoho?</li>
              <li>Na co často/na koho obvykle myslíš? </li>
              <li>O co se zajímáš?</li>
              <li>Jakou hudbu posloucháš?</li>
              <li>Jakou pražskou ulici znáš?</li>
              <li>Jakou obvykle máte náladu?</li>
              <li>Co si dáte v restauraci?</li>
              <li>Co kupuješ v zelenině? </li>
              <li>Na co se těšíš v neděli?</li>
              <li>Co si objednáte na internetu?</li>
              <li>Co si lidé objednávají na internetu?</li>
              <li>Co potřebují děti?</li>
              <li>Co obědváte?</li>
              <li>Co koupíte v papírnictví?</li>
              <li>Co koupíte pro nový byt?</li>
              <li>Pro koho máte dárky?</li>
              <li>Koho máš rád/a?</li>
              <li>Koho uvidíte v obchodě?</li>
              <li>Со uslyšíte v rádiu?</li>
            </ul>
          </div>

          <hr />

          {/* Task 7 */}
          <div>
            <p className="font-bold">
              7.1. Přečtěte si detektivku a seřaďte odstavce (расположите по смыслу абзацы) a potom vyplňte zadání 7.2.
            </p>

            <p className="font-bold">Náš vztah už nemá cenu</p>

            <div>
              <p>
                A) — «Dobrý den, tady Jana Bednářová. Prosím vás, můžete sem přijet? Můj manžel je zavřený v pracovně a
                neodpovídá mi. Mám strach, že se mu něco stalo.»
                <br />– — «A kde bydlíte, paní Bednářová?» <br /> – «Karlovo náměstí 7.»
              </p>

              <p>
                B) V místnosti byla úplná tma, protože na okně byly tmavé závěsy. Když inspektor rozsvítil, uviděl muže,
                který seděl u stolu. Byl mrtvý. Na stole stála sklenička se zbytkem nějakého pití. Vedle ležely prášky
                na spaní. Všechny tablety byly pryč. Muž měl v ruce pero a před ním ležel nějaký papír.
              </p>
              <p>
                C) Ale inspektor Holmík řekl: — «Nezdá se mi, že to byla sebevražda, paní Bednářová! To ještě uvidíme.»
              </p>

              <p>
                D) Inspektor Holmík se probudil a podíval se na hodinky. Bylo sedm hodin ráno a venku byla ještě tma.
                Najednou zazvonil telefon. Inspektor řekl: — «Holmík, prosím?»
              </p>

              <p>
                E) Inspektor vzal papír do ruky a četl: — «Jano, náš vztah už nemá cenu. Už nemůžu dál. Rozhodl jsem se,
                že to vyřeším odchodem...» Poslední slovo nebylo dopsané. Paní Bednářová se rozplakala: — «Proč jsi to
                udělal, Martine! Proč jsi spáchal sebevraždu?»
              </p>

              <p>
                F) Za dvacet minut byli inspektor Holmík s detektivem Vacíkem na místě. Zazvonili a paní Bednářová
                přišla otevřít: — «Rychle, prosím vás! Tady je manželova pracovna.» Inspektor se zeptal: — «Vy nemáte
                klíč?»
              </p>

              <p>
                G) — «Ne, klíč má jenom manžel. V pracovně se vždycky zamyká.» <br />— «To je divné, ne?»
                <br />— «No, on je dost nervózní a chce mít klid. Navíc jsme se včera večer hádali o peníze a....»
                <br />— «Aha, tak to musíme udělat jinak.» Inspektor vyrazil dveře.
              </p>
            </div>

            <div>
              <button onClick={() => keys.toggleKey(4)} className="kliche-btn">
                Klíče
              </button>
              <Collapse isOpen={keys.getValue(4)} timeout={2000}>
                <div className="italic">
                  <ul className="list-decimal">
                    <li>— D)</li>
                    <li>— A)</li>
                    <li>— F)</li>
                    <li>— G)</li>
                    <li>— B)</li>
                    <li>— E)</li>
                    <li>— C)</li>
                  </ul>
                </div>
              </Collapse>
            </div>
          </div>

          <hr />

          {/* Task 7.2 */}
          <div>
            <p className="font-bold">7.2. Odpovězte na otázky.</p>
            <ul className="list-decimal">
              <li>Na co byly prášky, které ležely na stole?</li>
              <li>Na co se podíval Holmík, když se probudil?</li>
              <li>Co spáchal Martin?</li>
              <li>Za jak dlouho byli inspektor Holmík s detektivem Vacíkem místě?</li>
              <li>Co neměla paní Bendářová?</li>
              <li>Koho uviděl Holmík, když vyrazil dveře do pracovny?</li>
              <li>Co měl Martin Bednář v ruce?</li>
              <li>O co se hádali manželové?</li>
            </ul>

            <div>
              <button onClick={() => keys.toggleKey(5)} className="kliche-btn">
                Klíče
              </button>
              <Collapse isOpen={keys.getValue(5)} timeout={2000}>
                <div className="italic line-h-08-container">
                  <p> Na spaní.</p>
                  <p> Na hodinky.</p>
                  <p>Sebevraždu.</p>
                  <p>Za dvacet minut.</p>
                  <p> Klíč.</p>
                  <p>Muže.</p>
                  <p>Pero.</p>
                  <p>O peníze.</p>
                </div>
              </Collapse>
            </div>
          </div>

          <hr />

          <Clarification text="Очень часто Akuzativ встречается при заказе еды, поэтому попрактикуем 4-й падеж в ресторане." />

          <hr />
          {/* Task 8 */}
          <div>
            <p className="font-bold">8. Pracujte s obrázkem č. 2 v následujících zadáních.</p>
            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Obr%C3%A1zek+%C4%8D.+2.jpg"
                alt="Obrázek č. 2"
                className="w-full"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 2</i>
                </strong>
              </figcaption>
            </figure>

            <div>
              <p className="font-bold">
                a) Co si myslíte, že každý z lidí na obrázku č. 2 objednal nebo objedná? Nahrajte to na diktafon. U
                tohoto úkoly není správná odpověď. Všechno je na vaše fantázii.
              </p>
            </div>

            <div className="line-h-08-container">
              <p>
                <strong>Vzor:</strong> Martin si určitě dal vodu. Myslím si, že dnes nemá chuť na nic sladkého.
              </p>
              <p>
                <strong>Vzor:</strong> Eva si dá česnekovou polévku a chléb.
              </p>
            </div>
            <hr />
            <div>
              <p className="font-bold">b) Spojte lidé na obrázku č. 2 s popisem.</p>

              <div className="line-h-08-container">
                <p>A) Eva mluví s číšníkem a něco si objednává. </p>
                <p>B) Pavel mluví se servírkou. Zlobí se a na něco si stěžuje.</p>
                <p>C) Zdeněk sedí vedle Aleny.</p>
                <p>D) Martin pije kávu a čte si noviny. </p>
                <p>E) Alena drží jídelní lístek a mluví se Zdeňkem.</p>
                <p>F) Jana chce zaplatit a odejít. </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(6)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(6)} timeout={2000}>
                  <div className="italic">
                    <ul className="list-decimal">
                      <li> — D)</li>
                      <li> — F)</li>
                      <li> — B)</li>
                      <li> — C)</li>
                      <li> — E)</li>
                      <li> — A)</li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />
            <div>
              <p className="font-bold">c) Poslechněte si tři audia a odpovězte na otázky.</p>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Pavel.mp3"></audio>
                <figcaption>
                  <strong>Pavel</strong>
                </figcaption>
              </figure>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Zdenek.mp3"></audio>
                <figcaption>
                  <strong>Zdenek</strong>
                </figcaption>
              </figure>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Eva.mp3"></audio>
                <figcaption>
                  <strong>Eva</strong>
                </figcaption>
              </figure>

              <div className="line-h-08-container mt-8">
                <p className="font-bold">1. Pavel říká:</p>
                <p>a) Dám si česnekovou polévku a zeleninový salát.</p>
                <p>b) Dám si jenom cibulovou polévku a černé pivo.</p>
                <p>c) Dám si bramborovou polévku a okurkový salát. </p>
              </div>

              <div className="line-h-08-container mt-8">
                <p className="font-bold">2. Zdeněk říká: </p>
                <p>a) Máš ráda smaženého kapra?</p>
                <p>b) Máš ráda pečeného pstruha?</p>
                <p>c) Máš ráda grilovaného lososa? </p>
              </div>

              <div className="line-h-08-container mt-8">
                <p className="font-bold">3. Eva říká: </p>
                <p>a) Chtěla bych bílé víno a perlivou vodu.</p>
                <p>b) Chtěla bych zelený čaj a čokoládový dort. </p>
                <p>c) Chtěla bych červené víno a neperlivou vodu. </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(7)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(7)} timeout={2000}>
                  <div className="italic">
                    <ul className="list-decimal">
                      <li> — b)</li>
                      <li> — c)</li>
                      <li> — c)</li>
                    </ul>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
          <Clarification
            text="Ещё хорошо тренировать Akuzativ с одеждой, так как мы надеваем «что?», когда идём на «что?» (свадьбу,
              прогулку и т. д.)"
          />

          <hr />
          {/* Task 9 */}
          <div>
            <GreenBox
              text="Внимание! Задание № 9 проверит преподаватель."
              subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
            />

            <p className="font-bold">
              9. Podívejte se na obrázek č. 3 a popište ústně, co si oblékne Jan a Martina. Odpovědi zaznamenejte na
              audio.
            </p>

            <div className="line-h-08-container">
              <p>a) Na procházku;</p>
              <p>b) Na večeři;</p>
              <p>c) Na ples.</p>
            </div>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Obr%C3%A1zek+%C4%8D.+3.jpg"
                alt="Obrázek č. 3"
                className="w-full"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 3</i>
                </strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-center">Akuzativ osobních zájmen</h2>
        <div>
          <p className="font-bold">Следующая часть тренинга — личные местоимения в Akuzativ.</p>

          <p>
            Я — видишь (кого?) меня <br />
            Ты — не слышу (кого?) тебя <br />
            Она (сумка) — хочу (что?) её <br />И т. д.
          </p>
        </div>
        <div>
          <p className="font-bold">Посмотрите видео с Дарьей - Akuzativ osobních zájmen.</p>

          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/MxMcZqZ4X8k"
              title="4  Akuzativ osobních zájmen"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          <hr />
          <div>
            <p className="font-bold">Slova z videa</p>
            <p className="font-bold">ZÁJMENA</p>
            <div className="italic line-h-08-container">
              <p>vidí ...</p>
              <p>slyší...</p>
              <p>potřebuje...</p>
              <p>má...</p>
              <p>na pro</p>
              <p>za o</p>
              <p>On mně potřebuje</p>
              <p>Je to pro mě</p>
              <p>Zaplatíš za mě</p>
              <p>Uvidíme se</p>
              <p>Uslyšíme se</p>
              <p>Já zaplatím sama za sebe</p>
              <p>Můj bratr vůbec na sebe nemyslí</p>
              <p>Nestará se o sebe</p>
              <p>Potřebuju tě</p>
              <p>Miluju tě</p>
              <p>Nevidím tě</p>
              <p>Myslím na tebe</p>
              <p>Starám se o tebe</p>
              <p>Chci ho koupit</p>
              <p>Ztratil jsem ho</p>
              <p>Díváme se na něho</p>
              <p>Podívej se na něj</p>
              <p>Tam stojí můj kamarád. Podívej se na něj.</p>
              <p>Tam běží můj pes. Počkej na něj.</p>
              <p>Udělám to pro něj</p>
              <p>Nevidím ji</p>
              <p>Neslyším ji</p>
              <p>Půjčil jsem ji v knihovně</p>
              <p>Pečuju o ni</p>
              <p>To je moje kamarádka, zaplatím za ni</p>
              <p>Potřebujete nás?</p>
              <p>Slyšíte nás? Vidíte nás?</p>
              <p>Těšíte se na nás? Čekáte na nás?</p>
              <p>Hledám vás</p>
              <p>Čekám na vás / myslím na vás</p>
              <p>Vidím je</p>
              <p>Například, v Americe bydlí moji kamarádi a já je chci vidět</p>
              <p>
                Hledám je už celou hodinu, (třeba klíče) já jsem je ztratila a pak jsem je hledala celou hodinu. A pak
                jsem je našla v autě.
              </p>
              <p>Zaplatím jenom za ně.</p>
              <p>Koupila jsem to pro ně.</p>
              <p>Mám pro Martina dárek</p>
              <p>Mám pro něj dárek</p>
              <p>Neznám tvoji adresu</p>
              <p>Neznám ji</p>
              <p>Vidím své kamarády</p>
              <p>Vidím je</p>
              <p>Nevidím, kde prodávají hrušky</p>
              <p>Nevidím, kde je prodávají</p>
              <p>Dívám se často na televizi</p>
              <p>Dívám se často na ni</p>
              <p>Čekám na vlak</p>
              <p>Čekám na něj</p>
              <p>Vzpomínám na kamarádky</p>
              <p>Vzpomínám na ně</p>
              <p>Slyšíte mě? -ne, neslyšíme tě</p>
              <p>Dlouho nás hledáte? — ne, nehledáme vás dlouho</p>
              <p>Díváte se na ně? — ne, nedíváme se na ně</p>
              <p>Máte na mně čas? — ne, nemáme na tebe čas</p>
              <p>Kupuješ to pro mně? — ne, nekupuju to pro tebe</p>
            </div>
          </div>
        </div>

        <hr />
        <div>
          <p className="font-bold">Stáhněte si tabulkový soubor «Osobní zájmena» pro následující úkoly.</p>

          <PdfFrame
            title="Osobní zájmena"
            href="https://czecha2bucket.s3.amazonaws.com/lekce_4/Osobn%C3%AD+z%C3%A1jmena.pdf"
          />
        </div>

        {/* Task 10 */}
        <div>
          <p className="font-bold">10. Pracujte podle vzoru.</p>

          <p className="font-bold">Vzor:</p>
          <p className="italic">
            <strong>A:</strong> Čekáte na (my) <strong>…nás...</strong> ? <br /> <strong>B:</strong> Ne, nečekáme na
            (vy) <strong>…vás...</strong>, čekáme na (oni) <strong>…ně... </strong>.
          </p>

          <p>
            <strong> a)</strong> <br />
            A: Zná (já) … Petr? <br /> B: Ne, Petr (ty) … nezná.
          </p>

          <p>
            <strong> b)</strong> <br />
            A: Díváš se na (ona) … ?<br /> B: Ne, nedívám se na (ona) … , dívám se na (oni) … .
          </p>

          <p>
            <strong>c)</strong> <br />
            A: Potřebujete (oni) … ?<br /> B: Ne, nepotřebujeme (oni) … , potřebujeme (vy) … .
          </p>

          <p>
            <strong> d)</strong> <br />
            A: Oni tam čekají na (já) … ? <br /> B: Ne, nečekají na (vy) … , čekají na (my) … .
          </p>

          <p>
            <strong> e)</strong> <br />
            A: Vidíš (ona) … ?<br /> B: Ne, nevidím (ona) … , vidím (ty) … .
          </p>
          <p>
            <strong> f)</strong> <br />
            A: Posloucháte (my) … ? <br /> B: Ne, neposloucháme (vy) … , posloucháme (ona) … . … .
          </p>

          <p>
            <strong> g)</strong> <br />
            A: Myslíte na (oni) … ? <br /> B: Ne, nemyslím na (oni) … , myslím na (vy) … . … .
          </p>

          <p>
            <strong> h)</strong> <br />
            A: Těšíš se na (on) … ? <br /> B: Ne, netěším se na (on) … , těším se na (vy) … , na tebe a na Dana.
          </p>
          <p>
            <strong> i)</strong> <br />
            A: Máte (oni) … rádi?
            <br /> B: Ne, nemáme (oni) …. rádi, máme rádi jenom (ona) … .
          </p>

          <p>
            <strong> j)</strong> <br />
            A: Hledají (on) … ? <br /> B: Ne, nehledají (on) … , hledají (my) … .
          </p>

          <div>
            <button onClick={() => keys.toggleKey(8)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={keys.getValue(8)} timeout={2000}>
              <div className="italic row line-h-08-container">
                <div className="col">
                  <p>a) mě, tě</p>
                  <p>b) ni, ni, ně</p>
                  <p>c) je, je, vás</p>
                  <p>d) mě, vás, nás</p>
                  <p>e) ji, ji, tě</p>
                </div>
                <div className="col">
                  <p>f) nás, vás, ji</p>
                  <p>g) ně, ně, vás</p>
                  <p>h) něho / něj, něho / něj, vás</p>
                  <p>i) je, je, ji</p>
                  <p>j) ho, ho, nás</p>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <hr />
        {/* Task 11 */}
        <div>
          <p className="font-bold">11. Pracujte podle vzoru.</p>
          <p className="italic">
            <strong> Vzor:</strong> Hledáte (on) <strong>…ho...</strong>?
          </p>

          <div className="row line-h-08-container">
            <div className="col">
              <p>a) Čekáme na (ty) … .</p>
              <p>b) Posloucháte (oni) … ?</p>
              <p>c) Zajímá se o (ona) … .</p>
              <p>d) Známe (vy) … .</p>
              <p>e) Máš pro (já) … dárek?</p>
            </div>
            <div className="col">
              <p>f) Objednáme si (ono) … ?</p>
              <p>g) Dívají se na (my) … .</p>
              <p>h) Vidíme (ona) … .</p>
              <p>i) Myslím na (oni) … .</p>
              <p>j) Potřebuju (ty) … .</p>
            </div>
          </div>

          <div>
            <button onClick={() => keys.toggleKey(9)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={keys.getValue(9)} timeout={2000}>
              <div className="italic row line-h-08-container">
                <div className="col">
                  <p>a) tebe</p>
                  <p>b) je</p>
                  <p>c) ni</p>
                  <p>d) vás</p>
                  <p>e) mě </p>
                </div>
                <div className="col">
                  <p>f) ho</p>
                  <p>g) nás</p>
                  <p>h) ji</p>
                  <p>i) ně</p>
                  <p>j) tě</p>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <hr />

        {/* Task 12 */}
        <div>
          <p className="font-bold">12. Pracujte podle vzoru.</p>
          <p className="italic">
            <strong>Vzor: </strong>To je naše město. Mám …ho... moc rád.
          </p>
          <div className="row line-h-08-container">
            <div className="col">
              <p>a) To je moje babička. Znáte … ?</p>
              <p>b) To jsou nové lampy. Hledáš … ?</p>
              <p>c) To jsou tvoje spolužačky? Máš … rád?</p>
              <p>d) To je jejich syn. Čekáte na … ?</p>
              <p>e) To je jeho sešit. Potřebuješ … ?</p>
            </div>
            <div className="col">
              <p>f) To jsou její děti. Hledáte … ?</p>
              <p>g) To jsou moje sestry. Často na … myslím.</p>
              <p>h) To je jeho máma. Mám pro … dárek.</p>
              <p>i) To jsou ovocné dorty. Nemáme … rádi.</p>
              <p>j) To je naše Kristýna. Těšíš se na … ?</p>
            </div>
          </div>
          <div>
            <button onClick={() => keys.toggleKey(10)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={keys.getValue(10)} timeout={2000}>
              <div className="italic row line-h-08-container">
                <div className="col">
                  <p>a) ji</p>
                  <p>b) je</p>
                  <p>c) je</p>
                  <p>d) něho / něj</p>
                  <p>e) ho </p>
                </div>
                <div className="col">
                  <p>f) je</p>
                  <p>g) ně</p>
                  <p>h) ni</p>
                  <p>i) je</p>
                  <p>j) ni</p>
                </div>
              </div>
            </Collapse>
          </div>
        </div>

        <hr />

        {/* Task 13 */}
        <div>
          <p className="font-bold">13. Přeložte z ruštiny do češtiny.</p>
          <ul className="mb-4 list-decimal">
            <li>У меня для него сюрприз!</li>
            <li>Привет Роман, я рад, что тебя вижу!</li>
            <li>
              Не знаю точно твой адрес{' '}
              <i>
                (<strong>pozor!</strong> adresa je rod ženský)
              </i>
              , но мне он нужен.
            </li>
            <li> Покупаю апельсиновый сок, но сейчас не могу его найти.</li>
            <li>Здесь не продают груши, где их купим?</li>
            <li>
              Мои лучшие друзья <i>(moji nejlepší kamarádi)</i> идут, жду их.
            </li>
            <li>Где Вы? Не слышу вас!</li>
            <li>Мы уже почти здесь, долго нас ищете? </li>
            <li>
              Там наши знакомые девочки <i>(naše známé holky)</i>. Знаете их?{' '}
            </li>
            <li>Опять тебя жду!</li>
            <li>
              Где тут холодные напитки <i>(chlazené nápoje)</i>? Не вижу их.
            </li>
            <li>Смотрю на них.</li>
            <li>Жду их с нетерпением.</li>
          </ul>
          <div>
            <button onClick={() => keys.toggleKey(11)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={keys.getValue(11)} timeout={2000}>
              <div className="italic line-h-08-container">
                <ol>
                  <li>Mám pro něj překvapení!</li>
                  <li>Ahoj, Romane! Jsem rád, že tě vidím!</li>
                  <li>Neznám přesně tvou/tvoji adresu, ale potřebuju ji.</li>
                  <li>Kupuju vždy pomerančový džus, ale teď ho nemůžu najít.</li>
                  <li>Tady neprodávají hrušky, kde je můžeme koupit?</li>
                  <li>Moje nejlepší kamarádi jdou, čekám na ně.</li>
                  <li>Kde jste? Neslyším vás!</li>
                  <li>My jsme skoro tady, dlouho nás hledáte?</li>
                  <li>To jsou naše známé holky. Znáte je?</li>
                  <li>Zase na tebe čekám!</li>
                  <li> Kde jsou tady chlazené nápoje? Nevidím je.</li>
                  <li>Dívám se na ně.</li>
                  <li>Těším se na ně.</li>
                </ol>
              </div>
            </Collapse>
          </div>
        </div>

        <hr />

        {/* Task 14 */}
        <div>
          <p className="font-bold">14. Poslechněte si dialog. Najděte použití Akuzativu a Akuzativu osobních zájmen.</p>

          <figure>
            <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_4/Lucie+a+Matej.mp3"></audio>
            <figcaption>
              <strong>Dialog. Lucie a Matěj.</strong>
            </figcaption>
          </figure>

          <div className="line-h-08-container">
            <p>
              <strong>Lucie:</strong> Ano, prosím.
            </p>
            <p>
              <strong>Matěj:</strong> Dobrý den.
            </p>
            <p>
              <strong>L:</strong> Dobrý den.
            </p>
            <p>
              <strong>M:</strong> Vy jste paní magistra Lucie Malá?
            </p>
            <p>
              <strong>L:</strong> Ano, to jsem já.
            </p>
            <p>
              <strong>M:</strong> Učíte češtinu pro cizince, Ivana Šťastná je moje kamarádka a vy jste její teta, že?
            </p>
            <p>
              <strong>L:</strong> Ano, to máte pravdu. Co potřebujete?
            </p>
            <p>
              <strong>M:</strong> Jsem Matěj Adamec, za hodinu mám zkoušku hned vedle. Pozdravuje vás Ivana a moc se
              omlouvá, nemá pro vás tu knihu.
            </p>
            <p>
              <strong>L:</strong> Jéé. Ona ji nemá?! Jak to?!
            </p>
            <p>
              <strong>M:</strong> Její kamarádka je cizinka, učí se na zkoušku a teď tu vaši knihu potřebuje.
            </p>
            <p>
              <strong>L:</strong> No, to je teda moc hodná, ale já tu knihu potřebuju. Ach jo, ta Ivana! No, to je
              jedno. Jak se jmenuje ta cizinka?
            </p>
            <p>
              <strong>M:</strong> Madla Králová.
            </p>
            <p>
              <strong>L:</strong> Aaaa. Já ji znám. To je moje studentka. Dělá zkoušku za týden.
            </p>
            <p>
              <strong>M:</strong> Jééé. Opravdu? Madla ví, že mají mladou učitelku, ale neví, jak se jmenuje.
            </p>
            <p>
              <strong>L:</strong> Tak teď dobře rozumím, že potřebuje tu knihu. To jsem ráda, že studuje, na zkoušku tu
              knihu opravdu potřebuje.
            </p>
          </div>
          <div>
            <button onClick={() => keys.toggleKey(12)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={keys.getValue(12)} timeout={2000}>
              <div className="italic ">
                <Table className="italic">
                  <thead>
                    <tr className="font-bold">
                      <td>Akuzativ</td>
                      <td>Akuzativ osobních zájmen</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Učíte češtinu pro cizince, …</td>
                      <td>Pozdravuje vás …</td>
                    </tr>
                    <tr>
                      <td>… máte pravdu.</td>
                      <td>… pro vás … </td>
                    </tr>
                    <tr>
                      <td>Co potřebujete?</td>
                      <td>… ji nemá? </td>
                    </tr>
                    <tr>
                      <td>… za hodinu mám zkoušku …</td>
                      <td>… ji znám. </td>
                    </tr>
                    <tr>
                      <td>…nemá … tu knihu.</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… učí se na zkoušku, …</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… tu vaši knihu potřebuje.</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… tu knihu potřebuju.</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Dělá zkoušku za týden …</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… mají mladou učitelku, …</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… potřebuje tu knihu.</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>… na zkoušku … tu knihu … potřebuj.</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Collapse>
          </div>
        </div>

        <hr />

        {/* Task 15 */}
        <div>
          <GreenBox
            text="Внимание! Задание № 15 проверит преподаватель."
            subtitle="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
          />

          <p className="font-bold">
            15. Přečtěte si krátký text o denním řadu (распорядке дня). Vypište pro sebe užitečná slova nebo fráze.
          </p>

          <p className="font-bold">Pracovní den </p>
          <p>
            Jsem student a bydlím na koleji. Každý den se probouzím brzy ráno, ale vstávám až v sedm hodin. Nejdříve
            ustelu postel, pak trochu cvičím, potom se sprchuji a umývám se, čistím si zuby, holím se, češu se, oblékám
            se a dělám si snídani.
          </p>
          <p>
            Po snídani odcházím do školy. Přednášky začínají v devět hodin. Za hodinu a půl máme první přestávku. O
            přestávce svačím. Jím jablko, banán, nebo piju kávu. Přestávka trvá dvacet minut.
          </p>
          <p>
            Na seminářích procvičujeme novou gramatiku, píšeme věty na tabuli a do sešitu, odpovídáme na otázky,
            připravujeme si rozhovory. Hodiny končí ve dvě. Utíkám na oběd. Obědvám v menze během celého týdne. Jídlo mi
            chutná, skoro vždy mám hlad. Pak jdu do celouniverzitní počítačové studovny, která je otevřená přes celý
            týden. Když není hezké počasí, jdu domů.
          </p>
          <p>
            Cestou nakupuju, protože si vařím večeři sám. Večeřím asi v šest hodin. Občas pozvu na večeři přítelkyni.
            Večer se učím. Někdy jdu na návštěvu, do kina nebo do studentského klubu na party. Občas organizujeme
            velkolepé plesy s hudbou a zábavou až do ranních hodin. Obyčejné chodím spát v jedenáct hodin večer.
          </p>
          <p>
            Po pracovním týdnu jsme unaveni a všichni se těšíme se na víkend. V neděli nemusím brzy vstávat, proto spím
            dlouho. O víkendu odpočíváme, díváme se na televizi, scházíme se s přáteli, jezdíme na výlety, máme různé
            společenské a sportovní akce. Ve velké oblibě jsou u nás soutěže. Před týdnem jsme soutěžili o první místo v
            tenisovém turnaji.{' '}
          </p>
        </div>
      </div>

      <LessonFarewell />
    </div>
  );
};

export default Four;
