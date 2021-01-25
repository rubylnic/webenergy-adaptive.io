'use strict';
(function () {
  var openButton = document.querySelector('.main-nav__item');
  var dropdown = document.querySelector('.main-nav__catalog');
  openButton.addEventListener('click', function () {
    dropdown.classList.toggle('main-nav__catalog--hidden');
    dropdown.classList.toggle('main-nav__catalog--animation')
  })
}
  ());

'use strict';
(function() {
  var button = document.querySelector('.main-nav__button');
  var nav = document.querySelector('.main-nav__list');

  var openClose = function() {
    nav.classList.toggle('main-nav__list--closed');
    button.classList.toggle('main-nav__button--cross');
  };

  button.addEventListener('click', openClose);
})();

'use strict';
(function () {
  var ENTER_KEYCODE = 13;
  var tabBtns = document.querySelectorAll('.tabs__item');
  var tabs = document.querySelectorAll('.tabs__tab');

  var makeTabsActive = function (buttons) {
    buttons.forEach(function (button) {
      button.classList.remove('tabs__item--active');
    });
  };

  var hideTabs = function (tabsList) {
    tabsList.forEach(function (btn) {
      btn.classList.add('tabs__tab--hidden');
    });
  };


  tabBtns.forEach(function (tabButton, i) {
    tabButton.addEventListener('click', function () {
      makeTabsActive(tabBtns);
      tabButton.classList.add('tabs__item--active');

      hideTabs(tabs);
      tabs[i].classList.remove('tabs__tab--hidden');
      tabs[i].classList.add('tabs__tab--animation');
    });

    tabButton.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_KEYCODE) {
        makeTabsActive(tabBtns);
        tabButton.classList.add('tabs__item--active');
        hideTabs(tabs);
        tabs[i].classList.remove('tabs__tab--hidden');

        tabs[i].classList.add('tabs__tab--animation');
      }
    });
  });
})();
