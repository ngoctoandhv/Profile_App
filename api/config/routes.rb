Rails.application.routes.draw do
  root to: "admin/dashboard#index"

  get "admin" => "admin/dashboard#index"

  devise_for :users
  devise_scope :user do
    get "signin" => "devise/sessions#new"
    post "signin" => "devise/sessions#create"
    delete "signout" => "devise/sessions#destroy"
  end

  resources :posts
  resources :categories

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  get "up" => "rails/health#show", as: :rails_health_check
end
