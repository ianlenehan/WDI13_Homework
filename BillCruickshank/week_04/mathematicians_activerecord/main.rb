require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

class Mathematician < ActiveRecord::Base
end

get '/' do
  redirect to "/mathematicians"
end

get '/mathematicians' do #read all
  @mathematicians = Mathematician.all
  erb :mathematicians_index
end

get '/mathematicians/new' do #create one - view + controller
  erb :mathematicians_new
end

post '/mathematicians' do #create one - model
  m = Mathematician.create({
    :name => params["name"],
    :circa => params["circa"],
    :fame => params["fame"],
    :link_url => params["link_url"],
    :link_title => params["link_title"],
    :img => params["img"]
  })
  m.save
  redirect to "mathematicians/#{ m.id }"
end

get '/mathematicians/:id' do #read one
  @mathematician = Mathematician.find params[:id]
  erb :mathematicians_show
end

get '/mathematicians/:id/edit' do #update - view + controller
  @mathematician = Mathematician.find params[:id]
  erb :mathematicians_edit
end

post '/mathematicians/:id' do #update - model
  m = Mathematician.find params[:id]
  m.update({
    :name => params["name"],
    :circa => params["circa"],
    :fame => params["fame"],
    :link_url => params["link_url"],
    :link_title => params["link_title"],
    :img => params["img"]
  })
  m.save
  redirect to "/mathematicians/#{params[:id]}"
end

get '/mathematicians/:id/delete' do #delete, but what should this look like? not a get...
  m = Mathematician.find params[:id]
  m.destroy
  redirect to '/mathematicians'
end
