// Funksjon som bytter bakgrunns farge basert på input fra bruker.
function byttFarge() {
    var farge = document.getElementById('farge').value;
    var body = document.getElementsByTagName('body')[0];

    body.style.backgroundColor=farge;
}

// Henter referanser til nødvendige elementer
const elementSelect = document.getElementById('element-select');
const elementContent = document.getElementById('element-content');
const elementStyle = document.getElementById('element-style');
const positionSelect = document.getElementById('position-select');
const customPositionDiv = document.getElementById('custom-position');
const customPositionInput = document.getElementById('custom-position-input');
const createElementButton = document.getElementById('create-element');
const outputContainer = document.getElementById('output-container');

// Legger til klikk-hendelsen på knappen
createElementButton.addEventListener('click', () => {
  const selectedElement = elementSelect.value;
  const content = elementContent.value;
  const style = elementStyle.value;
  const position = positionSelect.value;
  const customPosition = customPositionInput.value;

  // Oppretter et nytt HTML-element og setter innholdet
  const newElement = document.createElement(selectedElement);
  newElement.innerText = content;

  // Setter stilene for det opprettede elementet
  newElement.style.cssText = style;

  // Plasserer det nye elementet basert på valgt posisjon
  if (position === 'first') {
      outputContainer.prepend(newElement); // Plasserer elementet først i output-container
  } else if (position === 'last') {
      outputContainer.appendChild(newElement); // Plasserer elementet sist i output-container
  } else if (position === 'custom') {
      const targetElement = document.querySelector(customPosition);
      if (targetElement) {
          targetElement.insertAdjacentElement('afterend', newElement); // Plasserer elementet etter målelementet
      } else {
          console.error('Ugyldig målelement. Vennligst sjekk ID eller klasse.');
      }
  }

  // Tømmer innholdet i tekstfeltene etter at elementet er opprettet
  elementContent.value = '';
  elementStyle.value = '';
  customPositionInput.value = '';
});

// Viser eller skjuler tilpasset plasseringsinput basert på valgt posisjon
positionSelect.addEventListener('change', () => {
  const selectedPosition = positionSelect.value;
  if (selectedPosition === 'custom') {
      customPositionDiv.style.display = 'block';
  } else {
      customPositionDiv.style.display = 'none';
  }
});
