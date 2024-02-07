let currentQuestion = 1;

function nextQuestion(next) {
    document.getElementById(`question-container-${currentQuestion}`).style.display = 'none';
    currentQuestion = next;

    if (currentQuestion <= 5) {
        document.getElementById(`question-container-${currentQuestion}`).style.display = 'block';
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 1) {
        document.getElementById(`question-container-${currentQuestion}`).style.display = 'none';
        currentQuestion--;
        document.getElementById(`question-container-${currentQuestion}`).style.display = 'block';
    }
}

function showResult() {
    const answers = {
        question1: getSelectedValue('question1'),
        question2: getSelectedValue('question2'),
        question3: getSelectedValue('question3'),
        question4: getSelectedValue('question4'),
        question5: getSelectedValue('question5'),
    };

    let result = '';

    switch (answers.question1) {
        case 'bear':
            result = 'You are a Bear - Strong!';
            break;
        case 'owl':
            result = 'You are an Owl - Wise!';
            break;
        case 'parrot':
            result = 'You are a Parrot - Social!';
            break;
        case 'horse':
            result = 'You are a Horse - Swift!';
            break;
        default:
            result = 'Unable to determine your spirit animal!';
    }

    localStorage.setItem('result', result);

    window.location.href = 'personalityresult.html';
}

function getSelectedValue(questionName) {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    return selectedOption ? selectedOption.value : '';
}
