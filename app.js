const topPoints = {
  1: 12,
  2: 9,
  3: 8,
  4: 7,
  5: 6,
  6: 5,
  7: 4,
  8: 3,
  9: 2,
  10: 1,
  11: 0,
  12: 0
};

function calculatePoint(top, kill){
    return (topPoints[top] || 0) + (kill || 0);
}

console.log("THP Championship Loaded");
