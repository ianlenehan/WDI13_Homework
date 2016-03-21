require 'pry'

@bases = ['a', 'c', 'g', 't', 'u']

def make_counter
  counter = {}
  @bases.each { |b| counter[b] = 0}
  counter[:nucs?] = true
  counter
end

def nucleotides(string)
  counter = make_counter
  string.chars.each do |l|
    if counter[l].nil?
      counter[:nucs?] = false
    else
      counter[l] += 1 unless counter[l].nil?
    end
  end
  counter
end

def get_user_input(message)
  print "#{message} : "
  gets.chomp.downcase
end

def display_counter(counter)
  @bases.each do |b|
    puts "I counted #{counter[b]} of the base #{b}"
  end
  if counter[:nucs?]
    puts "the string was all nucleotides"
  else
    puts "there were non nucleotides in the string"
  end
end

def input_cycle
  string = get_user_input("Enter a string to count nucleotides in")
  counter = nucleotides string
  display_counter(counter)
end

input_cycle
