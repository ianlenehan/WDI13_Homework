def main_menu
  puts "(o) - for operations"
  puts "(q) = for quit"
end

def get_user_selection(message)
  print message
  gets.chomp
end

def calculate_or_quit
  main_menu
  begin
    menu_choice = get_user_selection("o or q : ")
  end until menu_choice == 'o' or menu_choice == 'q'
  menu_choice
end

@previous = nil
@memory = nil

def valid_operator(o)
  o=='+' or o=='*' or o=='-' or o =='/' or o == '**'
end

def choose_operator
  puts "'+', '-', '*', '/' and '**' are your choices"
  begin
    menu_choice = get_user_selection("which operator do you choose? : ")
  end until valid_operator(menu_choice)
  menu_choice
end

def get_user_value(message)
  v = get_user_selection(message)
  case v
  when 'p'
    @previous
  when 'm'
    @memory
  else
    v.to_c
  end
end

def result_message(v, message)
  puts "#{message} #{v}"
  v
end


def add
  a = get_user_value("Augend : ").to_c
  b = get_user_value("Addend : ").to_c
  result_message(a+b, "The result of the addition is")
end

def subtract
  a = get_user_value("Minuend : ").to_c
  b = get_user_value("Subtrahend : ").to_c
  result_message(a-b, "The result of the subtraction is")
end

def multiply
  a = get_user_value("Multiplicand : ").to_c
  b = get_user_value("Multiplier : ").to_c
  result_message(a*b, "The result of the multiplication is")
end

def divide
  a = get_user_value("Divisor : ").to_c
  b = get_user_value("Dividend : ").to_c
  result_message(a/b, "The result of the division is")
end

def exponentiation
  a = get_user_value("Base : ").to_c
  b = get_user_value("Exponent : ").to_c
  result_message(a**b, "The result of the exponentiation is")
end

def operation_chooser(o)
  case o
  when '+'
    add
  when '-'
    subtract
  when '*'
    multiply
  when '/'
    divide
  when '**'
    exponentiation
  else
    puts '(⚆_⚆)'
  end
end

def memory_dialog
  print "save this value to memory? (y/n) : "
  choice = gets.chomp.downcase[0]
  if choice == 'y'
    @memory = @previous
    puts "You can use this value again by typing m when I ask for a value"
    puts "But remember, I only keep one value"
  else
    puts "Its in previous anyway. Access it with p when I ask for a value"
  end
end

def calculator
  choice = calculate_or_quit
  while choice == 'o'
    op = choose_operator
    @previous = operation_chooser op
    memory_dialog
    choice = calculate_or_quit
  end
end

calculator
