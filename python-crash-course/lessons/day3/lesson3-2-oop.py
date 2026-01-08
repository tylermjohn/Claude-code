"""
LESSON 3.2: Object-Oriented Programming (2 hours)

Master classes, objects, and OOP concepts in Python.
"""

# ============================================================================
# SECTION 1: Classes and Objects Basics
# ============================================================================

# Define a class
class Dog:
    pass

# Create an object (instance)
my_dog = Dog()
print(my_dog)  # <__main__.Dog object at 0x...>

# Class with attributes
class Dog:
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age

# __init__ is the constructor (called when creating object)
# self refers to the instance being created

my_dog = Dog("Buddy", 3)
print(my_dog.name)  # Buddy
print(my_dog.age)   # 3

another_dog = Dog("Max", 5)
print(another_dog.name)  # Max

# ============================================================================
# SECTION 2: Instance Methods
# ============================================================================

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

    def get_human_age(self):
        return self.age * 7

my_dog = Dog("Buddy", 3)
print(my_dog.bark())           # Buddy says Woof!
print(my_dog.get_human_age())  # 21

# self is automatically passed (don't include it when calling)

# ============================================================================
# SECTION 3: Class Attributes vs Instance Attributes
# ============================================================================

class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"

    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.species)  # Canis familiaris
print(dog2.species)  # Canis familiaris

# Change class attribute for all instances
Dog.species = "Dog"
print(dog1.species)  # Dog
print(dog2.species)  # Dog

# Instance attributes are different
print(dog1.name)  # Buddy
print(dog2.name)  # Max

# ============================================================================
# SECTION 4: Methods with Parameters
# ============================================================================

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

    def scale(self, factor):
        self.width *= factor
        self.height *= factor

rect = Rectangle(10, 5)
print(rect.area())       # 50
print(rect.perimeter())  # 30
rect.scale(2)
print(rect.area())       # 200

# ============================================================================
# SECTION 5: String Representation
# ============================================================================

class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        # Called by str() and print()
        return f"{self.name} is {self.age} years old"

    def __repr__(self):
        # Called by repr() and in interactive shell
        return f"Dog('{self.name}', {self.age})"

my_dog = Dog("Buddy", 3)
print(my_dog)        # Buddy is 3 years old (uses __str__)
print(repr(my_dog))  # Dog('Buddy', 3) (uses __repr__)

# ============================================================================
# SECTION 6: Inheritance
# ============================================================================

# Parent class (base class)
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "Some sound"

# Child class (derived class)
class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")
print(dog.speak())  # Buddy says Woof!
print(cat.speak())  # Whiskers says Meow!

# ============================================================================
# SECTION 7: Super() and Method Overriding
# ============================================================================

class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def describe(self):
        return f"{self.name} is a {self.species}"

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Dog")  # Call parent constructor
        self.breed = breed

    def describe(self):
        # Override parent method
        base = super().describe()  # Call parent method
        return f"{base} of breed {self.breed}"

dog = Dog("Buddy", "Golden Retriever")
print(dog.describe())  # Buddy is a Dog of breed Golden Retriever

# ============================================================================
# SECTION 8: Property Decorators
# ============================================================================

class Circle:
    def __init__(self, radius):
        self._radius = radius  # Convention: _ prefix for "private"

    @property
    def radius(self):
        """Getter method"""
        return self._radius

    @radius.setter
    def radius(self, value):
        """Setter method with validation"""
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def area(self):
        """Computed property"""
        return 3.14159 * self._radius ** 2

circle = Circle(5)
print(circle.radius)  # 5 (uses getter)
print(circle.area)    # 78.53975 (computed)

circle.radius = 10    # Uses setter
print(circle.area)    # 314.159

# circle.radius = -5  # Raises ValueError

# ============================================================================
# SECTION 9: Class Methods and Static Methods
# ============================================================================

class MathOperations:
    counter = 0  # Class variable

    def __init__(self, value):
        self.value = value
        MathOperations.counter += 1

    def double(self):
        """Instance method - needs instance"""
        return self.value * 2

    @classmethod
    def get_counter(cls):
        """Class method - works with class, not instance"""
        return cls.counter

    @classmethod
    def from_string(cls, string):
        """Alternative constructor"""
        value = int(string)
        return cls(value)

    @staticmethod
    def add(a, b):
        """Static method - doesn't need instance or class"""
        return a + b

# Instance method
obj = MathOperations(5)
print(obj.double())  # 10

# Class method
print(MathOperations.get_counter())  # 1
obj2 = MathOperations.from_string("42")
print(MathOperations.get_counter())  # 2

# Static method
print(MathOperations.add(3, 4))  # 7

# ============================================================================
# SECTION 10: Magic Methods (Dunder Methods)
# ============================================================================

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

    def __add__(self, other):
        """Override + operator"""
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        """Override == operator"""
        return self.x == other.x and self.y == other.y

    def __len__(self):
        """Called by len()"""
        return 2

    def __getitem__(self, index):
        """Allow indexing like v[0]"""
        if index == 0:
            return self.x
        elif index == 1:
            return self.y
        raise IndexError("Index out of range")

v1 = Vector(1, 2)
v2 = Vector(3, 4)

print(v1 + v2)       # Vector(4, 6) - uses __add__
print(v1 == v2)      # False - uses __eq__
print(len(v1))       # 2 - uses __len__
print(v1[0], v1[1])  # 1 2 - uses __getitem__

# Other common magic methods:
# __init__, __str__, __repr__
# __add__, __sub__, __mul__, __truediv__
# __eq__, __ne__, __lt__, __gt__, __le__, __ge__
# __len__, __getitem__, __setitem__
# __enter__, __exit__ (context managers)

# ============================================================================
# SECTION 11: Encapsulation and Private Attributes
# ============================================================================

class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # "Private" attribute (name mangling)

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
account.deposit(500)
print(account.get_balance())  # 1500

# Can't access directly (but Python doesn't truly enforce privacy)
# print(account.__balance)  # AttributeError

# Name mangling makes it _ClassName__attribute
print(account._BankAccount__balance)  # 1500 (not recommended!)

# Convention: use single underscore for "internal" attributes
class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # Convention: internal use only

# ============================================================================
# SECTION 12: Multiple Inheritance
# ============================================================================

class Flyer:
    def fly(self):
        return "Flying!"

class Swimmer:
    def swim(self):
        return "Swimming!"

class Duck(Flyer, Swimmer):
    def quack(self):
        return "Quack!"

duck = Duck()
print(duck.fly())    # Flying!
print(duck.swim())   # Swimming!
print(duck.quack())  # Quack!

# Method Resolution Order (MRO)
print(Duck.__mro__)
# (<class '__main__.Duck'>, <class '__main__.Flyer'>, <class '__main__.Swimmer'>, ...)

# ============================================================================
# SECTION 13: Abstract Base Classes
# ============================================================================

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        """Must be implemented by subclass"""
        pass

    @abstractmethod
    def perimeter(self):
        """Must be implemented by subclass"""
        pass

# Can't instantiate abstract class
# shape = Shape()  # TypeError

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

rect = Rectangle(10, 5)
print(rect.area())  # 50

# ============================================================================
# SECTION 14: Composition vs Inheritance
# ============================================================================

# Composition - "has-a" relationship (preferred over inheritance often)
class Engine:
    def start(self):
        return "Engine started"

class Car:
    def __init__(self):
        self.engine = Engine()  # Car HAS-A Engine

    def start(self):
        return self.engine.start()

car = Car()
print(car.start())  # Engine started

# Inheritance - "is-a" relationship
class Vehicle:
    pass

class Car(Vehicle):  # Car IS-A Vehicle
    pass

# ============================================================================
# EXERCISES
# ============================================================================

print("\n" + "="*50)
print("EXERCISES")
print("="*50 + "\n")

# Exercise 1: Person class
# TODO: Create a Person class with name and age attributes
# Add a method greet() that returns "Hello, I'm {name}"


# Exercise 2: Bank Account
# TODO: Create BankAccount class with:
# - __init__(self, owner, balance=0)
# - deposit(amount) - add to balance
# - withdraw(amount) - subtract if sufficient funds
# - get_balance() - return current balance


# Exercise 3: Student with grades
# TODO: Create Student class with:
# - name, grades (list)
# - add_grade(grade) method
# - average() method to calculate average grade
# - __str__ method for nice printing


# Exercise 4: Inheritance - Vehicles
# TODO: Create Vehicle base class with make, model, year
# Create Car and Motorcycle subclasses that add specific attributes
# Override __str__ method in each


# Exercise 5: Property decorator
# TODO: Create Temperature class with:
# - celsius property (getter and setter)
# - fahrenheit property (computed from celsius)


# Exercise 6: Rectangle with validation
# TODO: Create Rectangle class where width and height
# cannot be negative (raise ValueError if they are)


# Exercise 7: Shopping cart class
# TODO: Create ShoppingCart class with:
# - add_item(name, price, quantity)
# - remove_item(name)
# - get_total()
# - __str__ showing all items


# Exercise 8: Employee hierarchy
# TODO: Create Employee base class with name, salary
# Create Manager (adds department) and Developer (adds language) subclasses
# Add calculate_bonus() method that differs for each type


print("\n" + "="*50)
print("CHECKPOINT: Can you...")
print("="*50)
print("✓ Create classes with __init__ and methods?")
print("✓ Understand instance vs class attributes?")
print("✓ Use inheritance and super()?")
print("✓ Override methods and operators?")
print("✓ Use property decorators?")
print("✓ Understand when to use class vs static methods?")
print("\nIf yes, move to lesson3-3-libraries.py!")
