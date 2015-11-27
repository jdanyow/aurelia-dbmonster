System.register([], function (_export) {
  "use strict";

  var Dbmonster, SimpleClassCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Dbmonster = (function () {
        function Dbmonster() {
          _classCallCheck(this, Dbmonster);

          this.databases = [];
        }

        _createClass(Dbmonster, [{
          key: "activate",
          value: function activate() {
            var _this = this;

            var load = undefined;
            load = function () {
              _this.databases = ENV.generateData().toArray();
              Monitoring.renderRate.ping();
              setTimeout(load, ENV.timeout);
            };
            load();
          }
        }]);

        return Dbmonster;
      })();

      _export("Dbmonster", Dbmonster);

      SimpleClassCustomAttribute = (function () {
        _createClass(SimpleClassCustomAttribute, null, [{
          key: "inject",
          value: [Element],
          enumerable: true
        }]);

        function SimpleClassCustomAttribute(element) {
          _classCallCheck(this, SimpleClassCustomAttribute);

          this.element = element;
        }

        _createClass(SimpleClassCustomAttribute, [{
          key: "valueChanged",
          value: function valueChanged(newValue) {
            this.element.className = newValue;
          }
        }]);

        return SimpleClassCustomAttribute;
      })();

      _export("SimpleClassCustomAttribute", SimpleClassCustomAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxTQUFTLEVBY1QsMEJBQTBCOzs7Ozs7Ozs7QUFkMUIsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7O2VBQ3BCLFNBQVMsR0FBRyxFQUFFOzs7cUJBREgsU0FBUzs7aUJBR1osb0JBQUc7OztBQUNULGdCQUFJLElBQUksWUFBQSxDQUFDO0FBQ1QsZ0JBQUksR0FBRyxZQUFNO0FBQ1gsb0JBQUssU0FBUyxHQUFHLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM5Qyx3QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3Qix3QkFBVSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0IsQ0FBQztBQUNGLGdCQUFJLEVBQUUsQ0FBQztXQUNSOzs7ZUFYVSxTQUFTOzs7OztBQWNULGdDQUEwQjtxQkFBMUIsMEJBQTBCOztpQkFDckIsQ0FBQyxPQUFPLENBQUM7Ozs7QUFFZCxpQkFIQSwwQkFBMEIsQ0FHekIsT0FBTyxFQUFFO2dDQUhWLDBCQUEwQjs7QUFJbkMsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUxVLDBCQUEwQjs7aUJBT3pCLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1dBQ25DOzs7ZUFUVSwwQkFBMEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERibW9uc3RlciB7XHJcbiAgZGF0YWJhc2VzID0gW107XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgbGV0IGxvYWQ7XHJcbiAgICBsb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFiYXNlcyA9IEVOVi5nZW5lcmF0ZURhdGEoKS50b0FycmF5KCk7XHJcbiAgICAgIE1vbml0b3JpbmcucmVuZGVyUmF0ZS5waW5nKCk7XHJcbiAgICAgIHNldFRpbWVvdXQobG9hZCwgRU5WLnRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIGxvYWQoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVDbGFzc0N1c3RvbUF0dHJpYnV0ZSB7XHJcbiAgc3RhdGljIGluamVjdCA9IFtFbGVtZW50XTtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IG5ld1ZhbHVlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
