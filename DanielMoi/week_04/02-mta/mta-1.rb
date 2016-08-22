# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.


###### Is it bad practice to have the program reliant on where functions and variables are defined?
require 'rainbow'


LINES = {
  "N" => ["34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


# could do distance = start_index - end_index
# and then do distance.abs to convert that to a positive integer

@arr_a = []
@arr_b = []
@arr_total = []

############################################################################

def get_start_line
  print "Which line are you starting at? (N, L, 6) "
  @start_line = gets.chomp.upcase

  while LINES[@start_line] == nil
    puts Rainbow("You've misspelld something. Try again. ").red
    get_start_line
  end

  get_start_station
end

def get_start_station
  print "Which station are you at? (#{LINES[@start_line].join ', '}) "
  @start_station = gets.chomp

  while LINES[@start_line].index(@start_station) == nil
    puts Rainbow("You've misspelld something. Try again. ").red
    get_start_station
  end

  get_end_line
end


def get_end_line
  print "Which line are you travelling to? (N, L, 6) "
  @end_line = gets.chomp.upcase

  while LINES[@end_line] == nil
    puts Rainbow("You've misspelld something. Try again. ").red
    get_end_line
  end

  get_end_station
end

def get_end_station
  print "Which station? (#{LINES[@end_line].join ', '}) "
  @end_station = gets.chomp

  if LINES[@start_line].index(@start_station) == LINES[@end_line].index(@end_station) && LINES[@start_line] == LINES[@end_line]
    puts Rainbow("Um, you've arrived. C'mon, let's try again.").green
    get_start_line
  end

  while LINES[@end_line].index(@end_station) == nil
    puts Rainbow("You've misspelld something. Try again. ").red
    get_end_station
  end
end


############################################################################
def single_line_forward
  @arr_total = LINES[@start_line][@start_index + 1 .. @end_index]
end

# Could .reverse instead of changing range
def single_line_reverse
  @arr_total = LINES[@start_line][@end_index + 1 .. @start_index]
  @arr_total.reverse!
end
############################################################################

def two_line_a_forward
  @arr_a = LINES[@start_line][@start_index + 1 .. @union_index_a]

end

############################################################################

def two_line_a_reverse
  @arr_a = LINES[@start_line][@union_index_a .. @start_index - 1]
  @arr_a.reverse!

end

############################################################################

def two_line_b_forward
  @arr_b = LINES[@end_line][@union_index_b + 1 .. @end_index]
end

############################################################################

def two_line_b_reverse
  @arr_b = LINES[@end_line][@end_index .. @union_index_b - 1]
  @arr_b.reverse!

end

############################################################################
def journey_single(arr)
  arr = arr.join ', '
  puts Rainbow("*******************************************************").yellow
  puts Rainbow("Get on at #{@start_station} on the #{@start_line} line").orange
  puts Rainbow("Stops (#{@arr_total.size}) = #{arr}").orange
  puts Rainbow("Get off at #{@end_station} on the #{@start_line} line").green
  puts Rainbow("*******************************************************").yellow
end

def journey_two_a(arr)
  arr = arr.join ', '
  puts Rainbow("*******************************************************").yellow
  puts Rainbow("Get on at #{@start_station} on the #{@start_line} line").orange
  puts Rainbow("Stops (#{@arr_a.size}) = #{arr}").orange
  puts Rainbow("Get off at Union Square").red
end

def journey_two_b(arr)
  arr = arr.join ', '
  puts Rainbow("Change to the #{@end_line} line").orange
  puts Rainbow("Stops (#{@arr_b.size}) = #{arr}").orange
  puts Rainbow("Get off at #{@end_station}").red
  puts Rainbow("*******************************************************").yellow
end

############################################################################
def start
  puts "\e[H\e[2J"
  puts Rainbow("*******************************************************").yellow
  puts "     _________"
  puts "     |  _  |    __"
  puts "    _| | | |____\\/_"
  puts "   |   |_| |       \\ "
  puts "   |   __  |  _  _  |"
  puts "   |__/  \\_|_/ \\/ \\/"
  puts "      \\__/   \\_/\\_/ "
  puts " "

  puts Rainbow("Welcome to the GA MTA TP").red
  get_start_line
end

############################################################################

start

@start_index = LINES[@start_line].index(@start_station)
@union_index_a = LINES[@start_line].index("Union Square")
@union_index_b = LINES[@end_line].index("Union Square")
@end_index = LINES[@end_line].index(@end_station)

############################################################################
# Journey on single line
if @start_line == @end_line

  # Travelling forward
  if @end_index > @start_index
    journey_single(single_line_forward)

  # Travelling reverse
  else
    journey_single(single_line_reverse)
  end

# Journey on 2 lines
else

  # First leg forward
  if @union_index_a > @start_index
    journey_two_a(two_line_a_forward)

  # First leg reverse
  else
    journey_two_a(two_line_a_reverse)

  end

  # Second leg forward
  if @end_index > @union_index_b
    journey_two_b(two_line_b_forward)

  # Second leg reverse
  else
    journey_two_b(two_line_b_reverse)

  end

end




require 'pry'
binding.pry
