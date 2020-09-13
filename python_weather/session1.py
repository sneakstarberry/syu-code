list1 = []
maxlengthlist = int(input("팀원 수 : "))
while len(list1) < maxlengthlist:
        item=input("학번과 이름 : ")
        list1.append(item)
list1.sort()
for member in list1:
        print(member)