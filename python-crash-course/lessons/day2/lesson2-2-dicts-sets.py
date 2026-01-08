"""
LESSON 2.2: Dictionaries and Sets (1.5 hours)

Master Python's key-value mapping and unique collection types.
"""

# ============================================================================
# SECTION 1: Dictionary Basics
# ============================================================================

# Dictionaries store key-value pairs
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}

print(person)  # {'name': 'Alice', 'age': 30, 'city': 'NYC'}

# Accessing values
print(person["name"])  # Alice
print(person["age"])   # 30

# KeyError if key doesn't exist
# print(person["country"])  # KeyError!

# Safe access with get()
print(person.get("country"))  # None (no error)
print(person.get("country", "Unknown"))  # "Unknown" (default value)

# ============================================================================
# SECTION 2: Modifying Dictionaries
# ============================================================================

# Dictionaries are mutable
person = {"name": "Alice", "age": 30}

# Add new key-value pair
person["email"] = "alice@example.com"
print(person)

# Modify existing value
person["age"] = 31
print(person)

# Remove items
del person["email"]
print(person)

# pop - remove and return value
age = person.pop("age")
print(f"Removed age: {age}")
print(person)

# popitem - remove and return last item (Python 3.7+)
person = {"name": "Alice", "age": 30, "city": "NYC"}
item = person.popitem()
print(f"Removed: {item}")

# clear - remove all items
# person.clear()

# ============================================================================
# SECTION 3: Dictionary Methods
# ============================================================================

person = {"name": "Alice", "age": 30, "city": "NYC"}

# keys() - get all keys
print(person.keys())    # dict_keys(['name', 'age', 'city'])
print(list(person.keys()))  # ['name', 'age', 'city']

# values() - get all values
print(person.values())  # dict_values(['Alice', 30, 'NYC'])
print(list(person.values()))  # ['Alice', 30, 'NYC']

# items() - get key-value pairs
print(person.items())
# dict_items([('name', 'Alice'), ('age', 30), ('city', 'NYC')])

# update - merge dictionaries
person.update({"email": "alice@example.com", "age": 31})
print(person)  # age updated, email added

# setdefault - get value, set if doesn't exist
value = person.setdefault("country", "USA")
print(value)   # USA
print(person)  # country added with default value

# ============================================================================
# SECTION 4: Iterating Over Dictionaries
# ============================================================================

person = {"name": "Alice", "age": 30, "city": "NYC"}

# Iterate over keys (default)
for key in person:
    print(key)

# Iterate over keys explicitly
for key in person.keys():
    print(key)

# Iterate over values
for value in person.values():
    print(value)

# Iterate over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")

# ============================================================================
# SECTION 5: Dictionary Comprehensions
# ============================================================================

# Create dictionary from lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = {k: v for k, v in zip(keys, values)}
print(dictionary)  # {'a': 1, 'b': 2, 'c': 3}

# Squares dictionary
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Transform existing dictionary
person = {"name": "alice", "city": "nyc"}
upper_person = {k: v.upper() for k, v in person.items()}
print(upper_person)  # {'name': 'ALICE', 'city': 'NYC'}

# ============================================================================
# SECTION 6: Nested Dictionaries
# ============================================================================

# Dictionary of dictionaries
users = {
    "user1": {"name": "Alice", "age": 30},
    "user2": {"name": "Bob", "age": 25},
    "user3": {"name": "Charlie", "age": 35}
}

print(users["user1"]["name"])  # Alice

# Iterate over nested dictionary
for user_id, user_info in users.items():
    print(f"{user_id}:")
    for key, value in user_info.items():
        print(f"  {key}: {value}")

# ============================================================================
# SECTION 7: Common Dictionary Patterns
# ============================================================================

# Counting with dictionaries
text = "hello world"
char_count = {}
for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1
print(char_count)

# Better way using get()
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
print(char_count)

# Grouping data
students = [
    {"name": "Alice", "grade": "A"},
    {"name": "Bob", "grade": "B"},
    {"name": "Charlie", "grade": "A"},
    {"name": "David", "grade": "B"}
]

by_grade = {}
for student in students:
    grade = student["grade"]
    if grade not in by_grade:
        by_grade[grade] = []
    by_grade[grade].append(student["name"])

print(by_grade)  # {'A': ['Alice', 'Charlie'], 'B': ['Bob', 'David']}

# Default dict pattern (preview of collections.defaultdict)
from collections import defaultdict

by_grade = defaultdict(list)
for student in students:
    by_grade[student["grade"]].append(student["name"])
print(dict(by_grade))

# ============================================================================
# SECTION 8: Sets
# ============================================================================

# Sets are unordered collections of unique elements
fruits = {"apple", "banana", "cherry"}
print(fruits)  # {'apple', 'banana', 'cherry'} (order may vary)

# Create from list (removes duplicates)
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_numbers = set(numbers)
print(unique_numbers)  # {1, 2, 3, 4}

# Empty set (not {} - that's an empty dict!)
empty_set = set()

# ============================================================================
# SECTION 9: Set Operations
# ============================================================================

# Add elements
fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)

# Adding duplicate does nothing (sets have unique elements)
fruits.add("apple")
print(fruits)  # Still just one 'apple'

# Remove elements
fruits.remove("banana")  # Raises KeyError if not found
# fruits.discard("grape")  # No error if not found

# Set operations
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Union - all elements from both sets
print(a | b)  # {1, 2, 3, 4, 5, 6, 7, 8}
print(a.union(b))  # Same

# Intersection - elements in both sets
print(a & b)  # {4, 5}
print(a.intersection(b))  # Same

# Difference - elements in a but not in b
print(a - b)  # {1, 2, 3}
print(a.difference(b))  # Same

# Symmetric difference - elements in either but not both
print(a ^ b)  # {1, 2, 3, 6, 7, 8}
print(a.symmetric_difference(b))  # Same

# Subset and superset
x = {1, 2, 3}
y = {1, 2, 3, 4, 5}
print(x.issubset(y))    # True (x is subset of y)
print(y.issuperset(x))  # True (y is superset of x)

# ============================================================================
# SECTION 10: Set Comprehensions
# ============================================================================

# Set comprehension
squares = {x**2 for x in range(10)}
print(squares)  # {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# With condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}

# ============================================================================
# SECTION 11: Frozensets
# ============================================================================

# Frozensets are immutable sets (can be dictionary keys)
frozen = frozenset([1, 2, 3])
print(frozen)

# Can't modify
# frozen.add(4)  # AttributeError

# Use case: dictionary key
graph = {
    frozenset([1, 2]): "edge1",
    frozenset([2, 3]): "edge2"
}
print(graph)

# ============================================================================
# SECTION 12: When to Use What
# ============================================================================

# Use DICTIONARY when:
# - You need key-value mapping
# - You need fast lookup by key
# - Keys are unique

# Use SET when:
# - You need unique elements
# - You need set operations (union, intersection, etc.)
# - Order doesn't matter

# Use LIST when:
# - Order matters
# - You need duplicates
# - You need indexing

# ============================================================================
# SECTION 13: Common Patterns
# ============================================================================

# Remove duplicates while preserving order
def remove_duplicates_ordered(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

print(remove_duplicates_ordered([1, 2, 2, 3, 1, 4]))  # [1, 2, 3, 4]

# Check for common elements
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = set(list1) & set(list2)
print(common)  # {3, 4}

# Frequency counter with dictionary
def count_frequency(items):
    freq = {}
    for item in items:
        freq[item] = freq.get(item, 0) + 1
    return freq

print(count_frequency([1, 2, 2, 3, 3, 3]))  # {1: 1, 2: 2, 3: 3}

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Create and manipulate dictionary
# TODO: Create a dictionary representing a book with title, author, year, pages
# Add a new key 'genre', update the year, and print all keys and values


# Exercise 2: Word frequency counter
# TODO: Count the frequency of each word in "the quick brown fox jumps over the lazy dog"
# Result should be a dictionary like {'the': 2, 'quick': 1, ...}


# Exercise 3: Merge dictionaries
# TODO: Given dict1 = {'a': 1, 'b': 2} and dict2 = {'b': 3, 'c': 4}
# Merge them where dict2 values override dict1 values for common keys


# Exercise 4: Nested dictionary
# TODO: Create a dictionary of 3 students, each with name, age, and grades (list)
# Calculate and print the average grade for each student


# Exercise 5: Set operations
# TODO: Given setA = {1,2,3,4,5} and setB = {4,5,6,7,8}
# Find: union, intersection, elements only in A, elements only in B


# Exercise 6: Remove duplicates from two lists
# TODO: Given list1 = [1,2,3,4] and list2 = [3,4,5,6]
# Create a list of all unique elements from both lists


# Exercise 7: Character set
# TODO: Given two strings "hello" and "world"
# Find: common letters, letters only in first, letters only in second


# Exercise 8: Dictionary from lists
# TODO: Given names = ['Alice', 'Bob', 'Charlie'] and scores = [85, 90, 78]
# Create a dictionary mapping names to scores


# Exercise 9: Invert dictionary
# TODO: Given {'a': 1, 'b': 2, 'c': 1}
# Create inverted dict: {1: ['a', 'c'], 2: ['b']}


# Exercise 10: Most common element
# TODO: Find the most common element in [1, 3, 2, 1, 4, 1, 5, 2, 1]
# Hint: Use a dictionary to count, then find max


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Create and manipulate dictionaries?")
print("✓ Use dictionary methods (get, keys, values, items)?")
print("✓ Iterate over dictionaries?")
print("✓ Work with nested dictionaries?")
print("✓ Understand and use sets?")
print("✓ Perform set operations (union, intersection, etc.)?")
print("\nIf yes, move to lesson2-3-comprehensions.py!")
