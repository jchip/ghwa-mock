"use strict";

const getOrders = require("./get-orders");
const MONTH_MILLISEC = 6 * 24 * 60 * 60 * 1000 * 30;

function makeOrdersList() {
  return getOrders()
    .then(body => {
      const payload = body && body.payload;
      const summary = payload && payload.orderSummary;
      if (!summary) return {};
      let n = 0;
      const now = new Date();
      const msg = summary
        .filter(s => {
          const od = new Date(s.orderDate);
          const diff = now - od;
          return diff < MONTH_MILLISEC;
        })
        .map(s => {
          const lines = s.orderLines;
          n++;
          return `Order number ${n} with item ${lines[0].orderProduct.productName}`;
        })
        .join(". ");
      const text = `You have ${n} recent orders. ${msg}`;
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
