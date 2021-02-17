from typing import List
""" Option Classes Version 0.1. 
This file was created to serve as a precursor to a python program that analyses
the value of certain options portfolios and combinations.

This file is still a work in progress and does not reflect the final product.

All files in this directory and all subdirectories are Copyright (c) 2021
by Kevin Didi
"""


class Option:
    """ A standard option with a custom name. Also includes type (call/put), 
    position (long/short), strike price, and option premium/price.
    """
    def __init__(self, option_type: str = 'call', 
                 position: str = 'long', strike_price: float = 100,
                 price: float = 0) -> None:
        """ Initialize an option, specifying its type,
        the position taken, the strike price, and premium/price, if applicable.
        
        Default values (if empty upon initialization):
        option_type: 'call'
        position: 'long'
        strike_price: 100
        premium/price: 0
        
        >>> trade_one = Option('put', 'short', 50, 2.4)
        >>> trade_two = Option()
        >>> trade_one.option_type
        'put'
        >>> trade_two.position
        'long'
        >>> trade_two.strike_price
        100
        >>> trade_one.price
        2.4
        """
        
        self.option_type = option_type
        self.position = position
        self.strike_price = strike_price
        self.price = price
        
    def __str__(self) -> str:
        """ Return a short representation of the option
        """
        
        return self.position + " " + self.option_type + \
               " contract, with strike price $" + str(self.strike_price) + \
               " and option price $" + str(self.price) 
            
    def __repr__(self) -> str:
        """ Return a list of option details
        """
        
        return "Contract Type: " + self.position + " " + \
               self.option_type + "\n Strike Price: $" + str(self.strike_price) + \
               "\n Option Price: $" + str(self.price) + "\n"
    
    def __eq__(self, other: 'Option') -> bool:
        """ Return true iff an option has the same type, position, and
        strike price. The option may have a different premium/price.
        """
        
        return (self.option_type == other.option_type) \
               and (self.position == other.position) \
               and (self.strike_price == other.strike_price)

class Portfolio:
    def __init__(self, options: List = [Option()], shares: bool = False) -> None:
        """ Initialize a portfolio with a list of options and the underlying
        asset, if shares is set to True.
        If no options were provided, a default option is created and added to
        the portfolio. If no asset information was provided, the portfolio
        defaults to False, and contains only options.
        """
        
        self.options = options
        self.shares = shares
        self.num_options = len(options)
        
    def add_options(self, option: "Option") -> None:
        """ Add a new option to the portfolio.
        """
        
        self.options.append(option)
        self.num_options += 1
        
    def change_position(self, shares: bool) -> None:
        """
        """
        
        self.shares = shares
    
    def __str__(self) -> str:
        """ Return a short string representation of the portfolio
        """
        
        if self.shares:
            underlying = "and the underlying asset"
        else:
            underlying = ""
        
        new = ""
        for option in self.options:
            new = new + str(option) + "\n"
        new = "[ \n" + new + " ] \n"
            
        return new + " is a portfolio with " + str(self.num_options) + \
               " options " + underlying
        
    def __repr__(self) -> str:
        """ Return a detailed listing of assets and derivatives in the portfolio
        """ 
        
        if self.shares:
            underlying = "\n including the underlying asset"
        else:
            underlying = ""
            
        return str(self.num_options) + " options: \n" + str(self.options) + underlying
    
    
if __name__ == "__main__":
    
    testing = True
    if testing:
        trade_one = Option('put', 'short', 50, 2.40)
        trade_two = Option('put')
        trade_three = Option()
        trade_four = Option(price = 2)
        my_portfolio = Portfolio([trade_one, trade_two, trade_three, trade_four], shares = True)
        print(my_portfolio)
        
        import doctest
        doctest.testmod()
    else:
        pass