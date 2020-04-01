class Api::UsersController < ApplicationController


    def show
      @user = User.find(params[:id])
      render json: @user
    end

    # def create
    #   @artwork = Artwork.new(artwork_params)
    #
    #   if @artwork.save
    #     render json: @artwork, status: :created
    #   else
    #     render json: @artwork.errors, status: :unprocessable_entity
    #   end
    # end

    def index
      @users = User.all
      render json: @users
    end

    # def update
    #   @user = User.find(params[:id])
    #
    #   if @artwork.update(artwork_params)
    #     render json: @artwork
    #   else
    #     render json: @artwork.errors, status: :unprocessable_entity
    #   end
    # end


  #   private
  #
  #   def artwork_params
  #     params.require(:artwork).permit(:title, :artist, :medium, :year, :collecting_institution, :location, :image_url, :thumbnail_url, :favorite)
  #   end
  #
  # end
end
