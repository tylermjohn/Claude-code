"""
LESSON 1.4: Day 1 Practice Problems (1.5 hours)

Consolidate everything from Day 1 with these exercises.
Try to solve each problem before looking at the solutions.
"""

# ============================================================================
# WARMUP PROBLEMS
# ============================================================================

# Problem 1: Two Sum
def two_sum(numbers, target):
    """
    Find two numbers in the list that add up to target.
    Return their indices.

    Example: two_sum([2, 7, 11, 15], 9) -> (0, 1)
    """
    # TODO: Implement this
    pass


# Problem 2: Reverse String
def reverse_string(text):
    """
    Reverse a string without using [::-1]

    Example: reverse_string("hello") -> "olleh"
    """
    # TODO: Implement this
    pass


# Problem 3: Count Characters
def char_frequency(text):
    """
    Count frequency of each character in text.

    Example: char_frequency("hello") -> {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    """
    # TODO: Implement this
    pass


# ============================================================================
# INTERMEDIATE PROBLEMS
# ============================================================================

# Problem 4: Remove Duplicates
def remove_duplicates(numbers):
    """
    Remove duplicates from list while maintaining order.

    Example: remove_duplicates([1, 2, 2, 3, 1, 4]) -> [1, 2, 3, 4]
    """
    # TODO: Implement this
    pass


# Problem 5: Valid Password
def is_valid_password(password):
    """
    Check if password is valid:
    - At least 8 characters
    - Contains at least one uppercase letter
    - Contains at least one lowercase letter
    - Contains at least one digit

    Example: is_valid_password("Abc12345") -> True
    """
    # TODO: Implement this
    pass


# Problem 6: Longest Word
def find_longest_word(sentence):
    """
    Find the longest word in a sentence.

    Example: find_longest_word("The quick brown fox") -> "quick"
    """
    # TODO: Implement this
    pass


# Problem 7: Sum of Multiples
def sum_of_multiples(n, multiples):
    """
    Sum all numbers below n that are multiples of any number in multiples list.

    Example: sum_of_multiples(10, [3, 5]) -> 23
    Explanation: 3, 5, 6, 9 sum to 23
    """
    # TODO: Implement this
    pass


# ============================================================================
# CHALLENGE PROBLEMS
# ============================================================================

# Problem 8: Caesar Cipher
def caesar_cipher(text, shift):
    """
    Implement Caesar cipher encryption.
    Shift each letter by 'shift' positions in alphabet.
    Keep non-letters unchanged.

    Example: caesar_cipher("Hello", 3) -> "Khoor"
    """
    # TODO: Implement this
    pass


# Problem 9: Find Missing Number
def find_missing_number(numbers):
    """
    Given a list containing n distinct numbers from 0 to n,
    find the one missing number.

    Example: find_missing_number([0, 1, 3, 4]) -> 2
    """
    # TODO: Implement this
    pass


# Problem 10: Title Case
def to_title_case(text):
    """
    Convert text to title case, but don't capitalize small words
    (and, or, the, of, in, a, an) unless they're the first word.

    Example: to_title_case("the lord of the rings") -> "The Lord of the Rings"
    """
    # TODO: Implement this
    pass


# ============================================================================
# TEST YOUR SOLUTIONS
# ============================================================================

def test_solutions():
    """Run tests on all functions"""

    print("Testing two_sum...")
    assert two_sum([2, 7, 11, 15], 9) == (0, 1)
    assert two_sum([3, 2, 4], 6) == (1, 2)
    print("✓ two_sum passed")

    print("\nTesting reverse_string...")
    assert reverse_string("hello") == "olleh"
    assert reverse_string("Python") == "nohtyP"
    print("✓ reverse_string passed")

    print("\nTesting char_frequency...")
    assert char_frequency("hello") == {'h': 1, 'e': 1, 'l': 2, 'o': 1}
    print("✓ char_frequency passed")

    print("\nTesting remove_duplicates...")
    assert remove_duplicates([1, 2, 2, 3, 1, 4]) == [1, 2, 3, 4]
    print("✓ remove_duplicates passed")

    print("\nTesting is_valid_password...")
    assert is_valid_password("Abc12345") == True
    assert is_valid_password("abc12345") == False
    assert is_valid_password("Abcdefg") == False
    print("✓ is_valid_password passed")

    print("\nTesting find_longest_word...")
    assert find_longest_word("The quick brown fox") == "quick"
    print("✓ find_longest_word passed")

    print("\nTesting sum_of_multiples...")
    assert sum_of_multiples(10, [3, 5]) == 23
    print("✓ sum_of_multiples passed")

    print("\nTesting caesar_cipher...")
    assert caesar_cipher("Hello", 3) == "Khoor"
    print("✓ caesar_cipher passed")

    print("\nTesting find_missing_number...")
    assert find_missing_number([0, 1, 3, 4]) == 2
    assert find_missing_number([0, 1, 2, 3, 4, 5, 7]) == 6
    print("✓ find_missing_number passed")

    print("\nTesting to_title_case...")
    assert to_title_case("the lord of the rings") == "The Lord of the Rings"
    print("✓ to_title_case passed")

    print("\n" + "="*50)
    print("ALL TESTS PASSED! 🎉")
    print("="*50)


# Uncomment to run tests (after implementing solutions)
# test_solutions()


print("\n" + "="*50)
print("SOLUTIONS BELOW - TRY FIRST BEFORE LOOKING!")
print("="*50 + "\n")

# Scroll down for solutions...
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .
# .

# ============================================================================
# SOLUTIONS
# ============================================================================

def two_sum_solution(numbers, target):
    """Solution using hash map for O(n) time"""
    seen = {}
    for i, num in enumerate(numbers):
        complement = target - num
        if complement in seen:
            return (seen[complement], i)
        seen[num] = i


def reverse_string_solution(text):
    """Solution using a loop"""
    result = ""
    for char in text:
        result = char + result  # Prepend each character
    return result


def char_frequency_solution(text):
    """Solution using a dictionary"""
    freq = {}
    for char in text:
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1
    return freq
    # Alternative: freq[char] = freq.get(char, 0) + 1


def remove_duplicates_solution(numbers):
    """Solution maintaining order"""
    seen = set()
    result = []
    for num in numbers:
        if num not in seen:
            result.append(num)
            seen.add(num)
    return result


def is_valid_password_solution(password):
    """Solution checking all conditions"""
    if len(password) < 8:
        return False

    has_upper = False
    has_lower = False
    has_digit = False

    for char in password:
        if char.isupper():
            has_upper = True
        elif char.islower():
            has_lower = True
        elif char.isdigit():
            has_digit = True

    return has_upper and has_lower and has_digit


def find_longest_word_solution(sentence):
    """Solution using split and max"""
    words = sentence.split()
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest
    # One-liner: return max(sentence.split(), key=len)


def sum_of_multiples_solution(n, multiples):
    """Solution using set to avoid double-counting"""
    total = 0
    counted = set()

    for num in range(n):
        for multiple in multiples:
            if num % multiple == 0 and num not in counted:
                total += num
                counted.add(num)
                break

    return total


def caesar_cipher_solution(text, shift):
    """Solution handling both upper and lowercase"""
    result = ""

    for char in text:
        if char.isalpha():
            # Get base (A for uppercase, a for lowercase)
            base = ord('A') if char.isupper() else ord('a')
            # Shift and wrap around using modulo
            shifted = chr((ord(char) - base + shift) % 26 + base)
            result += shifted
        else:
            result += char

    return result


def find_missing_number_solution(numbers):
    """Solution using sum formula"""
    n = len(numbers)  # One number is missing, so actual n is len + 1
    expected_sum = n * (n + 1) // 2  # Sum of 0 to n
    actual_sum = sum(numbers)
    return expected_sum - actual_sum


def to_title_case_solution(text):
    """Solution with small words list"""
    small_words = {'and', 'or', 'the', 'of', 'in', 'a', 'an'}
    words = text.split()
    result = []

    for i, word in enumerate(words):
        if i == 0 or word.lower() not in small_words:
            result.append(word.capitalize())
        else:
            result.append(word.lower())

    return ' '.join(result)


print("\n" + "="*50)
print("DAY 1 COMPLETE!")
print("="*50)
print("You've learned:")
print("✓ Variables and data types")
print("✓ Control flow (if/else, loops)")
print("✓ Functions and scope")
print("✓ Problem-solving patterns")
print("\nTake a break, then start Day 2!")
