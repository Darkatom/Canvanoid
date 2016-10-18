/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Solid = __webpack_require__(1);

	var _Solid2 = _interopRequireDefault(_Solid);

	var _Ball = __webpack_require__(2);

	var _Ball2 = _interopRequireDefault(_Ball);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var assert = __webpack_require__(4);

	console.log("- Testing Solid -");
	describe('Solid', function () {
	  describe('#collision()', function () {
	    it('Should return "top" when the ball collides the top', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      ball.x = solid.x + solid.w / 2;
	      ball.y = solid.y - ball.radius;
	      assert.equal("top", solid.collision(ball));
	    });

	    it('Should return "bottom" when the ball collides the bottom', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      ball.x = solid.x + solid.w / 2;
	      ball.y = solid.y + solid.h + ball.radius;
	      assert.equal("bottom", solid.collision(ball));
	    });

	    it('Should return "left" when the ball collides the left', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      ball.x = solid.x - ball.radius;
	      ball.y = solid.y + solid.h / 2;
	      assert.equal("left", solid.collision(ball));
	    });

	    it('Should return "right" when the ball collides the right', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      ball.x = solid.x + solid.w + ball.radius;
	      ball.y = solid.y + solid.h / 2;
	      assert.equal("right", solid.collision(ball));
	    });

	    it('Should return null when the ball does not collide', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      assert.equal(null, solid.collision(ball));
	    });
	  });

	  describe('#collided()', function () {
	    it('Passed "top" value, the new ball position should be on top of the solid', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      solid.collided("top", ball);
	      assert.equal("top", solid.collision(ball));
	    });

	    it('Passed "bottom" value, the new ball position should be beneath of the solid', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      solid.collided("bottom", ball);
	      assert.equal("bottom", solid.collision(ball));
	    });

	    it('Passed "left" value, the new ball position should be to the left of the solid', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      solid.collided("left", ball);
	      assert.equal("left", solid.collision(ball));
	    });

	    it('Passed "right" value, the new ball position should be to the right of the solid', function () {
	      var solid = new _Solid2.default(100, 100, 20, 20);
	      var ball = new _Ball2.default(0, 0);
	      solid.collided("right", ball);
	      assert.equal("right", solid.collision(ball));
	    });
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcc29saWQuc3BlYy5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImRlc2NyaWJlIiwiaXQiLCJzb2xpZCIsImJhbGwiLCJ4IiwidyIsInkiLCJyYWRpdXMiLCJlcXVhbCIsImNvbGxpc2lvbiIsImgiLCJjb2xsaWRlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0FDLFNBQVMsT0FBVCxFQUFrQixZQUFXO0FBQzNCQSxXQUFTLGNBQVQsRUFBeUIsWUFBVztBQUNsQ0MsT0FBRyxvREFBSCxFQUF5RCxZQUFXO0FBQ2xFLFVBQUlDLFFBQVEsb0JBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsQ0FBWjtBQUNBLFVBQUlDLE9BQU8sbUJBQVMsQ0FBVCxFQUFZLENBQVosQ0FBWDtBQUNBQSxXQUFLQyxDQUFMLEdBQVNGLE1BQU1FLENBQU4sR0FBVUYsTUFBTUcsQ0FBTixHQUFRLENBQTNCO0FBQ0FGLFdBQUtHLENBQUwsR0FBU0osTUFBTUksQ0FBTixHQUFVSCxLQUFLSSxNQUF4QjtBQUNBWCxhQUFPWSxLQUFQLENBQWEsS0FBYixFQUFvQk4sTUFBTU8sU0FBTixDQUFnQk4sSUFBaEIsQ0FBcEI7QUFDRCxLQU5EOztBQVFBRixPQUFHLDBEQUFILEVBQStELFlBQVc7QUFDeEUsVUFBSUMsUUFBUSxvQkFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFaO0FBQ0EsVUFBSUMsT0FBTyxtQkFBUyxDQUFULEVBQVksQ0FBWixDQUFYO0FBQ0FBLFdBQUtDLENBQUwsR0FBU0YsTUFBTUUsQ0FBTixHQUFVRixNQUFNRyxDQUFOLEdBQVEsQ0FBM0I7QUFDQUYsV0FBS0csQ0FBTCxHQUFTSixNQUFNSSxDQUFOLEdBQVVKLE1BQU1RLENBQWhCLEdBQW9CUCxLQUFLSSxNQUFsQztBQUNBWCxhQUFPWSxLQUFQLENBQWEsUUFBYixFQUF1Qk4sTUFBTU8sU0FBTixDQUFnQk4sSUFBaEIsQ0FBdkI7QUFDRCxLQU5EOztBQVFBRixPQUFHLHNEQUFILEVBQTJELFlBQVc7QUFDcEUsVUFBSUMsUUFBUSxvQkFBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFaO0FBQ0EsVUFBSUMsT0FBTyxtQkFBUyxDQUFULEVBQVksQ0FBWixDQUFYO0FBQ0FBLFdBQUtDLENBQUwsR0FBU0YsTUFBTUUsQ0FBTixHQUFVRCxLQUFLSSxNQUF4QjtBQUNBSixXQUFLRyxDQUFMLEdBQVNKLE1BQU1JLENBQU4sR0FBVUosTUFBTVEsQ0FBTixHQUFRLENBQTNCO0FBQ0FkLGFBQU9ZLEtBQVAsQ0FBYSxNQUFiLEVBQXFCTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUFyQjtBQUNELEtBTkQ7O0FBUUFGLE9BQUcsd0RBQUgsRUFBNkQsWUFBVztBQUN0RSxVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQUEsV0FBS0MsQ0FBTCxHQUFTRixNQUFNRSxDQUFOLEdBQVVGLE1BQU1HLENBQWhCLEdBQW9CRixLQUFLSSxNQUFsQztBQUNBSixXQUFLRyxDQUFMLEdBQVNKLE1BQU1JLENBQU4sR0FBVUosTUFBTVEsQ0FBTixHQUFRLENBQTNCO0FBQ0FkLGFBQU9ZLEtBQVAsQ0FBYSxPQUFiLEVBQXNCTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUF0QjtBQUNELEtBTkQ7O0FBUUFGLE9BQUcsbURBQUgsRUFBd0QsWUFBVztBQUNqRSxVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQVAsYUFBT1ksS0FBUCxDQUFhLElBQWIsRUFBbUJOLE1BQU1PLFNBQU4sQ0FBZ0JOLElBQWhCLENBQW5CO0FBQ0QsS0FKRDtBQUtELEdBdENEOztBQXdDQUgsV0FBUyxhQUFULEVBQXdCLFlBQVc7QUFDakNDLE9BQUcseUVBQUgsRUFBOEUsWUFBVztBQUN2RixVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQUQsWUFBTVMsUUFBTixDQUFlLEtBQWYsRUFBc0JSLElBQXRCO0FBQ0FQLGFBQU9ZLEtBQVAsQ0FBYSxLQUFiLEVBQW9CTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUFwQjtBQUNELEtBTEQ7O0FBT0FGLE9BQUcsNkVBQUgsRUFBa0YsWUFBVztBQUMzRixVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQUQsWUFBTVMsUUFBTixDQUFlLFFBQWYsRUFBeUJSLElBQXpCO0FBQ0FQLGFBQU9ZLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUF2QjtBQUNELEtBTEQ7O0FBT0FGLE9BQUcsK0VBQUgsRUFBb0YsWUFBVztBQUM3RixVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQUQsWUFBTVMsUUFBTixDQUFlLE1BQWYsRUFBdUJSLElBQXZCO0FBQ0FQLGFBQU9ZLEtBQVAsQ0FBYSxNQUFiLEVBQXFCTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUFyQjtBQUNELEtBTEQ7O0FBT0FGLE9BQUcsaUZBQUgsRUFBc0YsWUFBVztBQUMvRixVQUFJQyxRQUFRLG9CQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVo7QUFDQSxVQUFJQyxPQUFPLG1CQUFTLENBQVQsRUFBWSxDQUFaLENBQVg7QUFDQUQsWUFBTVMsUUFBTixDQUFlLE9BQWYsRUFBd0JSLElBQXhCO0FBQ0FQLGFBQU9ZLEtBQVAsQ0FBYSxPQUFiLEVBQXNCTixNQUFNTyxTQUFOLENBQWdCTixJQUFoQixDQUF0QjtBQUNELEtBTEQ7QUFNRCxHQTVCRDtBQTZCRCxDQXRFRCIsImZpbGUiOiJzb2xpZC5zcGVjLmpzIiwic291cmNlUm9vdCI6IkQ6L0Rlc2Fycm9sbG8vR2FtZXMgJiBQcm9ncmFtbWluZy9KYXZhc2NyaXB0L0NhbnZhbm9pZC9zcmMvc3BlY3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU29saWQgZnJvbSBcIi4vLi4vLi4vY2xhc3Nlcy9Tb2xpZC5qc1wiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi8uLi8uLi9jbGFzc2VzL0JhbGwuanNcIjtcclxuXHJcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiLSBUZXN0aW5nIFNvbGlkIC1cIik7XHJcbmRlc2NyaWJlKCdTb2xpZCcsIGZ1bmN0aW9uKCkge1xyXG4gIGRlc2NyaWJlKCcjY29sbGlzaW9uKCknLCBmdW5jdGlvbigpIHtcclxuICAgIGl0KCdTaG91bGQgcmV0dXJuIFwidG9wXCIgd2hlbiB0aGUgYmFsbCBjb2xsaWRlcyB0aGUgdG9wJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzb2xpZCA9IG5ldyBTb2xpZCgxMDAsIDEwMCwgMjAsIDIwKTtcclxuICAgICAgdmFyIGJhbGwgPSBuZXcgQmFsbCgwLCAwKTtcclxuICAgICAgYmFsbC54ID0gc29saWQueCArIHNvbGlkLncvMjtcclxuICAgICAgYmFsbC55ID0gc29saWQueSAtIGJhbGwucmFkaXVzO1xyXG4gICAgICBhc3NlcnQuZXF1YWwoXCJ0b3BcIiwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdTaG91bGQgcmV0dXJuIFwiYm90dG9tXCIgd2hlbiB0aGUgYmFsbCBjb2xsaWRlcyB0aGUgYm90dG9tJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzb2xpZCA9IG5ldyBTb2xpZCgxMDAsIDEwMCwgMjAsIDIwKTtcclxuICAgICAgdmFyIGJhbGwgPSBuZXcgQmFsbCgwLCAwKTtcclxuICAgICAgYmFsbC54ID0gc29saWQueCArIHNvbGlkLncvMjtcclxuICAgICAgYmFsbC55ID0gc29saWQueSArIHNvbGlkLmggKyBiYWxsLnJhZGl1cztcclxuICAgICAgYXNzZXJ0LmVxdWFsKFwiYm90dG9tXCIsIHNvbGlkLmNvbGxpc2lvbihiYWxsKSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ1Nob3VsZCByZXR1cm4gXCJsZWZ0XCIgd2hlbiB0aGUgYmFsbCBjb2xsaWRlcyB0aGUgbGVmdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc29saWQgPSBuZXcgU29saWQoMTAwLCAxMDAsIDIwLCAyMCk7XHJcbiAgICAgIHZhciBiYWxsID0gbmV3IEJhbGwoMCwgMCk7XHJcbiAgICAgIGJhbGwueCA9IHNvbGlkLnggLSBiYWxsLnJhZGl1cztcclxuICAgICAgYmFsbC55ID0gc29saWQueSArIHNvbGlkLmgvMjtcclxuICAgICAgYXNzZXJ0LmVxdWFsKFwibGVmdFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdTaG91bGQgcmV0dXJuIFwicmlnaHRcIiB3aGVuIHRoZSBiYWxsIGNvbGxpZGVzIHRoZSByaWdodCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc29saWQgPSBuZXcgU29saWQoMTAwLCAxMDAsIDIwLCAyMCk7XHJcbiAgICAgIHZhciBiYWxsID0gbmV3IEJhbGwoMCwgMCk7XHJcbiAgICAgIGJhbGwueCA9IHNvbGlkLnggKyBzb2xpZC53ICsgYmFsbC5yYWRpdXM7XHJcbiAgICAgIGJhbGwueSA9IHNvbGlkLnkgKyBzb2xpZC5oLzI7XHJcbiAgICAgIGFzc2VydC5lcXVhbChcInJpZ2h0XCIsIHNvbGlkLmNvbGxpc2lvbihiYWxsKSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ1Nob3VsZCByZXR1cm4gbnVsbCB3aGVuIHRoZSBiYWxsIGRvZXMgbm90IGNvbGxpZGUnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNvbGlkID0gbmV3IFNvbGlkKDEwMCwgMTAwLCAyMCwgMjApO1xyXG4gICAgICB2YXIgYmFsbCA9IG5ldyBCYWxsKDAsIDApO1xyXG4gICAgICBhc3NlcnQuZXF1YWwobnVsbCwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkZXNjcmliZSgnI2NvbGxpZGVkKCknLCBmdW5jdGlvbigpIHtcclxuICAgIGl0KCdQYXNzZWQgXCJ0b3BcIiB2YWx1ZSwgdGhlIG5ldyBiYWxsIHBvc2l0aW9uIHNob3VsZCBiZSBvbiB0b3Agb2YgdGhlIHNvbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBzb2xpZCA9IG5ldyBTb2xpZCgxMDAsIDEwMCwgMjAsIDIwKTtcclxuICAgICAgdmFyIGJhbGwgPSBuZXcgQmFsbCgwLCAwKTtcclxuICAgICAgc29saWQuY29sbGlkZWQoXCJ0b3BcIiwgYmFsbCk7XHJcbiAgICAgIGFzc2VydC5lcXVhbChcInRvcFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdQYXNzZWQgXCJib3R0b21cIiB2YWx1ZSwgdGhlIG5ldyBiYWxsIHBvc2l0aW9uIHNob3VsZCBiZSBiZW5lYXRoIG9mIHRoZSBzb2xpZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc29saWQgPSBuZXcgU29saWQoMTAwLCAxMDAsIDIwLCAyMCk7XHJcbiAgICAgIHZhciBiYWxsID0gbmV3IEJhbGwoMCwgMCk7XHJcbiAgICAgIHNvbGlkLmNvbGxpZGVkKFwiYm90dG9tXCIsIGJhbGwpO1xyXG4gICAgICBhc3NlcnQuZXF1YWwoXCJib3R0b21cIiwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdCgnUGFzc2VkIFwibGVmdFwiIHZhbHVlLCB0aGUgbmV3IGJhbGwgcG9zaXRpb24gc2hvdWxkIGJlIHRvIHRoZSBsZWZ0IG9mIHRoZSBzb2xpZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgc29saWQgPSBuZXcgU29saWQoMTAwLCAxMDAsIDIwLCAyMCk7XHJcbiAgICAgIHZhciBiYWxsID0gbmV3IEJhbGwoMCwgMCk7XHJcbiAgICAgIHNvbGlkLmNvbGxpZGVkKFwibGVmdFwiLCBiYWxsKTtcclxuICAgICAgYXNzZXJ0LmVxdWFsKFwibGVmdFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdQYXNzZWQgXCJyaWdodFwiIHZhbHVlLCB0aGUgbmV3IGJhbGwgcG9zaXRpb24gc2hvdWxkIGJlIHRvIHRoZSByaWdodCBvZiB0aGUgc29saWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNvbGlkID0gbmV3IFNvbGlkKDEwMCwgMTAwLCAyMCwgMjApO1xyXG4gICAgICB2YXIgYmFsbCA9IG5ldyBCYWxsKDAsIDApO1xyXG4gICAgICBzb2xpZC5jb2xsaWRlZChcInJpZ2h0XCIsIGJhbGwpO1xyXG4gICAgICBhc3NlcnQuZXF1YWwoXCJyaWdodFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Ball = __webpack_require__(2);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Sprite = __webpack_require__(3);

	var _Sprite2 = _interopRequireDefault(_Sprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Solid = function () {
	    function Solid(x, y, w, h) {
	        _classCallCheck(this, Solid);

	        this.x = x;
	        this.y = y;
	        this.w = w;
	        this.h = h;
	        this.sprite = null;
	    }

	    _createClass(Solid, [{
	        key: "draw",
	        value: function draw(ctx) {
	            if (this.sprite == null) ctx.strokeRect(this.x, this.y, this.w, this.h);else this.sprite.render(ctx, this.x, this.y, this.w, this.h);
	        }
	    }, {
	        key: "update",
	        value: function update(balls) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = balls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var b = _step.value;
	                    // look for collisions
	                    var dir = this.collision(b);
	                    if (dir != null) this.collided(dir, b);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "collided",
	        value: function collided(dir, ball) {
	            switch (dir) {
	                case "bottom":
	                    ball.changeDirection("vertical");
	                    ball.setPosition(ball.x, this.y + this.h + ball.radius);
	                    break;

	                case "top":
	                    ball.changeDirection("vertical");
	                    ball.setPosition(ball.x, this.y - ball.radius);
	                    break;

	                case "left":
	                    ball.changeDirection("horizontal");
	                    ball.setPosition(this.x - ball.radius, ball.y);
	                    break;

	                case "right":
	                    ball.changeDirection("horizontal");
	                    ball.setPosition(this.x + this.w + ball.radius, ball.y);
	                    break;
	            }
	        }
	    }, {
	        key: "collision",
	        value: function collision(ball) {
	            if (ball.x + ball.radius >= this.x && ball.x - ball.radius <= this.x + this.w && // horizontal collision
	            ball.y + ball.radius >= this.y && ball.y - ball.radius <= this.y + this.h) // vertical collision
	                {
	                    if (ball.last.y - ball.radius > this.y + this.h) {
	                        // hit bottom
	                        return "bottom";
	                    } else if (ball.last.y + ball.radius < this.y) {
	                        // hit top
	                        return "top";
	                    } else if (ball.last.x + ball.radius < this.x) {
	                        // hit left
	                        return "left";
	                    } else if (ball.last.x - ball.radius > this.x + this.w) {
	                        // hit right
	                        return "right";
	                    }
	                }

	            return null;
	        }
	    }]);

	    return Solid;
	}();

	exports.default = Solid;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxTb2xpZC5qcyJdLCJuYW1lcyI6WyJTb2xpZCIsIngiLCJ5IiwidyIsImgiLCJzcHJpdGUiLCJjdHgiLCJzdHJva2VSZWN0IiwicmVuZGVyIiwiYmFsbHMiLCJiIiwiZGlyIiwiY29sbGlzaW9uIiwiY29sbGlkZWQiLCJiYWxsIiwiY2hhbmdlRGlyZWN0aW9uIiwic2V0UG9zaXRpb24iLCJyYWRpdXMiLCJsYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxLO0FBQ2pCLG1CQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QjtBQUFBOztBQUMxQixhQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxhQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDTSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNIOzs7OzZCQUVJQyxHLEVBQUs7QUFDTixnQkFBSSxLQUFLRCxNQUFMLElBQWUsSUFBbkIsRUFDQ0MsSUFBSUMsVUFBSixDQUFlLEtBQUtOLENBQXBCLEVBQXVCLEtBQUtDLENBQTVCLEVBQStCLEtBQUtDLENBQXBDLEVBQXVDLEtBQUtDLENBQTVDLEVBREQsS0FHSSxLQUFLQyxNQUFMLENBQVlHLE1BQVosQ0FBbUJGLEdBQW5CLEVBQXdCLEtBQUtMLENBQTdCLEVBQWdDLEtBQUtDLENBQXJDLEVBQXdDLEtBQUtDLENBQTdDLEVBQWdELEtBQUtDLENBQXJEO0FBQ1A7OzsrQkFFTUssSyxFQUFPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ1YscUNBQWNBLEtBQWQsOEhBQXFCO0FBQUEsd0JBQVpDLENBQVk7QUFBRztBQUNwQix3QkFBSUMsTUFBTSxLQUFLQyxTQUFMLENBQWVGLENBQWYsQ0FBVjtBQUNBLHdCQUFJQyxPQUFPLElBQVgsRUFDSSxLQUFLRSxRQUFMLENBQWNGLEdBQWQsRUFBbUJELENBQW5CO0FBQ1A7QUFMUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWI7OztpQ0FFU0MsRyxFQUFLRyxJLEVBQU87QUFDbEIsb0JBQU9ILEdBQVA7QUFDSSxxQkFBSyxRQUFMO0FBQ0lHLHlCQUFLQyxlQUFMLENBQXFCLFVBQXJCO0FBQ0FELHlCQUFLRSxXQUFMLENBQWlCRixLQUFLYixDQUF0QixFQUF5QixLQUFLQyxDQUFMLEdBQVMsS0FBS0UsQ0FBZCxHQUFrQlUsS0FBS0csTUFBaEQ7QUFDQTs7QUFFSixxQkFBSyxLQUFMO0FBQ0lILHlCQUFLQyxlQUFMLENBQXFCLFVBQXJCO0FBQ0FELHlCQUFLRSxXQUFMLENBQWlCRixLQUFLYixDQUF0QixFQUF5QixLQUFLQyxDQUFMLEdBQVNZLEtBQUtHLE1BQXZDO0FBQ0E7O0FBRUoscUJBQUssTUFBTDtBQUNJSCx5QkFBS0MsZUFBTCxDQUFxQixZQUFyQjtBQUNBRCx5QkFBS0UsV0FBTCxDQUFpQixLQUFLZixDQUFMLEdBQVNhLEtBQUtHLE1BQS9CLEVBQXVDSCxLQUFLWixDQUE1QztBQUNBOztBQUVKLHFCQUFLLE9BQUw7QUFDSVkseUJBQUtDLGVBQUwsQ0FBcUIsWUFBckI7QUFDQUQseUJBQUtFLFdBQUwsQ0FBaUIsS0FBS2YsQ0FBTCxHQUFTLEtBQUtFLENBQWQsR0FBa0JXLEtBQUtHLE1BQXhDLEVBQWdESCxLQUFLWixDQUFyRDtBQUNBO0FBbkJSO0FBc0JIOzs7a0NBRVVZLEksRUFBTztBQUNkLGdCQUFLQSxLQUFLYixDQUFMLEdBQVNhLEtBQUtHLE1BQWQsSUFBd0IsS0FBS2hCLENBQTdCLElBQWtDYSxLQUFLYixDQUFMLEdBQVNhLEtBQUtHLE1BQWQsSUFBd0IsS0FBS2hCLENBQUwsR0FBUyxLQUFLRSxDQUF6RSxJQUErRTtBQUM5RVcsaUJBQUtaLENBQUwsR0FBU1ksS0FBS0csTUFBZCxJQUF3QixLQUFLZixDQUE3QixJQUFrQ1ksS0FBS1osQ0FBTCxHQUFTWSxLQUFLRyxNQUFkLElBQXdCLEtBQUtmLENBQUwsR0FBUyxLQUFLRSxDQUQ3RSxFQUNtRjtBQUNuRjtBQUNLLHdCQUFJVSxLQUFLSSxJQUFMLENBQVVoQixDQUFWLEdBQWNZLEtBQUtHLE1BQW5CLEdBQTRCLEtBQUtmLENBQUwsR0FBUyxLQUFLRSxDQUE5QyxFQUFpRDtBQUFHO0FBQ2pELCtCQUFPLFFBQVA7QUFFSCxxQkFIQSxNQUdNLElBQUlVLEtBQUtJLElBQUwsQ0FBVWhCLENBQVYsR0FBY1ksS0FBS0csTUFBbkIsR0FBNEIsS0FBS2YsQ0FBckMsRUFBd0M7QUFBRztBQUM5QywrQkFBTyxLQUFQO0FBRUgscUJBSE0sTUFHQSxJQUFJWSxLQUFLSSxJQUFMLENBQVVqQixDQUFWLEdBQWNhLEtBQUtHLE1BQW5CLEdBQTRCLEtBQUtoQixDQUFyQyxFQUF3QztBQUFHO0FBQzlDLCtCQUFPLE1BQVA7QUFFSCxxQkFITSxNQUdBLElBQUlhLEtBQUtJLElBQUwsQ0FBVWpCLENBQVYsR0FBY2EsS0FBS0csTUFBbkIsR0FBNEIsS0FBS2hCLENBQUwsR0FBUyxLQUFLRSxDQUE5QyxFQUFpRDtBQUFHO0FBQ3ZELCtCQUFPLE9BQVA7QUFDSDtBQUVKOztBQUVELG1CQUFPLElBQVA7QUFDSDs7Ozs7O2tCQXJFZ0JILEsiLCJmaWxlIjoiU29saWQuanMiLCJzb3VyY2VSb290IjoiRDovRGVzYXJyb2xsby9HYW1lcyAmIFByb2dyYW1taW5nL0phdmFzY3JpcHQvQ2FudmFub2lkL3NyYy9zcGVjcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWxsIGZyb20gXCIuL0JhbGwuanNcIjtcclxuaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbGlkIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgpIHtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1x0XHJcblx0XHR0aGlzLncgPSB3O1xyXG5cdFx0dGhpcy5oID0gaDsgXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlID09IG51bGwpXHJcblx0ICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1x0XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5yZW5kZXIoY3R4LCB0aGlzLngsIHRoaXMueSwgdGhpcy53LCB0aGlzLmgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShiYWxscykge1xyXG4gICAgICAgIGZvciAodmFyIGIgb2YgYmFsbHMpIHsgIC8vIGxvb2sgZm9yIGNvbGxpc2lvbnNcclxuICAgICAgICAgICAgdmFyIGRpciA9IHRoaXMuY29sbGlzaW9uKGIpO1xyXG4gICAgICAgICAgICBpZiAoZGlyICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxpZGVkKGRpciwgYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVkKCBkaXIsIGJhbGwgKSB7XHJcbiAgICAgICAgc3dpdGNoKGRpcikge1xyXG4gICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICBiYWxsLmNoYW5nZURpcmVjdGlvbihcInZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICAgICAgYmFsbC5zZXRQb3NpdGlvbihiYWxsLngsIHRoaXMueSArIHRoaXMuaCArIGJhbGwucmFkaXVzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgICAgICAgYmFsbC5jaGFuZ2VEaXJlY3Rpb24oXCJ2ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24oYmFsbC54LCB0aGlzLnkgLSBiYWxsLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBiYWxsLmNoYW5nZURpcmVjdGlvbihcImhvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgICAgICBiYWxsLnNldFBvc2l0aW9uKHRoaXMueCAtIGJhbGwucmFkaXVzLCBiYWxsLnkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIGJhbGwuY2hhbmdlRGlyZWN0aW9uKFwiaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24odGhpcy54ICsgdGhpcy53ICsgYmFsbC5yYWRpdXMsIGJhbGwueSk7ICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uKCBiYWxsICkgeyAgIFxyXG4gICAgICAgIGlmICgoYmFsbC54ICsgYmFsbC5yYWRpdXMgPj0gdGhpcy54ICYmIGJhbGwueCAtIGJhbGwucmFkaXVzIDw9IHRoaXMueCArIHRoaXMudykgJiYgLy8gaG9yaXpvbnRhbCBjb2xsaXNpb25cclxuICAgICAgICAgICAgKGJhbGwueSArIGJhbGwucmFkaXVzID49IHRoaXMueSAmJiBiYWxsLnkgLSBiYWxsLnJhZGl1cyA8PSB0aGlzLnkgKyB0aGlzLmgpKSAgIC8vIHZlcnRpY2FsIGNvbGxpc2lvblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgIGlmIChiYWxsLmxhc3QueSAtIGJhbGwucmFkaXVzID4gdGhpcy55ICsgdGhpcy5oKSB7ICAvLyBoaXQgYm90dG9tXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJib3R0b21cIjtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFsbC5sYXN0LnkgKyBiYWxsLnJhZGl1cyA8IHRoaXMueSkgeyAgLy8gaGl0IHRvcFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidG9wXCI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhbGwubGFzdC54ICsgYmFsbC5yYWRpdXMgPCB0aGlzLngpIHsgIC8vIGhpdCBsZWZ0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhbGwubGFzdC54IC0gYmFsbC5yYWRpdXMgPiB0aGlzLnggKyB0aGlzLncpIHsgIC8vIGhpdCByaWdodFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIjsgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsOyAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Sprite = __webpack_require__(3);

	var _Sprite2 = _interopRequireDefault(_Sprite);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	    function Ball(x, y) {
	        _classCallCheck(this, Ball);

	        this.x = x;
	        this.y = y;
	        this.last = { x: x, y: y };
	        this.radius = 8;
	        this.speed = 200;
	        this.vector = { x: Math.random(1, 3) - 2,
	            y: Math.random(1, 3) - 2 };

	        //this.sprite = new Sprite("./sprites/ball.png", this.radius*2,  this.radius*2, 0, 0);
	    }

	    _createClass(Ball, [{
	        key: "draw",
	        value: function draw(ctx) {
	            if (this.sprite == null) {
	                //ctx.strokeRect(b.x - b.radius, b.y - b.radius, b.radius*2, b.radius*2);	
	                ctx.beginPath();
	                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	                ctx.stroke();
	            } else {
	                this.sprite.render(ctx, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
	            }
	        }
	    }, {
	        key: "update",
	        value: function update(dt) {
	            this.move(dt);
	        }
	    }, {
	        key: "move",
	        value: function move(dt) {
	            this.last.x = this.x;
	            this.last.y = this.y;
	            this.x += this.vector.x * this.speed * dt;
	            this.y += this.vector.y * this.speed * dt;
	        }
	    }, {
	        key: "setPosition",
	        value: function setPosition(x, y) {
	            this.x = x;
	            this.y = y;
	        }
	    }, {
	        key: "setDirection",
	        value: function setDirection(x, y) {
	            this.vector.x = x;
	            this.vector.y = y;
	        }
	    }, {
	        key: "changeDirection",
	        value: function changeDirection(direction) {
	            if (direction == "vertical") this.vector.y = -this.vector.y;else this.vector.x = -this.vector.x;
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxCYWxsLmpzIl0sIm5hbWVzIjpbIkJhbGwiLCJ4IiwieSIsImxhc3QiLCJyYWRpdXMiLCJzcGVlZCIsInZlY3RvciIsIk1hdGgiLCJyYW5kb20iLCJjdHgiLCJzcHJpdGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZSIsInJlbmRlciIsImR0IiwibW92ZSIsImRpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFcUJBLEk7QUFDakIsa0JBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNkLGFBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtDLElBQUwsR0FBWSxFQUFFRixHQUFHQSxDQUFMLEVBQVFDLEdBQUdBLENBQVgsRUFBWjtBQUNBLGFBQUtFLE1BQUwsR0FBYyxDQUFkO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsRUFBRUwsR0FBR00sS0FBS0MsTUFBTCxDQUFZLENBQVosRUFBZSxDQUFmLElBQW9CLENBQXpCO0FBQ0VOLGVBQUdLLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixJQUFvQixDQUR6QixFQUFkOztBQUlBO0FBQ0g7Ozs7NkJBRUtDLEcsRUFBSztBQUNQLGdCQUFJLEtBQUtDLE1BQUwsSUFBZSxJQUFuQixFQUF3QjtBQUNwQjtBQUNBRCxvQkFBSUUsU0FBSjtBQUNBRixvQkFBSUcsR0FBSixDQUFRLEtBQUtYLENBQWIsRUFBZ0IsS0FBS0MsQ0FBckIsRUFBd0IsS0FBS0UsTUFBN0IsRUFBcUMsQ0FBckMsRUFBd0NHLEtBQUtNLEVBQUwsR0FBUSxDQUFoRCxFQUFtRCxJQUFuRDtBQUNBSixvQkFBSUssTUFBSjtBQUNILGFBTEQsTUFLTztBQUNILHFCQUFLSixNQUFMLENBQVlLLE1BQVosQ0FBbUJOLEdBQW5CLEVBQXdCLEtBQUtSLENBQUwsR0FBUyxLQUFLRyxNQUF0QyxFQUE4QyxLQUFLRixDQUFMLEdBQVMsS0FBS0UsTUFBNUQsRUFBb0UsS0FBS0EsTUFBTCxHQUFZLENBQWhGLEVBQW1GLEtBQUtBLE1BQUwsR0FBWSxDQUEvRjtBQUNIO0FBQ0o7OzsrQkFFT1ksRSxFQUFLO0FBQ1QsaUJBQUtDLElBQUwsQ0FBVUQsRUFBVjtBQUNIOzs7NkJBRUlBLEUsRUFBSTtBQUNMLGlCQUFLYixJQUFMLENBQVVGLENBQVYsR0FBYyxLQUFLQSxDQUFuQjtBQUNBLGlCQUFLRSxJQUFMLENBQVVELENBQVYsR0FBYyxLQUFLQSxDQUFuQjtBQUNBLGlCQUFLRCxDQUFMLElBQVUsS0FBS0ssTUFBTCxDQUFZTCxDQUFaLEdBQWMsS0FBS0ksS0FBbkIsR0FBeUJXLEVBQW5DO0FBQ0EsaUJBQUtkLENBQUwsSUFBVSxLQUFLSSxNQUFMLENBQVlKLENBQVosR0FBYyxLQUFLRyxLQUFuQixHQUF5QlcsRUFBbkM7QUFDSDs7O29DQUVXZixDLEVBQUdDLEMsRUFBRztBQUNkLGlCQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxpQkFBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7OztxQ0FFWUQsQyxFQUFHQyxDLEVBQUc7QUFDZixpQkFBS0ksTUFBTCxDQUFZTCxDQUFaLEdBQWdCQSxDQUFoQjtBQUNBLGlCQUFLSyxNQUFMLENBQVlKLENBQVosR0FBZ0JBLENBQWhCO0FBQ0g7Ozt3Q0FFZ0JnQixTLEVBQVk7QUFDekIsZ0JBQUlBLGFBQWEsVUFBakIsRUFDSSxLQUFLWixNQUFMLENBQVlKLENBQVosR0FBZ0IsQ0FBQyxLQUFLSSxNQUFMLENBQVlKLENBQTdCLENBREosS0FHSSxLQUFLSSxNQUFMLENBQVlMLENBQVosR0FBZ0IsQ0FBQyxLQUFLSyxNQUFMLENBQVlMLENBQTdCO0FBQ1A7Ozs7OztrQkFuRGdCRCxJIiwiZmlsZSI6IkJhbGwuanMiLCJzb3VyY2VSb290IjoiRDovRGVzYXJyb2xsby9HYW1lcyAmIFByb2dyYW1taW5nL0phdmFzY3JpcHQvQ2FudmFub2lkL3NyYy9zcGVjcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWxsIHsgIFxyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmxhc3QgPSB7IHg6IHgsIHk6IHl9O1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gODtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMjAwO1xyXG4gICAgICAgIHRoaXMudmVjdG9yID0geyB4OiBNYXRoLnJhbmRvbSgxLCAzKSAtIDIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgxLCAzKSAtIDIgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5zcHJpdGUgPSBuZXcgU3ByaXRlKFwiLi9zcHJpdGVzL2JhbGwucG5nXCIsIHRoaXMucmFkaXVzKjIsICB0aGlzLnJhZGl1cyoyLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3IChjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIC8vY3R4LnN0cm9rZVJlY3QoYi54IC0gYi5yYWRpdXMsIGIueSAtIGIucmFkaXVzLCBiLnJhZGl1cyoyLCBiLnJhZGl1cyoyKTtcdFxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUucmVuZGVyKGN0eCwgdGhpcy54IC0gdGhpcy5yYWRpdXMsIHRoaXMueSAtIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyoyLCB0aGlzLnJhZGl1cyoyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCBkdCApIHtcclxuICAgICAgICB0aGlzLm1vdmUoZHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZHQpIHtcclxuICAgICAgICB0aGlzLmxhc3QueCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLmxhc3QueSA9IHRoaXMueTtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWN0b3IueCp0aGlzLnNwZWVkKmR0O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlY3Rvci55KnRoaXMuc3BlZWQqZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMudmVjdG9yLnggPSB4O1xyXG4gICAgICAgIHRoaXMudmVjdG9yLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURpcmVjdGlvbiggZGlyZWN0aW9uICkgeyBcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgdGhpcy52ZWN0b3IueSA9IC10aGlzLnZlY3Rvci55O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy52ZWN0b3IueCA9IC10aGlzLnZlY3Rvci54O1xyXG4gICAgfVxyXG5cclxufSAiXX0=

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Sprite = function () {
	    function Sprite(src, w, h, posX, posY) {
	        _classCallCheck(this, Sprite);

	        this.img = new Image();
	        this.img.src = src;
	        this.w = w;
	        this.h = h;
	        this.posX = posX;
	        this.posY = posY;
	    }

	    _createClass(Sprite, [{
	        key: "render",
	        value: function render(ctx, x, y, w, h) {
	            ctx.drawImage(this.img, this.posX, this.posY, this.w, this.h, x, y, w, h);
	        }
	    }]);

	    return Sprite;
	}();

	exports.default = Sprite;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxTcHJpdGUuanMiXSwibmFtZXMiOlsiU3ByaXRlIiwic3JjIiwidyIsImgiLCJwb3NYIiwicG9zWSIsImltZyIsIkltYWdlIiwiY3R4IiwieCIsInkiLCJkcmF3SW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBLE07QUFDakIsb0JBQVlDLEdBQVosRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QkMsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQUE7O0FBQy9CLGFBQUtDLEdBQUwsR0FBVyxJQUFJQyxLQUFKLEVBQVg7QUFDQSxhQUFLRCxHQUFMLENBQVNMLEdBQVQsR0FBZUEsR0FBZjtBQUNBLGFBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNBLGFBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7OytCQUVNRyxHLEVBQUtDLEMsRUFBR0MsQyxFQUFHUixDLEVBQUdDLEMsRUFBRztBQUNwQkssZ0JBQUlHLFNBQUosQ0FBYyxLQUFLTCxHQUFuQixFQUNjLEtBQUtGLElBRG5CLEVBQ3lCLEtBQUtDLElBRDlCLEVBRWMsS0FBS0gsQ0FGbkIsRUFFc0IsS0FBS0MsQ0FGM0IsRUFHY00sQ0FIZCxFQUdpQkMsQ0FIakIsRUFJY1IsQ0FKZCxFQUlpQkMsQ0FKakI7QUFLSDs7Ozs7O2tCQWhCZ0JILE0iLCJmaWxlIjoiU3ByaXRlLmpzIiwic291cmNlUm9vdCI6IkQ6L0Rlc2Fycm9sbG8vR2FtZXMgJiBQcm9ncmFtbWluZy9KYXZhc2NyaXB0L0NhbnZhbm9pZC9zcmMvc3BlY3MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUge1xyXG4gICAgY29uc3RydWN0b3Ioc3JjLCB3LCBoLCBwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltZy5zcmMgPSBzcmM7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgdGhpcy5wb3NZID0gcG9zWTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoY3R4LCB4LCB5LCB3LCBoKSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZyxcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zWCwgdGhpcy5wb3NZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy53LCB0aGlzLmgsXHJcbiAgICAgICAgICAgICAgICAgICAgICB4LCB5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdywgaCk7XHJcbiAgICB9XHJcblxyXG59Il19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}

	// based on node assert, original notice:

	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	var util = __webpack_require__(5);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = (function () {
	  return function foo() {}.name === 'foo';
	}());
	function pToString (obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert = module.exports = ok;

	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })

	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;

	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }

	      this.stack = out;
	    }
	  }
	};

	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);

	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' +  name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' +
	         self.operator + ' ' +
	         truncate(inspect(self.expected), 128);
	}

	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.

	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}

	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;

	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.

	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;

	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);

	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};

	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);

	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};

	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);

	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};

	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};

	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;

	  // 7.2. If the expected value is a Date object, the actual value is
	  // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();

	  // 7.3 If the expected value is a RegExp object, the actual value is
	  // equivalent if it is also a RegExp object with the same source and
	  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source &&
	           actual.global === expected.global &&
	           actual.multiline === expected.multiline &&
	           actual.lastIndex === expected.lastIndex &&
	           actual.ignoreCase === expected.ignoreCase;

	  // 7.4. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if ((actual === null || typeof actual !== 'object') &&
	             (expected === null || typeof expected !== 'object')) {
	    return strict ? actual === expected : actual == expected;

	  // If both values are instances of typed arrays, wrap their underlying
	  // ArrayBuffers in a Buffer each to increase performance
	  // This optimization requires the arrays to have the same type as checked by
	  // Object.prototype.toString (aka pToString). Never perform binary
	  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	  // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) &&
	             pToString(actual) === pToString(expected) &&
	             !(actual instanceof Float32Array ||
	               actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer),
	                   new Uint8Array(expected.buffer)) === 0;

	  // 7.5 For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || {actual: [], expected: []};

	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }

	    memos.actual.push(actual);
	    memos.expected.push(expected);

	    return objEquiv(actual, expected, strict, memos);
	  }
	}

	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}

	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined)
	    return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b))
	    return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
	    return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
	    return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
	      return false;
	  }
	  return true;
	}

	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);

	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};

	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}


	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);

	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};

	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};

	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }

	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }

	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }

	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }

	  return expected.call({}, actual) === true;
	}

	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}

	function _throws(shouldThrow, block, expected, message) {
	  var actual;

	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }

	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }

	  actual = _tryBlock(block);

	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
	            (message ? ' ' + message : '.');

	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }

	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;

	  if ((isUnwantedException &&
	      userProvidedMessage &&
	      expectedException(actual, expected)) ||
	      isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }

	  if ((shouldThrow && actual && expected &&
	      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
	    throw actual;
	  }
	}

	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);

	assert.throws = function(block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};

	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};

	assert.ifError = function(err) { if (err) throw err; };

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(7);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(8);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ }
/******/ ]);