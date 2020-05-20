# Algorithmic Complexity project

A timing framework and custom algorithms to experiment with algorithmic complexity, designing for efficiency at scale.

## Technologies

- Node.js
- Jest

## Algorithms

### Reverse

Reverses an array in place.

code => findDuplicates(arr)

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

### Shuffle

Randomly shuffles each value in an array.

code => shuffle(arr)

|Input      |Output     |Scenario|
|-----------|-----------|--------|
|[1]        |[1]        |Array of 1|
|[1,2]      |![1,2]     |Array of 2|
|[1,2,3]    |![1,2,3]    |Array of 3|
|[1,7,5,8,4]|![1,7,5,8,4]|Longer array in non-numerical order|
|['hey','you','friend']|!['hey','you','friend']|array of strings|
|[1,'hey',2]|![1,'hey',2]|Array of mixed values|
|[]         |[]         |Edge case - Empty array | 

### Find Duplicates

Given a list of words, find all words that appear more than once.

Input: array
Output: array

|Input        |Output |Scenario|
|-------------|-------|--------|
|[1]          |[]     |Array of 1|
|[1,1]        |[1]    |Array of 2 with one duplicate|
|[1,2]        |[]     |Array of 2 with no duplicates|
|[1,2,1]      |[2]    |Array with 1 duplicate and 2 non-duplicates|
|[1,2,2,1]    |[1,2]  |Array with 2 duplicates|
|[1,2,2,2,1,4]|[1,2]  |Array with multiple duplicates and one non-duplicate|
|[]           |[]     |Edge case - Empty array |
