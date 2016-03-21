class NumberController < ApplicationController

  def home
  end

  def guessing
    @low = params["low"].to_i
    @high = params["high"].to_i
    if @low == @high
      redirect_to("/number/almost/#{@low}")
    else
      render :guessing
    end
  end

  def last_chance
    @value = params["value"].to_i
    render :last_chance
  end

end
