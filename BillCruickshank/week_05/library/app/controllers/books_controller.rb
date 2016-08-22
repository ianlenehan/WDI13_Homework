class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find params[:id]
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create book_params
    redirect_to book
  end

  def edit
    @book = Book.find params[:id]
  end

  def update
    book = Book.update params[:id], book_params
    redirect_to book
  end

  def destroy
    Book.destroy params[:id]
    redirect_to books_path
  end

  private
  def book_params
    params.require(:book).permit(:title, :pub_date, :cover, :author_id)
  end
end
