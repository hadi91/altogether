class ContactController < ApplicationController
  def index
    @contact = Contact.new(params[:contact])
    @disable_product_list = true
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    respond_to do |format|
      if @contact.deliver
        @contact = Contact.new
        format.html { render 'index'}
        format.js {flash.now[:success] = @message = "Thank you for your message. We'll get back to you soon!" }
      else
        format.html { render 'index'}
        format.js {flash.now[:danger] = @message = "There were some errors in the field. Pls try again." }
      end
    end
  end
end
