Rails.application.routes.draw do

  root 'pages#home'

  get 'invitations/cards'

  get 'invitations/envelopes'

  get 'non_edibles/shades'

  get 'non_edibles/fans'

  get 'non_edibles/candle'

  get 'edibles/tea'

  get 'edibles/jam'

  get 'edibles/honey'

  get 'edibles/cakes'

  get 'edibles/coffee'

  get 'edibles/macarons'

  get 'edibles/cookies'

  get 'pages/home'

  get 'pages/products'

  get 'pages/about'

  get 'pages/contact'



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
