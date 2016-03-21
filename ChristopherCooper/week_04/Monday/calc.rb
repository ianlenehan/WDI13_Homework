
def main_menu
 puts "(b) - basic calculator"
 puts "(a) - advanced calculator"
 puts "(q) - quit"
end

class sqrt
  def sqrt; Math.sqrt(self);
end

#   def sin; Math.sin(self); end
#   def cos; Math.cos(self); end
#   def tan; Math.tan(self); end
#   def log10; Math.log10(self); end
# end

def get_user_selection(message)
 print message
 gets.chomp
end

def basic_calculator
operation = puts "What operation do you want to do?"
puts " * = Multiplcation"
puts " / = Division"
puts " + = Addition"
puts " - = Subtraction"

home = true

while home == true
 solve = gets
  if solve.chomp == "q"
    home = false
  else
    puts eval(solve)
  end
 end
end

def advanced_calculator
operation = puts "What operation do you want to do?"



home = true

while home == true
 solve = gets
  if solve.chomp == "q"
    home = false
  else
    puts eval(solve).to_i
  end
 end
end

main_menu
menu_choice = get_user_selection("Please enter your selection: ").downcase

until menu_choice == "q"
 case menu_choice
 when "b"
   basic_calculator
 when "a"
   advanced_calculator
 else
   puts "Invalid selection"
 end

 main_menu
 print "Please enter your selection: "
 menu_choice = gets.chomp.downcase
end
