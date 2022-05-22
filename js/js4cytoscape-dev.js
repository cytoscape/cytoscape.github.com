const defaultBaseUrl = 'http://127.0.0.1:1234/v1';

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
    console.log('cytoscape v' + cyversion["cytoscapeVersion"] + ' is running');
  } catch(err){
    cyrunning = false;
    console.log('cytoscape is not running');
  }

  cybadgeElm = document.getElementsByClassName('cytoscape-badge');
  //just in case there is more than on badge on a page
  for(let i = 0; i < cybadgeElm.length; i++) {
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

async function cyrestGET(operation = '', parameters = '', baseUrl = defaultBaseUrl) {
    let qurl = baseUrl.concat('/', operation);
    if (parameters != '') {
        const qparameters = parameters;
        qurl = qurl.concat('?', qparameters);
    }
    const res = await fetch(qurl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const json = await res.json();
      return json;
}
