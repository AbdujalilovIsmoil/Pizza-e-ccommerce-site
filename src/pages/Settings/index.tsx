import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DataPicker from "react-date-picker";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "react-date-picker/dist/DatePicker.css";
import { Button, Input } from "components/fields";
import { settingsEditIcon } from "assets/images/svg";
import { Link, useLocation } from "react-router-dom";

const index = () => {
  type ValuePiece = Date | null;
  const { pathname } = useLocation();
  const [email, setEmail] = useState<string>("");
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [date, setDate] = useState<Value>(new Date());
  const [userName, setUserName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isUserOpen, setIsUserOpen] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);

  type SettingValues = {
    date: Value;
    email: string;
    userName: string;
    phoneNumber: string;
  };

  const editSettingValues = () => {
    setIsUserOpen(false);
    const settingValues: SettingValues = { date, email, userName, phoneNumber };

    console.log(settingValues); // send setting values
  };

  return (
    <>
      <section className="settings">
        <div className="container">
          <div className="settings-header">
            <div className="settings-header__block">
              <h4 className="settings-header__block-heading">Мой аккаунт</h4>
            </div>
            <div className="settings-header__block">
              <Link
                type="button"
                to="/pages/history"
                className={`settings-header__block-btn ${
                  pathname === "/pages/history" &&
                  "settings-header__block-btn--active"
                }`}
              >
                История заказов
              </Link>
              <Link
                type="button"
                to="/pages/settings"
                className={`settings-header__block-btn ${
                  pathname === "/pages/settings" &&
                  "settings-header__block-btn--active"
                }`}
              >
                Настройки
              </Link>
            </div>
          </div>
          <div className="settings-body">
            <ul className="settings-body__list">
              {!isUserOpen && (
                <li className="settings-body__list-item">
                  <div className="user">
                    <div className="user-header">
                      <div className="user-header__box">
                        <h4 className="user-header__box-heading">
                          Личные данные
                        </h4>
                      </div>
                      <div
                        className="user-header__box"
                        onClick={() => setIsUserOpen(true)}
                      >
                        <img
                          src={settingsEditIcon}
                          alt="setting-edit-icon"
                          className="user-header__box-icon"
                        />
                        <h4 className="user-header__box-edit">Изменить</h4>
                      </div>
                    </div>
                    <div className="user-body">
                      <ul className="user-body__list">
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Имя*</h5>
                          <h5 className="user-body__item-value">Вадим</h5>
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">
                            Номер телефона*
                          </h5>
                          <h5 className="user-body__item-value">
                            +7 (926) 223-10-11
                          </h5>
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Почта</h5>
                          <h5 className="user-body__item-value">
                            mail@gmail.com
                          </h5>
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Дата рождения</h5>
                          <h5 className="user-body__item-value">13.02.1996</h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              )}
              {isUserOpen && (
                <li className="settings-body__list-item">
                  <div className="user">
                    <div className="user-header">
                      <div className="user-header__box">
                        <h4 className="user-header__box-heading">
                          Изменение личных данных
                        </h4>
                      </div>
                    </div>
                    <div className="user-body">
                      <ul className="user-body__list">
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Имя*</h5>
                          <Input
                            type="text"
                            value={userName}
                            placeholder="Имя*"
                            className="user-body__item-input"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">
                            Номер телефона*
                          </h5>
                          <PhoneInput
                            country={"uz"}
                            value={phoneNumber}
                            placeholder="Номер телефона*"
                            inputClass="user-body__item-input"
                            onChange={(phone) => setPhoneNumber(phone)}
                          />
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Почта</h5>
                          <Input
                            type="email"
                            placeholder="Почта"
                            value={email}
                            className="user-body__item-input"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Дата рождения</h5>
                          <DataPicker
                            value={date}
                            clearIcon={null}
                            onChange={setDate}
                          />
                        </li>
                      </ul>
                      <Button
                        type="button"
                        className="user-body__send"
                        onClick={() => editSettingValues()}
                      >
                        Сохранить изменения
                      </Button>
                    </div>
                  </div>
                </li>
              )}
              {!isPasswordOpen && (
                <li className="settings-body__list-item">
                  <div className="user">
                    <div className="user-header">
                      <div className="user-header__box">
                        <h4 className="user-header__box-heading">Пароль</h4>
                      </div>
                      <div
                        className="user-header__box"
                        onClick={() => setIsPasswordOpen(true)}
                      >
                        <img
                          src={settingsEditIcon}
                          alt="setting-edit-icon"
                          className="user-header__box-icon"
                        />
                        <h4 className="user-header__box-edit">Изменить</h4>
                      </div>
                    </div>
                  </div>
                </li>
              )}
              {isPasswordOpen && (
                <li className="settings-body__list-item">
                  <div className="user">
                    <div className="user-header">
                      <div className="user-header__box">
                        <h4 className="user-header__box-heading">
                          Изменение личных данных
                        </h4>
                      </div>
                    </div>
                    <div className="user-body">
                      <ul className="user-body__list">
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">
                            Старый пароль*
                          </h5>
                          <Input
                            type="password"
                            value={oldPassword}
                            placeholder="********"
                            className="user-body__item-input"
                            onChange={(e) => setOldPassword(e.target.value)}
                          />
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">Новый пароль*</h5>
                          <Input
                            type="password"
                            value={newPassword}
                            placeholder="********"
                            className="user-body__item-input"
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </li>
                        <li className="user-body__item">
                          <h5 className="user-body__item-key">
                            Подтвердите пароль*
                          </h5>
                          <Input
                            type="password"
                            value={confirmPassword}
                            placeholder="********"
                            className="user-body__item-input"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </li>
                      </ul>
                      <Button
                        type="button"
                        className="user-body__send"
                        onClick={() => setIsPasswordOpen(false)}
                      >
                        Сохранить изменения
                      </Button>
                    </div>
                  </div>
                </li>
              )}
              <li className="settings-body__list-item">
                <div className="user">
                  <div className="user-header user-header--last">
                    <div className="user-header__box">
                      <h4 className="user-header__box-heading">Подписки</h4>
                    </div>
                    <div className="user-header__box">
                      <Input
                        id="check"
                        type="checkbox"
                        className="user-header__box-checkbox"
                      />
                      <label className="user-header__box-label" htmlFor="check">
                        Получать предложения и акции
                      </label>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
