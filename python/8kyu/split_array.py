"""
Create a method partition that accepts a list and a method/block. It should return two arrays: the first, with all the elements for which the given block returned true, and the second for the remaining elements.

Here's a simple Ruby example:

animals = ["cat", "dog", "duck", "cow", "donkey"]
partition(animals){|animal| animal.size == 3}
    #=> [["cat", "dog", "cow"], ["duck", "donkey"]]
The equivalent in Python would be:

animals = ['cat', 'dog', 'duck', 'cow', 'donkey']
partition(animals, lambda x: len(x) == 3)
    # (['cat', 'dog', 'cow'], ['duck', 'donkey'])
"""


from itertools import filterfalse


def partition(lis, classifier_method):
    fir = list(filter(classifier_method, lis))
    sec = list(filterfalse(classifier_method, lis))
    return (fir, sec)
