let cyrunning;
let cybadgeKey;
let cybadgeVal;
let cybadgeElm;
let cyversion;

async function cyBadge() {
  cyrunning = false;
  try {
    cyversion = await cyrestGET('version');
    cyrunning = true;
  } catch(err){
    cyrunning = false;
  }

  cybadgeElm = document.getElementsByClassName('cytoscape-badge');
  //just in case there is more than on badge on a page
  for(let i = 0; i < cybadgeElm.length; i++) {
    console.log(cybadgeElm[i].id + " ");
    cybadgeKey = document.createElement('span');
    cybadgeKey.className = 'cybadgekey';
    cybadgeKey.innerHTML = 'cytoscape';
    cybadgeVal = document.createElement('span');
    cybadgeVal.className = 'cybadgeval';
    if (cyrunning){
      cybadgeVal.style = 'background:#0078B9;';
      cybadgeVal.innerHTML = 'v' + cyversion["cytoscapeVersion"];
    } else {
      cybadgeVal.style = 'background:#CD5F46;';
      cybadgeVal.innerHTML = 'not running';
    }
    cybadgeElm[i].appendChild(cybadgeKey);
    cybadgeElm[i].appendChild(cybadgeVal);
  } 
}
