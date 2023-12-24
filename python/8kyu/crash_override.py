"""
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
"""


def alias_gen(f_name, l_name):
    # Check if the first character of both names is a letter
    if f_name[0].isalpha() and l_name[0].isalpha():
        # Capitalize the first letter of the names
        f_name = f_name.capitalize()
        l_name = l_name.capitalize()

        # Define dictionaries for the first and last name aliases
        first_name_alias = {
            "A": "Alpha",
            "B": "Beta",
            "C": "Cache",
            "D": "Data",
            "E": "Energy",
            "F": "Force",
            "G": "Gamma",
            "H": "Hacker",
            "I": "Ice",
            "J": "Java",
            "K": "Kernel",
            "L": "Logic",
            "M": "Matrix",
            "N": "Node",
            "O": "Omega",
            "P": "Pixel",
            "Q": "Quantum",
            "R": "Rogue",
            "S": "Syntax",
            "T": "Titan",
            "U": "Unit",
            "V": "Vortex",
            "W": "Wave",
            "X": "Xenon",
            "Y": "Byte",
            "Z": "Zero",
        }

        last_name_alias = {
            "A": "Assassin",
            "B": "Blaze",
            "C": "Cipher",
            "D": "Dynamo",
            "E": "Enigma",
            "F": "Flare",
            "G": "Ghost",
            "H": "Hydra",
            "I": "Inferno",
            "J": "Jolt",
            "K": "Kai",
            "L": "Laser",
            "M": "Maverick",
            "N": "Nebula",
            "O": "Orbit",
            "P": "Phantom",
            "Q": "Quasar",
            "R": "Raptor",
            "S": "Shadow",
            "T": "Thunder",
            "U": "Umbra",
            "V": "Viper",
            "W": "Wraith",
            "X": "Xero",
            "Y": "Ypsilon",
            "Z": "Zephyr",
        }

        # Get the first letter of each name
        first_letter_f_name = f_name[0]
        first_letter_l_name = l_name[0]

        # Get the corresponding aliases
        f_alias = first_name_alias.get(first_letter_f_name, "Unknown")
        l_alias = last_name_alias.get(first_letter_l_name, "Unknown")

        # Combine the aliases
        alias = f_alias + " " + l_alias

        return alias
    else:
        return "Your name must start with a letter from A - Z."


print(alias_gen("Danijel", "Susakovic"))
