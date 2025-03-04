const linkList = [
  { name: 'Enes Kerem AYDIN', url: 'https://eneskeremaydin.com.tr/', rel: 'dofollow', target: '_blank' }
];

function generatelinkList() {
  const container = document.createElement('div');
  container.style.display = 'none';
  container.id = 'linkList-container';

  linkList.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.name;
    anchor.rel = link.rel;
    anchor.target = link.target;
    container.appendChild(anchor);
    container.appendChild(document.createElement('br'));
  });

  document.body.appendChild(container);
}

window.addEventListener('DOMContentLoaded', generatelinkList);
