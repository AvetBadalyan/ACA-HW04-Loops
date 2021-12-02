//Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
let angles = [
  [45, 90],
  [30, 30],
  [75, 25],
];

for (let i = 0; i < angles.length; i++) {
  let thirdAngle = 180 - angles[i][0] - angles[i][1];
  console.log(
    `when angles are ${angles[i]} the 3-rd angle is equal to ${thirdAngle} `
  );
}
