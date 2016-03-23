require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

get "/" do
  erb :home
end





# INDEX
get "/pokemon" do
  @pokemon_group = query_db "SELECT * FROM pokemon"

  erb :pokemon_index
end

# NEW
get "/pokemon/new" do
  erb :pokemon_new
end

# RECEIVE NEW
post "/pokemon" do
  query = "INSERT INTO pokemon (name, generation, type, image) VALUES ('#{params[:name]}', '#{params[:generation]}', '#{params[:type]}', '#{params[:image]}')"

  query_db query

  redirect "/pokemon"
end

# SHOW
get "/pokemon/:anything" do
  @pokemon_single = query_db "SELECT * FROM pokemon WHERE id = #{params[:anything]}"

  erb :pokemon_show
end

# DELETE
get "/pokemon/:anything/delete" do
  query_db "DELETE FROM pokemon WHERE id = #{params[:anything]}"
  redirect "/pokemon"
end

# EDIT
get "/pokemon/:anything/edit" do
  @pokemon_single = query_db "SELECT * FROM pokemon WHERE id = #{params[:anything]}"

  erb :pokemon_edit
end

# RECEIVE EDIT
post "/pokemon/:anything" do
  query = "UPDATE pokemon SET name='#{params[:name]}', generation='#{params[:generation]}', type='#{params[:type]}', image='#{params[:image]}' WHERE id = #{params[:anything]}"

  query_db query
  redirect "/pokemon/#{params[:anything]}"
end

# DB Helper function
def query_db(sql_command)
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  result = db.execute sql_command

  db.close

  result
end
