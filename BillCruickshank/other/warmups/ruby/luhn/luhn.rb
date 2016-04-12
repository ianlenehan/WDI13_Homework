require 'pry'

class Luhn
  attr_accessor :number

  def initialize number
    @number = number
  end

  def odds_processor d
    result = 2*d
    result -= 9 if result>9
    result
  end

  def luhn_sum
    digits = number.to_s.chars.map {|d| d.to_i}.reverse
    sum = 0
    digits.each_with_index do |d, i|
      if i.even?
        sum += d
      else
        sum += odds_processor d
      end
    end
    sum % 10
  end

  def valid?
    self.luhn_sum == 0
  end

  def add_check_digit
    @number = @number*10 + (10 - Luhn.new(@number*10).luhn_sum)
  end
end

binding pry
