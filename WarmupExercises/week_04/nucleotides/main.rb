def counter(string)
  string.chars.each do |c|
    if @valid.include?(c)
      @counts[c] += 1
    else
      @msg << "#{c} is not a valid nucleotide\n"
    end
  end
end

def results
  @counts.each do |k,v|
    puts "#{k} appears #{v} time#{plural(v)}in the strand\n"
  end
end

def plural(num)
  if (num > 1) || (num == 0)
    return "s "
  else
    return " "
  end
end

@valid = %w(A C G T)

@counts = {
  "A" => 0,
  "C" => 0,
  "G" => 0,
  "T" => 0
}

@msg = ""

puts "Give me a strand of nucleotides"
nuc = gets.chomp
counter(nuc)
results
puts @msg
