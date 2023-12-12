"""
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?
"""


def eval_object(v):
    operation = v.get("operation")

    if operation == "+":
        return v["a"] + v["b"]
    elif operation == "-":
        return v["a"] - v["b"]
    elif operation == "/":
        return v["a"] / v["b"]
    elif operation == "*":
        return v["a"] * v["b"]
    elif operation == "%":
        return v["a"] % v["b"]
    elif operation == "**":
        return v["a"] ** v["b"]
    else:
        return 1
