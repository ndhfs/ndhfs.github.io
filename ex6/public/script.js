// 2. AJAX-загрузка JSON
document.getElementById('load-json').addEventListener('click', () => {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
      document.getElementById('json-output').innerHTML =
        `<pre>${JSON.stringify(sorted, null, 2)}</pre>`;
    });
});

// 5. AJAX-загрузка XML
document.getElementById('load-xml').addEventListener('click', () => {
  fetch('data.xml')
    .then(res => res.text())
    .then(str => {
      const xml = new DOMParser().parseFromString(str, "application/xml");
      const items = [...xml.querySelectorAll("person")].map(p =>
        `${p.querySelector("name").textContent} (${p.querySelector("age").textContent})`
      );
      document.getElementById('xml-output').innerHTML = `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    });
});

// 8. Отправка данных на сервер через AJAX
document.getElementById("data-form").addEventListener("submit", e => {
  e.preventDefault();
  const payload = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value
  };
  fetch('/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(res => res.text())
    .then(msg => alert("Ответ сервера: " + msg));
});

// 3. WebSocket
const ws = new WebSocket("ws://localhost:3000");
ws.onmessage = e => {
  document.querySelector("#ws-output span").textContent = e.data;
};

// 4. Server-Sent Events (SSE)
const sse = new EventSource("/sse");
sse.onmessage = e => {
  document.querySelector("#sse-output span").textContent = e.data;
};
