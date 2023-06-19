import React from 'react';
import PageLink from '../../../../../components/PageLink';
import LessonFarewell from '../../../../../components/UI/LessonFarewell';
import PdfFrame from '../../../../../components/UI/PdfFrame';
import GreenBox from '../../../../../components/UI/GreenBox';
import FixingMaterialFrame from '../../../../../components/UI/FixingMaterialFrame';
import { Collapse, Table } from 'reactstrap';
import useKeyOpen from '../../../../../hooks/useKeyOpen';
import useAuth from '../../../../../hooks/useAuth';

const Three = () => {
  const keys = useKeyOpen(9);
  const isAuth = useAuth();

  if (!isAuth) {
    return <>{isAuth}</>;
  }
  return (
    <div>
      <div className="container mx-auto bg-gray-100 rounded-lg p-6">
        <h1 className="text-center text-3xl font-bold underline">2. lekce</h1>
        <p className="text-center"> Minulý čas, se / si, ses / sis a modální slovesa </p>
        <div className="mt-4 flex justify-between items-center">
          <PageLink href="./2" className={`flex flex-col items-start`}>
            <span className="text-blue-500 hover:underline">Предыдущий урок</span>
            <span className="mt-2">2. lekce</span>
          </PageLink>
          <PageLink href="./4" className={`flex flex-col items-end`}>
            <span className="text-blue-500 hover:underline">Следующий урок</span>
            <span className="mt-2">4. lekce</span>
          </PageLink>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-4">Добрый день, дорогие друзья!</h1>
      </div>

      <div className="frame">
        <p>В этой лекции нас ждёт одна из самых «бесконечных», но очень важных тем.</p>
        <p>Речь пойдёт о видах глаголов — совершенных и несовершенных действиях.</p>
        <div>
          <p className="font-bold">Например:</p>
          <ul>
            <li>делать — сделать</li>
            <li>читать — прочитать</li>
            <li>смотреть — посмотреть</li>
          </ul>
        </div>
        <p>
          В чешском языке глаголов много и почти у каждого есть пара. Иногда совершенный вид образуется с помощью
          предлога, иногда при помощи суффикса, а иногда просто изменятся сам глагол.
        </p>
        <p className="font-bold">Надеемся вы разберётесь с этой интересной темой.</p>
      </div>

      <div className="mt-12">
        <div className="text-center font-bold">
          <h2>IMPERFEKTIVNÍ (NEDOKONAVÁ) SLOVESA</h2>
          <p>Несовершенный вид (proces)</p>
        </div>

        <div>
          <ul>
            <li className="mt-3">
              <strong> děj není ukončen</strong> (nevíme nebo není důležité, jestli byl děj ukončen, nebo ne),
              <i>
                např. číst, psát, vařit, stát, jít (např. psal jsem dopis – nevíme, jestli jsem ten dopis dopsal,
                dokončil);
              </i>
            </li>
            <li className="mt-3">
              <i>
                действие не закончено (не знаем или не важно, если действие закончено или нет), например, читать,
                писать, готовить, стоять, идти (например, я писал письмо - не знаем, если это письмо дописал, закончил);
              </i>
            </li>
            <li className="mt-3">
              <strong>můžou vyjadřovat opakování</strong>,<i>např. navštěvovat, vídat, mívat, chodívat;</i>
              <strong> to platí i pro momentální slovesa,</strong>
              <i>např. usínat, sedávat, vykřikovat;</i>
            </li>
            <li className="mt-3">
              <i>
                могут выражать повторение, например, навещать, видать, иметь (повторно), похаживать, это может касаться
                и моментальных глаголов, засыпать, садиться, выкрикивать.
              </i>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="font-bold text-center">
          <h2>PERFEKTIVNÍ (DOKONAVÁ) SLOVESA</h2>
          <p>Совершенный вид (однократное действие)</p>
        </div>
        <div>
          <ul>
            <li className="mt-3">
              <strong>vyjadřují děj, který byl nebo bude ukončen</strong> (děj je hotový, nepokračuje či nepokračoval,
              dosáhl cíle – nejde o čas, ale o kompletnost),
              <i> např. přečíst, napsat, uvařit, postavit, přijít;</i>
            </li>
            <li className="mt-3">
              <i>
                выражает действие, которое было закончено или будет закончено (действие закончено, не продолжается или
                не продолжалось, достиг цели - не идёт речь о времени, скорее о завершенности), например, прочитать,
                написать, сварить, построить, прийти;
              </i>
            </li>
            <li className="mt-3">
              <strong>momentální slovesa (jednorázová)</strong> – děj je velmi krátký (velmi krátký moment), akce nemůže
              trvat dlouho, proto ji nemůžeme ani ukončit,
              <i> např. usnout, sednout si, vykřiknout;</i>
            </li>
            <li className="mt-3">
              <i>моментальные глаголы - действие короткое, например, уснуть, сесть, выкрикнуть;</i>
            </li>
            <li className="mt-3">
              <strong> nemají tvar prézentu, ale jen tvary budoucího</strong>
              <i>(např. udělám)</i> a <strong>minulého času </strong>
              <i>(např. udělal jsem).</i>
            </li>
          </ul>
        </div>

        <hr />
        <div>
          <p className="font-bold">Посмотрите видео с Дарьей.</p>
          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/rIK1zF8H4Vk"
              title="3  PERFEKTIVNÍ DOKONAVÁ SLOVESA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          <div className="italic">
            <p className="font-bold">Slovní zásoba z videa.</p>

            <div className="line-h-08-container mt-10">
              <p>Pár — пара </p>
              <p>Párek — парочка (сосиска)</p>
            </div>

            <p className="font-bold mt-10">Příklady z videa</p>

            <div className="line-h-08-container mt-10">
              <p className="font-bold text-danger">Pozor!</p>
              <p className="text-red-600">Vracet se — Vrátit se</p>
            </div>
            <div className="line-h-08-container mt-10">
              <p>Každé ráno dělám sendviče, ale zítra udělám omeletu.</p>
              <p>Často čtu pět stránek, ale v neděli přečtu deset.</p>
              <p>Nikdy nekupuju sýr, ale večer ho koupím protože chci pizzu.</p>
              <p>Nikdy nečekám ve frontě, ale zítra budu muset počkat protože nejsem objednána.</p>
            </div>
            <div className="line-h-08-container mt-10">
              <p>Udělám to zítra / v neděli / za sekundu / za minutu.</p>
              <p>Večer přečtu celou knížku.</p>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <p className="font-bold">Скачайте таблицу, распечатайте и заполните её.</p>

          <PdfFrame
            title={' Perfektivní a imperfektivní slovesa'}
            href={'https://czecha2bucket.s3.amazonaws.com/lekce_3/Perfektivn%C3%AD+a+imperfektivn%C3%AD+slovesa.pdf'}
          />
        </div>

        <div className="italic line-h-08-container">
          <p className="font-bold">Vzor:</p>
          <p>dávat &#8594; dávám &#8594; budu dávat &#8594; dávala jsem</p>
          <p>dát &#8594; xxx &#8594; dám &#8594; dala jsem </p>
          <p>dělat &#8594; dělám &#8594; budu dělat &#8594; dělala jsem</p>
          <p>udělat &#8594; xxx &#8594; udělám &#8594; udělal jsem</p>
          <p>dívat se &#8594; dívám se &#8594; budu se dívat &#8594; dívala jsem se</p>
          <p>podívat se &#8594; xxx &#8594; podívám se &#8594; podívala jsem se</p>
        </div>

        <hr />
        <div className="text-center">
          <p className="font-bold ">Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na Quizlet:</p>
          <p className="text-lg font-bold">Perfektivní a imperfektivní slovesa</p>
          <a href="https://quizlet.com/_cx8aof?x=1jqt&i=3zq2hw" target="blank" className="custom-btn">
            OTEVŘÍT KARTIČKY
          </a>
        </div>

        <hr />
        <div>
          <p className="font-bold">Просмотрите видео с Дарьей.</p>
          <p className="font-bold text-red-600">
            <i>Важное дополнение к глаголам!</i>
          </p>

          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/NU4IOtlJhKw"
              title="3  lekce"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          <p className="font-bold">Slova z videa</p>

          <div className="italic line-h-08-container">
            <div className="mt-6">
              <p>Chodit / jít </p>
              <p>Jezdit / jet</p>
            </div>
            <div className="mt-6">
              <p>Chodili jsme do kina / restaurace</p>
              <p>Jezdili jsme do Itálie / Španělska / Francie </p>
            </div>
          </div>

          <hr />

          <div>
            <p className="font-bold">Выполните задания с №1 по №14.2.</p>

            <div className="italic">
              <p className="font-bold">Пометка к заданиям №1 и №2.</p>
              <p>
                Руководствуйтесь вопросами: <strong>«что делать?»</strong> и<strong>«что сделать?».</strong>
              </p>
              <div className="line-h-08-container">
                <p>Это Вам поможет найти пару.</p>
                <p>
                  <strong>Например:</strong> «что делать? — обедать», «что сделать? — ПОобедать».
                </p>
              </div>
              <p>
                <strong>Найдите необходимое слово в словаре и используйте его.</strong>
              </p>
            </div>

            <GreenBox
              text="Внимание! Задание №1 проверит преподаватель."
              subtitle=" Ответы запишите в формате аудио и отправьте их на проверку в группу Telegram c преподавателем или с
                  потоком."
            />

            {/* The first task */}
            <div>
              <p className="font-bold">
                1. Zaznamenejte na audio, jak převádíte slovesa z nedokonavého vidu do dokonavého.
              </p>
              <p>
                <i>1. Запишите аудио, как вы переводите глаголы из несовершенного вида в совершенный.</i>
              </p>

              <p className="font-bold">
                <i>Podívejte se na obrázek č. 1.</i>
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_3/Pod%C3%ADvejte+se+na+obr%C3%A1zek+%C4%8D.+1..jpg"
                  alt=""
                  className="w-full"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 1.</i>
                  </strong>
                </figcaption>
              </figure>

              <p>
                <i>
                  <strong>Vzor:</strong> Už platíte? &#8594;
                  <strong>Už zaplatíte?</strong>
                </i>
              </p>

              <hr />

              <div className="d-flex justify-content-between line-h-08-container">
                <div>
                  <p>1. Vaříš oběd?</p>
                  <p>2. Díváš se z okna?</p>
                  <p>3. Piješ ten čaj?</p>
                  <p>4. Jíš ten hamburger?</p>
                  <p>5. Už končíš?</p>
                  <p>6. Film už začíná?</p>
                  <p>7. Opakujou v televizi inauguraci?</p>
                  <p>8. Už snídáš?</p>
                  <p>9. Už večeříte?</p>
                </div>
                <div>
                  <p>10. Eva už obědvá?</p>
                  <p>11. Už se oblékáš?</p>
                  <p>12. Posloucháš nového Stinga?</p>
                  <p>13. Prohlížíš si ten nový katalog?</p>
                  <p>14. Už vystupujete?</p>
                  <p>15. Přestupujeme ted'?</p>
                  <p>16. Vracíte se ještě dneska?</p>
                  <p>17. Víš už, jestli přijedou?</p>
                  <p>18. Bereš si tašku?</p>
                </div>
              </div>

              <hr />

              <GreenBox
                text="Внимание! Задание №1 проверит преподаватель."
                subtitle="  Ответы запишите в формате аудио и отправьте их на проверку в группу Telegram c преподавателем или с
                    потоком."
              />
            </div>

            <hr />

            {/* The second task */}

            <div>
              <p className="font-bold">
                2. Zaznamenejte na audio, jak převádíte slovesa z dokonavého vidu do nedokonavého.
              </p>
              <p>
                <i>2. Запишите аудио, как вы переводите глаголы из совершенного вида в несовершенный.</i>
              </p>

              <p className="font-bold">
                <i>Podívejte se na obrázek č. 2.</i>
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_3/Pod%C3%ADvejte+se+na+obr%C3%A1zek+%C4%8D.+2..jpg"
                  alt=""
                  className="w-full"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 2.</i>
                  </strong>
                </figcaption>
              </figure>

              <p>
                <i>
                  <strong>Vzor:</strong> Uděláte toto cvičení? &#8594;
                  <strong>Děláte toto cvičení?</strong>
                </i>
              </p>

              <hr />

              <div className="d-flex justify-content-between line-h-08-container">
                <div>
                  <p>1. Zatelefonuješ domů?</p>
                  <p>2. Přečtete si tu informaci?</p>
                  <p>3. Zopakuješ si gramatiku?</p>
                  <p>4. Uvaříš kafe?</p>
                  <p>5. Vypiješ tu minerálku?</p>
                  <p>6. Naobědváš se potom?</p>
                  <p>7. Odpočineš si večer?</p>
                  <p>8. Prohlédnete si tu učebnici?</p>
                  <p>9. Koupíš ještě tři lístky?</p>
                </div>
                <div>
                  <p>10. Myslíš, že si vzpomeneš?</p>
                  <p>11. Kdy začne ten koncert?</p>
                  <p>12. Vystoupíš taky na stanici Můstek?</p>
                  <p>13. Vybereš si potom nějakou knihu?</p>
                  <p>14. Odpovědí na otázku?</p>
                  <p>15. Řeknou to v rádiu?</p>
                  <p>16. Musíš vstát, je pozdě?</p>
                  <p>17. Vezmeš si telefonní kartu?</p>
                </div>
              </div>
            </div>

            <hr />

            {/* The third task */}
            <div>
              <p className="font-bold">
                3. Spojte imperfektivní a perfektivní slovesa. Pak je zapište v pořadí imperfektivní / perfektivní.
              </p>
              <p>
                <i>
                  3. Соедините глаголы совершенного и несовершенного вида. После запишите их в таком порядке
                  несовершенный / совершенный глагол.
                </i>
              </p>
              <div className="line-h-08-container">
                <p className="font-bold">Vzor: </p>
                <p>
                  <strong>1. &#8594; B. </strong>
                  <i>(Dělat &#8594; Udělat)</i>
                </p>
                <Table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="font-bold line-through">1. Dělat</td>
                      <td>
                        <strong>A.</strong> Vytřít
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>2.</strong> Nakupovat
                      </td>
                      <td className="font-bold line-through">B. Udělat</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>3.</strong> Vařit
                      </td>
                      <td>
                        <strong>C.</strong> Nakoupit
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>4.</strong> Vytírat
                      </td>
                      <td>
                        <strong>D.</strong> Upéct
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>5.</strong> Uklízet
                      </td>
                      <td>
                        <strong>E.</strong> Uvařit
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>6.</strong> Péct
                      </td>
                      <td>
                        <strong>F.</strong> Sníst
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>7.</strong> Jíst
                      </td>
                      <td>
                        <strong>G.</strong> Uklidit
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div>
                  <button onClick={() => keys.toggleKey(1)} className="kliche-btn">
                    Klíče
                  </button>
                  <Collapse isOpen={keys.getValue(1)} timeout={2000}>
                    <div>
                      <p>
                        <strong>1. &#8594; B.</strong> (Dělat &#8594; Udělat)
                      </p>
                      <p>
                        <strong>2. &#8594; C.</strong> (Nakupovat &#8594; Nakoupit)
                      </p>
                      <p>
                        <strong>3. &#8594; E.</strong> (Vařit &#8594; Uvařit)
                      </p>
                      <p>
                        <strong>4. &#8594; A.</strong>(Vytírat &#8594; Vytřít)
                      </p>
                      <p>
                        <strong>5. &#8594; G.</strong> (Uklízet &#8594; Uklidit)
                      </p>
                      <p>
                        <strong>6. &#8594; D.</strong> (Péct &#8594; Upéct)
                      </p>
                      <p>
                        <strong>7. &#8594; F. </strong> (Jíst &#8594; Sníst)
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            <hr />

            {/* The 4th task */}
            <div>
              <GreenBox
                text="Внимание! Задание №1 проверит преподаватель."
                subtitle="  Ответы запишите в формате аудио и отправьте их на проверку в группу Telegram c преподавателем или с
                    потоком."
              />

              <p className="font-bold">4. Zaznamenejte na audio, kdo co udělal na obrázku č. 3.</p>

              <div className="italic">
                <p>
                  <strong>Například:</strong> 1. Adam vymaloval byt.
                </p>

                <div className="text-red-600 line-h-08-container">
                  <p>
                    <strong>Pozor!</strong>
                  </p>
                  <p>
                    <strong>Všechna slovesa mají dokonavý vid.</strong>
                  </p>
                  <p>Внимание!</p>
                  <p>Все глаголы имеют совершенный вид (однократное действие).</p>
                </div>
              </div>

              <div>
                <figure>
                  <img
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_3/Obr%C3%A1zek+%C4%8D.+3..jpg"
                    alt=""
                    className="w-full"
                  />
                  <figcaption>
                    <strong>
                      <i>Obrázek č. 3.</i>
                    </strong>
                  </figcaption>
                </figure>
                <div className="d-flex justify-content-between line-h-08-container">
                  <div>
                    <p>1. Umyla nádobí.</p>
                    <p>2. Napsal dopis.</p>
                    <p>3. Zametl podlahu.</p>
                    <p>4. Upekla pizzu.</p>
                    <p>5. Uvařil večeři.</p>
                    <p>6. Uklidila byt.</p>
                  </div>
                  <div>
                    <p>7. Napsal dobře test.</p>
                    <p>8. Vymaloval byt.</p>
                    <p>9. Vyprala prádlo.</p>
                    <p>10. Zalila kytky.</p>
                    <p>11. Vytřela podlahu.</p>
                    <p>12. Umyl okno.</p>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* Task 5 */}
            <div>
              <p className="font-bold">
                5. Dejte sloveso do správné formy, opírejte se na smysl. Pracujte podle vzoru.
              </p>
              <p>
                <i>5. Поставьте глагол в нужную форму, опираясь на смысл предложения. Работайте по образцу.</i>
              </p>

              <div className="text-red-600 line-h-08-container">
                <p>
                  <strong>Pozor!</strong>
                </p>
                <p>
                  <strong>Ve větách můžeme uvidět jak budoucí čas, tak minulý.</strong>
                </p>
                <p>Внимание!</p>
                <p>В предложениях будет встречаться как будущее время, так и прошедшее.</p>
              </div>

              <Table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Komu: erik.gun@dobry.cz</td>
                  </tr>
                  <tr>
                    <td>Kopie:</td>
                  </tr>
                  <tr>
                    <td>Předmět: nové zprávy od Richarda</td>
                  </tr>
                </tbody>
              </Table>

              <div>
                <p>
                  Ahoj Eriku,
                  <br />
                  <br />
                  doufám, že se máš dobře a že se ti na univerzitě v Brně líbí. Určitě víš, že já teď studuju českou
                  literaturu v Praze. Příští týden <strong>(vzor) ...poletím...</strong> <i>(letět)</i> na studijní
                  pobyt do Londýna. <strong>a)</strong> ...............
                  <i>(vézt)</i> tam jeden důležitý projekt o Karlu Čapkovi. O tom projektu budeme v Londýně hodně
                  mluvit. V Anglii budu potřebovat ještě jednu knihu o české literatuře. Celý minulý týden{' '}
                  <strong>b)</strong>
                  ............... <i>(běhat)</i> z knihovny do knihovny a hledal jsem ji. Nikde ji ale neměli. Byl jsem
                  naštvaný. Myslel jsem si, že <strong>c)</strong> ............... <i>(muset letět)</i> do Londýna bez
                  ní. Můj kamarád mi říkal, že tu knihu mají v knihovně v Plzni. <strong>d)</strong> ...............
                  <i>(jít)</i> do knihovny naproti naší univerzitě, kde pracuje jedna hezká slečna. Zeptal jsem se jí na
                  tu knihu. Ona mi říkala, že si ji můžu objednat. Každý pátek prý <strong>e)</strong>
                  ............... <i>(vozit — oni)</i> do Prahy knihy z celé republiky. Měl jsem z té zprávy radost. V
                  pátek <strong>f)</strong>
                  ............... <i>(přijít)</i> do knihovny a kniha tam opravdu byla. Byla ale velká a těžká. Vůbec
                  jsem nevěděl, jak ji <strong>g)</strong>
                  ............... <i>(nést)</i> na kolej. Myslel jsem, že <strong>h)</strong>
                  ............... <i>(jet)</i> autobusem, ale zastávka byla moc daleko. Ta hezká slečna (jmenuje se
                  Monika) mi řekla, že <strong>i)</strong>
                  ............... <i>(moct jet — my)</i> spolu a že mi ráda pomůže. <strong>j)</strong> ...............{' '}
                  <i>(vézt — my)</i>
                  tu knihu autobusem a moc hezky jsme si povídali o literatuře. Monika byla velmi milá a příjemná. Asi
                  se ptáš, proč ti o tom píšu. Nevíš? Z Londýna se vrátím příští pondělí a hned v úterý{' '}
                  <strong>k)</strong> ............... <i>(jít)</i>Monika a já na večeři. Můžeš mi prosím poradit, do
                  které restaurace máme jít? Díky. Už se na setkání a na Moniku moc těším.
                  <br />
                  <br />
                  Čau <br /> Richard
                </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(2)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(2)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>a) Povezu / Vezu</p>
                    <p>b) jsem běhal</p>
                    <p>c) budu muset letět / musím letět</p>
                    <p>d) Šel jsem</p>
                    <p>e) vozí</p>
                    <p>f) jsem přišel</p>
                    <p>g) ponesu</p>
                    <p>h) pojedu</p>
                    <p>i) můžeme jet / budeme moct jet</p>
                    <p>j) Vezli jsme</p>
                    <p>k) půjdeme / jdeme</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />

            {/* Task 6 */}
            <div>
              <FixingMaterialFrame text="6. Vyplníte test 8. Vyberte vhodné sloveso a doplňte ho ve správném tvaru." />

              <p>
                <i>6. Пройдите тест №8. Выберите подходящую форму глагола и дополните его в правильной форме.</i>
              </p>
              <p>
                <strong>Vzor:</strong>{' '}
                <i>
                  číst — přečíst: Promiň, teď nemám čas <strong>číst, přečtu</strong> si to večer.
                </i>
              </p>
              <PageLink href="https://7vovmq2cdjr.typeform.com/to/V9i3eI1t" className={`custom-link`}>
                Test 8. Vyberte vhodné sloveso a doplňte ho ve správném tvaru
              </PageLink>
            </div>

            <hr />
            {/* Task 7 */}
            <div>
              <GreenBox text={'Внимание! Задание №7 выполняется по желанию.'} />

              <FixingMaterialFrame text="7. Vyplníte test 9. Vyberte vhodné sloveso a doplňte ho ve správném tvaru." />

              <p>
                <i>7. Пройдите тест №9. Выберите подходящую форму глагола и дополните его в правильной форме.</i>
              </p>

              <p>
                <i>Обращайте внимание на лицо и число по вспомогательному глаголу (jsem, jste atd.).</i>
              </p>
              <PageLink href="https://7vovmq2cdjr.typeform.com/to/v56NKGK3" className={`custom-link`}>
                Test 9. Vyberte vhodné sloveso a doplňte ho ve správném tvaru
              </PageLink>

              <hr />
              <div>
                <p className="font-bold ">Возьмите на заметку.</p>
                <div className="frame">
                  <p>
                    В чешском языки есть интересное явление как суффикс «<span className="font-bold ">-va</span>
                    ».
                  </p>

                  <div className="italic line-h-08-container">
                    <p className="font-bold">Например:</p>
                    <p>
                      <strong>mít — mívat </strong>(иметь — иметь (повторяется));
                    </p>
                    <p>
                      <strong>jezdit — jezdívat </strong>(ездить — ездить (повторяется)).
                    </p>
                  </div>
                  <p>
                    Как пример, понятный нам — это <strong>být — bývat</strong> (быть — бывать).
                  </p>
                  <p>
                    V dětství jsem <strong>jezdíval</strong> k babičce, a vždycky jsem tam <strong>býval</strong>{' '}
                    šťastný.
                  </p>
                  <p>Здесь мы видим повторяющееся действие в прошедшем времени.</p>
                </div>
              </div>
            </div>

            <hr />

            {/* Task 8 */}
            <div>
              <p className="font-bold">
                8. Na obrázku č. 4 doplňte výrazy k obrázkům podle toho, jestli vyjadřují proces nebo dokončený děj a
                podepište, kde je co.
              </p>
              <p>
                8. На рисунке №4 соедините выражение с картинкой, опираясь на то, если они обозначают процесс (proces)
                или завершённое действие (dokončený děj) и подпишите, где что.
              </p>

              <div className="italic">
                <p className="font-bold">Vzor:</p>
                <ul className="list-decimal">
                  <li>Uklízet pokoj (proces)</li>
                  <li>Uklidit pokoj (dokončený děj)</li>
                </ul>
                <figure>
                  <img
                    src=" https://czecha2bucket.s3.amazonaws.com/lekce_3/Obr%C3%A1zek+%C4%8D.+4..jpg"
                    alt=""
                    className="w-full"
                  />
                  <figcaption>
                    <strong>
                      <i>Obrázek č. 4.</i>
                    </strong>
                  </figcaption>
                </figure>
              </div>
              <div className="d-flex justify-content-between line-h-08-container">
                <div>
                  <p>1. Uklízet pokoj.</p>
                  <p>2. Upéct husu.</p>
                  <p>3. Jíst husu.</p>
                  <p>4. Nakupovat jídlo a pití.</p>
                  <p>5. Vytřít podlahu.</p>
                  <p>6. Vařit knedlíky.</p>
                </div>
                <div>
                  <p>7. Uklidit pokoj.</p>
                  <p>8. Péct husu.</p>
                  <p>9. Sníst husu.</p>
                  <p>10. Nakoupit jídlo a pití.</p>
                  <p>11. Vytírat podlahu.</p>
                  <p>12. Uvařit knedlíky</p>
                </div>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(3)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(3)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>1. Uklízet pokoj (proces)</p>
                    <p>2. Upéct husu (dokončený děj)</p>
                    <p>3. Jíst husu (proces)</p>
                    <p>4. Nakupovat jídlo a pití (proces)</p>
                    <p>5. Vytřít podlahu (dokončený děj)</p>
                    <p>6. Vařit knedlíky (proces)</p>
                    <p>7. Uklidit pokoj (dokončený děj)</p>
                    <p>8. Péct husu (proces)</p>
                    <p>9. Sníst husu (dokončený děj)6. Sníst husu (dokončený děj)</p>
                    <p>10. Nakoupit jídlo a pití (dokončený děj)</p>
                    <p>11. Vytírat podlahu (proces)</p>
                    <p>12. Uvařit knedlíky (dokončený děj)</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />

            <p className="font-bold">Tady jsme pro vás připravili text.</p>

            {/* Task 9 */}
            <div>
              <p className="font-bold">9. Čtěte nahlas (вслух) a vypište neznámá slova, pak pokračujte dál.</p>

              <p className="font-bold">Dáša, Jakub, Markéta a František a Vánoce.</p>

              <p>
                <strong>Dáša:</strong> Jako každý rok: budu doma u televize. Uklidím dům, nakoupím nějaké dárky, a upeču
                vánočku, na Štědrý den si dám rybí polévku, kapra a bramborový salát a budu se dívat na pohádky v
                televizi. Vnuky mám daleko, syn s rodinou žije v USA. Tak ani nemám vánoční stromeček. Na Boží hod
                pojedu na návštěvu k bratrovi. Už se těším na jeho vnuky.
              </p>
              <p>
                <strong>Jakub:</strong> Na Vánoce pojedu s kamarády na hory. Budeme lyžovat a večer hrát karty. Určitě
                nebudu koukat na televizi, to není nic pro mě. Na Štědrý den si dám k večeři řízek, kapra nemám rád. A
                vánoční úklid nebo dárky? Uklízet nebudu a dárky taky kupovat nebudu, v rodině jsme se domluvili, že je
                to zbytečné. Za ty peníze pojedeme radši někdy v létě na dovolenou.
              </p>
              <p>
                <strong>Markéta:</strong> Máme tři děti a na Vánoce se vždycky moc těšíme. Před Vánocemi budeme vyrábět
                dárky pro babičky a dědečky. Na Štědrý den půjdeme do kostela, chodíme tam každý týden. Večer sníme
                kapra a salát, rozdáme dárky a budeme zpívat koledy, krájet jablka a lít olovo. Na Boží hod nebo na
                Štěpána půjdeme na procházku do lesa a dáme tam jídlo pro zvířata. Určitě se taky budeme dívat na
                pohádky, viděli jsme je už mockrát, ale máme je rádi.
              </p>
              <p>
                <strong>František:</strong> Na Štědrý den ráno budu ještě v práci, pracuju jako lékař na chirurgii. Když
                přijedu domů,budu asi tak unavený, že půjdu spát. Odpoledne uvařím rybí polévku, to je moje specialita.
                Pak budeme večeřet, podíváme se na dárky a půjdeme do kostela na půlnoční bohoslužbu. Určitě nebudu jíst
                cukroví, nemám rád sladké, ale kapra si dám, to je tradice. Mám volno jenom dva dny, na Štěpána ráno už
                musím zase do práce.
              </p>
            </div>

            <hr />

            {/* Task 10 */}
            <div>
              <p className="font-bold">10. Najděte v textu ze zadání 9. perfektní (dokonavý) tvar slovesa.</p>

              <div className="line-h-08-container">
                <p className="text-danger font-bold">
                  <i>Pozor!</i>
                </p>
                <p className="text-danger font-bold">
                  <i>Ne složený budoucí čas — budeme vyrábět</i>
                </p>
              </div>

              <p>
                <i>
                  <strong>Vzor:</strong> uklidím dům, nakoupím dárky &#8594; uklidím, nakoupím
                </i>
              </p>

              <div>
                <button onClick={() => keys.toggleKey(4)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(4)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>1. Uklidím</p>
                    <p>2. Nakoupím</p>
                    <p>3. Upeču</p>
                    <p>4. Dám si</p>
                    <p>5. Pojedu</p>
                    <p>6. Pojedu</p>
                    <p>7. Si dám</p>
                    <p>8. Domluvili se</p>
                    <p>9. Pojedeme</p>
                    <p>10. Sníme</p>
                    <p>11. Rozdáme</p>
                    <p>12. Půjdeme</p>
                    <p>13. Dáme</p>
                    <p>14. Přijedu</p>
                    <p>15. Půjdu</p>
                    <p>16. Uvařím</p>
                    <p>17. Podíváme se</p>
                    <p>18. Půjdeme</p>
                    <p>19. Si dám</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />
            {/* Task 11 */}
            <div>
              <p>
                <strong>11. Najděte v textu ze zadání 9. složený budoucí čas.</strong>
              </p>

              <div className="line-h-08-container">
                <p className="text-danger font-bold">
                  <i>Pozor!</i>
                </p>
                <p className="text-danger font-bold">
                  <i>
                    Ne perfektní (dokonavý) - <span className="text-decoration-line-through">uklidím, nakoupím.</span>
                  </i>
                </p>
              </div>

              <p>
                <strong>Vzor:</strong> Jako každý rok: budu doma u televize &#8594; <strong>budu doma</strong>
              </p>

              <div>
                <button onClick={() => keys.toggleKey(5)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(5)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>1. Budu doma.</p>
                    <p>2. Budu se dívat.</p>
                    <p>3. Budeme lyžovat.</p>
                    <p>4. Nebudu koukat.</p>
                    <p>5. Uklízet nebudu.</p>
                    <p>6. Kupovat nebudu.</p>
                    <p>7. Budeme vyrábět.</p>
                    <p>8. Budeme zpívat</p>
                    <p>9. Se budeme dívat.</p>
                    <p>10. Budu ještě v práci.</p>
                    <p>11. Budu unavený.</p>
                    <p>12. Budeme večeřet.</p>
                    <p>13. Nebudu jíst.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />

            {/* Task 12.1 */}
            <div>
              <p className="font-bold">12.1. Poslechněte si dialog A, pak udělejte úkol č. 12.2.</p>
              <p>
                <i>12.1. Послушайте диалог A, затем выполните задание №12.2.</i>
              </p>
              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_3/Dialog+A.+V%C3%BDlet..mp3"></audio>
              </figure>

              <p className="font-bold">Dialog A. Výlet.</p>
              <div className="line-h-08-container">
                <p>
                  <strong>Madla:</strong> Matěji, já se bojím. My to nenajdeme.
                </p>
                <p>
                  <strong>Matěj:</strong> Prosím tě, nesmíš se bát. Všechno je v pořádku.
                </p>
                <p>
                  <strong>Mad.:</strong> V pořádku? Kde je ta autobusová zastávka?
                </p>
                <p>
                  <strong>M:</strong> Blízko.
                </p>
                <p>
                  <strong>Mad.:</strong> Matěji, nikde nic neuvidím.
                </p>
                <p>
                  <strong>M:</strong> Klid, Madlo.
                </p>
                <p>
                  <strong>Mad.:</strong> Tady jsme už byli před hodinou.
                </p>
                <p>
                  <strong>M:</strong> Jsme tady dobře. Můžeš se podívat sem do mapy. Hele. Tady je ulice Jana Masaryka,
                  kde stojíme. Vidíš?{' '}
                </p>
                <p>
                  <strong>Mad.:</strong> Ano.
                </p>
                <p>
                  <strong>M:</strong> Musíme dojít sem na náměstí.
                </p>
                <p>
                  <strong>Mad.:</strong> Tam je ta zastávka?
                </p>
                <p>
                  <strong>M:</strong> Ano, je to tady v mapě. Tak doufám, že ano.{' '}
                </p>
                <p>
                  <strong>Mad.:</strong> Dobře.
                </p>
                <p>
                  <strong>M:</strong> No, uvidíš. Neztráceli jsme se.
                </p>
                <p>
                  <strong>Mad.:</strong> Jak dlouho půjdeme na to náměstí?
                </p>
                <p>
                  <strong>M:</strong> Asi tak čtvrt hodiny. Musíme jen přejít přes most na druhou stranu řeky. Tam to
                  bude.{' '}
                </p>
                <p>
                  <strong>Mad.:</strong> Fajn.
                </p>
                <p>
                  <strong>M:</strong> Tak půjdeme.
                </p>
                <p>
                  <strong>Mad.:</strong> Kdy jede poslední autobus?
                </p>
                <p>
                  <strong>M:</strong> Poslední autobus odjede v devět. My ale chceme jet autobusem v sedm, to je za 15
                  minut. Klid, máme dost času.
                </p>
                <p>
                  <strong>Mad.:</strong> Tak dobře. Máš hlad?
                </p>
                <p>
                  <strong>M:</strong> Nemám. A ty?
                </p>
                <p>
                  <strong>Mad.:</strong> Já mám.
                </p>
                <p>
                  <strong>M:</strong> Mám s sebou rohlík se šunkou. Chceš?
                </p>
                <p>
                  <strong>Mad.:</strong> Prima. Dám si to až na zastávce.
                </p>
              </div>
            </div>

            <hr />

            {/* Task 12.2 */}
            <div>
              <p className="font-bold">
                12.2. Najděte slovesa, která byla námi změněná z nedokonavého vidu za dokonavý. Vraťte vše zpět.
              </p>
              <p>
                <i>
                  12.2. Найдите глаголы, которые мы поменяли из несовершенного вида на совершенный. Верните всё на свои
                  места.
                </i>
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Nikde nic neuvidím &#8594; <strong>Nikde nic nevidím</strong>
                </i>
              </p>

              <div>
                <button onClick={() => keys.toggleKey(6)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(6)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>Neuvidím &#8594; Vidím</p>
                    <p>Uvidíš &#8594; Vidíš</p>
                    <p>Neztráceli &#8594; Neztratili </p>
                    <p>Půjdeme &#8594; Jdeme</p>
                    <p>Odjede &#8594; Odjíždí</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />
            {/* Task 13.1 */}
            <div>
              <p className="font-bold">13.1. Poslechněte si dialog B, pak udělejte úkol č. 13.2.</p>
              <p>
                <i>13.1. Послушайте диалог B, затем выполните задание №13.2.</i>
              </p>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_3/Dialog+B.+Rezervace..mp3"></audio>
              </figure>

              <p>
                <strong>Dialog B. Rezervace.</strong>
              </p>

              <div>
                <p>
                  <strong>Recepční:</strong> Hotel U Bílé kočky, u telefonu Jana Novotná. Prosím.
                </p>
                <p>
                  <strong>Lucie:</strong> Dobrý den. Tady je Lucie Malá.
                </p>
                <p>
                  <strong>R:</strong> Dobrý den. Jak vám můžu ...?
                </p>
                <p>
                  <strong>L:</strong> Potřebuju rezervovat pokoj od 25.6. na dvě noci. Odjíždět budu 27. Máte nějaké
                  volné pokoje?
                </p>
                <p>
                  <strong>R:</strong> Moment, musím ... do počítače, ale myslím, že máme. Včera bylo ještě dost volných
                  míst. Už to vidím. Ano. Na tenhle termín ještě máme volné pokoje. Jaký pokoj potřebujete a na jak
                  dlouho?
                </p>
                <p>
                  <strong>L:</strong> Potřebuju jeden jednolůžkový pokoj na dvě noci.
                </p>
                <p>
                  <strong>R:</strong> To je problém. Od 25. června mám na dvě noci volné jen dvojlůžkové a trojlůžkové
                  pokoje.
                </p>
                <p>
                  <strong>L:</strong> Aha. Kolik stojí dvoulůžkový pokoj na dvě noci?
                </p>
                <p>
                  <strong>R:</strong> Stojí 1 300,- korun se snídaní.
                </p>
                <p>
                  <strong>L:</strong> Dobře. To je levné. Minulý rok u vás stálo pět nocí 5 000,- korun.
                </p>
                <p>
                  <strong>R:</strong> To musela být cena za jiný pokoj.
                </p>
                <p>
                  <strong>L:</strong> To máte pravdu.
                </p>
                <p>
                  <strong>R:</strong> Přejete ... tu rezervaci?
                </p>
                <p>
                  <strong>L:</strong> Ano, samozřejmě.
                </p>

                <p>
                  <strong>R:</strong> Příjezd bude 25. června a odjezd 27. června. Z pokoje musíte ... do 11 hodin.
                  Vyhovuje vám to?
                </p>
                <p>
                  <strong>L:</strong> Ano. Ta rezervace není pro mě, ale pro moji maminku. Potřebujete její jméno a
                  adresu?{' '}
                </p>
                <p>
                  <strong>R:</strong> Potřebuju i jiné informace. Nemůžete prosím vyplnit formulář na internetu?
                </p>
                <p>
                  <strong>L:</strong> Určitě můžu. To bude pro mě lepší. Budete potřebovat taky občanský průkaz nebo
                  cestovní pas?
                </p>
                <p>
                  <strong>R:</strong> To stačí potom, musím vidět nějaký doklad s fotografií. Teď potřebuju ten
                  formulář.{' '}
                </p>
                <p>
                  <strong>L:</strong> Dobře. Hned ho ... .
                </p>
              </div>
            </div>

            <hr />
            {/* Task 13.2 */}
            <div>
              <p className="font-bold">13.2. Doplňte vynechaná slova.</p>
              <p>
                <i>13.2. Дополните пропущенные слова.</i>
              </p>
              <div>
                <button onClick={() => keys.toggleKey(7)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(7)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>1. Pomoct</p>
                    <p>2. Se podívat</p>
                    <p>3. Si udělat</p>
                    <p>4. Odejít </p>
                    <p>5. Pošlu</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <hr />
            {/* Task 14.1 */}
            <div>
              <p className="font-bold">14.1. Poslechněte si dialog C, pak udělejte úkol č. 14.2.</p>
              <p>
                <i>14.1. Послушайте диалог C, затем выполните задание №14.2.</i>
              </p>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_3/3.-lekce.mp3"></audio>
              </figure>

              <p className="font-bold">Dialog C. Detektivka.</p>

              <div>
                <p>
                  <strong>Šimon:</strong> Matěji, nepůjdeme do kina?
                </p>
                <p>
                  <strong>Matěj:</strong> Na co?
                </p>
                <p>
                  <strong>Š:</strong> Na nějaký film. Celý den se učím a musím si dělat přestávku.
                </p>
                <p>
                  <strong>M:</strong> Do kina můžeme, nechceš jít ale raději cvičit?
                </p>
                <p>
                  <strong>Š:</strong> Nechci. Dnes potřebuju klid.
                </p>
                <p>
                  <strong>M:</strong> Dobře. Co je v kině?
                </p>
                <p>
                  <strong>Š:</strong> Kluci ve škole říkali, že včera byli na nějakém dobrém filmu.
                </p>
                <p>
                  <strong>M:</strong> Na čem byli?
                </p>
                <p>
                  <strong>Š:</strong> Na nějaké detektivce.
                </p>
                <p>
                  <strong>M:</strong> Chceš jít na detektivku, jo? Hm. Tak jo. Proč ne? Podívej se, v kolik hodin to
                  začíná. Taky se už nemůžu učit.
                </p>
                <p>
                  <strong>Š:</strong> Jo!
                </p>
                <p>
                  <strong>M:</strong> Volám Madle a Ivaně. Možná budou taky chtít jít.
                </p>
                <p>
                  <strong>Š:</strong> Fajn... Hele, dívám se na internet. Ten film je od osmi.
                </p>
                <p>
                  <strong>M:</strong> Píše tam někdo něco o tom filmu?
                </p>
                <p>
                  <strong>Š:</strong> Moment. Dva novináři píšou, že je to dobrý film. Na to chci jít.
                </p>
                <p>
                  <strong>M:</strong> A není tam taky, o čem ten film je?
                </p>
                <p>
                  <strong>Š:</strong> Ach jo. Počkej. Už to hledám. Dva kamarádi letí do Evropy. Hned po příletu mají
                  potíže na letišti. Policie si myslí, že jeden z nich kradl slavný obraz. Oba jdou do vězení, nemají
                  peníze na právníka. Jejich rodiny zaplatí detektiva, ten musí najít toho, kdo ten obraz ukradl.
                </p>
                <p>
                  <strong>M:</strong> Jo, to vypadá dobře. Jdeme na to. Jdu zavolat Madle. Dnes celý den pracovala,
                  možná bude unavená. Uvidíme.
                </p>
              </div>
            </div>

            <hr />

            {/* Task 14.2 */}
            <div>
              <p className="font-bold">
                14.2. Najděte slovesa, která byla námi změněná z dokonavého vidu za nedokonavý. Vraťte vše zpět.
              </p>
              <p>
                <i>
                  14.2. Найдите глаголы, которые мы поменяли из совершенного вида на несовершенный. Верните всё на свои
                  места.
                </i>
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Musím <strong>dělat</strong> přestávku &#8594;Musím <strong>udělat</strong>{' '}
                  přestávku.
                </i>
              </p>

              <div>
                <button onClick={() => keys.toggleKey(8)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(8)} timeout={2000}>
                  <div className="line-h-08-container">
                    <p>
                      1. Dělat &#8594; <strong>Udělat</strong>
                    </p>
                    <p>
                      2. Volám &#8594; <strong>Zavolám</strong>
                    </p>
                    <p>
                      3. Kradl &#8594; <strong>Ukradl</strong>
                    </p>
                    <p>
                      4. Jdeme &#8594; <strong>Půjdeme</strong>
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LessonFarewell />
    </div>
  );
};

export default Three;
