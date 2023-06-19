import React from 'react';
import useKeyOpen from '../../../../../hooks/useKeyOpen';
import useAuth from '../../../../../hooks/useAuth';
import PageLink from '../../../../../components/PageLink';
import { Collapse } from 'reactstrap';
import GreenBox from '../../../../../components/UI/GreenBox';
import PdfFrame from '../../../../../components/UI/PdfFrame';
import LessonFarewell from '../../../../../components/UI/LessonFarewell';

const Two = () => {
  const keys = useKeyOpen(5);
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
          <PageLink href="./1" className={`flex flex-col items-start`}>
            <span className="text-blue-500 hover:underline">Предыдущий урок</span>
            <span className="mt-2">1. lekce</span>
          </PageLink>
          <PageLink href="./3" className={`flex flex-col items-end`}>
            <span className="text-blue-500 hover:underline">Следующий урок</span>
            <span className="mt-2">3. lekce</span>
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
        <h2 className="text-center">MINULÝ ČAS</h2>

        <hr />
        <div>
          <p>
            <strong>Прошедшее время - очень важная тема! </strong>
          </p>
          <p>Повторяйте, отвечайте на вопросы и фиксируйте все моменты!</p>
        </div>

        <hr />

        <div>
          <p>
            <strong>Посмотрите видео.</strong>
          </p>
          <div className="video-container">
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/rpYm2NiuPZA"
              title="2  MINULÝ ČAS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>

        <hr />

        <div>
          <p>
            <strong>Ниже представлен рисунок "Прошедшее время, форма «-L»".</strong>
          </p>
          <p>
            <i>Вы можете его сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_2/%D0%9F%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B5%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%2C+%D1%84%D0%BE%D1%80%D0%BC%D0%B0+%C2%AB-L%C2%BB.jpg"
            alt="Прошедшее время, форма «-L»"
            className="w-full"
          />
        </div>

        <hr />

        <div className="my-2">
          <p>
            <strong>Ниже представлена таблица "Прошедшее время глагола «být»".</strong>
          </p>
          <p>
            <i>Вы можете её сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_2/%D0%9F%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B5%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F+%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D0%B0+%C2%ABb%C3%BDt%C2%BB.png"
            alt="Прошедшее время глагола «být»"
            className="w-full"
          />
        </div>

        <hr />

        <div>
          <p>
            <strong>Ниже представлена таблица "Прошедшее время глагола «být» + местоимения «se» и «si»".</strong>
          </p>
          <p>
            <i>Вы можете её сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_2/%D0%9F%D1%80%D0%BE%D1%88%D0%B5%D0%B4%D1%88%D0%B5%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%8F+%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D0%B0+%C2%ABb%C3%BDt%C2%BB+%2B+%D0%BC%D0%B5%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F+%C2%ABse%C2%BB+%D0%B8+%C2%ABsi%C2%BB.png"
            alt="Прошедшее время глагола «být» + местоимения «se» и «si»"
            className="w-full"
          />
        </div>

        <hr />

        <div className="my-3">
          <p>
            <strong>Образование времён глагола</strong>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_2/%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%B2%D1%80%D0%B5%D0%BC%D1%91%D0%BD+%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D0%B0.jpg"
            alt="Образование времён глагола"
            className="w-full"
          />
        </div>

        <hr />

        <div className="frame font-bold line-h-08-container">
          <p className="text-red-600">*Внимание!</p>
          <p className="">Jít — идти / půjdu — пойду</p>
          <p className="">Pojít — сдохнуть / pošel — сдох</p>
          <p className="">Chci pojít — «хочу сдохнуть», а не «хочу пойти».</p>
          <p className="text-red-600">Не путайте эти глаголы!</p>
        </div>

        <hr />

        <div>
          <p className="font-bold">Прочтите и проговорите.</p>
          <p className="font-bold">
            ВАЖНО! Абсолютно всё проговаривайте вслух, прочитайте, отведите глаза и повторите.
          </p>
          <div className="line-h-08-container">
            <p>Dělat - dělal</p>
            <p>Mluvit - mluvil </p>
            <p>Slyšet - slyšel </p>
            <p>Myslet - myslel </p>
            <p>Umět - uměl </p>
            <p>Rozumět - rozuměl </p>
            <p>Pracovat - pracoval </p>
            <p>Studovat - studoval </p>
            <p>Kontrolovat - kontroloval </p>
            <p>Rozhodnout se - rozhodnul se/rozhodl se </p>
            <p>Stáhnout - stáhnul/stáhl </p>
            <p>Chytnout - chytnul/chytl </p>
            <p>Mít - měl </p>
            <p>Jít - šel </p>
            <p>Říct - řekl </p>
          </div>
          <p>
            <span className="font-bold">Прочтите и проговорите. </span>
          </p>
          <p className="font-bold">
            ВАЖНО! Абсолютно всё проговаривайте вслух, прочитайте, отведите глаза и повторите.
          </p>
          <div className="line-h-08-container">
            <div>
              <p>Dělal jsem, chodil jsem, byl jsem, pil jsem, jedl jsem</p>
              <p>Co jsi včera dělal?</p>
              <p>Co jsem dělal? Kde jsem byl? </p>
            </div>
            <div>
              <p>Četli jste to včera? </p>
              <p>Ne, nečetli jsme to včera.</p>
            </div>
            <div>
              <p>Zapomněl jsi mu to koupit? </p>
              <p>Ne, nezapomněl jsem mu to koupit </p>
            </div>
            <div>
              <p>Stalo venku černé auto? </p>
              <p>Ne, venku nestalo černé auto </p>
            </div>
            <div>
              <p>Volal jsi mi včera? </p>
              <p>Ne, nevolal jsem ti včera </p>
            </div>
            <div>
              <p>Rodiče šli do divadla? </p>
              <p>Ne, rodiče nešli do divadla </p>
            </div>
            <div>
              <p>Měl jsi včera čas? </p>
              <p>Ne, neměl jsem včera čas </p>
            </div>
            <div>
              <p>Zavřel někdo dveře? </p>
              <p>Ne, nikdo nezavřel dveře </p>
            </div>
            <div>
              <p>Líbil se vám počítač? </p>
              <p>Ne, počítač se nám nelíbil </p>
            </div>
            <div>
              <p>Co jste měli včera k večeři? </p>
              <p>Nic jsme neměli k večeři </p>
            </div>
            <div>
              <p>Díval ses na něco včera večer? </p>
              <p>Ne, na nic jsem se nedíval včera večer </p>
            </div>
            <div>
              <p>Měla vaše kamarádka dovolenou? </p>
              <p>Ne, naše kamarádka neměla dovolenou </p>
            </div>
            <div>
              <p>Jedly včera vaše děti sladkosti? </p>
              <p>Ne, naše děti včera nejedly sladkosti</p>
            </div>
            <div>
              <p>Jel s vámi nějaký muž v autobuse? </p>
              <p>Ne, nejel se mnou žádný muž v autobuse </p>
            </div>
            <div>
              <p>Šla kolem nějaká paní? </p>
              <p>Ne, žádná paní kolem nešla </p>
            </div>

            <div>
              <p>Co jste včera viděl v televizi? </p>
              <p>Nic jsem neviděl v televizi</p>
            </div>
            <div>
              <p>Pili jste ráno kávu?</p>
              <p>Ne, nepili jsme ráno kávu </p>
            </div>
            <div>
              <p>Já chci nový mobil </p>
              <p>Kamarád chce nové auto </p>
            </div>
            <div>
              <p>Jestli budu chtít, půjdu na návštěvu </p>
              <p>Jestli budeš chtít půjdeš na návštěvu </p>
              <p>Jestli bude chtít/budeme chtít/budete chtít/budou chtít </p>
            </div>
            <div>
              <p>Budeš moct zítra? </p>
              <p>Zítra můj kamarád nebude moct </p>
            </div>
            <div>
              <p>Mít udělat </p>
              <p>Muset udělat </p>
            </div>
            <div>
              <p>Máš se učit česky </p>
              <p>Musíš se učit česky! </p>
              <p>Máte se podívat </p>
              <p>Musíte se podívat! </p>
              <p>Máme se učit víc </p>
              <p>Máme studovat víc </p>
            </div>
          </div>
          <hr />

          <div>
            <p className="font-bold">Na obrázcích můžete uvidět použití minulého času.</p>
            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Lubos+ukazoval.jpg"
              alt="Lubos+ukazoval"
              className="w-full"
            />
            <p className="font-bold">Tak co? Jdeme trénovat?</p>

            <div>
              <div>
                <p className="font-bold">1. Napište věty v minulém čase:</p>
                <p>
                  <i>Vzor: Jsem už v Praze. &#8594; Byla jsem už v Praze.</i>
                </p>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Evivka_Malovala.jpg"
                  alt="Evivka_Malovala"
                  className="w-full"
                />
                <div className="line-h-08-container my-3">
                  <p>1. Malujeme obrazy každý den. &#8594;</p>
                  <p>2. Češe se kartáčem. &#8594;</p>
                  <p>3. Přijmeme vaši nabídku. &#8594;</p>
                  <p>4. U moře vane silný vítr. &#8594;</p>
                  <p>5. Můžeš to přinést kdykoliv. &#8594;</p>
                </div>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Tomas+nesk.jpg"
                  alt="Tomas+nesk"
                  className="w-full"
                />
                <div className="line-h-08-container my-3">
                  <p>6. Rozumíme česky jen trochu. &#8594;</p>
                  <p>7. Eva píše domácí úkol. &#8594;</p>
                  <p>8. Kde bydlí zahraniční studenti? &#8594;</p>
                  <p>9. Co si přejete? &#8594;</p>
                  <p>10. Co potřebuješ? &#8594;</p>
                  <p>11. Kde čekáte? &#8594;</p>
                  <p>12. Detektivky nečtu &#8594;</p>
                  <p>13. V neděli jedeme na výlet. &#8594;</p>
                </div>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Martin+Rychle.jpg"
                  alt="Martin+Rychle"
                  className="w-full"
                />
                <div className="line-h-08-container my-3">
                  <p>14. Večer nemají čas &#8594;</p>
                  <p>15. Vezmu si ještě jeden rohlík &#8594;</p>
                  <p>16. Ten úkol zvládneme. &#8594;</p>
                  <p>17. Nejdříve zdvihnu ten papír. &#8594;</p>
                  <p>18. Jíš houby? &#8594;</p>
                </div>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Barbora+hledala.jpg"
                  alt="Barbora+hledala"
                  className="w-full mb-3"
                />

                <button onClick={() => keys.toggleKey(1)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(1)} timeout={2000}>
                  <div>
                    <p>
                      1. Malujeme obrazy každý den. &#8594;
                      <strong>Malovali jsme obrazy každý den.</strong>
                    </p>
                    <p>
                      2. Češe se kartáčem. &#8594;
                      <strong>Česal se kartáčem.</strong>
                    </p>
                    <p>
                      3. Přijmeme vaši nabídku. &#8594;
                      <strong> Přijali jsme vaši nabídku.</strong>
                    </p>
                    <p>
                      4. U moře vane silný vítr. &#8594;
                      <strong> U moře vanul silný vítr.</strong>
                    </p>
                    <p>
                      5. Můžeš to přinést kdykoliv. &#8594;
                      <strong>Mohl jsi to přinést kdykoliv.</strong>
                    </p>
                    <p>
                      6. Můžeš to přinést kdykoliv. &#8594;
                      <strong> Rozuměli jsme česky jen trochu.</strong>
                    </p>
                    <p>
                      7. Eva píše domácí úkol. &#8594;
                      <strong>Eva psala domácí úkol.</strong>
                    </p>
                    <p>
                      8. Kde bydlí zahraniční studenti? &#8594;
                      <strong>Kde bydleli zahraniční studenti?</strong>
                    </p>
                    <p>
                      9. Co si přejete? &#8594;
                      <strong>Co jste si přáli?</strong>
                    </p>
                    <p>
                      10. Co potřebuješ? &#8594;
                      <strong>Co jsi potřeboval?</strong>
                    </p>
                    <p>
                      11. Kde čekáte? &#8594;
                      <strong> Kde jste čekali?</strong>
                    </p>
                    <p>
                      12. Detektivky nečtu. &#8594;
                      <strong> Detektivky jsem nečetl.</strong>
                    </p>
                    <p>
                      13. V neděli jedeme na výlet. &#8594;
                      <strong> V neděli jsme jeli na výlet.</strong>
                    </p>
                    <p>
                      14. Večer nemají čas. &#8594;
                      <strong> Večer neměli čas.</strong>
                    </p>
                    <p>
                      15. Vezmu si ještě jeden rohlík &#8594;
                      <strong> Vzal jsem si ještě jeden rohlík.</strong>
                    </p>
                    <p>
                      16. Ten úkol zvládneme &#8594;
                      <strong> Ten úkol jsme zvládli.</strong>
                    </p>
                    <p>
                      17. Nejdříve zdvihnu ten papír. &#8594;
                      <strong> Nejdříve jsem zdvihl ten papír.</strong>
                    </p>
                    <p>
                      18. Jíš houby? &#8594;
                      <strong>Jedl jsi houby?</strong>
                    </p>
                  </div>
                </Collapse>
              </div>

              <hr />

              <GreenBox
                text={'Внимание! Задание 2. проверяет преподаватель.'}
                subtitle={
                  'Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком.'
                }
              />

              <div>
                <p className="font-bold"> 2. Napište, kdo a co dělal na obrázku.</p>
                <img src="https://czecha2bucket.s3.amazonaws.com/lekce_2/Task_2.1.jpg" alt="" className="w-full" />
              </div>

              <GreenBox text={'Внимание! Задание 3. выполняется по желанию.'} />

              <div>
                <p className="font-bold">3. Napište věty v minulém čase:</p>
                <div className="line-h-08-container">
                  <p>1. Pavel ti může pomoct. &#8594;</p>
                  <p>2. Proč se ptáš? &#8594;</p>
                  <p>3. Ve středu jdu do divadla. &#8594;</p>
                  <p>4. Chceme vidět Karlův most. &#8594;</p>
                  <p>5. Vzpomenete si na nás? &#8594;</p>
                  <p>6. Nevím, čemu se smějí. &#8594;</p>
                  <p>7. Zazpíváš jim nějakou píseň? &#8594;</p>
                  <p>8. Zvou nás na oběd. &#8594;</p>
                  <p>9. Namažu si rohlík. &#8594;</p>
                  <p>10. Rozhodneš se rychle? &#8594;</p>
                  <p>11. Řekneme vám o tom včas. &#8594;</p>
                  <p>12. Celý den neteče voda. &#8594;</p>
                  <p>13. Petr mi pomůže připravit referát. &#8594;</p>
                  <p>14. Začneme se připravovat na cestu. &#8594;</p>
                  <p>15. Zuju se hned v předsíni. &#8594;</p>
                  <p>16. Zeptáš se ho na to? &#8594;</p>
                  <p>17. Nic nevidím. &#8594;</p>
                  <p>18. Jistě nám to prominou. &#8594;</p>
                  <p>19. Na ples si oblékne nové šaty. &#8594;</p>
                  <p>20. Na horách rostou jen nenáročné květiny. &#8594;</p>
                  <p>21. Jak se odtud dostaneme? &#8594;</p>
                  <p>22. Kamarád vždy navrhne zajímavý program. &#8594;</p>
                </div>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(2)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(2)} timeout={2000}>
                  <div>
                    <p>
                      1. Pavel ti může pomoct. &#8594;
                      <strong>Pavel ti mohl pomoct.</strong>
                    </p>
                    <p>
                      2. Proč se ptáš? &#8594;
                      <strong> Proč ses ptal?</strong>
                    </p>
                    <p>
                      3. Ve středu jdu do divadla &#8594;
                      <strong> Ve středu jsem šel do divadla.</strong>
                    </p>
                    <p>
                      4. Chceme vidět Karlův most. &#8594;
                      <strong> Chtěli jsme vidět Karlův most.</strong>
                    </p>
                    <p>
                      5. Vzpomenete si na nás? &#8594;
                      <strong>Vzpomněli jste si na nás.</strong>
                    </p>
                    <p>
                      6. Nevím, čemu se smějí &#8594;
                      <strong> Nevěděl jsem, čemu se smáli.</strong>
                    </p>
                    <p>
                      7. Zazpíváš jim nějakou píseň? &#8594;
                      <strong>Zazpíval jsi jim nějakou píseň?</strong>
                    </p>
                    <p>
                      8. Zvou nás na oběd. &#8594;
                      <strong>Zvali nás na oběd.</strong>
                    </p>
                    <p>
                      9. Namažu si rohlík. &#8594;
                      <strong>Namazal jsem si rohlík.</strong>
                    </p>
                    <p>
                      10. Rozhodneš se rychle? &#8594;
                      <strong>Rozhodl ses rychle.</strong>
                    </p>
                    <p>
                      11. Řekneme vám o tom včas. &#8594;
                      <strong> Řekli jsme vám o tom včas.</strong>
                    </p>
                    <p>
                      12. Celý den neteče voda. &#8594;
                      <strong> Celý den netekla voda.</strong>
                    </p>
                    <p>
                      13. Petr mi pomůže připravit referát. &#8594;
                      <strong> Petr mi pomohl připravit referát.</strong>
                    </p>
                    <p>
                      14. Začneme se připravovat na cestu. &#8594;
                      <strong> Začali jsme se připravovat na cestu.</strong>
                    </p>
                    <p>
                      15. Zuju se hned v předsíni. &#8594;
                      <strong> Zul jsem se hned v předsíni.</strong>
                    </p>
                    <p>
                      16. Zeptáš se ho na to? &#8594;
                      <strong> Zeptal ses ho na to?</strong>
                    </p>
                    <p>
                      17. Nic nevidím. &#8594;
                      <strong> Nic jsem neviděl.</strong>
                    </p>
                    <p>
                      18. Jistě nám to prominou. &#8594;
                      <strong>Jistě nám to prominuli.</strong>
                    </p>
                    <p>
                      19. Na ples si oblékne nové šaty. &#8594;
                      <strong>Na ples si oblékl nové šaty.</strong>
                    </p>
                    <p>
                      20. Na horách rostou jen nenáročné květiny. &#8594;
                      <strong>Na horách rostly jen nenáročné květiny.</strong>
                    </p>
                    <p>
                      21. Jak se odtud dostaneme? &#8594;
                      <strong>Jak jsme se odtud dostali.</strong>
                    </p>
                    <p>
                      22. Kamarád vždy navrhne zajímavý program. &#8594;
                      <strong>Kamarád vždy navrhl zajímavý program.</strong>
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <div>
              <p className="font-bold">Послушайте и повторите диалог вслух.</p>

              <figure>
                <audio controls src="https://czecha2bucket.s3.amazonaws.com/lekce_2/10-06.mp3"></audio>
                <figcaption>
                  <strong>Диалог A. Lucie a Ivana</strong>
                </figcaption>
              </figure>
              <div className="line-h-08-container">
                <p>
                  <strong>Lucie:</strong> Co je nového, Ivano?
                </p>
                <p>
                  <strong>Ivana:</strong> Nic.
                </p>
                <p>
                  <strong>L:</strong> Jak to? Kde jsi byla o víkendu?
                </p>
                <p>
                  <strong>I:</strong> Doma.
                </p>
                <p>
                  <strong>L:</strong> Jak to? Neměla jsi jet s Madlou na výlet?
                </p>
                <p>
                  <strong>I:</strong> Měla jsem jet, ale nejela jsem. Zůstala jsem doma.
                </p>
                <p>
                  <strong>L:</strong> Proč?
                </p>
                <p>
                  <strong>I:</strong> Madla ten výlet zrušila.
                </p>
                <p>
                  <strong>L:</strong> Co se stalo?
                </p>
                <p>
                  <strong>I:</strong> V pátek jí volal Matěj. Mluvili spolu asi hodinu.
                </p>
                <p>
                  <strong>L:</strong> Takovou dobu?
                </p>
                <p>
                  <strong>I:</strong> Ano.
                </p>
                <p>
                  <strong>L:</strong> A co potom?
                </p>
                <p>
                  <strong>I:</strong> Pak Madla přišla ke mně do pokoje a omluvila se. Řekla, že zítra nikam nepojede.
                </p>
                <p>
                  <strong>L:</strong> Proč nechtěla jet?
                </p>
                <p>
                  <strong>I:</strong> To mi nechtěla říct. Myslím, že má s Matějem rande.
                </p>
                <p>
                  <strong>L:</strong> Vážně? Oni spolu chodí?
                </p>
                <p>
                  <strong>I:</strong> Myslím, že ano.
                </p>
                <p>
                  <strong>L:</strong> Myslíš? Ty to nevíš?
                </p>
                <p>
                  <strong>I:</strong> Nevím.
                </p>
                <p>
                  <strong>L:</strong> Ona ti neřekla, že má kluka? Jsi její nejlepší kamarádka, ne?
                </p>
                <p>
                  <strong>I:</strong> Ona mi takové věci neříká. Vím ale něco od Šimona. Matěj řekl Šimonovi, že se mu
                  Madla moc líbí.
                </p>
                <p>
                  <strong>L:</strong> Kdy to řekl?
                </p>
                <p>
                  <strong>I:</strong> Řekl to před víkendem
                </p>
                <p>
                  <strong>L:</strong> Tak spolu možná chodí.
                </p>
                <p>
                  <strong>L:</strong> No vidíš, a ty říkáš, že není nic nového. Taková zajímavá zpráva!
                </p>
              </div>
            </div>

            <hr />

            <div>
              <p className="font-bold">Tady jsme pro Vás připravili text, kde jsou slovesa ve všech časech.</p>
              <p className="font-bold">1. Čtěte nahlas a vypište neznámá slova.</p>

              <p className="font-bold text-uppercase">Sport</p>
              <p>
                <strong>Táta:</strong> Ahoj, rodino, tak co podnikneme o víkendu? Navrhuju pořádný výlet na kolech,
                venku je konečně hezky.
              </p>
              <p>
                <strong>Máma:</strong> Ale Hynku, víš přece, že mám rozbité kolo? Nikdo mně ho ještě neopravil.
              </p>
              <p>
                <strong>Táta:</strong> No jo, ale to není problém, hned zítra se do toho dáme s Pepou.
              </p>
              <p>
                <strong>Pepa:</strong> Tati, já mám v sobotu zápas fotbalem, říkal jsem to už před týdnem.
              </p>
              <p>
                <strong>Gábina:</strong> A mně se nikam nechce, v televizi dávají v sobotu odpoledne super film s
                Nicolasem Cagem.
              </p>
              <p>
                <strong>Máma:</strong> Gábi, měla bys jet, když budeš pořád jen doma u televize, budeš za chvíli tlustá.
              </p>
              <p>
                <strong>Gábina:</strong> Když mi koupíte snowboard, pojedu s vámi v zimě na hory, ale kolo je moc
                namáhavé.
              </p>
              <p>
                <strong>Táta:</strong> No tak asi půjdu s kolegy na basket. Pepo, chodíte ještě se Štěpánem na squash?
              </p>
              <p>
                <strong>Pepa:</strong> Jo, ale dlouho jsme nebyli. Ted‘ v létě asi začneme s tenisem, když se dá být i
                venku. Jen si budu muset koupit novou raketu.
              </p>
              <p>
                <strong>Gábina:</strong> Tenis? To bych šla docela taky. Jana chodí už půl roku a má hrozně sympatického
                trenéra.
              </p>
              <p>
                <strong>Pepa:</strong> Ty a sport? To nemyslíš vážně! Jdi radši s kamarádkami do kina.
              </p>
              <p>
                <strong>Máma:</strong> Víte co? Já mám na sobotu večer domluvený aerobic s holkami z práce, takže stejně
                nemám moc času. Ale v neděli bychom si mohli jít alespoň zaplavat, Hynku, když máme bazén za rohem. A v
                sobotu aspoň stihneš ten přenos ze světového poháru v kanoistice, co říkáš?
              </p>
              <p>
                <strong>Táta:</strong> No vidíš, na to jsem skoro zapomněl. Tak to jsem rád, že jsme se domluvili.
              </p>
              <p>
                <strong>Gábina:</strong> Počkejte, a co můj Cage?
              </p>

              <p className="font-bold">2. Ответьте на вопросы:</p>
              <GreenBox
                text={'Внимание! Задание 2. проверяет преподаватель.'}
                subtitle={
                  'Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком.'
                }
              />

              <div className="line-h-08-container my-4">
                <p className="font-bold">Otázky k textu: </p>
                <p>1. Kdo je největší sportovec z rodiny?</p>
                <p>2. Co budou dávat v sobotu v televizi?</p>
                <p>3. Proč chce chodit Gábina na tenis?</p>
                <p>4. Jaké sportovní zařízení má rodina blízko?</p>
                <p>5. O jakých sportech se v textu mluví?</p>
              </div>

              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-center">SE / SI, SES / SIS</h2>

        <hr />

        <div>
          <p className="font-bold">Скачайте файл Slang. Zvratná slovesa</p>
          <PdfFrame
            title={' Slang. Zvratná slovesa'}
            href={'https://czecha2bucket.s3.amazonaws.com/lekce_2/Slang.+Zvratn%C3%A1+slovesa.pdf'}
          />
        </div>

        <div>
          <p className="font-bold">Se или si, или вообще не надо?</p>
          <p>
            Одна из самых востребованных тем в чешском. Ее можно объяснять несколько раз, подходить с разных сторон и
            приводить много примеров.
          </p>
          <p>На этом видео есть объяснение, оно "базовое", но все же студентам очень помогает разобраться.</p>
        </div>

        <div>
          <p className="font-bold">Посмотрите видео с Дарьей — Zvratná zájmena.</p>
          <div className="video-container">
            <iframe
              width="653"
              height="367"
              src="https://www.youtube.com/embed/SccEnTtNaKI"
              title="2  SE  SI, SES  SIS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
          <p>Надеемся, наболевший вопрос о разнице наконец-то уменьшится в своих размерах.</p>

          <p>
            Полностью он не исчезнет, так как нужен более длительное наблюдение за языком и анализ всего услышанного и
            увиденного вокруг.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-center">MODÁLNÍ SLOVESA</h2>

        <div>
          <p>
            Важнейшие модальные глаголы в чешском языке -<strong>"chtít", "moct" ("moci"), "muset", "smět".</strong>
          </p>
          <p>
            Все они различаются по значению и употреблению, выражая различные оттенки долженствования, необходимости,
            возможности и желания.
          </p>

          <p className="font-bold">Посмотрите видео.</p>
          <div className="video-container">
            <iframe
              width="653"
              height="367"
              src="https://www.youtube.com/embed/UTGq2UlkyfE"
              title="2  MODÁLNÍ SLOVESA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>

          <p className="font-bold">Ниже представлена таблица "Модольные глаголы".</p>
          <p>
            <i>Вы можете ее сохранить и распечатать, либо переписать в свою рабочую тетрадь.</i>
          </p>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/lekce_2/%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D1%8B.png"
            alt=""
            className="w-full"
          />

          <p className="font-bold my-3">Прочтите и проговорите. </p>

          <p className="font-bold">
            ВАЖНО! Абсолютно всё проговаривайте вслух, прочитайте, отведите глаза и повторите.
          </p>

          <div className="line-h-08-container">
            <div>
              <p>Já chci nový mobil </p>
              <p>Kamarád chce nové auto </p>
            </div>
            <div>
              <p>Jestli budu chtít, půjdu na návštěvu </p>
              <p>Jestli budeš chtít půjdeš na návštěvu </p>
              <p>Jestli bude chtít/budeme chtít/budete chtít/budou chtít </p>
            </div>
            <div>
              <p>Budeš moct zítra? </p>
              <p>Zítra můj kamarád nebude moct </p>
            </div>
            <div>
              <p>Mít udělat </p>
              <p>Muset udělat </p>
            </div>
            <div>
              <p>Máš se učit česky </p>
              <p>Musíš se učit česky! </p>
              <p>Máte se podívat </p>
              <p>Musíte se podívat! </p>
              <p>Máme se učit víc </p>
              <p>Máme studovat víc</p>
            </div>
          </div>

          <div>
            <p className="font-bold ">Для закрепления материала выполните дополнительные упражнения.</p>

            <div>
              <p className="font-bold">1. Z uvedených vět tvořte věty s modálním slovesem:</p>
              <p>
                <i>Vzor: Zítra hraju tenis. &#8594; Zítra chci hrát tenis.</i>
              </p>

              <div className="my-4">
                <p className="text-upeercase font-bold">CHTÍT</p>
                <p>Jdu do Hubu. Zítra vstane brzo. Díváme se na televizi. Budeš dlouho číst?</p>
                <p>Jedou na dovolenou k moři.</p>
              </div>
              <div className="my-4">
                <p className="text-upeercase font-bold">MOCT</p>
                <p>
                  Vysvětlíš mi tu gramatiku? K tomu ti už nic neřeknu. V té věci nám nepomůžou. Zopakujete mi tu otázku?
                  O víkendu spíme dlouho.
                </p>
              </div>
              <div className="my-4">
                <p className="text-upeercase font-bold">SMĚT</p>
                <p>
                  Zde se nekouří. Při testu používejte slovník. Jdeme dovnitř? Nejmladší dcera si to dovolí. Nechodím
                  domů pozdě v noci.
                </p>
              </div>
              <div className="my-4">
                <p className="text-upeercase font-bold">MUSET </p>
                <p>
                  Něco vám řeknu. Jirka dává pozor na sestru. Studenti si opakují slovíčka. Ten překlad pošleme do
                  soboty. Přečteš tu knihu za tři dny?
                </p>
              </div>
              <div className="my-4">
                <p className="text-upeercase font-bold">UMĚT </p>
                <p>Mluvíte anglicky? Hraješ na klavír? Pavlík ještě nechodí. Moji přátelé hrají tenis.</p>
              </div>
              <div className="my-4">
                <p className="text-upeercase font-bold">MÍT </p>
                <p>Zeptáme se jí na to. Co děláte? Pomůžou mu s úkolem. Nic mi neřekneš? Zavřu okno.</p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(3)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(3)} timeout={2000}>
                  <div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">CHTÍT</p>
                      <p>
                        <i>chci jít, chce vstát, chceme se dívat, budeš chtít číst, chtějí jet</i>
                      </p>
                    </div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">MOCT</p>
                      <p>
                        <i>můžeš vysvětlit, nemůžu k tomu nic říct, nemůžou pomoct, můžete zopakovat, můžeme spát</i>
                      </p>
                    </div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">SMĚT</p>
                      <p>
                        <i>nesmí se zde kouřit, smíte používat, smíme jít, smí si to dovolit, nesmím chodit pozdě</i>
                      </p>
                    </div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">MUSET</p>
                      <p>
                        <i>musím říct, musí dávat pozor, musí si opakovat, musíme poslat, musíš přečíst</i>
                      </p>
                    </div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">UMĚT</p>
                      <p>
                        <i>umíte mluvit, umíš hrát, neumí chodit, umí/umějí hrát</i>
                      </p>
                    </div>
                    <div className="my-4">
                      <p className="text-upeercase font-bold">MÍT </p>
                      <p>
                        <i>máme se jí na to zeptat, máte dělat, mají nám pomoct, nemáš mi něco říct, mám zavřít</i>
                      </p>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            <div>
              <p className="font-bold">
                2. Pomocí modálního slovesa vyjádřete možnost (возможность), nutnost (необходимость), přání (желание),
                zákaz (запрет), doporučení (совет). Napište v závorkách, co jste vyjádřili ve větě.
              </p>
              <p>
                <i>Vzor: Přijď v sobotu. (muset) &#8594; Musíš přijít v sobotu. (nutnost).</i>
              </p>

              <div className="line-h-08-container">
                <p>1. Zastavím se u vás zítra. (moct) &#8594;</p>
                <p>2. Poradíme se s rodiči. &#8594;</p>
                <p>3. V této restauraci lidé nekouří. &#8594;</p>
                <p>4. Řeknu ti něco důležitého. &#8594;</p>
                <p>5. Je sucho, zalévají zahradu. &#8594;</p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(4)} className="kliche-btn">
                  Klíče
                </button>
                <Collapse isOpen={keys.getValue(4)} timeout={2000}>
                  <div>
                    <p>
                      1.{' '}
                      <i>
                        Zastavím se u vás zítra. (moct) &#8594;
                        <strong> Můžu se u vás zastavit zítra. (možnost)</strong>
                      </i>
                    </p>
                    <p>
                      2.{' '}
                      <i>
                        Poradíme se s rodiči. (chtít) &#8594;
                        <strong> Chceme se poradit s řidiči. (přání)</strong>
                      </i>
                    </p>
                    <p>
                      3.{' '}
                      <i>
                        V této restauraci lidé nekouří. (smět) &#8594;
                        <strong>V této restauraci nesmějí lidé kouřit. (zákaz)</strong>
                      </i>
                    </p>
                    <p>
                      4.{' '}
                      <i>
                        Řeknu ti něco důležitého. (muset) &#8594;
                        <strong> Musím ti říct něco důležitého. (nutnost)</strong>
                      </i>
                    </p>
                    <p>
                      5.{' '}
                      <i>
                        Je sucho, zalévají zahradu. (mít) &#8594;
                        <strong>Je sucho, máme zalévat zahradu. (doporučení)</strong>
                      </i>
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

export default Two;
