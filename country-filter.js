<script>
const redirectURL = "https://ekas.link";

window.onload = function () {
  document.body.innerHTML = "<p><i>Yükleniyor...</i></p>";

  fetch("https://ipinfo.io/json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ağ hatası oluştu");
      }
      return response.json();
    })
    .then((data) => {
      const userCountry = data.country;
      const userIP = data.ip;

      if (userCountry === "TR") {
        document.body.innerHTML = `
          <p>Yönlendiriliyorsunuz... <i>(<b>${userIP}</b>)</i></p>
        `;
        setTimeout(() => {
          window.location.href = redirectURL;
        }, 1000);
      } else {
        document.body.innerHTML = `
          <p>Bu içerik sadece Türkiye'deki kullanıcılar için mevcuttur. <i>(<b>${userIP}</b> - <b>${userCountry}</b>)</i></p>
        `;
      }
    })
    .catch((error) => {
      console.error("Konum bilgisi alınamadı: ", error);
      document.body.innerHTML =
        "<p>Konum bilgisi alınamadı. Lütfen tekrar deneyin.</p>";
    });
};
</script>
