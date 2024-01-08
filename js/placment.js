document.getElementById("grid").addEventListener("click", onImage);

function onImage(event) {
  var x = event.target;
  const image = getComputedStyle(x);
  x.src = image.backgroundImage.slice(5, -2);
  if (x.src == "") {
    return;
  } else {
    var modal = document.getElementById("modal01");
    modal.style.display = "block"; //new overlay div
    var img01 = document.getElementById("img01");
    img01.src = x.src;
    document.getElementById("btn1").addEventListener("click", function () {
      modal01.style.display = "none";
    });
    console.log(x.src, img01.clientWidth, img01.clientHeight);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var scrollpos = window.pageYOffset;
  var header = document.getElementById("header");

  if (scrollpos > 10) {
      header.classList.add("bg-white");
      header.classList.add("shadow");
  } else {
      header.classList.remove("bg-white");
      header.classList.remove("shadow");
  }

  window.onscroll = function () {
      var scrollpos = window.pageYOffset;

      if (scrollpos > 10) {
          header.classList.add("bg-white");
          header.classList.add("shadow");
      } else {
          header.classList.remove("bg-white");
          header.classList.remove("shadow");
      }
  }
});

function openModal() {
  document.getElementById('modal01').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal01').style.display = 'none';
}

var btn = document.getElementById("btn1");
btn.onclick = function () {
  closeModal();
}

document.getElementById('image13').onclick = function () {
  document.getElementById('img01').src = "img/img13.jpg";
  openModal();
}

document.getElementById('image14').onclick = function () {
  document.getElementById('img01').src = "img/img14.jpg";
  openModal();
}

document.getElementById('image15').onclick = function () {
  document.getElementById('img01').src = "img/img15.jpg";
  openModal();
}

document.getElementById('image16').onclick = function () {
  document.getElementById('img01').src = "img/img16.jpg";
  openModal();
}