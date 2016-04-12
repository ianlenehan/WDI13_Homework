def main_menu
  puts "(b) - basic calculator"
  puts "(a) - advanced calculator"
  puts "(m) - mortgage calculator"
  puts "(t) - trip calculator"
  puts "(bmi) - BMI calculator"
  puts "(q) - quit"
end

def get_user_selection(message)
  print message
  gets.chomp
end

def basic_calculator
  print "Please enter a calculation: "
  calc = gets
  puts eval calc
end

def adv_calculator
  puts "(e) - exponent"
  puts "(s) - square root"
  print "Please select a calculation type: "
  type = gets.chomp
  print "Please type a number for your calculation: "
  num = gets.to_i

  if type == 'e'
    result = num * num
  else
    result = Math.sqrt(num).to_i
  end
  puts result
end

def mortgage_calculator
  print "Mortgage amount: "
  amount = gets.to_i
  print "Annual interest rate: "
  rate = gets.to_f
  print "Term (years): "
  term = gets.to_i

  monthly_rate = (rate / 12) / 100
  monthly_repayments = (monthly_rate * amount) / (1 - (1 + monthly_rate) ** (-term * 12))
  puts "Your monthly replayments will be $#{monthly_repayments.to_i}."
end

def bmi_calculator
  print "Your height (metres): "
  height = gets.to_f
  print "Your weight (kg): "
  weight = gets.to_f
  bmi = (weight/height) / height

  puts "Your BMI is #{bmi.to_i}."
end

def trip_calculator
  print "How far will you travel (miles)? "
  distance = gets.to_i
  print "How many miles do you get per gallon? "
  mpg = gets.to_i
  print "What is the price per gallon? "
  ppg = gets.to_f
  print "How fast will you be travelling (mph)? "
  speed = gets.to_i

  trip_time = distance / speed
  gallons_req = distance / mpg
  cost = gallons_req * ppg

  puts "This trip will take you #{trip_time} hours and will cost you $#{cost}."
end

main_menu
menu_choice = get_user_selection(print "Please enter your selection: ").downcase

until menu_choice == 'q'
  case menu_choice
  when 'b'
    basic_calculator
  when 'a'
    adv_calculator
  when 'm'
    mortgage_calculator
  when 't'
    trip_calculator
  when 'bmi'
    bmi_calculator
  else
    puts "Invalid Selection"
  end

  main_menu
  menu_choice = get_user_selection(print "Please enter your selection: ").downcase
end
