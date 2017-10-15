class PagesController < ApplicationController
  def home
  end

  def products
  end

  def about
    @disable_product_list = true
  end

  def contact
    @disable_product_list = true
  end
end
