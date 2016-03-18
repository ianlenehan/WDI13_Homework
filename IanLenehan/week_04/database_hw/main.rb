require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get '/' do
  erb :home
end

# INDEX
get '/musicians' do
  @musicians = query_db 'SELECT * FROM musicians'
  erb :musicians_index
end

post '/musicians' do
  query = "INSERT INTO musicians (name, genre, year_formed, image, video) VALUES ('#{params[:name]}', '#{params[:genre]}', '#{params[:year_formed]}', '#{params[:image]}', '#{params[:video]}')"
  query_db query
  redirect '/musicians'
end

get '/musicians/new' do
  erb :musicians_new
end

get '/musicians/:id' do
  @musician = query_db "SELECT * FROM musicians WHERE id = #{params[:id]}"
  erb :musicians_show
end

get '/musicians/:id/delete' do
  query_db "DELETE FROM musicians WHERE id = #{params[:id]}"
  redirect '/musicians'
end

get '/musicians/:id/edit' do
  @musician = query_db "SELECT * FROM musicians WHERE id = #{params[:id]}"
  erb :musicians_edit
end

post '/musicians/:id' do
  query = "UPDATE musicians SET name='#{params[:name]}', genre='#{params[:genre]}', year_formed='#{params[:year_formed]}', image='#{params[:image]}', video='#{params[:video]}' WHERE id=#{params[:id]}"
  query_db query
  redirect "/musicians/#{params[:id]}"
end

def query_db(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close
  result
end
