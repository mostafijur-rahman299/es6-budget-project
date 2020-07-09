/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n\n    this.budgetFeedback = document.querySelector(\".budget-feedback\");\n    this.expenseFeedback = document.querySelector(\".expense-feedback\");\n    this.budgetForm = document.getElementById(\"budget-form\");\n    this.budgetInput = document.getElementById(\"budget-input\");\n    this.budgetAmount = document.getElementById(\"budget-amount\");\n    this.expenseAmount = document.getElementById(\"expense-amount\");\n    this.balance = document.getElementById(\"balance\");\n    this.balanceAmount = document.getElementById(\"balance-amount\");\n    this.expenseForm = document.getElementById(\"expense-form\");\n    this.expenseInput = document.getElementById(\"expense-input\");\n    this.amountInput = document.getElementById(\"amount-input\");\n    this.expenseList = document.getElementById(\"expense-list\");\n    this.itemList = [];\n    this.itemID = 0;\n  } // submit budget button\n\n\n  _createClass(UI, [{\n    key: \"submitBudgetForm\",\n    value: function submitBudgetForm() {\n      var value = this.budgetInput.value;\n      var that = this;\n\n      if (value === '' || value < 0) {\n        this.budgetFeedback.classList.add(\"showItem\");\n        this.budgetFeedback.innerHTML = \"<p> value cannot be empty or negative </p>\";\n        setTimeout(function () {\n          that.budgetFeedback.classList.remove(\"showItem\");\n        }, 4000);\n      } else {\n        this.budgetAmount.textContent = value;\n        this.budgetInput.value = '';\n        this.showBalance();\n      }\n    } // submit expnese form\n\n  }, {\n    key: \"submitExpenseForm\",\n    value: function submitExpenseForm() {\n      var expenceValue = this.expenseInput.value;\n      var amountValue = this.amountInput.value;\n      var that = this;\n\n      if (expenceValue === '' || amountValue === '' || amountValue < 0) {\n        this.expenseFeedback.classList.add('showItem');\n        this.expenseFeedback.innerHTML = \"<p> values cannot be empty or negative </p>\";\n        setTimeout(function () {\n          that.expenseFeedback.classList.remove('showItem');\n        }, 4000);\n      } else {\n        var amount = parseInt(amountValue);\n        this.expenseInput.value = '';\n        this.amountInput.value = '';\n        var expense = {\n          id: this.itemID,\n          title: expenceValue,\n          amount: amountValue\n        };\n        this.itemID++;\n        this.itemList.push(expense);\n        this.addExpense(expense);\n        this.showBalance();\n      }\n    } // show balance\n\n  }, {\n    key: \"showBalance\",\n    value: function showBalance() {\n      var expense = this.totalExpense();\n      var total = parseInt(this.budgetAmount.textContent) - expense;\n      this.balanceAmount.textContent = total;\n\n      if (total < 0) {\n        this.balance.classList.remove('showGreen', 'showBlack');\n        this.balance.classList.add('showRed');\n      } else if (total > 0) {\n        this.balance.classList.remove('showRed', 'showBlack');\n        this.balance.classList.add('showGreen');\n      } else if (total === 0) {\n        this.balance.classList.remove('showRed', 'showGreen');\n        this.balance.classList.add('showBlack');\n      }\n    } // add expense\n\n  }, {\n    key: \"addExpense\",\n    value: function addExpense(expense) {\n      var div = document.createElement('div');\n      div.classList.add('expense');\n      div.innerHTML = \"<div class=\\\"expense-item d-flex justify-content-between align-items-baseline\\\">\\n\\n         <h6 class=\\\"expense-title mb-0 text-uppercase list-item\\\">\".concat(expense.title, \"</h6>\\n         <h5 class=\\\"expense-amount mb-0 list-item\\\">\").concat(expense.amount, \"</h5>\\n\\n         <div class=\\\"expense-icons list-item\\\">\\n\\n          <a href=\\\"#\\\" class=\\\"edit-icon mx-2\\\" data-id=\\\"\").concat(expense.id, \"\\\">\\n           <i class=\\\"fas fa-edit\\\"></i>\\n          </a>\\n          <a href=\\\"#\\\" class=\\\"delete-icon\\\" data-id=\\\"\").concat(expense.id, \"\\\">\\n           <i class=\\\"fas fa-trash\\\"></i>\\n          </a>\\n         </div>\");\n      this.expenseList.appendChild(div);\n    } // total expence\n\n  }, {\n    key: \"totalExpense\",\n    value: function totalExpense() {\n      var total = 0;\n\n      if (this.itemList.length > 0) {\n        total = this.itemList.reduce(function (sum, current) {\n          return sum += parseInt(current.amount);\n        }, 0);\n      }\n\n      this.expenseAmount.textContent = total;\n      return total;\n    } // edit expense \n\n  }, {\n    key: \"editExpense\",\n    value: function editExpense(element) {\n      var id = parseInt(element.dataset.id);\n      var parent = element.parentElement.parentElement.parentElement;\n      this.expenseList.removeChild(parent);\n      var expense = this.itemList.filter(function (item) {\n        return item.id === id;\n      });\n      this.expenseInput.value = expense[0].title;\n      this.amountInput.value = expense[0].amount;\n      var tempList = this.itemList.filter(function (item) {\n        return item.id !== id;\n      });\n      this.itemList = tempList;\n      this.showBalance();\n    } // delete expense \n\n  }, {\n    key: \"deleteExpense\",\n    value: function deleteExpense(element) {\n      var id = parseInt(element.dataset.id);\n      var parent = element.parentElement.parentElement.parentElement;\n      this.expenseList.removeChild(parent);\n      var tempList = this.itemList.filter(function (item) {\n        return item.id !== id;\n      });\n      this.itemList = tempList;\n      this.showBalance();\n    }\n  }]);\n\n  return UI;\n}();\n\nfunction eventListenters() {\n  var budgetForm = document.getElementById('budget-form');\n  var expenseForm = document.getElementById('expense-form');\n  var expenseList = document.getElementById('expense-list');\n  var ui = new UI();\n  budgetForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    ui.submitBudgetForm();\n  });\n  expenseForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    ui.submitExpenseForm();\n  });\n  expenseList.addEventListener('click', function (event) {\n    if (event.target.parentElement.classList.contains('edit-icon')) {\n      ui.editExpense(event.target.parentElement);\n    } else if (event.target.parentElement.classList.contains('delete-icon')) {\n      ui.deleteExpense(event.target.parentElement);\n    }\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  eventListenters();\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });