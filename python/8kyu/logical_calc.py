"""
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).
"""


def logical_calc(array, op):
    if op == "AND":
        result = all(array)
    elif op == "OR":
        result = any(array)
    elif op == "XOR":
        result = sum(array) % 2 == 1
    else:
        raise ValueError(
            "Invalid operator. Supported operators are 'AND', 'OR', and 'XOR'."
        )

    return result
