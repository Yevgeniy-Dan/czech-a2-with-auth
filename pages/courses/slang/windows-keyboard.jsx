import React from 'react';
import useAuth from '../../../hooks/useAuth';

const WindowsKeyboard = () => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <>{isAuth}</>;
  }

  return (
    <div>
      <h1>Как установить чешскую раскладку на Windows</h1>
      <div className="video-container">
        <iframe
          width="949"
          height="534"
          src="https://www.youtube.com/embed/9Z9iOPECPqk"
          title="windows_setup"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
      <section className="mt-8">
        <h2>Как печатать чешские буквы</h2>
        <h3>Способ № 1 — сложный, но быстрый</h3>
        <p>
          Все чехи с малолетства привыкают набирать правильно, используя для букв с диакритикой ряд цифровых клавиш в
          верхней части клавиатуры. Да, вы эти клавиши используете для цифр, а в чешской раскладке на них ě, š, č, ř и
          прочие ночные кошмары шрифтовика. Цифры в чешской раскладке набираются через Shift. Для ů и ú отведены
          отдельные клавиши, в русской раскладке им соответствуют «ж» и «х». Одно нажатие — и готово!
        </p>
        <p>
          Такой набор является самым быстрым, но он подходит только для базовых строчных букв, им невозможно набрать
          относительно редкие ď, ň, ó и ť, а также заглавные буквы. Для этих случаев используется способ № 2.
        </p>

        <hr className="border-dashed border-t-4 h-4 border-yellow-400" />

        <h3>Способ № 2 — простой, но медленный.</h3>

        <p>
          Дилетантским, долгим, но наиболее простым способом является использование клавиши «+» слева от Backspace для
          добавления к букве диакритического знака. Как таковая буква с диакритикой всегда состоит из непосредственно
          буквы и диакритического знака, шрифтовики рисуют отдельно компоненты и при наборе знак накладывается на букву
          без сдвига.
        </p>

        <p>
          Для получения буквы с чаркой вы нажимаете «+» отпускаете и нажимаете нужную букву на основной клавиатуре —
          получается эта буква с чаркой. Хотите с гачеком — нажимаете Shift с «+», отпускаете, набираете нужную букву на
          основной клавиатуре и получаете букву с гачеком.
        </p>

        <p>
          Заглавные буквы набираются подобным образом, но подключается Shift на этапе набора буквы. Для заглавной буквы
          с чаркой нажимаете «+» отпускаете и вместе с Shift нажимаете букву на основной клавиатуре. Аналогично, если
          требуется заглавная с чаркой, то используем Shift с «+», отпускаем, нажимаем Shift с нужной буквой.
        </p>
      </section>
    </div>
  );
};

export default WindowsKeyboard;
