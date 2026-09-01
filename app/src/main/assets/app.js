// ============================================================
// PrasertAKK — English for Communication Learning Platform
// app.js — Main Application Logic
// ============================================================

// ---- Course Lessons Data ----
const lessons = [
    { id: 1,  title: "Lesson 1. Nice to Meet You",                      video: "https://drive.google.com/file/d/1xFBJceO8b-bp8fbrYa1OsBj-oUdUDp--/view?usp=drive_link", localVideo: "Lesson 1. Nice to Meet You.mp4" },
    { id: 2,  title: "Lesson 2. Who am I?",                             video: "https://drive.google.com/file/d/1cef8aQ7vz6YZ_Qd-a27xHlEDOIqC_A1g/view?usp=drive_link", localVideo: "Lesson 2. Who am I._2.mp4" },
    { id: 3,  title: "Lesson 3. Where are you from?",                   video: "https://drive.google.com/file/d/1GuCERiy9R_m54KUYijSXQODtqp2OpLxQ/view?usp=drive_link", localVideo: "Lesson 3. Where are you from..mp4" },
    { id: 4,  title: "Lesson 4. All about My Family (Part I)",          video: "https://drive.google.com/file/d/1_EGu56-oDjBlk0uG_U6fvoaeEPJUlx9W/view?usp=drive_link", localVideo: "Lesson 4. All about My Family (Part I).mp4" },
    { id: 5,  title: "Lesson 5. All about My Family (Part II)",         video: "https://drive.google.com/file/d/1p8d3bmG3UmuqmRKgfkRNJXKlodTcVxKN/view?usp=drive_link", localVideo: "Lesson 5. All about My Family (Part II).mp4" },
    { id: 6,  title: "Lesson 6. My Educational Background",            video: "https://drive.google.com/file/d/1BzKAuEPqyMAlNVLS7jmg2YExnNsAadqV/view?usp=drive_link", localVideo: "Lesson 6. My Educational Background.mp4" },
    { id: 7,  title: "Lesson 7. How would you Describe Yourself?",     video: "https://drive.google.com/file/d/10-a7yCEPkZIysKop2Ze0WiSBC3FpFo_y/view?usp=drive_link", localVideo: "Lesson 7. How would you Describe Yourself..mp4" },
    { id: 8,  title: "Lesson 8. How would you Describe Others?",       video: "https://drive.google.com/file/d/1-zuyctWVi1N6JnA50q8zqOOsMXFvYfiY/view?usp=drive_link", localVideo: "Lesson 8. How would you Describe Others..mp4" },
    { id: 9,  title: "Lesson 9. My Job",                               video: "https://drive.google.com/file/d/1VVarpu0smNKOIORB4_i8bf9VooDKN6dw/view?usp=drive_link", localVideo: "Lesson 9. My Job.mp4" },
    { id: 10, title: "Lesson 10. Tell me about your work Experience",   video: "https://drive.google.com/file/d/1KmKDcAhEWfbAOqyXs49GrNdWRFBr7vfw/view?usp=drive_link", localVideo: "Lesson 10. Tell me about your work Experience.mp4" },
    { id: 11, title: "Lesson 11. What have you been up to?",            video: "https://drive.google.com/file/d/1P8gln_uFJUvlAW3py4mTSkYEoVsxiH2L/view?usp=drive_link", localVideo: "Lesson 11. What have you been up to..mp4" },
    { id: 12, title: "Lesson 12. I Love Sports.",                       video: "https://drive.google.com/file/d/1aQCPh4bXkZkhnSywqEGaM8ROaye7OhMy/view?usp=drive_link", localVideo: "Lesson 12. I Love Sports..mp4" }
];

// ---- Quiz Questions Data ----
const preQuizQuestions = [
    { id: 1,  question: "How often do you see your grandparents?",
      choices: ["I'm self-employed.", "Every Chinese New Year's because they live in another province.", "I'm an introvert. I often feel uncomfortable talking to strangers.", "That's very kind of you. Thank you."], correctIdx: 1 },
    { id: 2,  question: "What do you do?",
      choices: ["I graduated from Psychology major, so I work in the HR department.", "I'm self-employed.", "It's a pleasure to meet you, Sir.", "Both of us are fun-loving. We like outdoor activities."], correctIdx: 1 },
    { id: 3,  question: "I'm from a big family.",
      choices: ["How many siblings do you have and do you stay with them?", "What year did you graduate?", "I'm originally from Phuket but I moved to Bangkok ten years ago.", "Not so great. We need to find some time to catch up."], correctIdx: 0 },
    { id: 4,  question: "Where are you staying?",
      choices: ["I'm an introvert. I often feel uncomfortable talking to strangers.", "I was awarded an BA in accounting by Chulalongkorn University.", "When visiting Chiang Mai, I'm usually staying at my friend's apartment.", "It's a pleasure to meet you, Sir."], correctIdx: 2 },
    { id: 5,  question: "Hi, Mary. How's life? Long time no see.",
      choices: ["I'm self-employed.", "Not so great. We need to find some time to catch up.", "Every Chinese New Year's because they live in another province.", "Both of us are fun-loving. We like outdoor activities."], correctIdx: 1 },
    { id: 6,  question: "Let me take you to see Mr. Wilson, our store manager.",
      choices: ["That's very kind of you. Thank you.", "I'm originally from Phuket but I moved to Bangkok ten years ago.", "I graduated from Psychology major, so I work in the HR department.", "What year did you graduate?"], correctIdx: 0 },
    { id: 7,  question: "Tell me a bit of your educational qualifications.",
      choices: ["I'm self-employed.", "It's a pleasure to meet you, Sir.", "I was awarded an BA in accounting by Chulalongkorn University.", "Both of us are fun-loving. We like outdoor activities."], correctIdx: 2 },
    { id: 8,  question: "How would you describe yourself?",
      choices: ["Every Chinese New Year's because they live in another province.", "I'm an introvert. I often feel uncomfortable talking to strangers.", "That's very kind of you. Thank you.", "I'm originally from Phuket but I moved to Bangkok ten years ago."], correctIdx: 1 },
    { id: 9,  question: "What line of work are you in?",
      choices: ["I graduated from Psychology major, so I work in the HR department.", "Not so great. We need to find some time to catch up.", "When visiting Chiang Mai, I'm usually staying at my friend's apartment.", "How many siblings do you have and do you stay with them?"], correctIdx: 0 },
    { id: 10, question: "I'm an alum of Chulalongkorn University.",
      choices: ["What year did you graduate?", "I'm self-employed.", "It's a pleasure to meet you, Sir.", "I'm originally from Phuket but I moved to Bangkok ten years ago."], correctIdx: 0 },
    { id: 11, question: "Are you similar or different to your sister/brother?",
      choices: ["I was awarded an BA in accounting by Chulalongkorn University.", "Both of us are fun-loving. We like outdoor activities.", "Every Chinese New Year's because they live in another province.", "That's very kind of you. Thank you."], correctIdx: 1 },
    { id: 12, question: "Henry, this is Mr. James Wilson, our store manager.",
      choices: ["I'm an introvert. I often feel uncomfortable talking to strangers.", "I'm originally from Phuket but I moved to Bangkok ten years ago.", "It's a pleasure to meet you, Sir.", "Not so great. We need to find some time to catch up."], correctIdx: 2 },
    { id: 13, question: "Where are you from?",
      choices: ["I'm self-employed.", "I'm originally from Phuket but I moved to Bangkok ten years ago.", "What year did you graduate?", "Both of us are fun-loving. We like outdoor activities."], correctIdx: 1 },
    { id: 14, question: "Part II : Choose the opposite meaning of each word/expression.<br><br><b>isolating</b>",
      choices: ["unappreciated", "collaborative", "outgoing", "introverted"], correctIdx: 1 },
    { id: 15, question: "<b>challenging</b>",
      choices: ["inactive", "boring", "collaborative", "strict, tense"], correctIdx: 1 },
    { id: 16, question: "<b>dynamic</b>",
      choices: ["outgoing", "inactive", "introverted", "unappreciated"], correctIdx: 1 },
    { id: 17, question: "<b>reserved</b>",
      choices: ["collaborative", "outgoing", "boring", "inactive"], correctIdx: 1 },
    { id: 18, question: "<b>respected</b>",
      choices: ["unappreciated", "strict, tense", "introverted", "collaborative"], correctIdx: 0 },
    { id: 19, question: "<b>to be the life and soul of the party</b>",
      choices: ["outgoing", "introverted", "inactive", "boring"], correctIdx: 1 },
    { id: 20, question: "<b>laid-back</b>",
      choices: ["strict, tense", "collaborative", "unappreciated", "outgoing"], correctIdx: 0 }
];
const quizQuestions = preQuizQuestions;

// ---- Post-test Quiz Questions Data (40 questions matching Lovable / step-up-english-28) ----
const postQuizQuestions = [
    { id: 1,  question: "A polite response to 'Nice to meet you.' is:",
      choices: ["No, thanks.", "Nice to meet you too.", "You're welcome.", "I'm fine."], correctIdx: 1 },
    { id: 2,  question: "'May I have your name, please?' is used to ask ____.",
      choices: ["someone's age", "someone's name politely", "for directions", "for the time"], correctIdx: 1 },
    { id: 3,  question: "Hello, I don't think we've met. I'm Alex. — ____",
      choices: ["Bye, Alex.", "Nice to meet you, Alex. I'm Sam.", "How much?", "Where?"], correctIdx: 1 },
    { id: 4,  question: "The formal greeting 'How do you do?' is answered with:",
      choices: ["Fine, and you?", "How do you do?", "So-so.", "I do well."], correctIdx: 1 },
    { id: 5,  question: "'Long time no see' means:",
      choices: ["I can't see you.", "It's been a while since we met.", "I miss the view.", "You look different."], correctIdx: 1 },
    { id: 6,  question: "I'm originally ____ Bangkok, but I live ____ Chiang Mai now.",
      choices: ["from / in", "in / from", "at / in", "from / at"], correctIdx: 0 },
    { id: 7,  question: "She is ____ Japan. She is ____.",
      choices: ["from / Japan", "in / Japan", "from / Japanese", "at / Japanese"], correctIdx: 2 },
    { id: 8,  question: "Which country's nationality is 'Dutch'?",
      choices: ["Denmark", "Germany", "Netherlands", "Sweden"], correctIdx: 2 },
    { id: 9,  question: "'I was raised in Chiang Mai' means I ____ there.",
      choices: ["visited", "grew up", "worked", "studied briefly"], correctIdx: 1 },
    { id: 10, question: "My hometown ____ Khon Kaen.",
      choices: ["is", "are", "have", "does"], correctIdx: 0 },
    { id: 11, question: "My aunt's son is my ____.",
      choices: ["nephew", "cousin", "brother-in-law", "uncle"], correctIdx: 1 },
    { id: 12, question: "'I am an only child' means I have ____.",
      choices: ["one child", "no brothers or sisters", "only sisters", "a younger brother"], correctIdx: 1 },
    { id: 13, question: "My brother's wife is my ____.",
      choices: ["mother-in-law", "sister-in-law", "cousin", "step-sister"], correctIdx: 1 },
    { id: 14, question: "My grandfather's father is my ____ grandfather.",
      choices: ["great", "big", "old", "elder"], correctIdx: 0 },
    { id: 15, question: "We are a ____ family — mum, dad, and two kids.",
      choices: ["extended", "nuclear", "single", "broken"], correctIdx: 1 },
    { id: 16, question: "I hold a Bachelor's ____ in Business Administration.",
      choices: ["diploma", "degree", "certificate", "license"], correctIdx: 1 },
    { id: 17, question: "I did my ____ studies at Chula and my Master's abroad.",
      choices: ["undergraduate", "underground", "undertaken", "underwater"], correctIdx: 0 },
    { id: 18, question: "She ____ from high school last year.",
      choices: ["graduated", "graduating", "is graduate", "graduate"], correctIdx: 0 },
    { id: 19, question: "I majored ____ Linguistics and minored ____ History.",
      choices: ["in / in", "at / at", "on / on", "in / at"], correctIdx: 0 },
    { id: 20, question: "'Alma mater' refers to your ____.",
      choices: ["home", "school or university", "workplace", "family"], correctIdx: 1 },
    { id: 21, question: "Choose the adjective that describes appearance, not personality.",
      choices: ["Generous", "Curly-haired", "Honest", "Outgoing"], correctIdx: 1 },
    { id: 22, question: "He is easy-going. This describes his ____.",
      choices: ["height", "personality", "job", "hobby"], correctIdx: 1 },
    { id: 23, question: "She is in her ____ forties.",
      choices: ["mid", "middle-of", "medium", "centre"], correctIdx: 0 },
    { id: 24, question: "'Bald' describes:",
      choices: ["Height", "Weight", "Hair", "Skin"], correctIdx: 2 },
    { id: 25, question: "The opposite of 'shy' is:",
      choices: ["quiet", "outgoing", "polite", "modest"], correctIdx: 1 },
    { id: 26, question: "'I'm in charge of marketing' means I ____ marketing.",
      choices: ["dislike", "am responsible for", "used to do", "will study"], correctIdx: 1 },
    { id: 27, question: "I have ____ experience in teaching English.",
      choices: ["many", "a lot of", "few", "a few"], correctIdx: 1 },
    { id: 28, question: "My duties ____ preparing reports and meeting clients.",
      choices: ["include", "includes", "including", "is include"], correctIdx: 0 },
    { id: 29, question: "I ____ promoted to manager last year.",
      choices: ["was", "were", "am", "have"], correctIdx: 0 },
    { id: 30, question: "'I work freelance' means I ____.",
      choices: ["work for free", "have no fixed employer", "am unemployed", "own a factory"], correctIdx: 1 },
    { id: 31, question: "What have you been up to lately? — Not much, ____.",
      choices: ["just working", "I have not", "yes I do", "for a week"], correctIdx: 0 },
    { id: 32, question: "I ____ living in Bangkok since 2015.",
      choices: ["have been", "am", "was", "have"], correctIdx: 0 },
    { id: 33, question: "How long ____ you ____ English?",
      choices: ["have / studied", "have / been studying", "did / studying", "are / study"], correctIdx: 1 },
    { id: 34, question: "I go ____ every weekend to stay fit.",
      choices: ["to jog", "jogging", "jog", "jogged"], correctIdx: 1 },
    { id: 35, question: "He is good ____ swimming.",
      choices: ["in", "on", "at", "for"], correctIdx: 2 },
    { id: 36, question: "'I'm into hiking' means I ____ hiking.",
      choices: ["dislike", "enjoy", "avoid", "teach"], correctIdx: 1 },
    { id: 37, question: "Which sport uses a shuttlecock?",
      choices: ["Tennis", "Squash", "Badminton", "Volleyball"], correctIdx: 2 },
    { id: 38, question: "I ____ tennis every Sunday morning.",
      choices: ["do", "play", "go", "make"], correctIdx: 1 },
    { id: 39, question: "I ____ yoga twice a week.",
      choices: ["do", "play", "make", "run"], correctIdx: 0 },
    { id: 40, question: "The best closing when saying goodbye to a new colleague is:",
      choices: ["Get lost!", "It was nice meeting you.", "So what?", "Whatever."], correctIdx: 1 }
];

function getQuizQuestions(type) {
    return type === "post" ? postQuizQuestions : preQuizQuestions;
}

// ---- Vocabulary per lesson ----
const lessonVocab = {
    1: [
        { word: "Self-employed", definition: "Working for oneself as a freelancer or the owner of a business rather than for an employer.", example: "I am self-employed and run my own design agency." },
        { word: "Introvert", definition: "A shy, reticent person who prefers spending time alone or in small groups.", example: "Being an introvert, he enjoys quiet evenings reading books." }
    ],
    2: [
        { word: "Siblings", definition: "Each of two or more children or offspring having one or both parents in common; a brother or sister.", example: "I have three siblings: two brothers and a sister." }
    ],
    3: [
        { word: "Alum (Alumnus/Alumna)", definition: "A graduate or former student of a particular school, college, or university.", example: "She is a proud alum of Chulalongkorn University." }
    ],
    7: [
        { word: "Reserved", definition: "Slow to reveal emotion or opinions; quiet and private.", example: "She is quiet and reserved until you get to know her." },
        { word: "Laid-back", definition: "Relaxed and easy-going; free from stress and anxiety.", example: "He has a laid-back attitude toward life." }
    ],
    8: [
        { word: "Dynamic", definition: "Characterized by constant change, activity, or progress; positive and full of energy.", example: "Our new manager is a very dynamic and inspiring leader." },
        { word: "Collaborative", definition: "Produced or conducted by two or more parties working together.", example: "Group projects encourage collaborative learning." }
    ]
};

// ============================================================
// App State
// ============================================================
let currentTab = "dashboard";
let currentViewingLessonIdx = 0;
let userSelections = { "pre": {}, "post": {} };
let quizSubmitted = { "pre": false, "post": false };

// ============================================================
// Learner Name Registration (localStorage persistence)
// ============================================================
function getLearnerName() {
    const fn = localStorage.getItem("learnerFirstName") || "";
    const ln = localStorage.getItem("learnerLastName") || "";
    return { firstName: fn, lastName: ln, fullName: (fn + " " + ln).trim() };
}

function isNameRegistered() {
    return !!localStorage.getItem("learnerFirstName") && !!localStorage.getItem("learnerLastName");
}

function showNameModal() {
    const modal = document.getElementById("name-registration-modal");
    if (modal) modal.style.display = "flex";
}

function hideNameModal() {
    const modal = document.getElementById("name-registration-modal");
    if (modal) modal.style.display = "none";
}

function saveNameAndStart() {
    const fn = document.getElementById("reg-firstname").value.trim();
    const ln = document.getElementById("reg-lastname").value.trim();
    if (!fn || !ln) {
        alert("กรุณากรอกชื่อและนามสกุลให้ครบถ้วน");
        return;
    }
    localStorage.setItem("learnerFirstName", fn);
    localStorage.setItem("learnerLastName", ln);
    hideNameModal();
    updateLearnerBadge();
    // After registration, go to Step 1 (Pre-test)
    switchTab("pre");
}

function updateLearnerBadge() {
    const badge = document.getElementById("learner-name-badge");
    const display = document.getElementById("learner-name-display");
    if (isNameRegistered()) {
        const name = getLearnerName();
        if (display) display.textContent = name.fullName;
        if (badge) badge.style.display = "flex";
    } else {
        if (badge) badge.style.display = "none";
    }
}

// ============================================================
// Step Enforcement Logic
// Steps: 1=Pre-test, 2=Lessons, 3=Post-test, 4=Certificate
// Rule: Can only enter a step if previous step is completed.
//       Completed steps can be revisited anytime.
// ============================================================
function getHighestUnlockedStep() {
    // Step 1 is always available (after name registration)
    if (!isPreTestCompleted()) return 1;
    // Step 2 unlocks after Pre-test
    if (!areAllLessonsCompleted()) return 2;
    // Step 3 unlocks after all 12 lessons
    if (!isPostTestCompleted()) return 3;
    // Step 4 unlocks after Post-test (any score)
    return 4;
}

function isPreTestCompleted() {
    return localStorage.getItem("preQuizCompleted") === "true";
}

function isPostTestCompleted() {
    return localStorage.getItem("postQuizCompleted") === "true";
}

function areAllLessonsCompleted() {
    return lessons.every(l => isLessonCompleted(l.id));
}

function isStepAccessible(step) {
    // Dashboard (step 0) is always accessible
    if (step <= 0) return true;
    // Any completed step is always revisitable
    // The highest unlocked step is also accessible
    return step <= getHighestUnlockedStep();
}

function getStepForTab(tabId) {
    switch (tabId) {
        case "pre": return 1;
        case "lessons": return 2;
        case "post": return 3;
        case "certificate": return 4;
        default: return 0; // dashboard
    }
}

function getStepBlockMessage(step) {
    switch (step) {
        case 1: return "กรุณาลงทะเบียนชื่อ-นามสกุลก่อนเริ่มทำ Pre-test";
        case 2: return "กรุณาทำแบบทดสอบ Pre-test (Step 1) ให้เสร็จก่อนเข้าเรียน";
        case 3: return "กรุณาเรียนบทเรียนทั้ง 12 บท (Step 2) ให้ครบก่อนทำ Post-test";
        case 4: return "กรุณาทำแบบทดสอบ Post-test (Step 3) ให้เสร็จก่อนรับใบประกาศนียบัตร";
        default: return "";
    }
}

// ============================================================
// Initialize Application
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Setup navigation
    setupNavigation();

    // 2. Render Quiz structures
    renderQuiz("pre");
    renderQuiz("post");

    // 3. Render Dashboard Lesson Grid
    renderDashboardLessons();

    // 4. Restore quiz state from localStorage
    restoreQuizState("pre");
    restoreQuizState("post");

    // 5. Update overall progress stats
    updateProgressStats();

    // 6. Initialize active lesson
    selectLesson(0);

    // 7. Bind lesson completion toggle button
    const toggleBtn = document.getElementById("btn-toggle-completion");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            const lesson = lessons[currentViewingLessonIdx];
            const isComp = isLessonCompleted(lesson.id);
            if (isComp) {
                localStorage.removeItem(`lesson_${lesson.id}_completed`);
            } else {
                localStorage.setItem(`lesson_${lesson.id}_completed`, "true");
            }
            renderDashboardLessons();
            renderSidebarLessons();
            updateProgressStats();
            updateStepLockStates();
            updateAllLessonsBanner();
            updateCompletionButtonState(lesson.id);
        });
    }

    // 8. Setup name registration modal
    const btnSave = document.getElementById("btn-save-name");
    if (btnSave) btnSave.addEventListener("click", saveNameAndStart);

    // 9. Learner name badge
    updateLearnerBadge();

    // 10. Update step lock states in sidebar
    updateStepLockStates();

    // 11. Check "all lessons done" banner
    updateAllLessonsBanner();
});


// ============================================================
// Navigation Logic
// ============================================================
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Dashboard "เริ่มเรียนเลย" button
    const heroBtn = document.getElementById("dashboard-start-learning");
    if (heroBtn) {
        heroBtn.addEventListener("click", () => {
            if (!isNameRegistered()) {
                showNameModal();
            } else {
                // Navigate to the next incomplete step
                const step = getHighestUnlockedStep();
                const tabs = ["pre", "lessons", "post", "certificate"];
                switchTab(tabs[step - 1] || "pre");
            }
        });
    }
}

function switchTab(tabId) {
    const step = getStepForTab(tabId);

    // Enforce name registration for any step
    if (step >= 1 && !isNameRegistered()) {
        showNameModal();
        return;
    }

    // Enforce step order
    if (step >= 1 && !isStepAccessible(step)) {
        alert(getStepBlockMessage(step));
        return;
    }

    // Certificate special: needs 20/20 on post-test
    if (tabId === "certificate" && !isCertificateUnlocked()) {
        alert("กรุณาผ่านการทำข้อสอบ Post-test (คะแนนเต็ม 20/20) เพื่อปลดล็อคใบประกาศนียบัตร!");
        return;
    }

    currentTab = tabId;

    // Update nav links UI
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("data-tab") === tabId);
    });

    // Update sections visibility
    document.querySelectorAll(".tab-section").forEach(sec => {
        sec.classList.toggle("active", sec.id === `${tabId}-section`);
    });

    // If navigating to lessons tab, ensure video player is loaded with current lesson
    if (tabId === "lessons") {
        selectLesson(currentViewingLessonIdx);
    } else {
        // Pause video if switching away from lessons
        const mainVideo = document.getElementById("main-course-video");
        if (mainVideo && typeof mainVideo.pause === "function") {
            mainVideo.pause();
        }
    }

    // If navigating to certificate, render it
    if (tabId === "certificate" && isCertificateUnlocked()) {
        renderCertificateCanvas();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// Step Lock UI Updates
// ============================================================
function updateStepLockStates() {
    const stepLinks = document.querySelectorAll(".step-link");
    stepLinks.forEach(link => {
        const step = parseInt(link.getAttribute("data-step"));
        if (isStepAccessible(step)) {
            link.classList.remove("locked");
            link.title = "";
        } else {
            link.classList.add("locked");
            link.title = getStepBlockMessage(step);
        }
    });
}

// ============================================================
// Quiz Rendering
// ============================================================
// ============================================================
// Quiz Rendering
// ============================================================
function renderQuiz(type) {
    const container = document.getElementById(`${type}-quiz-questions`);
    if (!container) return;
    container.innerHTML = "";

    const questions = getQuizQuestions(type);
    questions.forEach((q) => {
        const card = document.createElement("div");
        card.className = "quiz-item-card";
        card.id = `${type}-qstn-card-${q.id}`;

        let html = `
            <div class="quiz-qstn-header">
                <div class="quiz-qstn-num">${q.id}</div>
                <div class="quiz-qstn-text">${q.question}</div>
            </div>
            <div class="choices-list">
        `;

        q.choices.forEach((choice, cIndex) => {
            html += `
                <div class="choice-option" id="${type}-qstn-${q.id}-choice-${cIndex}" onclick="selectChoice('${type}', ${q.id}, ${cIndex})">
                    <span class="custom-radio"></span>
                    <span>${choice}</span>
                </div>
            `;
        });

        html += `
            </div>
            <div class="quiz-feedback-banner correct">
                <i class="fa fa-check-circle"></i> ถูกต้อง
            </div>
            <div class="quiz-feedback-banner incorrect">
                <i class="fa fa-times-circle"></i> ไม่ถูกต้อง (คำตอบที่ถูกต้องคือ: ${q.choices[q.correctIdx]})
            </div>
        `;

        card.innerHTML = html;
        container.appendChild(card);
    });
}

// ============================================================
// Quiz Interaction
// ============================================================
window.selectChoice = function(type, qId, choiceIdx) {
    if (quizSubmitted[type]) return;
    userSelections[type][qId] = choiceIdx;

    const questions = getQuizQuestions(type);
    const qObj = questions.find(q => q.id === qId);
    if (!qObj) return;
    qObj.choices.forEach((_, cIdx) => {
        const option = document.getElementById(`${type}-qstn-${qId}-choice-${cIdx}`);
        if (option) option.classList.toggle("selected", cIdx === choiceIdx);
    });
};

window.autoFillQuiz = function(type) {
    if (quizSubmitted[type]) {
        // Reset to allow re-filling
        quizSubmitted[type] = false;
        document.getElementById(`${type}-score-overlay`).style.display = "none";
        document.querySelectorAll(`#${type}-quiz-questions .quiz-item-card`).forEach(card => {
            card.classList.remove("correct", "incorrect");
        });
        document.querySelectorAll(`#${type}-quiz-questions .choice-option`).forEach(opt => {
            opt.className = "choice-option";
        });
    }
    const questions = getQuizQuestions(type);
    questions.forEach(q => {
        selectChoice(type, q.id, q.correctIdx);
    });
};

window.gradeQuiz = function(type) {
    const questions = getQuizQuestions(type);
    const totalCount = questions.length;
    const unanswered = questions.filter(q => userSelections[type][q.id] === undefined);
    if (unanswered.length > 0 && !quizSubmitted[type]) {
        if (!confirm(`คุณยังไม่ได้ตอบคำถามอีก ${unanswered.length} ข้อ ยืนยันที่จะส่งข้อสอบหรือไม่?`)) return;
    }

    quizSubmitted[type] = true;
    let score = 0;

    questions.forEach(q => {
        const userChoice = userSelections[type][q.id];
        const card = document.getElementById(`${type}-qstn-card-${q.id}`);
        if (card) card.classList.remove("correct", "incorrect");

        q.choices.forEach((_, cIdx) => {
            const option = document.getElementById(`${type}-qstn-${q.id}-choice-${cIdx}`);
            if (option) {
                option.classList.remove("selected", "correct-choice", "incorrect-choice");
                if (cIdx === q.correctIdx) {
                    option.classList.add("correct-choice");
                } else if (cIdx === userChoice) {
                    option.classList.add("incorrect-choice");
                }
            }
        });

        if (userChoice === q.correctIdx) {
            score++;
            if (card) card.classList.add("correct");
        } else {
            if (card) card.classList.add("incorrect");
        }
    });

    // Show score overlay
    const scoreOverlay = document.getElementById(`${type}-score-overlay`);
    if (scoreOverlay) {
        scoreOverlay.querySelector(".quiz-score-val").textContent = `${score} / ${totalCount}`;
        scoreOverlay.style.display = "block";
    }

    // Save to localStorage
    localStorage.setItem(`${type}QuizCompleted`, "true");
    localStorage.setItem(`${type}QuizScore`, score.toString());

    // Post-test special: unlock certificate after any score
    if (type === "post") {
        localStorage.setItem("postTestScore", score.toString());
        checkAndUnlockCertificate(); // will show cert button for any score
    }

    updateProgressStats();
    updateStepLockStates();
    updateAllLessonsBanner();
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ============================================================
// Restore quiz state on page load (persistence)
// ============================================================
function restoreQuizState(type) {
    const completed = localStorage.getItem(`${type}QuizCompleted`) === "true";
    const savedScore = localStorage.getItem(`${type}QuizScore`);

    if (completed && savedScore !== null) {
        // Mark as submitted so user can see their previous result
        quizSubmitted[type] = true;
        const score = parseInt(savedScore);
        const questions = getQuizQuestions(type);

        // Restore the score overlay display
        const scoreOverlay = document.getElementById(`${type}-score-overlay`);
        if (scoreOverlay) {
            scoreOverlay.querySelector(".quiz-score-val").textContent = `${score} / ${questions.length}`;
            scoreOverlay.style.display = "block";
        }

        // Show cert button if post-test passed
        if (type === "post") {
            const certBtn = document.getElementById("btn-goto-cert-after-post");
            if (certBtn) certBtn.style.display = "inline-flex";
        }
    }
}

// ============================================================
// Dashboard Lesson Cards
// ============================================================
function renderDashboardLessons() {
    const container = document.getElementById("dashboard-lessons-grid");
    if (!container) return;
    container.innerHTML = "";

    lessons.forEach((l, idx) => {
        const card = document.createElement("div");
        card.className = "lesson-card";
        const isCompleted = isLessonCompleted(l.id);
        const statusClass = isCompleted ? "status-complete" : "status-incomplete";
        const statusText = isCompleted ? "เรียนแล้ว ✓" : "ยังไม่ได้เรียน";

        card.innerHTML = `
            <div class="lesson-thumb-wrapper">
                <img src="./prasertakk.jpg" alt="${l.title}" class="lesson-thumb">
                <div class="lesson-play-badge"><i class="fa fa-play" style="color: #fff;"></i></div>
            </div>
            <div class="lesson-card-body">
                <span class="lesson-num">บทที่ ${l.id}</span>
                <h3 class="lesson-title">${l.title.replace(`Lesson ${l.id}. `, "")}</h3>
                <div class="lesson-status ${statusClass}">
                    <span class="status-indicator"></span>
                    <span>${statusText}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            switchTab("lessons");
            selectLesson(idx);
        });

        container.appendChild(card);
    });
}

// ============================================================
// Helper to transform Google Drive watch links to iframe preview links
function getEmbedUrl(url) {
    if (url.includes("drive.google.com")) {
        return url.split("/view")[0] + "/preview";
    }
    return url;
}

// Helper to update completion button state
function updateCompletionButtonState(lessonId) {
    const btn = document.getElementById("btn-toggle-completion");
    if (!btn) return;
    const isComp = isLessonCompleted(lessonId);
    if (isComp) {
        btn.innerHTML = `<i class="fa fa-check-circle" style="color: var(--color-success);"></i> เรียนแล้ว (Completed)`;
        btn.className = "btn btn-success";
    } else {
        btn.innerHTML = `<i class="fa fa-circle-check"></i> ทำเครื่องหมายว่าเรียนแล้ว`;
        btn.className = "btn btn-secondary";
    }
}

// Global active lesson auto-completion timer reference
let lessonAutoCompletedTimer = null;

// Lesson Viewer
// ============================================================
window.selectLesson = function(idx) {
    if (idx < 0 || idx >= lessons.length) return;
    currentViewingLessonIdx = idx;
    const lesson = lessons[idx];

    const mainIframe = document.getElementById("main-course-iframe") || document.getElementById("lesson-video-iframe");
    const mainVideo = document.getElementById("main-course-video");

    if (lesson.video && lesson.video.includes("drive.google.com")) {
        // Embed Google Drive video via iframe
        if (mainIframe) {
            mainIframe.src = getEmbedUrl(lesson.video);
            mainIframe.style.display = "block";
        }
        if (mainVideo) {
            mainVideo.style.display = "none";
            if (typeof mainVideo.pause === "function") mainVideo.pause();
        }
    } else {
        // Fallback to local MP4 video
        if (mainVideo) {
            const videoSrc = lesson.localVideo || lesson.video;
            mainVideo.src = videoSrc;
            mainVideo.style.display = "block";
            mainVideo.load();
        }
        if (mainIframe) {
            mainIframe.style.display = "none";
            mainIframe.src = "";
        }
    }

    const videoTitle = document.getElementById("viewing-video-title");
    if (videoTitle) videoTitle.textContent = lesson.title;

    renderSidebarLessons();
    renderVocabulary(lesson.id);
    updateCompletionButtonState(lesson.id);

    // Auto-complete after 3 seconds of viewing
    if (lessonAutoCompletedTimer) clearTimeout(lessonAutoCompletedTimer);
    lessonAutoCompletedTimer = setTimeout(() => {
        if (!isLessonCompleted(lesson.id)) {
            markLessonCompleted(lesson.id);
            updateCompletionButtonState(lesson.id);
        }
    }, 3000);
};

function renderSidebarLessons() {
    const list = document.getElementById("sidebar-lessons-list");
    if (!list) return;
    list.innerHTML = "";

    lessons.forEach((l, idx) => {
        const isCompleted = isLessonCompleted(l.id);
        const activeClass = idx === currentViewingLessonIdx ? "active" : "";
        const completedClass = isCompleted ? "completed" : "";
        const statusText = isCompleted ? "เรียนแล้ว ✓" : "ยังไม่ได้เรียน";

        const li = document.createElement("li");
        li.className = `sidebar-lesson-item ${activeClass} ${completedClass}`;
        li.innerHTML = `
            <span class="sidebar-lesson-idx">${l.id}</span>
            <div class="sidebar-lesson-meta">
                <span class="sidebar-lesson-title">${l.title.replace(`Lesson ${l.id}. `, "")}</span>
                <span class="sidebar-lesson-status">${statusText}</span>
            </div>
        `;
        li.addEventListener("click", () => selectLesson(idx));
        list.appendChild(li);
    });
}

function renderVocabulary(lessonId) {
    const vocabBox = document.getElementById("lesson-vocab-box");
    if (!vocabBox) return;
    const list = vocabBox.querySelector(".vocab-grid");
    const vocabList = lessonVocab[lessonId];

    if (!vocabList || vocabList.length === 0) {
        vocabBox.style.display = "none";
        return;
    }
    vocabBox.style.display = "block";
    list.innerHTML = "";

    vocabList.forEach(v => {
        const card = document.createElement("div");
        card.className = "vocab-card";
        card.innerHTML = `
            <div class="vocab-word">${v.word}</div>
            <div class="vocab-definition">${v.definition}</div>
            <div class="vocab-example">Ex: "${v.example}"</div>
        `;
        list.appendChild(card);
    });
}

// ============================================================
// All Lessons Done Banner
// ============================================================
function updateAllLessonsBanner() {
    const banner = document.getElementById("all-lessons-done-banner");
    if (!banner) return;
    banner.style.display = areAllLessonsCompleted() ? "flex" : "none";
}

// ============================================================
// LocalStorage helpers
// ============================================================
function isLessonCompleted(lessonId) {
    return localStorage.getItem(`lesson_${lessonId}_completed`) === "true";
}

function markLessonCompleted(lessonId) {
    localStorage.setItem(`lesson_${lessonId}_completed`, "true");
    renderDashboardLessons();
    renderSidebarLessons();
    updateProgressStats();
    updateStepLockStates();
    updateAllLessonsBanner();
}

function isCertificateUnlocked() {
    // Certificate unlocks as soon as Post-test is completed (any score)
    return localStorage.getItem("postQuizCompleted") === "true";
}

function checkAndUnlockCertificate() {
    const lockedCert = document.getElementById("cert-locked");
    const unlockedCert = document.getElementById("cert-unlocked");
    const certNavLink = document.getElementById("nav-cert-link");

    if (isCertificateUnlocked()) {
        if (lockedCert) lockedCert.style.display = "none";
        if (unlockedCert) unlockedCert.style.display = "flex";
        if (certNavLink) {
            certNavLink.classList.remove("locked");
            certNavLink.title = "Certificate ปลดล็อคแล้ว ✓";
        }
        // Show goto-cert button after post-test
        const certBtn = document.getElementById("btn-goto-cert-after-post");
        if (certBtn) certBtn.style.display = "inline-flex";
    } else {
        if (lockedCert) lockedCert.style.display = "block";
        if (unlockedCert) unlockedCert.style.display = "none";
        if (certNavLink) {
            certNavLink.classList.add("locked");
            certNavLink.title = "ต้องทำ Post-test ให้เสร็จก่อน";
        }
    }
}

// ============================================================
// Progress Stats Dashboard
// ============================================================
function updateProgressStats() {
    let completedCount = 0;
    lessons.forEach(l => { if (isLessonCompleted(l.id)) completedCount++; });

    // Overall progress: Pre-test (10%) + 12 lessons (60%) + Post-test (10%) + Cert (20%)
    let progressParts = 0;
    if (isPreTestCompleted()) progressParts += 10;
    progressParts += (completedCount / 12) * 60;
    if (isPostTestCompleted()) progressParts += 10;
    if (isCertificateUnlocked()) progressParts += 20;
    const pct = Math.round(progressParts);

    const fill = document.getElementById("progress-fill");
    if (fill) fill.style.width = `${pct}%`;
    const pctText = document.getElementById("progress-percentage");
    if (pctText) pctText.textContent = `${pct}%`;

    // Stat boxes (order: Pre-test, Lessons, Post-test, Certificate)
    const preScore = localStorage.getItem("preQuizScore");
    const preStatusEl = document.getElementById("stat-pretest-score");
    if (preStatusEl) preStatusEl.textContent = preScore !== null ? `${preScore} / 20` : "ยังไม่ได้ทำ";

    const lessonsCountEl = document.getElementById("stat-lessons-count");
    if (lessonsCountEl) lessonsCountEl.textContent = `${completedCount} / 12`;

    const postScore = localStorage.getItem("postTestScore");
    const postStatusEl = document.getElementById("stat-posttest-score");
    if (postStatusEl) postStatusEl.textContent = postScore !== null ? `${postScore} / 40` : "ยังไม่ได้ทำ";

    const certStatusEl = document.getElementById("stat-cert-unlocked");
    if (certStatusEl) certStatusEl.textContent = isCertificateUnlocked() ? "ปลดล็อคแล้ว ✓" : "ล็อคอยู่";

    checkAndUnlockCertificate();
}

// ============================================================
// Certificate Canvas Rendering — Uses original template (base64)
// ============================================================
function renderCertificateCanvas() {
    const canvas = document.getElementById("cert-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const learner = getLearnerName();

    // Build date string
    const today = new Date();
    const months = ["January","February","March","April","May","June",
                    "July","August","September","October","November","December"];
    const dateStr = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

    // Build QR data
    const qrData = JSON.stringify({
        name: learner.fullName || "",
        course: "Unlock English for Communication",
        date: dateStr
    });

    // Step 1: Load the original certificate template image (base64 embedded in cert_data.js)
    const img = new Image();
    img.onload = function() {
        const W = img.naturalWidth;
        const H = img.naturalHeight;
        canvas.width  = W;
        canvas.height = H;

        // Draw the original certificate background
        ctx.drawImage(img, 0, 0);

        // ── Learner Name overlay
        // The name area is approximately at 38% from top
        const nameY      = H * 0.38;
        const nameFontSz = Math.round(W * 0.038);

        // Erase original placeholder text with white rectangle
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(W * 0.10, nameY - nameFontSz * 1.4, W * 0.80, nameFontSz * 2.6);

        // Draw the learner's name
        ctx.fillStyle   = "#222222";
        ctx.font        = `bold ${nameFontSz}px 'Segoe UI', Tahoma, 'Noto Sans Thai', sans-serif`;
        ctx.textAlign   = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(learner.fullName || "", W * 0.5, nameY);

        // ── Date overlay at H * 0.895 (below "Chulalongkorn University")
        const dateY      = H * 0.895;
        const dateFontSz = Math.round(W * 0.016);

        // Erase original date area
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(W * 0.25, dateY - dateFontSz * 1.5, W * 0.50, dateFontSz * 3.0);

        // Draw new date
        ctx.fillStyle   = "#444444";
        ctx.font        = `${dateFontSz}px 'Segoe UI', Arial, sans-serif`;
        ctx.textAlign   = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(dateStr, W * 0.5, dateY);

        // ── QR Code — bottom-left corner (replace ALL existing QR placeholders)
        // The original certificate blank.jpg has "Scan to verify" + 3 QR boxes
        // spanning approximately x:3%-24%, y:74%-97% of the image.
        // We MUST white-out this entire area first, then draw our single QR.
        const qrAreaX     = Math.round(W * 0.02);
        const qrAreaY     = Math.round(H * 0.73);
        const qrAreaW     = Math.round(W * 0.24);
        const qrAreaH     = Math.round(H * 0.265);

        // Step 1: Erase the entire original QR placeholder area
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrAreaX, qrAreaY, qrAreaW, qrAreaH);

        // Step 2: Generate and draw new QR code
        let qrDiv = document.getElementById("cert-qr-hidden");
        if (!qrDiv) {
            qrDiv = document.createElement("div");
            qrDiv.id = "cert-qr-hidden";
            qrDiv.style.display = "none";
            document.body.appendChild(qrDiv);
        }

        if (typeof QRCode !== "undefined") {
            qrDiv.innerHTML = "";
            new QRCode(qrDiv, {
                text: qrData,
                width: 160,
                height: 160,
                colorDark: "#000000",
                colorLight: "#ffffff"
            });

            const drawQRToCanvas = () => {
                const qrElement = qrDiv.querySelector("canvas") || qrDiv.querySelector("img");
                if (qrElement) {
                    const qrSize = Math.round(W * 0.12); // QR size
                    const qrX    = Math.round(W * 0.045);
                    const qrY    = Math.round(H * 0.72);
                    const qrLabelY = qrY + qrSize + Math.round(W * 0.016);

                    // White background behind QR and label
                    ctx.fillStyle = "#ffffff";
                    ctx.fillRect(qrX - 8, qrY - 8, qrSize + 16, qrSize + 36);

                    // Draw QR image
                    ctx.drawImage(qrElement, qrX, qrY, qrSize, qrSize);

                    // "Scan to verify" label below QR
                    ctx.fillStyle    = "#555555";
                    ctx.font         = `${Math.round(W * 0.012)}px 'Segoe UI', Arial, sans-serif`;
                    ctx.textAlign    = "center";
                    ctx.textBaseline = "alphabetic";
                    ctx.fillText("Scan to verify", qrX + qrSize / 2, qrLabelY);
                }
            };

            // Draw immediately (synchronous canvas output from qrcode.min.js)
            drawQRToCanvas();
            // Also draw after 100ms in case img tag was created by library
            setTimeout(drawQRToCanvas, 100);
        }
    };

    // Use the embedded base64 image from cert_data.js (no CORS issue)
    if (typeof CERT_BLANK_B64 !== "undefined") {
        img.src = CERT_BLANK_B64;
    } else {
        // Fallback: try to load local file (may fail on file:// due to CORS)
        img.crossOrigin = "anonymous";
        img.src = "certificate blank.jpg";
    }
}

window.downloadCertificate = function() {
    const canvas = document.getElementById("cert-canvas");
    if (!canvas) return;
    const learner = getLearnerName();
    // Re-render to ensure QR is drawn (QR has 200ms delay internally)
    renderCertificateCanvas();
    setTimeout(() => {
        const link = document.createElement("a");
        link.download = `Certificate_${learner.firstName}_${learner.lastName}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    }, 500);
};

// ============================================================
// Reset Progress
// ============================================================
window.resetProgress = function() {
    if (confirm("คุณต้องการรีเซ็ตประวัติการเรียน, คะแนนสอบ, และข้อมูลผู้เรียนทั้งหมดใช่หรือไม่?\n\n⚠️ ชื่อ-นามสกุล จะถูกลบด้วย")) {
        localStorage.clear();
        quizSubmitted["pre"] = false;
        quizSubmitted["post"] = false;
        userSelections["pre"] = {};
        userSelections["post"] = {};

        renderQuiz("pre");
        renderQuiz("post");
        document.getElementById("pre-score-overlay").style.display = "none";
        document.getElementById("post-score-overlay").style.display = "none";

        renderDashboardLessons();
        selectLesson(0);
        updateProgressStats();
        updateLearnerBadge();
        updateStepLockStates();
        updateAllLessonsBanner();

        // Go back to dashboard
        switchTab("dashboard");
        alert("รีเซ็ตเรียบร้อยแล้ว!");
    }
};
