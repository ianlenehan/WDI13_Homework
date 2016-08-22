require 'rainbow'

def main_menu
  puts Rainbow("***************").yellow
  puts Rainbow("MAIN MENU").yellow
  puts Rainbow("***************").yellow

  puts "(b) – Basic Calculator"
  puts "(a) – Advanced Calculator"
  puts "(bmi) – BMI Calculator"
  puts "(trip) – Trip Calculator"
  puts "(pain) – Mortgage Calculator"
  puts "(q) – Quit"
end


def get_user_selection(message)
  print message
  gets.chomp
end

## Basic calculator
def basic_calculator
  puts Rainbow("***************").green
  puts Rainbow("Basic Calculator").green
  puts Rainbow("***************").green

  puts "Available calculator functions: "
  puts "(a) – addition"
  puts "(s) – subtraction"
  puts "(m) – multiplication"
  puts "(d) – division"
  print "Which function do you want? "
  operation = gets.chomp
  print "Enter 1st number: "
  num1 = gets.to_f
  print "Enter 2nd number: "
  num2 = gets.to_f

  case operation
  when "a"
    func_add(num1, num2)
  when "s"
    func_subtraction(num1, num2)
  when "m"
    func_multiply(num1, num2)
  when "d"
    func_divide(num1, num2)
  else
    basic_calculator
  end
end

## Advanced calculator
def advanced_calculator
  puts Rainbow("***************").green
  puts Rainbow("Advanced Calculator").green
  puts Rainbow("***************").green

  puts "Available calculator functions: "
  puts "(e) – exponents"
  puts "(r) – radicals (square roots, etc)"
  print "Which function do you want? "
  operation = gets.chomp

  case operation
  when "e"
    print "Enter base: "
    num1 = gets.to_f
    print "Enter exponent: "
    exp = gets.to_f
    func_exponent(num1, exp)
  when "r"
    print "Enter radicand (the number inside the radical sign): "
    radicand = gets.to_f

    print "Enter index (the desired nth-root of #{radicand}): "
    index = gets.to_f
    func_radical(radicand, index)
  else
    advanced_calculator
  end
end

## BMI calculator
def bmi_calculator
  puts Rainbow("***************").green
  puts Rainbow("BMI Calculator").green
  puts Rainbow("***************").green

  print "Enter weight (kg): "
  weight = gets.to_f
  print "Enter height (cm): "
  height = gets.to_f

  bmi = weight / (height / 100) ** 2

  puts Rainbow("A weight of #{weight} kg and a height of #{height} cm gives a BMI of #{bmi.round(2)} kg/m2").red
end


## Trip calculator
def trip_calculator
  puts Rainbow("***************").green
  puts Rainbow("Trip Calculator").green
  puts Rainbow("***************").green

  print "Enter distance (miles): "
  distance = gets.to_f
  print "Miles per gallon: "
  mpg = gets.to_f
  print "Price per gallon ($): "
  price = gets.to_f
  print "Speed (mph): "
  speed = gets.to_f

  duration = distance / speed
  gallons_used = distance / mpg
  cost = gallons_used * price

  puts Rainbow("Your trip time will be #{duration.round(1)} hours").red


  puts Rainbow("Your trip will cost $#{cost.round(2)} ").red


end

## Mortgage calculator
def mortgage_calculator
  # http://www.intmath.com/money-math/3-math-of-house-buying.php
  puts Rainbow("***************").green
  puts Rainbow("Mortage Calculator").green
  puts Rainbow("***************").green

  print "Enter Loan Amount (principal) ($): "
  principal = gets.to_f

  print "Enter interest rate (%): "
  rate_per_month = gets.to_f / 100 / 12

  print "Enter duration of loan (years): "
  years = gets.to_f
  payment_number = years * 12

  repayment_per_month = principal * rate_per_month / (1 - ((1 + rate_per_month) ** - payment_number))

  # number_to_currency(x) ??
  # sprintf('%.2f', number) ??

  puts Rainbow("Your payment per month is $#{repayment_per_month.round(2)}").red

end

## Basic functions
def func_add(a,b)
  puts Rainbow("#{a} plus #{b} is #{a + b}").red
end

def func_subtraction
  puts Rainbow("#{a} plus #{b} is #{a - b}").red
end

def func_multiply
  puts Rainbow("#{a} multiplied by #{b} is #{a * b}").red
end

def func_divide
  puts Rainbow("#{a} divided by #{b} is #{a / b}").red
end


## Advanced functions
def func_radical(radicand, index)
  answer = radicand ** (1 / index)
  case index
  when 2
    puts Rainbow("The square root of #{radicand} is #{ answer }").red
  when 3
    puts Rainbow("The cube root of #{radicand} is #{ answer }").red
  else
    puts Rainbow("The #{index}-th root of #{radicand} is #{ answer }").red
  end

end

def func_exponent(a, b)
  puts Rainbow("#{a} to the power of #{b} is #{a ** b}").red
end


## Let's Go!
main_menu

menu_choice = get_user_selection("Please enter your selection: ").downcase


# How does this actually cause a quit?
until (menu_choice == "q")

  case menu_choice
  when "b"
    basic_calculator
  when "a"
    advanced_calculator
  when "bmi"
    bmi_calculator
  when "trip"
    trip_calculator
  when "pain"
    mortgage_calculator
  else
    puts Rainbow("Invalid selection").red
  end

  main_menu
  menu_choice = get_user_selection("Please enter your selection: ").downcase
end

puts "Hello"
