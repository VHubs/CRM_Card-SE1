/ For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

  const introMessage = 
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

  try {
    const { data } = await axios.get("https://zenquotes.io/api/random");

    const quoteSections = [
      {
        type: "tile",
        body: [
          {
            type: "text",
            format: "markdown",
            text: `**Hello ${firstname}, here's your quote for the day**!`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_${data[0].q}_`,
          },
          {
            type: "text",
            format: "markdown",
            text: `_**Author**: ${data[0].a}_`,
          },
        ],
      },
      {
        type: "button",
        text: "Get new quote",
        onClick: {
          type: "SERVERLESS_ACTION_HOOK",
          serverlessFunction: "crm-card",
        },
      },
    ];

    sendResponse({
      sections: [introMessage],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [introMessage],
    });
  }
};

