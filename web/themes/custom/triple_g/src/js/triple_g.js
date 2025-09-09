/**
 * @file
 * Triple G theme JavaScript behaviors.
 */

(function (Drupal, once, $) {
  'use strict';

  /**
   * Initialize Bootstrap popovers.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.tgPopovers = {
    attach: function (context, settings) {
      once('tgPopovers', '[data-toggle="popover"]', context).forEach(function (element) {
        $(element).popover();
      });
    }
  };

  Drupal.behaviors.clickHandlers = {
    attach: function (context, settings) {
      once('open_modal', '.teaser', context).forEach(function (element) {
        element.addEventListener('click', (element) => {
          let target = element.currentTarget.dataset.target;
          let dialog = document.getElementById(target);
          dialog.showModal();
        });
      });

      once('close_modal', '.close-modal', context).forEach(function (element) {
        element.addEventListener('click', (element) => {
          let target = element.currentTarget.dataset.target;
          let dialog = document.getElementById(target);
          dialog.close();
        });
      });
    }
  };
})(Drupal, once, jQuery);
