Rails.application.routes.draw do

  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new'
  get '/oceans/:id' => 'oceans#show', :as => 'ocean'
  post '/oceans' => 'oceans#create'
  post '/oceans/:id/delete' => 'oceans#destroy', :as => 'ocean_delete'
  get '/oceans/:id/edit' => 'oceans#edit', :as => 'ocean_edit'
  post '/oceans/:id' => 'oceans#update'

end
