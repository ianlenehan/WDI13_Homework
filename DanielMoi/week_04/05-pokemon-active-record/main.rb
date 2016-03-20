require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

# Allow Active Record to access database
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.db"
)

# Create a database object using Active Record
class Pokemon < ActiveRecord::Base
end

# Because Active Record looks for Pokemons...
Pokemon.table_name = :pokemon

# 1. Route = HOME
get "/" do
  erb :home
end

# 1. Route = INDEX
get "/pokemon" do
  @pokemon_group = Pokemon.all
  erb :pokemon_index
end

# 2. Route = NEW
get "/pokemon/new" do
  erb :pokemon_new
end

# 2. Route = RECEIVE NEW
post "/pokemon" do
  pokemon = Pokemon.new
  pokemon.name = params[:name]
  pokemon.generation = params[:generation]
  pokemon.pokemontype = params[:pokemontype]
  pokemon.image = params[:image]
  pokemon.save
  redirect "/pokemon"
end

# 3. Route = READ single pokemon
get "/pokemon/:id" do
  @pokemon_single = Pokemon.find params[:id]
  erb :pokemon_show
end

# 4. Route = DELETED single pokemon
get "/pokemon/:id/delete" do
  pokemon = Pokemon.find params[:id]
  pokemon.destroy
  redirect "/pokemon"
end

# 5. Route = UPDATE single pokemon
get "/pokemon/:id/edit" do
  @pokemon_single = Pokemon.find params[:id]
  erb :pokemon_edit
end

# 6. Route = receive UPDATE single pokemon
post "/pokemon/:id" do
  pokemon = Pokemon.find params[:id]
  pokemon.name = params[:name]
  pokemon.generation = params[:generation]
  pokemon.pokemontype = params[:pokemontype]
  pokemon.image = params[:image]
  pokemon.save

  redirect "/pokemon/#{params[:id]}"
end
