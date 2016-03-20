# 3. Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What suburb do you live in? : "
suburb = gets.chomp.downcase

case suburb
when "newtown"
  puts "I am not here to judge"
when "bondi"
  puts "I am here to judge"
when "mosman"
  puts "ooh la la"
else
  puts "I'm sure that's a nice place to live"
end
