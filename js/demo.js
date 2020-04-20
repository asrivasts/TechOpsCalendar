var events = [
  {'Date': new Date(2020, 3, 2), 'Title': 'VMware - Cloud Management  VM Tools: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 9), 'Title': 'VMware: vSphere 7.0 and SDDC: 12PM - 1PM'},
  {'Date': new Date(2020, 3, 16), 'Title': 'VMware: VMC on AWS and Hybrid Cloud: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 23), 'Title': 'Midrange .NEXT: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 30), 'Title': "Dell PowerOne - Dell's New Converged Platform: 11AM - 12PM"}
  {'Date': new Date(2020, 3, 30), 'Title': 'SD-WAN Edge Powered by VeloCloud: 11AM - 12PM', 'Link' : 'https://www.delltechnologies.com/en-us/video-collateral/sd-wan-edge-powered-by-velocloud.htm'}
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);


// {'Date': new Date(2020, 4, 16), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},