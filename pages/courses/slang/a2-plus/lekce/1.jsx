import React from 'react';
import { Collapse, Table } from 'reactstrap';
import PageLink from '../../../../../components/PageLink';
import useKeyOpen from '../../../../../hooks/useKeyOpen';
import useAuth from '../../../../../hooks/useAuth';
import FixingMaterialFrame from '../../../../../components/UI/FixingMaterialFrame';
import PdfFrame from '../../../../../components/UI/PdfFrame';
import GreenBox from '../../../../../components/UI/GreenBox';
import LessonFarewell from '../../../../../components/UI/LessonFarewell';

const One = () => {
  const e = useKeyOpen(11);
  const isAuth = useAuth();

  if (!isAuth) {
    return <>{isAuth}</>;
  }

  return (
    <div>
      <div className="container mx-auto bg-gray-100 rounded-lg p-6">
        <h1 className="text-center text-3xl font-bold underline">1. lekce</h1>
        <p className="text-center"> Opakování sloves «být», «mít» a časování sloves </p>
        <div className="mt-4 flex justify-between items-center">
          <div></div>
          <PageLink href="/admin/lectures/2" className={`flex flex-col items-end`}>
            <span className="text-blue-500 hover:underline">Следующий урок</span>
            <span className="mt-2">2. lekce</span>
          </PageLink>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-4">Добрый день, дорогие друзья!</h1>
      </div>

      <div className="frame">
        <p>
          <strong>
            <i>А теперь к темам А2</i>
          </strong>
        </p>
        <p>
          <i>
            Мы повторим все что связанно с глаголами, научимся будущему времени и поймём вид глаголов. Узнаём все слова
            в теме „Жилье“, о названиях комнат, как снимать, где искать и многое другое.
          </i>
        </p>
        <p>
          <i>
            Повторим все падежи в единственном числе, научим вас работать с удобной таблицей. Выучим все падежи во
            множественном числе. Плюс вы узнаете какие глаголы „хитрые“ и ведут себя не так как в русском, украинском,
            белорусском. Пополним словарный запас на очень важную тему „Работа“. Научим вас хитростям в окончаниях, и вы
            не будете в них путаться.
          </i>
        </p>
        <p>
          <i>
            Разберём тему „Хобби и свободное время“, что позволит вам поддерживать общение, интересоваться и говорить о
            себе и своей семье.
          </i>
        </p>
        <p>
          <i>
            Охватим глобальную тему „Здоровье“. Она будет в конце курса, так как предполагает более глубокого знания
            языка. Поговорим о характере человека и научимся правильно обращаться к людям (vokativ).
          </i>
        </p>
        <p>
          <strong>
            <i>Вот что нас с вами ждёт на курсе А2.</i>
          </strong>
        </p>
        <p>
          <strong>
            <i>
              Команда Slang. переживает и держит пальцы за каждого. Мы будем также рады получить обратную связь о нашем
              курсе.
            </i>
          </strong>
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-center">OPAKOVÁNÍ SLOVESA «BÝT»</h2>
        <p>
          Sloveso <strong>"být"</strong> переводится как
          <strong>"есть".</strong>
        </p>
        <p>
          В отличии от русского, украинского и белорусского, в чешском языке используется более часто. Например, на
          русском мы говорим:
          <i> Я Даша.</i>
        </p>
        <p>
          Но в чешском <strong>ВСЕГДА</strong> должен быть какой-то активный глагол.
          <i>Например: Я есть Даша. Она есть высокая. Лампа есть белая. Они есть из Франции.</i>
        </p>
        <div>
          <p>Посмотрите видео.</p>

          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FwWYHpVis08"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <p>
            <strong>Ниже представлена таблица "Спряжение глагола «být»".</strong>
          </p>
          <p>Вы можете её сохранить и распечатать, либо переписать в свою рабочую тетрадь.</p>
          <div>
            <img src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-Sloveso+Byt.png" alt="Byt" className="w-full" />
          </div>
        </div>

        <div>
          <p>
            Глагол <strong>"být"</strong> часто вызывает недоумение, когда же его использовать?
          </p>
          <p>
            Используется он в настоящем времени, когда у вас нет другого активного глагола (работаю, кушаю, смотрю).
          </p>
          <p>
            Например, сама форма “jsem” уже активная, она означает "я есть". И когда студенты говорят: "jsem pracuju",
            чехи это слышат, как "я есть, я работаю".
          </p>
          <p>Так "я есть", или "я работаю"? Поэтому достаточно сказать только "pracuju".</p>
          <p>В каких случаях в настоящем времени мы должны использовать глагол "být" (jsem, jsi, je и т. д.)?</p>

          <p>
            <strong>Когда мы употребляем глагол "být":</strong>
          </p>

          <p>
            <strong>1. Kdo jsem? (Кто я?)</strong>
          </p>
          <ul>
            <li>
              <i>Jsem Dáša.</i>
            </li>
            <li>
              <i>Jsem slečna.</i>
            </li>
            <li>
              <i>Jsem učitelka.</i>
            </li>
          </ul>

          <p>
            <strong>2. Jaký nebo jaká jsem? (Какой или какая я?)</strong>
          </p>
          <ul>
            <li>
              <i>Jsem vysoká.</i>
            </li>
            <li>
              <i>Jsem chytrá.</i>
            </li>
            <li>
              <i>Jsem veselá.</i>
            </li>
          </ul>

          <p>
            <strong>3. Kde jsem? Odkud jsem? (Где я? Откуда я?)</strong>
          </p>
          <ul>
            <li>
              <i>Jsem doma.</i>
            </li>
            <li>
              <i>Jsem v práci.</i>
            </li>
            <li>
              <i>Jsem z Ruska.</i>
            </li>
          </ul>
        </div>

        <div>
          <p>Прочтите и проговорите. </p>
          <p>
            <strong>ВАЖНО! Абсолютно всё проговаривайте вслух, прочитайте, отведите глаза и повторите.</strong>
          </p>

          <Table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Jsi doma?</td>
                <td>Odkud jsi?</td>
              </tr>
              <tr>
                <td>David je hezký.</td>
                <td>Lampa je bílá.</td>
              </tr>
              <tr>
                <td>Okno je čisté.</td>
                <td>Jsme cizinci.</td>
              </tr>
              <tr>
                <td>Kdo jste?</td>
                <td>Odkud jste?</td>
              </tr>
              <tr>
                <td>Odkud jsou?</td>
                <td>Proč jsou doma?</td>
              </tr>
              <tr>
                <td>Nejsem doma.</td>
                <td>Nejsi v práci.</td>
              </tr>
              <tr>
                <td>David není hezký.</td>
                <td>Lampa není černá.</td>
              </tr>
              <tr>
                <td>Okno není čisté.</td>
                <td>Okno není špinavé.</td>
              </tr>
              <tr>
                <td>Jsme z Ruska (Ukrajiny, Běloruska, Kazachstánu). </td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <FixingMaterialFrame text={'Для закрепления материала, выполните 2 теста:'} />
          <div className="my-3">
            <p>
              <strong>1. Doplňte formu slovesa být:</strong>
            </p>
            <p>
              <i>
                Vzor: Helena ... studentka. Helena <strong>je</strong> studentka.
              </i>
            </p>
            <PageLink href="https://7vovmq2cdjr.typeform.com/to/lJ5xHn3v" className={`custom-link`}>
              Тест 1. Doplňte formu slovesa být
            </PageLink>
          </div>
          <div className="my-3">
            <p>
              <strong>2. Doplňte tvary slovesa být:</strong>
            </p>
            <p>
              <i>
                Vzor: To ... stůl. To <strong>je</strong> stůl.
              </i>
            </p>
            <PageLink href="https://7vovmq2cdjr.typeform.com/to/u5fh1hrZ" className={`custom-link`}>
              Тест 2. Doplňte tvary slovesa být
            </PageLink>
          </div>
        </div>

        <div className="my-3">
          <p>Послушайте и повторите диалог вслух.</p>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-OPAKOV%C3%81N%C3%8D_SLOVESA_B%C3%9DT.mp3"></audio>
            <figcaption>
              <strong>Диалог B. Šimon a Jana</strong>
            </figcaption>
          </figure>
          <div className="dialogue">
            <p>
              <strong>Šimon:</strong> Ahoj Jano!
            </p>
            <p>
              <strong>Jana:</strong> Ahoj Šimone.
            </p>
            <p>
              <strong>Š:</strong> Prosím tě, jak se jmenuje ten nový profesor?
            </p>
            <p>
              <strong>J:</strong> Mládek. Doktor Mládek.
            </p>
            <p>
              <strong>Š:</strong> Nejmenuje se Petr?
            </p>
            <p>
              <strong>J:</strong> Ano, to je on.
            </p>
            <p>
              <strong>Š:</strong> Jéje. To je špatné! To je špatné!
            </p>
            <p>
              <strong>J:</strong> Promiň, já nerozumím. Co je špatné?
            </p>
            <p>
              <strong>Š:</strong> Co? Co je špatné? Petr Mládek. To je špatné!
            </p>
            <p>
              <strong>J:</strong> Aha.
            </p>
            <p>
              <strong>Š:</strong> Petr Mládek je nesympatický a zlý.
            </p>
            <p>
              <strong>J:</strong> Ne, ne. Je sympatický, mladý a inteligentní.
            </p>
            <p>
              <strong>Š:</strong> Jo, jo, jo.
            </p>
            <p>
              <strong>J:</strong> Šimone, já nerozumím.
            </p>
            <p>
              <strong>Š:</strong> Jo, jo. Chytrý je.
            </p>
            <p>
              <strong>J:</strong> Chytrý učitel. No, to je dobré, ne?
            </p>
            <p>
              <strong>Š:</strong> Ty jsi hodná. Mládek je chytrý, hodný není. Jo, a pozor, on není doktor, je docent.
            </p>
            <p>
              <strong>J:</strong> Docent? Aha, to je dobré.
            </p>
            <p>
              <strong>Š:</strong> No, to není dobré. To je... Ach jo.{' '}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center">OPAKOVÁNÍ SLOVESA «MÍT»</h2>
        <p>
          Глагол <strong>"mít"</strong> переводится как
          <strong>"иметь".</strong>
        </p>

        <p>
          <i>У меня есть машина - имею машину - mám auto.</i>
          <i>У меня нет машины - не имею машину - nemám auto.</i>
        </p>
        <p>
          Глагол "mít" используем с Akuzativem (винительный падеж):
          <strong> Mám koho? Mám co?</strong>
        </p>
        <p>Так же можем использовать его в связке с глаголом.</p>
        <p>
          <i>Например: Mám se zeptat. (Мне следует спросить.)</i>
        </p>
        <p>
          <strong>Подробнее об этом вы узнаете из темы "Модальные глаголы".</strong>
        </p>
        <div>
          <p>
            <strong>Посмотрите видео.</strong>
          </p>
          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/4HZ8upX4wTU"
              title="l1 OPAKOVÁNÍ SLOVESA MÍT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>

        <div>
          <p>
            <strong>Ниже представлена таблица "Спряжение глагола «mít»".</strong>
          </p>
          <p>
            <i>Вы можете её сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-SLOVESA+%C2%ABM%C3%8DT%C2%BB.png"
            alt=""
            className="w-full"
          />
        </div>

        <div>
          <p>
            <strong>Прочтите и проговорите.</strong>
          </p>

          <p>
            <strong>ВАЖНО! Абсолютно всё проговаривайте вслух, прочитайте, отведите глаза и повторите.</strong>
          </p>

          <p>Mám koho? Mám co?</p>
          <Table>
            <thead></thead>
            <tbody>
              <tr>
                <td>Mám kabelku.</td>
                <td>Mám lampu.</td>
              </tr>
              <tr>
                <td>Máš knihu.</td>
                <td>Máš přítelkyni.</td>
              </tr>
              <tr>
                <td>Můj kamarád má nové auto.</td>
                <td>Moje kamarádka má černou kočku.</td>
              </tr>
              <tr>
                <td>Máme nový byt.</td>
                <td>Máte doma televizi?</td>
              </tr>
              <tr>
                <td>Oni mají psa.</td>
                <td>Nemám auto.</td>
              </tr>
              <tr>
                <td>Nemáš knihu.</td>
                <td>Můj kamarád nemá přítelkyni.</td>
              </tr>
              <tr>
                <td>Nemáme dům.</td>
                <td>Nemáte psa.</td>
              </tr>
              <tr>
                <td>Nemají nový byt.</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <p>
            <strong>Послушайте и повторите диалог вслух. Выполните задания.</strong>
          </p>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-OPAKOV%C3%81N%C3%8D+SLOVESA+%C2%ABM%C3%8DT%C2%BB.mp3"></audio>
            <figcaption>
              <strong>Диалог A. Šimon a Matěj</strong>
            </figcaption>
          </figure>
          <div className="dialogue">
            <p>Šimon: Čau Matěji, tady Šimon.</p>
            <p>Matěj: Čau, Šimone.</p>
            <p>Š: Kde jsi? Madla a Ivana čekají. Ach jo, my dva jsme ale špatná návštěva.</p>
            <p>M: Ale ne, Šimone, jsme dobrá návštěva. Spěchám. Jaká je adresa?</p>
            <p>Š: Adresa je Nerudova ulice 2.</p>
            <p>M: Jsem tam hned. Hele, Šimone, máš nějaký dárek?</p>
            <p>Š: Mám víno.</p>
            <p>M: Hm, já víno nemám.</p>
            <p>Š: A ty, Matěji? Ty máš nějaký dárek?</p>
            <p>M: Ano, mám. Mám moc dobrý dárek.</p>
            <p>Š: Dobrý dárek? Co je dobrý dárek? Aha, rozumím. Máš dort!</p>
            <p>M: Prosím? Dort? Jaký dort?</p>
            <p>Š: Dobrý dárek je čokoládový dort, ne?</p>
            <p>M: Ne. Dort nemám.</p>
            <p>Š: Tak co máš?</p>
            <p>M: Ten dárek je červený, malý a hezký.</p>
            <p>Š: Prosím tě. Co to je? Je to červené víno?</p>
            <p>M: Víno to není! Je to hezký dárek.</p>
            <p>Š: Víno není dobrý dárek, jo?</p>
            <p>M: Ne, víno není dobrý dárek. To říkám já.</p>
          </div>
        </div>

        <div>
          <div className="questions">
            <p className="font-bold">1. Ответьте на вопросы:</p>
            <p>a) Jaká je adresa?</p>
            <p>b) Jaký dárek má Šimon? </p>
            <p>c) Jaký dárek má Matěj?</p>
          </div>
          <p>
            <strong>2. Найдите все формы глагола "mít".</strong>
          </p>
          <p>
            <strong>3. Поработайте с найденными формами глагола "mít". Покажите его форму.</strong>
          </p>
          <p>
            <i>Пример: ...máš (ty)</i>
          </p>
        </div>

        <div>
          <button onClick={() => e.toggleKey(1)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(1)} timeout={2000}>
            <section>
              <div className="questions">
                <p>
                  <strong>1. Ответьте на вопросы:</strong>
                </p>
                <p>a) Nerudova ulice (2 / číslo 2)</p>
                <p>b) Víno</p>
                <p>c) Červený (malý, hezký) dárek</p>
              </div>
              <div className="questions">
                <p>
                  <strong>2. Найдите все формы глагола "mít".</strong>
                </p>
                <p>Hele, máš nějaký dárek?Mám víno.</p>
                <p>Hm, tak já víno nemám.</p>
                <p>Matěji, a ty máš nějaký dárek?</p>
                <p>Já mám moc dobrý dárek.</p>
                <p>Máš dort!</p>
                <p>Tak co máš?</p>
                <p>Já mám hezký dárek.</p>
                <p>Mám moc hezký dárek.</p>
              </div>
              <div className="questions">
                <p>
                  <strong>3. Поработайте с найденными формами глагола "mít". Покажите его форму.</strong>
                </p>
                <p>máš (ty)</p>
                <p>mám (já)</p>
                <p>nemám (já)</p>
                <p>máš (ty)</p>
                <p>mám (já)</p>
                <p>máš (ty)</p>
                <p>máš (ty)</p>
                <p>mám (já)</p>
                <p>mám (já)</p>
              </div>
            </section>
          </Collapse>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-center">ČASOVÁNÍ SLOVES</h2>

          <p>
            <strong>Časování sloves </strong>- одна из самых важных тем, особенно неправильные глаголы.
          </p>
          <p>Важно с ними разобраться как можно быстрее, выучить и потом применять, говоря на чешском.</p>
        </div>
        <div>
          <p>
            <strong>Посмотрите видео.</strong>
          </p>
          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/w0stfF6nQtE"
              title="l1 ČASOVÁNÍ SLOVES"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <p>
            <strong>Ниже представлена таблица "Спряжение чешских глаголов".</strong>
          </p>
          <p>
            <i>Вы можете её сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-%C4%8CASOV%C3%81N%C3%8D+SLOVES.jpg"
            alt=""
            className="w-full"
          />
          <p>
            <strong>
              Ниже, в файле, представлена таблица "Часто распространенные неправильные глаголы в ческом языке".
            </strong>
          </p>

          <p>
            <i>Вы можете её сохранить и распечатать.</i>
          </p>
          <PdfFrame title={' Nepravidelná slovesa v českém jazyce'} />
        </div>
      </div>
      <div>
        <div>
          <p>
            <strong>Для закрепления материала выполните следующие упражнения:</strong>
          </p>
          <div>
            <p>
              <strong>
                1. Na obrázku vidíme slovesa, použitá v 3. osobě jednotného čísla (on, ona, ono), napište k nim
                infinitiv.
              </strong>
            </p>
            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-jednotn%C3%A9ho_%C4%8D%C3%ADsla_1.jpg"
              alt=""
              className="w-full"
            />
            <p className="italic">Vzor: Jde &#8594; Jít </p>
            <ul className="list-decimal">
              <li>Běží &#8594;</li>
              <li>Cvičí &#8594;</li>
              <li>Letí &#8594;</li>
              <li>Leze &#8594;</li>
              <li>Leží &#8594;</li>
              <li>Klečí &#8594;</li>
              <li>Hladí &#8594;</li>
            </ul>
            <button onClick={() => e.toggleKey(2)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={e.getValue(2)} timeout={2000}>
              <div className="kliche-container">
                <p>
                  Běží &#8594; <strong>Běžet</strong>
                </p>
                <p>
                  Cvičí &#8594; <strong>Cvičit</strong>
                </p>
                <p>
                  Letí &#8594; <strong>Letět</strong>
                </p>
                <p>
                  Leze &#8594; <strong>Lézt</strong>
                </p>
                <p>
                  Leží &#8594; <strong>Ležet</strong>
                </p>
                <p>
                  Klečí &#8594; <strong>Klečet</strong>
                </p>
                <p>
                  Hladí &#8594; <strong>Hladit</strong>
                </p>
              </div>
            </Collapse>
          </div>

          <div>
            <p>
              <strong>
                2. Na obrázku vidíme slovesa, použitá v 3. osobě jednotného čísla (on, ona, ono), přepište je v 1. osobě
                množného čísla (my).
              </strong>
            </p>
            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-jednotn%C3%A9ho_%C4%8D%C3%ADsla_2.jpg"
              alt=""
              className="w-full"
            />
            <p className="italic">Vzor: Měří tlak &#8594; Měříme tlak </p>
            <ul className="list-decimal">
              <li>Píchá &#8594;</li>
              <li>Rehabilituje &#8594;</li>
              <li>Maže &#8594;</li>
              <li>Kouří &#8594;</li>
              <li>Skáče &#8594;</li>
              <li>Vyvenčuje &#8594;</li>
              <li>Pere se &#8594;</li>
            </ul>
            <button onClick={() => e.toggleKey(3)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={e.getValue(3)} timeout={2000}>
              <div className="kliche-container">
                <p>
                  Píchá &#8594; <strong>Pícháme</strong>
                </p>
                <p>
                  Rehabilituje &#8594; <strong>Rehabilitujeme</strong>
                </p>
                <p>
                  Maže &#8594; <strong>Mažeme</strong>
                </p>
                <p>
                  Kouří &#8594; <strong>Kouříme</strong>
                </p>
                <p>
                  Skáče &#8594; <strong>Skáčeme</strong>
                </p>
                <p>
                  Vyvenčuje &#8594; <strong>Vyvenčujeme</strong>
                </p>
                <p>
                  Pere se &#8594; <strong>Pereme se</strong>
                </p>
              </div>
            </Collapse>
          </div>

          <div>
            <p>
              <strong>3. Na obrázku vidíme slovesa v infinitivu, přepište je do 3. osoby čísla množného (oni).</strong>
            </p>

            <p className="italic">
              U nepravidelných sloves můžete využít{' '}
              <a href="https://cs.wiktionary.org/" target="blank" className="custom-link">
                Wikislovník{' '}
              </a>
              nebo{' '}
              <a href=" https://prirucka.ujc.cas.cz/ nebo" target="blank" className="custom-link">
                Internetovou jazykovou příručku
              </a>
              , abyste se mohli dozvědět formu slovesa v 1. osobě čísla jednotného.
            </p>
            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-%C4%8D%C3%ADsla_mno%C5%BEn%C3%A9ho.jpg"
              alt=""
              className="w-full"
            />
            <p className="italic">Vzor: Jít na záchod &#8594; Jdou na záchod</p>
            <ul className="list-decimal">
              <li>Zamknout &#8594;</li>
              <li>Zamknout auto &#8594;</li>
              <li>Škrábat &#8594;</li>
              <li>Vytáhnout plevel &#8594;</li>
              <li>Vymačkat &#8594;</li>
              <li>Vážit &#8594;</li>
              <li>Péci &#8594;</li>
              <li>Koupat se &#8594;</li>
              <li>Předklonit se &#8594;</li>
              <li>Bublat &#8594;</li>
              <li>Skákat na míči &#8594;</li>
            </ul>
            <button onClick={() => e.toggleKey(4)} className="kliche-btn">
              Klíče
            </button>
            <Collapse isOpen={e.getValue(4)} timeout={2000}>
              <div className="kliche-container">
                <p>
                  Zamknout &#8594; <strong>Zamknou</strong>
                </p>
                <p>
                  Zamknout auto &#8594; <strong>Zamknou auto</strong>
                </p>
                <p>
                  Škrábat &#8594; <strong>Škrábou</strong>
                </p>
                <p>
                  Vytáhnout plevel &#8594; <strong>Vytáhnou</strong>
                </p>
                <p>
                  Vymačkat &#8594; <strong>Vymačkají</strong>
                </p>
                <p>
                  Vážit &#8594; <strong>Váží</strong>
                </p>
                <p>
                  Péci &#8594; <strong>Pečou</strong>
                </p>
                <p>
                  Koupat se &#8594; <strong>Koupou se</strong>
                </p>
                <p>
                  Předklonit se &#8594; <strong>Předkloní se</strong>
                </p>
                <p>
                  Bublat &#8594; <strong>Bublají</strong>
                </p>
                <p>
                  Skákat na míči &#8594; <strong>Skáčou na míči</strong>
                </p>
              </div>
            </Collapse>
          </div>
        </div>
        <div>
          <p>
            <strong className="yb">Послушайте и повторите диалог вслух. Выполните задание.</strong>
          </p>
          <figure>
            <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-02-07.mp3"></audio>
            <figcaption>
              <strong>Диалог C. Učitelka a Ivana</strong>
            </figcaption>
          </figure>

          <div className="dialogue">
            <p>
              <strong>Učitelka:</strong> Ivano, kde je Šimon?
            </p>
            <p>
              <strong>Ivana:</strong> Šimon tady není, paní učitelko. On sportuje.
            </p>
            <p>
              <strong>U:</strong> Prosím? My tady studujeme a Šimon sportuje?
            </p>
            <p>
              <strong>I:</strong> Šimon rád studuje. Je dobrý student.
            </p>
            <p>
              <strong>U:</strong> Nerozumím. Šimon je dobrý student a není tady?
            </p>
            <p>
              <strong>I:</strong> Ne, není.
            </p>
            <p>
              <strong>U:</strong> Prosím? A kde je?
            </p>
            <p>
              <strong>I:</strong> On lyžuje.
            </p>
            <p>
              <strong>U:</strong> Tak to ne! To není dobrý student. Tady je třída, tady nesportujeme, my tady studujeme.
            </p>
          </div>
          <p>
            <strong>1. Vypište všechna slovesa (i když se opakují), která jste uslyšeli v dialogu.</strong>
          </p>
          <button onClick={() => e.toggleKey(5)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(5)} timeout={2000}>
            <div className="kliche-container">
              <p className="italic">
                Není, sportuje, studujeme, sportuje, rád studuje, je, nerozumím, je, není, není, je, lyžuje, není, je,
                nesportujeme, studujeme.
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <p>
            <strong>Послушайте и повторите диалог вслух.</strong>
          </p>
          <figure>
            <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_1/l1-03-07.mp3"></audio>
            <figcaption>
              <strong>Диалог C. Návštěva. Ivana a Šimon</strong>
            </figcaption>
          </figure>
          <div className="dialogue">
            <p>
              <strong>Ivana:</strong> Šimone, posaď se.
            </p>
            <p>
              <strong>Šimon:</strong> Díky. Hele, mám tady tu hudbu.
            </p>
            <p>
              <strong>I:</strong> Jo, nějakou českou, ne? Tu máš moc rád.
            </p>
            <p>
              <strong>Š:</strong> No, hudba je česká, ale zpívají anglicky.
            </p>
            <p>
              <strong>I:</strong> Aha. Moment, kde mám počítač? Jo, tady. Tak, moment. Aaa. Tady máš naši hudbu. Znáš
              to?
            </p>
            <p>
              <strong>Š:</strong> Ne, neznám. To tady posloucháte?
            </p>
            <p>
              <strong>I:</strong> Ano. Madla to ráda poslouchá. Zpěvačka je Američanka a pozor, nezpívá anglicky, ale
              francouzsky.
            </p>
            <p>
              <strong>Š:</strong> To je super, já ale bohužel nemluvím francouzsky.
            </p>
            <p>
              <strong>I:</strong> Aha, jo. Moment, tady, to je hezké.
            </p>
            <p>
              <strong>Š:</strong> Aha. Jo, jo, to je dobré. Říkám ale, Ivano, nemluvím francouzsky a nezpívám!
            </p>
            <p>
              <strong>I:</strong> Tak jo, rozumím, nezpíváš. Dobře. Šimone, co si dáš k pití? Máme tady víno, pivo, džus
              a vodu.
            </p>
            <p>
              <strong>Š:</strong> Nečekáme na Matěje? Dobře. Dám si pivo.{' '}
            </p>
            <p>
              <strong>I:</strong> Tak jo, jsem tady hned.
            </p>
          </div>
        </div>

        <div>
          <FixingMaterialFrame
            text={'Для закрепления темы "Časování sloves" выполните тесты и дополнительные (добровольные) упражнения:'}
          />

          <p>
            <strong>1. Doplňte tvary přítomného času</strong>
          </p>
          <p>
            <strong>a) -á konjugace: vzor dělat (infinitiv na -at / -át, -ávat, -ívat, -ývat, -évat)</strong>
          </p>

          <a href="https://7vovmq2cdjr.typeform.com/to/hF2TqPbi" target="blank" className="custom-link">
            Тест 3. Doplňte tvary přítomného času
          </a>

          <GreenBox text={'Внимание! Задание b) выполняется по желанию.'} />
          <p>
            <strong>b) -á konjugace: vzor dělat (infinitiv na -at / -át, -ávat, -ívat, -ývat, -évat)</strong>
          </p>

          <Table>
            <thead></thead>

            <tbody>
              <tr>
                <td>vítat (já):</td>
                <td>... tě u nás v Praze.</td>
              </tr>
              <tr>
                <td>nechat (oni):</td>
                <td>... nám tady staré učebnice.</td>
              </tr>
              <tr>
                <td>prodávat (vy):</td>
                <td>... už zájezdy na letní sezonu?</td>
              </tr>
              <tr>
                <td>nazývat (my):</td>
                <td>... vše pravým jménem.</td>
              </tr>
              <tr>
                <td>získat (ona):</td>
                <td>Eva brzo ... diplom magistra ekonomie.</td>
              </tr>
              <tr>
                <td>užívat (oni):</td>
                <td>Po celý rok ... náš byt.</td>
              </tr>
              <tr>
                <td>hledat (ty):</td>
                <td>Co stále ...?</td>
              </tr>
              <tr>
                <td>žádat (my):</td>
                <td>... o prodloužení našeho pobytu.</td>
              </tr>
              <tr>
                <td>doufat (oni):</td>
                <td>..., že opět příští léto přijedou.</td>
              </tr>
              <tr>
                <td>zalévat (ty):</td>
                <td>Jak často ... pokojové květiny?</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={() => e.toggleKey(6)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(6)} timeout={2000}>
            <div className="kliche-container">
              <p>
                <strong>Vítám</strong> tě u nás v Praze.
              </p>
              <p>
                <strong>Nechají</strong> nám tady staré učebnice.
              </p>
              <p>
                <strong>Prodáváte</strong> už zájezdy na letní sezonu?
              </p>
              <p>
                <strong>Nazýváme</strong> vše pravým jménem.
              </p>
              <p>
                Eva brzo <strong>získá</strong> diplom magistra ekonomie.
              </p>
              <p>
                Po celý rok <strong>užívají</strong> náš byt.
              </p>
              <p>
                Co stále <strong>hledáš?</strong>
              </p>
              <p>
                <strong>Žádáme</strong> o prodloužení našeho pobytu.
              </p>
              <p>
                <strong>Doufají,</strong> že opět příští léto přijedou.
              </p>
              <p>
                Jak často <strong>zaléváš</strong> pokojové květiny?
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <p>
            <strong>c) -í konjugace: vzor mluvit (infinitiv na -it / -et / -ět)</strong>
            <a href="https://7vovmq2cdjr.typeform.com/to/AUCZZ5d0" target="blank">
              Тест 4. Doplňte tvary přítomného času
            </a>
          </p>
        </div>
        <div>
          <GreenBox text={'Внимание! Задание d) выполняется по желанию.'} />
          <p>
            <strong>d) -í konjugace: vzor mluvit (infinitiv na -it/-et/-ět)</strong>
          </p>
          <Table>
            <thead></thead>

            <tbody>
              <tr>
                <td>odcházet (vy):</td>
                <td>Proč ... tak brzo?</td>
              </tr>
              <tr>
                <td>otáčet se (on):</td>
                <td>Petr se nervózně ... po kolemjdoucích.</td>
              </tr>
              <tr>
                <td>čistit (já):</td>
                <td>Nerada ... zimní boty.</td>
              </tr>
              <tr>
                <td>přicházet (oni):</td>
                <td>Stále ... další studenti a studentky.</td>
              </tr>
              <tr>
                <td>vyprávět (oni):</td>
                <td>Rodiče často ... o svém dětství.</td>
              </tr>
              <tr>
                <td>chybět (ona):</td>
                <td>Dnes ... polovina posluchačů a posluchaček.</td>
              </tr>
              <tr>
                <td>chytit (ty):</td>
                <td>Myslím si, že mě ne .... </td>
              </tr>
              <tr>
                <td>ležet (ona):</td>
                <td>Je nemocná, ... v posteli.</td>
              </tr>
              <tr>
                <td>vracet se (on):</td>
                <td>Martin se rád ... do rodného města.</td>
              </tr>
              <tr>
                <td>jíst (oni):</td>
                <td>Studenti a studentky rádi ... smažený sýr.</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={() => e.toggleKey(7)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(7)} timeout={2000}>
            <div className="kliche-container">
              <p>
                Proč <strong>odcházíte</strong> tak brzo?
              </p>
              <p>
                Petr <strong>se</strong> nervózně <strong>otáčí</strong> po kolemjdoucích.
              </p>
              <p>
                Nerada <strong>čistím</strong> zimní boty.
              </p>
              <p>
                Stále <strong>přicházejí</strong> další studenti a studentky.
              </p>
              <p>
                Rodiče často <strong>vyprávějí</strong> o svém dětství.
              </p>
              <p>
                Dnes <strong>chybí</strong> polovina posluchačů a posluchaček.
              </p>
              <p>
                Myslím si, že mě ne <strong>chytíš.</strong>{' '}
              </p>
              <p>
                Je nemocná, <strong>leží</strong> v posteli.
              </p>
              <p>
                Martin se rád <strong>vrací</strong> do rodného města.
              </p>
              <p>
                Studenti a studentky rádi <strong>jedí</strong> smažený sýr.
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <p>
            <strong>
              e) -e konjugace: vzor nést (infinitiv na -at / -át, -ít, -st, -zt, -ct + nepravidelná slovesa)
            </strong>
          </p>
          <a href="https://7vovmq2cdjr.typeform.com/to/pAwTHKYP" target="blank" className="custom-link">
            Тест 5. Doplňte tvary přítomného času
          </a>
          <p className="gb">Внимание! Задание f) выполняется по желанию.</p>
        </div>
        <div>
          <p>
            <strong>
              f) -e konjugace: vzor nést (infinitiv na -at / -át, -ít, -st, -zt, -ct + nepravidelná slovesa)
            </strong>
          </p>
          <Table>
            <thead></thead>

            <tbody>
              <tr>
                <td>kvést (ona):</td>
                <td>Naše zahrada na jaře krásně .... </td>
              </tr>
              <tr>
                <td>plavat (oni):</td>
                <td>Rádi ... v moři.</td>
              </tr>
              <tr>
                <td>ukázat (my):</td>
                <td>Včas vám ... svůj návrh.</td>
              </tr>
              <tr>
                <td>prát (já):</td>
                <td>Prádlo ... v pračce, ale svetry v ruce.</td>
              </tr>
              <tr>
                <td>mazat (ona):</td>
                <td>Jitka ... chlebíčky pomazánkou.</td>
              </tr>
              <tr>
                <td>lézt (ony):</td>
                <td>Děti jsou neopatrné a všude ....</td>
              </tr>
              <tr>
                <td>otevřít (já):</td>
                <td>... na chvíli okno, je tu moc teplo.</td>
              </tr>
              <tr>
                <td>plakat: (ona)</td>
                <td>Evička upadla a ....</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={() => e.toggleKey(8)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(8)} timeout={2000}>
            <div className="kliche-container">
              <p>
                Naše zahrada na jaře krásně <strong>kvete.</strong>
              </p>
              <p>
                Rádi <strong>plavou</strong> v moři.
              </p>
              <p>
                Včas vám <strong>ukážeme</strong> svůj návrh.
              </p>
              <p>
                Prádlo <strong>peru</strong> v pračce, ale svetry v ruce.
              </p>
              <p>
                Jitka <strong>maže</strong> chlebíčky pomazánkou.
              </p>
              <p>
                Děti jsou neopatrné a všude <strong>lezou.</strong>
              </p>
              <p>
                <strong>Otevřu</strong> na chvíli okno, je tu moc teplo.
              </p>
              <p>
                Evička upadla a <strong>pláče.</strong>
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <p>
            <strong>g) -ne konjugace: vzor tisknout (infinitiv na -nout, -at, -ít)</strong>
          </p>
          <a href="https://7vovmq2cdjr.typeform.com/to/c2mPehgX" className="custom-link">
            Тест 6. Doplňte tvary přítomného času
          </a>
        </div>
        <div>
          <GreenBox text={'Внимание! Задание h) выполняется по желанию.'} />
          <p>
            <strong>h) -ne konjugace: vzor tisknout (infinitiv na -nout, -at, -ít)</strong>
          </p>
          <Table>
            <thead></thead>

            <tbody>
              <tr>
                <td>vládnout (on):</td>
                <td>Kdo ... ve Velké Británii? </td>
              </tr>
              <tr>
                <td>vzpomenout si (my):</td>
                <td>... na příhodu z dovolené. </td>
              </tr>
              <tr>
                <td>zůstat (oni):</td>
                <td>... na chatě ještě týden.</td>
              </tr>
              <tr>
                <td>stát se (on):</td>
                <td>Za pět let ... právníkem.</td>
              </tr>
              <tr>
                <td>odpočinout si (vy):</td>
                <td>Až ..., půjdeme se projít.</td>
              </tr>
              <tr>
                <td>říct (ty):</td>
                <td>Co mi k tomu ...?</td>
              </tr>
              <tr>
                <td>dostat se (já):</td>
                <td>Jak se ... na nádraží?</td>
              </tr>
              <tr>
                <td>začít (my):</td>
                <td>..., až tady budou všichni.</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={() => e.toggleKey(9)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(9)} timeout={2000}>
            <div className="kliche-container">
              <p>
                Kdo <strong>vládne</strong> ve Velké Británii?{' '}
              </p>
              <p>
                <strong>Vzpomeneme si</strong> na příhodu z dovolené.
              </p>
              <p>
                <strong>Zůstanou</strong> na chatě ještě týden.
              </p>
              <p>
                Za pět let <strong>se stane</strong> právníkem.
              </p>
              <p>
                Až <strong>si odpočinete,</strong> půjdeme se projít.
              </p>
              <p>
                Co mi k tomu <strong>řekneš?</strong>
              </p>
              <p>
                Jak se <strong>dostanu</strong> na nádraží?
              </p>
              <p>
                <strong>Začneme</strong> , až tady budou všichni.
              </p>
            </div>
          </Collapse>
        </div>
        <div>
          <p>
            <strong>
              i) -uje konjugace: vzor kupovat / -je konjugace: vzor mýt (infinitiv na -ovat, -át, -out, -ýt, -ít)
            </strong>
          </p>
          <a href="https://7vovmq2cdjr.typeform.com/to/wtN9aQbx" target="blank" className="custom-link">
            Тест 7. Doplňte tvary přítomného času
          </a>
        </div>
        <div>
          <GreenBox text={'Внимание! Задание k) выполняется по желанию.'} />

          <p>
            <strong>
              k) -uje konjugace: vzor kupovat / -je konjugace: vzor mýt (infinitiv na -ovat, -át, -out, -ýt, -ít)
            </strong>
          </p>

          <Table>
            <thead></thead>

            <tbody>
              <tr>
                <td>zout se (já):</td>
                <td>... hned v předsíni.</td>
              </tr>
              <tr>
                <td>mýt (on):</td>
                <td>Bratr ... podlahu každou sobotu.</td>
              </tr>
              <tr>
                <td>hřát (ony):</td>
                <td>Nové rukavice a nová čepice mě ....</td>
              </tr>
              <tr>
                <td>pít (já):</td>
                <td>Rád ... černé pivo.</td>
              </tr>
              <tr>
                <td>žít (vy):</td>
                <td>Je pravda, že ... na venkově?</td>
              </tr>
              <tr>
                <td>hrát (my):</td>
                <td>... tenis každou sobotu. </td>
              </tr>
              <tr>
                <td>obout se (ty):</td>
                <td>... sám, nebo ti mám pomoct? </td>
              </tr>
              <tr>
                <td>šít (já):</td>
                <td>Ty kalhoty si ... podle nového střihu.</td>
              </tr>
            </tbody>
          </Table>
          <button onClick={() => e.toggleKey(10)} className="kliche-btn">
            Klíče
          </button>
          <Collapse isOpen={e.getValue(10)} timeout={2000}>
            <div className="kliche-container">
              <p>
                <strong>Zuju</strong> se hned v předsíni.
              </p>
              <p>
                Bratr <strong>myje</strong> podlahu každou sobotu.
              </p>
              <p>
                Nové rukavice a nová čepice mě <strong>hřejí.</strong>
              </p>
              <p>Rád piju černé pivo.</p>
              <p>
                Je pravda, že <strong>žijete</strong> na venkově?
              </p>
              <p>
                <strong>Hrajeme</strong> tenis každou sobotu.
              </p>
              <p>
                <strong>Obuješ se</strong> sám, nebo ti mám pomoct?
              </p>
              <p>
                Ty kalhoty si <strong>šiju</strong> podle nového střihu.
              </p>
            </div>
          </Collapse>
        </div>
      </div>

      <LessonFarewell />
    </div>
  );
};

export default One;
