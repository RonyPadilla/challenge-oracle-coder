let elementText = document.getElementById("text-info");
let elementChange = document.getElementById("texto-Right");
let elementDivRight = document.getElementById("section-Right");
let elementDiverror = document.getElementById("section-error");
let buttonEncrypt = document.getElementById("button-Encrypt");
let buttonDecrypt = document.getElementById("button-Decrypt");
let buttonCopy = document.getElementById("button-Copy");

elementDiverror.style.visibility = "hidden";
elementDivRight.style.visibility = "visible";

function Encrypt() {
  let textInfo = elementText.value;
  let newTextInfo = textInfo.replace(/e/gi, "enter");
  let newTextInfo1 = newTextInfo.replace(/i/gi, "imes");
  let newTextInfo2 = newTextInfo1.replace(/a/gi, "ai");
  let newTextInfo3 = newTextInfo2.replace(/o/gi, "ober");
  let newTextInfo4 = newTextInfo3.replace(/u/gi, "ufat");
  elementChange.innerHTML = newTextInfo4;
}

function Decrypt() {
  let textInfo = elementText.value;
  let newTextInfo = textInfo.replace(/enter/gi, "e");
  let newTextInfo1 = newTextInfo.replace(/imes/gi, "i");
  let newTextInfo2 = newTextInfo1.replace(/ai/gi, "a");
  let newTextInfo3 = newTextInfo2.replace(/ober/gi, "o");
  let newTextInfo4 = newTextInfo3.replace(/ufat/gi, "u");
  elementChange.innerHTML = newTextInfo4;
}

buttonEncrypt.addEventListener("click", function () {
  let elementText = document.getElementById("text-info");
  let textInfo = elementText.value;

  if (textInfo === "") {
    elementDiverror.style.visibility = "visible";
    elementDivRight.style.visibility = "hidden";
  } else {
    elementDiverror.style.visibility = "hidden";
    elementDivRight.style.visibility = "visible";
    Encrypt();
  }
});

buttonDecrypt.addEventListener("click", function () {
  let elementText = document.getElementById("text-info");
  let textInfo = elementText.value;

  if (textInfo === "") {
    elementDiverror.style.visibility = "visible";
    elementDivRight.style.visibility = "hidden";
  } else {
    elementDiverror.style.visibility = "hidden";
    elementDivRight.style.visibility = "visible";
    Decrypt();
  }
});

buttonCopy.addEventListener("click", function () {
  let elementCopyText = document.getElementById("texto-Right");
  elementCopyText.select();
  document.execCommand("copy");
});
