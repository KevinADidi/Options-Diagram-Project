from options.optionsclasses import Option, Portfolio

""" Options Portfolio Evaluator Version 0.1. 
This file was created to serve as a precursor to a Python program that analyses
the value of certain options portfolios and combinations.

This file is still a work in progress and does not reflect the final product.

All files in this directory and all subdirectories are Copyright (c) 2021
by Kevin Didi
"""

def analyze_payoff(assets: "Portfolio", price: float) -> float:
    """
    """
    payoff = 0
    for contract in assets.options:
        payoff += (contract.num_contracts * option_payoff(price, contract))

    if assets.shares:
        payoff += price
    
    return payoff

def analyze_profit(assets: "Portfolio", price: float) -> float:
    """
    """
    profit = 0
    for contract in assets.options:
        payoff = (contract.num_contracts * option_payoff(price, contract))
        cost = (contract.num_contracts * contract.price)
        profit += (payoff - cost)
    
    if assets.shares:
        open_price = 0
        profit += (price - open_price)
    
    return profit

def option_payoff(price: float, option: "Option") -> float:
    """ Return the payoff of a single option given the asset price, strike
    price, type (call or put), and position (long or short).
    """
    if option.option_type == "call":
        if option.position == "long":
            return max(0, price - option.strike_price)
        else:
            return min(0, price - option.strike_price)
    elif option.option_type == "put":
        if option.position == "long":
            return max(0, option.strike_price - price)
        else:
            return min(0, option.strike_price - price)