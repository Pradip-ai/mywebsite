document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        document.getElementById('thankYouMessage').style.display = 'block';
    });
});

function showMessage(projectName) {
    alert(`Details for ${projectName}`);
}
