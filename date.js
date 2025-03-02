// function updateTime() {
//     const now = new Date();
//     const date = now.toLocaleDateString('en-US', {
//         weekday: 'short',  month: 'short',   
//         day: 'numeric',  year: 'numeric'  
//     });

//     document.getElementById('date').innerText = date;
// }

// updateTime();
// setInterval(updateTime,1000);

function updateDateTime() {
    const now = new Date();

    
    const day = now.toLocaleDateString('en-US', { weekday: 'short' });
    const fullDate = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    document.getElementById('day').innerText = day;
    document.getElementById('date').innerHTML = `<b>${fullDate}</b>`;
}

updateDateTime();

setInterval(updateDateTime, 1000);
