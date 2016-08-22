symbol_values = {
  :i => 1,
  :v => 5,
  :x => 10,
  :l => 50,
  :c => 100,
  :d => 500,
  :m => 1000
}

def digits_array (n)
  digits = []
  while n > 0
    digits.push(n%10)
    n = n/10
  end
  return digits
end

def digit_to_symbol (d, ones, fives, tens)
  return "" if d == 0
  return ones*d if d <= 3
  return ones+fives if d == 4
  return ones+tens if d == 9
  return fives+(ones*(d-5))
end

def roman_units (d)
  return digit_to_symbol(d, 'I', 'V', 'X')
end

def roman_tens (d)
  return digit_to_symbol(d, 'X', 'L', 'C')
end

def roman_hundreds (d)
  return digit_to_symbol(d, 'C', 'D', 'M')
end

def roman_thousands(d)
  return 'M'*d
end

def roman (n)
  digits = digits_array (n)
  if digits.size > 4
    return "I can't really handle that, sorry"
  end
  digits = digits + [0] *(4-digits.size)
  string = ""
  string << roman_thousands(digits[3])
  string << roman_hundreds(digits[2])
  string << roman_tens(digits[1])
  string << roman_units(digits[0])
  puts string
end

print "Gimme a number that you want me to convert to roman numerals : "
roman(gets.chomp.to_i)
