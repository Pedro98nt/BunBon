jQuery(document).ready(function ($) {
    //	Establish BunBon as a collection, and all the features we want to hide initially
  
    var bunBon = [
      "#head_container",
      "#body",
      "#arm-left",
      "#arm-right",
      "#foot-left",
      "#foot-right"
    ];
  
    var allFeatures = [
      "#eye-left",
      "#eye-right",
      "#eye-left-squint",
      "#eye-right-squint",
      "#eye-left-closed",
      "#eye-right-closed",
      "#eye-left-closed-squeeze",
      "#eye-right-closed-squeeze",
      "#eyebag-left",
      "#eyebag-right",
      "#eyebrow-left",
      "#eyebrow-right",
      "#ear-left-up-slight",
      "#ear-right-up-slight",
      "#ear-left-up-full",
      "#ear-right-up-full",
      "#ear-left-down",
      "#ear-right-down",
      "#ear-left",
      "#ear-right"
    ];
  
    function hideFeatures() {
      TweenMax.set(allFeatures, { opacity: 0 });
    }
  
    //	Set the 'resting' reset co-ords for all body parts
  
    var bodyResetObj = {
      head_container: { x: 15, y: -1, opacity: 1 },
      face: { x: 30.45, y: 110, opacity: 1 },
      "eye-left": { x: 0, y: 3, opacity: 1 },
      "eye-right": { x: 50, y: 3, opacity: 1 },
      "ear-left": { x: 1, y: 34, opacity: 1 },
      "ear-right": { x: 79, y: 33, opacity: 1 },
      "arm-left": { x: 60, y: 145, opacity: 1 },
      "arm-right": { x: 98, y: 145, opacity: 1 },
      "foot-left": { x: 16, y: 179, opacity: 1 },
      "foot-right": { x: 88, y: 179, opacity: 1 },
      body: { x: 51, y: 141, opacity: 1 },
      nose: { x: 29, y: 9, opacity: 1 },
      "eye-left-squint": { x: 0, y: 3 },
      "eye-right-squint": { x: 50, y: 3 },
      "eye-right-closed-squeeze": { x: 58, y: 5 },
      "eye-left-closed-squeeze": { x: 8, y: 5 },
      "eyebag-right": { x: 53, y: 23 },
      "eyebag-left": { x: 3, y: 23 },
      "eyebrow-left": { x: 3.1, y: 0 },
      "eyebrow-right": { x: 66, y: 0 },
      "eye-left-closed": { x: 0, y: 11 },
      "eye-right-closed": { x: 51, y: 11 },
      "ear-right-up-slight": { x: 78, y: 31 },
      "ear-right-up-full": { x: 83, y: 35 },
      "ear-right-down": { x: 78, y: 48 },
      "ear-left-up-slight": { x: -7, y: 32 },
      "ear-left-up-full": { x: 9, y: 36 },
      "ear-left-down": { x: 10, y: 49 }
    };
  
    function resetFeatures() {
      hideFeatures();
  
      changeExpression("normal");
  
      Object.keys(bodyResetObj).forEach(function (key) {
        var elem = "#" + key;
        var _obj = bodyResetObj[key];
        var _alpha = 0;
  
        if (_obj.opacity) {
          _alpha = _obj.opacity;
        }
  
        TweenMax.to(elem, 0.25, {
          x: _obj.x,
          y: _obj.y,
          opacity: _alpha,
          rotation: 0,
          ease: Power4.easeOut
        });
      });
    }
  
    $(document.body).on("reset_features", function () {
      resetFeatures();
    });
  
    //	Set the transform origin points for body parts
  
    TweenMax.set("#head_container", { transformOrigin: "50% 80%" });
    TweenMax.set("#arm-left", { transformOrigin: "76.19% 15.625%" });
    TweenMax.set("#arm-right", { transformOrigin: "19.08% 12.5%" });
    TweenMax.set("#foot-left", { transformOrigin: "90% 30%" });
    TweenMax.set("#foot-right", { transformOrigin: "10% 30%" });
  
    //	Jump up!
  
    function initBunBon() {
      //	Hide BunBon's extra features and set his initial position
  
      TweenMax.set(allFeatures, { opacity: 0 });
      TweenMax.to(bunBon, 0, { y: "+=180" });
  
      //	Arms
  
      TweenMax.to("#arm-left", 0.7, { rotation: 50, ease: Power4.easeOut });
      TweenMax.to("#arm-right", 0.7, { rotation: -50, ease: Power4.easeOut });
  
      //	Face
  
      TweenMax.set(["#ear-left-down", "#ear-right-down"], { opacity: 1 });
      TweenMax.set(["#eye-left", "#eye-right"], { opacity: 0 });
      TweenMax.set(["#eye-left-squint", "#eye-right-squint"], { opacity: 1 });
      TweenMax.to("#face", 0.5, { y: 95, ease: Power4.easeOut });
  
      //	Body
  
      TweenMax.to(bunBon, 0.5, {
        y: "-=200",
        ease: Circ.easeOut,
        onComplete: function (tween) {
          //	Hide the down-ears and show the slight-up ears
  
          TweenMax.to(["#ear-left-down", "#ear-right-down"], 0.1, { opacity: 0 });
          TweenMax.to(["#ear-left-up-slight", "#ear-right-up-slight"], 0.1, {
            opacity: 1
          });
  
          //	Head
  
          TweenMax.to("#head_container", 0.3, {
            y: "+=4",
            ease: Power3.easeOut
          }).delay(0.2);
  
          //	Face
  
          TweenMax.set(["#eye-left", "#eye-right"], { opacity: 1 });
          TweenMax.set(["#eye-left-squint", "#eye-right-squint"], { opacity: 0 });
          TweenMax.to("#face", 0.3, { y: 115, ease: Power4.easeOut });
  
          //	Arms
  
          TweenMax.to("#arm-left", 0.3, {
            rotation: -15,
            ease: Power4.easeOut
          }).delay(0.2);
          TweenMax.to("#arm-right", 0.3, {
            rotation: 15,
            ease: Power4.easeOut
          }).delay(0.2);
  
          //	Body
  
          TweenMax.to(bunBon, 0.3, {
            y: "+=40",
            ease: Circ.easeOut,
            onComplete: function (tween) {
              //	Ears
  
              TweenMax.to(["#ear-left-up-slight", "#ear-right-up-slight"], 0.1, {
                opacity: 0
              }).delay(0.1);
              TweenMax.to(["#ear-left", "#ear-right"], 0.1, { opacity: 1 }).delay(
                0.1
              );
  
              //	Head
  
              TweenMax.to("#head_container", 0.3, {
                y: "-=0",
                ease: Power3.easeOut
              }).delay(0.2);
  
              //	Face
  
              TweenMax.to("#face", 0.2, { y: 109, ease: Power4.easeOut }).delay(
                0.1
              );
  
              //	Arms
  
              TweenMax.to("#arm-left", 0.15, {
                rotation: 0,
                ease: Circ.easeOut
              }).delay(0.2);
              TweenMax.to("#arm-right", 0.15, {
                rotation: 0,
                ease: Circ.easeOut
              }).delay(0.2);
  
              //	Body
  
              TweenMax.to(bunBon, 0.15, {
                y: "-=20",
                ease: Circ.easeIn,
                onComplete: function () {
                  bunBlink();
                }
              });
            }
          });
        }
      });
    }
  
    initBunBon();
  
    $(document.body).on("init", function () {
      initBunBon();
    });
  
    //	BunBon Blinking
  
    var keepBlinking = true;
  
    function canBlink(bool) {
      keepBlinking = bool;
    }
  
    //	Waiting BunBon
  
    function bunBlink() {
      //	Ignore an incoming timed event if we can't blink
  
      if (!keepBlinking) {
        return;
      }
  
      var blinkCount = 0;
  
      (function blinkRepeat() {
        if (blinkCount < 4) {
          clearTimeout(blinkRepeat);
  
          blinkCount++;
          blinkOpacity = blinkCount % 2;
          oppositeOpacity = blinkOpacity == 1 ? 0 : 1;
  
          TweenMax.to(["#eye-left", "#eye-right"], 0, {
            opacity: oppositeOpacity
          });
          TweenMax.to(["#eye-left-closed", "#eye-right-closed"], 0, {
            opacity: blinkOpacity
          });
  
          setTimeout(blinkRepeat, 100);
        }
      })();
  
      var time = (Math.floor(Math.random() * (11 - 4)) + 4) * 1000;
      setTimeout(bunBlink, time);
    }
  
    //	Look around
  
    function lookAround() {
      canBlink(false);
  
      TweenMax.to("#head_container", 0.4, { rotation: 12, ease: Circ.easeOut });
  
      TweenMax.to("#eye-left", 0.3, { x: -3, y: 0, ease: Power4.easeOut });
      TweenMax.to("#eye-right", 0.3, { x: 47, y: 0, ease: Power4.easeOut });
  
      TweenMax.to("#ear-left", 0.1, { opacity: 0 });
      TweenMax.to("#ear-left-up-slight", 0.1, { opacity: 1 });
  
      TweenMax.to("#eye-left", 0.3, { x: 3, y: 0, ease: Power4.easeOut }).delay(
        1
      );
      TweenMax.to("#eye-right", 0.3, { x: 53, y: 0, ease: Power4.easeOut }).delay(
        1
      );
  
      TweenMax.to("#ear-left", 0.1, { opacity: 1 }).delay(1.9);
      TweenMax.to("#ear-left-up-slight", 0.1, { opacity: 0 }).delay(1.9);
  
      TweenMax.to("#head_container", 0.4, {
        rotation: 0,
        ease: Circ.easeOut
      }).delay(2);
  
      TweenMax.to("#eye-left", 0.3, { x: 0, y: 3, ease: Power4.easeOut }).delay(
        2
      );
      TweenMax.to("#eye-right", 0.3, {
        x: 50,
        y: 3,
        ease: Power4.easeOut,
        onComplete: function () {
          canBlink(true);
        }
      }).delay(2);
    }
  
    $(document.body).on("look_around", function () {
      lookAround();
    });
  
    //	Shrug
  
    function shrug() {
      canBlink(false);
  
      TweenMax.to("#arm-left", 0.6, {
        y: 138,
        rotation: 15,
        ease: Power4.easeOut
      });
      TweenMax.to("#arm-right", 0.6, {
        y: 138,
        rotation: -17,
        ease: Power4.easeOut
      });
  
      TweenMax.to("#head_container", 0.6, {
        y: 8,
        ease: Circ.easeOut,
        onComplete: function (tween) {
          TweenMax.to("#head_container", 0.3, { y: 0, ease: Circ.easeOut }).delay(
            0.5
          );
  
          TweenMax.to("#arm-left", 0.3, {
            y: 145,
            rotation: 0,
            ease: Power4.easeOut
          }).delay(0.5);
          TweenMax.to("#arm-right", 0.3, {
            y: 145,
            rotation: 0,
            ease: Power4.easeOut
          }).delay(0.5);
  
          setTimeout(resetFeatures, 1500);
        }
      });
    }
  
    $(".buttons button").click(function (e) {
      if (this.hasAttribute("data-trigger")) {
        $("body").trigger($(this).attr("data-trigger"));
      }
  
      if (this.hasAttribute("data-mood")) {
        changeExpression($(this).attr("data-mood"));
      }
    });
  
    $("svg g").click(function (e) {
      var _id = $(this).attr("id");
  
      if (_id) {
        //console.log(getCoords($(this).attr('id'), 'y'));
      }
    });
  
    ///
    //	Change expression
    ///
  
    function changeExpression(mood) {
      canBlink(false);
  
      hideFeatures();
  
      changeMood(mood);
  
      switch (mood) {
        case "suspicious": {
          TweenMax.set(["#eye-left-squint", "#eye-right-squint"], { opacity: 1 });
          TweenMax.set(["#ear-left-up-slight", "#ear-right-down"], {
            opacity: 1
          });
          TweenMax.to("#head_container", 0.4, { y: 4, ease: Power4.easeOut });
          TweenMax.to("#face", 0.4, { y: 106, ease: Power4.easeOut });
  
          setTimeout(resetFeatures, 1500);
  
          break;
        }
  
        case "question": {
          TweenMax.set(
            ["#eye-left-squint", "#eye-right", "#eyebrow-left", "#eyebrow-right"],
            { opacity: 1 }
          );
          TweenMax.set(["#ear-left-up-full", "#ear-right-down"], { opacity: 1 });
          TweenMax.to("#head_container", 0.4, {
            rotation: 4,
            ease: Power4.easeOut
          });
          TweenMax.to("#face", 0.4, { y: 106, ease: Power4.easeOut });
  
          shrug();
  
          break;
        }
  
        case "okay": {
          TweenMax.set(["#eye-left-closed", "#eye-right-closed"], { opacity: 1 });
          TweenMax.set(["#ear-left-up-slight", "#ear-right-up-slight"], {
            y: 32,
            opacity: 1
          });
          TweenMax.to("#head_container", 0.4, { y: -2, ease: Power4.easeOut });
  
          TweenMax.to("#face", 0.4, {
            y: 100,
            ease: Power4.easeOut,
            onComplete: function () {
              //bodyResetObj['face'].x
  
              TweenMax.to("#head_container", 0.25, {
                y: 3,
                ease: Power4.easeOut
              });
              TweenMax.to("#face", 0.25, { y: 120, ease: Power4.easeOut });
  
              TweenMax.set(["#ear-left-up-slight", "#ear-right-up-slight"], {
                opacity: 0
              });
              TweenMax.set(["#ear-left-down", "#ear-right-down"], {
                y: 46,
                opacity: 1
              });
              TweenMax.to(["#ear-left-down", "#ear-right-down"], 0.25, { y: 56 });
  
              setTimeout(resetFeatures, 500);
            }
          });
  
          break;
        }
  
        case "normal":
        default: {
          TweenMax.to("#face", 0.4, {
            y: 106,
            ease: Power4.easeOut,
            onComplete: function () {
              //setTimeout(function() {
              //hideFeatures();
  
              TweenMax.set(["#eye-left", "#eye-right"], { opacity: 1 });
              TweenMax.set(["#ear-left", "#ear-right"], { opacity: 1 });
              TweenMax.to("#head_container", 0.25, {
                y: 0,
                ease: Power4.easeOut
              });
              TweenMax.to("#face", 0.25, { y: 109, ease: Power4.easeOut });
              canBlink(true);
              //}, 1200);
            }
          });
        }
      }
    }
  
    ///
    //	Change the mood of the background color
    ///
  
    function changeMood(mood) {
      var topColor = "#E94B4B";
      var bottomColor = "#E44771";
  
      switch (mood) {
        case "suspicious":
        case "warning": {
          topColor = "#E67E22";
          bottomColor = "#F39C12";
          break;
        }
  
        case "question": {
          topColor = "#AD5389";
          bottomColor = "#8E44AD";
          break;
        }
  
        case "okay": {
          topColor = "#27AE60";
          bottomColor = "#2FAE95";
          break;
        }
      }
  
      TweenMax.to("#bgGradient .top-offset", 0.3, {
        attr: { "stop-color": topColor },
        ease: Power4.easeOut
      });
      TweenMax.to("#bgGradient .bottom-offset", 0.3, {
        attr: { "stop-color": bottomColor },
        ease: Power4.easeOut
      });
    }
  
    ///
    //	Get the current x/y of all elements
    ///
  
    function showXY() {
      Object.keys(bodyResetObj).forEach(function (key) {
        var elem = "#" + key;
  
        var _mtx = $(elem).attr("transform");
        _mtx = _mtx.replace("matrix(", "");
        _mtx = _mtx.replace(")", "");
  
        if (_mtx.includes(" ")) {
          _mtx = _mtx.split(" ");
        } else {
          _mtx = _mtx.split(",");
        }
  
        //console.log(key, _mtx);
  
        var objString =
          "'" +
          key +
          "'" +
          ": { x: " +
          _mtx[4] +
          ", y: " +
          Math.round(_mtx[5]) +
          " }";
        $("#debug").append(objString + "<br />");
      });
    }
  
    ///
    //	Get the current co-ordinates of the passed element
    //	e.g. console.log('#ear-left-down: ', getBBox(document.querySelector('#ear-left-down')));
    ///
  
    function getBBox(element, withoutTransforms, toElement) {
      var svg = element.ownerSVGElement;
  
      if (!svg) {
        return { x: 0, y: 0, width: 0, height: 0 };
      }
  
      if (withoutTransforms) {
        return element.getBBox();
      }
  
      var p = svg.createSVGPoint();
      var r = element.getBBox();
  
      var matrix = (toElement || svg)
        .getScreenCTM()
        .inverse()
        .multiply(element.getScreenCTM());
  
      p.x = r.x;
      p.y = r.y;
      var a = p.matrixTransform(matrix);
  
      p.x = r.x + r.width;
      p.y = r.y;
      var b = p.matrixTransform(matrix);
  
      p.x = r.x + r.width;
      p.y = r.y + r.height;
      var c = p.matrixTransform(matrix);
  
      p.x = r.x;
      p.y = r.y + r.height;
      var d = p.matrixTransform(matrix);
  
      var minX = Math.min(a.x, b.x, c.x, d.x);
      var maxX = Math.max(a.x, b.x, c.x, d.x);
      var minY = Math.min(a.y, b.y, c.y, d.y);
      var maxY = Math.max(a.y, b.y, c.y, d.y);
  
      var width = maxX - minX;
      var height = maxY - minY;
  
      return {
        x: minX,
        y: minY,
        width: width,
        height: height,
        cx: minX + width / 2,
        cy: minY + height / 2
      };
    }
  });
  