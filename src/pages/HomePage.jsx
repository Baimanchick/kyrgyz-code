import React, { useEffect } from "react";
import "../css/home.scss";

function HomePage() {
  useEffect(() => {
    let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
    let dropdownIsOpen = false;

    if (dropdowns.length) {
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (event) => {
          let target = document.querySelector(
            `#${event.target.dataset.dropdown}`
          );

          if (target) {
            if (target.classList.contains("show")) {
              target.classList.remove("show");
              dropdownIsOpen = false;
            } else {
              target.classList.add("show");
              dropdownIsOpen = true;
            }
          }
        });
      });
    }

    window.addEventListener("mouseup", (event) => {
      if (dropdownIsOpen) {
        dropdowns.forEach((dropdownButton) => {
          let dropdown = document.querySelector(
            `#${dropdownButton.dataset.dropdown}`
          );
          let targetIsDropdown = dropdown == event.target;

          if (dropdownButton == event.target) {
            return;
          }

          if (!targetIsDropdown && !dropdown.contains(event.target)) {
            dropdown.classList.remove("show");
          }
        });
      }
    });

    function handleSmallScreens() {
      document
        .querySelector(".navbar-toggler")
        .addEventListener("click", () => {
          let navbarMenu = document.querySelector(".navbar-menu");

          if (!navbarMenu.classList.contains("active")) {
            navbarMenu.classList.add("active");
          } else {
            navbarMenu.classList.remove("active");
          }
        });
    }

    handleSmallScreens();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#">
              <h4>
                Kyrgyz<span>code</span>
              </h4>
            </a>
          </div>

          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li className="active">
                <a href="#">Главная</a>
              </li>
              <li className="navbar-dropdown">
                <a
                  href="#"
                  className="dropdown-toggler"
                  data-dropdown="my-dropdown-id"
                >
                  Цены <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown" id="my-dropdown-id">
                  <li>
                    <a href="#">Одностраничный сайт</a>
                  </li>
                  <li>
                    <a href="#">Бизнес сайт</a>
                  </li>
                  <li className="separator"></li>
                  <li>
                    <a href="#">Интернет магазин</a>
                  </li>
                  <li className="separator"></li>
                  <li>
                    <a href="#">Мобильное приложение</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Работы</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
    </>
  );
}

export default HomePage;
