try {
  (function($) {
    $(function() {
      $.fn.aSlider = function(options) {
        //options
        this.defalultOptions = {
          width: "auto",
          gap: 0,
          verticalAlign: "center"
        };
        this.options = Object.assign(this.defalultOptions, options);
        console.log(this.options);
        //layout html
        this.addClass("a-slider");
        this.aTrack = $(`<div class=a-track>${this.html()}</div>`);
        this.aPrev = $(`<button class="a-prev">prev</button>`);
        this.aNext = $(`<button class="a-next">next</button>`);
        this.aViewport = $(`<div class=a-viewport></div>`);
        this.aViewport.append(this.aTrack);
        this.html(this.aViewport);
        this.prepend(this.aPrev);
        this.append(this.aNext);
        //layout css
        this.css({
          display: "flex"
        });
        this.aViewport.css({
          overflow: "hidden",
          width: () => {
            if (this.options.width == "auto") {
              return "auto";
            } else if (this.options.width == "stretch") {
              return "100%";
            } else {
              return `${this.options.width}px`;
            }
          }
        });
        this.aTrack.css({
          display: "flex",
          alignItems: () => {
            if (this.options.verticalAlign == "top") {
              return "flex-start";
            } else if (this.options.verticalAlign == "bottom") {
              return "flex-end";
            } else {
              return "center";
            }
          }
        });
        this.aTrack.find(">*").css({
          margin: `0 ${this.options.gap / 2}px`,
          fontSize: 0
        });
        //slide func
        this.slide = () => {
          console.log(this)
        }
        //buttons
        this.aNext.click(() => { 
          this.slideFnc();
        })
      };
    });
  })(jQuery);
} catch (exceptions) {
  console.log(exceptions);
}
