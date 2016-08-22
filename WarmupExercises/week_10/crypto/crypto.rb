class Crypto

    def initialize(str)
        @str = str
    end
    
    
    # Use gsub to 'normalize' the string (requirement: remove all punctuation and spaces - ie, all characters that aren't digits or alphabetic characters - and downcase). Props to Sam for pointing out that downcasing before calling gsub simplifies our regex.
    def normalize_plaintext
        # Downcase the string
        # .gsub takes two arguments - the pattern we want to match, and what we want to substitute in place of matches.
        # The regex [^a-z1-9] matches anything that isn't within the ranges a-z and 1-9.
        # Replace the matches (ie spaces, punctuation, underscores, hyphens) with "" (ie, remove them from the string)
        @str.downcase.gsub(/[^a-z1-9]/, "")
    end

    def size
        # We want to try to create a perfect square of characters. Take the length of the normalized string, find the square root of that, then round it up to the nearest whole number. 
        Math.sqrt(normalize_plaintext.length).ceil
    end

    def plaintext_segments
        # .scan returns an array of the matches. The regex says "find me between 1 and [square size] of anything and push that to an array". The scan method will continue finding matches (which will just be groups of any characters)  through to the end of the string and give us something like: [finet, henar, eyouh, appyl, ukeif, thati, syour, realn ame]
        normalize_plaintext.scan(/.{1,#{size}}/)
    end

    def ciphertext
        # Create an empty array and...
        cipher_text = []
        # ... for each of the segments in plaintext_segments...
        plaintext_segments.each do |segment|
            # ... grab each character in the segment, along with its index and...
            segment.chars.each_with_index do |letter, i|
                # ... if there is no i'th element in the ciphertext array, create one, and...
                cipher_text[i] ||= []
                # ...append the letter to that element
                cipher_text[i] << letter
            end
        end
        # Flatten the resulting array
    cipher_text.join
    end

    # Bill suggested some hectic stuff for the ciphertext method, using splats and zip. I think it was something along the following lines:

    # def ciphertext
    #     header, *row = plaintext_segments.map {|segment| segment.split("")}
    #     ciphertext = header.zip(*row).join
    # end

    def normalize_ciphertext
        # Go through the ciphertext string and put a space between every 5th character.
        ciphertext.scan(/.{1,5}/).join(" ")
    end

end

crypto = Crypto.new("Fine then. Are you happy, Luke? IF THAT IS YOUR REAL NAME!")

puts crypto.normalize_ciphertext
