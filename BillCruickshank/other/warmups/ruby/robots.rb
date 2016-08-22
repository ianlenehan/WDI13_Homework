require 'pry'

class Robot
  attr_accessor :name, :timers, :instruction_count

  @@names = [""]

  # def pnames
  #   p @@names
  # end

  def initialize()
    self.get_name
    @create_time = Time.now
    @boot_time = Time.now
    @instruction_count = 1
  end

  def get_name()
    letters = ('AA'..'ZZ').to_a
    numbers = ('000'..'999').to_a
    @name = ""
    while @@names.include?(@name)
      @name << letters.sample << numbers.sample
    end
    @@names.push(@name)
  end

  def reset()
    get_name
    @boot_time = Time.now
    @instruction_count += 1
  end

  def timers()
    t = Time.now
    @instruction_count += 1
    "#{t - @boot_time} since last boot, #{t- @create_time} seconds since creation"
  end
end

binding.pry
