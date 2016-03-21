class RpsController < ApplicationController

  def home
  end

  def result
    case params["move"]
    when 'Rock'
      @message = "You played Rock. The computer plays Scissors."
    when 'Paper'
      @message = "You played Paper. The computer plays Rock."
    when 'Scissors'
      @message = "You played Scissors. The computer plays Paper."
    else
      puts "shit"
    end
    @message << " Wait, what the hell just happened?"
    render :result
  end

end
