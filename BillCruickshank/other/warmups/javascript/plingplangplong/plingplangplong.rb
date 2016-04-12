def plingplangplong(number)
  str = ""
  str << "pling" if number % 3 == 0
  str << "plang" if number % 5 == 0
  str << "plong" if number % 7 == 0
  str
end

def ppp
  print "what should I plingplangplongify? : "
  number = gets.to_i
  str = plingplangplong(number)
  unless str.empty?
    puts str
  else
    puts number.to_s
  end
end

ppp
