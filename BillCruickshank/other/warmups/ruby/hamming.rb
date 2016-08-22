require 'pry'

def hamming(string1, string2)
  if string1.size != string2.size
    return nil
  end
  string1.chars.zip(string2.chars).select {|e| e[0] != e[1]}.size
end

def call_and_response(message)
  print message
  gets.chomp
end

def inputter
  puts "Let me calculate the hamming distance between two strings."
  string1 = call_and_response "Gimme the first string : "
  string2 = call_and_response "Gimme the second string : "
  distance = hamming(string1, string2)
  if distance
    puts "The distance was #{distance}"
  else
    puts "Those strings weren't the same length, so... not really doable, sorry."
  end
end

inputter
