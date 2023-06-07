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
 
