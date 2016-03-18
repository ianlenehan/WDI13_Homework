# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10


def letter_score(letter)
  case letter
  when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'
    1
  when 'D', 'G'
    2
  when 'B', 'C', 'M', 'P'
    3
  when 'F', 'H', 'V', 'W', 'Y'
    4
  when 'K'
    5
  when 'J', 'X'
    8
  when 'Q', 'Z'
    10
  end
end

def letter_score_modified(letter, index, double_indices, triple_indices)
  ls = letter_score letter.upcase
  if triple_indices.include?(index)
    3*ls
  elsif double_indices.include?(index)
    2*ls
  else
    ls
  end
end

def word_score(ws)
  ws[:multiplier] * ws[:word].chars.each_with_index.map { |l, i|
    letter_score_modified(l, i, ws[:doubles], ws[:triples])  }.reduce(:+)
end

def get_index_list(message)
  puts message
  print "(ie '1, 3' tells me that the first and third letters are on doubles) : "
  gets.strip.split(',').map { |s| (s.to_i) - 1 }
end

def get_multiplier
  puts "Are you on a Double or Triple word score?"
  print "(D, T, or anything else for no) : "
  string = gets.chomp.downcase
  if string == 'd'
    2
  elsif string == 't'
    3
  else
    1
  end
end

def get_word_and_stuff
  print "Gimme a word (or q to quit) : "
  word = gets.chomp
  return nil if word == 'q'
  double_indices = get_index_list "Gimme the positions of letters that are on double letter scores."
  triple_indices = get_index_list "Gimme the positions of letters that are on triple letter scores."
  multiplier = get_multiplier
  return {
    :word => word,
    :doubles => double_indices,
    :triples => triple_indices,
    :multiplier => multiplier
  }
end

def input_cycle
  word_stuff = get_word_and_stuff
  p word_stuff
  while word_stuff != nil
    puts "That scores #{word_score word_stuff} in scrabble"
    word_stuff = get_word_and_stuff
  end
  puts "Yeah, nice, cya"
end

input_cycle
