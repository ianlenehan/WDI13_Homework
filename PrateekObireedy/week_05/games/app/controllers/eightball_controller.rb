class EightballController < ApplicationController
  def input
  end

  def result
    answers = {
      1 => "It is certain",
      2 => "it is decidedly so",
      3 => "Without a doubt",
      4 => "Yes, definately",
      5 => "You may rely on it",
      6 => "As I see it, yes",
      7 => "Most likely",
      8 => "Outlook looks good",
      9 => "Yes",
      10 => "signs point to yes",
      11 => "Reply hazy try again",
      12 => "Ask again later",
      13 => "Better not tell you now",
      14 => "cannot predict now",
      15 => "concentrate and ask again",
      16 => "Don't count on it",
      17 => "My reply is no",
      18 => "my sources say no",
      19 => "Outlook not so good",
      20 => "very doubtful",
    };
    value = Random.rand(19+1)
    @ans = answers[value]
  end
end
