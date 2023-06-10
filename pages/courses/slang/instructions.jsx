import React from 'react';
import PageLink from '../../../components/PageLink';

const Instructions = () => {
  return (
    <div className="p-4">
      <h1>ИНСТРУКЦИЯ К УРОКАМ</h1>

      <div className="space-y-12">
        <h2>Добрый день, дорогие друзья!</h2>
        <section className="border border-solid border-gray-300 rounded-lg p-4">
          <div>
            <img
              src="https://czecha2bucket.s3.amazonaws.com/instructions/Author.jpg"
              alt="Author"
              className="w-60 h-60 rounded-full object-cover mb-4 mr-4 float-left"
            />
            <div>
              <p>
                <strong>
                  <i>Добро пожаловать на вводный урок!</i>
                </strong>
              </p>
              <p>
                Мы собрали тут всю самую важную техническую информацию о том, как будет происходить ваше обучение.
                Пожалуйста, прочитайте эту инструкцию внимательно.
              </p>
              <p>
                Я буду вашим проводником в мир чешской грамматики - особенностей и нюансов чешского языка и буду вам
                максимально понятно подавать информацию, чтобы она легко запоминалась.
              </p>
              <p>
                В лекциях у вас будут задания с ключами, тесты, диалоги, тексты, картинки, записанные голосом темы и
                материалы из аутентичных источников.
              </p>
              <p>
                А те, кто захотят выбрать максимальный пакет, смогут заниматься с преподавателем ещё и один на один.
              </p>
              <p>
                Если у вас появятся вопросы или предложения, пишите вашему преподавателю, менеджеру школы или тех.
                поддержке.
              </p>
              <p>
                <strong>
                  <i>До встречи на лекциях!</i>
                </strong>
              </p>
              <p>
                <strong>
                  <i>Директор школы Дарья Мацак </i>
                </strong>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-2xl font-bold mb-5">Что необходимо сделать перед началом занятий</h1>
          <div className="space-y-4 my-12">
            <p>
              <span class="inline-flex items-center space-x-2">
                <span className="text-5xl font-bold">
                  <span className="text-yellow-400">1</span> этап
                </span>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_1.png"
                  alt=""
                  className="w-12 h-12 "
                />
              </span>
            </p>
            <p>Скачайте и распечатайте рабочую тетрадь.</p>

            <div className="flex flex-col gap-4">
              <div>
                <a
                  href="https://czecha2bucket.s3.amazonaws.com/instructions/210x297_Pracovni+sesit+A2.pdf"
                  target="blank"
                  className="custom-btn custom-btn-700">
                  Скачать рабочую терадь A2
                </a>
              </div>

              <div className="ml-60">
                <a
                  href="https://czecha2bucket.s3.amazonaws.com/instructions/%D0%9A%D0%BB%D1%8E%D1%87%D0%B8+%D0%902.pdf"
                  target="blank"
                  className="custom-btn custom-btn-950">
                  Ключ A2
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <a
                  href="https://czecha2bucket.s3.amazonaws.com/instructions/210x297_Pracovni+sesit+B2.pdf"
                  target="blank"
                  className="custom-btn custom-btn-700">
                  Скачать рабочую терадь B2
                </a>
              </div>

              <div className="ml-60">
                <a
                  href="https://czecha2bucket.s3.amazonaws.com/instructions/%D0%9A%D0%BB%D1%8E%D1%87%D0%B8+%D0%2.pdf"
                  target="blank"
                  className="custom-btn custom-btn-950">
                  Ключ B2
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 my-12">
            <p>
              <span class="inline-flex items-center space-x-2">
                <span className="text-5xl font-bold">
                  <span className="text-yellow-400">2</span> этап
                </span>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_2.png"
                  alt=""
                  className="w-12 h-12 "
                />
              </span>
            </p>

            <PageLink href={`/courses/slang/windows-keyboard`} className="custom-btn">
              Как установить на Windows
            </PageLink>
          </div>

          <div className="space-y-4 my-12">
            <p>
              <span class="inline-flex items-center space-x-2">
                <span className="text-5xl font-bold">
                  <span className="text-yellow-400">3</span> этап
                </span>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_3.png"
                  alt=""
                  className="w-12 h-12 "
                />
              </span>
            </p>

            <p className="mb-4">Установить приложение GetCourse на свой смартфон.</p>

            <PageLink href={``} className="custom-btn custom-btn-700">
              Как установить приложение
            </PageLink>
          </div>
        </section>
      </div>

      <hr />

      <div className="space-y-2 mt-6">
        <p>
          <strong>Возникли сложности или вопросы? Звоните! Мы всегда рады помочь!</strong>
        </p>
        <p>+420 608 870 909 менеджер Ирина</p>
        <p>+420 608 790 124 менеджер Виктория (говорит на украинском)</p>
        <p>Рабочее время менеджеров с 9:00 до 19:00 по Праге</p>
        <p>
          На этом наш вводный урок окончен. Доступ к лекциям курса откроется вам за <strong>5 дней до старта.</strong>
        </p>
        <p>До встречи!</p>
      </div>
    </div>
  );
};

export default Instructions;
