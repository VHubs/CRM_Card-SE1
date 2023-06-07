// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

const KPIs = 
{
    "type": "tile",
    "content": [
        {
            "type": "heading",
            "text": "Data"
        },
        {
            "type": "statistics",
            "items": [
                {
                    "label": "Views last week",
                    "number": "55",
                    "description": "Apr 11 - Apr 17"
                },
                {
                    "label": "Views this month",
                    "number": "203",
                    "description": {
                        "type": "trend",
                        "value": "23.36%",
                        "direction": "increase"
                    }
                },
                {
                    "label": "Markdown syntax",
                    "number": "405",
                    "description": {
                        "type": "text",
                        "format": "markdown",
                        "text": "[Feb 12 - Feb 19](https://app.hubspot.com/)"
                    }
                }
            ]
        }
    ]
};
  
  const Progress = 
{
    "type": "tile",
    "content": [
        
        {
            "type": "progressBar",
            "variant": "success",
            "valueMax": 150,
            "value": 50,
            "title": "T-shirts",
            "valueDescription": "50 out of 150",
            "showPercentage": true
        },
        {
            "type": "progressBar",
            "variant": "warning",
            "valueMax": 100,
            "value": 20,
            "title": "Bottles",
            "valueDescription": "20 out of 100",
            "showPercentage": true
        },
        {
            "type": "progressBar",
            "variant": "danger",
            "valueMax": 150,
            "value": 10,
            "title": "Stickers",
            "valueDescription": "10 out of 150",
            "showPercentage": true
        }
    ]
};
    
  const nextSteps = [
    {
      type: "alert",
      title: "Alert: something you should be aware of",
      variant: "error",
      body: [{
        type: "text",
        text: "click on the following url to either view or redirected to the document"
      },
    ]
    },
    {
      type: "tile",
      content: 
        {
          type: "heading",
          text: "Medical Data"
        },
      },

    {
      type: "divider",
      distance: "small",
    },
    {
      type: "heading",
      text: "Next Steps",
    },
    {
      type: "text",
      format: "markdown",
      text: "You can explore more [code samples](https://github.com/HubSpot/ui-extensions-examples) or UI components in the [CRM card builder](https://app.hubspot.com/l/extensible-ui/), or try code samples. If you get stuck, take look at your [build or deploy logs](https://app.hubspot.com/l/developer-projects/) or [serverless functions logs](https://app.hubspot.com/l/private-apps/).",
    },
  ];

