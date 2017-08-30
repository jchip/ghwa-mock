"use strict";

const electrodeServer = require("electrode-server");

electrodeServer({}).then(server => {
  server.route({
    method: "*",
    path: "/",
    handler: (req, reply) => {
      const payload = req.payload;
      const result = payload && payload.result;
      const action = result && result.action;
      switch (action) {
        case "list_orders":
          return reply({
            speech:
              "You have two orders.  First order is ready for pickup.  Second order is shipped.",
            displayText:
              "You have two orders.  First order is ready for pickup.  Second order is shipped."
          });
          break;
        case "checkin_pickup":
          return reply({
            speech: "You order will be ready for pickup in one hour.",
            displayText: "You order will be ready for pickup in one hour."
          });
          break;
        case "track_order":
          return reply({
            speech: "You order is scheduled to deliver tomorrow.",
            displayText: "You order is scheduled to deliver tomorrow."
          });
          break;
        default:
          break;
      }
      reply({
        speech: "I didn't get that, could you repeat please?",
        displayText: "I didn't get that, could you repeat please?"
      });
    }
  });
});
