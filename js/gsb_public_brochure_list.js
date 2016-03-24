(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_location = {
    attach: function (context, settings) {
      var params = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        params[key] = value;
      });
      var program_id = params['pid'];
      var name = 'input[name="submitted[brochure_list][' + program_id + ']"';
      if ($(name).length > 0) {
        $(name).attr('checked','checked');
      }
      var $topic_checkBoxes = $('input[type=checkbox][name*=topic--]');
      $topic_checkBoxes.each(function () {var $topic = $("#" + $(this).attr("id"));
        $topic.hide();
        $topic.parent().addClass("topicItem");
      });
      $(".topicItem").each(function (index) {
        $(this).nextUntil(".topicItem").andSelf().wrapAll("<div class='topicSet'></div>");
      });
      $('.topicSet').each(function(){
        var header=$(this).children().first().addClass('topic-header');
        $(this).wrapInner('<div class="programSet"></div>')
          .prepend(header);
      });

    }
  };
})(jQuery);