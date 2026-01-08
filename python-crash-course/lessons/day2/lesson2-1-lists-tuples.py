"""
LESSON 2.1: Lists and Tuples (1.5 hours)

Master Python's fundamental sequence data structures.
"""

# ============================================================================
# SECTION 1: Lists Basics
# ============================================================================

# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

print(fruits)  # ['apple', 'banana', 'cherry']

# Accessing elements (0-indexed)
print(fruits[0])   # apple (first)
print(fruits[1])   # banana
print(fruits[-1])  # cherry (last)
print(fruits[-2])  # banana (second to last)

# Slicing
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])    # [2, 3, 4] (start:stop)
print(numbers[:3])     # [0, 1, 2] (from beginning)
print(numbers[7:])     # [7, 8, 9] (to end)
print(numbers[::2])    # [0, 2, 4, 6, 8] (step by 2)
print(numbers[::-1])   # [9, 8, 7, ...] (reverse)

# ============================================================================
# SECTION 2: Modifying Lists
# ============================================================================

# Lists are mutable (can be changed)
fruits = ["apple", "banana", "cherry"]

# Change element
fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'cherry']

# append - add to end
fruits.append("date")
print(fruits)  # ['apple', 'blueberry', 'cherry', 'date']

# insert - add at specific position
fruits.insert(1, "apricot")
print(fruits)  # ['apple', 'apricot', 'blueberry', 'cherry', 'date']

# extend - add multiple items
fruits.extend(["elderberry", "fig"])
print(fruits)

# remove - remove first occurrence
fruits.remove("cherry")
print(fruits)

# pop - remove and return element
last = fruits.pop()  # Remove last item
print(f"Removed: {last}")
second = fruits.pop(1)  # Remove at index 1
print(f"Removed: {second}")

# clear - remove all items
# fruits.clear()

# del - delete element or slice
numbers = [0, 1, 2, 3, 4, 5]
del numbers[2]     # Delete single element
print(numbers)     # [0, 1, 3, 4, 5]
del numbers[1:3]   # Delete slice
print(numbers)     # [0, 4, 5]

# ============================================================================
# SECTION 3: List Operations
# ============================================================================

# Concatenation
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# Repetition
zeros = [0] * 5
print(zeros)  # [0, 0, 0, 0, 0]

# Membership testing
fruits = ["apple", "banana", "cherry"]
print("apple" in fruits)      # True
print("grape" in fruits)       # False
print("grape" not in fruits)   # True

# Length
print(len(fruits))  # 3

# ============================================================================
# SECTION 4: List Methods
# ============================================================================

numbers = [3, 1, 4, 1, 5, 9, 2, 6]

# sort - sort in place (modifies original)
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]

numbers.sort(reverse=True)
print(numbers)  # [9, 6, 5, 4, 3, 2, 1, 1]

# sorted - return new sorted list (doesn't modify original)
original = [3, 1, 4, 1, 5]
sorted_list = sorted(original)
print(original)     # [3, 1, 4, 1, 5] (unchanged)
print(sorted_list)  # [1, 1, 3, 4, 5]

# reverse - reverse in place
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]

# count - count occurrences
numbers = [1, 2, 2, 3, 2, 4]
print(numbers.count(2))  # 3

# index - find first index
print(numbers.index(3))  # 3
# print(numbers.index(99))  # ValueError if not found

# ============================================================================
# SECTION 5: Iterating Over Lists
# ============================================================================

fruits = ["apple", "banana", "cherry"]

# Basic iteration
for fruit in fruits:
    print(fruit)

# With index using enumerate
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# With index using range
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Iterate over multiple lists with zip
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# ============================================================================
# SECTION 6: List Comprehensions (Preview)
# ============================================================================

# Traditional way
squares = []
for i in range(10):
    squares.append(i ** 2)
print(squares)

# List comprehension (more Pythonic)
squares = [i ** 2 for i in range(10)]
print(squares)

# With condition
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# ============================================================================
# SECTION 7: Nested Lists
# ============================================================================

# 2D list (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0])     # [1, 2, 3] (first row)
print(matrix[0][0])  # 1 (first element of first row)
print(matrix[1][2])  # 6

# Iterating over 2D list
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()  # New line after each row

# ============================================================================
# SECTION 8: Tuples
# ============================================================================

# Tuples are like lists but IMMUTABLE (cannot be changed)

# Creating tuples
coordinates = (10, 20)
person = ("Alice", 30, "NYC")
single = (42,)  # Note the comma for single-element tuple
empty_tuple = ()

# Accessing elements (same as lists)
print(coordinates[0])  # 10
print(person[-1])      # NYC

# Unpacking tuples
x, y = coordinates
print(f"x: {x}, y: {y}")

name, age, city = person
print(f"{name}, {age}, {city}")

# Tuples are immutable
# coordinates[0] = 15  # TypeError!

# But you can create new tuples
new_coords = (15, 20)

# Tuple operations
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)

# Tuple methods (only 2!)
numbers = (1, 2, 2, 3, 2, 4)
print(numbers.count(2))  # 3
print(numbers.index(3))  # 3

# ============================================================================
# SECTION 9: When to Use Lists vs Tuples
# ============================================================================

# Use LISTS when:
# - Data will change
# - You need to add/remove elements
# - Order matters and you need to modify it

# Use TUPLES when:
# - Data should never change (coordinates, RGB colors, etc.)
# - You want to prevent accidental modification
# - Slightly faster than lists
# - Can be used as dictionary keys (lists cannot)

# Examples:
rgb_color = (255, 128, 0)  # Tuple - colors don't change
shopping_list = ["milk", "eggs", "bread"]  # List - will modify

# ============================================================================
# SECTION 10: Common Patterns
# ============================================================================

# Finding max/min
numbers = [3, 7, 2, 9, 1]
print(max(numbers))  # 9
print(min(numbers))  # 1

# Sum
print(sum(numbers))  # 22

# Check if list is empty
my_list = []
if not my_list:  # Empty lists are falsy
    print("List is empty")

# Copy a list (important!)
original = [1, 2, 3]
# Wrong way:
reference = original
reference.append(4)
print(original)  # [1, 2, 3, 4] - original was modified!

# Right ways:
original = [1, 2, 3]
copy1 = original.copy()
copy2 = original[:]
copy3 = list(original)

copy1.append(4)
print(original)  # [1, 2, 3] - unchanged
print(copy1)     # [1, 2, 3, 4]

# Converting between types
tuple_data = (1, 2, 3)
list_data = list(tuple_data)  # Tuple to list
list_data.append(4)
new_tuple = tuple(list_data)  # List to tuple
print(new_tuple)  # (1, 2, 3, 4)

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: List operations
# TODO: Create a list of your 5 favorite movies
# Add a new movie, remove one, and print the final list sorted alphabetically


# Exercise 2: Statistics
# TODO: Given numbers = [23, 45, 12, 67, 34, 89, 23, 56]
# Find and print: length, sum, average, max, min


# Exercise 3: Remove duplicates
# TODO: Given [1, 2, 2, 3, 4, 4, 5], create a new list with no duplicates
# Maintain the original order


# Exercise 4: Matrix operations
# TODO: Create a 3x3 matrix and print:
# - All elements
# - The diagonal elements (0,0), (1,1), (2,2)
# - The sum of all elements


# Exercise 5: Tuple swapping
# TODO: Given a = 10 and b = 20, swap their values using tuple unpacking
# Print before and after


# Exercise 6: List slicing
# TODO: Given numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# Use slicing to get: even indices, odd indices, reverse every other element


# Exercise 7: Flattening nested list
# TODO: Given [[1, 2], [3, 4], [5, 6]], create a flat list [1, 2, 3, 4, 5, 6]


# Exercise 8: Second largest
# TODO: Find the second largest number in [3, 7, 2, 9, 1, 8] without using sort


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Create and manipulate lists?")
print("✓ Use list methods (append, insert, remove, etc.)?")
print("✓ Slice lists effectively?")
print("✓ Work with nested lists?")
print("✓ Understand list vs tuple differences?")
print("✓ Unpack tuples?")
print("\nIf yes, move to lesson2-2-dicts-sets.py!")
