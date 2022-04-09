// import {emojiState, virusNum} from './animation.js';
import animation from './animation';

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
            animation(num);
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

export default quiz;