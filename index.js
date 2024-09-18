import { LinkedList } from "./node_modules/quick-ll/linked-list.js";

const HEIGHT = 8; // max index of height
const WIDTH = 8; // max index of width
const Y = 0; // height index
const X = 1; // width index

console.log(knightMoves([3, 3], [4, 3]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([0, 0], [0, 0]));

function knightMoves(start, dest) {
  let visited = [];
  for (let i = 0; i < HEIGHT; i++) {
    visited.push(new Array(WIDTH));
  }
  let next = new LinkedList([start, new LinkedList(start)]);
  while (next.size != 0) {
    let [curr, path] = next.removeAt(0);
    if (curr[0] == dest[0] && curr[1] == dest[1]) return path.toArray(); // add toArray method.
    if (visited[curr[Y]][curr[X]]) {
      continue;
    }
    visited[curr[Y]][curr[X]] = true;
    addNextMoves(next, path, visited);
  }
  return null;
}

function addNextMoves(next, path, visited) {
  let curr = path.at(path.size - 1);
  let newY;
  let newX;
  newY = curr[Y] + 2; // case: going up 2
  if (newY < HEIGHT) {
    newX = curr[X] - 1;
    if (newX >= 0 && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
    newX = curr[X] + 1;
    if (newX < WIDTH && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
  }
  newY = curr[Y] + 1; // case: going up 1
  if (newY < HEIGHT) {
    newX = curr[X] - 2;
    if (newX >= 0 && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
    newX = curr[X] + 2;
    if (newX < WIDTH && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
  }
  newY = curr[Y] - 1; // case going down 1
  if (newY >= 0) {
    newX = curr[X] - 2;
    if (newX >= 0 && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
    newX = curr[X] + 2;
    if (newX < WIDTH && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
  }
  newY = curr[Y] - 2; // case going down 2
  if (newY >= 0) {
    newX = curr[X] - 1;
    if (newX >= 0 && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
    newX = curr[X] + 1;
    if (newX < WIDTH && !visited[newY][newX]) {
      next.append([[newY, newX], path.clone().append([newY, newX])]);
    }
  }
}

window.knightMoves = knightMoves;
