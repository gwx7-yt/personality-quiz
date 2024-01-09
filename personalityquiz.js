let currentQuestion = 1;

function nextQuestion(next) {
    document.getElementById(`question-container-${currentQuestion}`).style.display = 'none';
    currentQuestion = next;

    if (currentQuestion <= 3) {
        document.getElementById(`question-container-${currentQuestion}`).style.display = 'block';
    } else {
        showResult();
    }
}

function showResult() {
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
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
