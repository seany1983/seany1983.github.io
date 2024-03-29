document.addEventListener('DOMContentLoaded', function() {
    const name = "Sean O'Flynn";
    const role = "Actuarial Consultant";
    let nameIndex = 0;
    let roleIndex = 0;
    const typingSpeed = 150;
    const nameElement = document.getElementById('name');
    const roleElement = document.getElementById('role');

    function typeWriter() {
        if (nameIndex < name.length) {
            nameElement.textContent += name.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else if (roleIndex < role.length) {
            roleElement.textContent += role.charAt(roleIndex);
            roleIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});
