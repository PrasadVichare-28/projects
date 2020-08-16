def reg():
      username =input("enter username:")
      password =input("password:")
      for line in open("cred.txt","r").readlines():
          line=line.rstrip()
          word=line.split(":")
          if username==word[0]:
              print("username already exist")
              print(initiate_login())
              return True
          continue
      else:
          file=open("cred.txt","a")
          file.write(username+":"+password+"\n")
          print("user created")
          file.close()
          print(initiate_login())



def initiate_login():
    print("login(y/n)")
    choice=input("enter(y/n)")
    if choice=="y":
        print("login initiating...")
        print(login())
    elif choice=="n":
        print("Thank you for registering")
    else:
        print("enter valid input")


def login():
    username =input("enter username:")
    password =input("password:")
    for line in open("cred.txt","r").readlines():
        line=line.rstrip()
        word=line.split(":")
        if username==word[0] and password==word[1]:
            print("login successful")
            return True
        continue
    else:
        print("please enter valid details")
        return False

print("welcome")
print("select below options")
print("1.register")
print("2.login")
option=input("please select (1/2)")
if option=="1":
    print(reg())
elif option=="2":
    print(login())
else:
    print("select appropriate option")
