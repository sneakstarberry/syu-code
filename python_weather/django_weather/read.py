fname = "./readfile.txt"

lines = [line.rstrip('\n') for line in open(fname)]

print(lines)