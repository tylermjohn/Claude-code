"""
LESSON 2.3: List Comprehensions and Advanced Iteration (1.5 hours)

Master Python's elegant syntax for creating and transforming data.
"""

# ============================================================================
# SECTION 1: List Comprehensions Basics
# ============================================================================

# Traditional approach
squares = []
for i in range(10):
    squares.append(i ** 2)
print(squares)

# List comprehension - more Pythonic
squares = [i ** 2 for i in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# General syntax: [expression for item in iterable]

# More examples
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print(doubled)  # [2, 4, 6, 8, 10]

words = ["hello", "world", "python"]
upper_words = [word.upper() for word in words]
print(upper_words)  # ['HELLO', 'WORLD', 'PYTHON']

# ============================================================================
# SECTION 2: List Comprehensions with Conditions
# ============================================================================

# Syntax: [expression for item in iterable if condition]

# Filter even numbers
numbers = range(10)
evens = [x for x in numbers if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Get lengths of words longer than 4 characters
words = ["cat", "elephant", "dog", "rhinoceros"]
long_words = [word for word in words if len(word) > 4]
print(long_words)  # ['elephant', 'rhinoceros']

# Square only even numbers
squared_evens = [x**2 for x in range(10) if x % 2 == 0]
print(squared_evens)  # [0, 4, 16, 36, 64]

# ============================================================================
# SECTION 3: Conditional Expressions in Comprehensions
# ============================================================================

# Syntax: [expression_if_true if condition else expression_if_false for item in iterable]

# Label numbers as even or odd
numbers = range(5)
labels = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Normalize temperatures
temps_f = [32, 72, 100, -40]
temps_c = [(t - 32) * 5/9 for t in temps_f]
print([round(t, 1) for t in temps_c])  # [0.0, 22.2, 37.8, -40.0]

# Replace negative numbers with 0
numbers = [5, -3, 8, -1, 10]
positive = [x if x > 0 else 0 for x in numbers]
print(positive)  # [5, 0, 8, 0, 10]

# ============================================================================
# SECTION 4: Nested List Comprehensions
# ============================================================================

# Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Think of it as nested loops:
# for row in matrix:
#     for num in row:
#         flat.append(num)

# Create multiplication table
table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for row in table:
    print(row)

# Combinations
colors = ["red", "blue"]
sizes = ["S", "M", "L"]
combos = [(color, size) for color in colors for size in sizes]
print(combos)
# [('red', 'S'), ('red', 'M'), ('red', 'L'), ('blue', 'S'), ('blue', 'M'), ('blue', 'L')]

# ============================================================================
# SECTION 5: Dictionary Comprehensions
# ============================================================================

# Create dictionary from lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
people = {name: age for name, age in zip(names, ages)}
print(people)  # {'Alice': 25, 'Bob': 30, 'Charlie': 35}

# Square numbers
squares = {x: x**2 for x in range(6)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Transform existing dictionary
prices = {"apple": 0.5, "banana": 0.3, "cherry": 0.8}
discounted = {item: price * 0.9 for item, price in prices.items()}
print(discounted)

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {value: key for key, value in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}

# ============================================================================
# SECTION 6: Set Comprehensions
# ============================================================================

# Remove duplicates and square
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_squares = {x**2 for x in numbers}
print(unique_squares)  # {1, 4, 9, 16}

# Get unique lengths
words = ["cat", "dog", "bird", "fish", "ant"]
lengths = {len(word) for word in words}
print(lengths)  # {3, 4}

# ============================================================================
# SECTION 7: Generator Expressions
# ============================================================================

# Generators are like list comprehensions but lazy (compute on-demand)
# Use () instead of []

# List comprehension - creates entire list in memory
squares_list = [x**2 for x in range(1000000)]
print(type(squares_list))  # <class 'list'>

# Generator expression - creates values on-demand
squares_gen = (x**2 for x in range(1000000))
print(type(squares_gen))  # <class 'generator'>

# Generators are memory-efficient for large datasets
# You can iterate over them once
gen = (x**2 for x in range(5))
for num in gen:
    print(num)
# After iteration, generator is exhausted

# Convert generator to list
gen = (x**2 for x in range(5))
squares = list(gen)
print(squares)  # [0, 1, 4, 9, 16]

# Use in functions that accept iterables
print(sum(x**2 for x in range(10)))  # 285
print(max(x**2 for x in range(10)))  # 81

# ============================================================================
# SECTION 8: Advanced Iteration with map, filter, reduce
# ============================================================================

# map - apply function to each element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
print(sums)  # [11, 22, 33]

# filter - keep elements where function returns True
numbers = range(10)
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [0, 2, 4, 6, 8]

# reduce - accumulate values (need to import)
from functools import reduce
numbers = [1, 2, 3, 4, 5]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120 (1*2*3*4*5)

# Sum using reduce (though sum() is better)
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# ============================================================================
# SECTION 9: any() and all()
# ============================================================================

# any - returns True if ANY element is truthy
numbers = [0, 0, 1, 0]
print(any(numbers))  # True (1 is truthy)

numbers = [0, 0, 0]
print(any(numbers))  # False

# Check if any number is even
numbers = [1, 3, 5, 7, 8]
print(any(x % 2 == 0 for x in numbers))  # True

# all - returns True if ALL elements are truthy
numbers = [1, 2, 3, 4]
print(all(numbers))  # True (all non-zero)

numbers = [1, 2, 0, 4]
print(all(numbers))  # False (0 is falsy)

# Check if all numbers are positive
numbers = [1, 2, 3, 4]
print(all(x > 0 for x in numbers))  # True

# ============================================================================
# SECTION 10: zip and enumerate
# ============================================================================

# zip - combine multiple iterables
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
cities = ["NYC", "LA", "Chicago"]

for name, age, city in zip(names, ages, cities):
    print(f"{name} ({age}) lives in {city}")

# Create dictionary from two lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = dict(zip(keys, values))
print(dictionary)  # {'a': 1, 'b': 2, 'c': 3}

# zip stops at shortest iterable
list1 = [1, 2, 3]
list2 = [10, 20]
print(list(zip(list1, list2)))  # [(1, 10), (2, 20)]

# enumerate - get index and value
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Start enumeration from different number
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}: {fruit}")

# ============================================================================
# SECTION 11: Sorting with key Functions
# ============================================================================

# Sort by length
words = ["banana", "pie", "apple", "cherry"]
sorted_words = sorted(words, key=len)
print(sorted_words)  # ['pie', 'apple', 'banana', 'cherry']

# Sort by last letter
sorted_words = sorted(words, key=lambda x: x[-1])
print(sorted_words)  # ['banana', 'apple', 'pie', 'cherry']

# Sort list of tuples by second element
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
print(sorted_students)  # [('Bob', 92), ('Alice', 85), ('Charlie', 78)]

# Sort dictionary by value
scores = {"Alice": 85, "Bob": 92, "Charlie": 78}
sorted_items = sorted(scores.items(), key=lambda x: x[1], reverse=True)
print(sorted_items)  # [('Bob', 92), ('Alice', 85), ('Charlie', 78)]

# ============================================================================
# SECTION 12: Real-World Patterns
# ============================================================================

# Transform data
data = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 25},
    {"name": "Charlie", "age": 35}
]

# Extract names
names = [person["name"] for person in data]
print(names)

# Filter by condition
adults = [person for person in data if person["age"] >= 30]
print(adults)

# Create lookup dictionary
lookup = {person["name"]: person["age"] for person in data}
print(lookup)

# Process CSV-like data
csv_data = [
    "name,age,city",
    "Alice,30,NYC",
    "Bob,25,LA"
]

headers = csv_data[0].split(",")
rows = [row.split(",") for row in csv_data[1:]]
people = [dict(zip(headers, row)) for row in rows]
print(people)

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Basic comprehensions
# TODO: Given [1, 2, 3, 4, 5], create lists of:
# a) Cubes of each number
# b) Even numbers only
# c) "even" or "odd" labels for each number


# Exercise 2: Nested comprehension
# TODO: Create a 5x5 multiplication table using nested list comprehension


# Exercise 3: Dictionary transformation
# TODO: Given {"apple": 0.5, "banana": 0.3, "cherry": 0.8}
# Create new dict with 20% markup on prices (multiply by 1.2)


# Exercise 4: Flatten and filter
# TODO: Given [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# Create flat list of only even numbers


# Exercise 5: String processing
# TODO: Given ["  hello  ", "  WORLD  ", "  Python  "]
# Create list of stripped, lowercase strings


# Exercise 6: Complex filtering
# TODO: Given list of numbers [1, -2, 3, -4, 5, -6]
# Create dict mapping each number to "positive" or "negative"


# Exercise 7: Cartesian product
# TODO: Create all possible combinations of ["A", "K", "Q"] and ["♠", "♥", "♦", "♣"]
# Result: [("A", "♠"), ("A", "♥"), ...]


# Exercise 8: Word lengths
# TODO: Given "the quick brown fox jumps over the lazy dog"
# Create dict mapping each unique word to its length


# Exercise 9: Matrix transpose
# TODO: Given [[1, 2, 3], [4, 5, 6]]
# Transpose to [[1, 4], [2, 5], [3, 6]]


# Exercise 10: Conditional comprehension
# TODO: Given [-5, -3, 0, 3, 5]
# Square positive numbers, cube negative numbers, leave 0 as is


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Write list comprehensions with and without conditions?")
print("✓ Create nested list comprehensions?")
print("✓ Use dictionary and set comprehensions?")
print("✓ Understand generator expressions?")
print("✓ Use map, filter, any, all effectively?")
print("✓ Work with zip and enumerate?")
print("\nIf yes, move to lesson2-4-exercises.py!")
