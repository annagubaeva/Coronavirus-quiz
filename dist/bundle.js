/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const animation = (num) => {
  
  // Virus

  const viruses = [],
        container = document.querySelector(".container"),
        virusNum = 2;

  for (let i = 0; i < virusNum; i++) {
  let virus = document.createElement('img');
  virus.src = "/src/assets/img/virus.png";
  virus.classList.add('virus');
  virus.style.top = `${Math.floor(Math.random() * 90)}%`;
  virus.style.left = `${Math.floor(Math.random() * 90)}%`;
  viruses.push(virus);
  container.append(virus);
  }

  // Keyframes

  viruses.forEach((el, i, ra) => {
    let to = {
      x: Math.random() * (i % 2 === 0 ? -10 : 10),
      y: Math.random() * 12
    };

    let anim = el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` }
      ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
    );
  });

  // Emoji

  const emojiState = (num = 0) => {
    const emoji = document.querySelector('.emoji');
    
    if (num < 6) {
      emoji.src = "/src/assets/img/wink_emoji.gif";
    } else if ( num >= 6 && num < 12) {
      emoji.src = "/src/assets/img/neutral-emoji.gif";
    } else if (num >= 12 && num < 20) {
      emoji.src = "/src/assets/img/sad-emoji.gif";
    } else {
      emoji.src = "/src/assets/img/dead.png";
    }

    emoji.classList.add('emoji');
    document.querySelector(".container").append(emoji);
    console.log(num);
  };
  emojiState(num);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animation);
// export {emojiState, virusNum};

/***/ }),

/***/ "./src/js/modules/quiz.js":
/*!********************************!*\
  !*** ./src/js/modules/quiz.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/js/modules/animation.js");
// import {emojiState, virusNum} from './animation.js';


// animation(0);
const quiz = () => {
    const DATA = [
        {
            question: 'Как передается коронавирус?',
            correctId: '0',
            answers: [
                { id: '0', value: 'Воздушно-капельным и контактно-бытовым путем'},
                { id: '1', value: 'Воздушно-капельным и трансмиссивным путем через укусы насекомых'},
                { id: '2', value: 'Контактным и половым путем'},
                { id: '3', value: 'Коронавирус вперед!'},
            ],
        },
        {
            question: 'На каком расстоянии от других людей надо держаться, чтобы не заболеть коронавирусом?',
            correctId: '1',
            answers: [
                { id: '0', value: 'Не менее 0,5 метра' },
                { id: '1', value: 'Не менее 1,5 метра, лучше больше' },
                { id: '2', value: 'Коронавирус вперед!' }
            ]
        },
        {
            question: 'Как защитить себя при помощи маски?',
            correctId: '2',
            answers: [
                { id: '0', value: 'Медицинские маски бесполезны против вируса, так как вирусные частицы гораздо меньше, чем поры ткани, и легко проникают внутрь'},
                { id: '1', value: 'Дышать в маске вредно, достаточно закрыть маской рот'},
                { id: '2', value: 'При любом посещении общественных мест необходимо носить маску. Маска должна плотно прилегать к лицу, полностью закрывая нос, рот'},
                { id: '3', value: 'Коронавирус вперед!'},
            ],
        },
        {
            question: 'Как нужно мыть руки?',
            correctId: '2',
            answers: [
                { id: '0', value: 'Нельзя мыть руки слишком часто, вы убьете полезные микроорганизмы с кожи' },
                { id: '1', value: 'Мыть руки бесполезно обычным мылом, только антибактериальным' },
                { id: '2', value: 'Мыть руки необходимо тщательно намыливая их не менее 20-30 секунд, затем смыть пену водой и высушить' },
                { id: '3', value: 'Коронавирус вперед!'},
            ]
        },
        {
            question: 'Можно ли заразиться коронавирусом от домашнего питомца?',
            correctId: '1',
            answers: [
                { id: '0', value: 'Можно, собаки и кошки тоже болеют новой коронавирусной инфекцией и переносят его'},
                { id: '1', value: 'Нельзя, но у домашних животных есть свои коронавирусы, которые не вызывают никаких заболеваний у человека'},
                { id: '2', value: 'Коронавирус вперед!'},
            ],
        },
        {
            question: 'Как правильно выбросить использованную маску?',
            correctId: '1',
            answers: [
                { id: '0', value: 'Не надо выбрасывать. Достаточно прогреть в микроволновке и можно снова носить' },
                { id: '1', value: 'Маску необходимо сначала сложить в пакет, а затем выбросить' },
                { id: '2', value: 'Маску можно просто выбросить в мусоропровод или контейнер' },
                { id: '3', value: 'Коронавирус вперед!'},
            ]
        },
        {
            question: 'Для кого коронавирус особенно опасен?',
            correctId: '1',
            answers: [
                { id: '0', value: 'Для пожилых, лиц с хроническими заболеваниями, ослабленным иммунитетом'},
                { id: '1', value: 'Для детей и подростков'},
                { id: '2', value: 'Коронавирус вперед!'},
            ],
        },
        {
            question: 'Есть ли у коронавирусной инфекции специфичные симптомы?',
            correctId: '0',
            answers: [
                { id: '0', value: 'Такие симптомы есть, это потеря или нарушение обоняния и вкусовых ощущений' },
                { id: '1', value: 'Никаких специфических симптомов, отличающих новую коронавирусную инфекцию от давно известных острых респираторных заболеваний не существует' },
                { id: '2', value: 'Коронавирус вперед!'},
            ]
        },
        {
            question: 'Каким должен быть «правильный» антисептик для рук от коронавируса?',
            correctId: '0',
            answers: [
                { id: '0', value: 'Нужно следить за содержанием спирта в антисептике'},
                { id: '1', value: 'Лучше всего выбрать антибактериальный антисептик'},
                { id: '2', value: 'Коронавирус вперед!'},
            ],
        },
        {
            question: 'Употребление алкоголя поможет защитить от коронавируса?',
            correctId: '0',
            answers: [
                { id: '0', value: 'Поможет, ведь спирт убивает вирус' },
                { id: '1', value: 'Не поможет, употребление алкоголя в целом снижает защитные ресурсы организма' },
                { id: '2', value: 'Коронавирус вперед!'},
            ]
        }
    ];

    const quiz = document.getElementById("quiz"),
          questions = document.getElementById("questions"),
          indicator = document.getElementById("indicator"),
          results = document.getElementById("results"),
          btnNext = document.getElementById("btn-next"),
          btnRestart = document.getElementById("btn-restart");

    let questionIndex = questions.dataset.current,
        score = 0;
        // localResults = {},
    
    const renderIndicator = (current) => {
        indicator.innerHTML = `${current}/${DATA.length}`;
    };

        const renderQuestions = (index = 0) => {
        renderIndicator(index + 1);

        questionIndex = +index;

        const renderAnswers = () => DATA[index].answers
            .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
            `)
            .join("");

        questions.innerHTML = `
            <div class="quiz-questions-item">
                <div class="quiz-questions-item__question">${DATA[index].question}</div>
                <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
            </div>
        `;
    };

    renderQuestions();

    const renderResults = () => {
        results.innerHTML = `Вы ответили правильно на ${score} вопросов из ${DATA.length}`;
    };

    let num = 2;
    const checkAnswers = (elem) => {
        let correct = DATA[questionIndex].correctId;

        if (elem.value === correct) {
            elem.parentNode.classList.add('answer-correct');
            score++;
        } else {
            elem.parentNode.classList.add('answer-wrong');
            
            num += 2;
            (0,_animation__WEBPACK_IMPORTED_MODULE_0__["default"])(num);
            console.log(num);
        }
    };

    quiz.addEventListener('change', (e) => {
        if (e.target && e.target.classList.contains('answer-input')) {
            checkAnswers(e.target);
            // disable the checkboxes
            quiz.querySelectorAll(".answer-input").forEach((input) => {
                input.disabled = true;
            });

            // localResults[e.target.name] = e.target.value;
            btnNext.disabled = false;
        }
    });

    // console.log(typeof(DATA[questionIndex].correctId));

    quiz.addEventListener('click', (e) => {
        if (e.target && e.target === btnNext) {
            btnNext.disabled = true;

            if (DATA.length === questionIndex + 1) {
                // switch to results
                renderResults();
                questions.classList.add("hidden"),
                indicator.classList.add("hidden"),
                results.classList.remove("hidden"),
                btnNext.classList.add("hidden"),
                btnRestart.classList.remove("hidden");
            } else {
                // switch to the next question 
                renderQuestions(questionIndex + 1);
            }
        }

        if (e.target && e.target === btnRestart) {
            // restart the quiz

            questions.classList.remove("hidden"),
            indicator.classList.remove("hidden"),
            results.classList.add("hidden"),
            btnNext.classList.remove("hidden"),
            btnRestart.classList.add("hidden");

            renderQuestions(0);
            results.innerHTML = "";
            questionIndex = questions.dataset.current;
            score = 0;
        }
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quiz);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/quiz */ "./src/js/modules/quiz.js");



window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_animation__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_quiz__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map