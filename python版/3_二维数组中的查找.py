# -*- coding:utf-8 -*-
'''
在一个二维数组中，每一行都按照从左到右递增的顺序排序
每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
'''

class Solution:
	def Find(self,array,target):
		if array == []:
			return False

		rownum = len(array)
		colnum = len(array[0])

		i = 0
		j = colnum - 1

		while i < rownum and j > 0:
			if target < array[i][j]:
				j -= 1
			elif target > array[i][j]:
				i += 1
			else:
				return True

		return False


array = [[1, 2, 8, 9],
         [2, 4, 9, 12],
         [4, 7, 10, 13],
         [6, 8, 11, 15]]
array2 = []
array3 = [['a', 'b', 'c'],
          ['b', 'c', 'd']]
array4 = [[62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80],[63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81],[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83],[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],[67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]]


findtarget = Solution()
print(findtarget.Find  不会后悔或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        (array, 10))
print(findtarget.Find(array, 30))
print(findtarget.Find(array, 13.0))
print(findtarget.Find(array, ''))
print(findtarget.Find(array2, 10))
print(findtarget.Find(array3, 'b'))
# print(findtarget.searchMatrix(array4, 81))



