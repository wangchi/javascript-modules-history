define(['jquery'], function ($) {
  return {
    init: function (el) {
      alert('clicked!');
      $(el).html('clicked!');
    },
  };
});
