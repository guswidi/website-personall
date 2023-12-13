document.addEventListener("DOMContentLoaded", function () {
    // Array of questions and answers
    var questions = [
        {
            question: "What is the English word for 'sekolah'?",
            options: ["Home", "School", "Car"],
            correctAnswer: "School"
        },
        {
            question: "Translate the following sentence: 'Saya suka makan pizza.'",
            options: ["I like playing soccer.", "I like eating pizza.", "She likes reading books."],
            correctAnswer: "I like eating pizza."
        },
        {
            question: "What is 'saya' in English?",
            options: ["I am.", "You.", "We."],
            correctAnswer: "I am."
        },
        // Add more questions as needed
    ];

    function displayQuestions() {
        var form = document.getElementById("quiz-form");
        var questionList = document.getElementById("question-list");

        questions.forEach(function (item, index) {
            var listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Pertanyaan:</strong> ${item.question}<br>`;

            item.options.forEach(function (option, optionIndex) {
                listItem.innerHTML += `<input type="radio" name="q${index + 1}" value="${option === item.correctAnswer ? 'correct' : 'incorrect'}"> ${option}`;
            });

            questionList.appendChild(listItem);
        });
    }

    function checkAnswers() {
        var resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = ''; // Reset previous results

        var score = 0;

        // Check each answer
        questions.forEach(function (item, index) {
            var selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);

            var resultItem = document.createElement("p");
            resultItem.innerHTML = `Pertanyaan ${index + 1}: Jawaban Anda ${
                selectedAnswer ? (selectedAnswer.value === 'correct' ? 'benar' : 'salah') : 'tidak dijawab'
            }. Jawaban yang benar: ${item.correctAnswer}`;

            resultContainer.appendChild(resultItem);

            if (selectedAnswer && selectedAnswer.value === 'correct') {
                score++;
            }
        });

        // Display the total score
        resultContainer.innerHTML += `<p>Skor Anda: ${score} dari ${questions.length}</p>`;
    }

    // Call displayQuestions when the page loads
    displayQuestions();
});
