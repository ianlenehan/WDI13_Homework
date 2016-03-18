def home
  main_menu
  menu_choice = get_user_selection("Please enter your selection: ").downcase
  until menu_choice == "q"
    case menu_choice
    when 'b'
      basic_calculator
    when 'a'
      advanced_calculator
    when 's'
      specialty_calculator
    else
      puts "Invalid Selection"
    end
    main_menu
    menu_choice = get_user_selection("Please enter your selection: ").downcase
  end
end


def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(s) - specialty calculator"
  puts "(q) - quit"
end


def basic_menu
  puts "(a) - arithmetic"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(q) - quit"
end

def advanced_menu
  puts "(e) - exponent"
  puts "(s) - square root"
  puts "(q) - quit"
end

def specialty_menu
  puts "(b) - BMI calculator"
  puts "(m) - mortgage calculator"
  puts "(t) - trip computer"
  puts "(q) - quit"
end


def get_user_selection(message)
  print message
  gets.chomp
end


def basic_calculator
  basic_menu
  menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (a, s, m, or d) ").downcase

  until menu_choice == "q"
    case menu_choice
    when "a"
      basic_arithmetic
    when "s"
      basic_subtraction
    when "m"
      basic_multiplication
    when "d"
      basic_division
    else
      puts "Invalid selection"
    end
    basic_menu
    menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (a, s, m, or d) ").downcase
  end
end

def advanced_calculator
  advanced_menu
  menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (s or e) ").downcase
  until menu_choice == 'q'
    case menu_choice
    when "s"
      advanced_square_root
    when "e"
      advanced_exponent
    else
      puts "Invalid choice"
    end
    advanced_menu
    menu_choice = get_user_selection("Please enter the type of calculating you'd like to do (s or e) ").downcase
  end
end

def specialty_calculator
  specialty_menu
  menu_choice = get_user_selection("Please enter the type of calculator you'd like to use (b, m or t) ").downcase
  until menu_choice == "q"
    case menu_choice
    when "b"
      specialty_bmi
    when "m"
      specialty_mortgage
    when "t"
      specialty_trip
    else
      puts "Invalid choice"
    end
    specialty_menu
    menu_choice = get_user_selection("Please enter the type of calculator you'd like to use (b, m or t) ").downcase
  end
end


def get_number
  @number = gets.to_f
end

def basic_arithmetic
  print "Enter the first number you'd like to add: "
  first_number = get_number
  print "Enter the second number you'd like to add: "
  second_number = get_number
  puts "#{first_number} + #{second_number} is #{first_number + second_number}"
end

def basic_subtraction
  print "Enter the number you'd like to start with: "
  first_number = get_number
  print "Enter the number you'd like to subtract from the starting number: "
  second_number = get_number
  puts "#{first_number} - #{second_number} is #{first_number - second_number}"
end

def basic_multiplication
  print "Enter the first number to multiply: "
  first_number = get_number
  print "Enter the second number to multiply: "
  second_number = get_number
  puts "#{first_number} * #{second_number} is #{first_number * second_number}"
end

def basic_division
  print "Enter the number you'd like to divide: "
  first_number = get_number
  print "What would you like to divide it by? "
  second_number = get_number
  puts "#{first_number} / #{second_number} is #{first_number / second_number}"
end

def advanced_square_root
  print "Enter the number you want to find the square root of: "
  number = get_number
  puts "The square root of #{number} is #{Math.sqrt(number)}"
end

def advanced_exponent
  print "Enter the number you want to exponentialise: "
  number = get_number
  print "Enter the exponent: "
  exponent = get_number
  puts "#{number} to the power of #{exponent} is #{number ** exponent}"
end

def specialty_bmi
  print "Please enter your height in cm: "
  height = get_number / 100
  print "Enter your weight in kg: "
  weight = get_number
  puts "Your BMI is #{weight / (height ** 2)}"
end

def specialty_trip
  print "What is the trip distance in miles? "
  distance = get_number
  print "What is your fuel consumption in miles per gallon? "
  mpg = get_number
  print "What does a gallon of fuel cost? $"
  ppg = get_number
  print "What is your speed mph? "
  speed = get_number
  t = distance / speed
  puts "The trip will take you #{(t - t%1).to_i } hours and #{(t%1 * 60).to_i} minutes"
  puts "The trip will cost you $#{'%.2f' % (distance / mpg * ppg)}"
end

def specialty_mortgage
  print "What is the current interest rate per year as a percentage? "
  int_rt = get_number / 12 / 100
  print "How many years is your mortgage for? "
  nper = get_number * 12
  print "What is the value of your mortgage? "
  pv = get_number
  maths_bit = (1 + int_rt) ** nper
  monthly = pv * ((int_rt * maths_bit) / (maths_bit -1))
  total = monthly * nper
  interest = total - pv
  puts "Your monthly payment is $#{'%.2f' % monthly}"
  puts "You will pay back a total of #{'%.2f' % total}"
  puts "You will pay #{'%.2f' % interest} in interest"
end


home
