require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get "/" do
  erb :home
end

get "/search" do
  @title = params[:title]
  @result = HTTParty.get "http://omdbapi.com?s=#{@title}"
  erb :results
end

get "/details/:a" do
  @imdb = params[:a]
  @search = HTTParty.get "http://omdbapi.com?i=#{@imdb}"
  @movie_title = @search["Title"]
  @movie_year = @search["Year"]
  @movie_plot = @search["Plot"]
  @movie_poster = @search["Poster"]
  @movie_director = @search["Director"]
  erb :details
end

# do |i| in @array
#   @array[i]
# end
