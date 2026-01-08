"""
LESSON 3.1: Files and Error Handling (1.5 hours)

Learn to read/write files and handle errors gracefully.
"""

# ============================================================================
# SECTION 1: Reading Files
# ============================================================================

# Create a sample file first (run this once)
with open("sample.txt", "w") as f:
    f.write("Hello, World!\n")
    f.write("Python is awesome!\n")
    f.write("File handling is easy.\n")

# Read entire file
with open("sample.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("sample.txt", "r") as f:
    for line in f:
        print(line.strip())  # strip() removes trailing newline

# Read all lines into a list
with open("sample.txt", "r") as f:
    lines = f.readlines()
    print(lines)  # Each line includes \n

# Read specific number of characters
with open("sample.txt", "r") as f:
    first_10 = f.read(10)
    print(first_10)

# ============================================================================
# SECTION 2: Writing Files
# ============================================================================

# Write mode - creates new file or overwrites existing
with open("output.txt", "w") as f:
    f.write("This is line 1\n")
    f.write("This is line 2\n")

# Append mode - adds to existing file
with open("output.txt", "a") as f:
    f.write("This is line 3\n")

# Write multiple lines
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as f:
    f.writelines(lines)

# ============================================================================
# SECTION 3: File Context Manager (with statement)
# ============================================================================

# Without context manager (old way - not recommended)
f = open("sample.txt", "r")
content = f.read()
f.close()  # Must remember to close!

# With context manager (recommended - auto-closes file)
with open("sample.txt", "r") as f:
    content = f.read()
# File is automatically closed here

# Why use 'with':
# - Automatically closes file even if error occurs
# - Cleaner, more readable code
# - Prevents resource leaks

# ============================================================================
# SECTION 4: File Paths
# ============================================================================

import os

# Absolute path
# file_path = "/home/user/document.txt"

# Relative path
# file_path = "documents/file.txt"

# Current working directory
print(os.getcwd())

# Check if file exists
if os.path.exists("sample.txt"):
    print("File exists!")

# Check if path is file or directory
print(os.path.isfile("sample.txt"))  # True
print(os.path.isdir("sample.txt"))   # False

# Get file size
size = os.path.getsize("sample.txt")
print(f"File size: {size} bytes")

# Join paths (works on all OS)
path = os.path.join("folder", "subfolder", "file.txt")
print(path)

# Split path into directory and filename
directory, filename = os.path.split("/path/to/file.txt")
print(f"Dir: {directory}, File: {filename}")

# Get filename and extension
name, ext = os.path.splitext("document.txt")
print(f"Name: {name}, Extension: {ext}")

# ============================================================================
# SECTION 5: Working with Directories
# ============================================================================

# Create directory
os.makedirs("test_folder", exist_ok=True)  # exist_ok=True won't error if exists

# List files in directory
files = os.listdir(".")
print(files)

# Walk through directory tree
for root, dirs, files in os.walk("."):
    print(f"Directory: {root}")
    for file in files:
        print(f"  File: {file}")

# Remove directory (must be empty)
# os.rmdir("test_folder")

# Remove file
# os.remove("file.txt")

# ============================================================================
# SECTION 6: Exception Handling Basics
# ============================================================================

# Without error handling - program crashes
# x = 10 / 0  # ZeroDivisionError!

# With try/except
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Multiple except blocks
try:
    num = int("not a number")
except ValueError:
    print("Invalid number format")
except ZeroDivisionError:
    print("Cannot divide by zero")

# Catch multiple exceptions
try:
    # Some code
    pass
except (ValueError, TypeError):
    print("Value or Type error occurred")

# Catch all exceptions (use sparingly!)
try:
    # Some code
    pass
except Exception as e:
    print(f"An error occurred: {e}")

# ============================================================================
# SECTION 7: Exception Handling with Files
# ============================================================================

# Safe file reading
try:
    with open("nonexistent.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")

# More comprehensive error handling
def read_file_safely(filename):
    try:
        with open(filename, "r") as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: {filename} not found")
        return None
    except PermissionError:
        print(f"Error: No permission to read {filename}")
        return None
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

content = read_file_safely("sample.txt")

# ============================================================================
# SECTION 8: else and finally Clauses
# ============================================================================

# else - runs if no exception occurred
try:
    num = int("42")
except ValueError:
    print("Invalid number")
else:
    print("Conversion successful!")
    print(f"Number: {num}")

# finally - always runs (cleanup code)
try:
    f = open("sample.txt", "r")
    content = f.read()
except FileNotFoundError:
    print("File not found")
finally:
    # This always runs, even if error occurred
    # f.close()  # Would close file if opened
    print("Cleanup complete")

# ============================================================================
# SECTION 9: Raising Exceptions
# ============================================================================

# Raise built-in exception
def divide(a, b):
    if b == 0:
        raise ValueError("Divisor cannot be zero")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(f"Error: {e}")

# Re-raise exception
def process_data(data):
    try:
        # Some processing
        result = int(data)
    except ValueError:
        print("Logging error...")
        raise  # Re-raise the same exception

try:
    process_data("invalid")
except ValueError:
    print("Caught in outer handler")

# ============================================================================
# SECTION 10: Custom Exceptions
# ============================================================================

# Define custom exception
class InvalidAgeError(Exception):
    """Raised when age is invalid"""
    pass

def set_age(age):
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")
    if age > 150:
        raise InvalidAgeError("Age seems unrealistic")
    return age

try:
    user_age = set_age(-5)
except InvalidAgeError as e:
    print(f"Error: {e}")

# ============================================================================
# SECTION 11: Working with CSV Files
# ============================================================================

import csv

# Write CSV
data = [
    ["Name", "Age", "City"],
    ["Alice", "30", "NYC"],
    ["Bob", "25", "LA"],
    ["Charlie", "35", "Chicago"]
]

with open("people.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# Read CSV
with open("people.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Read CSV with DictReader (better for named columns)
with open("people.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']} is {row['Age']} years old")

# Write CSV with DictWriter
data = [
    {"name": "Alice", "age": 30, "city": "NYC"},
    {"name": "Bob", "age": 25, "city": "LA"}
]

with open("people2.csv", "w", newline="") as f:
    fieldnames = ["name", "age", "city"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(data)

# ============================================================================
# SECTION 12: Working with JSON
# ============================================================================

import json

# Python dict to JSON string
person = {"name": "Alice", "age": 30, "city": "NYC"}
json_string = json.dumps(person)
print(json_string)  # {"name": "Alice", "age": 30, "city": "NYC"}

# JSON string to Python dict
json_string = '{"name": "Bob", "age": 25}'
person = json.loads(json_string)
print(person)  # {'name': 'Bob', 'age': 25}

# Write JSON to file
data = {
    "users": [
        {"name": "Alice", "age": 30},
        {"name": "Bob", "age": 25}
    ]
}

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)  # indent for pretty printing

# Read JSON from file
with open("data.json", "r") as f:
    data = json.load(f)
    print(data)

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Word counter
# TODO: Read a text file and count how many times each word appears
# Print the top 10 most common words


# Exercise 2: File copy
# TODO: Write a function copy_file(source, destination) that copies
# a file with proper error handling


# Exercise 3: CSV analysis
# TODO: Create a CSV file with student names and grades
# Read it and calculate the average grade


# Exercise 4: JSON config
# TODO: Create a function that reads a JSON config file with defaults
# If file doesn't exist, return default config dict


# Exercise 5: Safe division
# TODO: Write a function safe_divide(a, b) that:
# - Returns result if successful
# - Returns None and prints error if division by zero
# - Raises TypeError if inputs aren't numbers


# Exercise 6: File statistics
# TODO: Write a function that takes a filename and returns dict with:
# - line_count: number of lines
# - word_count: number of words
# - char_count: number of characters


# Exercise 7: Merge CSV files
# TODO: Write a function that merges multiple CSV files with same columns
# Handle FileNotFoundError for missing files


# Exercise 8: Log parser
# TODO: Read a log file with format "TIMESTAMP LEVEL MESSAGE"
# Count how many ERROR, WARNING, and INFO messages exist


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Read and write files?")
print("✓ Use context managers (with statement)?")
print("✓ Handle exceptions with try/except?")
print("✓ Work with file paths using os module?")
print("✓ Read and write CSV files?")
print("✓ Work with JSON data?")
print("\nIf yes, move to lesson3-2-oop.py!")
