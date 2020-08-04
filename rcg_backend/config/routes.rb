Rails.application.routes.draw do

  namespace :api do 
    namespace :v2 do 
      resources :characters
      resources :players
    end 
  end 

end
