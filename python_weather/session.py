l = []
number_of_l= int(input ("숫자"))
for index in range(number_of_l):
        i = input("학번, 이름 순 입력 : ")
        l.append(i)
l.sort(reverse=True)
for member in l:
        print(member)