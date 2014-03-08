class CommentsController < ApplicationController
  before_action :is_authenticated?

  def create
    comment = if params[:reply_to] && reply_to = Comment.find(params[:reply_to])
      reply_to.comments.new( comment_params )
    elsif article = Article.find( params[:article_id] )
      article.comments.new( comment_params )
    end

    if comment
      comment.user = current_user
      comment.save
    end
  end

  def update
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(
      :body,
      :reply_to
    )
  end
end