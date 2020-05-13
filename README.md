# Algorithmic Complexity project

A timing framework and custom algorithms to experiment with algorithmic complexity, designing for efficiency at scale.

## Technologies

- Node.js
- Jest

## Algorithms

### Reverse

Reverses an array in place.

code => reverse(arr)

#### I/O table

|Input      |Output     |Scenario|
|-----------|-----------|--------|
|[1]        |[1]        |Array of 1|
|[1,2]      |[2,1]      |Array of 2|
|[1,2,3]    |[3,2,1]    |Array of 3|
|[2,1,3]    |[3,1,2]    |Array in non-numerical order|
|[1,4,5,6,7]|[7,6,5,4,1]|Longer array|
|['hey','you','friend']|['friend','you','hey']|array of strings|
|[1,'hey',2]|[2,'hey',1]|Array of mixed values|
|[]         |[]         |Edge case - Empty array | 
|1          |error(input must be an array)|Exception - input in wrong format|
|'hey'      |error(input must be an array)|Exception - input in wrong format|




