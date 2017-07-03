import $ from 'jquery';

jQuery(document).ready(($) => {
  window.isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/) !== null;
  scripts($);
  ajaxPageLoads($);
  scrollHandlers($);
  fixedSidebar();
});
