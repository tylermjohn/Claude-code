"""
LESSON 3.3: Common Libraries (1.5 hours)

Master essential Python standard library modules.
"""

# ============================================================================
# SECTION 1: datetime - Working with Dates and Times
# ============================================================================

from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print(now)  # 2024-01-15 14:30:45.123456

# Current date only
today = date.today()
print(today)  # 2024-01-15

# Create specific datetime
dt = datetime(2024, 12, 25, 10, 30, 0)
print(dt)  # 2024-12-25 10:30:00

# Access components
print(now.year)    # 2024
print(now.month)   # 1
print(now.day)     # 15
print(now.hour)    # 14
print(now.minute)  # 30

# Format datetime as string
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted)  # 2024-01-15 14:30:45

# Common format codes:
# %Y - year (4 digit), %m - month, %d - day
# %H - hour (24h), %M - minute, %S - second
# %A - weekday name, %B - month name

print(now.strftime("%A, %B %d, %Y"))  # Monday, January 15, 2024

# Parse string to datetime
date_string = "2024-12-25"
parsed = datetime.strptime(date_string, "%Y-%m-%d")
print(parsed)  # 2024-12-25 00:00:00

# Time deltas (differences)
future = now + timedelta(days=7)
print(future)  # 7 days from now

past = now - timedelta(hours=2, minutes=30)
print(past)  # 2.5 hours ago

# Difference between dates
date1 = datetime(2024, 1, 1)
date2 = datetime(2024, 12, 31)
diff = date2 - date1
print(diff.days)  # 365

# ============================================================================
# SECTION 2: re - Regular Expressions
# ============================================================================

import re

# Basic pattern matching
text = "My email is john@example.com"
pattern = r"[\w\.-]+@[\w\.-]+"  # Email pattern

# Search for pattern
match = re.search(pattern, text)
if match:
    print(match.group())  # john@example.com

# Find all matches
text = "Contact: john@example.com or jane@example.com"
emails = re.findall(pattern, text)
print(emails)  # ['john@example.com', 'jane@example.com']

# Replace pattern
text = "My phone is 123-456-7890"
cleaned = re.sub(r"[\-]", "", text)
print(cleaned)  # My phone is 1234567890

# Split by pattern
text = "apple,banana;cherry:date"
fruits = re.split(r"[,;:]", text)
print(fruits)  # ['apple', 'banana', 'cherry', 'date']

# Common patterns:
# \d - digit, \w - word character, \s - whitespace
# . - any character, * - 0 or more, + - 1 or more
# ? - 0 or 1, {n} - exactly n times
# ^ - start of string, $ - end of string
# [] - character class, | - or

# Validate email
def is_valid_email(email):
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return bool(re.match(pattern, email))

print(is_valid_email("test@example.com"))  # True
print(is_valid_email("invalid.email"))     # False

# Extract phone numbers
text = "Call me at 555-1234 or 555-5678"
phones = re.findall(r"\d{3}-\d{4}", text)
print(phones)  # ['555-1234', '555-5678']

# Groups - extract parts
text = "John Doe (john@example.com)"
pattern = r"(\w+\s\w+)\s\(([\w@\.]+)\)"
match = re.search(pattern, text)
if match:
    print(match.group(1))  # John Doe
    print(match.group(2))  # john@example.com

# ============================================================================
# SECTION 3: collections - Specialized Container Types
# ============================================================================

from collections import Counter, defaultdict, namedtuple, deque

# Counter - count hashable objects
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counter = Counter(words)
print(counter)  # Counter({'apple': 3, 'banana': 2, 'cherry': 1})
print(counter.most_common(2))  # [('apple', 3), ('banana', 2)]

# Count characters
text = "mississippi"
char_count = Counter(text)
print(char_count)  # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})

# defaultdict - dictionary with default value
dd = defaultdict(list)  # Default value is empty list
dd["fruits"].append("apple")
dd["fruits"].append("banana")
print(dd)  # {'fruits': ['apple', 'banana']}

# No KeyError for missing keys
dd = defaultdict(int)  # Default value is 0
dd["count"] += 1
print(dd["count"])  # 1
print(dd["missing"])  # 0 (no error)

# namedtuple - tuple with named fields
Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
print(p.x, p.y)  # 10 20
print(p[0], p[1])  # 10 20 (can still use indices)

Person = namedtuple("Person", ["name", "age", "city"])
person = Person("Alice", 30, "NYC")
print(person.name)  # Alice

# deque - double-ended queue (efficient for both ends)
from collections import deque
d = deque([1, 2, 3])
d.append(4)       # Add to right
d.appendleft(0)   # Add to left
print(d)  # deque([0, 1, 2, 3, 4])
d.pop()           # Remove from right
d.popleft()       # Remove from left
print(d)  # deque([1, 2, 3])

# ============================================================================
# SECTION 4: itertools - Iterator Functions
# ============================================================================

from itertools import count, cycle, repeat, chain, combinations, permutations

# count - infinite counter
# for i in count(10, 2):  # Start at 10, step by 2
#     if i > 20:
#         break
#     print(i)  # 10, 12, 14, 16, 18, 20

# cycle - infinite loop through sequence
# counter = 0
# for item in cycle(['A', 'B', 'C']):
#     if counter >= 7:
#         break
#     print(item)  # A, B, C, A, B, C, A
#     counter += 1

# repeat - repeat value n times
for item in repeat("Hello", 3):
    print(item)  # Hello, Hello, Hello

# chain - concatenate iterables
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list(chain(list1, list2))
print(combined)  # [1, 2, 3, 4, 5, 6]

# combinations - all combinations of length r
items = ['A', 'B', 'C']
combos = list(combinations(items, 2))
print(combos)  # [('A', 'B'), ('A', 'C'), ('B', 'C')]

# permutations - all permutations
perms = list(permutations(['A', 'B', 'C'], 2))
print(perms)  # [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]

# ============================================================================
# SECTION 5: random - Generate Random Numbers
# ============================================================================

import random

# Random float between 0 and 1
print(random.random())  # 0.7234...

# Random integer in range
print(random.randint(1, 10))  # Random number 1-10 (inclusive)

# Random choice from sequence
colors = ['red', 'blue', 'green', 'yellow']
print(random.choice(colors))

# Random sample (multiple choices without replacement)
numbers = list(range(1, 50))
lottery = random.sample(numbers, 6)
print(lottery)  # 6 random unique numbers

# Shuffle list in place
deck = list(range(1, 53))
random.shuffle(deck)
print(deck[:5])  # First 5 cards

# Random float in range
print(random.uniform(10, 20))  # Random float between 10 and 20

# Seed for reproducibility
random.seed(42)
print(random.random())  # Same number each time with same seed

# ============================================================================
# SECTION 6: math - Mathematical Functions
# ============================================================================

import math

# Constants
print(math.pi)  # 3.14159...
print(math.e)   # 2.71828...

# Rounding
print(math.ceil(4.3))   # 5 (round up)
print(math.floor(4.8))  # 4 (round down)

# Power and logarithm
print(math.sqrt(16))    # 4.0
print(math.pow(2, 3))   # 8.0
print(math.log(10))     # Natural log
print(math.log10(100))  # 2.0

# Trigonometry (radians)
print(math.sin(math.pi / 2))  # 1.0
print(math.cos(0))            # 1.0
print(math.tan(math.pi / 4))  # 1.0

# Degrees to radians
angle_degrees = 90
angle_radians = math.radians(angle_degrees)
print(angle_radians)  # 1.5707...

# Factorial
print(math.factorial(5))  # 120

# GCD (Greatest Common Divisor)
print(math.gcd(48, 18))  # 6

# ============================================================================
# SECTION 7: os and pathlib - File System Operations
# ============================================================================

import os
from pathlib import Path

# Get current directory
print(os.getcwd())

# List files
files = os.listdir(".")
print(files[:5])  # First 5 files

# Check if path exists
print(os.path.exists("sample.txt"))

# Join paths (cross-platform)
path = os.path.join("folder", "subfolder", "file.txt")
print(path)

# pathlib - modern way (Python 3.4+)
p = Path(".")
print(p.absolute())

# Iterate over files
for file in p.glob("*.py"):
    print(file.name)

# Read file content
# content = Path("sample.txt").read_text()

# Write file content
# Path("output.txt").write_text("Hello, World!")

# ============================================================================
# SECTION 8: sys - System-specific Parameters
# ============================================================================

import sys

# Python version
print(sys.version)

# Command line arguments
print(sys.argv)  # List of command line arguments

# Exit program
# sys.exit()  # Exit with code 0
# sys.exit(1)  # Exit with error code

# Standard streams
# sys.stdin - standard input
# sys.stdout - standard output
# sys.stderr - standard error

# ============================================================================
# SECTION 9: time - Time Access and Conversions
# ============================================================================

import time

# Current time (seconds since epoch)
timestamp = time.time()
print(timestamp)  # 1705334445.123

# Sleep (pause execution)
print("Waiting...")
time.sleep(1)  # Sleep for 1 second
print("Done!")

# Measure execution time
start = time.time()
# Some operation
sum([i**2 for i in range(100000)])
end = time.time()
print(f"Took {end - start:.4f} seconds")

# ============================================================================
# SECTION 10: argparse - Command Line Arguments
# ============================================================================

import argparse

# Create parser
parser = argparse.ArgumentParser(description="Process some integers")

# Add arguments
parser.add_argument("numbers", type=int, nargs="+", help="Numbers to sum")
parser.add_argument("--multiply", action="store_true", help="Multiply instead")
parser.add_argument("--verbose", "-v", action="store_true", help="Verbose output")

# Parse (comment out in interactive mode)
# args = parser.parse_args()
# result = 1 if args.multiply else 0
# for num in args.numbers:
#     if args.multiply:
#         result *= num
#     else:
#         result += num
# print(result)

# Usage: python script.py 1 2 3 4 --multiply

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Date calculator
# TODO: Write a function days_until(year, month, day) that
# returns how many days until that date


# Exercise 2: Email validator
# TODO: Write a function is_valid_email(email) using regex
# that validates email format


# Exercise 3: Word frequency
# TODO: Given a text, find the 5 most common words using Counter


# Exercise 4: Random password generator
# TODO: Write a function generate_password(length) that creates
# a random password with letters, numbers, and symbols


# Exercise 5: Date range
# TODO: Write a function date_range(start_date, end_date) that
# generates all dates between two dates


# Exercise 6: File timestamp
# TODO: Write a function that takes a filename and returns when
# it was last modified (use os.path.getmtime and datetime)


# Exercise 7: Combinations
# TODO: Given a list ['A', 'B', 'C', 'D'], print all 3-element combinations


# Exercise 8: Execution timer decorator
# TODO: Create a decorator that prints how long a function takes to execute


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Work with dates and times using datetime?")
print("✓ Use regular expressions for pattern matching?")
print("✓ Use Counter, defaultdict, and namedtuple?")
print("✓ Generate random numbers and make choices?")
print("✓ Use math functions?")
print("✓ Work with file paths using os and pathlib?")
print("\nIf yes, move to lesson3-4-capstone.py!")
