'''
请实现一个函数，将一个字符串中的空格替换成“%20”。
例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
'''

# -*- coding:utf-8 -*-


class Solution:
# 使用append一次遍历即可替换
# 由于list的append是O(1)的时间复杂度，除了扩容所导致的时间损耗，该算法复杂度为O(n)
	def replaceSpacebyappend(self,str):
		tmpstr = list(str)
		newstr = []
		for i in tmpstr:
			if i == " ":
				newstr.append("%")
				newstr.append("2")
				newstr.append("0")
			else:
				newstr.append(i)
		return "".join(newstr)

# 创建新的字符串进行替换
	def replaceSpace1(self,str1):
		if type(str1) != str:
			return False
		newstr = ""
		for i in str1:
			if i == " ":
				newstr += "%20"
			else:
				newstr += i
		return newstr

# 简单代码替换
# 在Python中str类型是不可变的类型, 使用replace语句会生成一个新的str, 原始的s还是带空格的str变量
	def replaceSpace2(self,str2):
		if type(str2) != str:
			return False	
		return str2.replace(" ","%20")

# 书中给的思路
# 判断输入类型的时候，isinstance必须首先判断，因为如果输入为integer的话，没有len，就会直接报错

	def replaceSpace3(self,str3):
		if not isinstance(str3,str) or len(str3) <= 0 or str3 == None:
			return ""
		spaceNum = 0
		for i in str3:
			if i == " ":
				spaceNum += 1

		newstrlen = len(str3) + 2 * spaceNum
		newstr = newstrlen * [None]
		index_Ori,index_New = len(str3)-1,len(newstr)-1
		while index_New >= 0 and index_New >= index_Ori:
			if str3[index_Ori] == " ":
				newstr[index_New-2:index_New+1] = ["%","2","0"]
				index_New -= 3
				index_Ori -= 1
			else:
				newstr[index_New] = str3[index_Ori]
				index_New -= 1
				index_Ori -= 1
		return "".join(newstr)			

s = Solution()
ans = s.replaceSpace3('hello world haha')
print(ans)
