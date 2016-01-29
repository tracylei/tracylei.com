class PostsController < ApplicationController

	def index
		posts = Post.all
		respond_with(posts) do |format|
			format.json { render :json => posts.as_json}
		end
	end

	def create
		respond_with Post.create(post_params)
	end

	def show
		respond_with Post.find(params[:id])
	end

	private
	def post_params
		params.require(:post).permit(:title)
	end
end
