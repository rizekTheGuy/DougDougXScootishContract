const startDate = new Date("2024-09-21T00:00:00"); // Replace with your specific date

function calculateTime() {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate; // Difference in milliseconds

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const money = 5 * days;
    const hotdogs = money / 1.5;
    
    document.getElementById("counter").innerText = 
        `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("money").innerText = `He made ${money}$ up to this point 💵`;
    document.getElementById("hotdog").innerText = `Thats like ${hotdogs} costco hotdogs 🌭`;
    document.getElementById("days").innerText = `est ${days} days`;
}

setInterval(calculateTime, 1000);

function createMoney() {
    const money = document.createElement('div');
    money.classList.add('money');
    money.textContent = '💵';
    
    const x = Math.random() * window.innerWidth;
    money.style.left = `${x}px`;

    document.getElementById('money-rain').appendChild(money);

    setTimeout(() => {
        money.remove();
    }, 5000)
}

setInterval(createMoney, 100);
