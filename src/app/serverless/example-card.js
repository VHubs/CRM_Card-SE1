// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;
	
	
  const tileOne = {
"type": "crm-card",
"content": [
{
"type": "heading",
"text": "Custom Card Example",
},
{
"type": "alert",
"title": "Alert: something you should be aware of",
"variant": "error",
"body": {
"type": "text",
"text": "click on the following url to either view or redirected to the document"
}
},
{
"type": "divider",
"distance": "small"
},
{
"type": "descriptionList",
"items": [
{
"label": "Name:",
"value": "John Smith"
},
{
"label": "Address:",
"value": "Am Postbahnhof 17, Berlin, Germany"
},
{
"label": "Schedule:",
"value": {
"type": "text",
"format": "markdown",
"text": "[link to schedule](https://app.hubspot.com/l/docs/doc/platform/create-custom-crm-cards-with-projects#components)"
}
}
]
},
{
"type": "tag",
"text": "Waiting for validation",
"variant": "warning",
"onClick": {
"type": "SERVERLESS_ACTION_HOOK",
"serverlessFunction": "exampleFunction"
}
},
{
"type": "button",
"text": "Contact",
"onClick": {
"type": "SERVERLESS_ACTION_HOOK",
"serverlessFunction": "exampleFunction"
}
}
]
};

  
