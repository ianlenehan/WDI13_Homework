def score(word)

  sum = 0
  
  word.downcase.chars.each do |letter|
    @values.each do |k,v|
      if v.include?(letter)
        sum += k
      end
    end
  end
  sum
end

@values = {
    1 => %w(a e i o u l n r s t),
    2 => %w(d g),
    3 => %w(b c m p),
    4 => %w(f h v w y),
    5 => %w(k),
    8 => %w(j x),
    10 => %w(q z)
}

puts 'Welcome to scrabble - enter a word'
word = gets.chomp
puts score(word)
