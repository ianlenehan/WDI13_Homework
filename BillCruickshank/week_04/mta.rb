# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

@mta = {}

@mta["N"] = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
@mta["L"] = ["8th", "6th", "Union Square", "3rd", "1st"]
@mta["6"] = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


def get_user_selection(message)
  print message + " : "
  gets.chomp
end

def get_line
  line = get_user_selection("What line is the station on?")
  unless line == 'q' or not @mta[line].nil?
    puts "That's not a line. Try one of #{@mta.keys.join ', '}"
    puts "or, if you want to go back, q to quit"
    return get_line #yeah, work that stack, work it till the user makes the thing explode.
  end
  line
end

def get_station(line)
  station = get_user_selection("What is the name of the station?")
  unless station == 'q' or @mta[line].include? station
    puts "That's not a station I recognise on this line"
    puts "try one of #{@mta[line].join ', '}"
    puts " or if you want to go back, try q"
    station = get_user_selection("What is the name of the station?")
  end
  station
end

def get_line_station_pair
  line = get_line
  return 'q' if line == 'q'
  station = get_station(line)
  return get_line_station_pair if station == 'q'
  return [line, station]
end

def get_journey_start_and_destination
  puts "What station are you starting you journey at"
  puts "and on what line?"
  start = get_line_station_pair
  return "q" if start == 'q'
  puts "Where are you going?"
  destination = get_line_station_pair
  return get_journey_start_and_destination if destination == 'q'
  [start, destination]
end

def line_segment(line_name, station1, station2)
  leg = {
    :line => line_name,
    :start => station1,
    :finish => station2
  }
  i1 = @mta[line_name].index station1
  i2 = @mta[line_name].index station2
  stations = @mta[line_name]
  if i2 < i1
    stations.reverse!
    i1 = stations.size - i1 - 1 #maps 0 to size-1 and vice versa
    i2 = stations.size - i1 - 1
  end
  leg[:stations] = stations.each_with_index.select {|s, i| i1 < i and i < i2}.map {|p| p[0]}
  leg
end

def journey(line_name1, station1, line_name2, station2)
  if line_name1 == line_name2
    legs = [line_segment(line_name1, station1, station2)]
  else
    legs = [line_segment(line_name1, station1, "Union Square"),
            line_segment(line_name2, "Union Square", station2)]
  end
  legs.select {|l| l[:start] != l[:finish]}
end

def print_one_leg(leg)
  puts "This leg of the journey is on line #{leg[:line]}"
  puts "The station you start at is #{leg[:start]}."
  if leg[:stations].size > 0
    puts "You have #{1 + (leg[:stations].size)} stops"
    puts "and you pass through"
    puts "#{leg[:stations].join ', '}"
  else
    puts "and its just a short hop"
  end
  puts "before arriving at #{leg[:finish]}"
end

def journey_summary(legs)
  if legs.empty?
    puts "Your journey is utterly trivial, you don't need me."
    return
  elsif legs.size == 1
    puts "Your journey is just on one line"
    return
  end
  length_of_journey = legs.map{|l| l[:stations].size+1 }.reduce :+
  puts "You begin your journey at #{legs.first[:start]} on line #{legs.first[:line]}"
  puts "and end at station #{legs.last[:finish]} on line #{legs.last[:line]}."
  puts "There are a total of #{length_of_journey} stops."
end

def print_journey(legs)
  journey_summary(legs)
  legs.each_with_index do |l, i|
    puts "Change from line #{legs[i-1][:line]} to #{l[:line]}" if i< 0
    print_one_leg l
  end
end

def journey_planner
  input = get_journey_start_and_destination
  return nil if input == 'q'
  start_line, start_station = input.first
  finish_line, finish_station = input.last
  legs = journey(start_line, start_station, finish_line, finish_station)
  print_journey(legs)
end

journey_planner
