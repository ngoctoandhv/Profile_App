class Api::V1::PostsController < ApplicationController
  # before_action :set_post, only: %i[ show update destroy ]
  include Rails.application.routes.url_helpers

  # GET /posts
  def index
    @posts = Post.order(created_at: :desc).includes(:image_attachment)

    posts_with_images = @posts.map do |post|
      if post.image.attached?
        post.as_json.merge(image_url: url_for(post.image))
      else
        post.as_json.merge(image_url: nil)
      end
    end

    render json: posts_with_images
  end

  # GET /posts/1
  # def show
  #   render json: @post
  # end

  # POST /posts
  # def create
  #   @post = Post.new(post_params)

  #   if @post.save
  #     render json: @post, status: :created, location: api_v1_post_url(@post)
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /posts/1
  # def update
  #   if @post.update(post_params)
  #     render json: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /posts/1
  # def destroy
  #   @post.destroy!
  # end

private
  # Use callbacks to share common setup or constraints between actions.
  # def set_post
  #   @post = Post.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  # def post_params
  #   params.require(:post).permit(:title, :body)
  # end
end
