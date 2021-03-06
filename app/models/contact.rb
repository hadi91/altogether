class Contact < MailForm::Base
  attribute :name,  :validate => true
  attribute :email, :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :contact_number, :validate => /\A[+-]?\d+\z/
  attribute :message
  attribute :nickname, :captcha => true

  def headers
    {
      :subject => "Altogether Enquiry",
      :to => "letsget@altogether.sg",
      :from => %("#{name}" <#{email}>)
    }
  end
end
