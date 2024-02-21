"""
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
"""

import datetime


def unlucky_days(year):
    unlucky_count = 0
    for month in range(1, 13):
        if (
            datetime.date(year, month, 13).weekday() == 4
        ):  # Friday is represented by 4 in Python's datetime module
            unlucky_count += 1
    return unlucky_count
