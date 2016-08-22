require 'pry'

class Handshake
  attr_accessor :commands

  @@all_commands = [ "jump", "close your eyes", "double wink", "wink" ]

  def initialize string
    @string = string
  end

  def reverse?
    @string[0] == '0'
  end

  def commands
    array = []
    @@all_commands.each_with_index do |c, i|
      if @string[i+1] == '1'
        array.push(c)
      end
    end
    reverse? ? array.reverse : array
  end
end

handshake = Handshake.new "11001"
handshake.commands
binding.pry
