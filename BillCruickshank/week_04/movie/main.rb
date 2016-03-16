require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/search' do
  @search = params[:search]
  @results = HTTParty.get "http://omdbapi.com?t=#{@search}"
  @poster_src = @results["Poster"]
  @poster = "<img src=#{ @poster_src } alt=#{@poster_src}>"
end

get '/title' do

end
