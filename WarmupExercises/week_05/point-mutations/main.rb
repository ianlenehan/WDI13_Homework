require 'pry'

class DNA

  attr_accessor :strand

  def initialize(strand)
    @strand = strand
  end

  def hamming_distance(other_strand)
    diff = 0
    @strand.chars.each_with_index do |v, i|
      if @strand[i] != other_strand[i] && other_strand[i]
        diff += 1
      end
    end
    return "The hamming distance is #{diff}."
  end
end

dna = DNA.new("GACGACGGCAGCGACA").hamming_distance("GTACGTGCTGATGCTA")

puts dna
