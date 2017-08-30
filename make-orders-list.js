"use strict";

const getOrders = require("./get-orders");

function makeOrdersList() {
  return getOrders()
    .then(body => {
      const payload = body && body.payload;
      const summary = payload && payload.orderSummary;
      if (!summary) return {};
      let n = 0;
      const msg = summary
        .map(s => {
          const lines = s.orderLines;
          n++;
          return `Order number ${n} with item ${lines[0].orderProduct.productName}`;
        })
        .join(". ");
      const text = `You have ${summary.length} recent orders. ${msg}`;
      return {
        speech: text,
        displayText: text
      };
    })
    .catch(err => {
      return {
        speech: "sorry, walmart orders is having technical difficulty right now",
        displayText: "sorry, walmart orders is having technical difficulty right now"
      };
    });
}

module.exports = makeOrdersList;
