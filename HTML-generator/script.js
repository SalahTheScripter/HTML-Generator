// Funksjon som bytter bakgrunns farge basert på input fra bruker.
function byttFarge() {
    var farge = document.getElementById('farge').value;
    var body = document.getElementsByTagName('body')[0];

    body.style.backgroundColor=farge;
}

// Funksjon som bruker verdier fra document.forms for å lage html elementet.
function Add(type) {
    // Lager en input type dynamisk
    var element = document.createElement("input");
    // Ulike attributer til elementet
    element.setAttribute("type", type);
    element.setAttribute("value", type);
    element.setAttribute("name", type);
    var span = document.getElementById("span");
    // Legge til elementet (i span)
    span.appendChild(element)
}

// Variabler
const myInput = document.getElementById('my-input');
const myButton = document.getElementById('my-button');
const myOtherButton = document.getElementById('my-other-button');
const bakgrunnsFarge = document.getElementById('bakgrunnsfarge');
const tekstFarge = document.getElementById('tekstfarge');
const borderColor = document.getElementById('bordercolor');

// Knappen blir usynlig
myOtherButton.style.display = 'none';

// Event
myButton.addEventListener('click', function(event) {
  
  const myInputValue = myInput.value;
  const bakgrunnsFargeValue = bakgrunnsFarge.value;
  const tekstFargeValue = tekstFarge.value;
  const borderColorValue = borderColor.value;
  
  myOtherButton.style.display = 'block';
  
  // Setter html-innholdet til elementet
  myOtherButton.innerHTML = myInputValue;
  myOtherButton.style.backgroundColor = bakgrunnsFargeValue;
  myOtherButton.style.color = tekstFargeValue;
  myOtherButton.style.borderColor = borderColorValue;
})

