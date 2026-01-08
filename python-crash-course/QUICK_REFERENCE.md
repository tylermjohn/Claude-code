# Python Quick Reference

A cheat sheet for common Python patterns and syntax.

## Variables and Data Types

```python
# Variables
name = "Alice"
age = 30
height = 5.7
is_active = True

# Type conversion
x = int("42")      # String to int
y = str(100)       # Int to string
z = float("3.14")  # String to float
```

## Strings

```python
# Common operations
text = "Hello, World"
text.upper()           # "HELLO, WORLD"
text.lower()           # "hello, world"
text.strip()           # Remove whitespace
text.replace("H", "J") # "Jello, World"
text.split(",")        # ["Hello", " World"]

# Formatting
name = "Alice"
age = 30
f"{name} is {age}"                # f-strings (preferred)
"{} is {}".format(name, age)      # .format()
"%s is %d" % (name, age)          # % formatting

# Slicing
text[0]      # First character
text[-1]     # Last character
text[0:5]    # Slice (indices 0-4)
text[::-1]   # Reverse
```

## Lists

```python
# Creation
fruits = ["apple", "banana", "cherry"]
numbers = list(range(10))

# Common operations
fruits.append("date")       # Add to end
fruits.insert(1, "apricot") # Insert at position
fruits.remove("banana")     # Remove first occurrence
fruits.pop()                # Remove and return last
fruits.pop(0)               # Remove and return at index

# Slicing
numbers[2:5]    # Elements 2-4
numbers[:3]     # First 3
numbers[-3:]    # Last 3
numbers[::2]    # Every other

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(10) if x % 2 == 0]
```

## Dictionaries

```python
# Creation
person = {"name": "Alice", "age": 30}

# Access
person["name"]              # KeyError if missing
person.get("city", "NYC")   # Default value

# Modify
person["age"] = 31          # Update
person["email"] = "a@ex.com"  # Add
del person["age"]           # Delete

# Iteration
for key in person:
    print(key)

for value in person.values():
    print(value)

for key, value in person.items():
    print(key, value)

# Dictionary comprehension
squares = {x: x**2 for x in range(5)}
```

## Sets

```python
# Creation
fruits = {"apple", "banana", "cherry"}
numbers = set([1, 2, 2, 3])  # {1, 2, 3}

# Operations
a = {1, 2, 3}
b = {3, 4, 5}
a | b        # Union: {1, 2, 3, 4, 5}
a & b        # Intersection: {3}
a - b        # Difference: {1, 2}
a ^ b        # Symmetric difference: {1, 2, 4, 5}
```

## Control Flow

```python
# If/elif/else
if x > 10:
    print("Greater")
elif x > 5:
    print("Medium")
else:
    print("Small")

# For loop
for i in range(5):
    print(i)

for item in items:
    print(item)

for i, item in enumerate(items):
    print(i, item)

# While loop
while x < 10:
    x += 1

# Break and continue
for i in range(10):
    if i == 5:
        break      # Exit loop
    if i == 3:
        continue   # Skip to next iteration
```

## Functions

```python
# Basic function
def greet(name):
    return f"Hello, {name}"

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}"

# Variable arguments
def sum_all(*numbers):
    return sum(numbers)

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Lambda
square = lambda x: x**2
add = lambda a, b: a + b
```

## Classes

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

    def __str__(self):
        return f"Dog({self.name}, {self.age})"

# Create instance
my_dog = Dog("Buddy", 3)
print(my_dog.bark())

# Inheritance
class GoldenRetriever(Dog):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.breed = "Golden Retriever"
```

## File I/O

```python
# Read file
with open("file.txt", "r") as f:
    content = f.read()           # Read all
    lines = f.readlines()        # Read lines

# Write file
with open("file.txt", "w") as f:
    f.write("Hello\n")

# Append to file
with open("file.txt", "a") as f:
    f.write("More text\n")

# JSON
import json
data = {"name": "Alice", "age": 30}
json_str = json.dumps(data)      # Dict to JSON string
data = json.loads(json_str)      # JSON string to dict

with open("data.json", "w") as f:
    json.dump(data, f)           # Write to file

with open("data.json", "r") as f:
    data = json.load(f)          # Read from file

# CSV
import csv
with open("data.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age"])
    writer.writerow(["Alice", 30])

with open("data.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

## Exception Handling

```python
# Basic try/except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# Multiple exceptions
try:
    # code
    pass
except (ValueError, TypeError):
    print("Error occurred")

# Catch all
try:
    # code
    pass
except Exception as e:
    print(f"Error: {e}")

# Finally
try:
    # code
    pass
except Exception:
    # handle error
    pass
finally:
    # always runs
    pass

# Raise exception
raise ValueError("Invalid input")
```

## Common Modules

```python
# datetime
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)
formatted = now.strftime("%Y-%m-%d")

# random
import random
random.randint(1, 10)        # Random int 1-10
random.choice([1, 2, 3])     # Random choice
random.shuffle(my_list)      # Shuffle in place

# os
import os
os.getcwd()                  # Current directory
os.listdir(".")              # List files
os.path.exists("file.txt")   # Check if exists
os.path.join("dir", "file")  # Join paths

# re (regex)
import re
re.search(r"\d+", "abc123")       # Search for pattern
re.findall(r"\d+", "1 2 3")       # Find all matches
re.sub(r"\d", "X", "a1b2")        # Replace pattern

# collections
from collections import Counter, defaultdict
counter = Counter([1, 1, 2, 3])   # Count items
dd = defaultdict(list)            # Dict with default
```

## Common Patterns

```python
# Swap variables
a, b = b, a

# Multiple assignment
x, y, z = 1, 2, 3

# Conditional expression
result = "even" if x % 2 == 0 else "odd"

# Check if list is empty
if not my_list:
    print("Empty")

# Enumerate
for i, item in enumerate(items):
    print(i, item)

# Zip
for name, age in zip(names, ages):
    print(name, age)

# Map/filter
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Any/all
any([False, True, False])   # True
all([True, True, True])     # True

# Sorting
sorted(items)                          # New sorted list
sorted(items, reverse=True)            # Descending
sorted(items, key=len)                 # By length
sorted(items, key=lambda x: x[1])      # By second element
```

## Tips

1. **Use f-strings** for formatting: `f"Hello, {name}"`
2. **List comprehensions** over loops when possible
3. **`with` statement** for files: automatically closes
4. **`enumerate()`** when you need index and value
5. **`zip()`** to iterate multiple lists together
6. **`.get()`** for dictionaries with default values
7. **`try/except`** for error handling
8. **Type hints** for documentation: `def func(x: int) -> str:`
9. **Docstrings** for functions: `"""Description"""`
10. **PEP 8** for style: snake_case, 4 spaces, etc.
