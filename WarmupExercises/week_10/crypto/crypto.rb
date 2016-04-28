class Crypto

    def initialize(str)
        @str = str
    end

    def normalize_plaintext
        @str.downcase.gsub(/[^a-z1-9]/, "")
    end

    def size
        Math.sqrt(normalize_plaintext.length).ceil
    end

    def plaintext_segments
        normalize_plaintext.scan(/.{1,#{size}}/)
    end

    def ciphertext
        cipher_text = []
        plaintext_segments.each do |segment|
            segment.chars.each_with_index do |letter, i|
                cipher_text[i] ||= []
                cipher_text[i] << letter
            end
        end
    cipher_text.join
    end

    # Bill suggested some hectic stuff for the ciphertext method, using splats and zip. I think it was something along the following lines:

    # def ciphertext
    #     header, *row = plaintext_segments.map {|segment| segment.split("")}
    #     ciphertext = header.zip(*row).join
    # end

    def normalize_ciphertext
        ciphertext.scan(/.{1,5}/).join(" ")
    end

end

crypto = Crypto.new("Fine then. Are you happy, Luke? IF THAT IS YOUR REAL NAME!")
puts crypto.normalize_ciphertext
