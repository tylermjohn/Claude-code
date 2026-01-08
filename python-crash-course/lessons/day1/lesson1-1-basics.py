"""
LESSON 1.1: Python Basics - Variables and Data Types (1.5 hours)

Welcome to Python! This lesson covers the fundamental building blocks.
Read each section, run the code, and complete the exercises.
"""

# ============================================================================
# SECTION 1: Variables and Basic Data Types
# ============================================================================

# Variables - no declaration needed, dynamically typed
name = "Alice"
age = 28
height = 5.7
is_employed = True

print(name)        # Alice
print(age)         # 28
print(type(age))   # <class 'int'>

# Python is dynamically typed - variables can change types
x = 5
print(type(x))  # <class 'int'>
x = "now I'm a string"
print(type(x))  # <class 'str'>

# ============================================================================
# SECTION 2: Numbers
# ============================================================================

# Integers
a = 10
b = 3

print(a + b)   # 13 - addition
print(a - b)   # 7  - subtraction
print(a * b)   # 30 - multiplication
print(a / b)   # 3.333... - division (always returns float)
print(a // b)  # 3 - floor division (integer result)
print(a % b)   # 1 - modulo (remainder)
print(a ** b)  # 1000 - exponentiation

# Floats (decimals)
pi = 3.14159
radius = 2.5
area = pi * (radius ** 2)
print(f"Area: {area}")  # f-strings for formatting (Python 3.6+)

# ============================================================================
# SECTION 3: Strings
# ============================================================================

# String creation - single or double quotes work the same
first_name = 'John'
last_name = "Doe"
multi_line = """This is a
multi-line string"""

# String concatenation
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# String methods (strings are immutable - methods return new strings)
text = "  Hello, World!  "
print(text.upper())       # "  HELLO, WORLD!  "
print(text.lower())       # "  hello, world!  "
print(text.strip())       # "Hello, World!" (removes whitespace)
print(text.replace("World", "Python"))  # "  Hello, Python!  "

# String indexing and slicing
message = "Python"
print(message[0])      # 'P' - first character (0-indexed)
print(message[-1])     # 'n' - last character
print(message[0:3])    # 'Pyt' - slice from 0 to 3 (exclusive)
print(message[:3])     # 'Pyt' - same as above
print(message[3:])     # 'hon' - from index 3 to end
print(message[-3:])    # 'hon' - last 3 characters

# String formatting
name = "Alice"
age = 30
# f-strings (modern, preferred)
print(f"{name} is {age} years old")
# .format() method (older but still common)
print("{} is {} years old".format(name, age))
# % formatting (legacy, but you'll see it)
print("%s is %d years old" % (name, age))

# ============================================================================
# SECTION 4: Booleans and None
# ============================================================================

# Booleans
is_raining = True
is_sunny = False

# Comparison operators return booleans
print(5 > 3)      # True
print(5 < 3)      # False
print(5 == 5)     # True (equality)
print(5 != 3)     # True (not equal)
print(5 >= 5)     # True

# Logical operators
print(True and False)  # False
print(True or False)   # True
print(not True)        # False

# None - represents absence of value
result = None
print(result)       # None
print(type(result)) # <class 'NoneType'>

# ============================================================================
# SECTION 5: Type Conversion
# ============================================================================

# Convert between types
x = "42"
y = int(x)        # Convert string to int
print(y + 8)      # 50

z = str(100)      # Convert int to string
print(z + "!")    # "100!"

# Be careful with conversions
try:
    bad = int("hello")  # This will raise an error
except ValueError as e:
    print(f"Error: {e}")

# ============================================================================
# SECTION 6: Input/Output
# ============================================================================

# Print function
print("Hello")                           # Simple print
print("Hello", "World")                  # Multiple arguments
print("Hello", "World", sep="-")         # Custom separator
print("No newline", end=" ")             # Change end character
print("continues here")

# Input from user (always returns a string)
# Uncomment to test:
# user_name = input("What's your name? ")
# print(f"Hello, {user_name}!")
# user_age = int(input("How old are you? "))  # Convert to int
# print(f"You are {user_age} years old")

# ============================================================================
# EXERCISES - Complete these to test your understanding
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Create variables for your info
# TODO: Create variables for your name, age, and favorite programming language
# Then print them in a sentence like: "My name is X, I'm Y years old, and I love Z"


# Exercise 2: Calculate area of a rectangle
# TODO: Create variables for width (10) and height (5)
# Calculate and print the area and perimeter


# Exercise 3: String manipulation
# TODO: Take the string "  Python Programming  "
# Remove whitespace, convert to uppercase, and replace "PROGRAMMING" with "ROCKS"


# Exercise 4: Temperature converter
# TODO: Create a variable celsius = 25
# Convert to Fahrenheit using: F = (C * 9/5) + 32
# Print both temperatures


# Exercise 5: Type checking
# TODO: Create a variable with your age
# Print its type, convert it to a string, and print the new type


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Create variables of different types?")
print("✓ Perform basic math operations?")
print("✓ Manipulate strings (slicing, methods)?")
print("✓ Use f-strings for formatting?")
print("✓ Convert between types?")
print("\nIf yes, move to lesson1-2-control-flow.py!")
print("If no, review the sections above and redo exercises.")
