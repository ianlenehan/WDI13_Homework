def raindrops(number)

  str = ""

  # THE LONG WAY OF DOING IT - IF STATEMENTS

  # if number % 3 == 0
  #   str += "Pling"
  # end
  # if number % 5 == 0
  #   str += "Plong"
  # end
  # if number % 7 == 0
  #   str += "Plang"
  # end
  #
  # if str.empty?
  #   return number.to_s
  # else
  #   return str
  # end

  # A CLEANER WAY TO DO IT, USING INLINE IF/UNLESS AND APPEND (<<)

  str << "Pling" if number % 3 == 0
  str << "Plang" if number % 5 == 0
  str << "Plong" if number % 7 == 0

  return str unless str.empty?
  # Ruby has an implicit return, but we'll use an explicit return to leave the method without running the line below unless the string is empty
  return number.to_s

end

# Give the user a prompt to enter a number
puts "What number do you want to convert to raindrops? "
# Store the user's input in a variable called "number", and convert the string input to an integer
number = gets.to_i
# Put the result of the raindrops method when we pass in that number variable
puts raindrops(number)
