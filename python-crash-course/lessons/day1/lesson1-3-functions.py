"""
LESSON 1.3: Functions and Scope (1.5 hours)

Learn to organize code into reusable functions.
"""

# ============================================================================
# SECTION 1: Basic Functions
# ============================================================================

# Function definition
def greet():
    print("Hello, World!")

# Function call
greet()  # Hello, World!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # Hello, Alice!
greet_person("Bob")    # Hello, Bob!

# Function with multiple parameters
def add(a, b):
    result = a + b
    print(f"{a} + {b} = {result}")

add(5, 3)  # 5 + 3 = 8

# ============================================================================
# SECTION 2: Return Values
# ============================================================================

# Functions can return values
def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)  # 20

# Using return value directly
print(multiply(3, 7))  # 21

# Multiple return values (returns a tuple)
def get_user_info():
    name = "Alice"
    age = 30
    city = "NYC"
    return name, age, city

# Unpack return values
user_name, user_age, user_city = get_user_info()
print(f"{user_name}, {user_age}, {user_city}")

# Return without value returns None
def say_hello():
    print("Hello")
    return  # Optional, function returns None anyway

result = say_hello()  # Prints: Hello
print(result)  # None

# Early return
def check_adult(age):
    if age < 18:
        return False
    return True

print(check_adult(25))  # True
print(check_adult(15))  # False

# ============================================================================
# SECTION 3: Default Parameters
# ============================================================================

# Parameters with default values
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!
greet("Charlie", "Hey")     # Hey, Charlie!

# Default parameters must come after non-default parameters
def create_profile(name, age, country="USA"):  # ✓ Correct
    return f"{name}, {age}, {country}"

# def bad_function(name="John", age):  # ✗ SyntaxError
#     pass

# ============================================================================
# SECTION 4: Keyword Arguments
# ============================================================================

# Positional arguments (order matters)
def describe_pet(animal, name):
    print(f"I have a {animal} named {name}")

describe_pet("dog", "Buddy")  # I have a dog named Buddy

# Keyword arguments (order doesn't matter)
describe_pet(name="Whiskers", animal="cat")  # I have a cat named Whiskers

# Mix positional and keyword (positional must come first)
describe_pet("hamster", name="Fluffy")  # I have a hamster named Fluffy

# ============================================================================
# SECTION 5: *args and **kwargs
# ============================================================================

# *args - variable number of positional arguments
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs - variable number of keyword arguments
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="NYC")
# name: Alice
# age: 30
# city: NYC

# Combining everything
def complex_function(required, *args, default="value", **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Default: {default}")
    print(f"Kwargs: {kwargs}")

complex_function("must have", 1, 2, 3, default="custom", extra="info", more="data")

# ============================================================================
# SECTION 6: Scope
# ============================================================================

# Global scope
global_var = "I'm global"

def function1():
    # Can read global variables
    print(global_var)

function1()  # I'm global

# Local scope
def function2():
    local_var = "I'm local"
    print(local_var)

function2()  # I'm local
# print(local_var)  # Error: local_var not defined outside function

# Variable shadowing
x = 10  # Global x

def function3():
    x = 5  # Local x (shadows global)
    print(f"Inside function: {x}")

function3()  # Inside function: 5
print(f"Outside function: {x}")  # Outside function: 10

# Modifying global variables (be careful!)
count = 0

def increment():
    global count  # Declare we want to modify global count
    count += 1

increment()
print(count)  # 1

# Nested function scope
def outer():
    x = "outer"

    def inner():
        x = "inner"
        print(f"Inner x: {x}")

    inner()
    print(f"Outer x: {x}")

outer()
# Inner x: inner
# Outer x: outer

# ============================================================================
# SECTION 7: Lambda Functions (Anonymous Functions)
# ============================================================================

# Regular function
def square(x):
    return x ** 2

print(square(5))  # 25

# Lambda equivalent (one-liner)
square_lambda = lambda x: x ** 2
print(square_lambda(5))  # 25

# Lambda with multiple parameters
add = lambda a, b: a + b
print(add(3, 4))  # 7

# Lambdas are often used with built-in functions
numbers = [1, 2, 3, 4, 5]

# map - apply function to each element
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# filter - keep elements where function returns True
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

# sorted with key
words = ["banana", "pie", "apple", "cherry"]
sorted_by_length = sorted(words, key=lambda x: len(x))
print(sorted_by_length)  # ['pie', 'apple', 'banana', 'cherry']

# ============================================================================
# SECTION 8: Docstrings and Type Hints
# ============================================================================

# Docstrings - document your functions
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.

    Args:
        length: The length of the rectangle
        width: The width of the rectangle

    Returns:
        The area as length * width
    """
    return length * width

# Access docstring
print(calculate_area.__doc__)

# Type hints (Python 3.5+) - optional but recommended
def greet_user(name: str, age: int) -> str:
    """Type hints show expected types"""
    return f"{name} is {age} years old"

print(greet_user("Alice", 30))

# Type hints don't enforce types (just documentation)
print(greet_user(123, "oops"))  # Still works, but not recommended

# ============================================================================
# SECTION 9: Common Built-in Functions
# ============================================================================

# len - length of sequence
print(len("hello"))      # 5
print(len([1, 2, 3]))    # 3

# min, max, sum
numbers = [3, 1, 4, 1, 5, 9]
print(min(numbers))      # 1
print(max(numbers))      # 9
print(sum(numbers))      # 23

# abs - absolute value
print(abs(-10))          # 10

# round - round to nearest integer
print(round(3.7))        # 4
print(round(3.14159, 2)) # 3.14

# sorted - return sorted list
print(sorted([3, 1, 2])) # [1, 2, 3]
print(sorted("python"))  # ['h', 'n', 'o', 'p', 't', 'y']

# reversed - reverse a sequence
print(list(reversed([1, 2, 3])))  # [3, 2, 1]

# zip - combine sequences
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# all, any - check if all/any elements are truthy
print(all([True, True, True]))   # True
print(all([True, False, True]))  # False
print(any([False, False, True])) # True
print(any([False, False, False]))# False

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Temperature converter
# TODO: Write a function celsius_to_fahrenheit(celsius) that
# converts Celsius to Fahrenheit. Test with 0, 25, and 100.


# Exercise 2: Check if number is even
# TODO: Write a function is_even(number) that returns True if
# the number is even, False otherwise.


# Exercise 3: Find maximum
# TODO: Write a function find_max(numbers) that takes a list
# and returns the maximum value WITHOUT using the max() function.


# Exercise 4: Count vowels
# TODO: Write a function count_vowels(text) that counts vowels.
# Test with "Hello World"


# Exercise 5: Create greeter with default
# TODO: Write a function greet(name, greeting="Hello") that
# can be called with just a name or with both name and greeting.


# Exercise 6: Variable arguments
# TODO: Write a function multiply_all(*numbers) that multiplies
# all given numbers together. Test: multiply_all(2, 3, 4) should return 24


# Exercise 7: Filter and transform
# TODO: Given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter() or
# a list comprehension to get only numbers divisible by 3,
# then square them. Result should be [9, 36, 81]


# Exercise 8: Palindrome checker
# TODO: Write a function is_palindrome(text) that returns True
# if text reads the same forwards and backwards (ignore case).
# Test: "racecar" -> True, "hello" -> False


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Define and call functions?")
print("✓ Use return values?")
print("✓ Work with default and keyword arguments?")
print("✓ Use *args and **kwargs?")
print("✓ Understand variable scope?")
print("✓ Write lambda functions?")
print("\nIf yes, move to lesson1-4-exercises.py!")
