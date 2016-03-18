LINES = {
  "N Line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L Line" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6 Line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "Please choose a line: "
@from_line = gets.chomp
print "From station: "
@from_stop = gets.chomp
print "To Line: "
@to_line = gets.chomp
print "To station: "
@to_stop = gets.chomp
@trip_array = []

# check if the line exists by lookng into the LINES hash to see if there is a key with the same name
def line_exists(line)
  LINES.key?(line)
end

# check the stop exists on that line by checking to see if that array includes a stop by that name
def stop_exists(stop, line)
  LINES[line].include? stop
end

# create a function that evaluates each leg separately
def single_trip_array (from_stop, line, to_stop)
  # find the positions/index of each stop on the line
  from_index = LINES[line].index(from_stop)
  to_index = LINES[line].index(to_stop)
  # determine the direction of the array
  if from_index < to_index
    @trip_array = LINES[line][from_index..to_index]
    # remove the last item from the array, as it will be the same as to_stop
    # I could also use ... instead of .. as an exclusive array
    @trip_array.pop
    @trip_array.shift # removes the first item as that is the from_stop
  else
    @trip_array = LINES[line][to_index..from_index].reverse
    @trip_array.pop
    @trip_array.shift
  end
  @trip_array
end

# calculate distance between indexes
def single_trip_distance (from_stop, line, to_stop)
  from_index = LINES[line].index(from_stop)
  to_index = LINES[line].index(to_stop)
  distance = (to_index - from_index)
  distance.abs # converts any negative integer to a positive
end

def plan_trip
  if line_exists(@from_line) == false
    p "#{@from_line} does not exist!"
    return
  elsif line_exists(@to_line) == false
    p "#{@to_line} does not exist!"
    return
  elsif stop_exists(@from_stop, @from_line) == false
    p "There is no #{@from_stop} on the #{@from_line}!"
    return
  elsif stop_exists(@to_stop, @to_line) == false
    p "There is no #{@to_stop} on the #{@to_line}!"
  end
  if @from_stop == @to_stop
    p "Surely you can walk?"
    return
  end
  if @from_line == @to_line
    # if the line is the same, simply run each method once
    distance = single_trip_distance(@from_stop, @from_line, @to_stop)
    stops = single_trip_array(@from_stop, @from_line, @to_stop)
    message = "Board the #{@from_line} at #{@from_stop} station, travel #{distance} stops through #{stops.join(", ")} until you arrive at #{@to_stop} station."
  else
    # if we're running two lines, to_stop on trip one and from_stop on trip two is always Union Square
    distance1 = single_trip_distance(@from_stop, @from_line, "Union Square")
    stops1 = single_trip_array(@from_stop, @from_line, "Union Square")
    distance2 = single_trip_distance("Union Square", @to_line, @to_stop)
    stops2 = single_trip_array("Union Square", @to_line, @to_stop)
    message = "Board the #{@from_line} at #{@from_stop} station, travel #{distance1} stops through #{stops1.join(", ")} into Union Square. Get off here and jump on the #{@to_line}. Travel #{distance2} more stops through #{stops2.join(", ")} into #{@to_stop} station."
  end
  p message
end

plan_trip
#
# require 'pry'
# binding.pry
