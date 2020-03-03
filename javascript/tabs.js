var tabButtons=document.querySelectorAll("button");
var tabPanels=document.querySelectorAll(".tab-panel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node){
    node.style.backgroundColor="";
    node.style.cColor="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="white";
  tabPanels.forEach(function(node){
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0, '#EA785B');
