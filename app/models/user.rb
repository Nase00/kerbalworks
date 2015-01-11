class User < ActiveRecord::Base
  has_many :ships, foreign_key: "pilot_id"
  has_secure_password

	before_save { self.email = email.downcase }
  validates :name,  presence: true, length: { minimum: 3, maximum: 20 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
end
