// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

  const introMessage1 = 
    {
    "type": "tile",
    "content": [
        {
    "type": "heading",
    "text": "Products purchased in last month"
  },
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

  const statisticsTile = {
    "type": "tile",
    "content": [
       {
    "type": "heading",
    "text": "KPIs"
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

  sendResponse({
    sections: [introMessage1, statisticsTile],
  });
};
