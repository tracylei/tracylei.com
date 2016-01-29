class CommentsController < ApplicationController

	def index
		#retrieve associated post
		post = Post.find(params[:id])
		comment = post.comments.create(comment_params)
		#respond with both since comment is a nested resource
		#json will only return last obj
		respond_with post, comment
	end

	private
	def comment_parmas
		params.require(:comment).permit(:body)
	end

end
