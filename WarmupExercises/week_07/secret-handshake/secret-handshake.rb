class SecretHandshake

    attr_reader :digits
    def initialize(decimal)
        # Because we want to capture any invalid number, we'll wrap our variable declaration in a "begin-end" block with a "rescue" clause to capture those exceptions.
        begin
            # We want to take a FixNum entered by the user and convert it to a string that is a binary representation of the FixNum by calling the to_s method and passing in 2 as the base (eg "binary").
            # We then want to reverse those characters, since we/binary will be working from right to left.
            # We then want to split the string into an array and 'collect' each element, passing them to the to_i method to convert them to integers.
            @digits = decimal.to_s(2).reverse.chars.collect(&:to_i)
        rescue ArgumentError
            # Ruby will raise an exception (ArgumentError) if we try to pass a string into the to_s function with an argument (eg 'to_s(2)'). We want to 'rescue' the program from that exception and set @digits to 0.
            @digits = 0
        end
    end

    def commands
        # Start off with an empty array. We'll be returning this array later
        handshake = []
        # We only care about the number of digits that we have signals for, so lets take the length of the signals array and, for each number, check to see if the corresponding element in our @digits array is == 1.
        signals.length.times do |index|
            if @digits[index] == 1
                # If it is, append the signal to the handshake array.
                handshake << signals[index]
            end
        end

        if digits[4] == 1
            # If the (reversed) binary has a length of 5 (remember, our arrays are zero indexed - ie digits[4]), and the value of the fifth element is 1 (eg 10000), reverse the handshake array and return that as the 'commands'
            handshake.reverse
            # If the handshake array isn't empty (eg, the number wasn't 0 or invalid), the return the handshake array, otherwise tell them that the number wasn't a valid number.
        else
            # If we don't have any elements in our handshakes array, we know that the number was either '0' or not a valid number (see our rescue clause in the initialize method). So if it's empty, return a string telling them so rather than the handshake array itself.
            !handshake.empty? ? handshake : '0 or not a valid number'
        end
    end

    def signals
        ["wink", "double blink", "close your eyes", "jump"]
    end
end


puts "Enter a number to secretify"
number = gets.to_i
handshake = SecretHandshake.new(number)
puts handshake.commands
