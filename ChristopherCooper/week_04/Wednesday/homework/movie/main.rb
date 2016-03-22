  require "pry"
  require "httparty"
  require "sinatra"
  require "sinatra/reloader"

  get "/" do
    "#{params[:title]}"
    erb :home
  end



  get "/movie" do
    @title = "#{params[:title]}"
    @result = HTTParty.get "http://omdbapi.com?t=#{@title}"
    @poster = @result["Poster"]
    erb :movie
  end


binding.pry
