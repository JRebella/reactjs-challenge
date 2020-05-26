var _ = require("lodash");

// Given a investment amount and a investment plan, returns the ideal way to distribute the money
export const calculateNewDistribution = (totalMoney, desiredDistribution) => {
  return _.mapValues(
    desiredDistribution,
    (value) => +Number((value / 100) * totalMoney).toFixed(2)
  );
};

// Given a current investment portfolio and an ideal distribution, returns the difference between the two
export const calculateDifference = (data, newDistribution) =>
  _.mapValues(data, (value, key) => +(newDistribution[key] - value).toFixed(2));

// Given a current investment portfolio, returns the total amount of invested money
export const calculateTotalMoney = (data) =>
  Object.keys(data).reduce((total, key) => total + Number(data[key]), 0);

// Given the difference calculated between the current investment portfolio and an ideal distribution,
// will calculate the needed money transfers in between investment sectors in order to adapt the users portfolio to the ideal one
export const calculateTransfers = (incomingDifference) => {
  let difference = _.cloneDeep(incomingDifference); //In order to not modify incoming object and remain pure
  let transfers = []; // Array in which to store the data that describes the needed transfers in between investments
  const keys = Object.keys(difference);

  keys.forEach((toFillKey) => {
    if (difference[toFillKey] > 0) {
      // This sector needs to be filled

      for (let toSubtractKey of keys) {
        // Search for others from where to fill in

        if (difference[toSubtractKey] < 0) {
          let trasnferAmount = 0;
          if (difference[toFillKey] + difference[toSubtractKey] >= 0) {
            // Use all of this investment to fill the other (possibly all the way)
            trasnferAmount = +difference[toSubtractKey].toFixed(2);

            difference[toFillKey] += trasnferAmount;
            difference[toSubtractKey] = 0;
          } else {
            //Only take what's neccesary and leave the rest
            trasnferAmount = +difference[toFillKey].toFixed(2);

            difference[toSubtractKey] += trasnferAmount;
            difference[toFillKey] = 0;
          }

          // Generate a suggested transfer between sectors
          transfers.push({
            from: toSubtractKey,
            to: toFillKey,
            amount: Math.abs(trasnferAmount),
          });

          if (difference[toFillKey] === 0) {
            // This sector is already filled, no need to keep iterating
            break;
          }
        }
      }
    }
  });
  return transfers;
};
