// For external API calls
const axios = require("axios");

exports.main = async (context = {}, sendResponse) => {
  // Store contact firstname, configured as propertiesToSend in crm-card.json
  const { firstname } = context.propertiesToSend;

  const tileOne = {
    "type": "tile",
    "content": [
      {
        "type": "heading",
        "text": "Medical Data"
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
						"label": "Doctor Name:",
						"value": "John Doctor"
					},
					{
						"label": "Address:",
						"value": "Cambridge, 25 First St 2nd Floor, United States"
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
				"text": "Contact the doctor",
				"onClick": {
					"type": "SERVERLESS_ACTION_HOOK",
					"serverlessFunction": "exampleFunction"
				}
			}
    ]
  };

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
      sections: [tileOne],
    });
  } catch (error) {
    // "message" will create an error feedback banner when it catches an error
    sendResponse({
      message: {
        type: "ERROR",
        body: `Error: ${error.message}`,
      },
      sections: [tileOne],
    });
  }
};
