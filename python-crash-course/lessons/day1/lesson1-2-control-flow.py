"""
LESSON 1.2: Control Flow - If/Else and Loops (1.5 hours)

Learn how to make decisions and repeat actions in Python.
"""

# ============================================================================
# SECTION 1: If/Elif/Else Statements
# ============================================================================

# Basic if statement (note the colon and indentation!)
age = 20
if age >= 18:
    print("You are an adult")
    print("You can vote")  # Indentation matters!

# If/else
temperature = 15
if temperature > 25:
    print("It's hot!")
else:
    print("It's not hot")

# If/elif/else - multiple conditions
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}, Grade: {grade}")

# Nested if statements
is_weekend = True
is_sunny = True

if is_weekend:
    if is_sunny:
        print("Go to the beach!")
    else:
        print("Watch movies at home")
else:
    print("Go to work")

# ============================================================================
# SECTION 2: Comparison and Logical Operators
# ============================================================================

# Comparison operators
x = 10
print(x == 10)    # True (equal to)
print(x != 5)     # True (not equal to)
print(x > 5)      # True (greater than)
print(x < 15)     # True (less than)
print(x >= 10)    # True (greater than or equal)
print(x <= 10)    # True (less than or equal)

# Logical operators - and, or, not
age = 25
has_license = True

if age >= 18 and has_license:
    print("Can drive")

if age < 18 or not has_license:
    print("Cannot drive")

# Chaining comparisons (Python-specific feature)
x = 5
if 1 < x < 10:  # Same as: x > 1 and x < 10
    print("x is between 1 and 10")

# Truthiness - what counts as True/False
# False values: False, None, 0, 0.0, "", [], {}, ()
# Everything else is True

if "":  # Empty string is False
    print("Won't print")

if "hello":  # Non-empty string is True
    print("Will print")

if 0:  # Zero is False
    print("Won't print")

if 42:  # Non-zero number is True
    print("Will print")

# Using truthiness in conditions
name = ""
if name:
    print(f"Hello, {name}")
else:
    print("No name provided")

# ============================================================================
# SECTION 3: While Loops
# ============================================================================

# Basic while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # Same as: count = count + 1

# While loop with break
i = 0
while True:  # Infinite loop
    print(i)
    i += 1
    if i >= 5:
        break  # Exit the loop

# While loop with continue
i = 0
while i < 10:
    i += 1
    if i % 2 == 0:  # If even
        continue  # Skip to next iteration
    print(i)  # Only prints odd numbers

# While/else - else runs if loop completes without break
i = 0
while i < 3:
    print(i)
    i += 1
else:
    print("Loop completed normally")

# ============================================================================
# SECTION 4: For Loops
# ============================================================================

# For loop with range
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# range(start, stop, step)
for i in range(1, 10, 2):  # 1, 3, 5, 7, 9
    print(i)

# Iterating over a string
for letter in "Python":
    print(letter)

# Iterating over a list
colors = ["red", "green", "blue"]
for color in colors:
    print(color)

# enumerate - get index and value
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# For loop with break
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0-4

# For loop with continue
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4

# For/else - else runs if loop completes without break
for i in range(3):
    print(i)
else:
    print("Loop completed")

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")

# ============================================================================
# SECTION 5: Pattern Matching (Python 3.10+)
# ============================================================================

# match/case statement (newer Python versions)
def http_status(status):
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Internal Server Error"
        case _:  # Default case
            return "Unknown"

print(http_status(200))  # OK
print(http_status(999))  # Unknown

# ============================================================================
# SECTION 6: Common Patterns
# ============================================================================

# Finding max/min manually
numbers = [4, 2, 9, 1, 7]
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(f"Max: {max_num}")

# Counting
text = "hello world"
count = 0
for char in text:
    if char == 'l':
        count += 1
print(f"Letter 'l' appears {count} times")

# Summing
total = 0
for i in range(1, 101):
    total += i
print(f"Sum of 1-100: {total}")

# Flag pattern
found = False
numbers = [1, 3, 5, 7, 9]
target = 5

for num in numbers:
    if num == target:
        found = True
        break

if found:
    print(f"Found {target}")
else:
    print(f"{target} not found")

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: FizzBuzz
# TODO: Print numbers 1-30. For multiples of 3 print "Fizz",
# for multiples of 5 print "Buzz", for multiples of both print "FizzBuzz"


# Exercise 2: Find all even numbers
# TODO: Given the list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Print only the even numbers


# Exercise 3: Password checker
# TODO: Create a variable password = "secret123"
# Check if it's at least 8 characters AND contains a number
# Print "Valid" or "Invalid"


# Exercise 4: Multiplication table
# TODO: Print the multiplication table for 7 (7x1 through 7x10)


# Exercise 5: Count vowels
# TODO: Count how many vowels (a, e, i, o, u) are in the string
# "Python programming is awesome"


# Exercise 6: Prime number checker
# TODO: Check if the number 17 is prime
# (A prime number is only divisible by 1 and itself)


# Exercise 7: Pattern printing
# TODO: Print this pattern:
# *
# **
# ***
# ****
# *****


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Write if/elif/else statements?")
print("✓ Use comparison and logical operators?")
print("✓ Write while loops with break/continue?")
print("✓ Write for loops over ranges and sequences?")
print("✓ Use enumerate to get index and value?")
print("\nIf yes, move to lesson1-3-functions.py!")
