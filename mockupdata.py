import random


# Breed weight ranges from http://modernpuppies.com/breedweightchart.aspx
average_range = {'corgi': (27, 38),'germanshepherd': (75, 95),'goldenretriever': (65, 75)}

for breed, weight_range in average_range.items():
	f = open('assets/' + breed + '.csv', 'w')
	f.write('age,weight\n')
	for i in range(300):
		factor = random.randint(weight_range[0],weight_range[1])
		age = random.randint(1, 90)
		weight = (factor*(age ** .5))//((age ** .5) + 1)
		f.write(str(age) + ',' + str(int(weight)) + '\n')

