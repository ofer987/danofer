Rails.application.routes.draw do
  resources :presentations, only: [:index, :show]

  get 'curriculum/index'

  root 'curriculum#index'
end
