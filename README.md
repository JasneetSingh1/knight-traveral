## Table of Contents

1. [Description](#description)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

This project implements a shortest-path solver for a knight on a chessboard. Given a starting position and a target position, the program calculates the optimal sequence of moves using a breadth-first search (BFS) algorithm. The goal is to practice and reinforce understanding of graphs, BFS traversal, and path tracking.

## Features

- Computes the shortest path for a knight on an 8x8 chessboard.
- Uses BFS to ensure the optimal solution is found.
- Keeps track of visited positions to prevent redundant calculations.
- Returns the sequence of moves taken from start to destination.
- Handles invalid inputs gracefully.

## Technologies Used

- JavaScript (ES6+)

## Project Challenges

- **Understanding BFS Traversal**: Initially, the implementation did not correctly track the path, leading to incorrect move sequences. The issue was resolved by maintaining a queue of paths instead of just moves.
- **Tracking the Path**: The main challenge was ensuring that each move retained its history so that the final sequence could be reconstructed.


## Thoughts and Observations

- BFS is the ideal algorithm for this type of shortest-path problem, as it guarantees the minimal number of moves.
- Initially, a heuristic sorting approach was used, but it was unnecessary since BFS naturally finds the shortest path.
- Debugging involved manually printing paths at each step to verify the movement logic.

## Future Enhancements

- Implement a graphical representation of the knight’s movement on a chessboard.
- Expand the algorithm to support different board sizes.
- Optimize performance by reducing redundant computations.

## Installation

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/JasneetSingh1/knight-traveral.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd knight-traversal
   ```

3. Run the program using Node.js:

   ```bash
   node script.js
   
