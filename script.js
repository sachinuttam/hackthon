
const countdown = document.getElementById('countdown');
const festDate = new Date('2023-12-01T00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = festDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(interval);
    countdown.innerHTML = "The Fest Has Begun!";
  }
};

const interval = setInterval(updateCountdown, 1000);

const schedule = [
  { time: "10:00 AM", event: "Dinosaur Exhibit", location: "Prehistoric Zone" },
  { time: "12:00 PM", event: "Knight Jousting", location: "Medieval Castle" },
  { time: "2:00 PM", event: "Robotics Workshop", location: "Future Lab" },
];

const scheduleGrid = document.querySelector('.schedule-grid');
schedule.forEach(item => {
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event');
  eventDiv.innerHTML = `
    <h3>${item.event}</h3>
    <p>Time: ${item.time}</p>
    <p>Location: ${item.location}</p>
  `;
  scheduleGrid.appendChild(eventDiv);
});


const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
const photoGrid = document.querySelector('.photo-grid');
photos.forEach(photo => {
  const img = document.createElement('img');
  img.src = photo;
  img.alt = "Fest Photo";
  photoGrid.appendChild(img);
});