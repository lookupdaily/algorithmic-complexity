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
|[1,7,5,8,4]|[4,8,5,7,1]|Longer array in non-numerical order|
|['hey','you','friend']|['friend','you','hey']|array of strings|
|[1,'hey',2]|[2,'hey',1]|Array of mixed values|
|[]         |[]         |Edge case - Empty array | 
|1          |error(input must be an array)|Exception - input in wrong format|
|'hey'      |error(input must be an array)|Exception - input in wrong format|




