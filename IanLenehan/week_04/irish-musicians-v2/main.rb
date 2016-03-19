require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Musician < ActiveRecord::Base
  has_many :albums, dependent: :destroy
end

class Album < ActiveRecord::Base
  belongs_to :musician
end

get '/' do
  erb :home
end

get '/musicians' do
  @musicians = Musician.all
  erb :musicians_index
end

get '/musicians/new' do
  erb :musicians_new

end

post 'musicians' do
  musician = Musician.new
  musician.name = params[:name]
  musician.genre = params[:genre]
  musician.image = params[:image]
  musician.video = params[:video]
  musician.save
  redirect "musicians"
end



get '/musician/:id' do
  @musician = Musician.id
end
