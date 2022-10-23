#Example: Using Dictionary with Map()

car_dict ={'a': 'Mercedes-Benz', 'b': 'BMW', 'c': 'Ferrari', 'd': 'Lamborghini', 'e': 'Jeep'}

# adding an '_' to the end of each value

car_dict = dict(map(lambda x: (x[0], x[1] + '_'), car_dict.items() ))

print('The modified dictionary is : ')

print(car_dict)

# output:-
# { ?? }
