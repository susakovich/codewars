"""
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
"""


def better_than_average(class_points, your_points):
    # Calculate the average score of your classmates
    average_score = sum(class_points) / len(class_points)

    # Compare your score to the average score
    return your_points > average_score
