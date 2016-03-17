require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/fail' do
  @search = params[:search]
  @message = "I didn't find anything for #{@search}"
  erb :home
end

get '/search' do
  @search = params[:search]
  @result_array = HTTParty.get("http://omdbapi.com?s=#{@search}")["Search"]
  if @result_array.nil?
    redirect to("/fail?search=#{@search}")
    break
  elsif @result_array.size == 1
    title = @result_array[0]["Title"]
    redirect to("/title?title=#{title}")
    break
  end
  @list = @result_array.map {|r| make_movie_li(r)}.reduce :+
  erb :results
end





get '/title' do
  @title = params[:title]
  @results = HTTParty.get "http://omdbapi.com?t=#{@title}"
  @poster_src = @results["Poster"]
  @poster = "<img src=#{ @poster_src } alt=#{@poster_src}>"
  erb :results
end

def make_movie_li(object)
  @title = object["Title"]
  "<li><a href='/title?title=#{title}'>#{title}</a></li>"
end
