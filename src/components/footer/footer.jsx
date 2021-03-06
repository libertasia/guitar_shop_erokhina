import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/logo-footer.svg';
import sprite from '../../img/sprite.svg';
import {AppRoute} from '../../const';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <section className="footer__social">
          <h2 className="visually-hidden">Ссылки на соцсети и Логотип</h2>
          <div className="footer__logo">
            <Link to={AppRoute.ROOT}>
              <img src={logo} width={67} height={70} alt="Логотип Guitar Shop»" />
            </Link>
          </div>

          <ul className="footer__social-list">
            <li className="footer__social-list-item">
              <a href="https://www.facebook.com/" aria-label="Мы в Фейсбуке">
                <span className="visually-hidden">Фейсбук</span>
                <svg className="footer__social-icon" width={24} height={24}>
                  <use href={sprite + `#icon-facebook`} />
                </svg>
              </a>
            </li>
            <li className="footer__social-list-item">
              <a href="https://www.instagram.com/" aria-label="Мы в Инстаграме">
                <span className="visually-hidden">Инстаграм</span>
                <svg className="footer__social-icon" width={24} height={24}>
                  <use href={sprite + `#icon-instagram`} />
                </svg>
              </a>
            </li>
            <li className="footer__social-list-item">
              <a href="https://twitter.com/" aria-label="Мы в Твиттере">
                <span className="visually-hidden">Твиттер</span>
                <svg className="footer__social-icon" width={24} height={24}>
                  <use href={sprite + `#icon-twitter`} />
                </svg>
              </a>
            </li>
          </ul>
        </section>

        <section className="footer__info-section">
          <h2 className="visually-hidden">Дополнительная информация</h2>
          <section className="footer__info-company">
            <h3 className="footer__info-title footer__info-title-about">О нас</h3>
            <p>Магазин гитар,<br /> музыкальных инструментов<br /> и гитарная мастерская в<br /> Санкт-Петербурге.</p>
            <p>Все инструменты<br /> проверены, отстроены и<br /> доведены до идеала!</p>
          </section>

          <section className="footer__info-catalog">
            <h3 className="footer__info-title">Каталог</h3>
            <ul className="footer__info-catalog-list">
              <li><a href="#">Акустические гитары</a></li>
              <li><a href="#">Классические гитары</a></li>
              <li><a href="#">Электрогитары</a></li>
              <li><a href="#">Бас-гитары</a></li>
              <li><a href="#">Укулеле</a></li>
            </ul>
          </section>

          <section className="footer__info">
            <h3 className="footer__info-title">Информация</h3>
            <ul className="footer__info-list">
              <li><a href="#">Где купить?</a></li>
              <li><a href="#">Блог</a></li>
              <li><a href="#">Вопрос - ответ</a></li>
              <li><a href="#">Возврат</a></li>
              <li><a href="#">Сервис-центры</a></li>
            </ul>
          </section>
        </section>

        <section className="footer__contacts">
          <h2 className="footer__info-title">Контакты</h2>
          <p>г. Санкт-Петербург,<br />м. Невский проспект,<br />ул. Казанская 6.<br /><a className="footer__contacts-number" href="tel:+78125005050">8-812-500-50-50</a></p>
          <p>Режим работы:<br /><span className="footer__contacts-time">с 11:00 до 20:00,</span><br />без выходных.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
