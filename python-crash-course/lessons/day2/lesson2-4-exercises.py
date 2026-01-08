"""
LESSON 2.4: Day 2 Practice Problems (1.5 hours)

Apply your knowledge of data structures and comprehensions.
"""

# ============================================================================
# WARMUP PROBLEMS
# ============================================================================

# Problem 1: List Intersection
def list_intersection(list1, list2):
    """
    Return list of elements that appear in both lists (no duplicates).

    Example: list_intersection([1, 2, 3, 4], [3, 4, 5, 6]) -> [3, 4]
    """
    # TODO: Implement this
    pass


# Problem 2: Group Anagrams
def group_anagrams(words):
    """
    Group words that are anagrams of each other.

    Example: group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    -> [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    """
    # TODO: Implement this
    pass


# Problem 3: Top K Frequent Elements
def top_k_frequent(nums, k):
    """
    Return the k most frequent elements.

    Example: top_k_frequent([1,1,1,2,2,3], 2) -> [1, 2]
    """
    # TODO: Implement this
    pass


# ============================================================================
# INTERMEDIATE PROBLEMS
# ============================================================================

# Problem 4: Merge Dictionaries with Sum
def merge_dicts_sum(*dicts):
    """
    Merge multiple dictionaries, summing values for common keys.

    Example: merge_dicts_sum({"a": 1, "b": 2}, {"b": 3, "c": 4})
    -> {"a": 1, "b": 5, "c": 4}
    """
    # TODO: Implement this
    pass


# Problem 5: Longest Consecutive Sequence
def longest_consecutive(nums):
    """
    Find length of longest consecutive sequence.

    Example: longest_consecutive([100, 4, 200, 1, 3, 2]) -> 4
    Explanation: [1, 2, 3, 4] is the longest consecutive sequence
    """
    # TODO: Implement this
    pass


# Problem 6: Valid Sudoku Row/Column
def is_valid_sudoku_unit(unit):
    """
    Check if a sudoku row/column is valid (no duplicate non-zero numbers).

    Example: is_valid_sudoku_unit([5,3,0,0,7,0,0,0,0]) -> True
    Example: is_valid_sudoku_unit([5,3,5,0,7,0,0,0,0]) -> False
    """
    # TODO: Implement this
    pass


# Problem 7: Product of Array Except Self
def product_except_self(nums):
    """
    Return array where each element is product of all others.
    Do not use division.

    Example: product_except_self([1,2,3,4]) -> [24,12,8,6]
    Explanation: [2*3*4, 1*3*4, 1*2*4, 1*2*3]
    """
    # TODO: Implement this
    pass


# ============================================================================
# CHALLENGE PROBLEMS
# ============================================================================

# Problem 8: Matrix Spiral Order
def spiral_order(matrix):
    """
    Return matrix elements in spiral order (clockwise from outside).

    Example: spiral_order([[1,2,3],[4,5,6],[7,8,9]]) -> [1,2,3,6,9,8,7,4,5]
    """
    # TODO: Implement this
    pass


# Problem 9: LRU Cache
class LRUCache:
    """
    Implement a Least Recently Used cache with get and put operations.
    When cache is full, remove least recently used item.

    Example:
    cache = LRUCache(2)  # capacity 2
    cache.put(1, 1)
    cache.put(2, 2)
    cache.get(1)  # returns 1
    cache.put(3, 3)  # evicts key 2
    cache.get(2)  # returns None
    """
    def __init__(self, capacity):
        # TODO: Implement this
        pass

    def get(self, key):
        # TODO: Implement this
        pass

    def put(self, key, value):
        # TODO: Implement this
        pass


# Problem 10: Word Pattern Match
def word_pattern_match(pattern, string):
    """
    Check if string matches pattern where each letter maps to exactly one word.

    Example: word_pattern_match("abba", "dog cat cat dog") -> True
    Example: word_pattern_match("abba", "dog cat cat fish") -> False
    Example: word_pattern_match("aaaa", "dog dog dog dog") -> True
    """
    # TODO: Implement this
    pass


# ============================================================================
# REAL-WORLD SCENARIOS
# ============================================================================

# Problem 11: Student Grade Analyzer
def analyze_grades(students):
    """
    Given list of student dicts with name and list of grades,
    return dict with:
    - 'highest': student with highest average
    - 'lowest': student with lowest average
    - 'class_average': average of all grades

    Example:
    students = [
        {"name": "Alice", "grades": [85, 90, 92]},
        {"name": "Bob", "grades": [70, 75, 80]}
    ]
    -> {
        'highest': ('Alice', 89.0),
        'lowest': ('Bob', 75.0),
        'class_average': 82.0
    }
    """
    # TODO: Implement this
    pass


# Problem 12: Shopping Cart
class ShoppingCart:
    """
    Implement a shopping cart with:
    - add_item(name, price, quantity): add items
    - remove_item(name): remove all of an item
    - update_quantity(name, quantity): update item quantity
    - get_total(): return total price
    - get_items(): return all items with subtotals
    """
    def __init__(self):
        # TODO: Implement this
        pass

    def add_item(self, name, price, quantity=1):
        # TODO: Implement this
        pass

    def remove_item(self, name):
        # TODO: Implement this
        pass

    def update_quantity(self, name, quantity):
        # TODO: Implement this
        pass

    def get_total(self):
        # TODO: Implement this
        pass

    def get_items(self):
        # TODO: Implement this
        pass


# ============================================================================
# TEST YOUR SOLUTIONS
# ============================================================================

def test_solutions():
    """Run tests on all functions"""

    print("Testing list_intersection...")
    assert set(list_intersection([1,2,3,4], [3,4,5,6])) == {3, 4}
    print("✓ list_intersection passed")

    print("\nTesting group_anagrams...")
    result = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    # Check that correct groups exist (order within and between groups may vary)
    assert len(result) == 3
    print("✓ group_anagrams passed")

    print("\nTesting top_k_frequent...")
    result = top_k_frequent([1,1,1,2,2,3], 2)
    assert set(result) == {1, 2}
    print("✓ top_k_frequent passed")

    print("\nTesting merge_dicts_sum...")
    result = merge_dicts_sum({"a": 1, "b": 2}, {"b": 3, "c": 4})
    assert result == {"a": 1, "b": 5, "c": 4}
    print("✓ merge_dicts_sum passed")

    print("\nTesting longest_consecutive...")
    assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4
    print("✓ longest_consecutive passed")

    print("\nTesting is_valid_sudoku_unit...")
    assert is_valid_sudoku_unit([5,3,0,0,7,0,0,0,0]) == True
    assert is_valid_sudoku_unit([5,3,5,0,7,0,0,0,0]) == False
    print("✓ is_valid_sudoku_unit passed")

    print("\nTesting product_except_self...")
    assert product_except_self([1,2,3,4]) == [24,12,8,6]
    print("✓ product_except_self passed")

    print("\nTesting spiral_order...")
    assert spiral_order([[1,2,3],[4,5,6],[7,8,9]]) == [1,2,3,6,9,8,7,4,5]
    print("✓ spiral_order passed")

    print("\nTesting word_pattern_match...")
    assert word_pattern_match("abba", "dog cat cat dog") == True
    assert word_pattern_match("abba", "dog cat cat fish") == False
    print("✓ word_pattern_match passed")

    print("\n" + "="*50)
    print("BASIC TESTS PASSED! 🎉")
    print("="*50)


# Uncomment to run tests
# test_solutions()


print("\n" + "="*50)
print("SOLUTIONS BELOW - TRY FIRST!")
print("="*50 + "\n")

# Scroll down for solutions...
# [Additional newlines for scrolling space]
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

def list_intersection_solution(list1, list2):
    """Solution using set intersection"""
    return list(set(list1) & set(list2))


def group_anagrams_solution(words):
    """Solution using sorted word as key"""
    from collections import defaultdict
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())


def top_k_frequent_solution(nums, k):
    """Solution using Counter"""
    from collections import Counter
    counts = Counter(nums)
    return [num for num, count in counts.most_common(k)]


def merge_dicts_sum_solution(*dicts):
    """Solution iterating through all dicts"""
    result = {}
    for d in dicts:
        for key, value in d.items():
            result[key] = result.get(key, 0) + value
    return result


def longest_consecutive_solution(nums):
    """Solution using set for O(n) lookup"""
    num_set = set(nums)
    longest = 0

    for num in num_set:
        # Only start counting if it's the beginning of a sequence
        if num - 1 not in num_set:
            current_num = num
            current_length = 1

            while current_num + 1 in num_set:
                current_num += 1
                current_length += 1

            longest = max(longest, current_length)

    return longest


def is_valid_sudoku_unit_solution(unit):
    """Solution using set to check duplicates"""
    non_zero = [x for x in unit if x != 0]
    return len(non_zero) == len(set(non_zero))


def product_except_self_solution(nums):
    """Solution using prefix and suffix products"""
    n = len(nums)
    result = [1] * n

    # Calculate prefix products
    prefix = 1
    for i in range(n):
        result[i] = prefix
        prefix *= nums[i]

    # Calculate suffix products and multiply
    suffix = 1
    for i in range(n - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]

    return result


def spiral_order_solution(matrix):
    """Solution using boundary pointers"""
    if not matrix:
        return []

    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1

    while top <= bottom and left <= right:
        # Right
        for col in range(left, right + 1):
            result.append(matrix[top][col])
        top += 1

        # Down
        for row in range(top, bottom + 1):
            result.append(matrix[row][right])
        right -= 1

        # Left (if still in bounds)
        if top <= bottom:
            for col in range(right, left - 1, -1):
                result.append(matrix[bottom][col])
            bottom -= 1

        # Up (if still in bounds)
        if left <= right:
            for row in range(bottom, top - 1, -1):
                result.append(matrix[row][left])
            left += 1

    return result


def word_pattern_match_solution(pattern, string):
    """Solution using two dictionaries for bidirectional mapping"""
    words = string.split()
    if len(pattern) != len(words):
        return False

    char_to_word = {}
    word_to_char = {}

    for char, word in zip(pattern, words):
        if char in char_to_word:
            if char_to_word[char] != word:
                return False
        else:
            char_to_word[char] = word

        if word in word_to_char:
            if word_to_char[word] != char:
                return False
        else:
            word_to_char[word] = char

    return True


print("\n" + "="*50)
print("DAY 2 COMPLETE!")
print("="*50)
print("You've mastered:")
print("✓ Lists and tuples")
print("✓ Dictionaries and sets")
print("✓ List/dict/set comprehensions")
print("✓ Advanced iteration patterns")
print("\nReady for Day 3 - Professional Python!")
