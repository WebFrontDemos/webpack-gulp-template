webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Created by sloong on 2016/6/1.
	 */
	//在pathmap.json 里面配置了commons.css的alias别名 commonCss
	__webpack_require__(1);
	__webpack_require__(3);
	//avalon 测试
	var avalon = __webpack_require__(6);
	avalon.define({
	    $id: "avalonCtrl",
	    name: "Hello Avalon!"
	});

	/*
	//zepto 测试
	require("zepto")

	$("<div>这是zepto生成的</div>").appendTo("body")*/

	//jquery 测试
	var $ = __webpack_require__(7);
	$("<div>这是jquery生成的</div>").appendTo("body");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);