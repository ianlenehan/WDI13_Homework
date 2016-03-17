require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/mathematicians' do
  @mathematicians = db_query "SELECT * FROM mathematicians"
  erb :mathematicians
end

get '/mathematicians/new' do
  erb :mathematicians_new
end

post '/mathematicians' do
  query = %% INSERT INTO mathematicians (name, circa, fame, link_url, link_title, img) VALUES
   ("#{params["name"]}",
   "#{params["circa"]}",
   "#{params["fame"]}",
   "#{params["link_url"]}",
   "#{params["link_title"]}",
   "#{params["img"]}") %
  db_query query
  redirect to '/mathematicians'
end

get '/mathematicians/:id' do
  @mathematician = db_query "SELECT * FROM mathematicians WHERE (id = #{params[:id]})"
  erb :mathematicians_show
end

get '/mathematicians/:id/edit' do
  @mathematician = db_query "SELECT * FROM mathematicians WHERE (id = #{params[:id]})"
  erb :mathematicians_edit
end

post '/mathematicians/:id' do
  query = %% UPDATE
    mathematicians
  SET
    name = "#{params[:name]}",
    circa = "#{params["circa"]}",
    fame = "#{params["fame"]}",
    link_url = "#{params["link_url"]}",
    link_title = "#{params["link_title"]}",
    img = "#{params["img"]}"
  WHERE
    id = '#{params[:id]}'%
  db_query query
  redirect to "/mathematicians/#{params[:id]}"
end

get '/mathematicians/:id/delete' do
  db_query "DELETE FROM mathematicians WHERE id=#{params[:id]}"
  redirect to '/mathematicians'
end

def db_query(sql)
  puts sql
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  result = db.execute sql
  db.close
  result
end
