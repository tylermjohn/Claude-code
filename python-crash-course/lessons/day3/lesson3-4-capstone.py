"""
LESSON 3.4: Capstone Project - Personal Finance Tracker (1 hour)

Build a complete application that demonstrates all skills learned.
This is portfolio-worthy code that showcases your Python abilities.

PROJECT: Personal Finance Tracker
- Track income and expenses
- Categorize transactions
- Generate reports and statistics
- Save/load data from JSON
- User-friendly command-line interface
"""

import json
import os
from datetime import datetime
from collections import defaultdict


class Transaction:
    """Represents a single financial transaction"""

    def __init__(self, amount, category, description, date=None, transaction_type="expense"):
        self.amount = amount
        self.category = category
        self.description = description
        self.date = date if date else datetime.now().strftime("%Y-%m-%d")
        self.type = transaction_type  # 'income' or 'expense'

    def to_dict(self):
        """Convert transaction to dictionary for JSON serialization"""
        return {
            "amount": self.amount,
            "category": self.category,
            "description": self.description,
            "date": self.date,
            "type": self.type
        }

    @classmethod
    def from_dict(cls, data):
        """Create transaction from dictionary"""
        return cls(
            data["amount"],
            data["category"],
            data["description"],
            data["date"],
            data["type"]
        )

    def __str__(self):
        sign = "+" if self.type == "income" else "-"
        return f"{self.date} | {sign}${self.amount:,.2f} | {self.category} | {self.description}"


class FinanceTracker:
    """Main application class for tracking finances"""

    def __init__(self, filename="finances.json"):
        self.filename = filename
        self.transactions = []
        self.load_data()

    def add_transaction(self, amount, category, description, transaction_type="expense"):
        """Add a new transaction"""
        try:
            amount = float(amount)
            if amount <= 0:
                raise ValueError("Amount must be positive")

            transaction = Transaction(amount, category, description, transaction_type=transaction_type)
            self.transactions.append(transaction)
            self.save_data()
            return True
        except ValueError as e:
            print(f"Error: {e}")
            return False

    def get_balance(self):
        """Calculate current balance (income - expenses)"""
        income = sum(t.amount for t in self.transactions if t.type == "income")
        expenses = sum(t.amount for t in self.transactions if t.type == "expense")
        return income - expenses

    def get_transactions_by_category(self):
        """Group transactions by category"""
        by_category = defaultdict(lambda: {"income": 0, "expense": 0, "count": 0})

        for transaction in self.transactions:
            category = transaction.category
            by_category[category][transaction.type] += transaction.amount
            by_category[category]["count"] += 1

        return dict(by_category)

    def get_transactions_by_month(self):
        """Group transactions by month"""
        by_month = defaultdict(lambda: {"income": 0, "expense": 0})

        for transaction in self.transactions:
            month = transaction.date[:7]  # YYYY-MM
            by_month[month][transaction.type] += transaction.amount

        return dict(sorted(by_month.items()))

    def get_recent_transactions(self, n=10):
        """Get n most recent transactions"""
        return sorted(self.transactions,
                     key=lambda t: t.date,
                     reverse=True)[:n]

    def save_data(self):
        """Save transactions to JSON file"""
        try:
            data = {
                "transactions": [t.to_dict() for t in self.transactions]
            }
            with open(self.filename, "w") as f:
                json.dump(data, f, indent=2)
        except Exception as e:
            print(f"Error saving data: {e}")

    def load_data(self):
        """Load transactions from JSON file"""
        if not os.path.exists(self.filename):
            return

        try:
            with open(self.filename, "r") as f:
                data = json.load(f)
                self.transactions = [
                    Transaction.from_dict(t) for t in data.get("transactions", [])
                ]
        except Exception as e:
            print(f"Error loading data: {e}")

    def generate_report(self):
        """Generate comprehensive financial report"""
        print("\n" + "="*60)
        print("FINANCIAL REPORT")
        print("="*60)

        # Overall summary
        balance = self.get_balance()
        total_income = sum(t.amount for t in self.transactions if t.type == "income")
        total_expenses = sum(t.amount for t in self.transactions if t.type == "expense")

        print(f"\nOverall Summary:")
        print(f"  Total Income:    ${total_income:,.2f}")
        print(f"  Total Expenses:  ${total_expenses:,.2f}")
        print(f"  Current Balance: ${balance:,.2f}")
        print(f"  Total Transactions: {len(self.transactions)}")

        # By category
        print(f"\nBy Category:")
        by_category = self.get_transactions_by_category()
        for category, data in sorted(by_category.items()):
            net = data["income"] - data["expense"]
            print(f"  {category:15} | Income: ${data['income']:>8,.2f} | "
                  f"Expense: ${data['expense']:>8,.2f} | "
                  f"Net: ${net:>8,.2f} | Count: {data['count']}")

        # By month
        print(f"\nBy Month:")
        by_month = self.get_transactions_by_month()
        for month, data in by_month.items():
            net = data["income"] - data["expense"]
            print(f"  {month} | Income: ${data['income']:>8,.2f} | "
                  f"Expense: ${data['expense']:>8,.2f} | Net: ${net:>8,.2f}")

        # Recent transactions
        print(f"\nRecent Transactions:")
        for transaction in self.get_recent_transactions(5):
            print(f"  {transaction}")

        print("="*60 + "\n")


def main():
    """Main application loop"""
    tracker = FinanceTracker()

    print("\n" + "="*60)
    print("PERSONAL FINANCE TRACKER")
    print("="*60)

    while True:
        print("\nOptions:")
        print("1. Add Income")
        print("2. Add Expense")
        print("3. View Balance")
        print("4. View Recent Transactions")
        print("5. Generate Report")
        print("6. Exit")

        choice = input("\nEnter your choice (1-6): ").strip()

        if choice == "1":
            # Add income
            try:
                amount = input("Amount: $")
                category = input("Category (e.g., Salary, Gift): ")
                description = input("Description: ")

                if tracker.add_transaction(amount, category, description, "income"):
                    print("✓ Income added successfully!")
            except KeyboardInterrupt:
                print("\nCancelled")

        elif choice == "2":
            # Add expense
            try:
                amount = input("Amount: $")
                category = input("Category (e.g., Food, Transport, Entertainment): ")
                description = input("Description: ")

                if tracker.add_transaction(amount, category, description, "expense"):
                    print("✓ Expense added successfully!")
            except KeyboardInterrupt:
                print("\nCancelled")

        elif choice == "3":
            # View balance
            balance = tracker.get_balance()
            print(f"\nCurrent Balance: ${balance:,.2f}")

        elif choice == "4":
            # View recent transactions
            print("\nRecent Transactions:")
            print("-" * 60)
            for transaction in tracker.get_recent_transactions(10):
                print(transaction)

        elif choice == "5":
            # Generate report
            tracker.generate_report()

        elif choice == "6":
            # Exit
            print("\nGoodbye!")
            break

        else:
            print("Invalid choice. Please try again.")


# ============================================================================
# YOUR TASKS
# ============================================================================

"""
CAPSTONE PROJECT TASKS:

1. UNDERSTAND THE CODE (15 minutes)
   - Read through the entire codebase
   - Understand how each class and method works
   - Identify which concepts from the course are used

2. TEST THE APPLICATION (10 minutes)
   - Run the program: python lesson3-4-capstone.py
   - Add some sample transactions
   - Generate reports
   - Check that data persists between runs

3. ADD FEATURES (35 minutes)
   Choose 3-5 features to implement:

   EASY:
   - [ ] Add ability to delete transactions
   - [ ] Add date filtering (show transactions for specific month)
   - [ ] Add search functionality (search by description or category)
   - [ ] Add budget setting and alerts when exceeded
   - [ ] Export report to text file

   MEDIUM:
   - [ ] Add recurring transactions (monthly bills)
   - [ ] Add data validation (prevent future dates, max amounts, etc.)
   - [ ] Add category spending limits with warnings
   - [ ] Add visualization (simple text-based bar charts)
   - [ ] Add import from CSV functionality

   CHALLENGING:
   - [ ] Add multi-user support (different files per user)
   - [ ] Add undo/redo functionality
   - [ ] Add advanced reporting (year-over-year comparison)
   - [ ] Add currency conversion support
   - [ ] Create a web interface using Flask

4. IMPROVE CODE QUALITY
   - [ ] Add docstrings to any methods you create
   - [ ] Add error handling for edge cases
   - [ ] Add input validation
   - [ ] Follow Python naming conventions

5. DOCUMENT YOUR WORK
   - [ ] Create a README.md explaining your additions
   - [ ] Comment complex sections
   - [ ] Add example usage

WHAT YOU'RE DEMONSTRATING:
✓ Classes and OOP (Transaction, FinanceTracker)
✓ File I/O and JSON (save/load functionality)
✓ Error handling (try/except blocks)
✓ Data structures (lists, dictionaries, defaultdict)
✓ List comprehensions and generators
✓ String formatting (f-strings)
✓ datetime module
✓ Function decomposition
✓ User interface design
✓ Data persistence

This project shows you can:
- Design and implement a complete application
- Use OOP principles appropriately
- Handle data persistence
- Create user-friendly interfaces
- Write maintainable, well-structured code
"""


if __name__ == "__main__":
    # Add some sample data for testing
    tracker = FinanceTracker("sample_finances.json")

    # Clear existing data for fresh demo
    tracker.transactions = []

    # Add sample transactions
    tracker.add_transaction(5000, "Salary", "Monthly salary", "income")
    tracker.add_transaction(1200, "Housing", "Rent payment", "expense")
    tracker.add_transaction(500, "Food", "Groceries and dining", "expense")
    tracker.add_transaction(100, "Transport", "Gas and parking", "expense")
    tracker.add_transaction(200, "Entertainment", "Movies and games", "expense")
    tracker.add_transaction(150, "Utilities", "Electric and water", "expense")
    tracker.add_transaction(50, "Gift", "Birthday gift", "income")

    print("Sample data created in 'sample_finances.json'")
    print("Generating sample report...\n")
    tracker.generate_report()

    print("\nNow try running: main()")
    print("Or start customizing the code with your own features!")

print("\n" + "="*60)
print("CONGRATULATIONS ON COMPLETING THE COURSE!")
print("="*60)
print("\nYou now have:")
print("✓ A solid foundation in Python")
print("✓ Portfolio project demonstrating your skills")
print("✓ Ability to read and write Python code professionally")
print("\nNext steps:")
print("1. Complete and enhance this capstone project")
print("2. Share it on GitHub as portfolio piece")
print("3. Practice by building more small projects")
print("4. Contribute to open source projects")
print("5. Keep coding every day!")
print("\nYou're ready for that job. Good luck! 🎉")
