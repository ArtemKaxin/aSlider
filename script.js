(function($) {
  try {
    var $slider = $(".images"),
      $sliderWrapper = $('<div class="slider-wrapper"></div>'),
      $track = $('<div class="track"></div>'),
      $active,
      $prev = $('<button class="prev">prev</button>'),
      $next = $('<button class="next">next</button>'),
      trackWidth = 0,
      fullTrackWidth = 0,
      options = {
        width: 400
      };

    $sliderWrapper.insertBefore($slider);

    $slider.appendTo($sliderWrapper);

    $slider.addClass("slider").width(options.width);

    $sliderWrapper.append($prev).append($next);

    let itemsHtml = $slider.html();

    $track.html(itemsHtml);
    $slider.html($track);

    $track.find(".image").each(function() {
      trackWidth += $(this).width() + 30;
    });

    let $clonedItems = $track
      .find(".image")
      .clone()
      .removeClass("active");

    $track.prepend($clonedItems);
    $track.append($clonedItems.clone());

    fullTrackWidth = trackWidth * 3;

    $track.width(fullTrackWidth);

    $active = $track.find(".active");

    $track.css({
      "margin-left": calculateActiveTrackPosition()
    });

    $prev.click(function() {
      if ($track.is(":animated")) {
        return false;
      }

      let $newActive = $active.prev();

      $newActive.addClass("active");
      $active.removeClass("active");

      $active = $newActive;

      let newPosition = calculateActiveTrackPosition();

      $track.animate(
        {
          "margin-left": newPosition
        },
        500
      );
    });

    $next.click(function() {
      if ($track.is(":animated")) {
        return false;
      }

      let $newActive = $active.next();

      $newActive.addClass("active");
      $active.removeClass("active");

      $active = $newActive;

      let newPosition = calculateActiveTrackPosition();

      $track.animate(
        {
          "margin-left": newPosition
        },
        500
      );
    });

    function calculateActiveTrackPosition() {
      return (
        $active.position().left * -1 +
        options.width / 2 -
        $active.width() / 2 -
        15
      );
    }
  } catch (exception) {
    console.log(exception);
  }
})(jQuery);
