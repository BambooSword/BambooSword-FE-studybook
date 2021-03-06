(function () {
  let _likeSetInterval;
  let _scrollSetInterval;
  let _index = 0;
  let _scrollTopSize;
  let _scrollFlag = false;
  _scrollTopSize = document.querySelector('html').scrollTop;

  function getMyLike(flag) {
    return [...document.querySelectorAll('li.like')].filter((item) =>
      flag
        ? !item.className.includes('active')
        : item.className.includes('active'),
    );
  }

  function _likeFilter(arr, flag) {
    return arr.filter((item) =>
      flag
        ? !item.className.includes('active')
        : item.className.includes('active'),
    );
  }

  function _MathRandom() {
    return Math.random() * 2000 + 1000;
  }

  function getScrollTop() {
    let scrollTop = 0,
      bodyScrollTop = 0,
      documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop =
      bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  function getScrollHeight() {
    let scrollHeight = 0,
      bodyScrollHeight = 0,
      documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight =
      bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight;
    return scrollHeight;
  }

  function getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode == 'CSS1Compat') {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  function _scrollTop(second) {
    let size = 0;
    _scrollSetInterval = setInterval(() => {
      if (second && size === second) {
        clearInterval(_scrollSetInterval);
        return;
      } else {
        size++;
      }

      if (Math.ceil(getScrollTop() + getWindowHeight()) == getScrollHeight()) {
        console.log('?????????');
        _scrollFlag = true;
        clearInterval(_scrollSetInterval);
      }
      _scrollTopSize = document.querySelector('html').scrollTop;
      document.querySelector('html').scrollTop =
        document.querySelector('html').scrollTop + 500;
    }, 1000);
  }

  /**
   * ??????/????????????
   * @param type 0 ?????? 1 ?????? ?????? 1
   * @param second  ???????????? ???????????????
   */
  function fabulous(second, type = 1) {
    if (second) {
      _scrollTop(second);
    } else {
      _scrollTop();
    }
    _likeSetInterval = setInterval(() => {
      let _like = getMyLike(type);
      if (
        (_scrollFlag && _likeFilter(_like, type).length === 0) ||
        !_like[_index]
      ) {
        console.log('?????????????????????');
        clearInterval(_likeSetInterval);
        return;
      }
      _like[_index].click();
      console.log(type ? '??????' : '????????????');
    }, _MathRandom());
  }

  window.$ = {
    fabulous: fabulous,
  };
})();

$.fabulous(); //????????????: number  ????????????????????????   ??????/????????????  ????????? 1  1?????? 0 ????????????
