my_tuple = ('F', 'I', 'a', 'b', 'b', 'e', 'r', 'g', 'a', 's', 't', 'e', 'd')

# (i) Add an exclamation mark (!) at the end
new_tuple = my_tuple + ('!',)  # Tuples are immutable, so we create a new one

# (ii) Convert tuple to string
my_string = ''.join(my_tuple)

# (iii) Extract ('b', 'b')
extracted_subtuple = my_tuple[3:5]  # Slicing to get elements at index 3 and 4

# (iv) Find occurrences of ('e')
count_e = my_tuple.count('e')

# (v) Check if ('r') exists
is_r_present = 'r' in my_tuple

# (vi) Convert tuple to list
my_list = list(my_tuple)  # Convert to list for modification

# (vii) Delete characters from the list (not directly applicable to tuples)
for char in ('b', 'e', 'r'):
  my_list.remove(char)  # Remove characters from the list

# Convert modified list back to tuple (optional)
modified_tuple = tuple(my_list)

# Print the results
print("Original tuple:", my_tuple)
print("Tuple with exclamation mark:", new_tuple)
print("String from tuple:", my_string)
print("Extracted subtuple:", extracted_subtuple)
print("Count of 'e':", count_e)
print("Is 'r' present:", is_r_present)
print("List from tuple:", my_list)
print("Modified tuple (after modifying list):", modified_tuple)  # This line is optional
