Rails.application.routes.draw do
  resources :presentations, only: [:index, :show]
  resources :curriculum, only: :index
  resources :case_studies, only: :index

  root 'curriculum#index'
end
