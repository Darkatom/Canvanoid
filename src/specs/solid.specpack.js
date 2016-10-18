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
	  describe('#collision(ball)', function () {
	    var solid = new _Solid2.default(100, 100, 20, 20);
	    var ball = new _Ball2.default(0, 0);

	    it('Ball collides the top', function () {
	      ball.setPosition(solid.position.x + solid.width / 2, solid.position.y);
	      ball.setLastPosition(ball.position.x, ball.position.y - solid.height / 2);

	      assert.equal("top", solid.collision(ball));
	    });

	    it('Ball collides the bottom', function () {
	      ball.setPosition(solid.position.x + solid.width / 2, solid.position.y + solid.height);
	      ball.setLastPosition(ball.position.x, ball.position.y + solid.height / 2);

	      assert.equal("bottom", solid.collision(ball));
	    });

	    it('Ball collides the left', function () {
	      ball.setPosition(solid.position.x, solid.position.y + solid.height / 2);
	      ball.setLastPosition(ball.position.x - solid.width / 2, ball.position.y);

	      assert.equal("left", solid.collision(ball));
	    });

	    it('Ball collides the right', function () {
	      ball.setPosition(solid.position.x + solid.width, solid.position.y + solid.height / 2);
	      ball.setLastPosition(ball.position.x + solid.width / 2, ball.position.y);
	      assert.equal("right", solid.collision(ball));
	    });

	    it('Ball does not collide', function () {
	      ball.setPosition(0, 0);
	      ball.setLastPosition(0, 0);
	      assert.equal(null, solid.collision(ball));
	    });
	  });

	  console.log("\n");

	  describe('#collided(), checked with #collision(ball)', function () {
	    var solid = new _Solid2.default(100, 100, 20, 20);
	    var ball = new _Ball2.default(0, 0);

	    it("Ball is repositioned at solid's top, and collides", function () {
	      ball.setPosition(solid.position.x + solid.width / 2, solid.position.y);
	      ball.setLastPosition(ball.position.x, ball.position.y - solid.height / 2);
	      solid.collided("top", ball);
	      assert.equal("top", solid.collision(ball));
	    });

	    it("Ball is repositioned at solid's bottom, and collides", function () {
	      ball.setPosition(solid.position.x + solid.width / 2, solid.position.y + solid.height);
	      ball.setLastPosition(ball.position.x, ball.position.y + solid.height / 2);
	      solid.collided("bottom", ball);
	      assert.equal("bottom", solid.collision(ball));
	    });

	    it("Ball is repositioned at solid's left, and collides", function () {
	      ball.setPosition(solid.position.x, solid.position.y + solid.height / 2);
	      ball.setLastPosition(ball.position.x - solid.width / 2, ball.position.y);
	      solid.collided("left", ball);
	      assert.equal("left", solid.collision(ball));
	    });

	    it("Ball is repositioned at solid's right, and collides", function () {
	      ball.setPosition(solid.position.x + solid.width, solid.position.y + solid.height / 2);
	      ball.setLastPosition(ball.position.x + solid.width / 2, ball.position.y);
	      solid.collided("right", ball);
	      assert.equal("right", solid.collision(ball));
	    });
	  });
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcc29saWQuc3BlYy5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImRlc2NyaWJlIiwic29saWQiLCJiYWxsIiwiaXQiLCJzZXRQb3NpdGlvbiIsInBvc2l0aW9uIiwieCIsIndpZHRoIiwieSIsInNldExhc3RQb3NpdGlvbiIsImhlaWdodCIsImVxdWFsIiwiY29sbGlzaW9uIiwiY29sbGlkZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBQyxTQUFTLE9BQVQsRUFBa0IsWUFBVztBQUMzQkEsV0FBUyxrQkFBVCxFQUE2QixZQUFXO0FBQ3RDLFFBQUlDLFFBQVEsb0JBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsQ0FBWjtBQUNBLFFBQUlDLE9BQU8sbUJBQVMsQ0FBVCxFQUFZLENBQVosQ0FBWDs7QUFFQUMsT0FBRyx1QkFBSCxFQUE0QixZQUFXO0FBQ3JDRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQU4sR0FBWSxDQUFoRCxFQUFtRE4sTUFBTUksUUFBTixDQUFlRyxDQUFsRTtBQUNBTixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQW5DLEVBQXNDSixLQUFLRyxRQUFMLENBQWNHLENBQWQsR0FBa0JQLE1BQU1TLE1BQU4sR0FBYSxDQUFyRTs7QUFFQWQsYUFBT2UsS0FBUCxDQUFhLEtBQWIsRUFBb0JWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXBCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRywwQkFBSCxFQUErQixZQUFXO0FBQ3hDRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQU4sR0FBWSxDQUFoRCxFQUFtRE4sTUFBTUksUUFBTixDQUFlRyxDQUFmLEdBQW1CUCxNQUFNUyxNQUE1RTtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQW5DLEVBQXNDSixLQUFLRyxRQUFMLENBQWNHLENBQWQsR0FBa0JQLE1BQU1TLE1BQU4sR0FBYSxDQUFyRTs7QUFFQWQsYUFBT2UsS0FBUCxDQUFhLFFBQWIsRUFBdUJWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXZCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRyx3QkFBSCxFQUE2QixZQUFXO0FBQ3RDRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWhDLEVBQW1DTCxNQUFNSSxRQUFOLENBQWVHLENBQWYsR0FBbUJQLE1BQU1TLE1BQU4sR0FBYSxDQUFuRTtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQWQsR0FBa0JMLE1BQU1NLEtBQU4sR0FBWSxDQUFuRCxFQUFzREwsS0FBS0csUUFBTCxDQUFjRyxDQUFwRTs7QUFFQVosYUFBT2UsS0FBUCxDQUFhLE1BQWIsRUFBcUJWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXJCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRyx5QkFBSCxFQUE4QixZQUFXO0FBQ3ZDRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQTFDLEVBQWlETixNQUFNSSxRQUFOLENBQWVHLENBQWYsR0FBbUJQLE1BQU1TLE1BQU4sR0FBYSxDQUFqRjtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQWQsR0FBa0JMLE1BQU1NLEtBQU4sR0FBWSxDQUFuRCxFQUFzREwsS0FBS0csUUFBTCxDQUFjRyxDQUFwRTtBQUNBWixhQUFPZSxLQUFQLENBQWEsT0FBYixFQUFzQlYsTUFBTVcsU0FBTixDQUFnQlYsSUFBaEIsQ0FBdEI7QUFDRCxLQUpEOztBQU1BQyxPQUFHLHVCQUFILEVBQTRCLFlBQVc7QUFDckNELFdBQUtFLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQUYsV0FBS08sZUFBTCxDQUFxQixDQUFyQixFQUF3QixDQUF4QjtBQUNBYixhQUFPZSxLQUFQLENBQWEsSUFBYixFQUFtQlYsTUFBTVcsU0FBTixDQUFnQlYsSUFBaEIsQ0FBbkI7QUFDRCxLQUpEO0FBS0QsR0FwQ0Q7O0FBc0NBSixVQUFRQyxHQUFSLENBQVksSUFBWjs7QUFFQUMsV0FBUyw0Q0FBVCxFQUF1RCxZQUFXO0FBQ2hFLFFBQUlDLFFBQVEsb0JBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsQ0FBWjtBQUNBLFFBQUlDLE9BQU8sbUJBQVMsQ0FBVCxFQUFZLENBQVosQ0FBWDs7QUFFQUMsT0FBRyxtREFBSCxFQUF3RCxZQUFXO0FBQ2pFRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQU4sR0FBWSxDQUFoRCxFQUFtRE4sTUFBTUksUUFBTixDQUFlRyxDQUFsRTtBQUNBTixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQW5DLEVBQXNDSixLQUFLRyxRQUFMLENBQWNHLENBQWQsR0FBa0JQLE1BQU1TLE1BQU4sR0FBYSxDQUFyRTtBQUNBVCxZQUFNWSxRQUFOLENBQWUsS0FBZixFQUFzQlgsSUFBdEI7QUFDQU4sYUFBT2UsS0FBUCxDQUFhLEtBQWIsRUFBb0JWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXBCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRyxzREFBSCxFQUEyRCxZQUFXO0FBQ3BFRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQU4sR0FBWSxDQUFoRCxFQUFtRE4sTUFBTUksUUFBTixDQUFlRyxDQUFmLEdBQW1CUCxNQUFNUyxNQUE1RTtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQW5DLEVBQXNDSixLQUFLRyxRQUFMLENBQWNHLENBQWQsR0FBa0JQLE1BQU1TLE1BQU4sR0FBYSxDQUFyRTtBQUNBVCxZQUFNWSxRQUFOLENBQWUsUUFBZixFQUF5QlgsSUFBekI7QUFDQU4sYUFBT2UsS0FBUCxDQUFhLFFBQWIsRUFBdUJWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXZCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRyxvREFBSCxFQUF5RCxZQUFXO0FBQ2xFRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWhDLEVBQW1DTCxNQUFNSSxRQUFOLENBQWVHLENBQWYsR0FBbUJQLE1BQU1TLE1BQU4sR0FBYSxDQUFuRTtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQWQsR0FBa0JMLE1BQU1NLEtBQU4sR0FBWSxDQUFuRCxFQUFzREwsS0FBS0csUUFBTCxDQUFjRyxDQUFwRTtBQUNBUCxZQUFNWSxRQUFOLENBQWUsTUFBZixFQUF1QlgsSUFBdkI7QUFDQU4sYUFBT2UsS0FBUCxDQUFhLE1BQWIsRUFBcUJWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXJCO0FBQ0QsS0FMRDs7QUFPQUMsT0FBRyxxREFBSCxFQUEwRCxZQUFXO0FBQ25FRCxXQUFLRSxXQUFMLENBQWlCSCxNQUFNSSxRQUFOLENBQWVDLENBQWYsR0FBbUJMLE1BQU1NLEtBQTFDLEVBQWlETixNQUFNSSxRQUFOLENBQWVHLENBQWYsR0FBbUJQLE1BQU1TLE1BQU4sR0FBYSxDQUFqRjtBQUNBUixXQUFLTyxlQUFMLENBQXFCUCxLQUFLRyxRQUFMLENBQWNDLENBQWQsR0FBa0JMLE1BQU1NLEtBQU4sR0FBWSxDQUFuRCxFQUFzREwsS0FBS0csUUFBTCxDQUFjRyxDQUFwRTtBQUNBUCxZQUFNWSxRQUFOLENBQWUsT0FBZixFQUF3QlgsSUFBeEI7QUFDQU4sYUFBT2UsS0FBUCxDQUFhLE9BQWIsRUFBc0JWLE1BQU1XLFNBQU4sQ0FBZ0JWLElBQWhCLENBQXRCO0FBQ0QsS0FMRDtBQU1ELEdBL0JEO0FBZ0NELENBekVEIiwiZmlsZSI6InNvbGlkLnNwZWMuanMiLCJzb3VyY2VSb290IjoiRDovRGVzYXJyb2xsby9HYW1lcyAmIFByb2dyYW1taW5nL0phdmFzY3JpcHQvQ2FudmFub2lkL3NyYy9zcGVjcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb2xpZCBmcm9tIFwiLi8uLi8uLi9jbGFzc2VzL1NvbGlkLmpzXCI7XHJcbmltcG9ydCBCYWxsIGZyb20gXCIuLy4uLy4uL2NsYXNzZXMvQmFsbC5qc1wiO1xyXG5cclxudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xyXG5cclxuY29uc29sZS5sb2coXCItIFRlc3RpbmcgU29saWQgLVwiKTtcclxuZGVzY3JpYmUoJ1NvbGlkJywgZnVuY3Rpb24oKSB7XHJcbiAgZGVzY3JpYmUoJyNjb2xsaXNpb24oYmFsbCknLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzb2xpZCA9IG5ldyBTb2xpZCgxMDAsIDEwMCwgMjAsIDIwKTtcclxuICAgIHZhciBiYWxsID0gbmV3IEJhbGwoMCwgMCk7XHJcblxyXG4gICAgaXQoJ0JhbGwgY29sbGlkZXMgdGhlIHRvcCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBiYWxsLnNldFBvc2l0aW9uKHNvbGlkLnBvc2l0aW9uLnggKyBzb2xpZC53aWR0aC8yLCBzb2xpZC5wb3NpdGlvbi55KTtcclxuICAgICAgYmFsbC5zZXRMYXN0UG9zaXRpb24oYmFsbC5wb3NpdGlvbi54LCBiYWxsLnBvc2l0aW9uLnkgLSBzb2xpZC5oZWlnaHQvMik7XHJcblxyXG4gICAgICBhc3NlcnQuZXF1YWwoXCJ0b3BcIiwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KCdCYWxsIGNvbGxpZGVzIHRoZSBib3R0b20nLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmFsbC5zZXRQb3NpdGlvbihzb2xpZC5wb3NpdGlvbi54ICsgc29saWQud2lkdGgvMiwgc29saWQucG9zaXRpb24ueSArIHNvbGlkLmhlaWdodCk7XHJcbiAgICAgIGJhbGwuc2V0TGFzdFBvc2l0aW9uKGJhbGwucG9zaXRpb24ueCwgYmFsbC5wb3NpdGlvbi55ICsgc29saWQuaGVpZ2h0LzIpO1xyXG5cclxuICAgICAgYXNzZXJ0LmVxdWFsKFwiYm90dG9tXCIsIHNvbGlkLmNvbGxpc2lvbihiYWxsKSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoJ0JhbGwgY29sbGlkZXMgdGhlIGxlZnQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmFsbC5zZXRQb3NpdGlvbihzb2xpZC5wb3NpdGlvbi54LCBzb2xpZC5wb3NpdGlvbi55ICsgc29saWQuaGVpZ2h0LzIpO1xyXG4gICAgICBiYWxsLnNldExhc3RQb3NpdGlvbihiYWxsLnBvc2l0aW9uLnggLSBzb2xpZC53aWR0aC8yLCBiYWxsLnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgYXNzZXJ0LmVxdWFsKFwibGVmdFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KCdCYWxsIGNvbGxpZGVzIHRoZSByaWdodCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBiYWxsLnNldFBvc2l0aW9uKHNvbGlkLnBvc2l0aW9uLnggKyBzb2xpZC53aWR0aCwgc29saWQucG9zaXRpb24ueSArIHNvbGlkLmhlaWdodC8yKTtcclxuICAgICAgYmFsbC5zZXRMYXN0UG9zaXRpb24oYmFsbC5wb3NpdGlvbi54ICsgc29saWQud2lkdGgvMiwgYmFsbC5wb3NpdGlvbi55KTtcclxuICAgICAgYXNzZXJ0LmVxdWFsKFwicmlnaHRcIiwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdCgnQmFsbCBkb2VzIG5vdCBjb2xsaWRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJhbGwuc2V0UG9zaXRpb24oMCwgMCk7XHJcbiAgICAgIGJhbGwuc2V0TGFzdFBvc2l0aW9uKDAsIDApO1xyXG4gICAgICBhc3NlcnQuZXF1YWwobnVsbCwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIlxcblwiKTtcclxuXHJcbiAgZGVzY3JpYmUoJyNjb2xsaWRlZCgpLCBjaGVja2VkIHdpdGggI2NvbGxpc2lvbihiYWxsKScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNvbGlkID0gbmV3IFNvbGlkKDEwMCwgMTAwLCAyMCwgMjApO1xyXG4gICAgdmFyIGJhbGwgPSBuZXcgQmFsbCgwLCAwKTtcclxuXHJcbiAgICBpdChcIkJhbGwgaXMgcmVwb3NpdGlvbmVkIGF0IHNvbGlkJ3MgdG9wLCBhbmQgY29sbGlkZXNcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGJhbGwuc2V0UG9zaXRpb24oc29saWQucG9zaXRpb24ueCArIHNvbGlkLndpZHRoLzIsIHNvbGlkLnBvc2l0aW9uLnkpO1xyXG4gICAgICBiYWxsLnNldExhc3RQb3NpdGlvbihiYWxsLnBvc2l0aW9uLngsIGJhbGwucG9zaXRpb24ueSAtIHNvbGlkLmhlaWdodC8yKTtcclxuICAgICAgc29saWQuY29sbGlkZWQoXCJ0b3BcIiwgYmFsbCk7XHJcbiAgICAgIGFzc2VydC5lcXVhbChcInRvcFwiLCBzb2xpZC5jb2xsaXNpb24oYmFsbCkpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGl0KFwiQmFsbCBpcyByZXBvc2l0aW9uZWQgYXQgc29saWQncyBib3R0b20sIGFuZCBjb2xsaWRlc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmFsbC5zZXRQb3NpdGlvbihzb2xpZC5wb3NpdGlvbi54ICsgc29saWQud2lkdGgvMiwgc29saWQucG9zaXRpb24ueSArIHNvbGlkLmhlaWdodCk7XHJcbiAgICAgIGJhbGwuc2V0TGFzdFBvc2l0aW9uKGJhbGwucG9zaXRpb24ueCwgYmFsbC5wb3NpdGlvbi55ICsgc29saWQuaGVpZ2h0LzIpO1xyXG4gICAgICBzb2xpZC5jb2xsaWRlZChcImJvdHRvbVwiLCBiYWxsKTtcclxuICAgICAgYXNzZXJ0LmVxdWFsKFwiYm90dG9tXCIsIHNvbGlkLmNvbGxpc2lvbihiYWxsKSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgaXQoXCJCYWxsIGlzIHJlcG9zaXRpb25lZCBhdCBzb2xpZCdzIGxlZnQsIGFuZCBjb2xsaWRlc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmFsbC5zZXRQb3NpdGlvbihzb2xpZC5wb3NpdGlvbi54LCBzb2xpZC5wb3NpdGlvbi55ICsgc29saWQuaGVpZ2h0LzIpO1xyXG4gICAgICBiYWxsLnNldExhc3RQb3NpdGlvbihiYWxsLnBvc2l0aW9uLnggLSBzb2xpZC53aWR0aC8yLCBiYWxsLnBvc2l0aW9uLnkpO1xyXG4gICAgICBzb2xpZC5jb2xsaWRlZChcImxlZnRcIiwgYmFsbCk7XHJcbiAgICAgIGFzc2VydC5lcXVhbChcImxlZnRcIiwgc29saWQuY29sbGlzaW9uKGJhbGwpKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpdChcIkJhbGwgaXMgcmVwb3NpdGlvbmVkIGF0IHNvbGlkJ3MgcmlnaHQsIGFuZCBjb2xsaWRlc1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgYmFsbC5zZXRQb3NpdGlvbihzb2xpZC5wb3NpdGlvbi54ICsgc29saWQud2lkdGgsIHNvbGlkLnBvc2l0aW9uLnkgKyBzb2xpZC5oZWlnaHQvMik7XHJcbiAgICAgIGJhbGwuc2V0TGFzdFBvc2l0aW9uKGJhbGwucG9zaXRpb24ueCArIHNvbGlkLndpZHRoLzIsIGJhbGwucG9zaXRpb24ueSk7XHJcbiAgICAgIHNvbGlkLmNvbGxpZGVkKFwicmlnaHRcIiwgYmFsbCk7XHJcbiAgICAgIGFzc2VydC5lcXVhbChcInJpZ2h0XCIsIHNvbGlkLmNvbGxpc2lvbihiYWxsKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufSk7Il19

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

	        this.position = { x: x, y: y };
	        this.width = w;
	        this.height = h;
	        this.sprite = null;
	    }

	    _createClass(Solid, [{
	        key: "setPosition",
	        value: function setPosition(x, y) {
	            this.position.x = x;
	            this.position.y = y;
	        }
	    }, {
	        key: "draw",
	        value: function draw(ctx) {
	            if (this.sprite == null) ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);else this.sprite.render(ctx, this.position.x, this.position.y, this.width, this.height);
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
	                    ball.setDirection(ball.movementVector.x, -ball.movementVector.y); // change movement vertically
	                    ball.setPosition(ball.position.x, this.position.y + this.height + ball.radius); // put ball bottom from solid
	                    break;

	                case "top":
	                    ball.setDirection(ball.movementVector.x, -ball.movementVector.y); // change movement vertically
	                    ball.setPosition(ball.position.x, this.position.y - ball.radius); // put ball top from solid
	                    break;

	                case "left":
	                    ball.setDirection(-ball.movementVector.x, ball.movementVector.y); // change movement horizontally
	                    ball.setPosition(this.position.x - ball.radius, ball.position.y); // put ball left from solid
	                    break;

	                case "right":
	                    ball.setDirection(-ball.movementVector.x, ball.movementVector.y); // change movement horizontally
	                    ball.setPosition(this.position.x + this.width + ball.radius, ball.position.y); // put ball right from solid
	                    break;
	            }
	        }
	    }, {
	        key: "collision",
	        value: function collision(ball) {
	            if (ball.position.x + ball.radius >= this.position.x && ball.position.x - ball.radius <= this.position.x + this.width && // horizontal collision
	            ball.position.y + ball.radius >= this.position.y && ball.position.y - ball.radius <= this.position.y + this.height) // vertical collision
	                {
	                    if (ball.lastPosition.y - ball.radius > this.position.y + this.height) {
	                        // hit bottom
	                        return "bottom";
	                    } else if (ball.lastPosition.y + ball.radius < this.position.y) {
	                        // hit top
	                        return "top";
	                    } else if (ball.lastPosition.x + ball.radius < this.position.x) {
	                        // hit left
	                        return "left";
	                    } else if (ball.lastPosition.x - ball.radius > this.position.x + this.width) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxTb2xpZC5qcyJdLCJuYW1lcyI6WyJTb2xpZCIsIngiLCJ5IiwidyIsImgiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwic3ByaXRlIiwiY3R4Iiwic3Ryb2tlUmVjdCIsInJlbmRlciIsImJhbGxzIiwiYiIsImRpciIsImNvbGxpc2lvbiIsImNvbGxpZGVkIiwiYmFsbCIsInNldERpcmVjdGlvbiIsIm1vdmVtZW50VmVjdG9yIiwic2V0UG9zaXRpb24iLCJyYWRpdXMiLCJsYXN0UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7SUFFcUJBLEs7QUFDakIsbUJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLEVBQXdCO0FBQUE7O0FBQ3BCLGFBQUtDLFFBQUwsR0FBZ0IsRUFBQ0osR0FBR0EsQ0FBSixFQUFPQyxHQUFHQSxDQUFWLEVBQWhCO0FBQ04sYUFBS0ksS0FBTCxHQUFhSCxDQUFiO0FBQ0EsYUFBS0ksTUFBTCxHQUFjSCxDQUFkO0FBQ00sYUFBS0ksTUFBTCxHQUFjLElBQWQ7QUFDSDs7OztvQ0FFV1AsQyxFQUFHQyxDLEVBQUc7QUFDZCxpQkFBS0csUUFBTCxDQUFjSixDQUFkLEdBQWtCQSxDQUFsQjtBQUNBLGlCQUFLSSxRQUFMLENBQWNILENBQWQsR0FBa0JBLENBQWxCO0FBQ0g7Ozs2QkFFSU8sRyxFQUFLO0FBQ04sZ0JBQUksS0FBS0QsTUFBTCxJQUFlLElBQW5CLEVBQ0NDLElBQUlDLFVBQUosQ0FBZSxLQUFLTCxRQUFMLENBQWNKLENBQTdCLEVBQWdDLEtBQUtJLFFBQUwsQ0FBY0gsQ0FBOUMsRUFBaUQsS0FBS0ksS0FBdEQsRUFBNkQsS0FBS0MsTUFBbEUsRUFERCxLQUdJLEtBQUtDLE1BQUwsQ0FBWUcsTUFBWixDQUFtQkYsR0FBbkIsRUFBd0IsS0FBS0osUUFBTCxDQUFjSixDQUF0QyxFQUF5QyxLQUFLSSxRQUFMLENBQWNILENB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LEtBQUtLLE1BQS9ELEVBQXVFO0FBQUc7QUFDdkUsK0JBQU8sUUFBUDtBQUVILHFCQUhBLE1BR00sSUFBSVUsS0FBS0ssWUFBTCxDQUFrQnBCLENBQWxCLEdBQXNCZSxLQUFLSSxNQUEzQixHQUFvQyxLQUFLaEIsUUFBTCxDQUFjSCxDQUF0RCxFQUF5RDtBQUFHO0FBQy9ELCtCQUFPLEtBQVA7QUFFSCxxQkFITSxNQUdBLElBQUllLEtBQUtLLFlBQUwsQ0FBa0JyQixDQUFsQixHQUFzQmdCLEtBQUtJLE1BQTNCLEdBQW9DLEtBQUtoQixRQUFMLENBQWNKLENBQXRELEVBQXlEO0FBQUc7QUFDL0QsK0JBQU8sTUFBUDtBQUVILHFCQUhNLE1BR0EsSUFBSWdCLEtBQUtLLFlBQUwsQ0FBa0JyQixDQUFsQixHQUFzQmdCLEtBQUtJLE1BQTNCLEdBQW9DLEtBQUtoQixRQUFMLENBQWNKLENBQWQsR0FBa0IsS0FBS0ssS0FBL0QsRUFBc0U7QUFBRztBQUM1RSwrQkFBTyxPQUFQO0FBQ0g7QUFFSjs7QUFFRCxtQkFBTyxJQUFQO0FBQ0g7Ozs7OztrQkF6RWdCTixLIiwiZmlsZSI6IlNvbGlkLmpzIiwic291cmNlUm9vdCI6IkQ6L0Rlc2Fycm9sbG8vR2FtZXMgJiBQcm9ncmFtbWluZy9KYXZhc2NyaXB0L0NhbnZhbm9pZC9zcmMvc3BlY3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFsbCBmcm9tIFwiLi9CYWxsLmpzXCI7XHJcbmltcG9ydCBTcHJpdGUgZnJvbSBcIi4vU3ByaXRlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2xpZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3LCBoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHt4OiB4LCB5OiB5fTsgXHJcblx0XHR0aGlzLndpZHRoID0gdztcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaDsgXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGUgPT0gbnVsbClcclxuXHQgICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHRcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLnJlbmRlcihjdHgsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGJhbGxzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgYiBvZiBiYWxscykgeyAgLy8gbG9vayBmb3IgY29sbGlzaW9uc1xyXG4gICAgICAgICAgICB2YXIgZGlyID0gdGhpcy5jb2xsaXNpb24oYik7XHJcbiAgICAgICAgICAgIGlmIChkaXIgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGlkZWQoZGlyLCBiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZWQoIGRpciwgYmFsbCApIHtcclxuICAgICAgICBzd2l0Y2goZGlyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJib3R0b21cIjpcclxuICAgICAgICAgICAgICAgIGJhbGwuc2V0RGlyZWN0aW9uKGJhbGwubW92ZW1lbnRWZWN0b3IueCwgLWJhbGwubW92ZW1lbnRWZWN0b3IueSk7ICAgLy8gY2hhbmdlIG1vdmVtZW50IHZlcnRpY2FsbHlcclxuICAgICAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24oYmFsbC5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIGJhbGwucmFkaXVzKTsgICAvLyBwdXQgYmFsbCBib3R0b20gZnJvbSBzb2xpZFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICAgICAgICBiYWxsLnNldERpcmVjdGlvbihiYWxsLm1vdmVtZW50VmVjdG9yLngsIC1iYWxsLm1vdmVtZW50VmVjdG9yLnkpOyAgIC8vIGNoYW5nZSBtb3ZlbWVudCB2ZXJ0aWNhbGx5XHJcbiAgICAgICAgICAgICAgICBiYWxsLnNldFBvc2l0aW9uKGJhbGwucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55IC0gYmFsbC5yYWRpdXMpOyAgIC8vIHB1dCBiYWxsIHRvcCBmcm9tIHNvbGlkXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBiYWxsLnNldERpcmVjdGlvbigtYmFsbC5tb3ZlbWVudFZlY3Rvci54LCBiYWxsLm1vdmVtZW50VmVjdG9yLnkpOyAgIC8vIGNoYW5nZSBtb3ZlbWVudCBob3Jpem9udGFsbHlcclxuICAgICAgICAgICAgICAgIGJhbGwuc2V0UG9zaXRpb24odGhpcy5wb3NpdGlvbi54IC0gYmFsbC5yYWRpdXMsIGJhbGwucG9zaXRpb24ueSk7ICAgLy8gcHV0IGJhbGwgbGVmdCBmcm9tIHNvbGlkXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgYmFsbC5zZXREaXJlY3Rpb24oLWJhbGwubW92ZW1lbnRWZWN0b3IueCwgYmFsbC5tb3ZlbWVudFZlY3Rvci55KTsgICAvLyBjaGFuZ2UgbW92ZW1lbnQgaG9yaXpvbnRhbGx5XHJcbiAgICAgICAgICAgICAgICBiYWxsLnNldFBvc2l0aW9uKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggKyBiYWxsLnJhZGl1cywgYmFsbC5wb3NpdGlvbi55KTsgICAvLyBwdXQgYmFsbCByaWdodCBmcm9tIHNvbGlkXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpc2lvbiggYmFsbCApIHsgICBcclxuICAgICAgICBpZiAoKGJhbGwucG9zaXRpb24ueCArIGJhbGwucmFkaXVzID49IHRoaXMucG9zaXRpb24ueCAmJiBiYWxsLnBvc2l0aW9uLnggLSBiYWxsLnJhZGl1cyA8PSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoKSAmJiAvLyBob3Jpem9udGFsIGNvbGxpc2lvblxyXG4gICAgICAgICAgICAoYmFsbC5wb3NpdGlvbi55ICsgYmFsbC5yYWRpdXMgPj0gdGhpcy5wb3NpdGlvbi55ICYmIGJhbGwucG9zaXRpb24ueSAtIGJhbGwucmFkaXVzIDw9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KSkgICAvLyB2ZXJ0aWNhbCBjb2xsaXNpb25cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICBpZiAoYmFsbC5sYXN0UG9zaXRpb24ueSAtIGJhbGwucmFkaXVzID4gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpIHsgIC8vIGhpdCBib3R0b21cclxuICAgICAgICAgICAgICAgIHJldHVybiBcImJvdHRvbVwiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWxsLmxhc3RQb3NpdGlvbi55ICsgYmFsbC5yYWRpdXMgPCB0aGlzLnBvc2l0aW9uLnkpIHsgIC8vIGhpdCB0b3BcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRvcFwiO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWxsLmxhc3RQb3NpdGlvbi54ICsgYmFsbC5yYWRpdXMgPCB0aGlzLnBvc2l0aW9uLngpIHsgIC8vIGhpdCBsZWZ0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJhbGwubGFzdFBvc2l0aW9uLnggLSBiYWxsLnJhZGl1cyA+IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgpIHsgIC8vIGhpdCByaWdodFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIjsgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsOyAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=

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

	        this.position = { x: x, y: y };
	        this.lastPosition = { x: x, y: y };
	        this.radius = 8;
	        this.speed = 200;
	        this.movementVector = { x: Math.random(1, 3) - 2,
	            y: Math.random(1, 3) - 2 };

	        // this.sprite = new Sprite("./sprites/ball.png", 0, 0, 16, 16);
	    }

	    _createClass(Ball, [{
	        key: "setPosition",
	        value: function setPosition(x, y) {
	            this.position.x = x;
	            this.position.y = y;
	        }
	    }, {
	        key: "setLastPosition",
	        value: function setLastPosition(x, y) {
	            this.lastPosition.x = x;
	            this.lastPosition.y = y;
	        }
	    }, {
	        key: "setDirection",
	        value: function setDirection(x, y) {
	            this.movementVector.x = x;
	            this.movementVector.y = y;
	        }
	    }, {
	        key: "draw",
	        value: function draw(ctx) {
	            if (this.sprite == null) {
	                //ctx.strokeRect(b.x - b.radius, b.y - b.radius, b.radius*2, b.radius*2);	
	                ctx.beginPath();
	                ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
	                ctx.stroke();
	            } else {
	                this.sprite.render(ctx, this.position.x - this.radius, this.position.y - this.radius, this.radius * 2, this.radius * 2);
	            }
	        }
	    }, {
	        key: "update",
	        value: function update(dt) {
	            // dt = delta time
	            this.move(dt);
	        }
	    }, {
	        key: "move",
	        value: function move(dt) {
	            this.setLastPosition(this.position.x, this.position.y);
	            this.setPosition(this.position.x + this.movementVector.x * this.speed * dt, this.position.y + this.movementVector.y * this.speed * dt);
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxCYWxsLmpzIl0sIm5hbWVzIjpbIkJhbGwiLCJ4IiwieSIsInBvc2l0aW9uIiwibGFzdFBvc2l0aW9uIiwicmFkaXVzIiwic3BlZWQiLCJtb3ZlbWVudFZlY3RvciIsIk1hdGgiLCJyYW5kb20iLCJjdHgiLCJzcHJpdGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZSIsInJlbmRlciIsImR0IiwibW92ZSIsInNldExhc3RQb3NpdGlvbiIsInNldFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsSTtBQUNqQixrQkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0MsUUFBTCxHQUFnQixFQUFFRixHQUFHQSxDQUFMLEVBQVFDLEdBQUdBLENBQVgsRUFBaEI7QUFDQSxhQUFLRSxZQUFMLEdBQW9CLEVBQUVILEdBQUdBLENBQUwsRUFBUUMsR0FBR0EsQ0FBWCxFQUFwQjtBQUNBLGFBQUtHLE1BQUwsR0FBYyxDQUFkO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxhQUFLQyxjQUFMLEdBQXNCLEVBQUVOLEdBQUdPLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZixJQUFvQixDQUF6QjtBQUNFUCxlQUFHTSxLQUFLQyxNQUFMLENBQVksQ0FBWixFQUFlLENBQWYsSUFBb0IsQ0FEekIsRUFBdEI7O0FBR0Q7QUFDRjs7OztvQ0FFV1IsQyxFQUFHQyxDLEVBQUc7QUFDZCxpQkFBS0MsUUFBTCxDQUFjRixDQUFkLEdBQWtCQSxDQUFsQjtBQUNBLGlCQUFLRSxRQUFMLENBQWNELENBQWQsR0FBa0JBLENBQWxCO0FBQ0g7Ozt3Q0FFZUQsQyxFQUFHQyxDLEVBQUc7QUFDbEIsaUJBQUtFLFlBQUwsQ0FBa0JILENBQWxCLEdBQXNCQSxDQUF0QjtBQUNBLGlCQUFLRyxZQUFMLENBQWtCRixDQUFsQixHQUFzQkEsQ0FBdEI7QUFDSDs7O3FDQUVZRCxDLEVBQUdDLEMsRUFBRztBQUNmLGlCQUFLSyxjQUFMLENBQW9CTixDQUFwQixHQUF3QkEsQ0FBeEI7QUFDQSxpQkFBS00sY0FBTCxDQUFvQkwsQ0FBcEIsR0FBd0JBLENBQXhCO0FBQ0g7Ozs2QkFFS1EsRyxFQUFLO0FBQ1AsZ0JBQUksS0FBS0MsTUFBTCxJQUFlLElBQW5CLEVBQXdCO0FBQ3BCO0FBQ0FELG9CQUFJRSxTQUFKO0FBQ0FGLG9CQUFJRyxHQUFKLENBQVEsS0FBS1YsUUFBTCxDQUFjRixDQUF0QixFQUF5QixLQUFLRSxRQUFMLENBQWNELENBQXZDLEVBQTBDLEtBQUtHLE1BQS9DLEVBQXVELENBQXZELEVBQTBERyxLQUFLTSxFQUFMLEdBQVEsQ0FBbEUsRUFBcUUsSUFBckU7QUFDQUosb0JBQUlLLE1BQUo7QUFDSCxhQUxELE1BS087QUFDSCxxQkFBS0osTUFBTCxDQUFZSyxNQUFaLENBQW1CTixHQUFuQixFQUF3QixLQUFLUCxRQUFMLENBQWNGLENBQWQsR0FBa0IsS0FBS0ksTUFBL0MsRUFBdUQsS0FBS0YsUUFBTCxDQUFjRCxDQUFkLEdBQWtCLEtBQUtHLE1BQTlFLEVBQXNGLEtBQUtBLE1BQUwsR0FBWSxDQUFsRyxFQUFxRyxLQUFLQSxNQUFMLEdBQVksQ0FBakg7QUFDSDtBQUNKOzs7K0JBRU1ZLEUsRUFBSTtBQUFLO0FBQ1osaUJBQUtDLElBQUwsQ0FBVUQsRUFBVjtBQUNIOzs7NkJBRUlBLEUsRUFBSTtBQUNMLGlCQUFLRSxlQUFMLENBQXFCLEtBQUtoQixRQUFMLENBQWNGLENBQW5DLEVBQXNDLEtBQUtFLFFBQUwsQ0FBY0QsQ0FBcEQ7QUFDQSxpQkFBS2tCLFdBQUwsQ0FBaUIsS0FBS2pCLFFBQUwsQ0FBY0YsQ0FBZCxHQUFrQixLQUFLTSxjQUFMLENBQW9CTixDQUFwQixHQUFzQixLQUFLSyxLQUEzQixHQUFpQ1csRUFBcEUsRUFDaUIsS0FBS2QsUUFBTCxDQUFjRCxDQUFkLEdBQWtCLEtBQUtLLGNBQUwsQ0FBb0JMLENBQXBCLEdBQXNCLEtBQUtJLEtBQTNCLEdBQWlDVyxFQURwRTtBQUVIOzs7Ozs7a0JBOUNnQmpCLEkiLCJmaWxlIjoiQmFsbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9EZXNhcnJvbGxvL0dhbWVzICYgUHJvZ3JhbW1pbmcvSmF2YXNjcmlwdC9DYW52YW5vaWQvc3JjL3NwZWNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9TcHJpdGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwgeyAgXHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHsgeDogeCwgeTogeSB9OyBcclxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHsgeDogeCwgeTogeSB9OyBcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IDg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDIwMDtcclxuICAgICAgICB0aGlzLm1vdmVtZW50VmVjdG9yID0geyB4OiBNYXRoLnJhbmRvbSgxLCAzKSAtIDIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IE1hdGgucmFuZG9tKDEsIDMpIC0gMiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgIC8vIHRoaXMuc3ByaXRlID0gbmV3IFNwcml0ZShcIi4vc3ByaXRlcy9iYWxsLnBuZ1wiLCAwLCAwLCAxNiwgMTYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGFzdFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbi54ID0geDtcclxuICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbi55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnRWZWN0b3IueCA9IHg7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudFZlY3Rvci55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3IChjdHgpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIC8vY3R4LnN0cm9rZVJlY3QoYi54IC0gYi5yYWRpdXMsIGIueSAtIGIucmFkaXVzLCBiLnJhZGl1cyoyLCBiLnJhZGl1cyoyKTtcdFxyXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJKjIsIHRydWUpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUucmVuZGVyKGN0eCwgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMsIHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzLCB0aGlzLnJhZGl1cyoyLCB0aGlzLnJhZGl1cyoyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7ICAgIC8vIGR0ID0gZGVsdGEgdGltZVxyXG4gICAgICAgIHRoaXMubW92ZShkdCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShkdCkge1xyXG4gICAgICAgIHRoaXMuc2V0TGFzdFBvc2l0aW9uKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMucG9zaXRpb24ueCArIHRoaXMubW92ZW1lbnRWZWN0b3IueCp0aGlzLnNwZWVkKmR0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5tb3ZlbWVudFZlY3Rvci55KnRoaXMuc3BlZWQqZHQpO1xyXG4gICAgfVxyXG5cclxufSAiXX0=

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
	    function Sprite(src, x, y, w, h) {
	        _classCallCheck(this, Sprite);

	        this.img = new Image();
	        this.img.src = src;
	        this.quad = { x: x == null ? 0 : x, // Quad to be drawn from the sprite sheet
	            y: y == null ? 0 : y,
	            width: w,
	            height: h };
	    }

	    _createClass(Sprite, [{
	        key: "render",
	        value: function render(ctx, x, y, w, h) {
	            ctx.drawImage(this.img, this.quad.x, this.quad.y, this.quad.width, this.quad.height, x, y, w, h);
	        }
	    }]);

	    return Sprite;
	}();

	exports.default = Sprite;
	module.exports = exports["default"];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxjbGFzc2VzXFxTcHJpdGUuanMiXSwibmFtZXMiOlsiU3ByaXRlIiwic3JjIiwieCIsInkiLCJ3IiwiaCIsImltZyIsIkltYWdlIiwicXVhZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZHJhd0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxNO0FBQ2pCLG9CQUFZQyxHQUFaLEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUFBOztBQUN6QixhQUFLQyxHQUFMLEdBQVcsSUFBSUMsS0FBSixFQUFYO0FBQ0EsYUFBS0QsR0FBTCxDQUFTTCxHQUFULEdBQWVBLEdBQWY7QUFDQSxhQUFLTyxJQUFMLEdBQVksRUFBRU4sR0FBR0EsS0FBSyxJQUFMLEdBQVksQ0FBWixHQUFnQkEsQ0FBckIsRUFBd0I7QUFDdEJDLGVBQUdBLEtBQUssSUFBTCxHQUFZLENBQVosR0FBZ0JBLENBRHJCO0FBRUVNLG1CQUFPTCxDQUZUO0FBR0VNLG9CQUFRTCxDQUhWLEVBQVo7QUFJSDs7OzsrQkFFTU0sRyxFQUFLVCxDLEVBQUdDLEMsRUFBR0MsQyxFQUFHQyxDLEVBQUc7QUFDcEJNLGdCQUFJQyxTQUFKLENBQWMsS0FBS04sR0FBbkIsRUFDYyxLQUFLRSxJQUFMLENBQVVOLENBRHhCLEVBQzJCLEtBQUtNLElBQUwsQ0FBVUwsQ0FEckMsRUFDd0MsS0FBS0ssSUFBTCxDQUFVQyxLQURsRCxFQUN5RCxLQUFLRCxJQUFMLENBQVVFLE1BRG5FLEVBRWNSLENBRmQsRUFFaUJDLENBRmpCLEVBRW9CQyxDQUZwQixFQUV1QkMsQ0FGdkI7QUFHSDs7Ozs7O2tCQWRnQkwsTSIsImZpbGUiOiJTcHJpdGUuanMiLCJzb3VyY2VSb290IjoiRDovRGVzYXJyb2xsby9HYW1lcyAmIFByb2dyYW1taW5nL0phdmFzY3JpcHQvQ2FudmFub2lkL3NyYy9zcGVjcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcmMsIHgsIHksIHcsIGgpIHtcclxuICAgICAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IHNyYztcclxuICAgICAgICB0aGlzLnF1YWQgPSB7IHg6IHggPT0gbnVsbCA/IDAgOiB4LCAvLyBRdWFkIHRvIGJlIGRyYXduIGZyb20gdGhlIHNwcml0ZSBzaGVldFxyXG4gICAgICAgICAgICAgICAgICAgICAgeTogeSA9PSBudWxsID8gMCA6IHksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoIH07IFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihjdHgsIHgsIHksIHcsIGgpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWFkLngsIHRoaXMucXVhZC55LCB0aGlzLnF1YWQud2lkdGgsIHRoaXMucXVhZC5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB4LCB5LCB3LCBoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=

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