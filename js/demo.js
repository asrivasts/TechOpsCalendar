var events = [
  {'Date': new Date(2020, 3, 2), 'Title': 'VMware - Cloud Management  VM Tools: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 9), 'Title': 'VMware: vSphere 7.0 and SDDC: 12PM - 1PM'},
  {'Date': new Date(2020, 3, 16), 'Title': 'VMware: VMC on AWS and Hybrid Cloud: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 23), 'Title': 'Midrange .NEXT: 11AM - 12PM'},
  {'Date': new Date(2020, 3, 30), 'Title': "Dell PowerOne - Dell's New Converged Platform: 11AM - 12PM"},
  {'Date': new Date(2020, 4, 7), 'Title': 'SD-WAN Edge Powered by VeloCloud: 11AM - 12PM', 'Link' : 'https://www.delltechnologies.com/en-us/video-collateral/sd-wan-edge-powered-by-velocloud.htm'},
  {'Date': new Date(2020, 4, 14), 'Title': 'Data Protection and Resilliency: 11AM - 1PM'},
  {'Date': new Date(2020, 4, 21), 'Title': 'Monthly Business Review: 11AM - 12PM'},
  {'Date': new Date(2020, 4, 28), 'Title': 'Unstructured Data Briefing: 11AM - 12PM'},
  {'Date': new Date(2020, 5, 03), 'Title': 'Review of Edu Sessions (POC?): 11AM - 12PM'},
  {'Date': new Date(2020, 5, 18), 'Title': 'Microsoft Services: 11AM - 12PM'}
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);