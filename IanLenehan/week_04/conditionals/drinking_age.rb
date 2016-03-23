# Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.


  # print " ruby> "
  # input = gets
  # if input.to_i < 18
  # puts "You are underage"
  # elsif input.to_i >= 18
  # puts "Come on in"
  # end

print "Please enter your age: "
  age = gets.to_i

  if age < 18
    puts "an appropriate message"
  else
    puts "a different message"
end
