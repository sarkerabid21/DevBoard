let taskD = 6;
let taskI = 23;

function btn(button) {
    if (taskD > 0 || taskI > 0) { 
        alert("Board updated successfully."); 

        taskD--;
        document.getElementById("taskD").innerText = taskD;

        taskI++;
        document.getElementById("taskI").innerText = taskI;

        if (taskD === 0) {
            alert('All tasks are completed');
        }

        button.classList.add('bg-gray-300', 'text-gray-600', 'cursor-not-allowed');
        button.disabled = true;

        const taskCard = button.closest('.task-card');
        const title = taskCard.querySelector('h1').textContent;
        const now = new Date();
        const time = now.toLocaleTimeString();

        const message = `You have completed "${title}" at ${time}.`;
        const messageContainer = document.getElementById('message-container');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bg-[#F4F7FF] p-4 mb-2 rounded';
        messageDiv.textContent = message;
        messageContainer.appendChild(messageDiv);
    }
}


document.getElementById('clear-history').addEventListener('click', function() {
    document.getElementById('message-container').innerHTML = '';
});