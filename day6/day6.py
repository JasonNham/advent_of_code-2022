

# input = open("input.txt", "r")
# with open('input.txt', 'r') as file:
#     input2 = file.read().replace('\n', '')

# for c in input:
#     print(c + "\n")

# test = str(input)

# def unique(s):
#     uchars = set()
#     for c in s:
#         if c in uchars:
#             return False
#         uchars.add(c)
#     return True

# def day6(string, marker):
#     test = 0
#     if not unique(string[0:4]):
#         return day6(string[1:len(string)], marker + 1)
#     return marker

# print(day6(input2, 4))
# stri = "hlfhfzffqnnrlmnvnmmgbgwgttbppcrcnnmdmfdmmgwwr"

# print(day6(stri, 4))
# if not unique(stri[4:len(stri)]):
#     print(stri[4:len(stri)])

# print(unique(stri[0:4]))





with open('input.txt', 'r') as f:
    elf_comms = f.read()

def findMarker(signal, marker_length):
   for i in range(len(signal)-(marker_length-1)):
    marker =  signal[i:i+marker_length]
    if len(set(marker)) == marker_length:
        return i+marker_length

print("Position of first marker:", findMarker(elf_comms, 4)) # part one