window.Telegram.WebApp.ready();
const tg = window.Telegram.WebApp;

document.getElementById("claim-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.name.value;
  const username = e.target.username.value;

  tg.sendData(JSON.stringify({ name, username }));
  tg.close();
});

