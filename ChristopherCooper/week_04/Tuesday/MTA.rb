require 'pry'

lines = {
  "N" => {
    :stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  },

  "L" => {
    :stops => ['8th', '6th', 'Union Square', '3rd', '1st']
  },

  "6" => {
    :stops => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
}


puts "Pick a Starting Line"
start_line = gets.chomp.to_s
#
puts "Pick a Starting Station"
start_station = gets.chomp.to_s

puts "Pick a Ending Line"
end_line = gets.chomp.to_s

puts "Pick a Ending Station"
end_station = gets.chomp.to_s
#
#
start_leg = lines[start_line].values.flatten.index(start_station).to_i
end_leg = lines[start_line].values.flatten.index(end_station).to_i

start_union_square = lines[start_line].values.flatten.index("Union Square").to_i
end_union_square = lines[end_line].values.flatten.index("Union Square").to_i

if start_line == end_line
  if end_leg > start_leg
    print lines[start_line][:stops][start_leg..end_leg]
  else
    print lines[start_line][:stops][start_leg..end_leg].reverse
  end
else
  if start_union_square > start_leg
    print lines[start_line][:stops][start_leg..start_union_square]
  else
    print lines[start_line][:stops][start_leg..start_union_square].reverse
  end

  if end_union_square > end_leg
    print lines[end_line][:stops][end_leg..end_union_square].reverse
  else
    print lines[end_line][:stops][end_leg..end_union_square]
  end
end



binding.pry
