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
})(Drupal, once, jQuery);
