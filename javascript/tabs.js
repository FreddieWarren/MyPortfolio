var tabButtons = document.querySelectorAll("button");
var tabPanels = document.querySelectorAll(".tab-panel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "grey";
    node.style.textDecoration = "none"
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "#616161";
  tabButtons[panelIndex].style.textDecoration = "underline";
  tabPanels.forEach(function (node) {
    node.style.display = "none";
    node.style.color = "blue";
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;


}

// showPanel(0, '#EA785B');
showPanel(0, 'white)');
