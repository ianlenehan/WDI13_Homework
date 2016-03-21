require 'pry'
require 'sinatra'
require 'sinatra/reloader'

require 'httparty'

get "/" do
  erb :home

end



get "/movies" do


  # Get data from form
  @movie_title = case params[:movie_title]
  when nil then "Satantango"
  when "" then "Satantango"
  else params[:movie_title]
  end


  # Get data object from OMDB
  @data = HTTParty.get ("http://omdbapi.com?s=" + @movie_title)

  # binding.pry

  # binding.pry
  # Retrieve data from object

  # binding.pry
  if @data["Search"].size == 1
    redirect "/movies/#{@data["Search"][0]["imdbID"]}"
  else
    erb :movies
  end
end


get "/movies/:id" do

  # Could do IMDB id

  # This is working (even though "title=" hasn't been specified in the movies.erb) because Ruby is treating eveything as Title?? ")
  @id = params[:id]



  @data = HTTParty.get ("http://omdbapi.com?i=" + @id)


  erb :movie_single

end



get "/first" do
  # Get data from form
  @movie_title = case params[:movie_title]
  when nil then "Satantango"
  else params[:movie_title]
  end


  # Get data object from OMDB
  @data = HTTParty.get ("http://omdbapi.com?s=" + @movie_title)


  # Retrieve data from object
  @first_movie = @data["Search"][0]
  @first_movie_title = @first_movie["Title"]
  @first_movie_year = @first_movie["Year"]
  @first_movie_poster = @first_movie["Poster"]

  erb :first

end
