/*A JavaScript to provide basic symptoms diagnostics for user*/
function symptomsQuestion() {
    const questSegments = [
        "Details to Attention",
        "Hyperactivity",
        "Inattention",
        "Daily Life Challenges"
    ];

    /*function to loop through questions and user answer*/
    for (let i = 0; i < questSegments.length; i++) {
        const segmentQuestions = window['${questSegments[i].replace(/\s/g, '')}Questions'];
        if (segmentQuestions && Array.isArray(segmentQuestions)) {
            const segAnswers = askQuestion(segmentQuestions);
            console.log('${questSegments[i]} Answers:', segAnswers);
        }
    }
}

/*Functions to ask question for given segments*/
function askQuestion(questions) {
    let answers = [];

    for (let i = 0; i < questions.length; i++) {
        const ans = checkBoxprompt(questions[i].question);
        answers.push({
            question: questions[i].question, ans });
    }

    return answers;
}

/*Function to create checkbox answers*/
function checkBoxprompt(question) {
    const options = ["Frequently", "Moderately", "Not distracted", "Sometime"];
    let answer = prompt(`${question}\n\n${generateCheckboxOptions(options)}`);
    return answer;
}

/*Function to creat Html for checkbox*/
function generateCheckboxOptions(options) {
    let checkboxesHTML = "";
    for (let i = 0; i < options.length; i++) {
        checkboxesHTML += `<input type="checkbox" id="${options[i]}" name="${options[i]}">
                           <label for="${options[i]}">${options[i]}</label><br>`;
    }
    return checkboxesHTML;
}

/*Questions for Each Segment as defined by name*/
const Segment1 = [
    { question: "How easily do you get distracted by unrelated issues?"},
    { question: "How often do you Struggles to stay focused on tasks or activities? "},
    { question: "How often do you Make frequent errors due to lack of attention to detail?"},
    { question: "How Frequently do you forgets routine tasks or appointments?" },
    { question: "Do you have difficulty organising tasks and activities." },
    { question: "Do you Avoid or are reluctant to engage in tasks that require sustained mental effort." },
    { question: "How Frequently do you shifts from one unfinished activity to another"},
    { question: "Do you Misplace personal belongings regularly"}
];

const Segment2 = [
    { question: ""},
    { question: ""},
    { question: ""},
    { question: ""},
    { question: ""}
];

const Segment3 = [
    { question: },
    { question: },
    { question: },
    { question: },
    { question: }
];

const Segment4 = [
    { question: },
    { question: },
    { question: },
    { question: },
    { question: }
];