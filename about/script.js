document.addEventListener('DOMContentLoaded', function () {
    const viewResumeBtn = document.getElementById('view-resume');
    const resumeContainer = document.getElementById('resume-container');

    viewResumeBtn.addEventListener('click', function () {
        resumeContainer.classList.toggle('hidden');
    });
});
