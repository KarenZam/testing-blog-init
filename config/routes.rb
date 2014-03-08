WhubBlog::Application.routes.draw do

  get ''      => 'blog#index', as: :blog
  get ':slug' => 'blog#show', as: :article

  resources :comments, :except => [ :new, :edit ], defaults: { format: :json }

  root 'blog#index'
end
