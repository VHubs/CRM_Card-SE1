// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname, event } = context.propertiesToSend;
   // Check if the event is a form submit event
  if (event && event.type === 'SUBMIT') {
    const { example_input } = event.payload.formState;
    sendResponse({
      message: {
        type: 'SUCCESS',
        body: `Form submit was successful. Input's value: ${example_input}`,
      },
    });
    return;  // Don't forget to return here, so the function execution stops after sending the response
  }


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

  const alertComponent = {
  "type": "tile",
  "content": [
    {
      "type": "heading",
      "text": "Alert"
    },
    {
      "type": "alert",
      "title": "Limit reached",
      "body": {
        "type": "text",
        "format": "markdown",
        "text": "click on the following url to either view or redirected to the details"
      },
      "variant": "error"
    }
  ]
};
  
const iframeTile = {
  "type": "tile",
  "content": [
      {
    "type": "heading",
    "text": "iFrame"
  },
    {
      "type": 'text',
      "text": 'Clicking the button will open a modal dialog with an iframe that displays the content at the provided URL.',
    },
    {
      "type": 'button',
      "text": 'Open iframe',
      "onClick": {
        "type": 'IFRAME',
        // Width and height of the iframe (in pixels)
        "width": 700,
        "height": 400,
        "uri": 'https://www.youtube.com/embed/FDumsLFwyNM',
      },
    },
  ],
};
  
  const formTile = {
  "type": "tile",
  "content": [
     {
    "type": "heading",
    "text": "Form"
  },
    {
      "type": 'text',
      "text": "This example displays a simple form with a text input and a submit button. Inputting data into the field and clicking the submit button shows a banner with the user's input.",
    },
    {
      "type": 'form',
      "content": [
        {
          "type": 'input',
          "name": 'example_input',
          "inputType": 'text',
          "label": 'Example input field',
          "initialValue": 'Default value of the input field',
        },
        {
          "type": 'button',
          "text": 'Submit form',
          "onClick": {
            "type": 'SUBMIT',
            "serverlessFunction": 'crm-card',
          },
        },
      ],
    },
  ],
};
  sendResponse({
    sections: [introMessage1, statisticsTile, alertComponent, iframeTile],
  });
};
