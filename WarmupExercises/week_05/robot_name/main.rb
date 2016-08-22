require 'pry'

class Robot
  attr_accessor :name

  def initialize
    generate_name
    @instruction_count = 1
    @created_time = Time.now
  end

  def generate_name
    @boot_time = Time.now
    @name = "#{generate_letters}-#{generate_numbers}"
  end

  def generate_numbers
    numbers = (1..9).to_a
    n = numbers.sample(2).join
  end

  def generate_letters
    letters = ("A".."Z").to_a
    l = letters.sample(2).join
  end

  def reset_name
    instructions
    generate_name
  end

  def timers
    @time_since_created = (Time.now - @created_time).round(2)
    @time_since_boot = (Time.now - @boot_time).round(2)
    puts "This robot was created #{@time_since_created} seconds ago, and last booted #{@time_since_boot} seconds ago."
    instructions
  end

  def instructions
    @instruction_count += 1
  end

  def instruction_count
    puts @instruction_count
  end

end

larry = Robot.new

binding.pry
larry.name
larry.reset_name
larry.instruction_count
larry.timers
