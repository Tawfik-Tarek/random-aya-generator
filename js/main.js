swal("صل على سيدنا محمد");
const aya = document.querySelector("#aya"),
  btn = document.querySelector(".container button"),
  audio = document.querySelector(".container audio");
btn.addEventListener("click", getAya);
async function getAya() {
  let random1 = Math.floor(Math.random() * (6236 - 1) + 1);
  let random2 = Math.floor(Math.random() * (10 - 1) + 1);
  const res = await fetch(`https://api.alquran.cloud/v1/ayah/${random1}`);
  const res2 = await fetch(
    `https://api.quran.com/api/v4/recitations/${random2}/by_ayah/${random1}`
  );
  const data = await res.json();
  const data2 = await res2.json();
  if (res.status == 200) {
    aya.innerHTML = data.data.text;
    audio.setAttribute(
      "src",
      "https:\/\/verses.quran.com\/" + data2.audio_files[0].url
    );
    audio.style.display = "inline-block";
  }
}
