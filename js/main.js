swal("صل على سيدنا محمد");
const aya = document.querySelector("#aya"),
  btn = document.querySelector(".container button"),
  audio = document.querySelector(".container audio");
btn.addEventListener("click", getAya);
async function getAya() {
  let random = Math.floor(Math.random() * (6236 - 1) + 1);
  const res = await fetch(`https://api.alquran.cloud/v1/ayah/${random}`);
  const res2 = await fetch(
    `https://api.alquran.cloud/v1/ayah/${random}/ar.alafasy`
  );
  const data = await res.json();
  const data2 = await res2.json();
  if (res.status == 200) {
    aya.innerHTML = data.data.text;
    audio.setAttribute("src", data2.data.audio);
    audio.style.display = "inline-block";
  }
}
