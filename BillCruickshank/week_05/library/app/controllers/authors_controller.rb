class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def show
    @author = Author.find params[:id]
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params
    redirect_to author
  end

  def edit
    @author = Author.find params[:id]
  end

  def update
    author = Author.update params[:id], author_params
    redirect_to author
  end

  def destroy
    Author.destroy params[:id]
    redirect_to authors_path
  end

  private
  def author_params
    params.require(:author).permit(:name, :date_of_birth, :genre, :image)
  end
end
